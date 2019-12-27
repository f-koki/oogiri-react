import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import classnames from "classnames";
import { firebaseApp } from "../../../firebase";
import { RouteComponentProps } from "react-router";
import { Typography, Box, TextField } from "@material-ui/core";

type Props = RouteComponentProps;

const Register: React.FC<Props> = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClickSignUp = async () => {
    try {
      const userCredential = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // userCredential.user
      props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box m={2} textAlign="center">
      <Typography variant="h3">会員登録</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Email"
        type="email"
        fullWidth
        required
        onChange={e => {
          setEmail(e.currentTarget.value);
        }}
      />
      <TextField
        margin="dense"
        id="password"
        label="Password"
        type="password"
        fullWidth
        required
        onChange={e => {
          setPassword(e.currentTarget.value);
        }}
      />
      <Button onClick={handleClickSignUp} variant="contained" color="primary">
        Sign Up
      </Button>
    </Box>
  );
};

export default Register;
