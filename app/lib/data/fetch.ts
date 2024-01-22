export async function fetchMovieList({ top = 10 }: { top: number }) {
  const apiUrl = `http://api.cursosya.info/api/movies?top=${top}
  `;
  const options = {
    next: { revalidate: 86400 },
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
    throw new Error('Error fetching movie list');
  }
}

export async function fetchMovieDetails(movieSlug: string) {
  const apiUrl = `http://api.cursosya.info/api/movies/${movieSlug}
  `;
  const options = {
    next: { revalidate: 86400 },
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
