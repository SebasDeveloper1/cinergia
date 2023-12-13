import { fetchTrending } from '@/app/lib/data/data';
import HorizontalMovieListPrimary from '../../GlobalContainers/GenericList/HorizontalMovieListPrimary/HorizontalMovieListPrimary';

export default async function TrendSection(): Promise<JSX.Element> {
  const { results: trendingResults }: { results: TrendingMovieType[] } =
    await fetchTrending();

  return (
    <section className="flex justify-center items-center w-full h-96 py-16 bg-bgSecondaryDark">
      <HorizontalMovieListPrimary
        title="Tendencias1"
        path="/"
        movieList={trendingResults}
      />
    </section>
  );
}
