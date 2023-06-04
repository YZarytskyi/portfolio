import React from 'react';

import s from './Footer.module.scss';

import sprite from '../../assets/icons.svg';

const Footer = () => {
  return (
    <footer className={s.pageFooter}>
      <ul className={s.list}>
        <li>
          <a href="#home" className={s.link}>
            HOME
          </a>
        </li>
        <li>
          <a href="#about" className={s.link}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#portfolio" className={s.link}>
            PORTFOLIO
          </a>
        </li>
        <li>
          <a href="#contact" className={s.link}>
            CONTACT
          </a>
        </li>
      </ul>
      <ul className={s.social}>
        <li className={s.socialItem}>
          <a
            href="https://github.com/YZarytskyi"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={s.socialLink}>
            <svg className={s.socialIcons}>
              <use href={`${sprite}#icon-github`}></use>
            </svg>
          </a>
        </li>
        <li className={s.socialItem}>
          <a
            href="https://t.me/y_zrt"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={s.socialLink}>
            <svg className={s.socialIcons}>
              <use href={`${sprite}#icon-telegram`}></use>
            </svg>
          </a>
        </li>
        <li className={s.socialItem}>
          <a
            href="https://www.instagram.com/y.zarytskyi/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={s.socialLink}>
            <svg className={s.socialIcons}>
              <use href={`${sprite}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
        <li className={s.socialItem}>
          <a
            href="https://www.linkedin.com/in/yurii-zarytskyi"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={s.socialLink}>
            <svg className={s.socialIcons}>
              <use href={`${sprite}#icon-linkedIn`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <p className={s.copyright}>&copy; 2022 Yurii Zarytskyi. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
