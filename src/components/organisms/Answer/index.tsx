import React, { useReducer } from "react";

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
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>reset</button>
      <button onClick={() => { dispatch({ type: 'increment' }) }}>+</button>
      <button onClick={() => { dispatch({ type: 'decrement' }) }}>-</button>
      {console.log(state)}
    </div>
  );
}

export default Answer