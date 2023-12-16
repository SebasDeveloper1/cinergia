import Hero from './ui/containers/HomeContainers/Hero/Hero';
import TrendSection from './ui/containers/HomeContainers/TrendSection/TrendSection';
import ExclusiveSection from './ui/containers/HomeContainers/ExclusiveSection/ExclusiveSection';
import NewsSection from './ui/containers/HomeContainers/NewsSection/NewsSection';
import ShortFilmsBannerSection from './ui/containers/HomeContainers/ShortFilmsBannerSection/ShortFilmsBannerSection';
import EventBannerSection from './ui/containers/HomeContainers/EventBannerSection/EventBannerSection';
import WeekMovieSection from './ui/containers/HomeContainers/WeekMovieSection/WeekMovieSection';
// import MyListSection from './ui/containers/HomeContainers/MyListSection/MyListSection';

/**
 * Home Component
 *
 * This component represents the main structure of the home page.
 * It includes a fixed header with a navigation bar and various sections,
 * such as Hero, MyListSection, TrendSection, and ExclusiveSection.
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

        {/* MyListSection component added */}
        {/* <MyListSection /> */}

        {/* TrendSection component */}
        <TrendSection />

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
