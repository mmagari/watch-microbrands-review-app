import { useMemo, useState } from "react";
import { ActiveFilters } from "../../components/ActiveFilters/ActiveFilters";
import { BrandCard } from "../../components/BrandCard/BrandCard";
import { BrandsToolbar } from "../../components/BrandsToolbar/BrandsToolbar";
import { FilterSidebar } from "../../components/FilterSidebar/FilterSidebar";
import { TopBrandsSidebar } from "../../components/TopBrandsSidebar/TopBrandsSidebar";
import { brands } from "../../data/brands";
import { reviews as initialReviews } from "../../data/reviews";
import { getAllReviews } from "../../services/reviewsService";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { getPriceBucket } from "../../utils/getPriceBucket";
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
  const allReviews = useMemo(() => getAllReviews(initialReviews), []);
  
  const brandsWithRating = useMemo(() => {
    return brands.map((brand) => {
      const brandReviews = allReviews.filter((review) => review.brandId === brand.id);
      const rating = calculateAverageRating(brandReviews);

      return {
        ...brand,
        rating,
        reviewCount: brandReviews.length,
      };
    });
  }, [allReviews]);

  const topBrands = useMemo(() => {
    return [...brandsWithRating].sort((a, b) => b.rating - a.rating).slice(0, 5);
  }, [brandsWithRating]);

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
        <FilterSidebar
          styleOptions={styleOptions}
          priceOptions={priceOptions}
          selectedStyle={selectedStyle}
          selectedPriceRange={selectedPriceRange}
          onStyleClick={handleStyleClick}
          onPriceClick={handlePriceClick}
          onClearFilters={clearFilters}
          showClearButton={Boolean(selectedStyle || selectedPriceRange || searchTerm)}
        />

        <section className={styles.mainColumn}>
          <BrandsToolbar
            searchTerm={searchTerm}
            sortOption={sortOption}
            onSearchChange={setSearchTerm}
            onSortChange={setSortOption}
          />

          <div className={styles.resultsHeader}>
            <p className={styles.resultsText}>
              Showing <strong>{filteredBrands.length}</strong> of{" "}
              <strong>{brands.length}</strong> brands
            </p>

            {(selectedStyle || selectedPriceRange || searchTerm) && (
              <span className={styles.filterIndicator}>
                filters active
              </span>
            )}

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

          <ActiveFilters
            selectedStyle={selectedStyle}
            selectedPriceRange={selectedPriceRange}
            searchTerm={searchTerm}
          />

          {filteredBrands.length > 0 ? (
            <div className={styles.grid}>
              {filteredBrands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h2 className={styles.emptyStateTitle}>No matching brands found</h2>
              <p className={styles.emptyStateText}>
                We couldn’t find any brands matching your current filters or search term.
              </p>

              <button
                type="button"
                className={styles.emptyStateButton}
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        <TopBrandsSidebar brands={topBrands} />
      </div>
    </main>
  );
};