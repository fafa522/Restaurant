import { Review } from '../review/component';
import styles from './styles.module.scss';

export const RestaurantReview = ({ reviews }) => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <li className={styles.list_item} key={review.id}>
            <Review review={review} user={review.user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
