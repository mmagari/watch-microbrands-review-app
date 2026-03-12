import type { Review } from "../../types/review";
import { RatingStars } from "../RatingStars/RatingStars";

type Props = {
  review: Review;
};

export const ReviewCard = ({ review }: Props) => {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ marginBottom: "8px" }}>
        <strong>{review.author}</strong>
      </div>

      <RatingStars rating={review.rating} />

      <p style={{ margin: "8px 0" }}>{review.comment}</p>

      <small>{review.createdAt}</small>
    </article>
  );
};