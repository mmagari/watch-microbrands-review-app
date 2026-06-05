import { Link, useParams } from "react-router-dom";
import { articles } from "../../data/articles";
import styles from "./ArticlesDetailsPage.module.scss";

export const ArticleDetailsPage = () => {
  const { articleId } = useParams();

  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return (
      <main className={styles.page}>
        <h1>Article not found</h1>
        <Link to="/articles">Back to articles</Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Link to="/articles" className={styles.backLink}>
        ← Back to articles
      </Link>

      <article className={styles.article}>
        <img src={article.image} alt={article.title} className={styles.image} />

        <div className={styles.meta}>
          <span>{article.category}</span>
          <span>{article.readingTime}</span>
          <span>{article.createdAt}</span>
        </div>

        <h1 className={styles.title}>{article.title}</h1>

        <p className={styles.author}>By {article.author}</p>

        <div className={styles.text}>
          {article.text.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
};