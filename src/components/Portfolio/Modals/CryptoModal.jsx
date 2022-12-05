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
  projectTitles,
}) => {
  return (
    <Modal
      modalShow={modalShow}
      setModalShow={setModalShow}
      setIsModalOpen={setIsModalOpen}>
      <div className={s.modalContainer}>
        <h1 className={s.modalTitle}>{projectTitles[0]}</h1>
        <p className={s.modalText}>
          <span>Crypto</span> provides crowdsourced and professionally curated research, price
          analysis, and crypto market-moving news to help market players make more informed trading
          decisions. If you’re looking for a set of practical and insightful crypto market
          information and data, we have the analytics tools to suit your business needs.
        </p>
        <ul className={s.modalToolingList}>
          <li>ReactJS</li>
          <li>Redux Toolkit</li>
          <li>TypeScript</li>
          <li>Firebase</li>
          <li>Binance API</li>
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
