'use client';
// Import necessary dependencies and types
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Figure1 from '../../../shared/assets/Figure1';
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
      <Figure1 className="z-20 absolute -top-[4%] lg-top-[6%] -left-[10%] w-3/5 md:w-2/5 text-secondary-500" />

      <div className="relative flex items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg py-5 lg:py-10 bg-gradient-to-br from-bgPrimaryDark/70 via-bgPrimaryDark/50 to-transparent after:absolute after:inset-x-0 after:bottom-0 after:w-full after:h-4 after:bg-gradient-to-t after:from-bgPrimaryDark after:to-transparent">
        <div className="z-30flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-4 w-full">
            {/* Exclusive badge */}
            <div className="flex flex-col w-full">
              <span className="relative lg:self-end w-fit px-3 py-2 rounded-md border border-dashed border-borderNeutral-100/20 bg-dark-500/5">
                <span className="absolute -top-2 -right-2 ">
                  <span className="relative flex w-4 aspect-square">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75" />
                    <span className="relative inline-flex rounded-full w-4 aspect-square bg-secondary-500" />
                  </span>
                </span>
                <span className="span-xl text-textColorNeutral-50 font-semibold">
                  {'Exclusiva'}
                </span>
              </span>

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

            {/* "Ver exclusivas" button */}
            <button
              className="button-outlined padding-button w-full md:w-fit"
              onClick={() => console.log('hello world')}
            >
              Ver Exclusivas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
