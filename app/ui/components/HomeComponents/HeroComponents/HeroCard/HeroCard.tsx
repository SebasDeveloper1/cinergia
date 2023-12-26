'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';
import convertMinutesToHours from '@/app/lib/utils/convertMinutesToHours';
import { HeroCardPropsTypes } from './HeroCard.model';
import Figure1 from '@/app/ui/components/assets/Figure1';

/**
 * HeroCard Component
 *
 * The HeroCard component represents a card displaying detailed information
 * about a movie, including title, release date, runtime, and overview.
 * It also includes a background image and a button to view the movie.
 *
 * @component
 * @param {HeroCardPropsTypes} props - Props for configuring the HeroCard component.
 * @param {MovieType} props.movieData - Movie data used to populate the card.
 * @returns {JSX.Element} - JSX element representing the HeroCard component.
 */
export default function HeroCard({
  movieData,
}: HeroCardPropsTypes): JSX.Element {
  // Destructure movieData for easier access
  const { backdrop_path, title, release_date, runtime, overview } = movieData;

  // State to dynamically adjust the width of the backdrop image based on screen size
  const [widthBackdropMovie, setWidthBackdropMovie] = useState<string>('w780');

  useEffect(() => {
    // Function to handle resizing and adjust the width accordingly
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

  // Render the HeroCard component with movie details
  return (
    <section
      className="overflow-hidden relative w-full min-h-[100vh] bg-cover bg-center "
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`,
      }}
    >
      <div className="w-full min-h-[100vh] py-16 lg:py-[4.5rem] flex justify-center items-end bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/50 to-transparent">
        <div className="z-10 flex flex-col justify-center gap-8 w-11/12 md:w-10/12 h-full">
          <div className="w-full h-auto">
            <span className="span-sm px-3 py-1 rounded-full bg-dark-500/30 text-textColorNeutral-50 font-medium">
              {'Película'}
            </span>
            <h2 className="heading-2 font-extrabold text-textColorNeutral-50 mt-2">
              {title}
            </h2>
            <div className="flex gap-2 w-fit span-lg text-textColorNeutral-100">
              <span>{convertMinutesToHours(runtime)}</span>
              <span className="before:content-['•'] before:mr-2">
                {release_date !== undefined &&
                  new Date(release_date).getFullYear()}
              </span>
            </div>
          </div>
          <p className="paragraph-lg line-clamp-5 lg:line-clamp-none font-normal text-textColorNeutral-50">
            {overview}
          </p>
          <button
            className="button-primary padding-button w-full md:w-fit"
            onClick={() => console.log('helllo world')}
          >
            Ver Película
          </button>
        </div>
      </div>
      <Figure1 className="absolute -bottom-8 md:-bottom-16 lg:-bottom-32 -left-[10%] w-3/5 text-secondary-500" />
    </section>
  );
}
