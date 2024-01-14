import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/image';

import styles from './MovieDetail.module.scss';
import { MovieDetail } from '@/types/types';
import { useMovieApiContext } from '@/contexts/api-context';

type MovieDetailProps = {
    movieId: string | string[],
};

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
    const { allMoviesDetails, setAllMoviesDetails } = useMovieApiContext();
    const [ movieDetails, setMovieDetails ] = useState<MovieDetail | null>(null);
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        const fetchMovieDetails = async () => {
            const foundMovie = allMoviesDetails.find(movie => movie.imdbID === movieId);
            
            if (foundMovie) {
                setMovieDetails(foundMovie);
                return;
            }
            
            if (movieId) {
                try {
                    const response = await fetch(`/api/movie/${movieId}`, {
                        headers: {
                            Accept: 'application/json',
                            method: 'GET',
                        },
                        signal,
                    });
                    const data = await response.json();
                    
                    setMovieDetails(data);
                    setAllMoviesDetails(prevMovies => [...prevMovies, data]);
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                }
            }
        };
        
        fetchMovieDetails();
        
        return () => {
            controller.abort();
        };
    }, [movieId]);
    
    if (!movieDetails) return <div>Loading...</div>;
    
    if (movieDetails.Response === 'False') redirect('/movie');

    return (
        <section className={styles['movie-detail']} aria-labelledby='movie-title' role='region'>
            <Image 
                src={`${movieDetails.Poster}`} 
                alt={`Poster of ${movieDetails.Title}`} 
                className={styles['movie-detail__poster']} 
                width='0' 
                height='0' 
                sizes='100vw'
                priority
            />
            <div className={styles['movie-detail__detail-box']}>
                <h2 id='movie-title' className={styles['movie-detail__title']}>{movieDetails.Title}</h2>
            </div>
            <div className={styles['movie-detail__detail-box']}>
                <p className={styles['movie-detail__plot']}>{movieDetails.Plot}</p>
            </div>
            <div className={styles['movie-detail__detail-box']}>
                <div className={styles['movie-detail__rating']}>
                    IMDb Rating: {movieDetails.imdbRating}
                </div>
            </div>
        </section>
    );
};

export default MovieDetail;