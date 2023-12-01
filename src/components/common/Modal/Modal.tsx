import { clsx } from "clsx";
import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

import styles from "./Modal.module.scss";

import sprite from "../../../assets/icons.svg";

interface ModalProps {
  children: ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({
  children,
  isModalShown,
  setIsModalShown,
  setIsModalOpen,
}: ModalProps) => {
  const handleCloseModal: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  function closeModal() {
    setIsModalShown(false);
    setIsModalOpen(false);
    document.body.classList.remove("blockScroll");
  }

  return (
    <div
      className={clsx(styles.backdrop, !isModalShown && styles.isHidden)}
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
