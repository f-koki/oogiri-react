import React from "react";
import { Route, Switch } from "react-router-dom";
import Top from "../Top";
import Login from "../Login";

type Props = {};

const Contents: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Contents;
