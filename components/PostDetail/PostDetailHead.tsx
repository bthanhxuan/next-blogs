import styles from './PostDetail.module.css';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import viLocal from 'dayjs/locale/vi';

dayjs.extend(relativeTime);

function PostDetailHead({postDetail}: any) {
  // console.log('postDatail:', postDetail);

  return (
    <div className={styles["post-detail__head"]}>
      <div className="tcl-container">
        <h1 className={styles["post-detail__title"]}>
          {postDetail?.title?.rendered}
        </h1>
        <ul className={styles["post-detail__info"]}>
          <li className={styles["item"] + " author"}>
            By{' '}
            <a href="/">
              <strong>{postDetail?.author_data?.nickname}</strong>
            </a>
          </li>
          <li className={styles["item"] + " date"}>{dayjs(postDetail?.date).locale(viLocal).fromNow()}</li>
          <li className={styles["item"] + " views"}>
            {postDetail?.view_count} <i className="icons ion-ios-eye" />
          </li>
          <li className={styles["item"] + " comments"}>
            {postDetail?.comment_count} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostDetailHead;
