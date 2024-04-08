import styles from './InvoiceMakePaidBtn.module.scss';

interface InvoiceMakePaidBtnProps {
  text: string;
  clickHandler?: () => void;
  disabled: boolean;
}

export const InvoiceMakePaidBtn = ({
  text,
  clickHandler,
  disabled,
}: InvoiceMakePaidBtnProps) => {
  return (
    <button
      className={styles.invoiceMakePaidBtn}
      onClick={clickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
