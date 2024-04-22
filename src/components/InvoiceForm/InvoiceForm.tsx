import { InvoiceFormDateField } from 'components/InvoiceFormDateField';
import { InvoiceFormInputField } from 'components/InvoiceFormInputField';
import { InvoiceFormSelectField } from 'components/InvoiceFormSelectField';
import { Form, Formik } from 'formik';
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
  clientStreet: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  invoicePaymentPeriod: number;
}

export const InvoiceForm = ({ invoice }: InvoiceFormProps) => {
  const initialValues: InvoiceFormValues = {
    streetAddress: invoice?.senderAddress.street ?? '',
    city: invoice?.senderAddress.city ?? '',
    postCode: invoice?.senderAddress.postCode ?? '',
    country: invoice?.senderAddress.country ?? '',
    clientName: invoice?.clientName ?? '',
    clientEmail: invoice?.clientEmail ?? '',
    clientStreet: invoice?.clientAddress.street ?? '',
    clientCity: invoice?.clientAddress.city ?? '',
    clientPostCode: invoice?.clientAddress.postCode ?? '',
    clientCountry: invoice?.clientAddress.country ?? '',
    invoiceDate: invoice?.createdAt ?? '',
    invoicePaymentPeriod: invoice?.paymentTerms ?? 0,
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
          <div className={styles.invoiceForm__labelCity}>
            <InvoiceFormInputField
              type="text"
              name="city"
              placeholder=""
              labelText="City"
            />
          </div>
          <div className={styles.invoiceForm__labelpostCode}>
            <InvoiceFormInputField
              type="text"
              name="postCode"
              placeholder=""
              labelText="Post Code"
            />
          </div>
          <div className={styles.invoiceForm__labelCountry}>
            <InvoiceFormInputField
              type="text"
              name="country"
              placeholder=""
              labelText="Country"
            />
          </div>
        </div>
        <div className={styles.invoiceForm__receiverBlock}>
          <h3 className={styles.invoiceForm__sectionHeading}>Bill To</h3>
          <div className={styles.invoiceForm__labelclientName}>
            <InvoiceFormInputField
              type="text"
              name="clientName"
              placeholder=""
              labelText="Client’s Name"
            />
          </div>
          <div className={styles.invoiceForm__labelclientMail}>
            <InvoiceFormInputField
              type="email"
              name="clientEmail"
              placeholder=""
              labelText="Client’s Email"
            />
          </div>
          <div className={styles.invoiceForm__labelclientStreet}>
            <InvoiceFormInputField
              type="text"
              name="clientStreet"
              placeholder=""
              labelText="Street Address"
            />
          </div>
          <div className={styles.invoiceForm__labelclientCity}>
            <InvoiceFormInputField
              type="text"
              name="clientCity"
              placeholder=""
              labelText="City"
            />
          </div>
          <div className={styles.invoiceForm__labelClientPostCode}>
            <InvoiceFormInputField
              type="text"
              name="clientPostCode"
              placeholder=""
              labelText="Post Code"
            />
          </div>
          <div className={styles.invoiceForm__labelClientCountry}>
            <InvoiceFormInputField
              type="text"
              name="clientCountry"
              placeholder=""
              labelText="Country"
            />
          </div>
        </div>
        <div className={styles.invoiceForm__invoiceDateBlock}>
          <InvoiceFormDateField labelText="Invoice Date" name="invoiceDate" />
        </div>
        <div className={styles.invoiceForm__invoiceSelectDateBlock}>
          <InvoiceFormSelectField
            labelText="Payment Terms"
            name="invoicePaymentPeriod"
          />
        </div>
      </Form>
    </Formik>
  );
};
