'use client';
import { useState, useRef, MouseEvent } from 'react';
import InputSearch from '@/components/Inputs/InputSearch';
import IconButton from '@/components/Buttons/IconButton/IconButton';
import useOnClickOutside from '@/hooks/useOnClickOutside';

export default function Navbar(): JSX.Element {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault;
    setOpenMenu(!openMenu);
  };

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
  };

  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => {
    setOpenMenu(false);
    setOpenSearch(false);
  });

  return (
    <nav className="flex justify-center items-center w-full h-16 border-b border-borderPrimaryDark/10 bg-bgPrimaryDark">
      <div className="relative flex justify-between items-center w-full h-full p-4">
        <div>
          <a className="text-xl">CinergiaLogo</a>
        </div>
        <div ref={menuRef}>
          <IconButton
            variant={'text'}
            title={!openMenu ? 'Menu' : 'Cerrar'}
            aria-label="Menu"
            onClick={(e) => handleSearch(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </IconButton>
          <IconButton
            type="button"
            variant={'text'}
            title={!openMenu ? 'Menu' : 'Cerrar'}
            aria-label="Menu"
            styles={`transition-all duration-300 transform ${
              openMenu ? 'rotate-90' : ''
            }`}
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
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            )}
          </IconButton>
          <div
            aria-hidden={!openSearch}
            aria-live="assertive"
            className={`absolute inset-0 bg-gray-900 p-2 transform transition-all ${
              !openSearch ? '-translate-y-[110%]' : ''
            }`}
          >
            <div className="flex justify-center items-center gap-2 w-full">
              <InputSearch />
              <IconButton
                variant={'text'}
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
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </IconButton>
            </div>
          </div>
          <div
            aria-hidden={!openMenu}
            aria-live="assertive"
            className={`fixed inset-x-0 top-0 bg-bgSecondaryDark mt-16 px-4 py-6
             transform transition-all  ${!openMenu ? 'translate-x-full' : ''}`}
          >
            <div className="w-full">
              <ul className="flex flex-col items-center gap-5 w-full">
                <li className="navbar-item-sm w-full pb-3 border-b border-borderPrimaryDark/20">
                  <a className="flex items-center gap-3" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-home"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                    Inicio
                  </a>
                </li>
                <li className="navbar-item-sm w-full">
                  <a className="flex items-center gap-3" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-movie"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                    Mi lista
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
