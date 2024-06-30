import { WithAuthorize } from '../../hocs/with-authorize';
import styles from './styles.module.scss';

export const Counter = ({ amount, increment, decrement }) => {
  return (
    <div className={styles.root}>
      <div className={styles.count}>{amount}</div>
      <div>
        <button
          className={styles.button}
          onClick={decrement}
          disabled={amount === 0}
        >
          -
        </button>
        <button
          className={styles.button}
          onClick={increment}
          disabled={amount === 5}
        >
          +
        </button>
      </div>
    </div>
  );
};

export const CounterWithAuthorizeCheck = WithAuthorize({
  Authorized: Counter,
  Unauthorized: () => <div>You need authorize</div>,
});
