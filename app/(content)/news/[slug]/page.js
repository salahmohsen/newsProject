import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

const ArticleNewsPage = ({ params }) => {
  const pageSlug = params.slug;
  const article = DUMMY_NEWS.find((item) => item.slug === pageSlug);

  if (!article) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${pageSlug}/image`}>
          <img src={`/images/news/${article.image}`} alt={`${article.title}`} />
        </Link>
        <h1>{article.title}</h1>
        <time dateTime={article.date}>{article.date}</time>
      </header>
      <p>{article.content}</p>
    </article>
  );
};

export default ArticleNewsPage;
