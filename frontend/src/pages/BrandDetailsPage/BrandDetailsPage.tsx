import { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReviewCard } from "../../components/ReviewCard/ReviewCard";
import { ReviewForm } from "../../components/ReviewForm/ReviewForm";
import { RatingStars } from "../../components/RatingStars/RatingStars";
import { brands } from "../../data/brands";
import { reviews as initialReviews } from "../../data/reviews";
import { getAllReviews, addReviewToStorage } from "../../services/reviewsService";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { getPriceBucket } from "../../utils/getPriceBucket";
import styles from "./BrandDetailsPage.module.scss";

export const BrandDetailsPage = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(() => getAllReviews(initialReviews));
  const brand = brands.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brandReviews = useMemo(() => {
    if (!brand) {
      return [];
    }

    return reviews.filter((review) => review.brandId === brand.id);
  }, [reviews, brand]);

  const averageRating = calculateAverageRating(brandReviews);

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

    const handleAddReview = ({
    author,
    rating,
    comment,
  }: {
    author: string;
    rating: number;
    comment: string;
  }) => {
    const newReview = {
      id: `review-${Date.now()}`,
      brandId: brand.id,
      author,
      rating,
      comment,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setReviews((currentReviews) =>
      addReviewToStorage(newReview, currentReviews, initialReviews)
    );
  };

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.backLink}>
        ← Back to brands
      </Link>

      <article>
        <img className={styles.image} src={brand.image} alt={brand.name} />

        <h1>{brand.name}</h1>

        <div className={styles.factsGrid}>
          <div className={styles.factCard}>
            <span className={styles.factLabel}>Country</span>
            <span className={styles.factValue}>{brand.country}</span>
          </div>

          <div className={styles.factCard}>
            <span className={styles.factLabel}>Featured model</span>
            <span className={styles.factValue}>{brand.featuredModel}</span>
          </div>

          <div className={styles.factCard}>
            <span className={styles.factLabel}>Price bracket</span>
            <span className={styles.factValue}>
              {getPriceBucket(brand.startingPriceUsd)}
            </span>
          </div>
        </div>

        <section className={styles.section}>
          <h2>About the brand</h2>
          <p>{brand.description}</p>
        </section>

        <section className={styles.reviewsSection}>
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
            <div className={styles.emptyReviews}>
              <h3 className={styles.emptyReviewsTitle}>No reviews yet</h3>
              <p className={styles.emptyReviewsText}>
                Be the first person to share an opinion about this brand.
              </p>
            </div>
          )}
        </section>

        <ReviewForm onSubmit={handleAddReview} />
      </article>
    </main>
  );
};