import styles from '../ArticleItem/RelatedPosts.module.css';
import ArticleRelated from "../ArticleItem/ArticleRelated";

function PostDetailRelatedPosts() {
  return (
    <div className={styles["related-post"]}>
      <h2 className={styles["related-post__head"]}>Related Posts</h2>
      <ArticleRelated />
      <ArticleRelated />
      <ArticleRelated />
    </div>
  );
}

export default PostDetailRelatedPosts;
