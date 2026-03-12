import { BrandCard } from "../components/BrandCard";
import { brands } from "../data/brands";

export const HomePage = () => {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
      <header style={{ marginBottom: "24px" }}>
        <h1>Microbrand Watch Directory</h1>
        <p>Browse interesting watch microbrands and discover what makes them unique.</p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </section>
    </main>
  );
};