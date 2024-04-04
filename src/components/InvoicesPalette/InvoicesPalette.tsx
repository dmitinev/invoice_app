import { Link } from 'react-router-dom';
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
          <div key={invoice.id} className={styles.invoicesPalette__invoice}>
            <Link to={`${import.meta.env.BASE_URL}${invoice.id}`}>
              <InvoiceCard {...invoice} />
            </Link>
          </div>
        ))}
      </Container>
    </section>
  );
};
