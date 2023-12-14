import { fetchMovieDetails } from '@/app/lib/data/data';
import RecommendedMovieBanner from '@/app/ui/components/HomeComponents/RecommendedMovieBanner/RecommendedMovieBanner';

/**
 * WeekMovieSection Component
 *
 * A React component that fetches details of a specific movie and displays it as the recommended movie of the week.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the WeekMovieSection component.
 */
export default async function WeekMovieSection(): Promise<JSX.Element> {
  // Fetch details of a specific movie using the fetchMovieDetails function
  const moviesData: MovieType = await fetchMovieDetails(753342);

  /**
   * Render the JSX for the WeekMovieSection component
   */
  return (
    <RecommendedMovieBanner
      titleBanner="Película de la semana"
      movieData={moviesData}
    />
  );
}
