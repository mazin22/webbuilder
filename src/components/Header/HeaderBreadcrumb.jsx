import { IoChevronForwardSharp } from "react-icons/io5";
import styles from "./HeaderBreadcrumb.module.scss";

const breadcrumbList = [
  {
    id: 1,
    name: "Hosting for all",
  },
  {
    id: 2,
    name: "Hosting",
  },
  {
    id: 3,
    name: "Hosting6",
  },
  {
    id: 4,
    name: "Hosting5",
  },
];

function HeaderBreadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <p className={styles.breadcrumb__title}>Home</p>
      <ul className={styles.breadcrumb__list}>
        {breadcrumbList.map((el) => (
          <li key={el.id} className={styles.breadcrumb__item}>
            <span className={styles.breadcrumb__icon}>
              <IoChevronForwardSharp />
            </span>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderBreadcrumb;
