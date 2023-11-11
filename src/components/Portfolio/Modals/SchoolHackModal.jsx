import React from 'react';

import Modal from '../../common/Modal';
import InfoLinks from './InfoLinks';

import s from '../Portfolio.module.scss';

const SchoolHackModal = ({
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
            SchoolHack AI
          </a>{' '}
          is an innovative and AI-powered application designed to revolutionize learning for
          students aged 15+ and professionals from various industries. Our app harnesses the power
          of artificial intelligence, including being among the first API apps to integrate
          ChatGPT-4, to provide a personalized learning experience with features such as plagiarism
          checks, paraphrasing, summarization, Answer this, and document analysis. The app&apos;s
          goal is to enable users to study more effectively, save time, and improve their overall
          learning outcomes.
        </p>
        <ul className={s.modalToolingList}>
          <li>React</li>
          <li>Typescript</li>
          <li>Redux Toolkit</li>
          <li>Web3.js</li>
          <li>Pusher.js</li>
          <li>React-hook-form</li>
          <li>React-onesignal</li>
          <li>React-voice-visualizer</li>
          <li>Jest</li>
          <li>Sentry</li>
        </ul>
        <InfoLinks projectLinkGit={projectLinkGit} projectLinkLive={projectLinkLive} />
      </div>
    </Modal>
  );
};

export default SchoolHackModal;
