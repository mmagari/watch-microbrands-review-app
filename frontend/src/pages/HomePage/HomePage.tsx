import { BrandCard } from "../../components/BrandCard/BrandCard";
import { brands } from "../../data/brands";
import { reviews } from "../../data/reviews";
import { calculateAverageRating } from "../../utils/calculateAverageRating";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const topBrands = [...brands]
    .map((brand) => {
      const brandReviews = reviews.filter((r) => r.brandId === brand.id);
      const rating = calculateAverageRating(brandReviews);

      return {
        ...brand,
        rating,
      };
    })
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        
        {/* LEFT SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <p className={styles.sidebarTitle}>Styles</p>

            <span className={styles.tag}>Diver</span>
            <span className={styles.tag}>Dress</span>
            <span className={styles.tag}>Field</span>
            <span className={styles.tag}>Casual</span>
          </div>

          <div className={styles.sidebarSection}>
            <p className={styles.sidebarTitle}>Price ranges</p>

            <span className={styles.tag}>Under $500</span>
            <span className={styles.tag}>$500 – $1000</span>
            <span className={styles.tag}>$1000 – $2000</span>
          </div>
        </aside>

        {/* MAIN GRID */}
        <section className={styles.grid}>
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <p className={styles.sidebarTitle}>Top rated brands</p>

            {topBrands.map((brand) => (
              <span key={brand.id} className={styles.tag}>
                {brand.name} ({brand.rating})
              </span>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
};