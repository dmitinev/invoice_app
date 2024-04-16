import { InvoiceFormInputField } from 'components/InvoiceFormInputField';
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
  clientName: string;
  clientEmail: string;
  clientCity: string;
  clientPostCode: string;
}

export const InvoiceForm = ({ invoice }: InvoiceFormProps) => {
  const initialValues: InvoiceFormValues = {
    streetAddress: invoice?.senderAddress.street ?? '',
    city: invoice?.senderAddress.city ?? '',
    postCode: invoice?.senderAddress.postCode ?? '',
    country: invoice?.senderAddress.country ?? '',
    clientName: invoice?.clientName ?? '',
    clientEmail: invoice?.clientEmail ?? '',
    clientCity: invoice?.clientAddress.city ?? '',
    clientPostCode: invoice?.clientAddress.postCode ?? '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form className={styles.invoiceForm}>
        <div className={styles.invoiceForm__senderBlock}>
          <h3 className={styles.invoiceForm__sectionHeading}>Bill From</h3>
          <div className={styles.invoiceForm__labelStrretAdr}>
            <InvoiceFormInputField
              type="text"
              name="streetAddress"
              placeholder=""
              labelText="Street Address"
            />
          </div>
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
        </div>
        <div className={styles.invoiceForm__receiverBlock}>
          <h3 className={styles.invoiceForm__sectionHeading}>Bill To</h3>
          <label
            className={`${styles.invoiceForm__label} ${styles.invoiceForm__labelclientName}`}
            htmlFor="clientName"
          >
            <span className={styles.invoiceForm__fieldCaption}>
              Client’s Name
            </span>
            <Field
              className={styles.invoiceForm__inputField}
              type="text"
              name="clientName"
              placeholder=""
            />
          </label>
          <label
            className={`${styles.invoiceForm__label} ${styles.invoiceForm__labelclientMail}`}
            htmlFor="clientEmail"
          >
            <span className={styles.invoiceForm__fieldCaption}>
              Client’s Email
            </span>
            <Field
              className={styles.invoiceForm__inputField}
              type="email"
              name="clientEmail"
              placeholder=""
            />
          </label>
        </div>
      </Form>
    </Formik>
  );
};
