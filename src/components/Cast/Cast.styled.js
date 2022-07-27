import styled from "styled-components";

export const CreditsList = styled.ul`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  gap: ${p => p.theme.space[5]}px;
  font-size: 0.8em;
`;

export const CreditsItem = styled('li')`
  padding-top: ${p => p.theme.space[5]}px;
`;

export const MainHeader = styled('h1')`
  margin-bottom: ${p => p.theme.space[4]}px;
`;