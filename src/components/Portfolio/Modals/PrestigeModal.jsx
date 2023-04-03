import React from 'react';
import Modal from '../../common/Modal';
import InfoLinks from './InfoLinks';
import s from '../Portfolio.module.scss';

const PrestigeModal = ({
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
          At{' '}
          <a href={projectLinkLive} rel="nofollow noopener noreferrer" target="_blank">
            PRESTIGE
          </a>{' '}
          provides each customer with various trendy items at affordable prices. Customers have the
          opportunity to view the product, add it to the cart and complete the order online.
        </p>
        <ul className={s.modalToolingList}>
          <li>ReactJS</li>
          <li>Redux</li>
          <li>Bootstrap</li>
          <li>SASS</li>
        </ul>
        <InfoLinks
          projectLinkGit={projectLinkGit}
          projectLinkLive={projectLinkLive}
        />
      </div>
    </Modal>
  );
};

export default PrestigeModal;
