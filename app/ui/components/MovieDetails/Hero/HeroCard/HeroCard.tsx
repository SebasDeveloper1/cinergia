'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';
import { PlayButton } from './PlayButton';
import { InfoSection } from './InfoSection';
import { OverviewSectionSM } from './OverviewSectionSM';
import { HeroCardProps } from './HeroCard.model';

/**
 * HeroCard Component
 *
 * The HeroCard component represents a card displaying detailed information
 * about a movie, including title, release date, runtime, and overview.
 * It also includes a background image and a button to view the movie.
 *
 * @component
 * @param {HeroCardProps} props - Props for configuring the HeroCard component.
 * @param {MovieType} props.movieData - Movie data used to populate the card.
 * @param {VideoList} props.videos - List of videos related to the movie.
 * @returns {JSX.Element} - JSX element representing the HeroCard component.
 */
export function HeroCard({ movieData, videos }: HeroCardProps): JSX.Element {
  // Destructure movieData for easier access
  const { backdrop_path, overview } = movieData;

  // State to dynamically adjust the width of the backdrop image based on screen size
  const [widthBackdropMovie, setWidthBackdropMovie] =
    useState<string>('original');

  useEffect(() => {
    // Function to handle resizing and adjust the width accordingly
    const handleResize = () => {
      const width = window.innerWidth >= 768 ? 'original' : 'original';
      setWidthBackdropMovie(width);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Render the HeroCard component with movie details
  return (
    <>
      <section
        className="overflow-hidden w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`,
        }}
      >
        <article className="w-full h-screen flex justify-center items-center bg-gradient-to-t from-bgPrimaryDark/80 via-bgPrimaryDark/10 to-transparent">
          <div className="grid grid-rows-2 justify-items-center items-end gap-16 w-11/12 h-screen py-16 lg:pt-[4.5rem] lg:pb-9">
            <PlayButton path="" />
            <InfoSection movieData={movieData} videos={videos} />
          </div>
        </article>
      </section>
      <OverviewSectionSM overview={overview} whySeeIt={overview} />
    </>
  );
}
