'use client'

import React, { useEffect, useState } from 'react';
import { redirect, useParams } from 'next/navigation';

import MovieDetail from '@/components/MovieDetail/MovieDetail';
import Navbar from '@/components/Navbar/Navbar';

const MovieDetailsPage: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        const response = await fetch(`/api/movie/${id}`, {
          headers: {
              Accept: 'application/json',
              method: 'GET',
          }
      });
        const data = await response.json();
        setMovieDetails(data);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) return <div>Loading...</div>;

  if (movieDetails.Response === 'False') redirect('/movie');

  return (
    <>
      <Navbar />
      <MovieDetail movieDetails = {movieDetails} />
    </>
  );
};

export default MovieDetailsPage;
