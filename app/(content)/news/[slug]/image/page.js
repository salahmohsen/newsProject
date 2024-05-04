import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const ArticleImage = ({ params }) => {
  const pageSlug = params.slug;
  const article = DUMMY_NEWS.find((item) => item.slug === pageSlug);

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