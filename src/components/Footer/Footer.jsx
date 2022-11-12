import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return <footer className={s.pageFooter}>
  <ul className={s.list}>
    <li>
      <a href="#home" className={s.link} >HOME</a>
    </li>
    <li>
      <a href="#about" className={s.link} >ABOUT</a>
    </li>
    <li>
      <a href="#portfolio" className={s.link} >PORTFOLIO</a>
    </li>
    <li>
      <a href="#contact" className={s.link} >CONTACT</a>
    </li>
  </ul>
  <p className={s.copyright}>&copy; 2022 Yurii Zarytskyi. All Rights Reserved</p>
  </footer>;
};

export default Footer;
