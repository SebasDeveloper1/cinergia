export function VideoPlayer() {
  return (
    <section className="flex place-content-center w-full py-8">
      <article className="w-full md:w-10/12">
        <iframe
          src="https://muse.ai/embed/xDsP7wV?search=0&links=0&logo=0&title=0&cover_play_position=center"
          frameBorder={0}
          allowFullScreen
          className="w-full aspect-video bg-dark-900 border border-dark-800"
        />
      </article>
    </section>
  );
}
