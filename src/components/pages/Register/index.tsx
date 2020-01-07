import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { firebaseApp } from "../../../firebase";
import { useHistory } from "react-router";
import { Typography, Box, TextField } from "@material-ui/core";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  const handleClickSignUp = async () => {
    try {
      const userCredential = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push("/");
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
