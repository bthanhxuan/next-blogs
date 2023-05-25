import PostDetailContent from "@/components/PostDetail/PostDetailContent";
import PostDetailHead from "@/components/PostDetail/PostDetailHead";
import PostDetailSidebar from "@/components/PostDetail/PostDetailSidebar";
import styles from '../../components/PostDetail/PostDetail.module.css';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { PostType } from "..";
import postService from "@/services/postService";
import commentService from "@/services/commentService";

type PostDetailProps = React.FC<InferGetServerSidePropsType<typeof getServerSideProps>>

type CommentType = {
  list: any,
  totalComment: number,
  postId: number
}

type PostDetailPropsData = {
  postDetail: PostType[],
  postRelated: PostType[],
  comments: any,
}

const PostDetailPage: PostDetailProps = ({postDetail, postRelated, comments}: PostDetailPropsData) => {
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead postDetail={postDetail}/>

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className={styles["post-detail__wrapper"]}>
            <PostDetailContent postDetail={postDetail} comments={comments}/>

            <PostDetailSidebar postDetail={postDetail} postRelated={postRelated}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<PostDetailPropsData> = async (context) => {
  // postDetail
  const slugPost = context.query.slug as string;
  // console.log("slugPost ", slugPost);
  const postDetailPos = postService.getPostDetail(slugPost);
  const [postDetailRes] = await Promise.all([(await postDetailPos).data]);
  const author = postDetailRes[0].author;
  const articleId = postDetailRes[0].id;
  
  // postRelated
  const postRelatedPos = postService.getPostRelated(author, articleId);
  // console.log('postRelatedRes ', postRelatedRes);

  // comments
  const listComments = commentService.getListComment(articleId);
  // console.log('listComments ', listComments);
  const [postRelatedRes, listCommentsRes, listCommentsResHeaders] 
    = await Promise.all([(await postRelatedPos).data, (await listComments).data, (await listComments).total]);

  return {
    props: {
      postDetail: postDetailRes[0] || [],
      postRelated: postRelatedRes || [],
      comments: {
        list: listCommentsRes,
        totalComment: Number(listCommentsResHeaders),
        postId: articleId,
      },
    }
  }
}

export default PostDetailPage;
