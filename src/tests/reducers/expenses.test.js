import { editExpense, removeExpense } from "../../actions/expenses";
import reduce from "../../reducers/expenses";
import getExpenses from "../fixtures/expenses";
import moment from "moment";

test("Should setup default reducer values", () => {
  const result = reduce(undefined, { type: "@@INIT" });
  expect(result).toEqual([]);
});

test("Reduce by adding expense", () => {
  const expenses = getExpenses();
  const expense = {
    id: "199",
    description: "Test",
    note: "Test 1",
    amount: 1000,
    createdAt: moment(0).valueOf()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const result = reduce(expenses, action);
  expect(result).toEqual([...expenses, expense]);
});

test("Reduce by removing expense", () => {
  const expenses = getExpenses();
  const result = reduce(expenses, removeExpense(expenses[1].id));
  const arr = expenses.filter(expense => expense.id != expenses[1].id);
  expect(result).toEqual(arr);
});

test("Reduce by editing expense", () => {
  const expenses = getExpenses();
  const expense = expenses[0];
  expense.description = "Something new!!!";
  const result = reduce(expenses, editExpense(expense.id, expense));
  expect(result).toEqual(expenses);
});

test("Reduce by editing expense with non-existing ID", () => {
  const expenses = getExpenses();
  const expense = expenses[0];
  expense.description = "Something new!!!";
  const result = reduce(expenses, editExpense("I dont exist", expense));
  expect(result).toEqual(expenses);
});
