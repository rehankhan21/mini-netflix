import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Movie } from '@/types/types';
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
      <Image src={`${movie.Poster}`} alt={movie.Title} className={styles['movie-tile__poster']} width='0' height='0' sizes='100vw'/>
    </div>
  );
};

export default MovieTile;