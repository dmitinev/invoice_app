import { InvoiceFormDateField } from 'components/InvoiceFormDateField';
import { InvoiceFormInputField } from 'components/InvoiceFormInputField';
import { InvoiceFormSelectField } from 'components/InvoiceFormSelectField';
import { InvoiceFormTotalField } from 'components/InvoiceFormTotalField';
import { FieldArray, Form, Formik } from 'formik';
import { Invoice, Item } from 'src/types';
import styles from './InvoiceForm.module.scss';

interface InvoiceFormProps {
  invoice?: Invoice;
}

export interface InvoiceFormValues {
  senderStreetAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreet: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  invoicePaymentPeriod: number;
  projectDescription: string;
  invoiceItems: Item[];
}

export const InvoiceForm = ({ invoice }: InvoiceFormProps) => {
  const initialValues: InvoiceFormValues = {
    senderStreetAddress: invoice?.senderAddress.street ?? '',
    senderCity: invoice?.senderAddress.city ?? '',
    senderPostCode: invoice?.senderAddress.postCode ?? '',
    senderCountry: invoice?.senderAddress.country ?? '',
    clientName: invoice?.clientName ?? '',
    clientEmail: invoice?.clientEmail ?? '',
    clientStreet: invoice?.clientAddress.street ?? '',
    clientCity: invoice?.clientAddress.city ?? '',
    clientPostCode: invoice?.clientAddress.postCode ?? '',
    clientCountry: invoice?.clientAddress.country ?? '',
    invoiceDate: invoice?.createdAt ?? '',
    invoicePaymentPeriod: invoice?.paymentTerms ?? 0,
    projectDescription: invoice?.description ?? '',
    invoiceItems: invoice?.items ?? [
      { quantity: 0, name: '', price: 0, total: 0 },
    ],
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {(values) => (
        <Form className={styles.invoiceForm}>
          <div className={styles.invoiceForm__senderBlock}>
            <h3 className={styles.invoiceForm__sectionHeading}>Bill From</h3>
            <div className={styles.invoiceForm__labelStrretAdr}>
              <InvoiceFormInputField
                type="text"
                name="senderStreetAddress"
                placeholder=""
                labelText="Street Address"
              />
            </div>
            <div className={styles.invoiceForm__labelCity}>
              <InvoiceFormInputField
                type="text"
                name="senderCity"
                placeholder=""
                labelText="City"
              />
            </div>
            <div className={styles.invoiceForm__labelpostCode}>
              <InvoiceFormInputField
                type="text"
                name="senderPostCode"
                placeholder=""
                labelText="Post Code"
              />
            </div>
            <div className={styles.invoiceForm__labelCountry}>
              <InvoiceFormInputField
                type="text"
                name="senderCountry"
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
            <div className={styles.invoiceForm__invoiceDateAndTermsBlock}>
              <div className={styles.invoiceForm__invoiceDateBlock}>
                <InvoiceFormDateField
                  labelText="Invoice Date"
                  name="invoiceDate"
                />
              </div>
              <div className={styles.invoiceForm__invoiceSelectDateBlock}>
                <InvoiceFormSelectField
                  labelText="Payment Terms"
                  name="invoicePaymentPeriod"
                />
              </div>
            </div>
            <div className={styles.invoiceForm__labelProjectDescription}>
              <InvoiceFormInputField
                type="text"
                name="projectDescription"
                placeholder=""
                labelText="Project Description"
              />
            </div>
          </div>
          <div className={styles.invoiceForm__itemsBlock}>
            <h2 className={styles.invoiceForm__itemsBlockHeading}>Item List</h2>
            <div className={styles.invoiceForm__itemsBlockItems}>
              <FieldArray
                name="invoiceItems"
                render={(_) => {
                  return values.initialValues.invoiceItems.map((_, index) => {
                    return (
                      <div
                        className={styles.invoiceForm__itemsBlockItemsFields}
                        key={index}
                      >
                        <div
                          className={styles.invoiceForm__itemsBlockItemsName}
                        >
                          <InvoiceFormInputField
                            name={`invoiceItems[${index}].name`}
                            labelText="Item Name"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div className={styles.invoiceForm__itemsBlockItemsQTY}>
                          <InvoiceFormInputField
                            name={`invoiceItems[${index}].quantity`}
                            labelText="Qty"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div
                          className={styles.invoiceForm__itemsBlockItemsPrice}
                        >
                          <InvoiceFormInputField
                            name={`invoiceItems[${index}].price`}
                            labelText="Price"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div
                          className={styles.invoiceForm__itemsBlockItemsTotal}
                        >
                          <InvoiceFormTotalField
                            name={`invoiceItems[${index}].total`}
                            labelText="Total"
                            type="text"
                            placeholder=""
                            index={index}
                          />
                        </div>
                      </div>
                    );
                  });
                }}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
