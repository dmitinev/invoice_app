import Logo from '../../assets/logo.svg?react';
import style from './HeaderLogo.module.scss';

interface HeaderLogoProps {}

export const HeaderLogo = ({}: HeaderLogoProps) => {
  return (
    <div className={style.headerLogo}>
      <Logo />
    </div>
  );
};
