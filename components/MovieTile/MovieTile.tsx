import React from 'react';
import { useRouter } from 'next/navigation';

import { Movie } from '@/types';
import styles from './MovieTile.module.scss';

type MovieTileProps = {
  movie: Movie
};

const MovieTile: React.FC<MovieTileProps> = ({ movie }) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/movie/${movie.imdbID}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOnClick();
    }
  };

  return (
    <div 
      className={styles['movie-tile']} 
      onClick={handleOnClick}
      onKeyDown={handleKeyPress}
      tabIndex={0} 
      role='button' 
      aria-label={`View details of ${movie.Title}`} 
    >
      <img src={movie.Poster} alt={movie.Title} className={styles['movie-tile__poster']} />
    </div>
  );
};

export default MovieTile;
