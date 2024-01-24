enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

interface DataType {
  page: number;
  results: TrendingMovieType[];
  total_pages: number;
  total_results: number;
}

interface TrendingMovieType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
}

interface MovieType extends TrendingMovieType {
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ResultsTrendingTypes {
  results: TrendingMovieType[];
}
interface ResultsMoviesTypes {
  results: MovieType[];
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface VideoList {
  id: number;
  results: Video[];
}

//////////////////////////////

//Movie list api types
interface MovieListAPI {
  data: MovieAPI[];
}

interface MovieAPI {
  id: number;
  name: string;
  slug: string;
  releaseYear: Date;
  image1: string;
  image2: string;
}

//Movie details api types

interface MovieDetailsObjAPI {
  data: MovieDetailsAPI;
}

interface MovieDetailsAPI extends Omit<MovieAPI, 'releaseYear'> {
  agerates: AgeratesAPI;
  description: string;
  whySee: string;
  directors: DirectorsAPI;
  genre_movie: GenreMovieAPI[];
  languages: LanguagesAPI;
  movieLength: number;
  price: string;
  trailer: string;
  urlId: string;
  whySee: string;
}

interface AgeratesAPI {
  id: number;
  name: string;
  range: string;
}

interface DirectorsAPI {
  firstName: string;
  id: number;
  lastName: string;
}

interface GenreMovieAPI {
  genres: LanguagesAPI;
}

interface LanguagesAPI {
  id: number;
  name: string;
}

// home sections api types
interface HomeSectionRequestAPI {
  data: Datum[];
}

interface Datum {
  home_section: HomeSectionAPI[];
}

interface HomeSectionAPI {
  title: string;
  background: string;
  home_section_movie: HomeSectionMovieAPI[];
}

interface HomeSectionMovieAPI {
  movies: MoviesAPI;
}

interface MoviesAPI {
  id: number;
  name: string;
  slug: string;
  releaseYear: Date;
  image1: string;
  image2: string;
}
