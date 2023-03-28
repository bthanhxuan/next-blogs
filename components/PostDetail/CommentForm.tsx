import { Button } from '../shared/Button';
import styles from './Comments.module.css';

export default function CommentForm() {
  return (
    <div className={styles["comments__form"]}>
      <div className={styles["comments__form--control"]}>
        <div className={styles["comments__section--avatar"]}>
          <a href="#">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <textarea name="" defaultValue={""} />
      </div>
      <div className={styles["text-right"]}>
        <Button className="btn btn-default">Submit</Button>
      </div>
    </div>
  );
}
