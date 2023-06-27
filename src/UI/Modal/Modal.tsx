import { ReactNode, useState } from "react";
import styles from "./Modal.module.scss";
import { title } from "process";
import CloseIcon from "assets/icons/close.svg";
import { Button } from "../Button";
import { createPortal } from "react-dom";

export interface IProps {
  onClose: () => void;
  title: string;
  body: ReactNode;
  isOpened: boolean;
  confirmCallback?: () => void;
}

export function Modal({
  isOpened,
  onClose,
  body,
  title,
  confirmCallback,
}: IProps) {
  if (!isOpened) return null;

  return createPortal(
    <div
      className={styles.modelWrap}
      onClick={({ target, currentTarget }) => {
        if (target === currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <div className={styles.topBlock}>
          <span>{title}</span>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.body}>{body}</div>
        {confirmCallback && (
          <div className={styles.buttonsBlock}>
            <Button
              onClick={() => {
                confirmCallback();
                onClose();
              }}
              margin={{ right: 8 }}
            >
              Да
            </Button>
            <Button onClick={onClose} mode="minor">
              Нет
            </Button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
