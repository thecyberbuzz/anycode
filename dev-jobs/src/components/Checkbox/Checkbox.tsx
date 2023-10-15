import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  id: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
  labelText?: string;
}
function Checkbox({ id, isChecked, onChange, children, labelText }: CheckboxProps) {
  return (
    <div className={styles.container}>
      <input
        onChange={onChange}
        checked={isChecked}
        id={id}
        className={styles.container__check}
        type="checkbox"
        aria-label={labelText}
      />
      <label htmlFor={id} className={styles.container__label}></label>
      {labelText && <p className={styles.container__text}>{labelText}</p>}
      {children}
    </div>
  );
}

export default Checkbox;
