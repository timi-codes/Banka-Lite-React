import React, { useState } from 'react';
import ProfileModal from '@components/Profile';
import SuccessAlert from '@components/SuccessAlert';
import AccountModal from '@components/Account';
import NavBar from '@components/NavBar';
import Modal from 'react-modal';
import '../../public/assets/styles/dashboard.css';

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

const CustomerDashboard = () => {
  const [modalType, setModalType] = useState('none');

  const afterOpenModal = () => {};

  const closeModal = () => {
    setModalType('none');
  };

  return (
    <div className="dash-wrapper">
      <NavBar className="header" />
      <div className="banner">
        <div className="balance">
          <p>Account Balance</p>
          <h3 id="current-balance">0.00</h3>
        </div>
        <button
          id="account-button"
          type="button"
          onClick={() => {
                setModalType('create_account');
          }}
        >
          Create an account
        </button>
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
              <th className="table-title" colSpan="6">
                My Accounts
              </th>
            </tr>
            <tr>
              <th className="table-header" />
              <th className="table-header">Type</th>
              <th className="table-header">Account Number</th>
              <th className="table-header">Status</th>
              <th className="table-header">Created On</th>
              <th className="table-header">Balance</th>
            </tr>
          </table>
        </div>
        <div className="tableDiv">
          <table id="transaction-table">
            <tr>
              <th className="table-title" colSpan="5">
                Transaction History
              </th>
              <th className="account-filter" colSpan="1">
                <div className="ct-select-group ct-js-select-group">
                  <select className="ct-select ct-js-select">
                    <option>All</option>
                    <option>Credit</option>
                    <option>Savings</option>
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

      <Modal
        isOpen={modalType === 'create_account'}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Account Modal"
      >
        <AccountModal />
      </Modal>
      {/* <ProfileModal /> */}
      {/* <SuccessAlert /> */}
    </div>
  );
};

export default CustomerDashboard;
