// Describes the properties for a Hero Card component.
export interface HeroCardProps {
  movieData: MovieType;
  videos: VideoList; // Data related to a movie.
}

// Describes the properties for an Information Section component.
export interface InfoSectionProps extends HeroCardProps {}

// Describes the properties for an Overview Section component.
export interface OverviewSectionProps {
  overview: string; // Overview content.
  whySeeIt: string; // Reasons to watch the movie.
}

// Describes the properties for a Play Button component.
export interface PlayButtonProps {
  path: string; // Path to the video or content to be played.
}
