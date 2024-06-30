import styles from './styles.module.scss';
export const SkeletonForHomePage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.skeleton}></div>
    </div>
  );
};
