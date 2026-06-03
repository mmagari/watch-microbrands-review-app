import { Link } from "react-router-dom";
import type { Article } from "../../types/articles";
import styles from "./articlesSidebar.module.scss";

type Articles = Article;

type Props = {
  articles: Articles[];
};

export const ArticlesSidebar = ({ articles }: Props) => {
  return (
    <aside className={styles.sidebar} id="articles">
      <div className={styles.sidebarCard}>
        <div className={styles.sidebarSection}>
          <p className={styles.sidebarTitle}>Articles</p>

          <div className={styles.articlesList}>
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className={styles.articlesItem}
              >
                <span className={styles.topBrandName}>{article.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};