import reduce from "../../reducers/filters";
import moment from "moment";
import {
  sortBy,
  filterByText,
  sortByDate,
  setStartDate,
  setEndDate,
  sortByAmount
} from "../../actions/filters";

const defaultState = () => ({
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
});

test("Should setup default reducer values", () => {
  const state = defaultState();
  const result = reduce(undefined, { type: "@@INIT" });
  expect(result).toEqual(state);
});

test("Reduce state by date filter", () => {
  const state = defaultState();
  const result = reduce(state, sortByDate());
  state.sortBy = "date";
  expect(result).toEqual(state);
});

test("Reduce state by amount filter", () => {
  const state = defaultState();
  const result = reduce(state, sortByAmount());
  state.sortBy = "amount";
  expect(result).toEqual(state);
});

test("Reduce state by setStartDateFilter filter", () => {
  const state = defaultState();
  const result = reduce(state, setStartDate(moment(200)));
  state.startDate = moment(200);
  expect(result).toEqual(state);
});

test("Reduce state by setEndDate filter", () => {
  const state = defaultState();
  const result = reduce(state, setEndDate(moment(400)));
  state.endDate = moment(400);
  expect(result).toEqual(state);
});

test("Reduce state by text filter", () => {
  const state = defaultState();
  state.text = "NotThisText";
  const result = reduce(state, filterByText("TEST"));
  state.text = "TEST";
  expect(result).toEqual(state);
});

test("Reduce state by generic sort by filter", () => {
  const state = defaultState();
  state.sortBy = "date";
  const result = reduce(state, sortBy("name"));
  state.sortBy = "name";
  expect(result).toEqual(state);
});
