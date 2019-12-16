import moment from "moment";
export default (expenses, { text, startDate, endDate, sortBy }) => {
  return expenses
    .filter(expense => {
      if (text.length > 0) {
        if (!expense.description.toLowerCase().includes(text.toLowerCase())) {
          return false;
        }
      }
      if (startDate) {
        if (moment(expense.createdAt).isBefore(startDate, "day")) {
          return false;
        }
      }

      if (endDate) {
        if (moment(expense.createdAt).isAfter(endDate, "day")) {
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
