'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';

// Define and export the ExclusiveSectionCard component
export default function ExclusiveSectionCard({
  movieData,
}: {
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

  // Render the JSX for the ExclusiveSectionCard component
  return (
    <section
      className="flex items-center justify-center w-full min-h-[80vh] bg-cover bg-center "
      style={{
        backgroundImage: backgroundImageUrl,
      }}
    >
      <div className="flex items-center justify-center w-full min-h-[80vh] py-5 lg:py-10 bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/70 to-transparent">
        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-4 w-full">
            {/* Exclusive badge */}
            <div className="w-full">
              <span className="relative px-5 py-2.5 rounded-md bg-dark-500/30">
                <span className="absolute -top-2 -right-2 ">
                  <span className="relative flex w-4 aspect-square">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full w-4 aspect-square bg-green-500" />
                  </span>
                </span>
                <span className="span-xl text-primary-50 font-semibold">
                  {'Exclusiva'}
                </span>
              </span>

              {/* Movie title */}
              <h2 className="heading-2 mt-16 font-extrabold text-primary-50 max-w-prose">
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
            {/* "Ver película" button */}
            <button
              className="button-secondary padding-button w-full md:w-fit"
              onClick={() => console.log('hello world')}
            >
              Ver Película
            </button>

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
