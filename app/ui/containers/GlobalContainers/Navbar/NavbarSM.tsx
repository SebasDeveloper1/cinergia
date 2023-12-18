'use client';
import { useState, useRef, MouseEvent } from 'react';
import InputSearch from '@/app/ui/components/Inputs/InputSearch/InputSearch';
import useOnClickOutside from '@/app/lib/hooks/useOnClickOutside';
import { NavbarPropsTypes } from './Navbar.model';
import Link from 'next/link';

/**
 * NavbarSM Component
 *
 * A React component representing the small screen version of the navigation bar. It includes a search input, a menu button, and a list of navigation links.
 *
 * @component
 * @param {NavbarPropsTypes[]} links - An array of objects representing navigation links, each with a name, href, and icon.
 * @returns {JSX.Element} - JSX element representing the NavbarSM component.
 */
export default function NavbarSM({
  links,
}: {
  links: NavbarPropsTypes[];
}): JSX.Element {
  // State for controlling the visibility of the search input and menu
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  // Handler for toggling the menu
  const handleMenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault;
    setOpenMenu(!openMenu);
  };

  // Handler for toggling the search input
  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
  };

  // Ref for handling clicks outside the menu
  const menuRef = useRef(null);

  // Hook to close menu and search on clicks outside
  useOnClickOutside(menuRef, () => {
    setOpenMenu(false);
    setOpenSearch(false);
  });

  /**
   * Render the JSX for the NavbarSM component
   */
  return (
    <section ref={menuRef} className="lg:hidden z-50 flex gap-2">
      {/* Search button */}
      <button
        className="button-text padding-icon"
        title="Buscar"
        aria-label="Search"
        onClick={(e) => handleSearch(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      {/* Menu button */}
      <button
        type="button"
        className={`button-text padding-icon transition-all duration-300 transform ${
          openMenu ? 'rotate-90' : ''
        }`}
        title={!openMenu ? 'Menu' : 'Cerrar'}
        aria-label="Menu"
        onClick={handleMenu}
      >
        {!openMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-deep"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        )}
      </button>
      {/* Search input section */}
      <article
        aria-hidden={!openSearch}
        aria-live="assertive"
        className={`absolute inset-0 flex justify-center items-center bg-gray-900 p-2 transform transition-all ${
          !openSearch ? '-translate-y-[110%]' : ''
        }`}
      >
        <div className="flex justify-center items-center gap-2 w-full">
          <InputSearch variant="SM" />
          {/* Close search button */}
          <button
            className="button-text padding-icon"
            title="Cerrar búsqueda"
            aria-label="Cerrar búsqueda"
            onClick={(e) => handleSearch(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </article>
      {/* Menu section */}
      <article
        aria-hidden={!openMenu}
        aria-live="assertive"
        className={`fixed inset-x-0 top-0 bg-bgSecondaryDark mt-16 px-4 py-6
       transform transition-all  ${!openMenu ? 'translate-x-full' : ''}`}
      >
        <div className="w-full">
          <ul className="flex flex-col items-center gap-4 w-full divide-y divide-borderPrimaryDark/10">
            {/* Map through the array of navigation links */}
            {links.map((link) => (
              <li
                key={`Navbar-link-${link.name}`}
                className="navbar-item-sm w-full pt-4"
              >
                {/* Link to the specified href */}
                <Link
                  className="flex items-center gap-3 capitalize"
                  href={link?.href}
                >
                  {/* Display the link icon and name */}
                  {link?.icon}
                  {link?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
