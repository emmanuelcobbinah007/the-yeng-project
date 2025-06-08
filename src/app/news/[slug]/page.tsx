import { notFound } from "next/navigation";
import NewsContent from "../../components/NewsContent";
import { newsData } from "../../types/news";
import type { Metadata, ResolvingMetadata } from "next/types";
import Link from "next/link";

type PageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: PageParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const newsItem = newsData.find((item) => item.slug === slug);

  if (!newsItem) {
    return {
      title: "News Not Found - Michael Yeng",
      description: "The requested news article could not be found.",
    };
  }

  const newsUrl = `https://www.michaelyeng.com/news/${slug}`;
  const imageUrl = newsItem.imageSrc.startsWith('http') 
    ? newsItem.imageSrc 
    : `https://www.michaelyeng.com${newsItem.imageSrc}`;

  return {
    title: `${newsItem.title} | Michael Yeng News`,
    description: newsItem.shortDescription,
    keywords: [
      "Michael Yeng",
      "UGSRC",
      "University of Ghana",
      "Student News",
      "Campus Updates",
      "Student Leadership"
    ],
    authors: [{ name: "Michael Yeng Campaign Team" }],
    openGraph: {
      title: newsItem.title,
      description: newsItem.shortDescription,
      type: "article",
      publishedTime: newsItem.date,
      url: newsUrl,
      siteName: 'Michael Yeng for UGSRC President',
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
    alternates: {
      canonical: newsUrl,
    },
  };
}

export async function generateStaticParams() {
  return newsData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsPage({ params }: PageParams) {
  const { slug } = await params;
  const newsItem = newsData.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const newsUrl = `https://www.michaelyeng.com/news/${slug}`;
  const imageUrl = newsItem.imageSrc.startsWith('http') 
    ? newsItem.imageSrc 
    : `https://www.michaelyeng.com${newsItem.imageSrc}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": newsItem.title,
    "description": newsItem.shortDescription,
    "image": imageUrl,
    "datePublished": newsItem.date,
    "dateModified": newsItem.date,
    "author": {
      "@type": "Person",
      "name": "Michael Yeng"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Michael Yeng for UGSRC President",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.michaelyeng.com/assets/images/logo1nobg.png"
      }
    },
    "url": newsUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": newsUrl
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <NewsContent 
          title={newsItem.title}
          date={newsItem.date}
          content={newsItem.fullStory}
          imageSrc={newsItem.imageSrc}
          slug={newsItem.slug}
        />
      </div>
    </>
  );
}