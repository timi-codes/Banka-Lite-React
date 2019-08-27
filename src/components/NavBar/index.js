import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

const NavBar = ({ user }) => {
  return (
    <header>
      <div className="top">
        <Link to="/">
          <img src="../../public/assets/images/banka-blue-logo.svg" alt="logo" />
        </Link>
        <div className="current-user web-user dropdown">
          <img className="avatar" src="../../public/assets/images/emeka copy@3x.png" alt="Avatar" />
          <h4 id="current-user">{user.email}</h4>
          <img className="arrow-down" src="../../public/assets/images/arrow-drop-down.svg" alt="Arrow Down" />
          <div className="dropdown-content">
            <Link href="/">Logout</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;