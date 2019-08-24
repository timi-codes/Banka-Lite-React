import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ProfileModal from '@components/Profile';
import SuccessAlert from '@components/SuccessAlert';
import AccountModal from '@components/Account';
import NavBar from '@components/NavBar';
import Modal from 'react-modal';
import '../../public/assets/styles/customer.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    overflow: 'hidden',
    position: 'fixed',
  },
};

Modal.setAppElement('#root');

const AdminCustomer = () => {
  const [modalType, setModalType] = useState('none');

  const afterOpenModal = () => {};

  const closeModal = () => {
    setModalType('none');
  };

  return (
    <div className="dash-wrapper">
      <header>
        <div className="top">
          <Link to="/"><img src="../public/assets/images/banka-blue-logo.svg" alt="logo" /></Link>
          <div className="current-user web-user dropdown">
            <img className="avatar" src="../public/assets/images/emeka copy@3x.png" alt="avatar" />
            <h4 id="current-user">Tejumola Peter</h4>
            <span>(admin)</span>
            <img className="arrow-down" src="../public/assets/images/arrow-drop-down.svg" alt="arrow down" />
            <div className="dropdown-content">
              <button id="profile-button" type="button">Profile</button>
              <Link to="/">Logout</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="banner">
        <div className="customer">
          <Link href="/admin/dashboard">
            <img className="back-arrow" src="../public/assets/images/back-arrow.svg" alt="back arrow" />
          </Link>
          <img className="customer-avatar" src="../public/assets/images/emeka copy@3x.png" alt="cutomer avatar" />
          <h4 id="owner">Timi Tejumola</h4>
        </div>
        <div className="balance">
          <p>CURRENT BALANCE</p>
          <h3 id="current-balance">N100,000</h3>
        </div>
      </div>
      <div className="content">
        <div id="loadingText">
          <div id="loader" />
Loading
        </div>
        <div id="accountText">No account has been created</div>
        <div className="tableDiv">
          <table id="account-table">
            <tr>
              <th className="table-title" colSpan="7">Accounts</th>
            </tr>
            <tr>
              <th className="table-header" />
              <th className="table-header">Type</th>
              <th className="table-header">Account Number</th>
              <th className="table-header">Status</th>
              <th className="table-header">Created On</th>
              <th className="table-header">Balance</th>
              <th className="action-header">Actions</th>
            </tr>
          </table>
        </div>
        <div className="tableDiv">
          <table id="transaction-table">
            <tr>
              <th className="table-title" colSpan="5">Transaction History</th>
              <th className="account-filter" colSpan="1">
                <div className="ct-select-group ct-js-select-group">
                  <select className="ct-select ct-js-select" id="filter-trans" onBlur="filter()">
                    <option value="all" selected>All</option>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                  </select>
                </div>
              </th>
            </tr>
            <tr>
              <th className="table-header">Type</th>
              <th className="table-header">Account Number</th>
              <th className="table-header">Created On</th>
              <th className="table-header">Amount</th>
              <th className="table-header">Old Balance</th>
              <th className="table-header">New Balance</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomer;
