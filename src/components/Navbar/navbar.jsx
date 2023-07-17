import nav from './navbar.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className={nav.navbar}>
      <Link to ="/">
        <div className={nav.logo_container}>
          <div className='storefront'></div>
          <div className={nav.logo_font}>
            NFT Marketplace
          </div>
        </div>
      </Link>
      <div className={nav.menu}>
        <div className={nav.menu_item}>
          <Link to="/marketplace">Marketplace</Link>
        </div>
        <div className={nav.menu_item}>
          <a href="#">Rankings</a>
        </div>
        <div className={nav.menu_item}>
          <Link to ="/connect-wallet">Connect a wallet</Link>
        </div>
        <button className='btn secondary filled'>
          <img src="../src/images/nav_login.svg" className={nav.btn_loginicon} />
          <Link to="/create-account">Sign Up</Link>
        </button>
      </div>
      <div className={nav.burguer}></div>
    </nav>
  );
}

export default Navbar;