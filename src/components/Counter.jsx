import React, { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button className="px-3 py-2 border-amber-300 bg-amber-200 rounded m-5" onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button className="px-3 py-2 border-amber-300 bg-amber-200 rounded m-5" onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
