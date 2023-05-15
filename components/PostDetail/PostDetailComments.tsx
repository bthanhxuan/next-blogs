import styles from './Comments.module.css';

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { useEffect, useState } from 'react';
import { PostType } from '@/pages';
import { useGlobalState } from '@/state';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/constants';
// import { CommentType } from '@/pages/post/[slug]';

type PropsType = {
  comments: any,
}

const PostDetailComments: React.FC<PropsType> = ({ comments}) => {
  const [commentsList, setCommentsList] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState(2);
  const { list, postId, totalComment } = comments;
  const [token] = useGlobalState('token');
  const [user] = useGlobalState('currentUser');
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setCommentsList([])
    setCurrentPage(2)
  }, [slug]);

  useEffect(() => {
    if (currentPage === 2) setCommentsList(list)
  }, [currentPage, postId]);

  const handleLoadMore = async(evt: any) => {
    evt.preventDefault();
    setCurrentPage(currentPage + 1)
    fetch(`${BASE_URL}/wp/v2/comments?per_page=5&page=${currentPage}&post=${postId}&parent=0`)
    .then(res => {
      return res.json()
    })
    .then(res => {
      if (currentPage === 1) setCommentsList(res)
      setCommentsList(commentsList.concat(res))
    })
  };

  return (
    <div className={styles["post-detail__comments"]}>
      <CommentForm />
      {commentsList.length > 0 ? <p>{totalComment} Bình luận</p> : <p>Bài viết chưa có bình luận</p>}
      {commentsList && commentsList.length > 0 && (
        <ul className={styles["comments"]}>
          {
            commentsList.map((comment : any) => {
              return (
                <CommentItem key={comment.id} comment={comment}/>
              )
            })
          }
        </ul>
      )}
    </div>
  );
}

export default PostDetailComments;
