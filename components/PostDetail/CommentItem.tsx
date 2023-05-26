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
  const [dataCommentChild] = useGlobalState('dataCommentChild');
  const listChildCmt = dataCommentChild[parentId] || [];
  // const [childComments, setChildComment] = useState([...listChildCmt]);

  let restTotal = (comment.comment_reply_count) - listChildCmt.length;
  let totalPages = Math.round((comment.comment_reply_count) / currentPage);


  // useEffect(()=>{
  //   if(newChildComment) {
  //     const newCmtChildList = [newChildComment, ...childComments];
  //     setChildComment(newCmtChildList);
  //   }
  // }, [newChildComment])

  console.log('id', comment.id);
  console.log('listChildCmt', listChildCmt);

  const handleLoadMore = async (evt: any) => {
    evt.preventDefault();
    setCurrentPage(currentPage + 1);

    const response = await commentService.getListComment(postId, currentPage, parentId).then(res => {
      return res.data;
    });



    // console.log('response', response);

    // fetch(
    //   `${BASE_URL}/wp/v2/comments?per_page=3&page=${currentPage === 0 ? '1' : currentPage}&post=${postId}&parent=${parentId}`
    // )
    //   .then((res) => {
    //     const totalCommentChild = res.headers.get("x-wp-total");
    //     // console.log('totalCommentChild', totalCommentChild)
    //     const totalPageCommentChild = res.headers.get("x-wp-totalpages");
    //     // console.log('totalPageCommentChild', totalPageCommentChild)
    //     setTotalChildComment(Number(totalCommentChild));
    //     setTotalPages(Number(totalPageCommentChild) + 1);
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log('res', res);
    //     setChildComment(childComments.concat(res));
    //   });
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
          <i
            className={"ion-reply " + styles["comments__section--reply"]}
            onClick={handleToggleCommentForm}
          ></i>
        </div>
      </div>

      {/* Reply form */}
      <CommentForm isShow={isShowForm} parentId={parentId} post={postId}/>

      {/* Reply Comments */}
      <ul className={styles["comments"]}>
        {listChildCmt.map((comment: any) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            parentId={parentId}
            postId={postId}
          />
        ))}
      </ul>
      
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
