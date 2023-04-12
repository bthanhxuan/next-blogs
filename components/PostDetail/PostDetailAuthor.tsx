import styles from './PostAuthor.module.css';

function PostDetailAuthor({postDetail}: any) {
  return (
    <div className={styles["post-author"]}>
      <div className={styles["post-author__bg-avatar"]}>
        <a href="#" className={styles["post-author__avatar"]}>
          <img src={postDetail?.author_data?.avatar || "/assets/images/blog-detail.jpg"} alt="avatar" />
        </a>
      </div>
      <div className={styles["post-author__nickname"]}>
        <a href="#">{postDetail?.author_data?.nickname}</a>
      </div>
      <p className={styles["post-author__desc"]}>
        {postDetail?.author_data?.description ||
        <>Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!</>
        }
      </p>
    </div>
  );
}

export default PostDetailAuthor;
