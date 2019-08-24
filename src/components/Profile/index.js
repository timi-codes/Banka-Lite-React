import React from 'react';
import './profile.css';

const ProfileModal = () => {
  return (
    <div id="profileModal" className="modal">
      <div className="onboarding-modal">
        <img className="avatar" src="../img/emeka copy@3x.png" alt="Avatar" />

        <label htmlFor="name">
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
            value="tejumolatimi@gmail.com"
            placeholder="Email Address"
            disabled
          />
        </label>

        <label htmlFor="password">
        Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </label>

        <label htmlFor="password">
        Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Confirm Password"
          />
        </label>

        <button className="update" type="button">Update</button>
      </div>
    </div>
  );
};

export default ProfileModal;
