import { ArticleGeneral } from "@/components/ArticleGeneral";
import { ArticleLatest } from "@/components/ArticleLatest";
import { ArticlePopular } from "@/components/ArticlePopular";

import React, { useEffect } from "react";
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import postService from "@/services/postService";

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
}

type HomePropsType = React.FC<InferGetServerSidePropsType<typeof getServerSideProps>>;

const Home: HomePropsType = ({ listPostsLatest, listPostsPopular, listPostsGeneral }) => {

  // useEffect(() => {
  //   console.log('listPostLatest', listPostsLatest);
  // }, [])

  return (
    <>
      <ArticleLatest listPosts={listPostsLatest} />
      <ArticlePopular listPosts={listPostsPopular} />
      <ArticleGeneral listPosts={listPostsGeneral} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeDataProps> = async (context) => {

  const listPostsArticleLatest = postService.getArticlesLatest();
  const listPostsArticlePopular = postService.getArticlesPopular();
  const listPostsArticleGeneral = postService.getArticlesGeneral();

  const [dataPostsArticelLatestRes, dataPostsArticlePopularRes, dataPostsArticleGeneralRes]
    = await Promise.all([listPostsArticleLatest, listPostsArticlePopular, listPostsArticleGeneral]);

  return {
    props: {
      listPostsLatest: dataPostsArticelLatestRes || [],
      listPostsPopular: dataPostsArticlePopularRes || [],
      listPostsGeneral: dataPostsArticleGeneralRes || [],
    },
  }
}

export default Home;
