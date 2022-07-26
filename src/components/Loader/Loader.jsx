import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      {' '}
      <ThreeDots height="100" width="100" color="#7F5283" ariaLabel="loading" />
    </LoaderContainer>
  );
};
