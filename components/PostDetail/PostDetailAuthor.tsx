import styles from './PostAuthor.module.css';

function PostDetailAuthor() {
  return (
    <div className={styles["post-author"]}>
      <div className={styles["post-author__bg-avatar"]}>
        <a href="/" className={styles["post-author__avatar"]}>
          <img src="/assets/images/blog-detail.jpg" alt="" />
        </a>
      </div>
      <div className={styles["post-author__nickname"]}>
        <a href="/">John Smith</a>
      </div>
      <p className={styles["post-author__desc"]}>
        Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!
      </p>
    </div>
  );
}

export default PostDetailAuthor;
