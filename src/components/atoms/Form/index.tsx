import React from "react";
import classnames from "classnames";

type Props = {
  classname?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonMsg: string;
};

const Form: React.FC<Props> = ({ classname, onSubmit, buttonMsg }) => {
  return (
    <form className={classnames("Form", classname)} onSubmit={onSubmit}>
      <input type="text" />
      <button type="submit">{buttonMsg}</button>
    </form>
  );
};

export default Form;
