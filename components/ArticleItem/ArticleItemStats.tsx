import styles from './ArticleItem.module.css';

export default function ArticleItemStats() {
  return (
    <ul className={styles["article-item__stats"]}>
      <li>
        <i className="icons ion-ios-eye"></i>
        <span className="text">0</span>
      </li>
    </ul>
  );
}
