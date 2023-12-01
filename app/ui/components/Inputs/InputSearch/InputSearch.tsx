import React from 'react';
import IconButton from '../../Buttons/IconButton/IconButton';
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
        variant === 'SM' ? 'p-2' : 'px-4 py-2'
      } bg-transparent focus:outline-none focus:border-none`}
      {...InputSearchProps}
    />
  );

  return (
    <span
      className={`${
        variant === 'SM'
          ? 'flex justify-center items-center gap-1 w-full h-full pr-1 pl-4 rounded-full bg-dark-800/60'
          : 'overflow-hidden flex justify-center items-center gap-1 w-full h-full rounded-full bg-dark-800/60'
      }`}
    >
      {variant === 'SM' ? (
        <>
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
          {renderInput()}
        </>
      ) : (
        <>
          {renderInput()}
          <IconButton
            variant="text"
            title="Buscar"
            aria-label="Search"
            styles="px-4 rounded-none bg-dark-800"
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
        </>
      )}
    </span>
  );
}
