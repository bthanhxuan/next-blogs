import styles from './ArticleItem.module.css';

export default function ArticleItemThumb() {
  return (
    <div className={styles["article-item__thumbnail"]}>
      <a href="/">
        <img src="/assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
      </a>
    </div>
  );
}
