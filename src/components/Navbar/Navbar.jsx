import styles from "./Navbar.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`inner-container ${styles.nav__layout}`}>
        <SearchForm />
        <button className={styles.nav__btn}>
          <IoMenu />
        </button>
        <ul className={styles.nav__list}>
          <li>
            <a className={styles.nav__link} href="/categories">
              Categories
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="/website-builders">
              Website Builders
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="/today-deals">
              Today's deals
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
