import { DishContainer } from '../dish/container';
import styles from './styles.module.scss';

export const Menu = ({ dishes }) => {
  return (
    <div className={styles.root}>
      {dishes.map((dish) => (
        <DishContainer key={dish.id} dish={dish} />
      ))}
    </div>
  );
};
