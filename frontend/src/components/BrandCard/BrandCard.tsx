import { Link } from "react-router-dom";
import { reviews } from "../../data/reviews";
import type { Brand } from "../../types/brand";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { RatingStars } from "../RatingStars/RatingStars";
import styles from "./BrandCard.module.scss";

type Props = {
  brand: Brand;
};

export const BrandCard = ({ brand }: Props) => {
  const brandReviews = reviews.filter((review) => review.brandId === brand.id);
  const averageRating = calculateAverageRating(brandReviews);

  return (
    <Link to={`/brand/${brand.id}`} className={styles.link}>
      <article className={styles.card}>
        <img className={styles.image} src={brand.image} alt={brand.name} />
        <h3 className={styles.name}>{brand.name}</h3>
        <p className={styles.meta}>{brand.country}</p>
        <p className={styles.meta}>{brand.priceRange}</p>
        <p className={styles.meta}>{brand.styles.join(", ")}</p>

        <div className={styles.rating}>
          <RatingStars rating={averageRating} />
          <small>{averageRating > 0 ? `${averageRating} / 5` : "No ratings yet"}</small>
        </div>
      </article>
    </Link>
  );
};