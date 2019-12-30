import { createMuiTheme } from "@material-ui/core/styles";

export enum Color {
  midnightBlue = "#011a27",
  eveningBlue = "#063852",
  oceanBlue = "#196186",
  moonYellow = "#e6df44",
  sunshineOrange = "#f0810f",
  midnightGray = "#32393c",
  eveningGray = "#6c7b81"
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Color.midnightBlue
    },
    secondary: {
      main: Color.moonYellow
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
