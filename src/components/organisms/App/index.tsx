import React from "react";
import Header from "../../molecules/Header";
import Contents from "../Contents";
import Footer from "../../molecules/Footer";

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
      <RootContext.Provider
        value={{ store: this.state, updateState: this.updateState }}
      >
        <div className="wrapper">
          <Header />
          <Contents />
          <Footer />
        </div>
      </RootContext.Provider>
    );
  }
}

export default App;
