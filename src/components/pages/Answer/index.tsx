import React, { useReducer } from "react";
import { Button, Paper } from "@material-ui/core";
import FloatingButton from "../../atoms/FloatingButton";

type Props = {};

const Answer: React.FC<Props> = () => {
  const initialState = { count: 0 }

  const init = (initialCount: number) => {
    return { count: initialCount }
  }

  const reducer = (state: { count: number }, action: any) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 }
      case 'decrement':
        return { ...state, count: state.count - 1 }
      case 'reset':
        return init(action.payload)
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="Answer">
      <Button color="secondary" variant="outlined" onClick={() => dispatch({ type: 'reset', payload: 0 })}>reset</Button>
      <Button color="secondary" variant="outlined" onClick={() => { dispatch({ type: 'increment' }) }}>+</Button>
      <Button color="secondary" variant="outlined" onClick={() => { dispatch({ type: 'decrement' }) }}>-</Button>
      <Paper className="count-display" variant="elevation">{state.count}</Paper>
      <FloatingButton onClick={()=>{}} />
    </div>
  );
}

export default Answer