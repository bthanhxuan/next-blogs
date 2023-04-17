import Link from 'next/link';
import { PropsType } from './ArticleItem';
import styles from './ArticleItem.module.css';

const ArticleItemThumb: React.FC<PropsType> = ({ post }) => {
  // console.log(post);
  const thumb = post.featured_media_url;
  const title = post.title.rendered;

  return (
    <div className={styles["article-item__thumbnail"]}>
      <Link href="/post/[postId]" as={`/post/${post.id}`}>
        <img src={thumb} alt={title} />
      </Link>
    </div>
  );
}

export default ArticleItemThumb;