import Link from 'next/link';
import { PropsType } from './ArticleItem';
import styles from './ArticleItem.module.css';

const ArticleItemAvatar: React.FC<PropsType> = ({ post }) => {
  const authorAvatar = post.author_data.avatar;
  const authorName = post.author_data.nickname;

  return (
    <div className={styles["article-item__author-image"]}>
      <Link aria-label="John Doe" href="/">
        {authorAvatar ? (
          <img src={authorAvatar} alt={authorName} />
        ) : (
          <img src="assets/images/john-doe.png" alt="john-doe" />
        )}
      </Link>
    </div>
  );
}

export default ArticleItemAvatar