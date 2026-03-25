export type Review = {
  id: string;
  brandId: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type ReviewRow = {
  id: string;
  brand_id: string;
  author: string;
  rating: number;
  comment: string;
  created_at: string;
};

export type NewReviewInput = {
  brandId: string;
  author: string;
  rating: number;
  comment: string;
};