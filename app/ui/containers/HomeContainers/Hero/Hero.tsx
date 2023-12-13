import { fetchMovieDetails, fetchTrending } from '@/app/lib/data/data';
import HeroSlider from '@/app/ui/components/HomeComponents/HeroComponents/HeroSlider/HeroSlider';

export default async function Hero(): Promise<JSX.Element> {
  const { results: trendingResults }: { results: TrendingMovieType[] } =
    await fetchTrending();
  const TrendingMovieIds: number[] = trendingResults
    .slice(0, 5)
    .map((element: TrendingMovieType) => element.id);

  const moviesData: MovieType[] = await Promise.all(
    TrendingMovieIds.map(async (id: number) => await fetchMovieDetails(id)),
  );
  return (
    <>
      <HeroSlider movieList={moviesData} />
    </>
  );
}
