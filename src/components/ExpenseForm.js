import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const expense = props.expense;
    this.state = {
      description: expense ? expense.description : "",
      amount: expense ? (expense.amount / 100).toString() : "",
      note: expense ? expense.note : "",
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calendarFocused: true,
      error: ""
    };
  }

  handleOnFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  handleDateChange = createdAt => {
    if (createdAt && createdAt.isValid()) {
      this.setState(() => ({ createdAt: createdAt }));
    }
  };
  handleDescriptionChange = e => {
    const desc = e.target.value;
    this.setState(() => ({
      description: desc
    }));
  };
  handleAmountChange = e => {
    const amount = e.target.value;

    // validate
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount: amount
      }));
    }
  };
  handleNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({
      note: note
    }));
  };
  handleFormSubmit = e => {
    e.preventDefault();
    const desc = this.state.description;
    const amount = this.state.amount;
    const note = this.state.note;
    const createdAt = this.state.createdAt.valueOf();

    if (!desc || !amount) {
      this.setState(() => ({ error: "Please fill out all values." }));
    } else {
      this.setState(() => ({ error: undefined }));
      this.props.onSubmit({
        description: desc,
        amount: parseFloat(amount, 10) * 100,
        note: note,
        createdAt: createdAt
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <label name="description">Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          ></input>

          <label name="amount">Amount</label>
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          ></input>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.handleOnFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          ></SingleDatePicker>
          <textarea
            placeholder="Add a note here!"
            type="textarea"
            name="note"
            value={this.state.note}
            onChange={this.handleNoteChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
