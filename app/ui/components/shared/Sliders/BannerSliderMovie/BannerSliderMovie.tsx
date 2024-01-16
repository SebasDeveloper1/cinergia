'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';
import BannerSliderMovieSkeleton from './BannerSliderMovieSkeleton';
import { BannerSliderMoviePropsTypes } from './BannerSliderMovie.model';
import createMovieSlug from '@/app/lib/utils/createMovieSlug';
import Link from 'next/link';
import { HorizontalSlider } from '@/app/ui/components/shared/Sliders/HorizontalSlider';

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
export function BannerSliderMovie({
  sectionTitle,
  movieList,
}: BannerSliderMoviePropsTypes): JSX.Element {
  // Destructure movieList to extract relevant information
  const { id, backdrop_path, title, overview, original_title } = movieList[0];

  // Set up state for the width of the movie backdrop image
  const [widthBackdropMovie, setWidthBackdropMovie] =
    useState<string>('original');
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

  // Render skeleton loader while loading
  if (loading) {
    return <BannerSliderMovieSkeleton />;
  }

  // Render the JSX for the BannerSliderMovie component
  return (
    <section
      className="flex items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg bg-cover bg-center "
      style={{
        backgroundImage: backgroundImageUrl,
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg py-14 lg:py-16 bg-gradient-to-br from-bgPrimaryDark via-bgPrimaryDark/40 to-transparent after:absolute after:inset-x-0 after:top-0 after:w-full after:h-4 after:bg-gradient-to-t after:from-transparent after:to-bgPrimaryDark">
        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-1 w-full">
            {/* Exclusive badge */}
            <div className="w-full">
              <span
                className="span-xl text-textColorNeutral-50 font-semibold px-3 py-2 rounded-md border border-dashed border-borderNeutral-100/20
              bg-dark-500/5"
              >
                {sectionTitle}
              </span>

              {/* Movie title */}
              <h2 className="heading-2 mt-16 font-extrabold text-textColorNeutral-50 max-w-prose">
                {title}
              </h2>
            </div>

            {/* Original title movie */}
            <span className="span-xl text-textColorNeutral-50 font-medium mb-5">
              {original_title}
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

            {/* "Ver más" button */}
            <button
              type="button"
              className="button-outlined padding-button w-full md:w-fit"
              onClick={() => console.log('hello world')}
            >
              Ver Más
            </button>
          </div>
          <div className="flex justify-end items-center w-full mt-4">
            <div className="w-full md:w-3/4">
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
