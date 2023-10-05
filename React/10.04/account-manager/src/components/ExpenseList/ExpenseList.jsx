import React from "react";
import { useSelector } from "react-redux";
import List from "../List/List";

const ExpenseList = () => {
  const expenseList = useSelector((store) => store.expense.expenseList);

  return <List items={expenseList} />;
};

export default ExpenseList;
