'use client';
import Image from 'next/image';
import coverLogin from '@/public/images/coverLogin.jpg';
import cinergiaLogo from '@/public/cinergiaLogoAzul.svg';
import { signIn } from 'next-auth/react';

/**
 * SignInPage Component
 *
 * The SignInPage component represents the login page for the application.
 * It allows users to sign in using their Google accounts and provides a visually appealing
 * interface with background images, Cinergia logo, and a Google sign-in button.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the SignInPage component.
 * @example
 * // Usage in a parent component or route
 * import SignInPage from '@/app/ui/components/SignInPage';
 * //...
 * return (
 *   <SignInPage />
 * );
 */
export default function SignInPage() {
  /**
   * Handles the sign-in process using the Google authentication provider.
   * Retrieves the previous path from sessionStorage for redirection after successful sign-in.
   */

  const handleSignin = () => {
    const previusPath = sessionStorage.getItem('previusPath');

    if (previusPath) {
      const desPath = previusPath.split('/');
      const isPeliculasPath = desPath[1] === 'peliculas';

      const callbackUrl = isPeliculasPath
        ? `/peliculas/watch/${desPath[2]}`
        : previusPath;

      signIn('google', {
        redirect: false,
        callbackUrl,
      });
    } else {
      console.error('Error: previusPath is no defined.');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 h-screen lg:flex-row lg:justify-center lg:space-y-0 bg-bgPrimaryDark">
      <figure className="relative h-2/6 w-full lg:w-3/5 lg:h-screen after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-primary-500 to-accent-500 after:opacity-20">
        <Image
          fill
          src={coverLogin}
          alt={'Cover Login'}
          placeholder="blur"
          priority
          className="w-full h-full"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
        />
      </figure>
      <section className="flex justify-center w-full lg:w-2/5">
        <div className="w-11/12 max-w-2xl px-4 py-8 lg:w-9/12 space-y-6 rounded-md divide-y divide-slate-600">
          <section className="flex flex-col items-center gap-4">
            <span className="heading-4 font-semibold text-center text-slate-50">
              Bienvenido a
            </span>
            <figure className="relative w-2/3 aspect-video">
              <Image
                fill
                src={cinergiaLogo}
                alt={'Logo Cinergia'}
                placeholder="blur"
                priority
                className="w-full h-full"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </figure>
            <span className="span-lg font-medium text-center text-textColorNeutral-300">
              Inicia sesión con tu cuenta de Google para continuar
            </span>
          </section>
          <form className="w-full pt-6">
            <button
              type="button"
              className="button-primary padding-button w-full"
              onClick={handleSignin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 aspect-square"
                viewBox="0 0 48 48"
                strokeWidth={2}
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Continuar con Google
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
