import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const ArticleImage = async ({ params }) => {
  const pageSlug = params.slug;
  const article = await getNewsItem(pageSlug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <img
        src={`/images/news/${article.image}`}
        alt={article.title}
        className="fullscreen-image"
      />
    </div>
  );
};

export default ArticleImage;
