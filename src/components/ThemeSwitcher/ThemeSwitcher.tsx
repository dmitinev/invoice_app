import MoonIcon from 'src/assets/icon-moon.svg?react';
import SunIcon from 'src/assets/icon-sun.svg?react';
import { useTheme } from 'src/store/features/Theme/useTheme';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme();
  };

  return (
    <div onClick={toggleTheme} className={styles.themeSwitcher}>
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};
