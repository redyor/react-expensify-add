import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  removeExpense = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button
            className="button button--secondary"
            onClick={this.removeExpense}
          >
            Remove Expense
          </button>
        </div>
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
    startEditExpense: (id, expense) => {
      return dispatch(startEditExpense(id, expense));
    },
    startRemoveExpense: (id) => {
      return dispatch(startRemoveExpense(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
