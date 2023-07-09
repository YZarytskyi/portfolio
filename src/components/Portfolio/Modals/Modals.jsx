import React from 'react';

import CryptoModal from './CryptoModal';
import JazzRenderModal from './JazzRenderModal';
import WalletModal from './WalletModal';
import PrestigeModal from './PrestigeModal';
import FilmotekaModal from './FilmotekaModal';
import IceCreamModal from './IceCreamModal';

const Modals = ({
  setIsModalOpen,
  modalShowCrypto,
  setModalShowCrypto,
  modalJazzRender,
  setModalJazzRender,
  modalShowWallet,
  setModalShowWallet,
  modalShowPrestige,
  setModalShowPrestige,
  modalShowFilmoteka,
  setModalShowFilmoteka,
  modalShowIceCream,
  setModalShowIceCream,
  projectTitles
}) => {
  const modalsList = [CryptoModal, JazzRenderModal, WalletModal, PrestigeModal, FilmotekaModal, IceCreamModal];
  const states = [
    modalShowCrypto,
    modalJazzRender,
    modalShowWallet,
    modalShowPrestige,
    modalShowFilmoteka,
    modalShowIceCream
  ];
  const setStates = [
    setModalShowCrypto,
    setModalJazzRender,
    setModalShowWallet,
    setModalShowPrestige,
    setModalShowFilmoteka,
    setModalShowIceCream
  ];
  const projectLinksGit = [
    'https://github.com/YZarytskyi/finance-crypto',
    'https://github.com/YZarytskyi/jazz-render',
    'https://github.com/YZarytskyi/wallet',
    'https://github.com/YZarytskyi/e-shop',
    'https://github.com/YZarytskyi/filmoteka',
    'https://github.com/YZarytskyi/ice-cream-team-project'
  ];
  const projectLinksLive = [
    'https://yzarytskyi.github.io/finance-crypto/',
    'https://jazz-render-xl8t.vercel.app',
    'https://yzarytskyi.github.io/wallet/',
    'https://yzarytskyi.github.io/e-shop/',
    'https://yzarytskyi.github.io/filmoteka/',
    'https://yzarytskyi.github.io/ice-cream-team-project/'
  ];

  return (
    <>
      {modalsList.map((Modal, i) => {
        return (
          <Modal
            key={i}
            modalShow={states[i]}
            setModalShow={setStates[i]}
            projectLinkGit={projectLinksGit[i]}
            projectLinkLive={projectLinksLive[i]}
            projectTitle={projectTitles[i]}
            setIsModalOpen={setIsModalOpen}
          />
        );
      })}
    </>
  );
};

export default Modals;
