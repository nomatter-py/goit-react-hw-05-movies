import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import * as API from '../../services/movie-api';
import {
  BackLink,
  MovieContainer,
  MainHeader,
  DetailsContainer,
  AdditionalInfoSection,
  AdditionalInfoLink,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const location = useLocation();
  const [movieDetals, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      try {
        setIsLoading(true);
        const data = await API.getMovieDetails(id);
        const { title, poster_path, vote_average, overview, genres } = data;
        setMovieDetails({ title, poster_path, overview, vote_average, genres });
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }

    fetchDetails();
  }, [id]);

  if (!movieDetals) {
    return null;
  }

  const { title, poster_path, overview, vote_average, genres } = movieDetals;

  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <BackLink to={backLinkHref}>
        <AiOutlineLeft />
        Go back
      </BackLink>
      <MovieContainer>
        <img
          alt={title}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        ></img>
        <DetailsContainer>
          <MainHeader>{title}</MainHeader>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </DetailsContainer>
      </MovieContainer>
      <AdditionalInfoSection>
        <h2>Additional information</h2>
        <ul>
          <li>
            <AdditionalInfoLink to="cast" state={{ from: backLinkHref }}>Cast</AdditionalInfoLink>
          </li>
          <li>
            <AdditionalInfoLink to="reviews" state={{ from: backLinkHref }}>Reviews</AdditionalInfoLink>
          </li>
        </ul>
      </AdditionalInfoSection>
      <Outlet />
    </main>
  );
};
