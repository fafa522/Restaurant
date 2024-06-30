import { useParams } from 'react-router-dom';
import { useGetRestaurantsQuery } from '../../redux/service/api';
import { SkeletonForHomePage } from '../skeletons/skelet-home/component';
import { Restaurant } from './component';

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const { data: restaurantData, isLoading } = useGetRestaurantsQuery();
  const restaurant = restaurantData?.find(({ id }) => id === restaurantId);
  if (isLoading) {
    return <SkeletonForHomePage />;
  }

  if (!restaurant) {
    return <div>refresh the page</div>;
  }
  return <Restaurant restaurant={restaurant} />;
};
