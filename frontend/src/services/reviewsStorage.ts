import type { Review } from "../types/review";

const STORAGE_KEY = "microbrand_reviews";

const isBrowser = typeof window !== "undefined";

export const loadStoredReviews = (): Review[] => {
  if (!isBrowser) {
    return [];
  }

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
  if (!isBrowser) {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
};