import styles from './styles.module.scss';

export const Popover = ({ children, onClose }) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.root}>{children}</div>
    </>
  );
};
