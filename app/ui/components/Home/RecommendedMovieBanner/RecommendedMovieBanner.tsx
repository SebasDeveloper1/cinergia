'use client';
// Import necessary dependencies and types
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { RecommendedMovieBannerPropsTypes } from './RecommendedMovieBanner.model';
import createMovieSlug from '@/app/lib/utils/createMovieSlug';
import Figure1 from '@/app/ui/components/shared/assets/Figure1';

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
export function RecommendedMovieBanner({
  titleBanner,
  movieData,
}: RecommendedMovieBannerPropsTypes): JSX.Element {
  // Destructure movieData to extract relevant information
  const { id, backdrop_path, title, overview, production_companies } =
    movieData;

  // Set up state for the width of the movie backdrop image
  const [widthBackdropMovie, setWidthBackdropMovie] =
    useState<string>('original');

  // Construct the background image URL using the backdrop path and width
  const backgroundImageUrl = `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`;

  // Effect hook to handle window resize events and update the backdrop width accordingly
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth >= 768 ? 'original' : 'original';
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
      className="flex items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg bg-cover bg-center "
      style={{
        backgroundImage: backgroundImageUrl,
      }}
    >
      <div className="relative flex items-end justify-center w-full min-height-banner--sm lg:min-height-banner--lg py-16 lg:py-24 bg-gradient-to-br from-bgPrimaryDark/70 via-bgPrimaryDark/50 to-transparent">
        <div className="absolute top-0 left-0 w-full md:w-3/6 lg:w-2/5">
          <Figure1 className="w-full h-full text-secondary-600" />
          <span className="z-10 absolute top-[50%] left-[20%] transform translate-x-[-20%] translate-y-[-50%] rotate-[8deg] span-xl text-2xl lg:text-4xl text-textColorNeutral-50 font-semibold whitespace-nowrap">
            {titleBanner}
          </span>
        </div>

        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-1 w-full">
            {/* Banner title and movie information */}
            <div className="w-full">
              {/* Movie title */}
              <h2 className="heading-2 font-extrabold text-textColorNeutral-50 max-w-prose">
                {title}
              </h2>
            </div>

            {/* Production company name */}
            <span className="span-xl text-textColorAccent-500 font-semibold mb-5">
              {production_companies[0].name}
            </span>

            {/* Movie overview */}
            <p className="paragraph-lg line-clamp-5 lg:line-clamp-none font-normal text-textColorNeutral-50 max-w-prose">
              {overview}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-start items-center w-full">
            {/* "Ver Película" button */}
            <Link
              className="button-secondary padding-button w-full md:w-fit"
              href={`/peliculas/${createMovieSlug({ id, title })}`}
            >
              Ver película
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}