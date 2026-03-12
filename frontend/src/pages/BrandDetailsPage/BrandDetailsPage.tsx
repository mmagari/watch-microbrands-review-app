import { Link, useParams } from "react-router-dom";
import { brands } from "../../data/brands";
import { reviews } from "../../data/reviews";
import { calculateAverageRating } from "../../utils/calculateAverageRating";
import { ReviewCard } from "../../components/ReviewCard/ReviewCard";
import { RatingStars } from "../../components/RatingStars/RatingStars";

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

  const brandReviews = reviews.filter((review) => review.brandId === brand.id);
  const averageRating = calculateAverageRating(brandReviews);

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

        <section style={{ marginTop: "32px" }}>
          <h2>Rating & Reviews</h2>

          {brandReviews.length > 0 ? (
            <>
              <p>
                <strong>Average rating:</strong> {averageRating} / 5
              </p>
              <RatingStars rating={averageRating} />
              <p>
                <strong>{brandReviews.length}</strong> review(s)
              </p>

              <div
                style={{
                  display: "grid",
                  gap: "16px",
                  marginTop: "20px",
                }}
              >
                {brandReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </>
          ) : (
            <p>No reviews yet for this brand.</p>
          )}
        </section>
      </article>
    </main>
  );
};