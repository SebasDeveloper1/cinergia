// Import necessary dependencies and types
import { Navbar } from './Navbar';
import { fetchUserData } from '@/app/lib/data/fetch';

/**
 * Header Component
 *
 * A React component representing the header section of the application. It includes the Navbar component,
 * which displays the navigation bar with trending movies.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the Header component.
 */

export async function Header() {
  // Fetch user data
  const userEmail = 'carlinoc@gmail.com';
  const userDataResponse: UserDataRequestAPI = await fetchUserData({
    email: userEmail,
  });

  const userData = userDataResponse.data[0];
  const movieList = userData.movies;

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full">
      <Navbar myListData={movieList} />
    </header>
  );
}
