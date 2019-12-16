import {
  sortBy,
  filterByText,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

const defaultReturnObject = filter => ({
  type: "APPLY_FILTER",
  filter: filter
});

test("Should generate set start date action", () => {
  const date = moment(0);
  const result = setStartDate(date);
  expect(result).toEqual(defaultReturnObject({ startDate: date }));
});

test("Should generate set end date action", () => {
  const date = moment(1);
  const result = setEndDate(date);
  expect(result).toEqual(defaultReturnObject({ endDate: date }));
});

test("Should generate filter by text action", () => {
  const text = "TestSort";
  const result = filterByText(text);
  expect(result).toEqual(defaultReturnObject({ text: text }));
});

test("Should generate sort by date action", () => {
  const sortBy = "date";
  const result = sortByDate(sortBy);
  expect(result).toEqual(defaultReturnObject({ sortBy: sortBy }));
});

test("Generic sortby should return filter action by parameter (date)", () => {
  const sortByKey = "date";
  const result = sortBy({ sortBy: sortByKey });
  expect(result).toEqual(
    defaultReturnObject({ sortBy: { sortBy: sortByKey } })
  );
});

test("Generic sortby should return filter action by parameter (amount)", () => {
  const sortByKey = "amount";
  const result = sortBy({ sortBy: sortByKey });
  expect(result).toEqual(
    defaultReturnObject({ sortBy: { sortBy: sortByKey } })
  );
});
