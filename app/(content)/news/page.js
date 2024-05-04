"use client";

import RenderNews from "@/components/render-news";
// import { getAllNews } from "@/lib/news";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setLoading(false);
        setError("Failed to fetch the news!");
      }
      const news = await response.json();
      setNews(news);
      setLoading(false);
    }
    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  let newsContent;

  if (news) newsContent = <RenderNews news={news} />;

  return (
    <>
      <h1>Main-News-Page</h1>
      {newsContent}
    </>
  );
};

export default NewsPage;
