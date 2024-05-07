import RenderNews from "@/components/render-news";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

const FilterHeader = async ({ year, month }) => {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = !year
              ? `/archive/${link}`
              : `/archive/${year}/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const NewsContent = async ({ year, month }) => {
  let newsContent = <p>No available news for selected date.</p>;
  let news;

  if (year && !month) {
    news = getNewsForYear(year);
  }

  if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  if (news && news.length > 0) {
    newsContent = <RenderNews news={news} />;
  }

  const availableNewsYears = await getAvailableNewsYears();

  if (
    (year && !availableNewsYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Filter Invalid!");
  }

  return <>{newsContent}</>;
};

const ArchiveYearPage = async ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <NewsContent year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default ArchiveYearPage;
