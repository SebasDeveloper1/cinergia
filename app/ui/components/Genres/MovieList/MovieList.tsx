/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useEffect } from 'react';
import { MovieCard } from '../MovieCard';
import { fetchMovieList } from '@/app/lib/data/data';
import { genresListTypes } from '@/app/lib/data/genreList/genreList.model';
import MovieListSkeleton from './MovieListSkeleton';

/**
 * MovieList Component
 *
 * A React component that displays a list of movies for a specific genre.
 * It dynamically loads more movies as the user scrolls to the bottom of the page.
 *
 * @component
 * @param {Object} props - The properties of the MovieList component.
 * @param {genresListTypes} props.genreInfo - Information about the genre.
 * @param {{ page: number; results: MovieType[] | TrendingMovieType[] }} props.movieList - Information about the current page of movie results.
 * @returns {JSX.Element} - JSX element representing the MovieList component.
 */

export function MovieList({
  genreInfo,
  movieList,
}: {
  genreInfo: genresListTypes;
  movieList: { page: number; results: MovieType[] | TrendingMovieType[] };
}) {
  const { name, id } = genreInfo;
  const { results, page } = movieList;

  const [currentPage, setCurrentPage] = useState(page);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [movieResults, setMovieResults] = useState(results);

  const loadMoreData = async () => {
    try {
      setLoading(true);

      const nextPage = currentPage + 1;
      const newData = await fetchMovieList({ genreId: id, page: nextPage });

      setCurrentPage(nextPage);
      setHasMore(nextPage < newData.total_pages);
      setMovieResults((prevResults) => [...prevResults, ...newData.results]);
    } catch (error) {
      console.error('Error fetching more data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    /**
     * Event handler for scrolling. Checks if the user has scrolled to the bottom
     * and triggers the loading of more movie data if conditions are met.
     */
    const handleScroll = () => {
      const footerElement = document.getElementById('footer');

      if (!footerElement) {
        // If the footer element is not found, exit the function.
        return;
      }

      const isScrolledToBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - footerElement.offsetHeight;

      if (isScrolledToBottom && !loading && hasMore) {
        loadMoreData();
      }
    };

    // Add event listener for window scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore, currentPage, id]);

  return (
    <section className="flex place-content-center w-full py-16">
      <div className="w-11/12 md:w-10/12">
        {/* Genre Heading */}
        <h2 className="heading-3 font-bold text-textColorNeutral-50 w-fit mb-12">
          {name}
        </h2>
        {/* Movie Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 w-full">
          {movieResults.map((movie) => (
            <MovieCard key={`movie-${movie?.id}`} movieData={movie} />
          ))}
          {/* Loading Indicator */}
          {loading && <MovieListSkeleton />}
        </ul>
      </div>
    </section>
  );
}
