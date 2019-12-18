import moment from "moment";
var filtersReducerDefaultSate = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

export default (state = filtersReducerDefaultSate, action) => {
  switch (action.type) {
    case "APPLY_FILTER":
      return { ...state, ...action.filter };
    default:
      return state;
  }
};
