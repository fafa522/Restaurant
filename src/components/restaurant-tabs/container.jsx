import { useGetRestaurantsQuery } from '../../redux/service/api';
import { SkeletonForHomePage } from '../skeletons/skelet-home/component';
import { RestaurantTab } from './component';

export const RestaurantTabContainer = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();
  if (isLoading) {
    return <SkeletonForHomePage />;
  }

  if (!restaurants) {
    return <div>refresh the page</div>;
  }

  return <RestaurantTab restaurants={restaurants} />;
};
