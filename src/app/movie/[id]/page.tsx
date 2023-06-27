"use client";

import {
  useGetMovieByIdQuery,
  useGetReviwsByMovieIdQuery,
} from "@/store/movieReducer";
import { useParams } from "next/navigation";
import styles from "./moviePage.module.scss";
import Image from "next/image";
import { FC } from "react";
import { useAppSelector } from "@/store/hooks";
import { IMovie, IReview } from "@/models";
import NophotoIcon from "assets/icons/nophoto.svg";
import { Loader } from "@/UI/Loader";
import { TicketsOperations } from "@/Common/Components/TicketCard/TicketsOperations";

type isLoading = { isLoading: boolean };

const MovieInfo: FC<{ movie: IMovie } & isLoading> = ({ movie, isLoading }) => {
  const genreDict = useAppSelector((state) => state.genres);

  if (isLoading) return <Loader />;
  return (
    <article className={styles.movieInfo}>
      <Image
        src={movie.posterUrl}
        style={{
          objectFit: "cover",
          borderRadius: 8,
        }}
        alt={movie.title}
        width={400}
        height={500}
      />
      <div className={styles.textBlock}>
        <div className={styles.topBlock}>
          <h1>{movie.title}</h1>
          <TicketsOperations id={movie.id} />
        </div>
        <ul>
          <li>
            <b>Жанр: </b>
            {genreDict[movie.genre]}
          </li>
          <li>
            <b>Год выпуска: </b>
            {movie.releaseYear}
          </li>
          <li>
            <b>Рейтинг: </b>
            {movie.rating}
          </li>
          <li>
            <b>Режиссер: </b>
            {movie.director}
          </li>
        </ul>
        <div className={styles.description}>
          <b>Описание</b>
          <p>{movie.description}</p>
        </div>
      </div>
    </article>
  );
};

const Review: FC<{ review: IReview }> = ({ review }) => {
  return (
    <div className={styles.rewiew}>
      {review.avatar ? (
        <Image
          src={review.avatar}
          style={{
            objectFit: "cover",
            borderRadius: 8,
          }}
          alt={review.name}
          width={400}
          height={500}
        />
      ) : (
        <div className={styles.nophoto}>
          <NophotoIcon />
        </div>
      )}
      <div style={{ width: "100%" }}>
        <div className={styles.topBlock}>
          <span>{review.name}</span>
          <div>
            Оценка: <b>{review.rating}</b>
          </div>
        </div>
        <p>{review.text}</p>
      </div>
    </div>
  );
};

const MoviePage: FC = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isFetching } = useGetMovieByIdQuery(id);
  const {
    data: reviews,
    isLoading: isLoadingReviews,
    isFetching: isFetchingReviews,
  } = useGetReviwsByMovieIdQuery(id);
  if (!movie || !reviews) return null;

  return (
    <main className={styles.moviePage}>
      <MovieInfo isLoading={isLoading || isFetching} movie={movie} />
      {isLoadingReviews || isFetchingReviews ? (
        <Loader />
      ) : (
        reviews.map((review) => <Review key={review.id} review={review} />)
      )}
    </main>
  );
};

export default MoviePage;
