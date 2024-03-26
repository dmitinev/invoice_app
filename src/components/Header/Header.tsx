import { HeaderLogo } from '../HeaderLogo';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <HeaderLogo />
      </div>
    </header>
  );
};
