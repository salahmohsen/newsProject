import RenderNews from "@/components/render-news";
import { getLatestNews } from "@/lib/news";

const LatestPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h1>Latest Page</h1>
      <RenderNews news={latestNews} />
    </>
  );
};

export default LatestPage;
