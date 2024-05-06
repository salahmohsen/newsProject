import RenderNews from "@/components/render-news";
// import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("Failed to fetch the news!");
  }
  const news = await response.json();

  return (
    <>
      <h1>Main-News-Page</h1>
      <RenderNews news={news} />
    </>
  );
};

export default NewsPage;
