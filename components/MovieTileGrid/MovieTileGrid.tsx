'use client'

import { useEffect, useState } from 'react';

import MovieTile from '../MovieTile/MovieTile';
import { Movie } from '@/types/types';
import styles from './MovieTileGrid.module.scss';
import { useMovieApiContext } from '@/contexts/api-context';

type ApiResponse = {
    Search: Movie[];
    totalResults: string;
    Response: string;
};

const MovieTileGrid: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { movieThumbnails, setMovieThumbnails } = useMovieApiContext();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if (movieThumbnails.length === 0) {
            const fetchMovies = async () => {
                try {
                    const response = await fetch('/api/movie/avengers', {
                        headers: {
                            Accept: 'application/json',
                            method: 'GET',
                        },
                        signal,
                    });
                    const data: ApiResponse = await response.json();
            
                    if (response.ok) {
                        setMovieThumbnails(data.Search);
                    } else {
                        console.error('API error');
                    }
                } catch (error) {
                    console.error('Error fetching movie data:', error);
                } finally {
                    setIsLoading(false);
                }
            };
            
            fetchMovies();
        }
        
        return () => {
            controller.abort();
        };
    }, [movieThumbnails, setMovieThumbnails]);
    
    if (isLoading && movieThumbnails.length === 0) {
        return <div aria-busy='true'>Loading...</div>;
    }
    
    if (!movieThumbnails) {
        return <div aria-live='polite'>No movie data found.</div>;
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