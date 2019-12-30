import React from "react";
import Contents from "../organisms/Contents";
import Footer from "../molecules/Footer";
import { ThemeProvider, Box, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";

type Props = {};

type Store = {
  hoge?: string;
};

type ContextProps = {
  store: Store;
  updateState: (key: string, value: any) => void;
};

export const RootContext = React.createContext({} as ContextProps);

class App extends React.Component<Props, Store> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  updateState = (key: string, value: any) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootContext.Provider
          value={{ store: this.state, updateState: this.updateState }}
        >
          <CssBaseline>
            <Contents />
          </CssBaseline>
        </RootContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;
