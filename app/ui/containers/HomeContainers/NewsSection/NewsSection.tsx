import { fetchTrending } from '@/app/lib/data/data';
import HorizontalMovieListSecondary from '../../GlobalContainers/GenericList/HorizontalMovieList/HorizontalMovieListSecondary/HorizontalMovieListSecondary';

/**
 * NewsSection Component
 *
 * A React component that fetches trending movies and displays them in a styled horizontal movie list.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the NewsSection component.
 */
// Define the NewsSection component as an asynchronous function
export default async function NewsSection(): Promise<JSX.Element> {
  // Fetch trending movies using the fetchTrending function
  const { results: trendingResults }: { results: TrendingMovieType[] } =
    await fetchTrending();

  // Return the JSX element with the HorizontalMovieListSecondary component
  return (
    // JSX structure representing the NewsSection component
    <section className="flex justify-center items-center w-full py-16 md:py-28 bg-bgPrimaryDark">
      {/* Render the HorizontalMovieListSecondary component with specified props */}
      <HorizontalMovieListSecondary
        title="Tendencias"
        description="Millones de películas, programas de televisión y personas por descubrir. Explora ahora."
        path="/"
        movieList={trendingResults}
        className="w-11/12 rounded-lg px-4 py-8 md:px-8 md:py-16 bg-bgSecondaryDark/40 "
      />
    </section>
  );
}
