import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={handleCloseMenu}>
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

        <button
          type="button"
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
          onClick={handleToggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenuWrap} ${isMenuOpen ? styles.mobileMenuWrapOpen : ""}`}>
        <div className={styles.mobileMenu}>
          <a href="#filters" className={styles.mobileLink} onClick={handleCloseMenu}>
            Filters
          </a>
          <a href="#top-rated" className={styles.mobileLink} onClick={handleCloseMenu}>
            Top Rated
          </a>
          <a href="#brands" className={styles.mobileLink} onClick={handleCloseMenu}>
            Brands
          </a>
        </div>
      </div>
    </header>
  );
};