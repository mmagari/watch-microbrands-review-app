import type { Review } from "../types/review";
import { loadStoredReviews, saveStoredReviews } from "./reviewsStorage";

export const getAllReviews = (initialReviews: Review[]): Review[] => {
  const storedReviews = loadStoredReviews();

  return [...storedReviews, ...initialReviews];
};

export const addReviewToStorage = (
  newReview: Review,
  currentReviews: Review[],
  initialReviews: Review[]
): Review[] => {
  const updatedReviews = [newReview, ...currentReviews];

  const customReviewsOnly = updatedReviews.filter(
    (review) => !initialReviews.some((initialReview) => initialReview.id === review.id)
  );

  saveStoredReviews(customReviewsOnly);

  return updatedReviews;
};