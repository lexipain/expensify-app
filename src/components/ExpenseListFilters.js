import React from "react";
import { connect } from "react-redux";
import { filterByText, sortBy } from "../actions/filters";
const ExpenseListFilters = props => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        value={props.filters.text}
        onChange={e => {
          props.dispatch(filterByText(e.target.value));
        }}
      />

      <select
        value={props.filters.sortBy}
        onChange={e => {
          props.dispatch(sortBy(e.target.value));
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
