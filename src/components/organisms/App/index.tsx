import React from "react";
import Header from "../../molecules/Header";
import Contents from "../Contents";
import Footer from "../../molecules/Footer";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
