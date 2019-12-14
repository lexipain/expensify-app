import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { Provider } from "react-redux";

const store = configureStore();
store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 150000,
    createdAt: 400,
    note: "First gas bill of the year!"
  })
);
store.dispatch(
  addExpense({
    description: "Electricity bill",
    amount: 230000,
    createdAt: 300,
    note: "Electricity is expensive!"
  })
);

store.dispatch(
  addExpense({
    description: "Rent bill",
    amount: 320000,
    createdAt: 0,
    note: "Rent sucks!"
  })
);

// setTimeout(() => {
//   store.dispatch(filterByText("elec"));
// }, 4000);

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(400));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(filterByText("gas"));

// var state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
