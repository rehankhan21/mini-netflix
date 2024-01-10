'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import MovieDetail from '@/components/MovieDetail/MovieDetail';
import Navbar from '@/components/Navbar/Navbar';

const MovieDetailsPage: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`);
        const data = await response.json();
        setMovieDetails(data);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) return <div>Loading...</div>;

  console.log(movieDetails);

  return (
    <div>
      <Navbar />
      {/* <h1>{movieDetails.Title}</h1> */}
      {/* Render other movie details */}
      <MovieDetail movieDetails = {movieDetails} />
    </div>
  );
};

export default MovieDetailsPage;
