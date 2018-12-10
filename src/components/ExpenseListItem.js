import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>{description}</Link>
    <p>
      Expense: {amount} - {createdAt}
    </p>
  </div>
);

// Connect the component with information from the store
export default ExpenseListItem;
