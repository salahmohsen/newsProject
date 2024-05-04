import RenderNews from "@/components/render-news";
import { getAllNews } from "@/lib/news";

const NewsPage = () => {
  return (
    <>
      <h1>Main-News-Page</h1>
      <RenderNews news={getAllNews()} />
    </>
  );
};

export default NewsPage;
