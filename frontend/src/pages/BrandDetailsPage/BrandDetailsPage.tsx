import { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReviewCard } from "../../components/ReviewCard/ReviewCard";
import { ReviewForm } from "../../components/ReviewForm/ReviewForm";
import { RatingStars } from "../../components/RatingStars/RatingStars";
import { brands } from "../../data/brands";
import { reviews as initialReviews } from "../../data/reviews";
import { getAllReviews, addReview } from "../../services/reviewsService";
import type { Review } from "../../types/review";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { getPriceBucket } from "../../utils/getPriceBucket";
import styles from "./BrandDetailsPage.module.scss";

export const BrandDetailsPage = () => {
  const { id } = useParams();
  const brand = brands.find((item) => item.id === id);

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [reviewsError, setReviewsError] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoadingReviews(true);
        setReviewsError("");

        const allReviews = await getAllReviews(initialReviews);
        setReviews(allReviews);
      } catch (error) {
        console.error(error);
        setReviewsError("Failed to load reviews.");
      } finally {
        setLoadingReviews(false);
      }
    };

    loadReviews();
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
        <p className={styles.notFoundText}>
          We couldn’t find the brand you’re looking for.
        </p>
        <Link to="/" className={styles.backLink}>
          Go back to homepage
        </Link>
      </main>
    );
  }

  const handleAddReview = async ({
    author,
    rating,
    comment,
  }: {
    author: string;
    rating: number;
    comment: string;
  }) => {
    try {
      setIsSubmittingReview(true);
      setReviewsError("");

      const createdReview = await addReview({
        brandId: brand.id,
        author,
        rating,
        comment,
      });

      setReviews((currentReviews) => [createdReview, ...currentReviews]);
    } catch (error) {
      console.error(error);
      setReviewsError("Failed to add review.");
      throw error;
    } finally {
      setIsSubmittingReview(false);
    }
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

          {loadingReviews ? (
            <p>Loading reviews...</p>
          ) : reviewsError ? (
            <p>{reviewsError}</p>
          ) : brandReviews.length > 0 ? (
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

        <ReviewForm
          onSubmit={handleAddReview}
          isSubmitting={isSubmittingReview}
        />
      </article>
    </main>
  );
};