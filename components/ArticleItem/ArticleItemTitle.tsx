import Link from 'next/link';
import styles from './ArticleItem.module.css';

export default function ArticleItemTitle() {
  return (
    <h2 className={styles["article-item__title"]}>
      <Link href="post/only-someone-who's-seen-the-mummy-will-pass-this/">Only Someone Who's Seen The Mummy Will Pass This</Link>
    </h2>
  );
}
