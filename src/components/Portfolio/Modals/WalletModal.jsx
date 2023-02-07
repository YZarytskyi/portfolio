import React from 'react';
import Modal from '../../common/Modal';
import s from '../Portfolio.module.scss';
import InfoLinks from './InfoLinks';

const WalletModal = ({
  modalShow,
  setModalShow,
  activeIndex,
  projectLinksGit,
  projectLinksLive,
  setIsModalOpen,
  projectTitles
}) => {
  return (
    <Modal modalShow={modalShow} setModalShow={setModalShow} setIsModalOpen={setIsModalOpen}>
      <div className={s.modalContainer}>
        <h1 className={s.modalTitle}>{projectTitles[1]}</h1>
        <p className={s.modalText}>
          <a href={projectLinksLive[1]} rel="nofollow noopener noreferrer" target="_blank">
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
          activeIndex={activeIndex}
          projectLinksGit={projectLinksGit}
          projectLinksLive={projectLinksLive}
        />
      </div>
    </Modal>
  );
};

export default WalletModal;
