import React, { useState } from 'react';
import {Link} from 'react-router-dom'
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

const AdminDashboard = () => {
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
        <div className="balance">
          <p>Created Accounts</p>
          <h3>1,000</h3>
        </div>
        <button id="account-button" type="button">Create a new Staff</button>
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
              <th className="table-title" colSpan="5">Bank Accounts</th>
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

export default AdminDashboard;
