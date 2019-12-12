const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
