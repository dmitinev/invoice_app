import styles from './InvoiceItemLine.module.scss';

interface InvoiceItemLineProps {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export const InvoiceItemLine = ({
  name,
  quantity,
  price,
  total,
}: InvoiceItemLineProps) => {
  return (
    <div className={styles.invoiceItemLine}>
      <div className={styles.invoiceItemLine__item}>
        <h3 className={styles.invoiceItemLine__item__name}>{name}</h3>
        <div className={styles.invoiceItemLine__item__params}>
          <span className={styles.invoiceItemLine__item__qty}>{quantity}</span>
          <span className={styles.invoiceItemLine__item__mark}> x </span>
          <span className={styles.invoiceItemLine__item__price}>
            £ {price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className={styles.invoiceItemLine__total}>£ {total.toFixed(2)}</div>
    </div>
  );
};
