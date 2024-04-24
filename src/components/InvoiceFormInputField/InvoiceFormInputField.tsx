import { useField } from 'formik';
import styles from './InvoiceFormInputField.module.scss';
import IntrinsicElements = React.JSX.IntrinsicElements;

type inputProps = {
  placeholder: string;
  labelText: string;
  type: string;
  name: string;
} & IntrinsicElements['input'];

export const InvoiceFormInputField = ({
  placeholder,
  labelText,
  name,
  type,
  ...props
}: inputProps) => {
  const [field] = useField<string | number>(name);

  return (
    <label className={styles.invoiceFormInputField} htmlFor={field.name}>
      <span className={styles.invoiceFormInputField__fieldCaption}>
        {labelText}
      </span>
      <input
        autoComplete="off"
        id={name}
        type={type}
        className={styles.invoiceFormInputField__inputField}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </label>
  );
};
