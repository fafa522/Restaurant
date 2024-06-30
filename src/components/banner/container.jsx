import { useParams } from 'react-router-dom';
import { Banner } from './component';
import { useGetRestaurantsQuery } from '../../redux/service/api';

export const BannerContainer = () => {
  const { restaurantId } = useParams();
  const { data: restaurantData, isFetching } = useGetRestaurantsQuery();
  const restaurant = restaurantData?.find(({ id }) => id === restaurantId);

  if (isFetching) {
    return null;
  }

  return <Banner restaurant={restaurant} />;
};
