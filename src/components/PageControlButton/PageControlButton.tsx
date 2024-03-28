import iconPlus from '../../assets/icon-plus.svg';
import styles from './PageControlButton.module.scss';

interface PageControlButtonProps {
  text: string;
}

export const PageControlButton = ({ text }: PageControlButtonProps) => {
  return (
    <button className={styles.pageControlButton}>
      <div className={styles.pageControlButton__icon}>
        <img
          className={styles.pageControlButton__iconImg}
          src={iconPlus}
          alt="plus icon"
        />
      </div>
      {text}
    </button>
  );
};
