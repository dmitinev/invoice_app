import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import styles from './InvoiceFormDateField.module.scss';
import IntrinsicElements = React.JSX.IntrinsicElements;

type inputProps = {
  labelText: string;
  name: string;
} & IntrinsicElements['input'];

export const InvoiceFormDateField = ({ labelText, name }: inputProps) => {
  const [field, meta, helpers] = useField<Date>(name);

  const handleChange = (value: Date) => {
    helpers.setValue(value);
  };

  return (
    <label className={styles.invoiceFormDateField} htmlFor={field.name}>
      <span className={styles.invoiceFormDateField__fieldCaption}>
        {labelText}
      </span>
      <DatePicker
        minDate={field.value}
        name={field.name}
        id={field.name}
        wrapperClassName={styles.invoiceFormDateField__inputField}
        dateFormat="YYYY-MM-dd"
        onChange={handleChange}
        selected={meta.value}
      />
    </label>
  );
};
