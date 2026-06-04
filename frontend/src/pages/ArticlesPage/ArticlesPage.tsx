import { Link } from "react-router-dom";
import { articles } from "../../data/articles";
import styles from "./ArticlesPage.module.scss";

export const ArticlesPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.label}>Articles</p>
        <h1 className={styles.title}>Watch Microbrand Articles</h1>
        <p className={styles.subtitle}>
          Read short articles, reviews and buying insights about independent
          watch brands.
        </p>
      </section>

      <section className={styles.grid}>
        {articles.map((article) => (
          <article key={article.id} className={styles.card}>
            <img
              src={article.image}
              alt={article.title}
              className={styles.image}
            />

            <div className={styles.content}>
              <div className={styles.meta}>
                <span>{article.category}</span>
                <span>{article.readingTime}</span>
              </div>

              <h2 className={styles.cardTitle}>{article.title}</h2>

              <p className={styles.excerpt}>{article.excerpt}</p>

              <div className={styles.footer}>
                <span>
                  By {article.author} · {article.createdAt}
                </span>

                <Link to={`/articles/${article.id}`} className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};