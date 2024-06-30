import { Dish } from './component';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishAmount } from '../../redux/ui/cart/selector';
import { decrementProduct, incrementProduct } from '../../redux/ui/cart';

export const DishContainer = ({ dish }) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => selectDishAmount(state, dish.id));

  const increment = () => dispatch(incrementProduct(dish.id));
  const decrement = () => dispatch(decrementProduct(dish.id));

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={increment}
      decrement={decrement}
    />
  );
};
