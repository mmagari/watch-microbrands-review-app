import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Microbrand Watch Directory
        </Link>
      </div>
    </header>
  );
};