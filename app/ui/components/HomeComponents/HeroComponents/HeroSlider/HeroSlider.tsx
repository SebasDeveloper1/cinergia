'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import HeroCard from '@/app/ui/components/HomeComponents/HeroComponents/HeroCard/HeroCard';
import { BulletStyleType } from './HeroSlider.model';

export default function HeroSlider({
  movieList,
}: {
  movieList: MovieType[];
}): JSX.Element {
  const bulletStyle: BulletStyleType = {
    '--swiper-pagination-color': '#3b82f6',
    '--swiper-pagination-bullet-inactive-color': '#ffffff',
  };
  return (
    <div className="pb-16">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        grabCursor
        style={bulletStyle}
      >
        {movieList.map((movie) => (
          <SwiperSlide key={`HeroSlider-${movie?.id}`}>
            <HeroCard movieData={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
