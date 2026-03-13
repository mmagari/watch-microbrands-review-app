import { useMemo, useState } from "react";
import { BrandCard } from "../../components/BrandCard/BrandCard";
import { brands } from "../../data/brands";
import { reviews } from "../../data/reviews";
import { getPriceBucket } from "../../utils/getPriceBucket";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import styles from "./HomePage.module.scss";

const styleOptions = [
  "Diver",
  "Dress",
  "Field",
  "Casual",
  "Pilot",
  "GMT",
  "Sport",
  "Chronograph",
];

const priceOptions = [
  "Under $500",
  "$500-$1000",
  "$1000-$1500",
  "$1500-$2000",
];

type SortOption =
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc"
  | "rating-desc";

export const HomePage = () => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("rating-desc");

  const brandsWithRating = useMemo(() => {
    return brands.map((brand) => {
      const brandReviews = reviews.filter((review) => review.brandId === brand.id);
      const rating = calculateAverageRating(brandReviews);

      return {
        ...brand,
        rating,
      };
    });
  }, []);

  const topBrands = [...brandsWithRating]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const filteredBrands = useMemo(() => {
    const filtered = brandsWithRating.filter((brand) => {
      const matchesStyle = selectedStyle
        ? brand.styles.some((style) => style.toLowerCase() === selectedStyle.toLowerCase())
        : true;

      const matchesPriceRange = selectedPriceRange
        ? getPriceBucket(brand.startingPriceUsd) === selectedPriceRange
        : true;

      const matchesSearch = brand.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());

      return matchesStyle && matchesPriceRange && matchesSearch;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.startingPriceUsd - b.startingPriceUsd;
        case "price-desc":
          return b.startingPriceUsd - a.startingPriceUsd;
        case "rating-desc":
        default:
          return b.rating - a.rating;
      }
    });

    return sorted;
  }, [brandsWithRating, selectedStyle, selectedPriceRange, searchTerm, sortOption]);

  const handleStyleClick = (style: string) => {
    setSelectedStyle((current) => (current === style ? null : style));
  };

  const handlePriceClick = (priceRange: string) => {
    setSelectedPriceRange((current) => (current === priceRange ? null : priceRange));
  };

  const clearFilters = () => {
    setSelectedStyle(null);
    setSelectedPriceRange(null);
    setSearchTerm("");
    setSortOption("rating-desc");
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
          </div>
        </aside>

        <section className={styles.mainColumn}>
          <div className={styles.toolbar}>
            <div className={styles.searchBox}>
              <label htmlFor="brand-search" className={styles.searchLabel}>
                Search
              </label>
              <input
                id="brand-search"
                type="text"
                className={styles.searchInput}
                placeholder="Search brands..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>

            <div className={styles.sortBox}>
              <label htmlFor="brand-sort" className={styles.searchLabel}>
                Sort by
              </label>
              <select
                id="brand-sort"
                className={styles.sortSelect}
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value as SortOption)}
              >
                <option value="rating-desc">Rating: high to low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </div>
          </div>

          <div className={styles.resultsHeader}>
            <p className={styles.resultsText}>
              Showing <strong>{filteredBrands.length}</strong> brand(s)
            </p>

            {(selectedStyle || selectedPriceRange || searchTerm) && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={clearFilters}
              >
                Reset all
              </button>
            )}
          </div>

          {(selectedStyle || selectedPriceRange || searchTerm) && (
            <div className={styles.activeFilters}>
              {selectedStyle && (
                <span className={styles.activeFilterBadge}>
                  Style: {selectedStyle}
                </span>
              )}

              {selectedPriceRange && (
                <span className={styles.activeFilterBadge}>
                  Price: {selectedPriceRange}
                </span>
              )}

              {searchTerm && (
                <span className={styles.activeFilterBadge}>
                  Search: {searchTerm}
                </span>
              )}
            </div>
          )}

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