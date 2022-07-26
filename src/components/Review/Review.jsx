import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsContainer, ReviewsList, ReviewsItem, AuthorHeader } from './Review.styled';
import * as API from '../../services/movie-api';

export const Review = () => {

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        setIsLoading(true);
        const data = await API.getMovieReviews(id);
        console.log(data);
        setReviews([...data.results]);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchReviews();
  }, [id]);

  if (reviews.length === 0) {
    return <ReviewsContainer>We don't have any reviews for this movie</ReviewsContainer>;
  }

  return (<section>
      <ReviewsList>
        {reviews.map(({ author, content, id }) => (
          <ReviewsItem key={id}>
            <AuthorHeader>Author: {author}</AuthorHeader>
            <p>{content}</p>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </section>);
};