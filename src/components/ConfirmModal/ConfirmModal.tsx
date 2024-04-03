import styles from './ConfirmModal.module.scss';

interface ConfirmModalProps {}

export const ConfirmModal = ({}: ConfirmModalProps) => {
  return (
    <div className={styles.confirmModal__wrapper}>
      <div className={styles.confirmModal__modal}>
        <h2 className={styles.confirmModal__header}>Confirm Deletion</h2>
        <p className={styles.confirmModal__text}>
          Are you sure you want to delete this invoice? This action cannot be
          undone.
        </p>
        <div className={styles.confirmModal__buttons}>
          <button className={styles.confirmModal__buttonCancel}>Cancel</button>
          <button className={styles.confirmModal__buttonDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};
