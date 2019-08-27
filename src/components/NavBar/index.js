import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';

const NavBar = ({user}) => {
  return (
    <header>
      <div className="top">
        <img src="../../public/assets/images/banka-blue-logo.svg" alt="logo" id="logo" />
        <div className="current-user web-user dropdown">
          <img className="avatar" src="../../public/assets/images/emeka copy@3x.png" alt="Avatar" />
          <h4 id="current-user">{user && (user.email)}</h4>
          <img className="arrow-down" src="../../public/assets/images/arrow-drop-down.svg" alt="Arrow Down" />
          <div className="dropdown-content">
            <Link
              to="/"
              onClick={()=>{
                localStorage.clear();
            }}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired
}


export default NavBar;