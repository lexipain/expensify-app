import React from "react";
import { connect } from "react-redux";

const ExpenseList = props => (
  <div>
    <h1>Expense list</h1>
    {props.expenses.map((element, index) => {
      return (
        <p key={`${element.description}_${index}`}>{element.description}</p>
      );
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseList);
