'use client';
// Import necessary dependencies and types
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ExclusiveSectionCardPropsTypes } from './ExclusiveSectionCard.model';
import createMovieSlug from '@/app/lib/utils/createMovieSlug';

/**
 * ExclusiveSectionCard Component
 *
 * The ExclusiveSectionCard component displays detailed information about an exclusive movie.
 * It includes a backdrop image, movie title, production company, overview, and action buttons.
 * The backdrop image dynamically adjusts its width based on the window size.
 *
 * @component
 * @param {ExclusiveSectionCardPropsTypes} props - Props for configuring the ExclusiveSectionCard component.
 * @param {MovieType} props.movieData - Movie data used to populate the card.
 * @returns {JSX.Element} - JSX element representing the ExclusiveSectionCard component.
 */
export function ExclusiveSectionCard({
  movieData,
}: ExclusiveSectionCardPropsTypes): JSX.Element {
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

  // Render the JSX for the ExclusiveSectionCard component
  return (
    <section
      className="relative flex items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg bg-cover bg-center "
      style={{
        backgroundImage: backgroundImageUrl,
      }}
    >
      <div className="z-10 absolute -top-10 -left-5 py-12 pr-24 bg-greenBrushStroke5 bg-contain bg-center bg-no-repeat">
        <span className="w-full pl-12 pr-24 py-12 span-xl text-2xl lg:text-4xl text-textColorNeutral-50 font-semibold whitespace-nowrap">
          Exclusiva
        </span>
      </div>
      <div className="relative flex items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg py-5 lg:py-10 bg-gradient-to-br from-bgPrimaryDark/70 via-bgPrimaryDark/50 to-transparent after:absolute after:inset-x-0 after:bottom-0 after:w-full after:h-4 after:bg-gradient-to-t after:from-bgPrimaryDark after:to-transparent">
        <div className="z-30 flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-4 w-full">
            {/* Exclusive badge */}
            <div className="flex flex-col w-full">
              {/* Movie title */}
              <h2 className="heading-2 mt-16 font-extrabold text-textColorNeutral-50 max-w-prose">
                {title}
              </h2>
            </div>

            {/* Production company name */}
            <span className="span-xl text-textColorNeutral-50 font-medium">
              {production_companies[0].name}
            </span>

            {/* Movie overview */}
            <p className="paragraph-base line-clamp-5 lg:line-clamp-none font-normal text-textColorNeutral-50 max-w-prose">
              {overview}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-start items-center w-full">
            {/* "Ver película" button */}
            <Link
              className="button-secondary padding-button w-full md:w-fit"
              href={`/peliculas/${createMovieSlug({ id, title })}`}
            >
              Ver Película
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
