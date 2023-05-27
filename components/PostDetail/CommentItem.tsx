import { useEffect, useState } from "react";
import { Button } from "../shared/Button";
import styles from "./Comments.module.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import viLocal from "dayjs/locale/vi";
import { useGlobalState } from "@/state";
import { BASE_URL } from "@/constants";
import CommentForm from "./CommentForm";
import commentService from "@/services/commentService";

dayjs.extend(relativeTime);

type Props = {
  comment: any;
  parentId: any;
  postId: any;
};

function CommentItem({ comment, parentId, postId }: Props) {
  // console.log('comment', comment, parentId);
  const [isShowForm, setIsShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [token] = useGlobalState("token");
  const [newComment, setNewComment] = useGlobalState('newComment');
  const [dataCommentChild, setDataCommentChild] = useGlobalState('dataCommentChild');
  const listChildCmt = dataCommentChild[comment.id]?.list || [];
  // const [childComments, setChildComment] = useState([...listChildCmt]);
  const totalCmt = dataCommentChild[comment.id]?.totalComment || 1;

  console.log('id', comment.id);
  console.log('dataCommentChild', dataCommentChild);
 
  let restTotal = totalCmt - listChildCmt.length;
  let totalPages = Math.round((comment.comment_reply_count) / currentPage);

  useEffect(() => {
    console.log('useEffect run');
    const newDataCmtChild = {
      ...dataCommentChild, 
      [comment.id]: {
        list: [],
        totalComment: Number(comment.comment_reply_count),
      } 
    };
    console.log('newDataCmtChild', newDataCmtChild);
    setDataCommentChild({
      ...dataCommentChild, 
      [comment.id]: {
        list: [],
        totalComment: Number(comment.comment_reply_count),
      } 
    });
  }, []);

  const handleLoadMore = async (evt: any) => {
    evt.preventDefault();
    setCurrentPage(currentPage + 1);

    const response = await commentService.getListComment(postId, currentPage, comment.id).then(res => {
      return res;
    });
    console.log('response', response);
    const data = await response?.data.then(res =>{
      return res;
    });

    setDataCommentChild({
      ...dataCommentChild, 
      [comment.id]: {
        list: dataCommentChild[comment.id]?.list ? [...dataCommentChild[comment.id].list, ...data] : [...data],
        totalComment: Number(response.total),
      } 
    });
  }

  function handleToggleCommentForm() {
    setIsShowForm(!isShowForm);
  }

  return (
    <li className={styles["item"]}>
      <div className={styles["comments__section"]}>
        <div className={styles["comments__section--avatar"]}>
          <a href="#">
            <img
              src={comment?.author_data?.avatar || "/assets/images/avatar1.jpg"}
              alt=""
            />
          </a>
        </div>
        <div className={styles["comments__section--content"]}>
          <a href="#" className={styles["comments__section--user"]}>
            {comment?.author_name}
          </a>
          <p className={styles["comments__section--time"]}>
            {dayjs(comment?.date).locale(viLocal).fromNow()}
          </p>
          <div
            className={styles["comments__section--text"]}
            dangerouslySetInnerHTML={{ __html: comment?.content?.rendered }}
          ></div>
          {parentId === 0 && 
            <i
              className={"ion-reply " + styles["comments__section--reply"]}
              onClick={handleToggleCommentForm}
            ></i>
          }
        </div>
      </div>

      {/* Reply form */}
      <CommentForm isShow={isShowForm} parentId={comment.id} post={postId}/>

      {/* Reply Comments */}
      {listChildCmt.length > 0 && 
        <ul className={styles["comments"]}>
          {listChildCmt.map((comment: any) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              parentId={comment.id}
              postId={postId}
            />
          ))}
        </ul>
      }
      
      <div
        className={styles["comments__hidden"]}
        style={{ marginLeft: "20px" }}
      >
        {currentPage <= totalPages && (
          <a href="/" onClick={handleLoadMore}>
            <i className="icons ion-ios-undo" /> Xem thêm{" "}
            {listChildCmt.length > 0 ? restTotal : comment.comment_reply_count}{" "}
            câu trả lời
          </a>
        )}
      </div>
    </li>
  );
}
export default CommentItem;
