// Función para obtener la lista de películas
export async function fetchMovieList({ top = 10 }: { top: number }) {
  const apiUrl = `http://api.cursosya.info/api/movies?top=${top}`;
  const options = {
    next: { revalidate: 86400 },
    rejectUnauthorized: false, // ¡Esta línea desactiva la verificación del certificado SSL!
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

// Función para obtener detalles de una película
export async function fetchMovieDetails(movieSlug: string) {
  const apiUrl = `http://api.cursosya.info/api/movies/${movieSlug}`;
  const options = {
    next: { revalidate: 86400 },
    rejectUnauthorized: false, // ¡Esta línea desactiva la verificación del certificado SSL!
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

// Función para obtener datos de una sección de inicio
export async function fetchHomeSection({ section }: { section: string }) {
  const apiUrl = `https://api.cursosya.info/api/homesection/${section}`;
  const options = {
    next: { revalidate: 86400 },
    rejectUnauthorized: false, // ¡Esta línea desactiva la verificación del certificado SSL!
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
    throw new Error('Error fetching home section');
  }
}
