import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LoginDialog from "../../atoms/LoginDialog";
import { withRouter, useHistory } from "react-router";
import { firebaseApp } from "../../../firebase";
import firebase from "firebase";

const Header: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenLoginDialog, setIsOpenLoginDialog] = useState(false);
  const history = useHistory();

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
        history.push("/");
      })
      .catch(e => {
        alert("ログインできませんでした。時間を置いて再度お試しください。");
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
    history.push("/register");
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
          {!firebaseApp.auth().currentUser && (
            <Grid item>
              <Button
                onClick={handleShowLoginClick}
                variant="contained"
                aria-label="menu"
              >
                Login
              </Button>
            </Grid>
          )}
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
