import { InvoiceDeleteBtn } from '../InvoiceDeleteBtn';
import { InvoiceEditBtn } from '../InvoiceEditBtn';
import { InvoiceMakePaidBtn } from '../InvoiceMakePaidBtn';
import styles from './DetailsStatusBar.module.scss';
interface DetailsStatusBarProps {
  status: string;
}

export const DetailsStatusBar = ({ status }: DetailsStatusBarProps) => {
  const getStatusClass = (status: string, mainElementClassName: string) => {
    if (status === 'paid') {
      return styles[`${mainElementClassName}--paid`];
    }
    if (status === 'pending') {
      return styles[`${mainElementClassName}--pending`];
    }
    if (status === 'draft') {
      return styles[`${mainElementClassName}--draft`];
    }
    return '';
  };

  return (
    <div className={styles.detailsStatusBar}>
      <span className={styles.detailsStatusBar__label}>Status</span>
      <p
        className={`${styles.detailsStatusBar__status} ${getStatusClass(status, 'detailsStatusBar__status')}`}
      >
        <span
          className={`${styles.detailsStatusBar__status__indicator} ${getStatusClass(status, 'detailsStatusBar__status__indicator')}`}
        ></span>
        {status}
      </p>
      <div className={styles.detailsStatusBar__buttons}>
        <div className={styles.detailsStatusBar__button}>
          <InvoiceEditBtn text="Edit" />
        </div>
        <div className={styles.detailsStatusBar__button}>
          <InvoiceDeleteBtn text="Delete" />
        </div>
        <div className={styles.detailsStatusBar__button}>
          <InvoiceMakePaidBtn
            text="Mark as Paid"
            disabled={status.toLowerCase() === 'paid'}
          />
        </div>
      </div>
    </div>
  );
};
