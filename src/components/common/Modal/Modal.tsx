import { clsx } from "clsx";
import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

import { ProjectTitleType } from "../../../types";

import styles from "./Modal.module.scss";

import sprite from "../../../assets/icons.svg";

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  setCurrentModal: Dispatch<SetStateAction<ProjectTitleType | null>>;
}

export const Modal = ({
  children,
  isModalOpen,
  setCurrentModal,
}: ModalProps) => {
  const handleCloseModal: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  function closeModal() {
    setCurrentModal(null);
    document.body.classList.remove("blockScroll");
  }

  return (
    <div
      className={clsx(styles.backdrop, !isModalOpen && styles.isHidden)}
      onClick={(e) => handleCloseModal(e)}
    >
      <div className={styles.modal}>
        <button
          type="button"
          onClick={closeModal}
          className={styles.modalCloseBtn}
        >
          <svg className={styles.modalCloseIcon}>
            <use href={sprite + "#icon_modal_close"}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
