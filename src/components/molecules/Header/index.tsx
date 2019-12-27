import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LoginDialog from "../../atoms/LoginDialog";
import { RouteComponentProps, withRouter } from "react-router";
import { firebaseApp } from "../../../firebase";
import firebase from "firebase";

type Props = RouteComponentProps;

const Header: React.FC<Props> = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenLoginDialog, setIsOpenLoginDialog] = useState(false);

  // 右上のログインボタン
  const handleShowLoginClick = () => {
    setIsOpenLoginDialog(true);
  };

  // ダイアログの中のログインボタン
  const handleDoLoginClick = () => {
    firebaseApp
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebaseApp.auth().signInWithEmailAndPassword(email, password);
      })
      .then(() => {
        setIsOpenLoginDialog(false);
      })
      .then(() => {
        props.history.push("/");
      })
      .catch(e => {
        alert("ログインできません");
        alert(e.message);
      });
  };

  // ダイアログの中のキャンセルボタン
  const handleLoginCancelClick = () => {
    setIsOpenLoginDialog(false);
  };

  // ダイアログの中の登録ボタン
  const handleRegisterClick = () => {
    setIsOpenLoginDialog(false);
    props.history.push("/register");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Grid
          justify="space-between"
          style={{ alignItems: "center" }}
          container
          spacing={2}
        >
          <Grid item>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              onClick={handleShowLoginClick}
              variant="contained"
              aria-label="menu"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
      <LoginDialog
        open={isOpenLoginDialog}
        onCancelClick={handleLoginCancelClick}
        onRegisterClick={handleRegisterClick}
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onLoginClick={handleDoLoginClick}
      />
    </AppBar>
  );
};

export default withRouter(Header);
