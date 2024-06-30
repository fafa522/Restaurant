import { CounterWithAuthorizeCheck } from '../counter/counter';
import styles from './styles.module.scss';

export const Dish = ({ dish, amount, increment, decrement }) => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.name}>{dish.name}</div>
        <div className={styles.ingredients}>{dish.ingredients.join(', ')}</div>
        <div className={styles.price}>{dish.price.toFixed(2)} $</div>
      </div>
      <div className={styles.counter}>
        <CounterWithAuthorizeCheck
          amount={amount}
          increment={increment}
          decrement={decrement}
        />
      </div>
    </div>
  );
};
