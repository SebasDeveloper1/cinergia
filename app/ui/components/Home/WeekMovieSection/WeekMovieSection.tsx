// Import necessary dependencies and types
import { fetchHomeSection, fetchMovieDetails } from '@/app/lib/data/fetch';
import { RecommendedMovieBanner } from '@/app/ui/components/Home/RecommendedMovieBanner';

/**
 * WeekMovieSection Component
 *
 * A React component that fetches details of a specific movie and displays it as the recommended movie of the week.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the WeekMovieSection component.
 * @throws {Error} - Throws an error if there's an issue fetching data for the WeekMovieSection component.
 */
export async function WeekMovieSection(): Promise<JSX.Element> {
  try {
    // Fetch data for the "Película de la semana" section
    const { data }: HomeSectionRequestAPI = await fetchHomeSection({
      section: 'pelicula-de-la-semana',
    });

    const sectionInfo: HomeSectionAPI = data[0]?.home_section[0];
    const movieList: HomeSectionMovieAPI[] = sectionInfo?.home_section_movie;
    const firstMovie: MoviesAPI = movieList[0]?.movies;

    // Fetch details for the recommended movie
    const { data: firstMovieDetails }: { data: MovieDetailsAPI } =
      await fetchMovieDetails(firstMovie?.slug);

    /**
     * Render the JSX for the WeekMovieSection component
     */
    return (
      <RecommendedMovieBanner
        titleBanner="Película de la semana"
        background={sectionInfo?.background}
        movieData={firstMovieDetails}
      />
    );
  } catch (error) {
    // Handle errors and throw an informative error message
    throw new Error(`Error fetching data for WeekMovieSection: ${error}`);
  }
}
