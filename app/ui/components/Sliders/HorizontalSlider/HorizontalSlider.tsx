'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './sliderStyles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { ButtonStyleType } from './HorizontalSlider.model';
import MovieCard from '../../Cards/MovieCard/MovieCard';

/**
 * HorizontalSlider Component
 *
 * A React component that displays a horizontal slider of movie cards using the Swiper library.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {TrendingMovieType[] | MovieType[]} props.movieList - An array of movie data of type TrendingMovieType[] or MovieType[].
 * @returns {JSX.Element} - JSX element representing the HorizontalSlider component.
 */
export default function HorizontalSlider({
  movieList,
}: {
  movieList: TrendingMovieType[] | MovieType[];
}): JSX.Element {
  // Button styles for Swiper navigation
  const buttonStyle: ButtonStyleType = {
    '--swiper-navigation-size': '2rem',
    '--swiper-navigation-color': '#ffffff',
    '--swiper-navigation-sides-offset': '0',
  };

  // Responsive breakpoints for the number of slides per view
  const breakpoints = {
    320: { slidesPerView: 2 },
    480: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1536: { slidesPerView: 5 },
  };

  return (
    <Swiper
      navigation={{ enabled: true }}
      modules={[Pagination, Navigation]}
      spaceBetween={15}
      slidesPerView={'auto'}
      className="horizontalSlider"
      style={buttonStyle}
      breakpoints={breakpoints}
    >
      {/* Mapping through the movieList to create SwiperSlides */}
      {movieList.map((movie) => (
        <SwiperSlide key={`movie-${movie?.id}`}>
          {/* Rendering MovieCard for each movie in the list */}
          <MovieCard movieData={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
