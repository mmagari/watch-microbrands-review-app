import { Link, useParams } from "react-router-dom";
import { brands } from "../data/brands";

export const BrandDetailsPage = () => {
  const { id } = useParams();

  const brand = brands.find((item) => item.id === id);

  if (!brand) {
    return (
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
        <h1>Brand not found</h1>
        <p>We couldn’t find the brand you’re looking for.</p>
        <Link to="/">Go back to homepage</Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px" }}>
      <Link to="/" style={{ display: "inline-block", marginBottom: "20px" }}>
        ← Back to brands
      </Link>

      <article>
        <img
          src={brand.image}
          alt={brand.name}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "24px",
          }}
        />

        <h1>{brand.name}</h1>
        <p>
          <strong>Country:</strong> {brand.country}
        </p>
        <p>
          <strong>Price range:</strong> {brand.priceRange}
        </p>
        <p>
          <strong>Styles:</strong> {brand.styles.join(", ")}
        </p>

        <section style={{ marginTop: "24px" }}>
          <h2>About the brand</h2>
          <p>{brand.description}</p>
        </section>
      </article>
    </main>
  );
};