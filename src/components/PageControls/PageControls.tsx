import { Container } from '../Container';
import { PageControlButton } from '../PageControlButton';
import { PageControlSelect } from '../PageControlSelect';
import { PageControlsTextInfo } from '../PageControlsTextInfo';
import styles from './PageControls.module.scss';

export const PageControls = () => {
  return (
    <Container>
      <section className={styles.pageControls}>
        <PageControlsTextInfo />
        <div className={styles.pageControls__select}>
          <PageControlSelect />
        </div>
        <PageControlButton />
      </section>
    </Container>
  );
};
