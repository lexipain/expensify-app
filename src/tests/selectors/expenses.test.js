import getExpenses from "../../selectors/expenses";
import moment from "moment";
import getDefaultExpenses from "../fixtures/expenses";

const expenses = getDefaultExpenses();

const filters = {
  text: "",
  startDate: undefined,
  endDate: undefined,
  sortBy: ""
};

test("Should filter by text value", () => {
  filters.text = "water";
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[2]]);
});

test("Should filter by StartDate", () => {
  filters.text = "";
  filters.sortBy = "date";
  filters.startDate = moment(0);
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("Should filter by EndDate", () => {
  filters.text = "";
  filters.startDate = undefined;
  filters.endDate = moment(0).subtract(1, "days");
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});

test("Should filter by StarDate and EndDate", () => {
  filters.startDate = moment(0).subtract(1, "days");
  filters.endDate = moment(0).add(1, "days");
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

test("Should sort by amount", () => {
  filters.startDate = undefined;
  filters.endDate = undefined;
  filters.sortBy = "amount";
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test("Should sort by date", () => {
  filters.startDate = undefined;
  filters.endDate = undefined;
  filters.sortBy = "date";
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
