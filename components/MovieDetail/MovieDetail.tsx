import React from 'react';

import styles from './MovieDetail.module.scss'

type MovieDetailProps = {
    movieDetails: {
        Actors?: string;
        Awards?: string;
        BoxOffice?: string;
        Country?: string;
        DVD?: string;
        Director?: string;
        Genre?: string;
        Language?: string;
        Metascore?: string;
        Plot?: string;
        Poster?: string;
        Production?: string;
        Rated?: string;
        Ratings?: Array<{ Source?: string; Value?: string }>;
        Released?: string;
        Response?: string;
        Runtime?: string;
        Title?: string;
        Type?: string;
        Website?: string;
        Writer?: string;
        Year?: string;
        imdbID?: string;
        imdbRating?: string;
        imdbVotes?: string;
    }
  };

const MovieDetail: React.FC<MovieDetailProps> = ({ movieDetails }) => {
    return (
        <div className={styles['movie-detail']}>
            <img src={movieDetails.Poster} alt={movieDetails.Title} className={styles['movie-tile__poster']} />
            <div>{movieDetails.Actors}</div>
            <ul className='movie-detail__list'>
                {Object.entries(movieDetails).map(([key, value]) => (
                    <li key={key} className={styles['movie-detail__item']}>
                        <strong>{key}:</strong> {value.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetail;
