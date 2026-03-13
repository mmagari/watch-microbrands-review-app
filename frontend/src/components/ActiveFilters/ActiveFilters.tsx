import styles from "./ActiveFilters.module.scss";

type Props = {
  selectedStyle: string | null;
  selectedPriceRange: string | null;
  searchTerm: string;
};

export const ActiveFilters = ({
  selectedStyle,
  selectedPriceRange,
  searchTerm,
}: Props) => {
  if (!selectedStyle && !selectedPriceRange && !searchTerm) {
    return null;
  }

  return (
    <div className={styles.activeFilters}>
      {selectedStyle && (
        <span className={styles.badge}>Style: {selectedStyle}</span>
      )}

      {selectedPriceRange && (
        <span className={styles.badge}>Price: {selectedPriceRange}</span>
      )}

      {searchTerm && <span className={styles.badge}>Search: {searchTerm}</span>}
    </div>
  );
};