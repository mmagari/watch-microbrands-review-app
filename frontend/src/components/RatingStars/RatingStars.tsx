import styles from "./RatingStars.module.scss";

type Props = {
  rating: number;
  showValue?: boolean;
};

export const RatingStars = ({ rating, showValue = false }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.wrapper}>
      <span className={styles.stars}>
        {"★".repeat(fullStars)}
        {hasHalfStar ? "⯨" : ""}
        {"☆".repeat(emptyStars)}
      </span>

      {showValue && <span className={styles.value}>{rating.toFixed(1)}</span>}
    </div>
  );
};