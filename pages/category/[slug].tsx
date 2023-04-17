import { ArticleItem } from "@/components/ArticleItem";
import { Button } from "@/components/shared/Button";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainTitle } from "@/components/shared/MainTitle";
import { PostType } from "..";
import categoryService from "@/services/categoryService";
import postService from "@/services/postService";

type PropsType = {
  listPosts: PostType[]
}

const SearchCategory: NextPage<PropsType> = ({ listPosts }) => {

  const router = useRouter();
  const slugCate = router.query.slug || null;

  useEffect(() => {
    if(!slugCate) {
      router.push('/');
    }
  }, [slugCate]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {listPosts.length} kết quả tìm kiếm với danh mục "{slugCate}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {listPosts.map(post => {
              return (
                <div className="tcl-col-12 tcl-col-md-8" key={post.id} style={{ marginBottom: '15px' }}>
                  <ArticleItem isStyleCard isShowCategoies isShowAvatar={false} isShowDesc={false} post={post}/>
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

SearchCategory.getInitialProps = async (ctx: NextPageContext) => {
  const slug = ctx.query.slug as string;
  const categoryRes = await categoryService.getCategoryBySlug(slug);
  // console.log("categoryRes: ", categoryRes[0].id);
  const categories = categoryRes[0].id;
  const listPostsRes = await postService.getPostsByCategory({categories})
  // console.log("listPostsRes: ", listPostsRes);

  return {
    listPosts: listPostsRes || [],
  }
}

export default SearchCategory;
