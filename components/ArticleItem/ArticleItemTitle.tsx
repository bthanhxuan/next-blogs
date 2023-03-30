import Link from 'next/link';
import { PropsType } from './ArticleItem';
import styles from './ArticleItem.module.css';

const ArticleItemTitle: React.FC<PropsType> = ({ post }) => {
  const title = post.title.rendered;
  const slug = post.slug;

  return (
    <h2 className={styles["article-item__title"]}>
      <Link href={`post/${slug}`}>{title}</Link>
    </h2>
  );
}

export default ArticleItemTitle;