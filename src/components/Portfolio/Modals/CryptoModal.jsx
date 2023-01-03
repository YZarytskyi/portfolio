import React from 'react';
import Modal from '../../common/Modal';
import s from '../Portfolio.module.scss';
import InfoLinks from './InfoLinks';

const CryptoModal = ({
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
        <h1 className={s.modalTitle}>{projectTitles[0]}</h1>
        <p className={s.modalText}>
          <a href={projectLinksLive[0]} rel="nofollow noopener noreferrer" target="_blank">
            Crypto
          </a>{' '}
          provides crowdsourced and professionally curated research, price analysis, arbitrage,
          cryptocurrency converter and crypto market-moving news to help market players make more
          informed trading decisions. If you’re looking for a set of practical and insightful crypto
          market information and data, we have the analytics tools to suit your business needs.
        </p>
        <ul className={s.modalToolingList}>
          <li>React</li>
          <li>Redux Toolkit</li>
          <li>TypeScript</li>
          <li>Firebase</li>
          <li>React Hook Form</li>
          <li>Apexcharts</li>
          <li>Binance API</li>
          <li>NYT API</li>
          <li>Jest</li>
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

export default CryptoModal;
