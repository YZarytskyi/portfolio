import React from 'react';
import Modal from '../../common/Modal';
import s from '../Portfolio.module.scss';
import InfoLinks from './InfoLinks';

const PrestigeModal = ({
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
        <h1 className={s.modalTitle}>{projectTitles[2]}</h1>
        <p className={s.modalText}>
          At{' '}
          <a href={projectLinksLive[2]} rel="nofollow noopener noreferrer" target="_blank">
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
          activeIndex={activeIndex}
          projectLinksGit={projectLinksGit}
          projectLinksLive={projectLinksLive}
        />
      </div>
    </Modal>
  );
};

export default PrestigeModal;
