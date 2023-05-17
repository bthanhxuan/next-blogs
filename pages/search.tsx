import { ArticleItem } from "@/components/ArticleItem";
import { Button } from "@/components/shared/Button";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PostType } from ".";
import postService from "@/services/postService";
import { MainTitle } from "@/components/shared/MainTitle";
import { BASE_URL } from "@/constants";

type SearchPropsType = {
  searchResult: any,
}

const SearchPage: NextPage<SearchPropsType> = ({ searchResult }) => {

  const router = useRouter();
  const keywordSearch = (router.query.keyword || '') as string;
  const { list, keyword, totalPages, totalPosts} = searchResult;
  const [listPosts, setListPosts] = useState(list);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPage = Number(totalPages) + 1;

  console.log(currentPage, totalPage);

  useEffect(() => {
    if (!keywordSearch) {
      router.push('/');
    }
  }, [keywordSearch]);

  const handleLoadMore = async (e: any) => {
    e.preventDefault()
    setCurrentPage(currentPage + 1);
    const response = await postService.getPostSearch(keyword).then(res => {
      return res.data;
    })
    if (currentPage === 1) return
    setListPosts(listPosts.concat(response));
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {totalPosts} kết quả tìm kiếm với từ khóa "{keywordSearch}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {listPosts.map((post : any) => {
            return (
              <div className="tcl-col-12 tcl-col-md-8" key={post.id}>
                <ArticleItem isStyleCard isShowCategoies isShowAvatar={false} isShowDesc={false} post={post} isHighLight={true} query={keywordSearch} />
              </div>
            )
          })}
        </div>

        <div className="text-center">
          {currentPage === totalPage ? null : <Button type="primary" size="large" onClick={handleLoadMore}>
            Tải thêm
          </Button>}
        </div>
      </div>
    </div>
  );
}

SearchPage.getInitialProps = async (ctx: NextPageContext) => {
  const keyword = ctx.query.keyword || '';
  const listPostsPos = postService.getPostSearch(keyword);
  const [listPostsRes, totalPages, totalPosts] = await Promise.all([(await listPostsPos).data, (await listPostsPos).totalPage , (await listPostsPos).total]);
  return {
    searchResult: {
      list: listPostsRes,
      keyword,
      totalPages,
      totalPosts: Number(totalPosts)
    },
  }
}

export default SearchPage;
