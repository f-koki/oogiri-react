import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Top from "../../pages/Top";
import Answer from "../../pages/Answer";
import { firebaseApp } from "../../../firebase";
import Register from "../../pages/Register";
import { createBrowserHistory } from "history";
import { Box } from "@material-ui/core";
import Header from "../../molecules/Header";

const Contents: React.FC = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.User | null>(null);
  const history = createBrowserHistory();

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
        <Header />
        <Box className="contents" m={2}>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/answer" component={Answer} />
          </Switch>
        </Box>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default Contents;
