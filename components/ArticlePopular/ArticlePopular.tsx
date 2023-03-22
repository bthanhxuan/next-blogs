import { ArticleItem } from '../ArticleItem';
import { MainTitle } from '../shared/MainTitle';
import styles from './PopularNewsList.module.css';

function ArticlePopular() {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Pho Bien</MainTitle>
        {/* End Main Title */}
        <div className={`${styles["popular-news__list"]} spacing`}>
          <div className={styles["popular-news__list--left"]}>
            <div className={styles["popular-news__list--row"]}>
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isShowCategoies isShowDesc />
              </div>
              {/* End Popular news card */}
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isShowCategoies isShowDesc />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
          <div className={styles["popular-news__list--right"]}>
            <div className={styles["popular-news__list--row"]}>
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isStyleRow isShowDesc />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopular;
