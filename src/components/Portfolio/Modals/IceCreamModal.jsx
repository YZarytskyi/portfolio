import React from 'react';
import Modal from '../../common/Modal';
import InfoLinks from './InfoLinks';
import s from '../Portfolio.module.scss';

const IceCreamModal = ({
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
          Selling ice cream online is tricky, but it can be done. With{' '}
          <a href={projectLinkLive} rel="nofollow noopener noreferrer" target="_blank">
            Ice-Cream
          </a>{' '}
          same-day delivery, pick-up option, you can have your ice cream to your
          customers in no time. It is one of the best option to sell ice cream online.
        </p>
        <ul className={s.modalToolingList}>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>Parcel</li>
        </ul>
        <InfoLinks
          projectLinkGit={projectLinkGit}
          projectLinkLive={projectLinkLive}
        />
      </div>
    </Modal>
  );
};

export default IceCreamModal;
