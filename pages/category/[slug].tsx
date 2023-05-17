import { ArticleItem } from "@/components/ArticleItem";
import { Button } from "@/components/shared/Button";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainTitle } from "@/components/shared/MainTitle";
import { PostType } from "..";
import categoryService from "@/services/categoryService";
import postService from "@/services/postService";

type PropsType = {
  articlesByIdCate: any
}

const SearchCategory: NextPage<PropsType> = ({ articlesByIdCate }) => {

  const router = useRouter();
  const slugCate = router.query.slug || null;

  const { list, idCategory, totalPages, totalPosts } = articlesByIdCate;
  const [listPosts, setListPosts] = useState(list);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPage = Number(totalPages) + 1;

  // console.log(currentPage, totalPage);

  useEffect(() => {
    if(!slugCate) {
      router.push('/');
    }
  }, [slugCate]);

  const handleLoadMore = async (e: any) => {
    e.preventDefault()
    setCurrentPage(currentPage + 1);
    const response = await postService.getPostsByCategory(idCategory, 2, currentPage).then(res => {
      return res.data;
    })
    if (currentPage === 1) return
    setListPosts(listPosts.concat(response));
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {totalPosts} kết quả tìm kiếm với danh mục "{slugCate}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {listPosts.map((post: any) => {
              return (
                <div className="tcl-col-12 tcl-col-md-8" key={post.id}>
                  <ArticleItem isStyleCard isShowCategoies isShowAvatar={false} isShowDesc={false} post={post}/>
                </div>
              )
            })}
        </div>

        <div className="text-center">
          { currentPage === totalPage ? null : <Button type="primary" size="large" onClick={handleLoadMore}>
            Tải thêm
          </Button>}
        </div>
      </div>
    </div>
  );
}

SearchCategory.getInitialProps = async (ctx: NextPageContext) => {
  const slug = ctx.query.slug as string;
  const categoryPos = categoryService.getCategoryBySlug(slug);
  const [categoriesRes] = await Promise.all([(await categoryPos).data]);
  const id = categoriesRes[0]?.id;
  const listArticleByCateId = postService.getPostsByCategory(id);
  const [listArticleByCateIdRes, totalPosts, totalPages] = await Promise.all([(await listArticleByCateId).data, (await listArticleByCateId).total, ((await listArticleByCateId).totalPage)]);

  return {
    articlesByIdCate: {
      list: listArticleByCateIdRes,
      totalPosts,
      totalPages,
      idCategory: id,
    },
  }
}

export default SearchCategory;
