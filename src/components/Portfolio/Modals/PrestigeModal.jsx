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
  projectTitles,
}) => {
  return (
    <Modal
      modalShow={modalShow}
      setModalShow={setModalShow}
      setIsModalOpen={setIsModalOpen}>
      <div className={s.modalContainer}>
        <h1 className={s.modalTitle}>{projectTitles[2]}</h1>
        <p className={s.modalText}>
          At <span>PRESTIGE</span> all that you see is hand-picked and 100% true – sourced straight
          from the best brands and their approved affiliates from US and over the world, only for
          you.
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
