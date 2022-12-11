import React from 'react';
import Modal from '../../common/Modal';
import s from '../Portfolio.module.scss';
import InfoLinks from './InfoLinks';

const IceCreamModal = ({
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
        <h1 className={s.modalTitle}>{projectTitles[3]}</h1>
        <p className={s.modalText}>
          Selling ice cream online is tricky, but it can be done. With{' '}
          <a href={projectLinksLive[3]} rel="nofollow noopener noreferrer" target="_blank">
            Ice-Cream
          </a>{' '}
          same-day delivery, pick-up option, and Shopify POS, you can have your ice cream to your
          customers in no time. It is one of the best option to sell ice cream online.
        </p>
        <ul className={s.modalToolingList}>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>Parcel</li>
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

export default IceCreamModal;
