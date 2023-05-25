import { ArticleGeneral } from "@/components/ArticleGeneral";
import { ArticleLatest } from "@/components/ArticleLatest";
import { ArticlePopular } from "@/components/ArticlePopular";

import React, { useEffect } from "react";
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import postService from "@/services/postService";
import categoryService from "@/services/categoryService";

export type PostType = {
  id: string,
  title: any,
  featured_media_url: any,
  date: any,
  author: string,
  author_data: any,
  authorAvatar: any | null,
  excerpt: any,
  categories: any,
  slug: string,
  view_count: string | null,
  comment_count: string | null,
  content: string,
}

type HomeDataProps = {
  listPostsLatest: PostType[],
  listPostsPopular: PostType[],
  listPostsGeneral: PostType[],
  totalPagesGeneral: number,
}

type HomePropsType = React.FC<InferGetServerSidePropsType<typeof getServerSideProps>>;

const Home: HomePropsType = ({ listPostsLatest, listPostsPopular, listPostsGeneral, totalPagesGeneral }) => {

  // useEffect(() => {
  //   console.log('listPostLatest', listPostsLatest);
  // }, [])

  return (
    <>
      <ArticleLatest listPosts={listPostsLatest} />
      <ArticlePopular listPosts={listPostsPopular} />
      <ArticleGeneral listPosts={listPostsGeneral} totalPages={totalPagesGeneral} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeDataProps> = async (context) => {

  const listPostsArticleLatest = postService.getArticlesLatest();
  const listPostsArticlePopular = postService.getArticlesPopular();
  const listPostsArticleGeneral = postService.getArticlesGeneral();
  // const listCategory = categoryService.getCategories()

  const [dataPostsArticelLatestRes, dataPostsArticlePopularRes, dataPostsArticleGeneralRes, dataTotalPagesGeneralRes]
    = await Promise.all([(await listPostsArticleLatest).data, (await listPostsArticlePopular).data, (await listPostsArticleGeneral).data, (await (listPostsArticleGeneral)).totalPage]);

  return {
    props: {
      listPostsLatest: dataPostsArticelLatestRes || [],
      listPostsPopular: dataPostsArticlePopularRes || [],
      listPostsGeneral: dataPostsArticleGeneralRes || [],
      totalPagesGeneral: Number(dataTotalPagesGeneralRes) || 0,
    },
  }
}

export default Home;
