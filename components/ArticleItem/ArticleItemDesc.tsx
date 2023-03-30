import { PropsType } from './ArticleItem';
import styles from './ArticleItem.module.css';

const ArticleItemDesc: React.FC<PropsType> = ({ post }) => {
  let customizeDesc = post.excerpt.rendered.replace('<p>', '');
  customizeDesc = customizeDesc.replace('</p>', '');
  customizeDesc = customizeDesc.split(' ').slice(0, 20).join(' ') + '...';
  return (
    <p className={styles["article-item__desc"]}>
      {customizeDesc}
    </p>
  );
}

export default ArticleItemDesc;