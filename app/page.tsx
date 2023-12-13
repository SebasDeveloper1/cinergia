import Navbar from './ui/containers/GlobalContainers/Navbar/Navbar';
import ExclusiveSection from './ui/containers/HomeContainers/ExclusiveSection/ExclusiveSection';
import Hero from './ui/containers/HomeContainers/Hero/Hero';
import TrendSection from './ui/containers/HomeContainers/TrendSection/TrendSection';
export default function Home() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 w-full">
        <Navbar />
      </header>
      <main className="w-full">
        <Hero />
        <ExclusiveSection />
        <TrendSection />
      </main>
    </>
  );
}
