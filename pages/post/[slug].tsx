import PostDetailContent from "@/components/PostDetail/PostDetailContent";
import PostDetailHead from "@/components/PostDetail/PostDetailHead";
import PostDetailSidebar from "@/components/PostDetail/PostDetailSidebar";
import styles from '../../components/PostDetail/PostDetail.module.css';
import { NextPage, NextPageContext } from "next";
import { PostType } from "..";
import postService from "@/services/postService";

type PropsType = {
  postDetail: PostType[],
  postRelated: PostType[],
}

const PostDetailPage: NextPage<PropsType> = ({postDetail, postRelated}) => {
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead postDetail={postDetail}/>

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className={styles["post-detail__wrapper"]}>
            <PostDetailContent postDetail={postDetail}/>

            <PostDetailSidebar postDetail={postDetail} postRelated={postRelated}/>
          </div>
        </div>
      </div>
    </main>
  );
}

PostDetailPage.getInitialProps = async (ctx: NextPageContext) => {
  // postDetail
  const slugPost = ctx.query.slug as string;
  // console.log("slugPost ", slugPost);
  const postDetailRes = await postService.getPostDetail(slugPost);
  // console.log('postDetailRes', postDetailRes[0]);

  // postRelated
  const postRelatedRes = await postService.getPostRelated(postDetailRes[0]?.author, postDetailRes[0]?.id);
  // console.log('postRelatedRes ', postRelatedRes);

  return {
    postDetail: postDetailRes[0] || [],
    postRelated: postRelatedRes || [],
  }
}

export default PostDetailPage;
