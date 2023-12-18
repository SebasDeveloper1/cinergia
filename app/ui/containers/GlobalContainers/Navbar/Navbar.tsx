import NavbarSM from './NavbarSM';
import NavbarLG from './NavbarLG';
import { NavbarPropsTypes } from './Navbar.model';

/**
 * Navbar Component
 *
 * A React component representing the navigation bar of the application. It includes both small and large versions of the navbar
 * for responsive design. The component receives an array of navigation links with names, hrefs, and icons to be displayed.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the Navbar component.
 */
export default function Navbar(): JSX.Element {
  // Define an array of navigation links with names, hrefs, and icons
  const links: NavbarPropsTypes[] = [
    {
      name: 'inicio',
      href: '/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-home"
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
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      ),
    },
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
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M8 4l0 16" />
          <path d="M16 4l0 16" />
          <path d="M4 8l4 0" />
          <path d="M4 16l4 0" />
          <path d="M4 12l16 0" />
          <path d="M16 8l4 0" />
          <path d="M16 16l4 0" />
        </svg>
      ),
    },
  ];

  /**
   * Render the JSX for the Navbar component
   */
  return (
    <nav className="flex justify-center items-center w-full h-16 lg:h-[4.5rem] border-b border-borderPrimaryDark/10 bg-bgPrimaryDark">
      <div className="relative flex justify-between items-center w-full h-full p-4">
        <div>
          {/* Application logo */}
          <a className="text-xl">CinergiaLogo</a>
        </div>
        {/* Small screen navbar */}
        <NavbarSM links={links} />
        {/* Large screen navbar */}
        <NavbarLG links={links} />
      </div>
    </nav>
  );
}
