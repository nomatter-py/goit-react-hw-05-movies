import styled from 'styled-components';

export const ReviewsContainer = styled('div')`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[3]}px;
`;

export const ReviewsList = styled('ul')`
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const ReviewsItem = styled('li')`
  padding-top: ${p => p.theme.space[5]}px;
`;

export const AuthorHeader = styled('h1')`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
