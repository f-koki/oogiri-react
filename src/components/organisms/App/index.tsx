import React from "react";
import Header from "../../molecules/Header";
import Contents from "../Contents";
import Footer from "../../molecules/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Contents />
        <Footer />
      </>
    );
  }
}

export default App;
