import { Header } from 'src/components/Header';
import { InvoicesPalette } from 'src/components/InvoicesPalette';
import { PageControls } from 'src/components/PageControls';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mainPage__controls}>
        <PageControls />
        <div className={styles.mainPage__cards}>
          <InvoicesPalette />
        </div>
      </div>
    </main>
  );
};
