import React from 'react'
import Button, { ButtonColor } from '../../atoms/Button'

class App extends React.Component {
  render() {
    return (<Button color={ButtonColor.Main} message="hoge" />)
  }
}

export default App