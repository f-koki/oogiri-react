import React from 'react'
import classnames from 'classnames'

type Props = {
  method: "get" | "post",
  classname?: string
}

const Form: React.FC<Props> = ({ method, classname }) => {
  return (
    <form method={method} className={classnames('Form', classname)}>
      <input type="text" />
    </form>
  )
}

export default Form