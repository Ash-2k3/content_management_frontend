import React from 'react';
import logo from '../assets/images/logo.png';
import gg_profile from "../assets/images/gg_profile.svg"

import './Nav.css';

const Nav = () => {
  return (
    <>
      <div className="Nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="icon">
          <img src={gg_profile}></img>
        </div>
      </div>
    </>
  );
};

export default Nav;
