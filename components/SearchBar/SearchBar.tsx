'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import styles from './SearchBar.module.scss';
import { useMovieApiContext } from '@/contexts/api-context';
import { fetchThumbnails } from '@/libs/fetchThumbnails';


const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [prevSearchTerm, setPrevSearchTerm] = useState<String>('');

  const { movieThumbnails, setMovieThumbnails } = useMovieApiContext();

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm !== prevSearchTerm) {
        const controller = new AbortController();
        const signal = controller.signal;
        
        if (searchTerm) {
            fetchThumbnails(setMovieThumbnails, signal, searchTerm); 
        }
        
        setPrevSearchTerm(searchTerm);
        setSearchTerm('');

        router.push('/movie');

        return () => {
            controller.abort();
        };
    }
  };

  return (
    <>
      <form className={styles['search-bar']} onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles['search-bar__input']}
          value={searchTerm}
          onChange={handleChange}
          placeholder='Search...'
        />
        <button className={styles['search-bar__button']} type='submit'>Search</button>
      </form>
    </>
  );
};

export default SearchBar;