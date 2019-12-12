import uuid from "uuid";

export const editExpense = (id, data) => ({
  type: "EDIT_EXPENSE",
  expenseId: id,
  data: data
});

export const removeExpense = expenseId => ({
  type: "REMOVE_EXPENSE",
  expenseId: expenseId
});

export const addExpense = ({
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
