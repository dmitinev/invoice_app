import useWindowDimensions from 'src/hooks/useWindowWidth';
import styles from './PageControlsTextInfo.module.scss';

export const PageControlsTextInfo = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.PageControlsTextInfo}>
      <h1 className={styles.PageControlsTextInfo__title}>Invoices</h1>
      <span className={styles.PageControlsTextInfo__qty}>
        {width <= 768 ? '7 invoices' : 'There are 7 total invoices'}
      </span>
    </div>
  );
};
