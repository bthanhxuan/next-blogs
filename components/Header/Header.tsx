// import './header.css';
import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo';
import HeaderMenus from './HeaderMenus';
import HeaderSearch from './HeaderSearch';

function Header() {
  return (
    <header id="header">
      <div className="tcl-container">
        <div className={"tcl-row tcl-no-gutters " + styles.header}>
          <HeaderLogo />
          <HeaderSearch />
          <HeaderMenus />
        </div>
      </div>
    </header>
  );
}

export default Header;
