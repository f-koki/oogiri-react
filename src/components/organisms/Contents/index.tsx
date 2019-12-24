import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Top from "../Top";
import Login from "../Login";
import Answer from "../Answer";
import { firebaseApp } from '../../../firebase'

type Props = {};

const Contents: React.FC<Props> = () => {
  const [auth, setAuth] = useState<boolean>(false)
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        setAuth(true)
        setUser(user)
      } else {
        setAuth(false)
        setUser(null)
      }
    })
  })

  return (
    <div className="contents">
      <Switch>
        <Route
          exact path="/"
          render={() => auth ? <Top /> : <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/answer" component={Answer} />
      </Switch>
    </div>
  );
};

export default Contents;
