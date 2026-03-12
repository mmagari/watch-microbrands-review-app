import { useState } from "react";
import { BrandCard } from "../../components/BrandCard/BrandCard";
import { brands } from "../../data/brands";
import { reviews } from "../../data/reviews";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import styles from "./HomePage.module.scss";

const styleOptions = ["Diver", "Dress", "Field", "Casual", "Pilot"];
const priceOptions = ["Under $500", "$500-$1000", "$1000-$2000"];

export const HomePage = () => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

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

  const filteredBrands = brands.filter((brand) => {
    const matchesStyle = selectedStyle
      ? brand.styles.some((style) => style.toLowerCase() === selectedStyle.toLowerCase())
      : true;

    const matchesPriceRange = selectedPriceRange
      ? brand.priceRange === selectedPriceRange
      : true;

    return matchesStyle && matchesPriceRange;
  });

  const handleStyleClick = (style: string) => {
    setSelectedStyle((current) => (current === style ? null : style));
  };

  const handlePriceClick = (priceRange: string) => {
    setSelectedPriceRange((current) => (current === priceRange ? null : priceRange));
  };

  const clearFilters = () => {
    setSelectedStyle(null);
    setSelectedPriceRange(null);
  };

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
                {styleOptions.map((style) => (
                  <button
                    key={style}
                    type="button"
                    className={`${styles.tag} ${
                      selectedStyle === style ? styles.tagActive : ""
                    }`}
                    onClick={() => handleStyleClick(style)}
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
                    onClick={() => handlePriceClick(priceRange)}
                  >
                    {priceRange}
                  </button>
                ))}
              </div>
            </div>

            {(selectedStyle || selectedPriceRange) && (
              <div className={styles.sidebarSection}>
                <button
                  type="button"
                  className={styles.clearButton}
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </aside>

        <section className={styles.mainColumn}>
          <div className={styles.resultsHeader}>
            <p className={styles.resultsText}>
              Showing <strong>{filteredBrands.length}</strong> brand(s)
            </p>
          </div>

          {filteredBrands.length > 0 ? (
            <div className={styles.grid}>
              {filteredBrands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h2 className={styles.emptyStateTitle}>No brands found</h2>
              <p className={styles.emptyStateText}>
                Try changing or clearing your filters to see more results.
              </p>
            </div>
          )}
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