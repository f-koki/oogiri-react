import React from "react";
import Form from "../../atoms/Form";

type Props = {};

const Login: React.FC<Props> = () => {
  return (
    <div className="Login">
      <h1>ログイン画面</h1>
      <div>
        <p>ログインID</p>
        {/* <Form method="post" /> */}
      </div>
      <div>
        <p>パスワード</p>
        {/* <Form method="post" /> */}
      </div>
    </div>
  );
}

export default Login