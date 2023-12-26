// Import necessary dependencies and types
import Hero from '@/app/ui/containers/HomeContainers/Hero/Hero';
import ExclusiveSection from '@/app/ui/containers/HomeContainers/ExclusiveSection/ExclusiveSection';
import NewsSection from '@/app/ui/containers/HomeContainers/NewsSection/NewsSection';
import ShortFilmsBannerSection from '@/app/ui/containers/HomeContainers/ShortFilmsBannerSection/ShortFilmsBannerSection';
import EventBannerSection from '@/app/ui/containers/HomeContainers/EventBannerSection/EventBannerSection';
import WeekMovieSection from '@/app/ui/containers/HomeContainers/WeekMovieSection/WeekMovieSection';

/**
 * Home Component
 *
 * The Home component serves as the main structure for the home page.
 * It comprises a fixed header with a navigation bar and various sections,
 * including Hero, ExclusiveSection, NewsSection, ShortFilmsBannerSection,
 * EventBannerSection, and WeekMovieSection.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the Home component.
 */
export default function Home() {
  return (
    <>
      {/* Main content area */}
      <main className="w-full">
        {/* Hero section */}
        <Hero />

        {/* ExclusiveSection component */}
        <ExclusiveSection />

        {/* NewsSection component */}
        <NewsSection />

        {/* ShortFilmsBannerSection component */}
        <ShortFilmsBannerSection />

        {/* EventBannerSection component */}
        <EventBannerSection />

        {/* WeekMovieSection component */}
        <WeekMovieSection />
      </main>
    </>
  );
}
