import styles from './Comments.module.css';

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { CommentType } from '@/pages/post/[slug]';

type PropsType = {
  listComments: CommentType[],
}

const PostDetailComments: React.FC<PropsType> = ({ listComments}) => {
  return (
    <div className={styles["post-detail__comments"]}>
      <CommentForm />
      <p>{listComments?.length || 0} Comments</p>
      <ul className={styles["comments"]}>
        {
          listComments.map((comment : any) => {
            return (
              <CommentItem key={comment.id} comment={comment}/>
            )
          })
        }
      </ul>
    </div>
  );
}

export default PostDetailComments;
