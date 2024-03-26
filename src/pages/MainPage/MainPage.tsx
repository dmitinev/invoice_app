import { Header } from 'src/components/Header';
import styles from './MainPage.module.scss';

interface MainPageProps {}

export const MainPage = ({}: MainPageProps) => {
  return (
    <main className={styles.mainPage}>
      <Header />
    </main>
  );
};
