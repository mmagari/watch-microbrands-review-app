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

      <section className={styles.articlesGrid}>
        {articles.map((article) => (
          <article key={article.id} className={styles.articleCard}>
            <img
              src={article.image}
              alt={article.title}
              className={styles.articleImage}
            />

            <div className={styles.articleContent}>
              <div className={styles.meta}>
                <span>{article.category} </span>
                <span>{article.readingTime}</span>
              </div>

              <h2 className={styles.articleTitle}>{article.title}</h2>

              <p className={styles.articleExcerpt}>{article.excerpt}</p>

              <div className={styles.footer}>
                <span>
                  By {article.author} · {article.createdAt}
                </span>

                <Link to={`/articles/${article.id}`} className={styles.readMore}>
                  Read more...
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};