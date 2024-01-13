'use client'

import React, { createContext, useState, useContext } from 'react';

import { Movie, MovieDetail } from '@/types/types';

type MovieApiContextProviderProps = {
    children: React.ReactNode;
};

type MovieApiContext = {
    movieThumbnails:  Movie[];
    setMovieThumbnails: React.Dispatch<React.SetStateAction<Movie[]>>;
    allMoviesDetails: MovieDetail[];
    setAllMoviesDetails: React.Dispatch<React.SetStateAction<MovieDetail[]>>;
}

export const MovieApiContext = createContext<MovieApiContext | null>(null);

export default function MovieApiContextProvider({ children }: MovieApiContextProviderProps) {
    const [ movieThumbnails, setMovieThumbnails ] = useState<Movie[]>([]);
    const [ allMoviesDetails, setAllMoviesDetails ] = useState<MovieDetail[]>([]);

    return (
        <MovieApiContext.Provider
            value={{
                movieThumbnails,
                setMovieThumbnails,
                allMoviesDetails,
                setAllMoviesDetails,
            }}
        >
            {children}
        </MovieApiContext.Provider>
    );
}

export function useMovieApiContext() {
    const context = useContext(MovieApiContext);
    if(!context) {
        throw new Error('MovieApi context should be used within MovieApiContextProvider');
    }
    
    return context;
}