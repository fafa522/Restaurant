import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Tab = ({ restaurant }) => {
  return (
    <Link to={`/${restaurant.id}`} className={styles.root}>
      <img className={styles.img} src={restaurant.img}></img>
      <div className={styles.name}>{restaurant.name}</div>
    </Link>
  );
};
