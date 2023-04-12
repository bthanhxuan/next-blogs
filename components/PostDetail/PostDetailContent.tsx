import styles from './PostDetail.module.css';

import PostDetailComments from './PostDetailComments';
import PostDetailRichText from './PostDetailRichText';
import PostDetailTags from './PostDetailTags';

function PostDetailContent({postDetail}: any) {

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

        <PostDetailTags />

        <PostDetailComments />
      </div>
    </div>
  );
}

export default PostDetailContent;
