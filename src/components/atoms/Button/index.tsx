import React from 'react';
import classnames from 'classnames'

enum ButtonColor {
  Normal = "normal",
  Main = "main",
  Sub = "sub"
}

type Props = {
  color: ButtonColor,
  message: string
}

const hoge: React.FC<Props> = ({ color = ButtonColor.Normal, message }) => {
  return (
    <button className={classnames('Button', color)}>{message}</button>
  )
}