import styles from './Comments.module.css';

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

function PostDetailComments() {
  return (
    <div className={styles["post-detail__comments"]}>
      <CommentForm />
      <p>20 Comments</p>
      <ul className={styles["comments"]}>
        {/* Comment 1 */}
        <CommentItem />
        {/* Comment 2 */}
        <CommentItem />
        {/* Comment 3 */}
        <CommentItem />
      </ul>
    </div>
  );
}

export default PostDetailComments;
