import Hero from '../ui/containers/ContentContainers/Hero/Hero';
import ListSection from '../ui/containers/ContentContainers/ListSection/ListSection';

/**
 * Content Page Component
 *
 * This component represents the main structure of the Content page.
 * It includes a Hero component for displaying a featured section.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the Content component.
 */
export default function Content() {
  return (
    <div className="pt-16 lg:pt-[4.5rem]">
      {/* Hero section */}
      <Hero />
      <ListSection />
    </div>
  );
}
