import { Link } from "react-router-dom";
import type { Brand } from "../../types/brand";
import { getPriceBucket } from "../../utils/getPriceBucket";
import { RatingStars } from "../RatingStars/RatingStars";
import styles from "./BrandCard.module.scss";

type Props = {
  brand: Brand & {
    rating: number;
    reviewCount: number;
  };
};

export const BrandCard = ({ brand }: Props) => {
  return (
    <Link to={`/brand/${brand.id}`} className={styles.link}>
      <article className={styles.card}>
        <img
          className={styles.image}
          src={brand.image || "https://placehold.co/600x400?text=Watch+Brand"}
          alt={brand.name}
        />

        <h3 className={styles.name}>{brand.name}</h3>
        <p className={styles.meta}>{brand.country}</p>
        <p className={styles.metaStrong}>From ${brand.startingPriceUsd}</p>
        <p className={styles.meta}>{getPriceBucket(brand.startingPriceUsd)}</p>
        <p className={styles.meta}>{brand.featuredModel}</p>
        <p className={styles.meta}>{brand.styles.join(", ")}</p>
        <p className={styles.metaMuted}>
          {brand.reviewCount} review{brand.reviewCount !== 1 ? "s" : ""}
        </p>

        <div className={styles.rating}>
          <RatingStars rating={brand.rating} />
          <small>{brand.rating > 0 ? `${brand.rating.toFixed(1)} / 5` : "No reviews yet"}</small>
        </div>
      </article>
    </Link>
  );
};