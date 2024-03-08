import { IoCheckmark, IoChevronDown, IoInformation } from "react-icons/io5";
import styles from "./HeaderDateRow.module.scss";

function HeaderDateRow() {
  return (
    <div className={styles.dateRow}>
      <p className={styles.dateRow__lastUpdate}>
        <span className={styles.dateRow__icon}>
          <IoCheckmark />
        </span>
        Last Updated &nbsp;-
        <span className={styles.dateRow__date}>February 22, 2020</span>
      </p>
      <p className={styles.dateRow__advertise}>
        <span className={styles.dateRow__icon}>
          <IoInformation />
        </span>
        Advertising Disclosure
      </p>
      <p className={styles.dateRow__relevant}>
        Top Relevant{" "}
        <span>
          <IoChevronDown className={styles["dateRow__relevant--icon"]} />
        </span>
      </p>
    </div>
  );
}

export default HeaderDateRow;
