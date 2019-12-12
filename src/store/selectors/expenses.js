export default (expenses, { text, startDate, endDate, sortBy }) => {
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
