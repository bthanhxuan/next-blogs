import styles from './Comments.module.css';

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { useEffect, useState } from 'react';
import { PostType } from '@/pages';
import { useGlobalState } from '@/state';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/constants';
import commentService from '@/services/commentService';
// import { CommentType } from '@/pages/post/[slug]';

type PropsType = {
  comments: any,
}

const PostDetailComments: React.FC<PropsType> = ({ comments}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { list, postId } = comments;
  const [commentsList, setCommentsList] = useState<PostType[]>(list);
  const [totalComment, setTotalComment] = useState(comments.totalComment);
  const [token] = useGlobalState('token');
  const [user] = useGlobalState('currentUser');
  const router = useRouter();
  const { slug } = router.query;
  const [newComment] = useGlobalState('newComment');
  const [commentExclude] = useGlobalState('commentExclude');

  let restTotal = Number(totalComment) - commentsList.length;

  useEffect(() => {
    if(newComment) {
      const newCommentList = [...commentsList];
      newCommentList.unshift(newComment);
      setCommentsList(newCommentList);
      setTotalComment(totalComment + 1);
    }
  }, [newComment]);

  const handleLoadMore = async(evt: any) => {
    evt.preventDefault();
    setCurrentPage(currentPage + 1)
    const response = await commentService.getListComment(postId, currentPage+1, 0, commentExclude).then(res => {
      return res.data;
    });

    // console.log('response', response);
    setCommentsList(commentsList.concat(response));
  };

  return (
    <div className={styles["post-detail__comments"]}>
      <CommentForm isShow={true} parentId={0} post={postId}/>
      {commentsList.length > 0 ? <p>{totalComment} Bình luận</p> : <p>Bài viết chưa có bình luận</p>}
      {commentsList && commentsList.length > 0 && (
        <ul className={styles["comments"]}>
          {
            commentsList.map((comment : any) => {
              return (
                <CommentItem key={comment.id} comment={comment} parentId={0} postId={postId}/>
              )
            })
          }
        </ul>
      )}
      { restTotal > 0 && <div className={`${styles["comments__hidden"]} parent`}>
        <a href="/" onClick={handleLoadMore}>
          <i className="icons ion-ios-undo" /> Xem thêm {restTotal} bình luận
        </a>
      </div>
      }
    </div>
  );
}

export default PostDetailComments;
