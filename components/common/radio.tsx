import { LabelProps } from "@/types";
import styles from "../../styles/radio.module.css";

export const RadioInput = ({ inputName, labelName }: LabelProps) => {
  return (
    <label className={`${styles["form-control"]}`}>
      <input type="radio" name={inputName} />
      <span>{labelName}</span>
    </label>
  );
};
