import styles from './PostDetail.module.css';
import PostDetailAuthor from './PostDetailAuthor';
import PostDetailRelatedPosts from './PostDetailRelatedPosts';

function PostDetailSidebar() {
  return (
    <div className={styles["post-detail__side"]}>
      <PostDetailAuthor />
      <div className="spacing" />
      <PostDetailRelatedPosts />
    </div>
  );
}

export default PostDetailSidebar;
