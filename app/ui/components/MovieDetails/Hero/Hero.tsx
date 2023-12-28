// Importa las dependencias y componentes necesarios
import { fetchMovieDetails } from '@/app/lib/data/data';
import { HeroCard } from './HeroCard';

/**
 * Hero Component for Movie Details Page
 *
 * Fetches and displays the main information of a movie using a HeroCard.
 *
 * @module Hero
 * @component
 * @param {Object} props - Component properties.
 * @param {number} props.movieId - The ID of the movie for which to retrieve and display information.
 * @returns {JSX.Element} - JSX element representing the Hero component.
 *
 * @example
 * // Usage of the Hero component in some other component or view
 * <Hero movieId={123} />
 */
export async function Hero({
  movieId,
}: {
  movieId: number;
}): Promise<JSX.Element> {
  // Fetches movie information based on the provided ID
  const movieData: MovieType = await fetchMovieDetails(movieId);

  // Renders the HeroCard with the movie information
  return <HeroCard movieData={movieData} />;
}
