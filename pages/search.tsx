import { ArticleItem } from "@/components/ArticleItem";
import { Button } from "@/components/shared/Button";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PostType } from ".";
import postService from "@/services/postService";
import { MainTitle } from "@/components/shared/MainTitle";

type SearchPropsType = {
  listPosts: PostType[],
}

const SearchPage: NextPage<SearchPropsType> = ({ listPosts }) => {

  const router = useRouter();
  const keywordSearch = (router.query.keyword || '') as string;

  useEffect(() => {
    if (!keywordSearch) {
      router.push('/');
    }
  }, [keywordSearch]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {listPosts.length} kết quả tìm kiếm với từ khóa "{keywordSearch}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {listPosts.map(post => {
            return (
              <div className="tcl-col-12 tcl-col-md-8" key={post.id} style={{ marginBottom: '15px' }}>
                <ArticleItem isStyleCard isShowCategoies isShowAvatar={false} isShowDesc={false} post={post} isHighLight={true} query={keywordSearch} />
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button type="primary" size="large">
            Tải thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

SearchPage.getInitialProps = async (ctx: NextPageContext) => {
  const keyword = ctx.query.keyword || '';
  const listPostsRes = await postService.getPostSearch({ keyword })
  return {
    listPosts: listPostsRes || [],
  }
}

export default SearchPage;
