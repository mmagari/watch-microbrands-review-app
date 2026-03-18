import type { SortOption } from "../../types/sortOption";
import styles from "./BrandsToolbar.module.scss";

type Props = {
  searchTerm: string;
  sortOption: SortOption;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
};

export const BrandsToolbar = ({
  searchTerm,
  sortOption,
  onSearchChange,
  onSortChange,
}: Props) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.searchBox}>
        <label htmlFor="brand-search" className={styles.label}>
          Search
        </label>
        <input
          id="brand-search"
          type="text"
          className={styles.input}
          placeholder="Search brands..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          autoFocus
        />
      </div>

      <div className={styles.sortBox}>
        <label htmlFor="brand-sort" className={styles.label}>
          Sort by
        </label>
        <select
          id="brand-sort"
          className={styles.select}
          value={sortOption}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
        >
          <option value="rating-desc">Rating: high to low</option>
          <option value="popularity-desc">Popularity</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>
    </div>
  );
};