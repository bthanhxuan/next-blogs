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
  categories: string,
  slug: string,
  view_count: string | null,
  comment_count: string | null,
  content: string,
}

type HomeDataProps = {
  listPosts: PostType[],
}

type HomePropsType = React.FC<InferGetServerSidePropsType<typeof getServerSideProps>>;

const Home: HomePropsType = ({ listPosts }) => {

  // useEffect(() => {
  //   console.log("listPosts: ", listPosts);
  // }, [])

  return (
    <>
      <ArticleLatest listPosts={listPosts} />
      <ArticlePopular listPosts={listPosts} />
      <ArticleGeneral listPosts={listPosts} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeDataProps> = async (context) => {

  const listPostsRes = await postService.getPosts();
  // console.log("listPostsRes: ", listPostsRes);
  // const props = {
  //   listPosts: [],
  // }

  return {
    props: {
      listPosts: listPostsRes || [],
    },
  }
}

export default Home;
