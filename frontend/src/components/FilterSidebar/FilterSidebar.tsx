import styles from "./FilterSidebar.module.scss";

type Props = {
  styleOptions: string[];
  priceOptions: string[];
  selectedStyle: string | null;
  selectedPriceRange: string | null;
  onStyleClick: (style: string) => void;
  onPriceClick: (price: string) => void;
  onClearFilters: () => void;
  showClearButton: boolean;
};

export const FilterSidebar = ({
  styleOptions,
  priceOptions,
  selectedStyle,
  selectedPriceRange,
  onStyleClick,
  onPriceClick,
  onClearFilters,
  showClearButton,
}: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarCard}>
        <div className={styles.sidebarSection}>
          <p className={styles.sidebarTitle}>Styles</p>
          <div className={styles.tagList}>
            {styleOptions.map((style) => (
              <button
                key={style}
                type="button"
                className={`${styles.tag} ${
                  selectedStyle === style ? styles.tagActive : ""
                }`}
                onClick={() => onStyleClick(style)}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <p className={styles.sidebarTitle}>Price ranges</p>
          <div className={styles.tagList}>
            {priceOptions.map((priceRange) => (
              <button
                key={priceRange}
                type="button"
                className={`${styles.tag} ${
                  selectedPriceRange === priceRange ? styles.tagActive : ""
                }`}
                onClick={() => onPriceClick(priceRange)}
              >
                {priceRange}
              </button>
            ))}
          </div>
        </div>

        {showClearButton && (
          <div className={styles.sidebarSection}>
            <button
              type="button"
              className={styles.clearButton}
              onClick={onClearFilters}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};