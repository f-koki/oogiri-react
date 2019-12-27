import React, { useState, useEffect, useReducer } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import Top from "../../pages/Top";
import Login from "../../pages/Login";
import Answer from "../../pages/Answer";
import { firebaseApp } from "../../../firebase";
import history from "./history";
import Register from "../../pages/Register";

const Contents: React.FC = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        setAuth(true);
        setUser(user);
      } else {
        setAuth(false);
        setUser(null);
      }
    });
  });

  return (
    <div className="contents">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/answer" component={Answer} />
        </Switch>
      </Router>
    </div>
  );
};

export default Contents;
