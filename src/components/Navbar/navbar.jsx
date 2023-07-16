import nav from './navbar.module.css';
import React, { useState } from 'react';

function Navbar() {

  return (
    <nav className={nav.navbar}>
      <a href="home">
        <div className={nav.logo_container}>
          <div className='storefront'></div>
          <div className={nav.logo_font}>
            NFT Marketplace
          </div>
        </div>
      </a>
      <div className={nav.menu}>
        <div className={nav.menu_item}>
          <a href="#">Marketplace</a>
        </div>
        <div className={nav.menu_item}>
          <a href="#">Rankings</a>
        </div>
        <div className={nav.menu_item}>
          <a href="connect">Connect a wallet</a>
        </div>
        <button className={nav.btn_login}>
          <img src="../src/images/nav_login.svg" className={nav.btn_loginicon} />
          <a href="signUp">Sign Up</a>
        </button>
      </div>
      <div className={nav.burguer}></div>
    </nav>
  );
}

export default Navbar;