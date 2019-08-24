import React from 'react';
import './login.css';
const LoginModal = () => {
  return (
    <div id="loginModal" className="modal">
      <div className="onboarding-modal">
        <img src="../../../public/assets/images/banka-blue-logo.svg" />

        <div className="ct-select-group ct-js-select-group">
          <select className="ct-select ct-js-select" id="user-role">
            <option value="customer">CUSTOMER</option>
            <option value="staff">STAFF</option>
            <option value="admin">ADMIN</option>
          </select>
        </div>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />

        <button className="signup" id="user-login-btn">
          Login
        </button>

        <p className="account">
          <a id="signup-button">Forgot password?</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
