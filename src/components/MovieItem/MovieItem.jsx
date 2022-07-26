import { LinkStyled } from './MovieItem.styled';

export const MovieItem = ({ id, title }) => {
  return (
    <li key={id}>
      <LinkStyled to={`/movies/${id}`}>{title}</LinkStyled>
    </li>
  );
};
