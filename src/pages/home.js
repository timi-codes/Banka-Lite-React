import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import AchievementSection from '@components/AchievementSection';
import ServiceSection from '@components/ServiceSection';
import '../../public/assets/styles/home.css';

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


const HomePage = () => {

  return (
    <div className="wrapper">
      <div className="top-banner">
        <header>
          <Link to="/">
            <img
              className="logo"
              src="../../public/assets/images/banka-light-logo.svg"
              alt="logo"
            />
          </Link>
          <nav>
            <Link
              className="signup-button"
              alt="signup button"
              to="/signup"
            >
              Signup
            </Link>
            <Link
              className="login-button"
              alt="login button"
              to="/login"
            >
              Login
            </Link>
          </nav>
        </header>
        <h1>
          Creating
          <br />
          Financial Happiness for all.
        </h1>
      </div>
      <div className="easy-banking-section">
        <AchievementSection />
        <h2>Banking Made Easy</h2>
        <p>
          Banka is a light-weight core banking application that powers banking
          operations like account creation, customer deposit and withdrawals.
          This app is meant to support a single bank, where users can signup and
          create bank accounts online, but must visit the branch to withdraw or
          deposit money.
        </p>
      </div>
      <div className="create-account-section">
        <h5>Want to create an account?</h5>
        <Link className="create-account-button" to="/signup">Click here</Link>
      </div>
      <ServiceSection />
      {/* <Modal
        isOpen={modalType === 'signup'}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Signup Modal"
      >
        <SignupModal />
      </Modal> */}
    </div>
  );
};

export default HomePage;
