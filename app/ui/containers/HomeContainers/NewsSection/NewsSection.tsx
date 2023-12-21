import Image from 'next/image';
import { fetchTrending } from '@/app/lib/data/data';
import HorizontalMovieListSecondary from '../../GlobalContainers/GenericList/HorizontalMovieList/HorizontalMovieListSecondary/HorizontalMovieListSecondary';
import Figure2 from '@/app/ui/components/assets/Figure2';
import Figure3 from '@/app/ui/components/assets/Figure3';
import walletImage from '@/public/images/walletImage.png';

/**
 * NewsSection Component
 *
 * A React component that fetches trending movies and displays them in a styled horizontal movie list.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the NewsSection component.
 */
// Define the NewsSection component as an asynchronous function
export default async function NewsSection(): Promise<JSX.Element> {
  // Fetch trending movies using the fetchTrending function
  const { results: trendingResults }: ResultsTrendingTypes =
    await fetchTrending();

  // Return the JSX element with the HorizontalMovieListSecondary component
  return (
    // JSX structure representing the NewsSection component

    <section className="overflow-hidden relative w-full py-24 md:py-44 bg-bgPrimaryDark">
      <Figure2 className="absolute top-6 -right-[20%] w-3/5 md:w-2/5 text-accent-500" />

      <div className="z-10 flex flex-col justify-center items-center gap-16 md:gap-20 w-full">
        {/* Render the HorizontalMovieListSecondary component with specified props */}
        <HorizontalMovieListSecondary
          title="Novedades MNET"
          description="Millones de películas por descubrir. Explora ahora."
          path="/"
          movieList={trendingResults}
          className="w-11/12"
        />
        <div className="relative w-11/12">
          <figure className="relative w-full">
            <Image
              src={walletImage}
              alt={'Wallets'}
              placeholder="blur"
              loading="lazy"
              className="object-cover object-center"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            />
          </figure>
        </div>
      </div>
      <Figure3 className="absolute -bottom-8 md:-bottom-16 lg:-bottom-32 -left-[10%] w-4/5 md:w-3/5 text-primary-500" />
    </section>
  );
}
