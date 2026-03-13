import { Link } from "react-router-dom";
import type { Brand } from "../../types/brand";
import { RatingStars } from "../RatingStars/RatingStars";
import styles from "./BrandCard.module.scss";

type Props = {
  brand: Brand & {
    rating: number;
  };
};

export const BrandCard = ({ brand }: Props) => {
  return (
    <Link to={`/brand/${brand.id}`} className={styles.link}>
      <article className={styles.card}>
        <img className={styles.image} src={brand.image} alt={brand.name} />

        <h3 className={styles.name}>{brand.name}</h3>
        <p className={styles.meta}>{brand.country}</p>
        <p className={styles.meta}>From ${brand.startingPriceUsd}</p>
        <p className={styles.meta}>{brand.featuredModel}</p>
        <p className={styles.meta}>{brand.styles.join(", ")}</p>

        <div className={styles.rating}>
          <RatingStars rating={brand.rating} />
          <small>{brand.rating > 0 ? `${brand.rating} / 5` : "No ratings yet"}</small>
        </div>
      </article>
    </Link>
  );
};