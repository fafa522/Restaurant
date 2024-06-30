import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Order = () => {
  return (
    <form className={styles.root}>
      <input className={styles.input} placeholder="name" type="text" />
      <input className={styles.input} placeholder="surname" type="text" />
      <input className={styles.input} placeholder="phone number" type="tel" />
      <textarea className={styles.address} placeholder="address" />
      <Link to={'/thanks'}>
        <button className={styles.orderButton}>ORDER</button>
      </Link>
    </form>
  );
};
