import { Dispatch, SetStateAction } from "react";

import { PROJECTS } from "../../constants";
import { Modal } from "../common";
import InfoLinks from "./InfoLinks.tsx";

import { ProjectTitleType } from "../../types";

import styles from "./ModalProject.module.scss";

interface ModalProjectProps {
  currentModal: ProjectTitleType | null;
  setCurrentModal: Dispatch<SetStateAction<ProjectTitleType | null>>;
}

const ModalProject = ({ currentModal, setCurrentModal }: ModalProjectProps) => {
  const currentProject = PROJECTS.find(
    (project) => project.title === currentModal,
  );

  return (
    <Modal isModalOpen={!!currentModal} setCurrentModal={setCurrentModal}>
      <div className={styles.modalContainer}>
        <h1 className={styles.modalTitle}>{currentProject?.title}</h1>

        <p className={styles.modalText}>
          <a
            href={currentProject?.liveLink}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            {currentProject?.title}
          </a>{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: currentProject?.description || "",
            }}
          />
        </p>

        <ul className={styles.modalToolingList}>
          {currentProject?.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <InfoLinks
          projectLinkGit={currentProject?.githubLink}
          projectLinkLive={currentProject?.liveLink}
        />
      </div>
    </Modal>
  );
};

export default ModalProject;
