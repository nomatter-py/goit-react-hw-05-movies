import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CreditsItem } from './Cast.styled';
import * as API from '../../services/movie-api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCredits() {
      try {
        const data = await API.getMovieCredits(id);
        setCast([...data.cast]);
      } catch (error) {
        setError(error);
      }
    }
    fetchCredits();
  }, [id]);

  if (cast.length === 0) {
    return null;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <section>
      <ul>
        {cast.map(({ profile_path, name, character, id }) => (
          <CreditsItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={name}
              width="150"
            />
            <p>{name}</p>
            <p>Character : {character}</p>
          </CreditsItem>
        ))}
      </ul>
    </section>
  );
};
