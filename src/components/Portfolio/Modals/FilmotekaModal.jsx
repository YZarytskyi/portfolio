import React from 'react';
import Modal from '../../common/Modal';
import s from '../Portfolio.module.scss';
import InfoLinks from './InfoLinks';

const FilmotekaModal = ({
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
            Filmoteka
          </a>{' '}
          is a comprehensive and in-depth resource for finding out more about the movies you love.
          On{' '}
          <a href={projectLinkLive} rel="nofollow noopener noreferrer" target="_blank">
            Filmoteka
          </a>{' '}
          you will find: information about your favorite movies, new movies in theaters, list of Top
          available movies, its rating. By creating an account with us, you will have the
          opportunity adding to &quot;Queue&quot; or &quot;Watched&quot; your favorite movies.
        </p>
        <ul className={s.modalToolingList}>
          <li>Vanilla JS</li>
          <li>Firebase</li>
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

export default FilmotekaModal;
