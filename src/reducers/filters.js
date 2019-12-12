var filtersReducerDefaultSate = {
  text: "",
  sortBy: "",
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducerDefaultSate, action) => {
  switch (action.type) {
    case "APPLY_FILTER":
      return { ...state, ...action.filter };
    default:
      return state;
  }
};
