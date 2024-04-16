import { Field, Form, Formik } from 'formik';
import { Invoice } from 'src/types';
import styles from './InvoiceForm.module.scss';

interface InvoiceFormProps {
  invoice?: Invoice;
}

interface InvoiceFormValues {
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
}

export const InvoiceForm = ({ invoice }: InvoiceFormProps) => {
  const initialValues: InvoiceFormValues = {
    streetAddress: invoice?.senderAddress.street ?? '',
    city: invoice?.senderAddress.city ?? '',
    postCode: invoice?.senderAddress.postCode ?? '',
    country: invoice?.senderAddress.country ?? '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form className={styles.invoiceForm}>
        <h3 className={styles.invoiceForm__sectionHeading}>Bill From</h3>
        <label
          className={`${styles.invoiceForm__label} ${styles.invoiceForm__labelStrretAdr}`}
          htmlFor="streetAddress"
        >
          <span className={styles.invoiceForm__fieldCaption}>
            Street Address
          </span>
          <Field
            className={styles.invoiceForm__inputField}
            type="text"
            name="streetAddress"
            placeholder=""
          />
        </label>
        <label
          className={`${styles.invoiceForm__label} ${styles.invoiceForm__labelCity}`}
          htmlFor="city"
        >
          <span className={styles.invoiceForm__fieldCaption}>City</span>
          <Field
            className={styles.invoiceForm__inputField}
            type="text"
            name="city"
            placeholder=""
          />
        </label>
        <label
          className={`${styles.invoiceForm__label} ${styles.invoiceForm__labelpostCode}`}
          htmlFor="postCode"
        >
          <span className={styles.invoiceForm__fieldCaption}>Post Code</span>
          <Field
            className={styles.invoiceForm__inputField}
            type="text"
            name="postCode"
            placeholder=""
          />
        </label>
        <label
          className={`${styles.invoiceForm__label} ${styles.invoiceForm__labelCountry}`}
          htmlFor="country"
        >
          <span className={styles.invoiceForm__fieldCaption}>Country</span>
          <Field
            className={styles.invoiceForm__inputField}
            type="text"
            name="country"
            placeholder=""
          />
        </label>
      </Form>
    </Formik>
  );
};
