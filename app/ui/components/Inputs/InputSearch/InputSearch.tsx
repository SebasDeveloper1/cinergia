import React from 'react';
import { InputSearchProps } from '../Inputs.model';

export default function InputSearch({
  variant = 'LG',
  ...InputSearchProps
}: InputSearchProps) {
  const renderInput = () => (
    <input
      type="search"
      placeholder="Buscar..."
      className={`w-full h-full ${
        variant === 'SM' ? 'p-2' : 'px-4 py-1'
      } bg-transparent focus:outline-none focus:border-none`}
      {...InputSearchProps}
    />
  );

  return (
    <span
      className={`overflow-hidden flex justify-center items-center gap-1 w-full rounded-md bg-dark-800/60 ${
        variant === 'SM' ? 'pr-1 pl-2' : 'p-0'
      }`}
    >
      {variant === 'SM' ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-50"
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
          {renderInput()}
        </>
      ) : (
        <>
          {renderInput()}
          <button
            className="button-text py-2 px-4 rounded-none bg-dark-800"
            title="Buscar"
            aria-label="Search"
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
          </button>
        </>
      )}
    </span>
  );
}
