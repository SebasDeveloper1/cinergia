// Import necessary dependencies and types
import React from 'react';
import { fetchMovieDetails, fetchTrending } from '@/app/lib/data/data';
import HeroCard from '@/app/ui/components/ContentComponents/HeroComponents/HeroCard';
/**
 * Fetches trending movies and renders the HeroCard component.
 * @component
 * @returns {Promise<JSX.Element>} - The rendered HeroCard component with trending movies.
 */

export default async function Hero(): Promise<JSX.Element> {
  // Fetch trending movies
  const { results: trendingResults }: ResultsTrendingTypes =
    await fetchTrending();

  // Extract movie IDs from trending results
  const trendingMovieIds: number[] = trendingResults.map(
    (element: TrendingMovieType) => element.id,
  );

  // Fetch details for each trending movie
  const moviesData: MovieType[] = await Promise.all(
    trendingMovieIds.map(async (id: number) => await fetchMovieDetails(id)),
  );

  return (
    <>
      {/* Render the HeroCard component with trending movies */}
      <HeroCard movieList={moviesData} />
    </>
  );
}
