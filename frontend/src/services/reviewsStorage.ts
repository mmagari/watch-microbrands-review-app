import type { Review } from "../types/review";

const STORAGE_KEY = "microbrand_reviews";

export const loadStoredReviews = (): Review[] => {
  const storedReviews = localStorage.getItem(STORAGE_KEY);

  if (!storedReviews) {
    return [];
  }

  try {
    const parsedReviews = JSON.parse(storedReviews);

    if (!Array.isArray(parsedReviews)) {
      return [];
    }

    return parsedReviews;
  } catch {
    return [];
  }
};

export const saveStoredReviews = (reviews: Review[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
};