import React, { useState } from "react";
import { firebaseApp } from "../../../firebase";
import { History } from "history";

type Props = {
  history: History
};

const Login: React.FC<Props> = (props: Props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleClickLogin = async () => {
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password)
      props.history.push('/')
    } catch (error) {
      alert(error)
    }
  }

  const handleClickSignUp = async () => {
    try {
      await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      props.history.push('/')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="Login">
      <h1>ログイン画面</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={email} onChange={e => { setEmail(e.currentTarget.value) }} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={e => { setPassword(e.currentTarget.value) }} />
        <div onClick={handleClickLogin}>Login</div>
        <div onClick={handleClickSignUp}>Sign Up</div>
      </div>
    </div>
  );
}

export default Login