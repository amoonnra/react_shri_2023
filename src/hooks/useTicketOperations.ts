import { addOneTicketToMovie, getTicketsNumByMovie, removeOneTicketToMovie } from "@/store/basketReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { usePathname } from "next/navigation";
import { useState } from "react";

const useTicketsOperations = (id: string) => {
	const isBascketPage = usePathname() === "/basket";

  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();

  const ticketsNumInBasket = useAppSelector(getTicketsNumByMovie(id));
  const handleAddOneTicket = () => dispatch(addOneTicketToMovie(id));
  const handleRemoveOneTicket = () => {
    if (isBascketPage && ticketsNumInBasket === 1) setIsOpenModal(true);
    else dispatch(removeOneTicketToMovie(id));
  };

  return [handleAddOneTicket, handleRemoveOneTicket]
}