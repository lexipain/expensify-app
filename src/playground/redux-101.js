import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count } = {}) => {
  if (count === store.getState().count) return;
  return {
    type: "SET",
    count: count
  };
};

///
/// 1. Reducers are pure functions.
/// They're only purpose is using the previous state and applying the new action to it, resulting in a new state.
/// 2. Never mutate the current state. Return a new state object ALWAYS.
///
const countReducer = (
  state = { count: 0 },
  { incrementBy = 1, decrementBy = 1, type, count } = {}
) => {
  switch (type) {
    case "INCREMENT":
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      return { count: state.count - decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET": {
      return { count: count };
    }
    default:
      return state;
  }
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState().count);
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));
