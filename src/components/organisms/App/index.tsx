import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "../Top";
import Login from "../Login";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
