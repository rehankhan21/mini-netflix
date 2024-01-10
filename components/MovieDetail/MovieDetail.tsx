import React from 'react';
import styles from './MovieDetail.module.scss';

type MovieDetailProps = {
  movieDetails: {
    Title?: string;
    Plot?: string;
    Poster?: string;
    imdbRating?: string;
  };
};

const MovieDetail: React.FC<MovieDetailProps> = ({ movieDetails }) => {
    return (
      <div className={styles['movie-detail']}>
        <img src={movieDetails.Poster} alt={movieDetails.Title} className={styles['movie-detail__poster']} />
        <div className={styles['movie-detail__detail-box']}>
          <h2 className={styles['movie-detail__title']}>{movieDetails.Title}</h2>
        </div>
        <div className={styles['movie-detail__detail-box']}>
          <p className={styles['movie-detail__plot']}>{movieDetails.Plot}</p>
        </div>
        <div className={styles['movie-detail__detail-box']}>
          <div className={styles['movie-detail__rating']}>
            IMDb Rating: {movieDetails.imdbRating}
          </div>
        </div>
      </div>
    );
  };

export default MovieDetail;

