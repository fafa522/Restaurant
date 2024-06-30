import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <div className={styles.navigate}>
        <Link
          className={`${styles.menu} ${
            location.pathname.includes(`/${restaurant.id}/menu`)
              ? styles.active
              : ''
          }`}
          to={`/${restaurant.id}/menu`}
        >
          Menu
        </Link>
        <Link
          className={`${styles.review} ${
            location.pathname.includes(`/${restaurant.id}/review`)
              ? styles.active
              : ''
          }`}
          to={`/${restaurant.id}/review`}
        >
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
