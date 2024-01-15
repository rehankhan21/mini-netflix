import { Movie } from '@/types/types';

type ApiResponse = {
    Search: Movie[];
    totalResults: string;
    Response: string;
};

export async function fetchThumbnails(setMovieThumbnails: (thumbnails: any[]) => void, signal: AbortSignal, searchTerm: string, setIsLoading?: (loading: boolean) => void): Promise<void> {
    try {
      const response = await fetch(`/api/thumbnails/${searchTerm}`, {
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
      setIsLoading?.(false);
    }
}