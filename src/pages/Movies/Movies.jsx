import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import * as API from '../../services/movie-api';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function fetchMovies() {
      if (!query) return;
      try {
        const data = await API.serachMovies(query);
        const { results } = data;
        const properStructData = results.map(({ id, title }) => ({
          id,
          title,
        }));
        setMovies(properStructData);
      } catch (error) {
        setError(true);
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <main>
      <SearchBar handleQuery={setSearchParams} />
      { error && <div>Smth went wrong</div> }
      <MovieList movies={movies} location={location} />
      <Outlet />
    </main>
  );
};
