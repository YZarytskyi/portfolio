import { Dispatch, SetStateAction } from "react";

import { Modal } from "../../common";
import InfoLinks from "./InfoLinks.js";

import s from "../Portfolio.module.scss";

interface JazzRenderModalProps {
  modalShow: boolean;
  setModalShow: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  projectLinkGit: string;
  projectLinkLive: string;
  projectTitle: string;
}

const JazzRenderModal = ({
  modalShow,
  setModalShow,
  setIsModalOpen,
  projectLinkGit,
  projectLinkLive,
  projectTitle,
}: JazzRenderModalProps) => {
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
            Jazz Render
          </a>{" "}
          creates visualizations that help architects reveal their ideas and
          present them in the most appropriate atmosphere.
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
