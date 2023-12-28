import Link from 'next/link';
import { InfoSectionProps } from '../HeroCard.model';

export default function InfoSection({
  title,
  productionCompanies,
  productionCountries,
  genreList,
  detailsMovieList,
  overview,
}: InfoSectionProps): JSX.Element {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <section className="col-span-1 flex flex-col gap-4 w-full h-full">
        <article className="flex flex-col justify-center gap-4 w-full h-auto text-textColorNeutral-50">
          <div className="w-full leading-4">
            <h2 className="heading-5 font-extrabold">{title}</h2>
            <span className="inline-block w-full span-xs font-semibold">
              Producido por:
            </span>
            <span className="inline-block w-full span-xs">
              {` ${productionCompanies}`}
            </span>

            <span className="inline-block w-full span-xs">
              {` ${productionCountries}`}
            </span>
          </div>
          <span className="span-sm font-medium text-customNeutral-300">
            {genreList}
          </span>
          <div className="flex items-center gap-2 flex-wrap w-full pb-4 border-b border-borderNeutral-50/50 span-sm text-textColorNeutral-300 font-medium">
            {detailsMovieList.map((item) => (
              <span
                key={`detail-${item?.name}`}
                className="flex justify-center items-center gap-1 text-nowrap"
              >
                {item?.icon}
                {item?.data}
              </span>
            ))}
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-4 w-full">
          <Link
            className="button-outlined padding-button w-full md:w-fit"
            href={''}
          >
            Trailer
          </Link>
        </article>
      </section>
      <section className="hidden col-span-1 lg:col-span-2 self-end md:grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        <article className="md:col-span-1 lg:col-span-1 w-full line-clamp-5 lg:line-clamp-none">
          <span className="span-base font-semibold text-textColorNeutral-50">
            Sinopsis
          </span>
          <p className="paragraph-sm font-normal text-textColorNeutral-100">
            {overview}
          </p>
        </article>
        <article className="md:col-span-1 lg:col-span-1 w-full line-clamp-5 lg:line-clamp-none">
          <span className="span-base font-semibold text-textColorNeutral-50">
            Por qué verla
          </span>
          <p className="paragraph-sm line-clamp-5 lg:line-clamp-none font-normal text-textColorNeutral-100">
            {overview}
          </p>
        </article>
      </section>
    </section>
  );
}
