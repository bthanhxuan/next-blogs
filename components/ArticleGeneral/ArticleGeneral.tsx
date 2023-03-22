import { ArticleItem } from '../ArticleItem';
import { Button } from '../shared/Button';
import { MainTitle } from '../shared/MainTitle';

function ArticleGeneral() {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
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
