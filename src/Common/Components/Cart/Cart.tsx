import { FC, useMemo } from "react";
import BasketIcon from "assets/icons/basket.svg";
import { useAppSelector } from "@/store/hooks";
import { getAllTicketsSelector } from "@/store/basketReducer";
import styles from "./Cart.module.scss";
import Link from "next/link";

export const Cart: FC = () => {
  const allTickets = useAppSelector(getAllTicketsSelector);
  const numTicketsLabel = useMemo(
    () => <span className={styles.numLabel}>{allTickets}</span>,
    [allTickets]
  );

  return (
    <Link href="/basket">
      <div className={styles.basket}>
        {allTickets > 0 && numTicketsLabel}
        <BasketIcon />
      </div>
    </Link>
  );
};
