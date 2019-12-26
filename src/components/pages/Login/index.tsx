import React, { useState, useContext } from "react";
import { firebaseApp } from "../../../firebase";
import { History } from "history";
import { RootContext } from "../../App";
import Button from "@material-ui/core/Button";
import classnames from "classnames";
import { TextField } from "@material-ui/core";
import { RouteComponentProps } from "react-router";

const Login: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
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
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        color="secondary"
      />
    </div>
  );
};

export default Login;
