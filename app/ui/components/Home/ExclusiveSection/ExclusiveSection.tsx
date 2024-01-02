// Import necessary dependencies and types
import { fetchMovieDetails } from '@/app/lib/data/data';
import { ExclusiveSectionCard } from './ExclusiveSectionCard';

/**
 * ExclusiveSection Component
 *
 * The ExclusiveSection component fetches details for a specific movie (id: 502356)
 * using the fetchMovieDetails function. It then renders an ExclusiveSectionCard
 * component to display information about the exclusive movie.
 *
 * @component
 * @returns {Promise<JSX.Element>} - A promise resolving to the JSX element representing the ExclusiveSection component.
 */
export async function ExclusiveSection(): Promise<JSX.Element> {
  // Fetch details for the exclusive movie (id: 502356)
  const moviesData: MovieType = await fetchMovieDetails(502356);

  // Render the ExclusiveSectionCard component with the fetched movie data
  return <ExclusiveSectionCard movieData={moviesData} />;
}
