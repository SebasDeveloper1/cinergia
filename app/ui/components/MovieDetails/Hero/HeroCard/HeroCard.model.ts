// Describes the properties for a Hero Card component.
export interface HeroCardProps {
  movieData: MovieType; // Data related to a movie.
}

// Describes the properties for an Information Section component.
export interface InfoSectionProps {
  title: string; // Title of the movie.
  productionCompanies: string; // Production companies involved in the movie.
  productionCountries: string; // Production countries of the movie.
  genreList: string; // List of genres associated with the movie.
  detailsMovieList: {
    name: string; // Name of the detail.
    data: string | number | boolean | Array<string>; // Adjust types based on the actual type of 'data'.
    icon: JSX.Element; // JSX element for an icon.
  }[];
  overview: string; // Overview of the movie.
}

// Describes the properties for an Overview Section component.
export interface OverviewSectionProps {
  overview: string; // Overview content.
  whySeeIt: string; // Reasons to watch the movie.
}

// Describes the properties for a Play Button component.
export interface PlayButtonProps {
  path: string; // Path to the video or content to be played.
}
