import styles from './ArticleItem.module.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
}) {
  const classes = cls(styles['article-item'], {
    [styles['style-card']]: isStyleCard,
    [styles['style-row']]: isStyleRow,
  });

  return (
    <article className={classes}>
      <ArticleItemThumb />
      <div className={styles["article-item__content"]}>
        {isShowCategoies && <ArticleItemCategories />}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle />

        {isShowDesc && <ArticleItemDesc />}

        <ArticleItemInfo isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
}
