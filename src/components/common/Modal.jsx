import s from "./Modal.module.scss";
import React, { useRef } from "react";
import sprite from "../../assets/icons.svg";

const Modal = ({ children, modalShow, setModalShow }) => {
  const backdropRef = useRef(null);

  const handleCloseModal = (e) => {
    const target = e.target;
    if (
      target === backdropRef.current ||
      target.nodeName === "svg" ||
      target.nodeName === "use"
    ) {
      setModalShow(false);
      document.body.style.overflowY = 'scroll';
    }
  };

  return (
    <div
      ref={backdropRef}
      className={`${s.backdrop} ${!modalShow && s.isHidden}`}
      onClick={(e) => handleCloseModal(e)}
    >
      <div className={s.modal}>
        <button type="button" className={s.modalCloseBtn}>
          <svg className={s.modalCloseIcon}>
            <use href={sprite + "#icon_modal_close"}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default React.memo(Modal);
