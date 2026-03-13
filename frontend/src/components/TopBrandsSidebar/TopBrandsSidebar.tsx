import type { Brand } from "../../types/brand";
import styles from "./TopBrandsSidebar.module.scss";

type TopBrand = Brand & {
  rating: number;
};

type Props = {
  brands: TopBrand[];
};

export const TopBrandsSidebar = ({ brands }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarCard}>
        <div className={styles.sidebarSection}>
          <p className={styles.sidebarTitle}>Top rated brands</p>
          <div className={styles.topBrandList}>
            {brands.map((brand) => (
              <div key={brand.id} className={styles.topBrandItem}>
                <span className={styles.topBrandName}>{brand.name}</span>
                <span className={styles.topBrandRating}>{brand.rating}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};