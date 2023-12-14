import Navbar from './ui/containers/GlobalContainers/Navbar/Navbar';
import ExclusiveSection from './ui/containers/HomeContainers/ExclusiveSection/ExclusiveSection';
import Hero from './ui/containers/HomeContainers/Hero/Hero';
import MyListSection from './ui/containers/HomeContainers/MyListSection/MyListSection';
import TrendSection from './ui/containers/HomeContainers/TrendSection/TrendSection';

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
        <MyListSection />

        {/* TrendSection component */}
        <TrendSection />

        {/* ExclusiveSection component */}
        <ExclusiveSection />
      </main>
    </>
  );
}
