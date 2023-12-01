import { Dispatch, SetStateAction } from "react";

import { Modal } from "../../common";
import InfoLinks from "./InfoLinks.js";

import s from "../Portfolio.module.scss";

interface FilmotekaModalProps {
  modalShow: boolean;
  setModalShow: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  projectLinkGit: string;
  projectLinkLive: string;
  projectTitle: string;
}

const FilmotekaModal = ({
  modalShow,
  setModalShow,
  setIsModalOpen,
  projectLinkGit,
  projectLinkLive,
  projectTitle,
}: FilmotekaModalProps) => {
  return (
    <Modal
      isModalShown={modalShow}
      setIsModalShown={setModalShow}
      setIsModalOpen={setIsModalOpen}
    >
      <div className={s.modalContainer}>
        <h1 className={s.modalTitle}>{projectTitle}</h1>
        <p className={s.modalText}>
          <a
            href={projectLinkLive}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Filmoteka
          </a>{" "}
          is a comprehensive and in-depth resource for finding out more about
          the movies you love. On{" "}
          <a
            href={projectLinkLive}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Filmoteka
          </a>{" "}
          you will find: information about your favorite movies, new movies in
          theaters, list of Top available movies, its rating. By creating an
          account with us, you will have the opportunity adding to
          &quot;Queue&quot; or &quot;Watched&quot; your favorite movies.
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
