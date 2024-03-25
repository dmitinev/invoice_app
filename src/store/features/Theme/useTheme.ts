import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/store/redux-hooks';
import { Theme } from 'src/types';
import { selectTheme } from './ThemeSelectors';
import { setTheme } from './ThemeSlice';

export const useTheme = (): [Theme, () => void] => {
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};
