import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import style from './HeaderLogo.module.scss';

export const HeaderLogo = () => {
  return (
    <div className={style.headerLogo}>
      <Link to={import.meta.env.BASE_URL}>
        <Logo />
      </Link>
    </div>
  );
};
