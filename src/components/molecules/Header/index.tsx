import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LoginDialog from "../../atoms/LoginDialog";
import { RouteComponentProps, withRouter } from "react-router";

type Props = RouteComponentProps;

const Header: React.FC<Props> = props => {
  const handleLoginClick = () => {
    setIsOpenLoginDialog(true);
  };

  const [isOpenLoginDialog, setIsOpenLoginDialog] = useState(false);

  const handleLoginCancelClick = () => {
    setIsOpenLoginDialog(false);
  };

  const handleRegisterClick = () => {
    setIsOpenLoginDialog(false);
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
              onClick={handleLoginClick}
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
      />
    </AppBar>
  );
};

export default withRouter(Header);
