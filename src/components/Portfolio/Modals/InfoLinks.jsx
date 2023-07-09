import React from 'react';

import s from '../Portfolio.module.scss';

const InfoLinks = ({projectLinkGit, projectLinkLive}) => {
  return (
    <div className={s.modalLinksContainer}>
      <a
        href={projectLinkGit}
        rel="nofollow noopener noreferrer"
        target="_blank"
        className={s.modalProjectLink}>
        GitHub
      </a>
      <a
        href={projectLinkLive}
        rel="nofollow noopener noreferrer"
        target="_blank"
        className={s.modalProjectLink}>
        Live
      </a>
    </div>
  );
};

export default InfoLinks;
