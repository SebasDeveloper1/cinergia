import { fetchMovieList } from '@/app/lib/data/data';
import { genresList } from '@/app/lib/data/genreList/genreList';
import { Hero } from '@/app/ui/components/Genres/Hero';

/**
 * Genre Page
 *
 * This page component fetches and displays information about movies belonging to a specific genre.
 * It utilizes the `fetchMovieList` function to retrieve the list of movies for the specified genre,
 * and displays a Hero component featuring the first movie from the fetched list.
 *
 * @component
 * @param {Object} params - The parameters object containing the genre slug.
 * @param {string} params.genre - The slug of the genre to display.
 * @returns {JSX.Element} - JSX element representing the Genre Page.
 */
export default async function GenrePage({
  params,
}: {
  params: { genre: string };
}) {
  // Extract genre slug from parameters
  const genreSlug = params.genre;

  // Find genre information based on the slug
  const genreInfo = genresList.find((genre) => genre.slug === genreSlug);

  // If genre information is not found, display a "Not found" message
  if (!genreInfo) {
    return <div className="mt-20">Not found</div>;
  }

  try {
    // Fetch the list of movies for the specified genre
    const movieList = await fetchMovieList({ genreId: genreInfo.id });

    // If there are movies available, display the Hero component with information about the first movie
    if (movieList.results.length > 0) {
      const firstMovie = movieList.results[0];

      return (
        <section>
          <Hero genreInfo={genreInfo} movieInfo={firstMovie} />
        </section>
      );
    }
  } catch (error) {
    // Handle errors when fetching the movie list
    console.error('Error fetching movie list:', error);
  }

  // Display a message when no movies are available
  return <div className="mt-20">No movies available</div>;
}
