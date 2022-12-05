import React from 'react';
import s from '../Portfolio.module.scss';

const InfoLinks = ({projectLinksGit, projectLinksLive, activeIndex}) => {
  return (
    <div className={s.modalLinksContainer}>
      <a
        href={projectLinksGit[activeIndex]}
        rel="nofollow noopener noreferrer"
        target="_blank"
        className={s.modalProjectLink}>
        GitHub
      </a>
      <a
        href={projectLinksLive[activeIndex]}
        rel="nofollow noopener noreferrer"
        target="_blank"
        className={s.modalProjectLink}>
        Live
      </a>
    </div>
  );
};

export default InfoLinks;
