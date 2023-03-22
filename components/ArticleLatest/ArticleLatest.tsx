import { ArticleItem } from '../ArticleItem';
import { MainTitle } from '../shared/MainTitle';
import styles from './LatestNewsList.module.css';

function ArticleLatest() {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Bài viết mới nhất</MainTitle>

        <div className={`${styles["latest-news__list"]} spacing`}>
          <div className={styles["latest-news__card"]}>
            <ArticleItem />
          </div>

          <div className={styles["latest-news__card"]}>
            <ArticleItem />
          </div>

          <div className={styles["latest-news__card"]}>
            <ArticleItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
