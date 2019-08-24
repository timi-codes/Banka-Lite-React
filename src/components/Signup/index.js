import React from 'react';
import './signup.css';

const SignupModal = () => {
  return (
    <div className="modal">
      <div className="onboarding-modal">
        <img src="../../../public/assets/images/banka-blue-logo.svg" alt="logo" />

        <input type="text" id="fname" name="fname" placeholder="First Name" />
        <input type="text" id="lname" name="lname" placeholder="Last Name" />
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
        <button className="signup" type="button">Signup</button>
      </div>
    </div>
  );
};

export default SignupModal;
