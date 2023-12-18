import InputSearch from '@/app/ui/components/Inputs/InputSearch/InputSearch';
import { NavbarPropsTypes } from './Navbar.model';
import Link from 'next/link';

/**
 * NavbarLG Component
 *
 * A React component representing the large screen version of the navigation bar. It includes an input search bar and a list of navigation links.
 *
 * @component
 * @param {NavbarPropsTypes[]} links - An array of objects representing navigation links, each with a name, href, and icon.
 * @returns {JSX.Element} - JSX element representing the NavbarLG component.
 */
export default function NavbarLG({
  links,
}: {
  links: NavbarPropsTypes[];
}): JSX.Element {
  /**
   * Render the JSX for the NavbarLG component
   */
  return (
    <>
      {/* Search bar section */}
      <section className="hidden lg:flex w-2/5">
        <InputSearch />
      </section>
      {/* Navigation links section */}
      <section className="hidden lg:flex justify-center items-center w-auto">
        <ul className="flex justify-center items-center gap-6 w-full">
          {/* Map through the array of navigation links */}
          {links.map((link) => (
            <li
              key={`Navbar-link-${link?.name}`}
              className="navbar-item-sm w-full capitalize"
            >
              {/* Link to the specified href */}
              <Link
                className="flex items-center gap-3"
                href={link?.href}
                title={link?.name}
              >
                {/* Display the link icon and name */}
                {link?.icon}
                {link?.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
