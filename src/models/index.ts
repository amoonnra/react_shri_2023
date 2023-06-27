export interface IMovie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface ICinema {
  id: string;
  name: string;
  movieIds: string[];
}

export interface ISelectorOption<T = string> {
  id: string | undefined;
  label: string;
  value?: T;
}

export interface IReview {
  id: string,
  name: string,
  text: string,
  rating: number
  avatar?: string
}