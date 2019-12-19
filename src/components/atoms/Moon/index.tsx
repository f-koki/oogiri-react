import React from "react";
import classnames from "classnames";

type Props = {
  shape?: string;
  classname?: string;
};

const Moon: React.FC<Props> = ({ shape = "crescent", classname }) => {
  return <div className={classnames("Moon", shape, classname)}></div>;
};

export default Moon;
