import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#011a27"
    },
    secondary: {
      main: "#e6df44"
    }
  },
  overrides: {
    MuiFab: {
      root: {
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
        zIndex: 1000
      }
    }
  }
});

export default theme;
