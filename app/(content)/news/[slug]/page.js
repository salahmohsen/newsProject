import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

const ArticleNewsPage = async ({ params }) => {
  const pageSlug = params.slug;
  const article = await getNewsItem(pageSlug);

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
