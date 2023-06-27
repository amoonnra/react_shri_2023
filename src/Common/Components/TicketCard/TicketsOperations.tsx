import {
  addOneTicketToMovie,
  getTicketsNumByMovie,
  removeAllTicketsByMovie,
  removeOneTicketToMovie,
} from "@/store/basketReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useState } from "react";
import PlusIcon from "assets/icons/plus.svg";
import MinusIcon from "assets/icons/minus.svg";
import CloseIcon from "assets/icons/close.svg";
import styles from "./TicketCard.module.scss";
import { Modal } from "@/UI/Modal";
import { usePathname } from "next/navigation";

export const TicketsOperations: FC<{ id: string }> = ({ id }) => {
  const isBascketPage = usePathname() === "/basket";
  console.log(usePathname())

  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();

  const ticketsNumInBasket = useAppSelector(getTicketsNumByMovie(id));
  const handleAddOneTicket = () => dispatch(addOneTicketToMovie(id));
  const handleRemoveOneTicket = () => {
    if (isBascketPage && ticketsNumInBasket === 1) setIsOpenModal(true);
    else dispatch(removeOneTicketToMovie(id));
  };

  const isDisabledPlusButton = Boolean(
    ticketsNumInBasket && ticketsNumInBasket >= 30
  );
  const isDisabledMinusButton = (ticketsNumInBasket || 0) <= 0;

  return (
    <>
      <div className={styles.buttonsBlock}>
        <div className={styles.basketBlock}>
          <button onClick={handleAddOneTicket} disabled={isDisabledPlusButton}>
            <PlusIcon />
          </button>
          <span>{ticketsNumInBasket || 0}</span>
          <button
            onClick={handleRemoveOneTicket}
            disabled={isDisabledMinusButton}
          >
            <MinusIcon />
          </button>
        </div>
        {isBascketPage && (
          <button onClick={() => setIsOpenModal(!isOpenModal)}>
            <CloseIcon />
          </button>
        )}
      </div>

      <Modal
        title="Удаление билета"
        body="Вы уверены, что хотите удалить билет?"
        isOpened={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        confirmCallback={() => dispatch(removeAllTicketsByMovie(id))}
      />
    </>
  );
};
