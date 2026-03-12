import { BrandCard } from "../../components/BrandCard/BrandCard";
import { brands } from "../../data/brands";
import styles from "./HomePage.module.scss"

export const HomePage = () => {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Microbrand Watch Directory</h1>
        <p>Browse interesting watch microbrands and discover what makes them unique.</p>
      </header>

      <section className={styles.grid}>
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </section>
    </main>
  );
};