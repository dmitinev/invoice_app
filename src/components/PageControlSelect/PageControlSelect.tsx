import { useState } from 'react';
import arrowDown from '../../assets/icon-arrow-down.svg';
import { CheckBox } from '../CheckBox';
import styles from './PageControlSelect.module.scss';

export const PageControlSelect = () => {
  const [shown, setShown] = useState(false);

  const toggle = () => {
    setShown(!shown);
  };

  return (
    <div className={styles.pageControlSelect}>
      <div className={styles.pageControlSelect__heading} onClick={toggle}>
        Filter
        <img
          src={arrowDown}
          alt="arrow icon"
          className={styles.pageControlSelect__arrow}
          style={{
            transition: 'all 0.3s',
            transform: `${shown ? 'rotate(180deg)' : ''}`,
          }}
        />
      </div>
      {shown && (
        <div className={styles.pageControlSelect__chooseSection}>
          <CheckBox name="draft">Draft</CheckBox>
          <CheckBox name="pending">Pending</CheckBox>
          <CheckBox name="paid">Paid</CheckBox>
        </div>
      )}
    </div>
  );
};
