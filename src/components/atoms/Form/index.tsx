import React from "react";
import classnames from "classnames";

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
      <button onClick={onClick}>{buttonMsg}</button>
    </div>
  );
};

export default Form;
