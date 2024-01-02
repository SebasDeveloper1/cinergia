// Import necessary dependencies and types
import { fetchMovieDetails, fetchTrending } from '@/app/lib/data/data';
import { HeroSlider } from './HeroSlider';

/**
 * Hero Component
 *
 * The Hero component displays a slider featuring trending movies on the home page.
 * It fetches information about trending movies, extracts relevant details,
 * and passes the data to the HeroSlider component.
 *
 * @component
 * @returns {Promise<JSX.Element>} - A promise resolving to the JSX element representing the Hero component.
 */
export async function Hero(): Promise<JSX.Element> {
  // Fetch trending movies
  const { results: trendingResults } = await fetchTrending();

  // Extract the IDs of the first 5 trending movies
  const TrendingMovieIds: number[] = trendingResults
    .slice(0, 5)
    .map((element: TrendingMovieType) => element.id);

  // Fetch details for each trending movie concurrently
  const moviesData: MovieType[] = await Promise.all(
    TrendingMovieIds.map(async (id: number) => await fetchMovieDetails(id)),
  );

  // Render the HeroSlider component with the fetched movie data
  return (
    <>
      <HeroSlider movieList={moviesData} />
    </>
  );
}
