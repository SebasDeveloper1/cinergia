// Import necessary dependencies and types
import { fetchMovieDataForGenres } from '@/app/lib/data/data';
import { HorizontalMovieListPrimary } from '@/app/ui/components/shared/HorizontalMovieList/HorizontalMovieListPrimary';
import { genresList } from '@/app/lib/data/genreList/genreList';

/**
 * Component that fetches movie data for specified genres and displays them in a horizontal list.
 * @component
 * @returns {Promise<JSX.Element>} The rendered section with HorizontalMovieListPrimary components.
 */
export async function ListSection(): Promise<JSX.Element> {
  /**
   * Fetches movie data for the specified genres.
   * @function
   * @async
   * @returns {Promise<Array<{genre: string, movies: Array<MovieType>}>>} Array of objects representing genres and associated movies.
   */
  const list = await fetchMovieDataForGenres(genresList);

  return (
    /**
     * Rendered section displaying a list of movies organized by genre.
     * @returns {JSX.Element}
     */
    <section className="w-full py-10 md:py-20 bg-bgPrimaryDark">
      <div className="flex flex-col justify-center items-center gap-8 w-11/12 md:10/12 mx-auto">
        <div className="flex flex-col justify-center items-center gap-8 w-11/12 md:10/12">
          {list.map((item) => (
            /**
             * Horizontal list of movies for a specific genre.
             * @returns {JSX.Element}
             */
            <HorizontalMovieListPrimary
              key={`genreList_${item.genre}`}
              title={item.genre}
              movieList={item.movies}
              path={'/'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
