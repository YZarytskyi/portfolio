import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={s.headerContainer}>
        <a href="#home" className={s.logo}>
          YZ
        </a>
        <nav className={s.headerNav}>
          <ul className={s.navList}>
          <li className={s.navItem}>
              <a href="#home" className={s.navLink}>
                Home
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#about" className={s.navLink}>
                About
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#portfolio" className={s.navLink}>
                Portfolio
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#contact" className={s.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a className={s.resumeLink}>Resume</a>
      </div>
    </header>
  );
};

export default Header;
