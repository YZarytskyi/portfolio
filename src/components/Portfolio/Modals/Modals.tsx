import { Dispatch, SetStateAction } from "react";

import CryptoModal from "./CryptoModal";
import FilmotekaModal from "./FilmotekaModal.tsx";
import JazzRenderModal from "./JazzRenderModal.tsx";
import SchoolHackModal from "./SchoolHackModal";
import WalletModal from "./WalletModal.tsx";

interface ModalsProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  modalShowSchoolHack: boolean;
  setModalShowSchoolHack: Dispatch<SetStateAction<boolean>>;
  modalShowCrypto: boolean;
  setModalShowCrypto: Dispatch<SetStateAction<boolean>>;
  modalJazzRender: boolean;
  setModalJazzRender: Dispatch<SetStateAction<boolean>>;
  modalShowWallet: boolean;
  setModalShowWallet: Dispatch<SetStateAction<boolean>>;
  modalShowFilmoteka: boolean;
  setModalShowFilmoteka: Dispatch<SetStateAction<boolean>>;
  projectTitles: string[];
}

export const Modals = ({
  setIsModalOpen,
  modalShowSchoolHack,
  setModalShowSchoolHack,
  modalShowCrypto,
  setModalShowCrypto,
  modalJazzRender,
  setModalJazzRender,
  modalShowWallet,
  setModalShowWallet,
  modalShowFilmoteka,
  setModalShowFilmoteka,
  projectTitles,
}: ModalsProps) => {
  const modalsList = [
    SchoolHackModal,
    CryptoModal,
    JazzRenderModal,
    WalletModal,
    FilmotekaModal,
  ];
  const states = [
    modalShowSchoolHack,
    modalShowCrypto,
    modalJazzRender,
    modalShowWallet,
    modalShowFilmoteka,
  ];
  const setStates = [
    setModalShowSchoolHack,
    setModalShowCrypto,
    setModalJazzRender,
    setModalShowWallet,
    setModalShowFilmoteka,
  ];
  const projectLinksGit = [
    "",
    "https://github.com/YZarytskyi/finance-crypto",
    "https://github.com/YZarytskyi/jazz-render",
    "https://github.com/YZarytskyi/wallet",
    "https://github.com/YZarytskyi/filmoteka",
  ];
  const projectLinksLive = [
    "https://app.schoolhack.ai/",
    "https://yzarytskyi.github.io/finance-crypto/",
    "https://jazz-render-xl8t.vercel.app",
    "https://yzarytskyi.github.io/wallet/",
    "https://yzarytskyi.github.io/filmoteka/",
  ];

  return (
    <>
      {modalsList.map((Modal, index) => {
        return (
          <Modal
            key={index}
            modalShow={states[index]}
            setModalShow={setStates[index]}
            projectLinkGit={projectLinksGit[index]}
            projectLinkLive={projectLinksLive[index]}
            projectTitle={projectTitles[index]}
            setIsModalOpen={setIsModalOpen}
          />
        );
      })}
    </>
  );
};
