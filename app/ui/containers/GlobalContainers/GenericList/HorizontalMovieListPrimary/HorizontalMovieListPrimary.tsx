import HorizontalSlider from '@/app/ui/components/Sliders/HorizontalSlider/HorizontalSlider';

export default function HorizontalMovieListPrimary({
  title,
  path,
  movieList,
}: {
  title: string;
  path: string;
  movieList: TrendingMovieType[] | MovieType[];
}) {
  return (
    <article className="flex flex-col items-start gap-5 w-11/12 md:w-10/12">
      <header className="w-full">
        <a href={path} className="button-text">
          <span className="flex flex-nowrap gap-2 items-center w-full h-full hover:pr-5 hover:opacity-80 hover:translate-x-2 transition-all duration-300 ease-in-out">
            <h2 className="heading-6 font-medium text-primary-50 py-1.5">
              {title}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </span>
        </a>
      </header>
      <div className="w-full">
        <HorizontalSlider movieList={movieList} />
      </div>
    </article>
  );
}
