'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';
import BannerSliderMovieSkeleton from './BannerSliderMovieSkeleton';
/**
 * BannerSliderMovie Component
 *
 * A React component representing a banner slider for showcasing movies.
 *
 * @component
 * @param {string} sectionTitle - The title of the movie section.
 * @param {TrendingMovieType[]} movieList - An array of movie objects for display.
 * @returns {JSX.Element} - JSX element representing the BannerSliderMovie component.
 */
export default function BannerSliderMovie({
  sectionTitle,
  movieList,
}: {
  sectionTitle: string;
  movieList: TrendingMovieType[];
}): JSX.Element {
  // Destructure movieList to extract relevant information
  const { backdrop_path, title, overview, original_title } = movieList[0];

  // Set up state for the width of the movie backdrop image
  const [widthBackdropMovie, setWidthBackdropMovie] = useState<string>('w780');
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Construct the background image URL using the backdrop path and width
  const backgroundImageUrl = `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`;

  // Simulating loading delay with a timeout
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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

  // Render skeleton loader while loading
  if (loading) {
    return <BannerSliderMovieSkeleton />;
  }

  // Render the JSX for the BannerSliderMovie component
  return (
    <section
      className="flex items-center justify-center w-full min-h-[80vh] bg-cover bg-center "
      style={{
        backgroundImage: backgroundImageUrl,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] py-14 lg:py-16 bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/70 to-transparent">
        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-4 w-full">
            {/* Exclusive badge */}
            <div className="w-full">
              <span className="span-xl text-primary-50 font-semibold px-4 py-2 rounded-md bg-dark-500/30">
                {sectionTitle}
              </span>

              {/* Movie title */}
              <h2 className="heading-2 mt-16 font-extrabold text-primary-50 max-w-prose">
                {title}
              </h2>
            </div>

            {/* Original title movie */}
            <span className="span-xl text-white font-medium">
              {original_title}
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

            {/* "Ver más" button */}
            <button
              className="button-outlined padding-button w-full md:w-fit"
              onClick={() => console.log('hello world')}
            >
              Ver Más
            </button>
          </div>
          <div className="flex justify-end items-center w-full mt-4">
            <div className="w-full md:w-2/3">
              {/* Horizontal movie slider */}
              <HorizontalSlider
                movieList={movieList.slice(1)}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  768: { slidesPerView: 3 },
                  1536: { slidesPerView: 3 },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
