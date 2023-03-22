import styles from './ArticleItem.module.css';

export default function ArticleItemCategories() {
  return (
    <ul className={styles["article-item__categories"]}>
      <li>
        <a href="/" className="btn btn-category">
          News
        </a>
      </li>
      <li>
        <a href="/" className="btn btn-category">
          News
        </a>
      </li>
    </ul>
  );
}
