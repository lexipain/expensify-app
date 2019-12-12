import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy }) => {
  return expenses
    .filter(expense => {
      if (text.length > 0) {
        if (!expense.description.toLowerCase().includes(text.toLowerCase())) {
          return false;
        }
      }
      if (typeof startDate === "number") {
        if (expense.createdAt < startDate) {
          return false;
        }
      }

      if (typeof endDate === "number") {
        if (expense.createdAt > endDate) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "amount":
          return a.amount < b.amount ? 1 : -1;
        case "date":
          return a.createdAt < b.createdAt ? 1 : -1;
        default:
          return;
      }
    });
};

const editExpense = (id, data) => ({
  type: "EDIT_EXPENSE",
  expenseId: id,
  data: data
});

const removeExpense = expenseId => ({
  type: "REMOVE_EXPENSE",
  expenseId: expenseId
});

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
});

const expensesReducerDefaultState = [];
var expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense]; // Array concat alternative.
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.expenseId;
      });
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.expenseId) {
          return {
            ...expense,
            ...action.data
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

const applyFilter = filter => ({
  type: "APPLY_FILTER",
  filter: filter
});

const sortByDate = () => applyFilter({ sortBy: "date" });
const sortByAmount = () => applyFilter({ sortBy: "amount" });
const filterByText = (text = "") => applyFilter({ text: text });
const setStartDate = (date = undefined) => applyFilter({ startDate: date });
const setEndDate = (date = undefined) => applyFilter({ endDate: date });

var filtersReducerDefaultSate = {
  text: "",
  sortBy: "",
  startDate: undefined,
  endDate: undefined
};

var filtersReducer = (state = filtersReducerDefaultSate, action) => {
  switch (action.type) {
    case "APPLY_FILTER":
      return { ...state, ...action.filter };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  var filteredExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(filteredExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Rent",
    amount: 10000,
    note: "Dispatching my expense!",
    createdAt: 1
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Coffee!",
    amount: 400220,
    note: "Buying to much coffee.",
    createdAt: 3
  })
);

const expenseThree = store.dispatch(
  addExpense({
    description: "Hot dog!",
    amount: 1500,
    note: "Love me some hot dogs.",
    createdAt: 2
  })
);
// store.dispatch(filterByText("coff"));
// store.dispatch(removeExpense(expenseOne.expense.id));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 50000 }));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(2));
// store.dispatch(setEndDate(2));
// store.dispatch(setEndDate());
