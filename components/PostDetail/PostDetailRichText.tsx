import styles from './PostDetail.module.css';

function PostDetailRichText({contentHTML}: any) {
  return (
    <div className={styles["rte"]} dangerouslySetInnerHTML={{ __html: contentHTML }}>
    </div>
  );
}

export default PostDetailRichText;
