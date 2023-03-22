import { ArticleGeneral } from "@/components/ArticleGeneral";
import { ArticleLatest } from "@/components/ArticleLatest";
import { ArticlePopular } from "@/components/ArticlePopular";

export default function Home() {
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  )
}
