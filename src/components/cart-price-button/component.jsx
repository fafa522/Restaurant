import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { WithAuthorize } from '../../hocs/with-authorize';

export const PriceButton = ({ price, render }) => {
  return (
    <div className={styles.root}>
      <div>{price.toFixed(2)} $</div>
      {render && (
        <Link to={'/order'}>
          <button className={styles.button}>order</button>
        </Link>
      )}
    </div>
  );
};

export const CartWithAuthorizeCheck = WithAuthorize({
  Authorized: PriceButton,
  Unauthorized: () => null,
});
