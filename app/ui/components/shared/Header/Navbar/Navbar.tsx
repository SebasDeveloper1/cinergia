'use client';
// Import necessary dependencies and types
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NavbarSM } from '@/app/ui/components/shared/Header/Navbar/NavbarSM';
import { NavbarLG } from '@/app/ui/components/shared/Header/Navbar/NavbarLG';
import { NavbarPropsTypes } from './Navbar.model';
import { MyListPreview } from './MyListPreview';

/**
 * Navbar Component
 *
 * A React component representing the navigation bar of the application. It includes both small and large versions of the navbar
 * for responsive design. The component receives an array of navigation links with names, hrefs, and icons to be displayed.
 *
 * @component
 * @param {Object} props - The properties of the Navbar component.
 * @param {TrendingMovieType[]} props.myListData - An array of trending movie data.
 * @returns {JSX.Element} - JSX element representing the Navbar component.
 */
export function Navbar({
  myListData,
}: {
  myListData: TrendingMovieType[];
}): JSX.Element {
  // State to manage the visibility of the MyListPreview component
  const [openMyList, setOpenMyList] = useState<boolean>(false);

  // Effect to handle the body overflow when MyListPreview is open
  useEffect(() => {
    if (openMyList) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [openMyList]);

  // Define an array of navigation links with names, hrefs, and icons
  const links: NavbarPropsTypes[] = [
    {
      name: 'contenido',
      href: '/contenido',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-movie"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* ... (SVG path data) */}
        </svg>
      ),
    },
    // Add more links as needed
  ];

  /**
   * Render the JSX for the Navbar component
   */
  return (
    <nav className="relative flex justify-center items-center w-full h-16 lg:h-[4.5rem] border-b border-borderNeutral-50/10 bg-bgPrimaryDark/80">
      <div className="relative flex justify-between items-center w-full h-full p-4 backdrop-blur-sm">
        <div>
          {/* Application logo */}
          <Link href="/" className="text-xl">
            CinergiaLogo
          </Link>
        </div>
        {/* Small screen navbar */}
        <NavbarSM
          links={links}
          handleMyListState={setOpenMyList}
          myListState={openMyList}
        />
        {/* Large screen navbar */}
        <NavbarLG
          links={links}
          handleMyListState={setOpenMyList}
          myListState={openMyList}
        />
      </div>
      <section
        aria-hidden={!openMyList}
        aria-live="assertive"
        className={`fixed inset-0 flex justify-end w-full h-screen transform transition-all duration-500 ease-in-out ${
          !openMyList ? 'translate-x-full' : ''
        }`}
      >
        {/* MyListPreview component */}
        <MyListPreview
          handleMyListState={setOpenMyList}
          myListState={openMyList}
          myListData={myListData}
        />
      </section>
    </nav>
  );
}
