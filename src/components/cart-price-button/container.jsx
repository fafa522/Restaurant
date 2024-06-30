import { useSelector } from 'react-redux';
import { CartWithAuthorizeCheck } from './component';
import { selectAmounts } from '../../redux/ui/cart/selector';
import { useLocation } from 'react-router-dom';

export const PriceButtonContainer = ({ dishIds, dishes }) => {
  const amounts = useSelector((state) => selectAmounts(state, dishIds));

  const totalPrice = dishIds.reduce((acc, dishId, index) => {
    const dish = dishes.find((dish) => dish.id === dishId);
    const amount = amounts[index];
    return acc + dish.price * amount;
  }, 0);

  const location = useLocation();

  const shouldRenderButtonLink = () => {
    return location.pathname !== '/order';
  };

  return (
    <CartWithAuthorizeCheck
      price={totalPrice}
      render={shouldRenderButtonLink()}
    />
  );
};
