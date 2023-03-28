import PostDetailContent from "@/components/PostDetail/PostDetailContent";
import PostDetailHead from "@/components/PostDetail/PostDetailHead";
import PostDetailSidebar from "@/components/PostDetail/PostDetailSidebar";
import styles from '../../components/PostDetail/PostDetail.module.css';

function PostDetailPage() {
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className={styles["post-detail__wrapper"]}>
            <PostDetailContent />

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
