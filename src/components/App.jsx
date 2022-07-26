import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { NotFound } from 'pages/NotFound/NotFound';
import { Cast } from '../components/Cast/Cast';
import {Review} from '../components/Review/Review'
import { Container, Header, Link } from './App.styled';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies"  >
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast/> } />
              <Route path="reviews" element={<Review/> } />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
