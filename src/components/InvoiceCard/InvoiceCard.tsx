import { Invoice } from 'src/types';
import styles from './InvoiceCard.module.scss';

interface InvoiceCardProps
  extends Pick<
    Invoice,
    'id' | 'createdAt' | 'clientName' | 'total' | 'status'
  > {}

export const InvoiceCard = ({
  id,
  createdAt,
  clientName,
  total,
  status,
}: InvoiceCardProps) => {
  return (
    <div className={styles.invoiceCard}>
      <h2>
        <span className={styles.invoiceCard__hash}>#</span>
        {id}
      </h2>
      <p className={styles.invoiceCard__date}>{createdAt}</p>
      <p className={styles.invoiceCard__client}>{clientName}</p>
      <p className={styles.invoiceCard__total}>
        <span className={styles.invoiceCard__currency}>£ </span>
        {total}
      </p>

      <p
        className={`${styles.invoiceCard__status} ${
          status === 'paid' ? styles['invoiceCard__status--paid'] : ''
        }`}
      >
        {status}
      </p>
    </div>
  );
};
