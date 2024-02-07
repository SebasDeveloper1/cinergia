// Import necessary dependencies and types
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

export function HeroCard({ movieData }: HeroCardProps): JSX.Element {
  // Destructure movieData for easier access
  const { description, whySee, image2, slug } = movieData;

  // Render the HeroCard component with movie details
  return (
    <>
      <section
        className="overflow-hidden w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.cursosya.info/${image2}')`,
        }}
      >
        <article className="w-full h-screen flex justify-center items-center bg-gradient-to-t from-bgPrimaryDark/80 via-bgPrimaryDark/10 to-transparent">
          <div className="grid grid-rows-2 justify-items-center items-end gap-16 w-11/12 h-screen py-16 lg:pt-[4.5rem] lg:pb-9">
            <PlayButton movieSlug={slug} />
            <InfoSection movieData={movieData} />
          </div>
        </article>
      </section>
      <OverviewSectionSM overview={description || ''} whySeeIt={whySee || ''} />
    </>
  );
}
