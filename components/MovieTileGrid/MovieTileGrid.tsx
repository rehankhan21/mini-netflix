'use client'

import React, { useEffect, useState } from 'react';

import MovieTile from '../MovieTile/MovieTile';
import styles from './MovieTileGrid.module.scss';
import { useMovieApiContext } from '@/contexts/api-context';
import { fetchThumbnails } from '@/libs/fetchThumbnails';

const MovieTileGrid: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { movieThumbnails, setMovieThumbnails } = useMovieApiContext();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

         if (movieThumbnails === undefined) {
            return;
         }

        if (movieThumbnails.length === 0) {
            fetchThumbnails(setMovieThumbnails, signal, 'avengers', setIsLoading);
        }

        setIsLoading(false);

        return () => {
            controller.abort();
        };
    }, [movieThumbnails, setMovieThumbnails]);
    
    if (isLoading) {
        return <div aria-busy='true' className='text-white' >Loading...</div>;
    }
    
    if (!movieThumbnails) {
        return <div aria-live='polite' className='text-white' >No movie data found. Please try a different search.</div>;
    }
    
    return (
        <div className={styles['movie-tile-grid']}>
            {movieThumbnails.map(movieThumbnail => (
                <MovieTile key={movieThumbnail.imdbID} movie={movieThumbnail} />
            ))}
        </div>
    );
};

export default MovieTileGrid;