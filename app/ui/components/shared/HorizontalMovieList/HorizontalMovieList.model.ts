import { HTMLAttributes } from 'react';

export interface HorizontalMovieListTypes
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  path: string;
  movieList: FreeShortsMoviesListAPI[];
}

export interface HorizontalMovieListPrimaryTypes
  extends HorizontalMovieListTypes {}

export interface HorizontalMovieListSecondaryTypes
  extends HorizontalMovieListTypes {
  description?: string;
}
