"use client";

import { TicketCardsList } from "@/Common/Components/TicketCardsList";
import {
  getAllMoviesInBasket,
  getAllTicketsSelector,
} from "@/store/basketReducer";
import { useAppSelector } from "@/store/hooks";
import { useGetAllMoviesQuery } from "@/store/movieReducer";
import { FC } from "react";

const BasketPage: FC = () => {
  const { data, isLoading, isFetching } = useGetAllMoviesQuery();
  const moviesInBasket = useAppSelector(getAllMoviesInBasket);
  const allNum = useAppSelector(getAllTicketsSelector);
  const moviesList = data?.filter((movie) => movie.id in moviesInBasket);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: '100%',
        marginTop: '24px'
        
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <TicketCardsList
          isLoading={isLoading || isFetching}
          tikets={moviesList || []}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px'
        }}
      >
        <b>Итого билетов:</b>
        <b>{allNum}</b>
      </div>
    </div>
  );
};

export default BasketPage;
