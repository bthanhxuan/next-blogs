import { PostType } from '@/pages';
import postService from '@/services/postService';
import { useState } from 'react';
import { ArticleItem } from '../ArticleItem';
import { Button } from '../shared/Button';
import { MainTitle } from '../shared/MainTitle';

type PropsType = {
  listPosts: PostType[],
}

const ArticleGeneral: React.FC<PropsType> = (props) => {

  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [listPosts, setListPosts] = useState(props.listPosts);

  function handleLoadmore() {
    if (loading) return;
    setLoading(true);
    postService
      .getArticlesGeneral({ per_page: 2, page: currPage + 1 })
      .then(resData => {
        const newPosts = resData || [];
        setListPosts([
          ...listPosts,
          ...newPosts,
        ])
        setCurrPage(prev => prev + 1);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem thêm">Bài viết tổng hợp</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {listPosts.map((post) => (
            <div key={post.id} className="tcl-col-12 tcl-col-md-6" style={{ marginBottom: '15px' }}>
              <ArticleItem isStyleCard isShowAvatar={false} post={post} />
            </div>
          ))}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          <Button type="primary" size="large" loading={loading} onClick={handleLoadmore}>
            Tải thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
