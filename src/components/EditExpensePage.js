import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  removeExpense = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.removeExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === ownprops.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => {
      return dispatch(editExpense(id, expense));
    },
    removeExpense: (id) => {
      return dispatch(removeExpense(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
