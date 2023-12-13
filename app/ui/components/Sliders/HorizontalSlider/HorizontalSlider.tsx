'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './sliderStyles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { ButtonStyleType } from './HorizontalSlider.model';

export default function HorizontalSlider({
  movieList,
}: {
  movieList: TrendingMovieType[] | MovieType[];
}): JSX.Element {
  const buttonStyle: ButtonStyleType = {
    '--swiper-navigation-size': '1.5rem',
    '--swiper-navigation-color': '#ffffff',
  };
  console.log(movieList);

  const breakpoints = {
    320: { slidesPerView: 3 },
    480: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 7 },
  };

  const renderSwiperSlides = () => {
    return Array.from({ length: 12 }, (_, index) => (
      <SwiperSlide key={`HeroSlider-${index + 1}`}>
        <div className="w-full aspect-[3/4] rounded-md shadow-md bg-dark-800 animate-pulse" />
      </SwiperSlide>
    ));
  };

  return (
    <div className="">
      <Swiper
        navigation={{ enabled: true }}
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={'auto'}
        breakpoints={breakpoints}
        className="horizontalSlider"
        style={buttonStyle}
      >
        {renderSwiperSlides()}
      </Swiper>
    </div>
  );
}
