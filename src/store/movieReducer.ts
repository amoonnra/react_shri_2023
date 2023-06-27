import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICinema, IMovie, IReview } from '@/models'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getCinemas: builder.query<ICinema[], void>({
      query: () => `cinemas`,
    }),
    getReviwsByMovieId: builder.query<IReview[], string>({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
    getAllMovies: builder.query<IMovie[], string | void>({
      query: (cinemaId) =>  cinemaId ? `movies?cinemaId=${cinemaId} ` : 'movies',
    }),
    getMovieById: builder.query<IMovie, string>({
      query: (movieId) => `movie?movieId=${movieId} `,
    }),
  }),
})

export const { useGetCinemasQuery, useGetAllMoviesQuery, useGetMovieByIdQuery, useGetReviwsByMovieIdQuery } = moviesApi
