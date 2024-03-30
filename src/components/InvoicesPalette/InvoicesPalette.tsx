import { useInvoices } from 'src/store/features/Invoice/useInvoices';
import { Container } from '../Container';
import { InvoiceCard } from '../InvoiceCard';
import styles from './InvoicesPalette.module.scss';

export const InvoicesPalette = () => {
  const invoices = useInvoices();
  return (
    <section className={styles.invoicesPalette}>
      <Container>
        {invoices.map((invoice) => (
          <div className={styles.invoicesPalette__invoice}>
            <InvoiceCard key={invoice.id} {...invoice} />
          </div>
        ))}
      </Container>
    </section>
  );
};