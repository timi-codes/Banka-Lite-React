import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAccount } from '@actions/account'

class AccountModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      type: "default"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {value} = e.target;
    this.setState({
      type : value,
    });
  }

  render(){
    const { type } = this.state;
    const { createNewAccount, error, user, close } = this.props;
  return (
    <div id="accountModal" className="modal">
      <div className="onboarding-modal">
        <h3>Create a bank account</h3>
        <label htmlFor="fname">
        Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            disabled
          />
        </label>

        <label htmlFor="email">
        Email Address
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            disabled
          />
        </label>

        <label htmlFor="balance">
        Opening Balance
          <input
            type="text"
            id="balance"
            name="balance"
            value="0.00"
            className="opbalance"
            placeholder="Opening Balance"
          />
        </label>

        <div className="ct-select-group ct-js-select-group">
          <select
            className="ct-select ct-js-select"
            onChange={this.handleChange}
            value={this.state.type}
          >
            <option value="default" disabled>
              Select account type
            </option>
            <option value="current">Current</option>
            <option value="savings">Savings</option>
          </select>
        </div>

        <button
          className="signup"
          type="button"
          onClick={()=>{
          createNewAccount(type)
          close()
        }}
        >
          <i className="fa fa-circle-o-notch fa-spin" />
        Create
        </button>

        {error && (<p className="error">{error}</p>)}
      </div>
    </div>
  )};
};

AccountModal.defaultProps = {
  error: null,
};

AccountModal.propTypes = {
  error: PropTypes.string,
  close: PropTypes.func.isRequired,
  createNewAccount: PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
  error: state.account.error,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  createNewAccount : (type) => { dispatch(createAccount(type))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountModal);
