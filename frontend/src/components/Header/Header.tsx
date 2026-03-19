import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    handleCloseMenu();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={handleCloseMenu}>
          Microbrand Watch Directory
        </Link>

        <nav className={styles.nav}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollToSection("filters")}
          >
            Filters
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollToSection("top-rated")}
          >
            Top Rated
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollToSection("brands")}
          >
            Brands
          </button>
        </nav>

        <button
          type="button"
          className={styles.cta}
          onClick={() => scrollToSection("brands")}
        >
          Browse Brands
        </button>

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
          <button
            type="button"
            className={styles.mobileLink}
            onClick={() => scrollToSection("filters")}
          >
            Filters
          </button>
          <button
            type="button"
            className={styles.mobileLink}
            onClick={() => scrollToSection("top-rated")}
          >
            Top Rated
          </button>
          <button
            type="button"
            className={styles.mobileLink}
            onClick={() => scrollToSection("brands")}
          >
            Brands
          </button>
        </div>
      </div>
    </header>
  );
};