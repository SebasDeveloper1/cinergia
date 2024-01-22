// Import necessary dependencies and types
import { fetchHomeSection, fetchMovieDetails } from '@/app/lib/data/fetch';
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
  // // Fetch currently playing movies using the fetchMovieNowPlaying function
  // const { results: DocumentalListResults }: ResultsMoviesTypes =
  //   await fetchMovieNowPlaying();

  const { data }: HomeSectionrRootAPI = await fetchHomeSection({
    section: 'cortos-gratuitos',
  });
  const sectionInfo: HomeSectionAPI = data[0].home_section[0];
  const movieListReverse = sectionInfo?.home_section_movie.reverse();

  const firstMovie = movieListReverse[0]?.movies;

  const firstMovieDetails = await fetchMovieDetails(firstMovie?.slug);

  /**
   * Render the JSX for the ShortFilmsBannerSection component
   */
  return (
    <BannerSliderMovie
      sectionTitle="Cortometrajes Gratuitos"
      background={sectionInfo?.background}
      firstMovieDetails={firstMovieDetails?.data}
      movieList={sectionInfo?.home_section_movie}
    />
  );
}
