import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid justify="space-between" container spacing={2}>
          <Grid item>
            <IconButton edge="start" aria-label="menu" color="secondary">
              <MenuIcon />
            </IconButton>
          </Grid>
          {/* <Grid item>
            <Typography variant="h6">Moon Ogiri</Typography>
          </Grid> */}
          <Grid item>
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
