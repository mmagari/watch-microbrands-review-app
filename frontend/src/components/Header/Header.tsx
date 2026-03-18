import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Microbrand Watch Directory
        </Link>

        <nav className={styles.nav}>
          <a href="#filters" className={styles.navLink}>
            Filters
          </a>
          <a href="#top-rated" className={styles.navLink}>
            Top Rated
          </a>
          <a href="#brands" className={styles.navLink}>
            Brands
          </a>
        </nav>

        <a href="#brands" className={styles.cta}>
          Browse Brands
        </a>
      </div>
    </header>
  );
};