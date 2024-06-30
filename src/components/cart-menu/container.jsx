import { useDispatch, useSelector } from 'react-redux';
import { decrementProduct, incrementProduct } from '../../redux/ui/cart';
import { selectDishAmount } from '../../redux/ui/cart/selector';
import { BasketWithAuthorizeCheck } from './component';

export const CartMenuContainer = ({ dishId, dishes }) => {
  const dish = dishes.find((dish) => dish.id === dishId);
  const amount = useSelector((state) => selectDishAmount(state, dishId));
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementProduct(dishId));
  const decrement = () => dispatch(decrementProduct(dishId));

  if (!dish) {
    return <div>Dish not found</div>;
  }

  return (
    <BasketWithAuthorizeCheck
      amount={amount}
      increment={increment}
      decrement={decrement}
      dish={dish}
    />
  );
};
