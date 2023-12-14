'use client';
import { useState, useEffect } from 'react';

/**
 * RecommendedMovieBanner Component
 *
 * A React component presenting a banner with information about a recommended movie.
 *
 * @component
 * @param {Object} props - Props for the RecommendedMovieBanner component.
 * @param {string} props.titleBanner - The title for the banner section.
 * @param {MovieType} props.movieData - Information about the recommended movie.
 * @returns {JSX.Element} - JSX element representing the RecommendedMovieBanner component.
 */
export default function RecommendedMovieBanner({
  titleBanner,
  movieData,
}: {
  titleBanner: string;
  movieData: MovieType;
}): JSX.Element {
  // Destructure movieData to extract relevant information
  const { backdrop_path, title, overview, production_companies } = movieData;

  // Set up state for the width of the movie backdrop image
  const [widthBackdropMovie, setWidthBackdropMovie] = useState<string>('w780');

  // Construct the background image URL using the backdrop path and width
  const backgroundImageUrl = `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`;

  // Effect hook to handle window resize events and update the backdrop width accordingly
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth >= 768 ? 'w1280' : 'w780';
      setWidthBackdropMovie(width);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /**
   * Render the JSX for the RecommendedMovieBanner component
   */
  return (
    <section
      className="flex items-center justify-center w-full min-h-[80vh] bg-cover bg-center "
      style={{
        backgroundImage: backgroundImageUrl,
      }}
    >
      <div className="relative flex items-end justify-center w-full min-h-[80vh] py-16 lg:py-24 bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/70 to-transparent">
        <span className="absolute top-0 left-0 span-xl text-2xl text-primary-50 font-semibold px-8 py-2.5 rounded-br-full bg-gradient-to-tr from-primary-800 to-purple-500">
          {titleBanner}
        </span>
        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-4 w-full">
            {/* Banner title and movie information */}
            <div className="w-full">
              {/* Movie title */}
              <h2 className="heading-2 font-extrabold text-primary-50 max-w-prose">
                {title}
              </h2>
            </div>

            {/* Production company name */}
            <span className="span-xl text-white font-medium">
              {production_companies[0].name}
            </span>

            {/* Movie overview */}
            <p className="paragraph-lg line-clamp-5 lg:line-clamp-none font-normal text-primary-100 max-w-prose">
              {overview}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-start items-center w-full">
            {/* "Watch Movie" button */}
            <button
              className="button-secondary padding-button w-full md:w-fit"
              onClick={() => console.log('hello world')}
            >
              Watch Movie
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
