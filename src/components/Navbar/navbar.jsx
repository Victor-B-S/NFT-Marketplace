import nav from './navbar.module.css';

function Navbar() {
  return (
    <nav className={nav.navbar}>
        <div className={nav.logo_container}>	
            <div className={nav.logo_icon}></div>
            <div className={nav.logo_font}></div>
        </div>
        <div className={nav.menu}>
            <div className={nav.menu_item}>
              <a href="#">Marketpalace</a>
            </div>
            <div className={nav.menu_item}>
              <a href="#">Rankings</a>
            </div>
            <div className={nav.menu_item}>
              <a href="#">Connect a wallet</a>
            </div>
            <button className={nav.btn_login}>
              <img src="../src/images/nav_login.svg"></img>
              <a href="#">Login</a>
            </button>
        </div>
    </nav>
  );
}

export default Navbar;