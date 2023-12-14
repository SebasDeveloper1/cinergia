export default function HorizontalMovieListPrimarySkeleton() {
  return (
    <article className="flex flex-col items-start gap-5 w-11/12 md:w-10/12 h-72 animate-pulse">
      <div className="w-36 h-12 rounded-md bg-dark-800"></div>
      <div className="w-full h-full rounded-md bg-dark-800"></div>
    </article>
  );
}
