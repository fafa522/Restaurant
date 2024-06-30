import { useSelector } from 'react-redux';
import { Cart } from './component';
import { SelectCartDishIds } from '../../redux/ui/cart/selector';
import { useGetDishesQuery } from '../../redux/service/api';

const CartContainer = () => {
  const dishIds = useSelector(SelectCartDishIds);
  const { data: dishes } = useGetDishesQuery();

  if (dishIds.length === 0) {
    return 'The basket is empty';
  }
  return <Cart dishIds={dishIds} dishes={dishes} />;
};

export default CartContainer;
