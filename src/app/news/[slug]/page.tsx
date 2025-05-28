import { notFound } from "next/navigation";
import NewsContent from "../../components/NewsContent";
import { newsData } from "../../types/news";
import type { Metadata, ResolvingMetadata } from "next";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface SlugParams {
  slug: string;
}

interface PageProps {
  params: string;
  searchParams: SearchParams;
}

export async function generateMetadata(
  { params }: { params: SlugParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const newsItem = newsData.find((item) => item.slug === params.slug);

  if (!newsItem) {
    return {
      title: "News Not Found",
    };
  }

  return {
    title: newsItem.title,
    description: newsItem.shortDescription,
    openGraph: {
      title: newsItem.title,
      description: newsItem.shortDescription,
      type: "article",
      publishedTime: newsItem.date,
      images: [
        {
          url: newsItem.imageSrc,
          width: 1200,
          height: 630,
          alt: newsItem.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: newsItem.title,
      description: newsItem.shortDescription,
      images: [newsItem.imageSrc],
    },
  };
}

export async function generateStaticParams() {
  return newsData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsPage({ params }: { params: SlugParams }) {
  const newsItem = newsData.find((item) => item.slug === params.slug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <NewsContent 
        title={newsItem.title}
        date={newsItem.date}
        content={newsItem.fullStory}
        imageSrc={newsItem.imageSrc}
        slug={newsItem.slug}
      />
    </div>
  );
}