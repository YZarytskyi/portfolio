import React from 'react';
import CryptoModal from './CryptoModal';
import FilmotekaModal from './FilmotekaModal';
import PrestigeModal from './PrestigeModal';
import IceCreamModal from './IceCreamModal';

const Modals = ({
  activeIndex,
  setIsModalOpen,
  modalShowCrypto,
  setModalShowCrypto,
  modalShowFilmoteka,
  setModalShowFilmoteka,
  modalShowPrestige,
  setModalShowPrestige,
  modalShowIceCream,
  setModalShowIceCream,
  projectTitles
}) => {
  const modalsList = [CryptoModal, FilmotekaModal, PrestigeModal, IceCreamModal];
  const states = [modalShowCrypto, modalShowFilmoteka, modalShowPrestige, modalShowIceCream];
  const setStates = [
    setModalShowCrypto,
    setModalShowFilmoteka,
    setModalShowPrestige,
    setModalShowIceCream
  ];
  const projectLinksGit = [
    'https://github.com/YZarytskyi/finance-crypto',
    'https://github.com/YZarytskyi/filmoteka',
    'https://github.com/YZarytskyi/e-shop',
    'https://github.com/YZarytskyi/ice-cream-team-project'
  ];
  const projectLinksLive = [
    'https://yzarytskyi.github.io/finance-crypto/',
    'https://yzarytskyi.github.io/filmoteka/',
    'https://yzarytskyi.github.io/e-shop/',
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
            projectLinksGit={projectLinksGit}
            projectLinksLive={projectLinksLive}
            activeIndex={activeIndex}
            projectTitles={projectTitles}
            setIsModalOpen={setIsModalOpen}
          />
        );
      })}
    </>
  );
};

export default Modals;
