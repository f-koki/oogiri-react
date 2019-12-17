import React from "react";
import Form from '../../atoms/Form'

type Props = {};

type State = {};

export default class Login extends React.Component<Props, State> {
  render() {
    return (
      <div className="Login">
        <h1>ログイン画面</h1>
        <div>
          <p>ログインID</p>
          <Form method="post" />
        </div>
        <div>
          <p>パスワード</p>
          <Form method="post" />
        </div>
      </div>
    )
  }
}
