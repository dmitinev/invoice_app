import { useParams } from 'react-router-dom';
import { Header } from 'src/components/Header';
import { selectInvoiceById } from 'src/store/features/Invoice/invoiceSelectors';
import { useAppSelector } from 'src/store/redux-hooks';
import { Page404 } from '../Page404';
import styles from './InvoiceDetailsPage.module.scss';

export const InvoiceDetailsPage = () => {
  const { invoiceId } = useParams();

  const invoice = useAppSelector((state) =>
    selectInvoiceById(state, invoiceId as string),
  );

  if (!invoice) {
    return <Page404 />;
  }

  return (
    <section className={styles.invoiceDetailsPage}>
      <div className={styles.header}>
        <Header />
      </div>
    </section>
  );
};
