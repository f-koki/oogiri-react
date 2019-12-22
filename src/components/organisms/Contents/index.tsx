import React from "react";
import { Route, Switch } from "react-router-dom";
import Top from "../Top";
import Login from "../Login";
import Answer from "../Answer";

type Props = {};

const Contents: React.FC<Props> = () => {
  return (
    <div className="contents">
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/answer" component={Answer} />
      </Switch>
    </div>
  );
};

export default Contents;
