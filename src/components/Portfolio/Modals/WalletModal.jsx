import React from 'react';

import Modal from '../../common/Modal';
import InfoLinks from './InfoLinks';

import s from '../Portfolio.module.scss';

const WalletModal = ({
  modalShow,
  setModalShow,
  setIsModalOpen,
  projectLinkGit,
  projectLinkLive,
  projectTitle
}) => {
  return (
    <Modal modalShow={modalShow} setModalShow={setModalShow} setIsModalOpen={setIsModalOpen}>
      <div className={s.modalContainer}>
        <h1 className={s.modalTitle}>{projectTitle}</h1>
        <p className={s.modalText}>
          <a href={projectLinkLive} rel="nofollow noopener noreferrer" target="_blank">
            Wallet
          </a>{' '}
          is a powerful finance manager that offer you a 360° view of your finances. We combine
          best-in-breed AI driven categorization and analytics with a deep set of features that are
          proven to work.
        </p>
        <ul className={s.modalToolingList}>
          <li>React</li>
          <li>Redux Toolkit</li>
          <li>Chart.js</li>
          <li>Formik</li>
          <li>Axios</li>
        </ul>
        <InfoLinks
          projectLinkGit={projectLinkGit}
          projectLinkLive={projectLinkLive}
        />
      </div>
    </Modal>
  );
};

export default WalletModal;
