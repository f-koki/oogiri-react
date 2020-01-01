import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Top from "../../pages/Top";
import Answer from "../../pages/Answer";
import { firebaseApp } from "../../../firebase";
import Register from "../../pages/Register";
import { Box } from "@material-ui/core";
import Header from "../../molecules/Header";
import Ogiri from "../../pages/Ogiri";
import { Color } from "../../../style/theme";

const Contents: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(
    firebaseApp.auth().currentUser
  );

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  });

  return (
    <Box
      className="contents"
      style={{
        backgroundColor: Color.eveningBlue,
        color: Color.moonYellow
      }}
    >
      <BrowserRouter>
        <Header user={user} />
        <Box>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/answer" component={Answer} />
            <Route exact path="/ogiri" component={Ogiri} />
          </Switch>
        </Box>
        {/* <Footer /> */}
      </BrowserRouter>
    </Box>
  );
};

export default Contents;
