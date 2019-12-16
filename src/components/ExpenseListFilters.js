import React from "react";
import { connect } from "react-redux";
import { filterByText, sortBy } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import shortid from "shortid";
import { setStartDate, setEndDate } from "../actions/filters";
class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = focused => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="filter"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(filterByText(e.target.value));
          }}
        />

        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            this.props.dispatch(sortBy(e.target.value));
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          startDateId={shortid.generate()} // PropTypes.string.isRequired,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          endDateId={shortid.generate()} // PropTypes.string.isRequired,
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
