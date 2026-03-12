import type { Review } from "../types/review";

export const reviews: Review[] = [
  {
    id: "review-1",
    brandId: "baltic",
    author: "Michael",
    rating: 5,
    comment: "Beautiful vintage styling and great proportions. One of my favorite microbrands.",
    createdAt: "2026-03-10",
  },
  {
    id: "review-2",
    brandId: "baltic",
    author: "Chris",
    rating: 4,
    comment: "Great design and finishing for the price, although I’d love to see better lume.",
    createdAt: "2026-03-11",
  },
  {
    id: "review-3",
    brandId: "lorier",
    author: "Daniel",
    rating: 5,
    comment: "Amazing retro vibe and a very fun everyday watch brand.",
    createdAt: "2026-03-09",
  },
  {
    id: "review-4",
    brandId: "lorier",
    author: "Tom",
    rating: 4,
    comment: "Really solid value and cool designs, but not everyone will love the acrylic crystal.",
    createdAt: "2026-03-08",
  },
];