import { MainHeader } from './Home.styled';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import * as API from 'services/movie-api';

export const Home = () => {
  const location = useLocation();
  const [trendingList, setTrendingList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await API.getTrending();
        const { results } = data;
        const properStructData = results.map(({ id, title }) => ({
          id,
          title,
        }));
        setTrendingList([...properStructData]);
      } catch (e) {
        setError(true);
        console.log(e);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (!trendingList) {
    return;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <main>
      {isLoading && <Loader />}
      <MainHeader>Trending today</MainHeader>
      <MovieList movies={trendingList} location={location} />
    </main>
  );
};
