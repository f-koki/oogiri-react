import React, { useState, useContext, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Grid,
  Menu,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LoginDialog from "../../atoms/LoginDialog";
import { useHistory } from "react-router";
import { firebaseApp } from "../../../firebase";
import firebase from "firebase";
import Brightness3Icon from "@material-ui/icons/Brightness3";

type Props = {
  user?: firebase.User | null;
};

const Header: React.FC<Props> = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenLoginDialog, setIsOpenLoginDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
      .then(() =>
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
      )
      .then(() => setIsOpenLoginDialog(false))
      .then(() => history.push("/"))
      .catch(error => {
        alert("ログインできませんでした。時間を置いて再度お試しください。");
        alert(error.message);
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

  const handleMoonClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoonClose = () => {
    setAnchorEl(null);
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
          {!props.user ? (
            <Grid item>
              <Button
                onClick={handleShowLoginClick}
                variant="contained"
                aria-label="menu"
              >
                Login
              </Button>
            </Grid>
          ) : (
            <>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleMoonClick}
              >
                <Brightness3Icon color="secondary" />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMoonClose}
              >
                <MenuItem
                  onClick={() => {
                    history.push("/ogiri");
                    handleMoonClose();
                  }}
                >
                  大喜利会場へ
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleShowLoginClick();
                    handleMoonClose();
                  }}
                >
                  ログイン
                </MenuItem>
              </Menu>
            </>
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

export default Header;
