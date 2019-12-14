import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import { addExpense } from "../actions/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => {
  return (
    <div>
      <h1>Expense list</h1>
      {props.expenses.map(expense => {
        return <ExpenseListItem {...expense} key={expense.id} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
