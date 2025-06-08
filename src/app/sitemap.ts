import { newsData } from './types/news'

type SitemapEntry = {
  url: string
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export default function sitemap(): SitemapEntry[] {
  const baseUrl = 'https://www.michaelyeng.com'
  
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