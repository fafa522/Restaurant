import { CartMenuContainer } from '../cart-menu/container';
import { PriceButtonContainer } from '../cart-price-button/container';

export const Cart = ({ dishIds, dishes }) => {
  return (
    <div>
      <div>
        {dishIds?.map((dishId) => {
          return (
            <CartMenuContainer key={dishId} dishId={dishId} dishes={dishes} />
          );
        })}
      </div>
      <PriceButtonContainer dishIds={dishIds} dishes={dishes} />
    </div>
  );
};
