export default (expenses) => {
  //   let totalExpense = 0;
  //   expenses.map((expense) => {
  //     return (totalExpense = totalExpense + expense.amount);
  //   });
  //   return totalExpense;

  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};
