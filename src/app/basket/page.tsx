"use client";

import { TicketCardsList } from "@/Common/Components/TicketCardsList";
import { getAllMoviesInBasket } from "@/store/basketReducer";
import { useAppSelector } from "@/store/hooks";
import { useGetAllMoviesQuery } from "@/store/movieReducer";
import { FC } from "react";

const BasketPage: FC = () => {
  const { data, isLoading, isFetching } = useGetAllMoviesQuery();
  const moviesInBasket = useAppSelector(getAllMoviesInBasket);
  const moviesList = data?.filter((movie) => movie.id in moviesInBasket);

  return (
    <div style={{width: '100%', height: '100%'}}>
      <TicketCardsList
        isLoading={isLoading || isFetching}
        tikets={moviesList || []}
      />
    </div>
  );
};

export default BasketPage;
