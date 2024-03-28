import { ReactNode, useState } from 'react';
import styles from './CheckBox.module.scss';

interface CheckBoxProps {
  name: string;
  children: ReactNode;
}

export const CheckBox = ({ name, children }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.checkBox}>
      <input
        type="checkbox"
        id={`${name}-checkbox`}
        className={styles.checkBox__input}
        name={name}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor={`${name}-checkbox`}>{children}</label>
    </div>
  );
};
