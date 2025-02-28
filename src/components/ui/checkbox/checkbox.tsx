import styles from "./checkbox.module.css";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <input
        id={`${label.toLowerCase()}-checkbox`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`${label.toLowerCase()}-checkbox`}>{label}</label>
    </div>
  );
}
