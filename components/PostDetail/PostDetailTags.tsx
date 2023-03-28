import { Button } from '../shared/Button';
import styles from './PostDetail.module.css';

function PostDetailTags() {
  return (
    <div className={styles["post-detail__tags"]}>
      <h2>Tags</h2>
      <ul>
        <li className={styles["item"]}>
          <Button as='a' className="btn btn-default">HTML</Button>
        </li>
        <li className={styles["item"]}>
          <Button as='a' className="btn btn-default">CSS3</Button>
        </li>
        <li className={styles["item"]}>
          <Button as='a' className="btn btn-default">React</Button>
        </li>
        <li className={styles["item"]}>
          <Button as='a' className="btn btn-default">Vue</Button>
        </li>
      </ul>
    </div>
  );
}

export default PostDetailTags;
