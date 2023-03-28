import styles from './PostDetail.module.css';

import PostDetailComments from './PostDetailComments';
import PostDetailRichText from './PostDetailRichText';
import PostDetailTags from './PostDetailTags';

function PostDetailContent() {
  return (
    <div className={styles["post-detail__content"]}>
      <div className={styles["thumbnail"]}>
        <img src="/assets/images/blog-detail.jpg" alt="blog-title" />
      </div>
      <div className={styles["content-padding"]}>
        <PostDetailRichText />

        <PostDetailTags />

        <PostDetailComments />
      </div>
    </div>
  );
}

export default PostDetailContent;
