import MetadataRoute from 'next'
import { newsData } from './types/news'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://https://the-yeng-project.vercel.app/' 
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  // Dynamic news pages
  const newsPages = newsData.map((newsItem) => ({
    url: `${baseUrl}/news/${newsItem.slug}`,
    lastModified: new Date(newsItem.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...newsPages]
}