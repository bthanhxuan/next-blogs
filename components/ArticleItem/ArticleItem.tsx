import styles from './ArticleItem.module.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';
import { PostType } from '@/pages';
import React from 'react';

export type PropsType = {
  post: PostType;

  isStyleRow?: boolean,
  isStyleCard?: boolean,
  isShowDesc?: boolean,
  isShowCategoies?: boolean,
  isShowAvatar?: boolean,
  isHighLight?: boolean,
  query?: string,
}

const ArticleItem: React.FC<PropsType> = ({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post,
  isHighLight,
  query
}) => {
  if (!post) return <></>;

  const {
    title,
    featured_media_url,
    author_data,
    date,
    authorAvatar,
    excerpt,
    slug,
    categories,
  } = post;

  const classes = cls(styles['article-item'], {
    [styles['style-card']]: isStyleCard,
    [styles['style-row']]: isStyleRow,
  });

  return (
    <article className={classes}>
      <ArticleItemThumb post={post} />
      <div className={styles["article-item__content"]}>
        {isShowCategoies && <ArticleItemCategories categories={categories} />}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle post={post} isHighLight={isHighLight} query={query} />

        {isShowDesc && <ArticleItemDesc post={post} />}

        <ArticleItemInfo isShowAvatar={isShowAvatar} post={post} />
      </div>
    </article>
  );
}

export default ArticleItem;