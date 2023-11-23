import React from 'react';

export default function InputSearch(): JSX.Element {
  return (
    <span className="flex justify-center items-center gap-1 w-full h-full pr-1 pl-4 rounded-full bg-dark-800/60">
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
      <input
        type="search"
        placeholder="Buscar..."
        className="w-full h-full p-2 bg-transparent focus:outline-none focus:border-none"
      />
    </span>
  );
}
