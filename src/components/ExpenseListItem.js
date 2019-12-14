import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { NavLink } from "react-router-dom";

const ExpenseListItem = (
  { dispatch, id, description, amount, createdAt },
  props
) => (
  <div>
    <p>
      <NavLink to={`/edit/${id}`}>
        {" "}
        {`${description} - $${amount} - ${createdAt}`}
      </NavLink>

      <button
        onClick={e => {
          dispatch(removeExpense(id));
        }}
      >
        Remove
      </button>
    </p>
  </div>
);

export default connect()(ExpenseListItem);
