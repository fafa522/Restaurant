import styles from './styles.module.scss';
import { RestaurantTabContainer } from '../restaurant-tabs/container';
import { Outlet } from 'react-router-dom';

export const Restaurants = () => {
  return (
    <div className={styles.root}>
      <RestaurantTabContainer />
      <Outlet />
    </div>
  );
};
