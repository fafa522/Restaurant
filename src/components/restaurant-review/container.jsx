import { useParams } from 'react-router-dom';
import { useGetReviewsQuery, useGetUsersQuery } from '../../redux/service/api';
import { RestaurantReview } from './component';
import { SkeletonForHomePage } from '../skeletons/skelet-home/component';
import { useMemo } from 'react';

export const RestaurantReviewContainer = () => {
  const { restaurantId } = useParams();
  const { data: reviews, isFetching } = useGetReviewsQuery(restaurantId);
  const { data: users } = useGetUsersQuery();

  const reviewsWithUsers = useMemo(() => {
    return reviews?.map((review) => {
      const user = users?.find((user) => user.id === review.userId);
      return { ...review, user };
    });
  }, [reviews, users]);

  if (isFetching) {
    return <SkeletonForHomePage />;
  }

  if (!reviews) {
    return <div>refresh the page</div>;
  }
  return <RestaurantReview reviews={reviewsWithUsers} />;
};
