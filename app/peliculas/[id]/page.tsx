import { Hero } from '@/app/ui/components/MovieDetails/Hero';
import { PeliculasPageProps } from '../PeliculasPage.model';
import { fetchMovieDetails } from '@/app/lib/data/fetch';
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';
import NotFound from '@/app/not-found';

export async function generateMetadata({ params }: PeliculasPageProps) {
  const movieId: string = params.id;
  // Fetches movie information based on the provided ID
  const { data }: { data: MovieDetailsAPI[] } =
    await fetchMovieDetails(movieId);

  const movieData = data[0];
  if (!movieData) {
    return <NotFound />;
  }

  return {
    title: `Cinergia | ${movieData?.name}`,
    description: movieData?.description,
    keyworks: [
      'Cinergia',
      'cine en streaming',
      'películas',
      'cortometrajes',
      'largometrajes',
      'géneros cinematográficos',
      'explorar géneros',
      'últimas películas',
      'cinematografía',
      'plataforma de streaming',
      movieData?.name,
      ...movieData.genres,
    ],
    authors: { name: 'Cinergia' },
    openGraph: {
      type: 'website',
      title: `Cinergia | ${movieData?.name}`,
      description: movieData?.description,
      siteName: 'Cinergia',
      images: [`${CDN_IMAGES_BASE_URL}${movieData?.poster1}`],
    },
  };
}

export default function page({ params }: PeliculasPageProps): JSX.Element {
  const movieId: string = params.id;
  return <Hero movieId={movieId} />;
}
