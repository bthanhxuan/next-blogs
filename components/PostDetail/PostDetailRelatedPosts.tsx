import styles from '../ArticleItem/RelatedPosts.module.css';
import ArticleRelated from "../ArticleItem/ArticleRelated";

function PostDetailRelatedPosts({postRelated}: any) {
  // console.log("postRelated ", postRelated);
  
  return (
    <div className={styles["related-post"]}>
      <h2 className={styles["related-post__head"]}>Related Posts</h2>
      {postRelated.map((post: any) => (
        <ArticleRelated key={post.id} post={post}/>
      ))}
    </div>
  );
}

export default PostDetailRelatedPosts;
