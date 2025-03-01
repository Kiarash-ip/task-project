import styles from "./radio.module.css";

interface RadioProps {
  value: string;
  name: string;
  label: string;
  checked: boolean;
  onChange(value: string): void;
}

export default function Radio({
  value,
  name,
  label,
  checked,
  onChange,
}: RadioProps) {
  return (
    <div className={styles.radioContainer}>
      <input
        id={value}
        type="radio"
        value={value}
        name={name}
        className={styles.radioInput}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={value} className={styles.radioLabel}>
        {label}
      </label>
    </div>
  );
}
