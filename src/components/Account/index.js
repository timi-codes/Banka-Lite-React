import React from 'react';

const AccountModal = () => {
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
            value="timitejumola@gmail.com"
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
          <select className="ct-select ct-js-select" id="account-type">
            <option value="default" disabled selected>
            Select account type
          </option>
            <option value="current">Current</option>
            <option value="savings">Savings</option>
          </select>
        </div>

        <button className="signup" type="button">
          <i className="fa fa-circle-o-notch fa-spin" />
        Create
        </button>

        <p className="error" />
      </div>
    </div>
  );
};

export default AccountModal;
