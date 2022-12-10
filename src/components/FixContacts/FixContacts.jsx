import React from 'react';
import s from './FixContacts.module.scss';
import SocialLinks from './SocialLinks';

const FixContacts = () => {
  return (
    <>
      <SocialLinks />
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
