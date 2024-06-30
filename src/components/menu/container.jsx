import { useParams } from 'react-router-dom';
import { useGetDishesQuery } from '../../redux/service/api';
import { SkeletonForHomePage } from '../skeletons/skelet-home/component';
import { Menu } from './component';

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const { data: dishes, isFetching } = useGetDishesQuery(restaurantId);
  if (isFetching) {
    return <SkeletonForHomePage />;
  }

  if (!dishes?.length) {
    return <div>refresh the page</div>;
  }
  return <Menu dishes={dishes} />;
};
