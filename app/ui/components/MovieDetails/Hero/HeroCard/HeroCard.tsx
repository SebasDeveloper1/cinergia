'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';
import convertMinutesToHours from '@/app/lib/utils/convertMinutesToHours';
import { HeroCardProps } from './HeroCard.model';
import extractValuesByKey from '@/app/lib/utils/extractValuesByKey';
import PlayButton from './PlayButton/PlayButton';
import InfoSection from './InfoSection/InfoSection';
import OverviewSectionSM from './OverviewSectionSM/OverviewSectionSM';

/**
 * HeroCard Component
 *
 * The HeroCard component represents a card displaying detailed information
 * about a movie, including title, release date, runtime, and overview.
 * It also includes a background image and a button to view the movie.
 *
 * @component
 * @param {HeroCardProps} props - Props for configuring the HeroCard component.
 * @param {MovieType} props.movieData - Movie data used to populate the card.
 * @returns {JSX.Element} - JSX element representing the HeroCard component.
 */
export function HeroCard({ movieData }: HeroCardProps): JSX.Element {
  // Destructure movieData for easier access
  const {
    backdrop_path,
    title,
    production_companies,
    production_countries,
    genres,
    release_date,
    runtime,
    spoken_languages,
    overview,
  } = movieData;

  const productionCompanies = extractValuesByKey({
    array: production_companies,
    key: 'name',
  });
  const productionCountries = extractValuesByKey({
    array: production_countries,
    key: 'name',
  });
  const genreList = extractValuesByKey({
    array: genres,
    key: 'name',
  });
  const spokenLanguages = extractValuesByKey({
    array: spoken_languages,
    key: 'name',
  });

  const detailsMovieList = [
    {
      name: 'type',
      data: 'Película',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-device-tv"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <path d="M16 3l-4 4l-4 -4" />
        </svg>
      ),
    },
    {
      name: 'runtime',
      data: convertMinutesToHours(runtime),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-clock"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      name: 'release_date',
      data: release_date !== undefined && new Date(release_date).getFullYear(),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-calendar-event"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M16 3l0 4" />
          <path d="M8 3l0 4" />
          <path d="M4 11l16 0" />
          <path d="M8 15h2v2h-2z" />
        </svg>
      ),
    },
    {
      name: 'spoken_lenguages',
      data: spokenLanguages,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-volume"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 8a5 5 0 0 1 0 8" />
          <path d="M17.7 5a9 9 0 0 1 0 14" />
          <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
        </svg>
      ),
    },
  ];

  // State to dynamically adjust the width of the backdrop image based on screen size
  const [widthBackdropMovie, setWidthBackdropMovie] =
    useState<string>('original');

  useEffect(() => {
    // Function to handle resizing and adjust the width accordingly
    const handleResize = () => {
      const width = window.innerWidth >= 768 ? 'original' : 'original';
      setWidthBackdropMovie(width);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Render the HeroCard component with movie details
  return (
    <>
      <section
        className="overflow-hidden w-full min-h-screen bg-cover bg-center "
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`,
        }}
      >
        <article className="w-full min-h-screen flex justify-center items-center bg-gradient-to-t from-bgPrimaryDark/80 via-bgPrimaryDark/10 to-transparent">
          <div className="grid grid-rows-2 justify-items-center items-end gap-16 w-11/12 min-h-screen py-16 lg:pt-[4.5rem] lg:pb-9">
            <PlayButton path="" />
            <InfoSection
              title={title ? title : ''}
              productionCompanies={productionCompanies}
              productionCountries={productionCountries}
              genreList={genreList}
              detailsMovieList={detailsMovieList}
              overview={overview}
            />
          </div>
        </article>
      </section>
      <OverviewSectionSM overview={overview} whySeeIt={overview} />
    </>
  );
}
