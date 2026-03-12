import { Link, useParams } from "react-router-dom";
import { brands } from "../../data/brands";
import { reviews } from "../../data/reviews";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { ReviewCard } from "../../components/ReviewCard/ReviewCard";
import { RatingStars } from "../../components/RatingStars/RatingStars";
import { getPriceBucket } from "../../utils/getPriceBucket";
import styles from "./BrandDetailsPage.module.scss";

export const BrandDetailsPage = () => {
  const { id } = useParams();

  const brand = brands.find((item) => item.id === id);

  if (!brand) {
    return (
      <main className={styles.page}>
        <h1>Brand not found</h1>
        <p className={styles.notFoundText}>We couldn’t find the brand you’re looking for.</p>
        <Link to="/" className={styles.backLink}>
          Go back to homepage
        </Link>
      </main>
    );
  }

  const brandReviews = reviews.filter((review) => review.brandId === brand.id);
  const averageRating = calculateAverageRating(brandReviews);

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.backLink}>
        ← Back to brands
      </Link>

      <article>
        <img className={styles.image} src={brand.image} alt={brand.name} />

        <h1>{brand.name}</h1>

        <p className={styles.meta}>
          <strong>Country:</strong> {brand.country}
        </p>
        <p className={styles.meta}>
          <strong>Starting price:</strong> ${brand.startingPriceUsd}
            </p>
            <p className={styles.meta}>
              <strong>Featured model:</strong> {brand.featuredModel}
            </p>
            <p className={styles.meta}>
              <strong>Price bracket:</strong> {getPriceBucket(brand.startingPriceUsd)}
            </p>
        <p className={styles.meta}>
          <strong>Styles:</strong> {brand.styles.join(", ")}
        </p>

        <section className={styles.section}>
          <h2>About the brand</h2>
          <p>{brand.description}</p>
        </section>

        <section className={styles.reviewSection}>
          <h2>Rating & Reviews</h2>

          {brandReviews.length > 0 ? (
            <>
              <p>
                <strong>Average rating:</strong> {averageRating} / 5
              </p>
              <RatingStars rating={averageRating} />
              <p>
                <strong>{brandReviews.length}</strong> review(s)
              </p>

              <div className={styles.reviewList}>
                {brandReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </>
          ) : (
            <p>No reviews yet for this brand.</p>
          )}
        </section>
      </article>
    </main>
  );
};