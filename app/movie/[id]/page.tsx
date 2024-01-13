'use client'

import { useParams } from 'next/navigation';

import MovieDetail from '@/components/MovieDetail/MovieDetail';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <MovieDetail movieId = {id} />
    </>
  );
};

export default MovieDetailsPage;
