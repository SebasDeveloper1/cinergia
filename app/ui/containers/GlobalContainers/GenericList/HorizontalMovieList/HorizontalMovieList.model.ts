import { HTMLAttributes } from 'react';

export interface HorizontalMovieListTypes
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  path: string;
  movieList: TrendingMovieType[] | MovieType[];
}
