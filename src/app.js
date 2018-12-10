// install >> import >> use
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

// Browser Router --> once to create new router
// Route --> for every page, provide route to match for, and what to do when user visit that path
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const expenseOne = store.dispatch(
  addExpense({ description: "Water Bill", amount: 100, createdAt: 4000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Gas Bill", amount: 300, createdAt: 2000 })
);

store.dispatch(setTextFilter("water"));

setTimeout(() => {
  store.dispatch(setTextFilter("bill"));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
