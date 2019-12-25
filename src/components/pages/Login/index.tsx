import React, { useState, useContext } from "react";
import { firebaseApp } from "../../../firebase";
import { History } from "history";
import { RootContext } from "../../App";
import Button from "@material-ui/core/Button";
import classnames from "classnames";
import { TextField } from "@material-ui/core";

type Props = {
  history: History;
};

const Login: React.FC<Props> = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { store, updateState } = useContext(RootContext);

  const handleClickLogin = async () => {
    try {
      const userCredential = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password);
      // TODO: user情報をクッキー or storeにセットする
      props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleClickSignUp = async () => {
    try {
      await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
      props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="Login">
      {!store.hoge && updateState("hoge", "hene")}
      <div>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="email" color="secondary" />
        </form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={e => {
            setEmail(e.currentTarget.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.currentTarget.value);
          }}
        />
        <Button
          onClick={handleClickLogin}
          className={classnames("Button", "login")}
          variant="outlined"
          color="secondary"
        >
          Login
        </Button>
        <Button
          onClick={handleClickSignUp}
          className={classnames("Button", "signup")}
          variant="outlined"
          color="secondary"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
