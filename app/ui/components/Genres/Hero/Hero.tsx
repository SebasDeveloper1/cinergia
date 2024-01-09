'use client';
import { genresListTypes } from '@/app/lib/data/genreList/genreList.model';
import { useEffect, useState } from 'react';

/**
 * Hero Component
 *
 * A React component representing the hero section for a specific genre or movie.
 * It dynamically adjusts the backdrop image width based on the window size and displays
 * information about the genre along with a welcoming message.
 *
 * @component
 * @param {Object} props - The properties of the Hero component.
 * @param {genresListTypes} props.genreInfo - Information about the genre.
 * @param {(MovieType | TrendingMovieType)} props.movieInfo - Information about the featured movie.
 * @returns {JSX.Element} - JSX element representing the Hero component.
 */
export function Hero({
  genreInfo,
  movieInfo,
}: {
  genreInfo: genresListTypes;
  movieInfo: MovieType | TrendingMovieType;
}) {
  // Destructure key movie information
  const { backdrop_path } = movieInfo;
  // Destructure genre information
  const { description } = genreInfo;

  // State for dynamically adjusting backdrop image width
  const [widthBackdropMovie, setWidthBackdropMovie] =
    useState<string>('original');

  useEffect(() => {
    // Function to handle window resize and adjust image width
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

  return (
    <section
      className="w-full h-[40vh] lg:h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`,
      }}
    >
      <div className="w-full h-[40vh] lg:h-[50vh] flex flex-col place-items-center bg-bgPrimaryDark/70">
        <section className="flex flex-col justify-center items-center gap-6 w-11/12 md:w-10/12 h-full text-center">
          <h2 className="heading-2 font-bold text-textColorNeutral-50 w-fit">
            ¡Bienvenido!
          </h2>
          <span className="span-xl md:text-2xl text-textColorNeutral-50 max-w-prose">
            {description}
          </span>
        </section>
      </div>
    </section>
  );
}
