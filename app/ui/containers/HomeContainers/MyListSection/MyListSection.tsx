import { fetchMovieNowPlaying } from '@/app/lib/data/data';
import HorizontalMovieListPrimary from '../../GlobalContainers/GenericList/HorizontalMovieList/HorizontalMovieListPrimary/HorizontalMovieListPrimary';

/**
 * MyListSection Component
 *
 * A React component that fetches currently playing movies and displays them in a horizontal movie list.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the MyListSection component.
 */
export default async function MyListSection(): Promise<JSX.Element> {
  // Fetch currently playing movies using the fetchMovieNowPlaying function
  const { results: MyListResults }: { results: MovieType[] } =
    await fetchMovieNowPlaying();

  // Return the JSX element with the HorizontalMovieListPrimary component
  return (
    <section className="flex justify-center items-center w-full pb-16 bg-bgPrimaryDark">
      <HorizontalMovieListPrimary
        title="Mi lista"
        path="/"
        movieList={MyListResults}
      />
    </section>
  );
}
