import styles from "./form-styles.module.css";
const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className={styles["form-field"]}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ? (
        <p data-testid="error-message">{errorMessage}</p>
      ) : null}
    </div>
  );
};
export default FormField;
