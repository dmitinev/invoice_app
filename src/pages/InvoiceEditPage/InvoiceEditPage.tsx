import { AnimatePresence, motion } from 'framer-motion';
import { Invoice } from 'src/types';
import styles from './InvoiceEditPage.module.scss';

interface InvoiceEditPageProps {
  invoice: Invoice;
  isShown: boolean;
  closeHandler: () => void;
}

export const InvoiceEditPage = ({ invoice, isShown }: InvoiceEditPageProps) => {
  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          className={styles.invoiceEditPage}
          initial={{ left: '-100%' }}
          animate={{ left: '0' }}
          exit={{ left: '-100%' }}
          transition={{ duration: 0.4 }}
        >
          <h1 className={styles.invoiceEditPage__heading}>
            Edit #{invoice.id}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
