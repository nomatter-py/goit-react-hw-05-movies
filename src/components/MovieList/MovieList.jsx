import { LinkStyled } from "./MovieList.styled";
import PropTypes from 'prop-types';

export const MovieList = ({ movies, location }) => {
    return (<ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </LinkStyled>
            </li>
          );
        })}
      </ul>)
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}