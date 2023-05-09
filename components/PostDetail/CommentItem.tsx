import { useState } from 'react';
import { Button } from '../shared/Button';
import styles from './Comments.module.css';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import viLocal from 'dayjs/locale/vi';

dayjs.extend(relativeTime);

function CommentItem({comment}: any) {

  // console.log('comment ', comment);
  const [isShowForm, setIsShowForm] = useState(false);
  function handleToogleCommentForm() {
    setIsShowForm(!isShowForm);
  }

  return (
    <li className={styles["item"]}>
      <div className={styles["comments__section"]}>
        <div className={styles["comments__section--avatar"]}>
          <a href="#">
            <img src={comment?.author_data?.avatar || "/assets/images/avatar1.jpg"} alt="" />
          </a>
        </div>
        <div className={styles["comments__section--content"]}>
          <a href="#" className={styles["comments__section--user"]}>
            {comment?.author_name}
          </a>
          <p className={styles["comments__section--time"]}>{dayjs(comment?.date).locale(viLocal).fromNow()}</p>
          <div 
            className={styles["comments__section--text"]}
            dangerouslySetInnerHTML={{ __html: comment?.content?.rendered }}
          >
          </div>
          <i
            className={"ion-reply " + styles["comments__section--reply"]}
            onClick={handleToogleCommentForm}
          ></i>
        </div>
      </div>
      {/* Reply Comments */}
      <ul className={styles["comments"]}>
        <li className={styles["item"]}>
          <div className={styles["comments__section"]}>
            <div className={styles["comments__section--avatar"]}>
              <a href="#">
                <img src="/assets/images/avatar3.jpg" alt="" />
              </a>
            </div>
            <div className={styles["comments__section--content"]}>
              <a href="#" className={styles["comments__section--user"]}>
                John Smith
              </a>
              <p className={styles["comments__section--time"]}>2 minutes ago</p>
              <p className={styles["comments__section--text"]}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit?
              </p>
              {/* <i className="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
        </li>
        <li className={styles["item"]}>
          <div className={styles["comments__section"]}>
            <div className={styles["comments__section--avatar"]}>
              <a href="#">
                <img src="/assets/images/avatar4.jpg" alt="" />
              </a>
            </div>
            <div className={styles["comments__section--content"]}>
              <a href="#" className={styles["comments__section--user"]}>
                John Smith
              </a>
              <p className={styles["comments__section--time"]}>2 minutes ago</p>
              <p className={styles["comments__section--text"]}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt sequi odit exercitationem ma?
              </p>
              {/* <i className="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
        </li>
      </ul>
      {/* Reply form */}
      <div className={styles["comments__form"]}>
        <div className={styles["comments__form--control"]}>
          <div className={styles["comments__section--avatar"]}>
            <a href="#">
              <img src="/assets/images/avatar1.jpg" alt="" />
            </a>
          </div>
          <textarea name="" defaultValue={""} />
        </div>
        <div className={styles["text-right"]}>
          <Button className="btn btn-default">Submit</Button>
        </div>
      </div>
    </li>
  );
}
export default CommentItem;