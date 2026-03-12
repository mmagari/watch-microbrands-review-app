import { Link } from "react-router-dom";
import type { Brand } from "../types/brand";

type Props = {
  brand: Brand;
};

export const BrandCard = ({ brand }: Props) => {
  return (
    <Link to={`/brand/${brand.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <article
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "16px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          height: "100%",
        }}
      >
        <img
          src={brand.image}
          alt={brand.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        />
        <h3>{brand.name}</h3>
        <p>{brand.country}</p>
        <p>{brand.priceRange}</p>
        <p>{brand.styles.join(", ")}</p>
      </article>
    </Link>
  );
};