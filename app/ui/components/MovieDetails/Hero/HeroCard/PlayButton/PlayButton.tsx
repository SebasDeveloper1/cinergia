/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PlayButtonProps } from '../HeroCard.model';
import { paymentType } from '@/app/lib/lists/paymentType';
import { Loading } from './LoadingSkeleton';

/**
 * PlayButton Component
 * @param {PlayButtonProps} props - The properties of the PlayButton component.
 * @returns {JSX.Element} - The rendered PlayButton component.
 */

export function PlayButton({
  movieData,
  userMovieList,
  isLoading,
  handlePay,
}: PlayButtonProps): JSX.Element {
  const { slug, payment_type } = movieData;
  const { data: session, status } = useSession();
  const router = useRouter();

  /**
   * Handles the click event based on the payment type and user session.
   * Navigates to the appropriate route.
   */
  const handleClick = () => {
    // If no payment type is selected, navigate to free watch route.
    if (payment_type === paymentType.free) {
      router.push(`/peliculas/watch-free/${slug}`);
    }
    // If payment type is 'DO' or 'PT'
    else if (
      payment_type === paymentType.totalPay ||
      payment_type === paymentType.mandatoryDonation
    ) {
      // If the user is logged in, navigate to the regular watch route.j
      if (session) {
        if (userMovieList.length > 0) {
          const movieExists = userMovieList.some((obj) => obj.slug === slug);
          if (movieExists) {
            router.push(`/peliculas/watch/${slug}`);
          } else {
            // Pay for the movie
            handlePay();
          }
        } else {
          // Pay for the movie
          handlePay();
        }
        // If the user is not logged in, prompt sign-in.
      } else {
        signIn();
      }
    }
  };

  if (isLoading || status === 'loading') {
    return <Loading />;
  }

  return (
    <>
      <button
        type="button"
        title="Reproducir"
        className={`button-outlined p-4 w-20 aspect-square rounded-full ring-customNeutral-200 md:hover:ring-customNeutral-50 hover:bg-dark-900/30 md:hover:bg-primary-500 md:hover:scale-110 transition ease-in-out duration-300 ${isLoading ? 'opacity-10 animate-pulse' : ''}`}
        onClick={handleClick}
        disabled={isLoading}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-player-play-filled h-full w-full aspect-square"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
            strokeWidth={0}
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  );
}
