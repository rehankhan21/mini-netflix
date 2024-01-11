import { useEffect, useState } from 'react';

import MovieTile from '../MovieTile/MovieTile';
import { Movie } from '@/types';
import styles from './MovieTileGrid.module.scss';

type ApiResponse = {
    Search: Movie[];
    totalResults: string;
    Response: string;
};

const MovieTileGrid: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/api/movie/avengers', {
                    headers: {
                        Accept: 'application/json',
                        method: 'GET',
                    }
                });
                const data: ApiResponse = await response.json();
          
                if (response.ok) {
                  setMovies(data.Search);
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
    }, []);
    
    if (isLoading) {
        return <div aria-busy='true'>Loading...</div>;
    }
    
    if (!movies) {
        return <div aria-live='polite'>No movie data found.</div>;
    }

    return (
        <div className={styles['movie-tile-grid']}>
            {movies.map(movie => (
                <MovieTile key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default MovieTileGrid;