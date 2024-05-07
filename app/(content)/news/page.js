import RenderNews from "@/components/render-news";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>Main-News-Page</h1>
      <RenderNews news={news} />
    </>
  );
};

export default NewsPage;
