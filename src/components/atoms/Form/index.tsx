import React from "react";
import classnames from "classnames";
import { Button } from "@material-ui/core";

type Props = {
  classname?: string;
  onClick: () => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  buttonMsg: string;
};

const Form: React.FC<Props> = ({ classname, onClick, onChange, buttonMsg }) => {
  return (
    <div className={classnames("Form", classname)}>
      <input type="text" onChange={onChange} />
      <Button onClick={onClick} variant="contained">{buttonMsg}</Button>
    </div>
  );
};

export default Form;
