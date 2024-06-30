import styles from './styles.module.scss';

export const Review = ({ review, user }) => {
  return (
    <div className={styles.root}>
      <div className={styles.user}>{user.name}</div>
      <div>{review.text}</div>
    </div>
  );
};
