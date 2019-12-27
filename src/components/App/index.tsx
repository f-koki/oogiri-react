import React from "react";
import Header from "../molecules/Header";
import Contents from "../organisms/Contents";
import Footer from "../molecules/Footer";
import { ThemeProvider, Box } from "@material-ui/core";
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
      // <ThemeProvider theme={theme}>
      <RootContext.Provider
        value={{ store: this.state, updateState: this.updateState }}
      >
        <div className="wrapper">
          <Contents />
        </div>
      </RootContext.Provider>
      // </ThemeProvider>
    );
  }
}

export default App;
