import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-bottom: 14px;
`;

export const MovieContainer = styled('section')`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  border-bottom: 1px solid black;
  margin-bottom: 32px;
  padding-bottom: ${p => p.theme.space[4]}px;

  > h1,
  h2,
  p {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  > img {
    height: fit-content;
  }
`;

export const MainHeader = styled('h1')`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const DetailsContainer = styled('div')`
max-width: 380px;
  padding: ${p => p.theme.space[4]}px;
`;

export const AdditionalInfoSection = styled('section')`
 border-bottom: 1px solid black;
   > h1,
  h2,
  p {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
  > ul {
    padding-left: ${p => p.theme.space[6]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
  > ul li::marker {
    content: '-';
  }
`;

export const AdditionalInfoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
