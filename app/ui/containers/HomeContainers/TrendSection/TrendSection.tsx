import { fetchTrending } from '@/app/lib/data/data';
import HorizontalMovieListPrimary from '../../GlobalContainers/GenericList/HorizontalMovieList/HorizontalMovieListPrimary/HorizontalMovieListPrimary';

/**
 * TrendSection Component
 *
 * A React component that fetches trending movies and displays them in a horizontal movie list.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the TrendSection component.
 */
export default async function TrendSection(): Promise<JSX.Element> {
  // Fetch trending movies using the fetchTrending function
  const { results: trendingResults }: { results: TrendingMovieType[] } =
    await fetchTrending();

  // Return the JSX element with the HorizontalMovieListPrimary component
  return (
    <section className="flex justify-center items-center w-full pb-16 bg-bgPrimaryDark">
      <HorizontalMovieListPrimary
        title="Tendencias"
        path="/"
        movieList={trendingResults}
      />
    </section>
  );
}
