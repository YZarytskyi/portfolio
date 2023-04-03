import React from 'react';
import Modal from '../../common/Modal';
import InfoLinks from './InfoLinks';
import s from '../Portfolio.module.scss';

const JazzRenderModal = ({
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
            Jazz Render
          </a>{' '}
          creates visualizations that help architects reveal their ideas and present them in the most appropriate atmosphere.
        </p>
        <ul className={s.modalToolingList}>
          <li>Next.js</li>
          <li>GraphQL</li>
          <li>Tailwind</li>
          <li>DatoCMS</li>
          <li>Material UI</li>
          <li>React Hook Form</li>
        </ul>
        <InfoLinks
          projectLinkGit={projectLinkGit}
          projectLinkLive={projectLinkLive}
        />
      </div>
    </Modal>
  );
};

export default JazzRenderModal;
