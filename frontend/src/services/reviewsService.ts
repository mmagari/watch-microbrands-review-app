import { supabase } from "../lib/supabase";
import type { Review } from "../types/review";

type ReviewRow = {
  id: string;
  brand_id: string;
  author: string;
  rating: number;
  comment: string;
  created_at: string;
};

type NewReviewInput = {
  brandId: string;
  author: string;
  rating: number;
  comment: string;
};

const mapReviewRowToReview = (row: ReviewRow): Review => {
  return {
    id: row.id,
    brandId: row.brand_id,
    author: row.author,
    rating: row.rating,
    comment: row.comment,
    createdAt: row.created_at,
  };
};

export const getAllReviews = async (initialReviews: Review[]): Promise<Review[]> => {
  
  const { data, error } = await supabase
  
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });
console.log("SUPABASE RAW DATA:", data);
console.log("SUPABASE ERROR:", error);
  if (error) {
    console.error("Failed to load reviews from Supabase:", error);
    return initialReviews;
  }

  if (!Array.isArray(data)) {
    console.error("Supabase returned non-array data:", data);
    return initialReviews;
  }

  const dbReviews = ((data ?? []) as ReviewRow[]).map(mapReviewRowToReview);

  return [...dbReviews, ...initialReviews];
};

export const addReview = async (newReview: NewReviewInput): Promise<Review> => {
  const { data, error } = await supabase
    .from("reviews")
    .insert({
      brand_id: newReview.brandId,
      author: newReview.author,
      rating: newReview.rating,
      comment: newReview.comment,
    })
    .select()
    .single();

  if (error || !data) {
    console.error("Failed to add review:", error);
    throw new Error("Failed to add review");
  }

  return mapReviewRowToReview(data as ReviewRow);
};