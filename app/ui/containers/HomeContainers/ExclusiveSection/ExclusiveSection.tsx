import { fetchMovieDetails } from '@/app/lib/data/data';
import ExclusiveSectionCard from '@/app/ui/components/HomeComponents/ExclusiveSectionComponents/ExclusiveSectionCard';

export default async function ExclusiveSection(): Promise<JSX.Element> {
  const moviesData: MovieType = await fetchMovieDetails(502356);
  return <ExclusiveSectionCard movieData={moviesData} />;
}
