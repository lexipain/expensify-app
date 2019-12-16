import { editExpense, addExpense, removeExpense } from "../../actions/expenses";
import moment from "moment";

test("Should add new expense", () => {
  const expense = {
    description: "TestExpense",
    amount: 15000,
    createdAt: moment(),
    note: "TestNote"
  };

  const result = addExpense(expense);

  expect(result.expense).toHaveProperty("id");
  expect(result.expense.id.length).toBeGreaterThan(0);
});

test("Should return a correct action", () => {
  const id = "testId";
  const result = removeExpense(id);
  expect(result).toEqual({
    type: "REMOVE_EXPENSE",
    expenseId: "testId"
  });
});

test("Should edit expense", () => {
  const id = "SomeTestId";
  const expense = {
    description: "TestExpense",
    amount: 15000,
    note: "TestNote"
  };

  const result = editExpense(id, expense);
  const newObject = {
    type: "EDIT_EXPENSE",
    expenseId: id,
    data: expense
  };

  expect(result).toEqual(newObject);
});

test("Should setup expense object with default values", () => {
  const result = addExpense();
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
