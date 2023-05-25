import { PostType } from '@/pages';
import postService from '@/services/postService';
import { useEffect, useState } from 'react';
import { ArticleItem } from '../ArticleItem';
import { Button } from '../shared/Button';
import { MainTitle } from '../shared/MainTitle';
import { BASE_URL } from '@/constants';

type PropsType = {
  listPosts: PostType[],
  totalPages?: number,
}

const ArticleGeneral: React.FC<PropsType> = (props) => {
  const [listPosts, setListPosts] = useState(props.listPosts);
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(props.totalPages || 0);

  // console.log('currPage', currentPage)

  const handleLoadMore = (e: any) => {
    if (loading) return
    setLoading(true);
    setCurrentPage(currentPage + 1);
    fetch(`${BASE_URL}/wp/v2/posts?per_page=2&page=${currentPage + 1}&lang=vi`)
      .then(res=>{
        return res.json()
      })
      .then(res => {
        setLoading(false);
        setListPosts(listPosts.concat(res));
      })
  }
  
  // useEffect(() => {
  //   fetch(`${BASE_URL}/wp/v2/posts?per_page=2&page=${currentPage}&lang=vi`)
  //   .then(res => {
  //     const totalpage = res.headers.get('x-wp-totalpages');
  //     setTotalPages(Number(totalpage));
  //     return res.json()
  //   })
  //   .then(res => {
  //     if (currentPage === 1) {
  //       setListPosts(res)
  //     }
  //     setLoading(false)
  //     setListPosts(listPosts.concat(res))
  //   })
  // }, [currentPage])

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
          {currentPage < totalPages && <Button type="primary" size="large" loading={loading} onClick={handleLoadMore}>
            Tải thêm
          </Button> }
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
