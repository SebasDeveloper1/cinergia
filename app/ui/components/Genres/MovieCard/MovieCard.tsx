'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import createMovieSlug from '@/app/lib/utils/createMovieSlug';

/**
 * MovieCard Component
 *
 * A React component representing a card displaying information about a movie.
 * It uses the 'next/image' component for lazy loading and responsive image rendering.
 *
 * @component
 * @param {Object} props - The properties of the MovieCard component.
 * @param {MovieType | TrendingMovieType} props.movieData - Information about the movie to be displayed.
 * @returns {JSX.Element} - JSX element representing the MovieCard component.
 */
export function MovieCard({
  movieData,
}: {
  movieData: MovieType | TrendingMovieType;
}) {
  const { id, title, backdrop_path, release_date } = movieData;
  const [widthBackdropMovie, setWidthBackdropMovie] = useState<string>('w780');
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const imageRef = useRef(null);

  useEffect(() => {
    /**
     * Function to handle window resize and adjust image width.
     */
    const handleResize = () => {
      const width = window.innerWidth >= 768 ? 'w1280' : 'w780';
      setWidthBackdropMovie(width);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    /**
     * Effect to check if the image is in view and set the visibility state.
     */
    if (inView && !isImageVisible) {
      setIsImageVisible(true);
    }
  }, [inView, isImageVisible]);

  const imageSrc = isImageVisible
    ? `https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}`
    : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';

  return (
    <li className="group overflow-hidden rounded-sm bg-dark-800 border border-dark-900">
      <Link
        className="relative group flex flex-col justify-center items-center"
        href={`/peliculas/${createMovieSlug({ id, title })}`}
      >
        <span className="relative w-full aspect-[2/3]">
          <Image
            ref={imageRef}
            fill
            sizes="(max-width: 768px) 100vw,"
            src={`${imageSrc}`}
            alt={title || 'Movie Card'}
            placeholder="blur"
            loading="lazy"
            className="object-cover object-center md:group-hover:scale-110 transition-all duration-200 ease-in"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
          <div ref={ref} className="absolute top-0 left-0 w-full h-full" />
        </span>
        <section className="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/10 to-transparent">
          <div className="flex flex-col place-items-center w-full p-4 font-semibold text-center">
            <span className="span-base line-clamp-3 text-textColorNeutral-50">
              {title}
            </span>
            <span className="span-sm text-xs text-textColorAccent-500 font-bold">
              {release_date !== undefined &&
                new Date(release_date).getFullYear()}
            </span>
          </div>
        </section>
      </Link>
    </li>
  );
}
