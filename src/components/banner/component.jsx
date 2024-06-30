import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import image from '/img/Restaurant.png';

export const Banner = ({ restaurant }) => {
  const location = useLocation();
  const shouldRenderLink = () => {
    return location.pathname == '/';
  };

  return (
    <div className={styles.root}>
      {restaurant ? (
        <img className={styles.banner} src={restaurant.img} />
      ) : (
        <img className={styles.banner} src={image} />
      )}
      <div className={styles.text}>
        <h1 className={styles.headline}>
          {restaurant ? restaurant.name : 'Order Food'}
        </h1>
        {shouldRenderLink() && <h3>From 175 Restaurants</h3>}
      </div>
    </div>
  );
};
