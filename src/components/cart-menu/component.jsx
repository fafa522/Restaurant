import { WithAuthorize } from '../../hocs/with-authorize';
import { Counter } from '../counter/counter';

export const CartMenu = ({ amount, increment, decrement, dish }) => {
  return (
    <div>
      {dish.name}
      <Counter amount={amount} decrement={decrement} increment={increment} />
    </div>
  );
};
export default CartMenu;

export const BasketWithAuthorizeCheck = WithAuthorize({
  Authorized: CartMenu,
  Unauthorized: () => <div>You need authorize</div>,
});
