export interface ButtonStyleType extends React.CSSProperties {
  '--swiper-navigation-size'?: string;
  '--swiper-navigation-top-offset'?: string;
  '--swiper-navigation-sides-offset'?: string;
  '--swiper-navigation-color'?: string;
}

export interface HorizontalSliderPropsTypes {
  type: 'API' | 'TEST';
  movieList: TrendingMovieType[] | MovieType[] | MoviesAPI[];

  breakpoints: {
    [key: number]: {
      slidesPerView: number;
    };
  };
}
