import Link from 'next/link';
import { PropsType } from './ArticleItem';
import styles from './ArticleItem.module.css';
import { highlightText } from '@/helpers';

const ArticleItemTitle: React.FC<PropsType> = ({ post, isHighLight, query }) => {
  const title = post.title.rendered;
  const slug = post.slug;

  function renderHighLight() {
    if (isHighLight && query) {
      return highlightText(title, query)
    }
    return title;
  }

  return (
    <h2 className={styles["article-item__title"]}>
      <Link href="/post/[slug]" as={`/post/${slug}`} dangerouslySetInnerHTML={{ __html: renderHighLight() }} />
    </h2>
  );
}

export default ArticleItemTitle;