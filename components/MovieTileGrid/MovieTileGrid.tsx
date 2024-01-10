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
            const response = await fetch(`http://www.omdbapi.com/?s=avengers&apikey=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`);
            const data: ApiResponse = await response.json();
    
            if (data.Response === 'True') {
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
        return <div>Loading...</div>
    }

    if (!movies) {
        console.log(movies)
        return <div>No movie data found.</div>
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