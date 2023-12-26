'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';
import { HeroCardPropsTypes } from './Hero.model';
import HorizontalMovieListPrimary from '@/app/ui/containers/GlobalContainers/GenericList/HorizontalMovieList/HorizontalMovieListPrimary/HorizontalMovieListPrimary';

/**
 * HeroCard Component
 *
 * This component represents a hero card for a movie, displaying key information
 * and a dynamic background adjusted based on the window size.
 *
 * @component
 * @param {HeroCardPropsTypes} props - Props for configuring the HeroCard.
 * @returns {JSX.Element} - JSX element representing the HeroCard component.
 */
export default function HeroCard({
  movieList,
}: HeroCardPropsTypes): JSX.Element {
  // Destructure key movie information
  const { backdrop_path, title, release_date, overview } = movieList[0];

  // State for dynamically adjusting backdrop image width
  const [widthBackdropMovie, setWidthBackdropMovie] = useState<string>('w780');

  useEffect(() => {
    // Function to handle window resize and adjust image width
    const handleResize = () => {
      const width = window.innerWidth >= 768 ? 'w1280' : 'w780';
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

  return (
    <section
      className="w-full min-h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`,
      }}
    >
      <div className="w-full min-h-[50vh] py-16 flex flex-col justify-start items-center gap-16 bg-gradient-to-br from-bgPrimaryDark/90 via-bgPrimaryDark/50 to-transparent">
        <section className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12 h-full">
          <div className="w-full h-auto">
            {/* Movie type label */}
            <span className="span-sm px-3 py-1 rounded-full bg-dark-500/30 text-textColorNeutral-50 font-medium">
              {'Película'}
            </span>
            {/* Movie title */}
            <h2 className="heading-3 w-full md:w-3/4 font-extrabold text-textColorNeutral-50 mt-2">
              {title}
            </h2>
            {/* Movie release year */}
            <span className="span-lg max-w-prose text-textColorNeutral-100">
              {release_date !== undefined &&
                new Date(release_date).getFullYear()}
            </span>
          </div>
          {/* Movie overview */}
          <p className="paragraph-sm max-w-prose line-clamp-5 lg:line-clamp-none font-normal text-textColorNeutral-50">
            {overview}
          </p>
          {/* Button to view the movie */}
          <button
            className="button-secondary padding-button w-full md:w-fit"
            onClick={() => console.log('helllo world')}
          >
            Ver Película
          </button>
        </section>
        {/* Horizontal movie list section */}
        <section className="flex justify-center items-center w-11/12 md:w-10/12">
          <HorizontalMovieListPrimary
            title="Películas Gratuitas"
            movieList={movieList}
            path={'/'}
          />
        </section>
      </div>
    </section>
  );
}
