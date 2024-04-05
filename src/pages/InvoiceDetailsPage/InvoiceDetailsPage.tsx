import { useNavigate, useParams } from 'react-router-dom';
import arrowLeftIconUrl from 'src/assets/icon-arrow-left.svg';
import { Container } from 'src/components/Container';
import { DetailsStatusBar } from 'src/components/DetailsStatusBar';
import { Header } from 'src/components/Header';
import { selectInvoiceById } from 'src/store/features/Invoice/invoiceSelectors';
import { useAppSelector } from 'src/store/redux-hooks';
import { Page404 } from '../Page404';
import styles from './InvoiceDetailsPage.module.scss';

export const InvoiceDetailsPage = () => {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
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
      <section className={styles.invoiceDetailsPage__backLinks}>
        <Container>
          <span
            className={styles.invoiceDetailsPage__backLink}
            onClick={() => navigate(-1)}
          >
            <img
              className={styles.invoiceDetailsPage__backLink__image}
              src={arrowLeftIconUrl}
              alt="arrow left"
            />
            Go back
          </span>
        </Container>
      </section>
      <section className={styles.invoiceDetailsPage__headingBar}>
        <Container>
          <DetailsStatusBar status={invoice.status} />
        </Container>
      </section>
      <Container>
        <section className={styles.invoiceDetailsPage__infoBlock}>
          <div className={styles.invoiceDetailsPage__infoBlock__heading}>
            <h2 className={styles.invoiceDetailsPage__infoBlock__heading__id}>
              <span className={styles.hash}>#</span>
              {invoice.id}
            </h2>
            <span
              className={styles.invoiceDetailsPage__infoBlock__heading__desc}
            >
              {invoice.description}
            </span>
          </div>
        </section>
      </Container>
    </section>
  );
};
