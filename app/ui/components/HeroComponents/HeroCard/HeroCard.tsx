'use client';
import { useState, useEffect } from 'react';
import convertMinutesToHours from '@/app/lib/utils/convertMinutesToHours';
import { MovieType } from '@/app/ui/containers/HomeContainers/Hero/Hero.model';

export default function HeroCard({
  movieData,
}: {
  movieData: MovieType;
}): JSX.Element {
  const { backdrop_path, title, release_date, runtime, overview } = movieData;
  const [widthBackdropMovie, setWidthBackdropMovie] = useState<string>('w780');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth >= 768 ? 'w1280' : 'w780';
      setWidthBackdropMovie(width);
    };

    // Manejar el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize inicialmente
    handleResize();

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className="w-full min-h-[100vh] bg-cover bg-center "
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}')`,
      }}
      data-src="dfjh"
    >
      <div className="w-full min-h-[100vh] py-5 lg:py-10  flex items-center justify-center bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/70 to-transparent">
        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-9/12 h-full mb-12">
          <div className="w-full">
            <span className="span-sm px-2.5 py-0.5 rounded-md bg-secondary-600/50 text-secondary-50 font-medium">
              {'Película'}
            </span>
            <h2 className="heading-2 font-extrabold text-primary-50">
              {title}
            </h2>
            <div className="flex gap-2 w-fit span-lg text-primary-100">
              <span>{convertMinutesToHours(runtime)}</span>
              <span className="before:content-['•'] before:mr-2">
                {new Date(release_date).getFullYear()}
              </span>
            </div>
          </div>
          <p className="paragraph-lg line-clamp-5 lg:line-clamp-none font-normal text-primary-100">
            {overview}
          </p>
          <button
            className="button-primary padding-button w-full md:w-fit"
            onClick={() => console.log('helllo world')}
          >
            Ver Película
          </button>
        </div>
      </div>
    </section>
  );
}
