import React from 'react';
import s from './FixContacts.module.scss';
import sprite from '../../assets/icons.svg';

const FixContacts = () => {
  return (
    <>
      <ul className={s.fixContacts}>
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
            href="www.linkedin.com/in/yurii-zarytskyi"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={s.socialLink}>
            <svg className={s.socialIcons}>
              <use href={`${sprite}#icon-linkedIn`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <a
        href="mailto: yurazar222@gmail.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={s.fixEmail}>
        yurazar222@gmail.com
      </a>
    </>
  );
};

export default FixContacts;
