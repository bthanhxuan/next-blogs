import styles from './PostDetail.module.css';

import PostDetailComments from './PostDetailComments';
import PostDetailRichText from './PostDetailRichText';
import PostDetailTags from './PostDetailTags';

function PostDetailContent({postDetail, comments}: any) {
  // console.log('postDetail ', postDetail.id);
  // console.log('comments ', comments);

  const contentHTML = postDetail?.content?.rendered; 
  const imgSrc = postDetail?.featured_media_url;

  return (
    <div className={styles["post-detail__content"]}>
      <div className={styles["thumbnail"]}>
        {/* <img src="/assets/images/blog-detail.jpg" alt="blog-title" /> */}
        <img src={imgSrc} alt={postDetail?.slug} />
      </div>
      <div className={styles["content-padding"]}>
        <PostDetailRichText contentHTML={contentHTML}/>

        <PostDetailTags tags={postDetail.categories}/>

        <PostDetailComments comments={comments}/>
      </div>
    </div>
  );
}

export default PostDetailContent;
