import { useState } from 'react';
import { Button } from '../shared/Button';
import styles from './Comments.module.css';
import { useGlobalState } from '@/state';
import Link from 'next/link';
import commentService from '@/services/commentService';

type Props = {
  parentId: any,
  isShow: boolean,
  post?: any
}

export default function CommentForm({parentId, isShow = true, post}: Props) {

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useGlobalState('newComment');
  const [dataCommentChild, setDataCommentChild] = useGlobalState('dataCommentChild');
  const [token] = useGlobalState('token');
  const [user] = useGlobalState('currentUser');
  const [commentExclude, setCommentExclude] = useGlobalState('commentExclude');
  const isThisParent = parentId === 0;
  const placeholder = isThisParent ? 'Viết bình luận...' : 'Viết phản hồi...';
  const btnLabel = isThisParent ? 'Bình luận' : 'Phản hồi';
  
  if (!token) {
    return (
      <p className="text-center">
        Vui lòng <Link href="/login">đăng nhập</Link> để bình luận!
      </p>
    );
  }

  if (!isShow) return <></>;
  
  function handleChangeValue(e: any) {
    setContent(e.target.value);
  }
  
  const handleSubmitComment = () => {
    const data = {
      author: user?.id,
      content,
      parent: parentId,
      post,
    }

    commentService.addComment(data, token)
      .then(res => {
        if(parentId === 0) {
          setNewComment(res);
          setCommentExclude([...commentExclude, res.id]);
        } else {
          setDataCommentChild({
            ...dataCommentChild,
            [parentId]: dataCommentChild[parentId] ? [res, ...dataCommentChild[parentId]] : [res],
          });
        }

    }).then(() => {
      setContent('')
    })
  }

  return (
    <div className={styles["comments__form"]}>
      <div className={styles["comments__form--control"]}>
        <div className={styles["comments__section--avatar"]}>
          <a href="#">
            <img src="/assets/images/avatar1.jpg" alt="..." />
          </a>
        </div>
        <textarea value={content} onChange={handleChangeValue} placeholder={placeholder} />
      </div>
      <div className={styles["text-right"]}>
        <Button type='default' onClick={handleSubmitComment} loading={loading} htmlType='submit'>
          {btnLabel}
        </Button>
      </div>
    </div>
  );
}
