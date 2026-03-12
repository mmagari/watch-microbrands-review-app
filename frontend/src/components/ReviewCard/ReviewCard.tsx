import type { Review } from "../../types/review";
import { RatingStars } from "../RatingStars/RatingStars";
import styles from "./ReviewCard.module.scss"

type Props = {
  review: Review;
};

export const ReviewCard = ({ review }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.author}>
        <strong>{review.author}</strong>
      </div>

      <RatingStars rating={review.rating} />

      <p className={styles.comment}>{review.comment}</p>

      <small className={styles.date}>{review.createdAt}</small>
    </article>
  );
};