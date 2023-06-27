"use client";

import Image from "next/image";
import styles from "./TicketCard.module.scss";
import { TicketsOperations } from "./TicketsOperations";
import Link from "next/link";

export interface ITicketCardProps {
  id: string;
  poster: string;
  title: string;
  genre: string;
  numInBusket?: number;
}

export function TicketCard({ title, poster, genre, id }: ITicketCardProps) {
  return (
    <>
      <article className={styles.ticketCard}>
        <div className={styles.ticketInfo}>
          <Image
            src={poster}
            style={{
              objectFit: "cover",
            }}
            alt={title}
            width={100}
            height={100}
            className={styles.poster}
          />
          <div>
            <Link href={`movie/${id}`}>
              <h2>{title}</h2>
            </Link>
            <i>{genre}</i>
          </div>
        </div>

        <TicketsOperations id={id} />
      </article>
    </>
  );
}
