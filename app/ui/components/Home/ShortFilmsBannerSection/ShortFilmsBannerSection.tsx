// Import necessary dependencies and types
import { fetchMovieNowPlaying } from '@/app/lib/data/data';
import { BannerSliderMovie } from '@/app/ui/components/shared/Sliders/BannerSliderMovie';

/**
 * ShortFilmsBannerSection Component
 *
 * The ShortFilmsBannerSection component fetches currently playing movies and displays them in a banner slider.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the ShortFilmsBannerSection component.
 */
export async function ShortFilmsBannerSection(): Promise<JSX.Element> {
  // Fetch currently playing movies using the fetchMovieNowPlaying function
  const { results: DocumentalListResults }: ResultsMoviesTypes =
    await fetchMovieNowPlaying();

  /**
   * Render the JSX for the ShortFilmsBannerSection component
   */
  return (
    <BannerSliderMovie
      sectionTitle="Cortometrajes Gratuitos"
      movieList={DocumentalListResults}
    />
  );
}
