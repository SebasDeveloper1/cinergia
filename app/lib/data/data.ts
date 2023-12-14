export async function fetchTrending() {
  const apiUrl =
    'https://api.themoviedb.org/3/trending/movie/day?language=es-CO';

  const options = {
    next: { revalidate: 86400 },
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      const error: Error = new Error(
        `Error: ${response.status} - ${response.statusText}`,
      );
      throw error;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error fetching trending data');
  }
}

export async function fetchMovieNowPlaying() {
  const apiUrl =
    'https://api.themoviedb.org/3/movie/now_playing?language=es-CO-US&page=1';

  const options = {
    next: { revalidate: 86400 },
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      const error: Error = new Error(
        `Error: ${response.status} - ${response.statusText}`,
      );
      throw error;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error fetching trending data');
  }
}

export async function fetchMovieDetails(movieId: number) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=es-CO`;
  const options = {
    next: { revalidate: 86400 },
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      const error: Error = new Error(
        `Error: ${response.status} - ${response.statusText}`,
      );
      throw error;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error fetching movie details');
  }
}
