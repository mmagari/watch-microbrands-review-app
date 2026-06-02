import { Link } from "react-router-dom";
import type { Article } from "../../types/articles";
import styles from "./articlesSidebar.module.scss";

type Articles = Article & {
  averageRating: number;
};

type Props = {
  articles: Articles[];
};

export const ArticlesSidebar = ({ articles }: Props) => {
  return (
    <aside className={styles.sidebar} id="articles">
      <div className={styles.sidebarCard}>
        <div className={styles.sidebarSection}>
          <p className={styles.sidebarTitle}>Articles</p>

          <div className={styles.topBrandList}>
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/brand/${article.id}`}
                className={styles.topBrandItem}
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