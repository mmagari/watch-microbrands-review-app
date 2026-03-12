import styles from "./RatingStars.module.scss"

type Props = {
  rating: number;
};

export const RatingStars = ({ rating }: Props) => {
  const fullStars = Math.round(rating);
  const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);

  return <p className={styles.stars}>{stars}</p>;
};