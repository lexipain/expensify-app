export const applyFilter = filter => ({
  type: "APPLY_FILTER",
  filter: filter
});

export const sortBy = value => applyFilter({ sortBy: value });
export const sortByDate = () => applyFilter({ sortBy: "date" });
export const sortByAmount = () => applyFilter({ sortBy: "amount" });
export const filterByText = (text = "") => applyFilter({ text: text });
export const setStartDate = (date = undefined) =>
  applyFilter({ startDate: date });
export const setEndDate = (date = undefined) => applyFilter({ endDate: date });
