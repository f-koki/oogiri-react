import React from "react";
import Header from "../../molecules/Header";
import Contents from "../Contents";
import Footer from "../../molecules/Footer";

const store = {
  name: "hoge",
}

export const RootContext = React.createContext(store)

const App: React.FC = () => {
  return (
    <RootContext.Provider value={store}>
      <div className="wrapper">
        <Header />
        <Contents />
        <Footer />
      </div>
    </RootContext.Provider>
  );
}

export default App;
