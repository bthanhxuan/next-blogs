import { PostType } from '@/pages';
import { ArticleItem } from '../ArticleItem';
import { MainTitle } from '../shared/MainTitle';
import styles from './PopularNewsList.module.css';

type PropsType = {
  listPosts: PostType[],
}

const ArticlePopular: React.FC<PropsType> = ({ listPosts }) => {

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem thêm">Bài viết phổ biến</MainTitle>
        {/* End Main Title */}
        <div className={`${styles["popular-news__list"]} spacing`}>
          <div className={styles["popular-news__list--left"]}>
            <div className={styles["popular-news__list--row"]}>
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isShowCategoies isShowDesc post={listPosts[0]} />
              </div>
              {/* End Popular news card */}
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isShowCategoies isShowDesc post={listPosts[1]} />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
          <div className={styles["popular-news__list--right"]}>
            <div className={styles["popular-news__list--row"]}>
              {/* Popular news card */}
              <div className={styles["popular-news__list--card"]}>
                <ArticleItem isStyleCard isStyleRow isShowDesc post={listPosts[2]} />
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
