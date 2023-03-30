import { PostType } from '@/pages';
import React from 'react';
import { ArticleItem } from '../ArticleItem';
import { MainTitle } from '../shared/MainTitle';
import styles from './LatestNewsList.module.css';

type PropsType = {
  listPosts: PostType[],
}

const ArticleLatest: React.FC<PropsType> = ({ listPosts }) => {

  // console.log("listPosts: ", listPosts);

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Bài viết mới nhất</MainTitle>

        <div className={`${styles["latest-news__list"]} spacing`}>
          {listPosts.map((post) => (
            <div key={post.id} className={styles["latest-news__card"]}>
              <ArticleItem post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
