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
      <section className={styles.intro}>
        <h1 className={styles.title}>Discover Watch Microbrands</h1>
        <p className={styles.subtitle}>
          Explore independent watch brands, browse styles and price ranges, and
          read community reviews in one clean directory.
        </p>
      </section>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarSection}>
              <p className={styles.sidebarTitle}>Styles</p>
              <div className={styles.tagList}>
                <span className={styles.tag}>Diver</span>
                <span className={styles.tag}>Dress</span>
                <span className={styles.tag}>Field</span>
                <span className={styles.tag}>Casual</span>
                <span className={styles.tag}>Pilot</span>
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <p className={styles.sidebarTitle}>Price ranges</p>
              <div className={styles.tagList}>
                <span className={styles.tag}>Under $500</span>
                <span className={styles.tag}>$500 – $1000</span>
                <span className={styles.tag}>$1000 – $2000</span>
              </div>
            </div>
          </div>
        </aside>

        <section className={styles.mainColumn}>
          <div className={styles.grid}>
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </section>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarSection}>
              <p className={styles.sidebarTitle}>Top rated brands</p>
              <div className={styles.topBrandList}>
                {topBrands.map((brand) => (
                  <div key={brand.id} className={styles.topBrandItem}>
                    <span className={styles.topBrandName}>{brand.name}</span>
                    <span className={styles.topBrandRating}>{brand.rating}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};