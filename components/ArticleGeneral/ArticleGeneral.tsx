import { PostType } from '@/pages';
import { ArticleItem } from '../ArticleItem';
import { Button } from '../shared/Button';
import { MainTitle } from '../shared/MainTitle';

type PropsType = {
  listPosts: PostType[],
}

const ArticleGeneral: React.FC<PropsType> = ({ listPosts }) => {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {listPosts.map((post) => (
            <div key={post.id} className="tcl-col-12 tcl-col-md-6">
              <ArticleItem isStyleCard isShowAvatar={false} post={post} />
            </div>
          ))}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          <Button type="primary" size="large" loading={false}>
            Tải thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
