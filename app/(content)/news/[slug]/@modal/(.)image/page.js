import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const ArticleImage = async ({ params }) => {
  const pageSlug = params.slug;
  const article = await getNewsItem(pageSlug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
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
