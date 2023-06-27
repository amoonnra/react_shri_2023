"use client";

import { FC } from "react";
import styles from "../app/page.module.scss";
import { useGetAllMoviesQuery } from "@/store/movieReducer";
import { useAppSelector } from "@/store/hooks";
import { TicketCardsList } from "@/Common/Components/TicketCardsList";

export const Content: FC = () => {
  const { cinema, genre, name } = useAppSelector((state) => state.filter);
  const { data, isLoading, isFetching } = useGetAllMoviesQuery(cinema);

  let filtredData = data?.filter(
    (movie) =>
      (name
        ? movie.title
            .toLocaleLowerCase()
            .startsWith(name.toLocaleLowerCase().trim())
        : true) && (genre ? genre === movie.genre : true)
  );

  return (
    <main className={styles.content}>
      <TicketCardsList
        isLoading={isLoading || isFetching}
        tikets={filtredData || []}
      />
    </main>
  );
};
