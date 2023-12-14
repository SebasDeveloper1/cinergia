import { fetchMovieNowPlaying } from '@/app/lib/data/data';
import BannerSliderMovie from '@/app/ui/components/Sliders/BannerSliderMovie/BannerSliderMovie';

/**
 * ShortFilmsBannerSection Component
 *
 * A React component that fetches currently playing movies and displays them in a banner slider.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the ShortFilmsBannerSection component.
 */
export default async function ShortFilmsBannerSection(): Promise<JSX.Element> {
  // Fetch currently playing movies using the fetchMovieNowPlaying function
  const { results: DocumentalListResults }: { results: MovieType[] } =
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
