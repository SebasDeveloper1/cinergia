import Navbar from './ui/containers/GlobalContainers/Navbar/Navbar';
import ShortFilmsBannerSection from './ui/containers/HomeContainers/ShortFilmsBannerSection/ShortFilmsBannerSection';
import ExclusiveSection from './ui/containers/HomeContainers/ExclusiveSection/ExclusiveSection';
import Hero from './ui/containers/HomeContainers/Hero/Hero';
// import MyListSection from './ui/containers/HomeContainers/MyListSection/MyListSection';
import NewsSection from './ui/containers/HomeContainers/NewsSection/NewsSection';
import TrendSection from './ui/containers/HomeContainers/TrendSection/TrendSection';
import EventBannerSection from './ui/containers/HomeContainers/EventBannerSection/EventBannerSection';
import WeekMovieSection from './ui/containers/HomeContainers/WeekMovieSection/WeekMovieSection';
import Footer from './ui/containers/GlobalContainers/Footer/Footer';

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
      {/* Fixed header with navigation bar */}
      <header className="fixed top-0 inset-x-0 z-50 w-full">
        <Navbar />
      </header>

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

        {/* Footer component */}
        <Footer />
      </main>
    </>
  );
}
