import RenderNews from "@/components/render-news";
import { getLatestNews } from "@/lib/news";

const LatestPage = () => {
  return (
    <>
      <h1>Latest Page</h1>
      <RenderNews news={getLatestNews()} />
    </>
  );
};

export default LatestPage;
