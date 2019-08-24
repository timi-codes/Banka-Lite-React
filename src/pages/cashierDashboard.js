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

const CashierDashboard = () => {
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
          <p>Created Accounts</p>
          <h3>1,000</h3>
        </div>
        <div className="balance">
          <p>Today Transactions</p>
          <h3>1,000,000</h3>
        </div>
      </div>
      <div className="content">
        <div id="loadingText">
          <div id="loader" />
Loading
        </div>
        <div id="accountText">No bank account has been created</div>
        <div className="tableDiv">
          <table id="account-table">
            <tr>
              <th className="table-title" colSpan="6">Bank Accounts</th>
              <th className="account-filter" colSpan="2">
                <input
                  type="text"
                  id="searchInput"
                  name="search"
                  placeholder="search by account number"
                  onKeyUp="search()"
                />
              </th>
            </tr>
            <tr>
              <th className="table-header">Type</th>
              <th className="table-header">Account Number</th>
              <th className="table-header">Owner</th>
              <th className="table-header">Created On</th>
              <th className="table-header">Status</th>
              <th className="table-header">Balance</th>
              <th className="table-header">Actions</th>
            </tr>
          </table>
        </div>
      </div>
      {/* {Modals Here} */}
    </div>
  );
};

export default CashierDashboard;
