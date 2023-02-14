import { DocumentEditIcon } from "@/assets/svg";
import styles from "./edit-button.module.css";

export const EditButton = ({ handleClick }: { handleClick: () => void }) => (
  <div className={styles.tooltip}>
    <button onClick={handleClick}>
      <DocumentEditIcon scale={0.8} />
    </button>
    <span className={`${styles.tooltiptext} text-sm`}>Doc Sign</span>
  </div>
);
