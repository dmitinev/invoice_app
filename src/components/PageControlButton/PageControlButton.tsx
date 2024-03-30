import useWindowDimensions from 'src/hooks/useWindowWidth';
import iconPlus from '../../assets/icon-plus.svg';
import styles from './PageControlButton.module.scss';

export const PageControlButton = () => {
  const { width } = useWindowDimensions();
  return (
    <button className={styles.pageControlButton}>
      <div className={styles.pageControlButton__icon}>
        <img
          className={styles.pageControlButton__iconImg}
          src={iconPlus}
          alt="plus icon"
        />
      </div>
      {width <= 768 ? 'New' : 'New Invoice'}
    </button>
  );
};
