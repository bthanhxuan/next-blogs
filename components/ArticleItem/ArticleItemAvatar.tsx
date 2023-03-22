import styles from './ArticleItem.module.css';

export default function ArticleItemAvatar() {
  return (
    <div className={styles["article-item__author-image"]}>
      <a aria-label="John Doe" href="/">
        <img src="/assets/images/john-doe.png" alt="john-doe" />
      </a>
    </div>
  );
}
