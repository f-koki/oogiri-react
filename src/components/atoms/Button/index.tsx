import React from 'react'
import classnames from 'classnames'

export enum ButtonColor {  
  Normal = "normal",
  Main = "main",
  Sub = "sub"
}

type Props = {
  color?: ButtonColor,
  message: string
}

const Button: React.FC<Props> = ({ color = ButtonColor.Normal, message }) => {
  return (
    <div className={classnames('Button', color)}>
      <button>{message}</button>
    </div>
  )
}

export default Button