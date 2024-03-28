import { Container } from '../Container';
import { PageControlButton } from '../PageControlButton';
import { PageControlSelect } from '../PageControlSelect';
import styles from './PageControls.module.scss';

export const PageControls = () => {
  return (
    <Container>
      <section className={styles.pageControls}>
        <div className={styles.pageControls__info}>
          <h1 className={styles.pageControls__title}>Invoices</h1>
          <span className={styles.pageControls__qty}>7 invoices</span>
        </div>
        <div className={styles.pageControls__select}>
          <PageControlSelect />
        </div>
        <PageControlButton text="New" />
      </section>
    </Container>
  );
};
