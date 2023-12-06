import Navbar from './ui/containers/GlobalContainers/Navbar/Navbar';
import Hero from './ui/containers/HomeContainers/Hero/Hero';
export default function Home() {
  return (
    <>
      <header className="w-full">
        <Navbar />
      </header>
      <main className="w-full">
        <Hero />
      </main>
    </>
  );
}
