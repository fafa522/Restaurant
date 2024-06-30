import styles from './styles.module.scss';
import { Tab } from '../tab/component';

export const RestaurantTab = ({ restaurants }) => {
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant) => (
        <Tab key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
