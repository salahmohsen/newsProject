import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const ArticleImage = ({ params }) => {
  const pageSlug = params.slug;
  const article = DUMMY_NEWS.find((item) => item.slug === pageSlug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <img
          src={`/images/news/${article.image}`}
          alt={article.title}
          style={{ width: "inherit" }}
        />
      </dialog>
    </>
  );
};

export default ArticleImage;
