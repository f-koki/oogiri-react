import React from "react";
import { AppBar, Toolbar, Button, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          justify="space-between"
          style={{ alignItems: "center" }}
          container
          spacing={2}
        >
          <Grid item>
            <IconButton edge="start" aria-label="menu" color="secondary">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" aria-label="menu">
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
