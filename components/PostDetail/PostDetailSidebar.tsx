import styles from './PostDetail.module.css';
import PostDetailAuthor from './PostDetailAuthor';
import PostDetailRelatedPosts from './PostDetailRelatedPosts';

function PostDetailSidebar({postDetail, postRelated}: any) {
  return (
    <div className={styles["post-detail__side"]}>
      <PostDetailAuthor postDetail={postDetail}/>
      <div className="spacing" />
      <PostDetailRelatedPosts postRelated={postRelated}/>
    </div>
  );
}

export default PostDetailSidebar;
