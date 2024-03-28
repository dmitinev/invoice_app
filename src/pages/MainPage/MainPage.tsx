import { Header } from 'src/components/Header';
import { PageControls } from 'src/components/PageControls';
import styles from './MainPage.module.scss';

interface MainPageProps {}

export const MainPage = ({}: MainPageProps) => {
  return (
    <main className={styles.mainPage}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mainPage__controls}>
        <PageControls />
      </div>
    </main>
  );
};
