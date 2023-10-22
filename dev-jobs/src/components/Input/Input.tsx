import styles from "./Input.module.scss";

interface InputProps {
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  iconProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  iconUrl?: string;
  children?: React.ReactNode;
}

function Input({ inputProps, iconProps, iconUrl, children }: InputProps) {
  return (
    <div className={styles.input}>
      {iconUrl && <img {...iconProps} src={iconUrl} />}
      <input type="text" {...inputProps} />
      {children}
    </div>
  );
}

export default Input;
