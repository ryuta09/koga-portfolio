import type { ZennArticle, Article } from '@/types'

const ZENN_API = 'https://zenn.dev/api/articles?username=ryuta09&order=latest'
const ZENN_THUMBNAIL = '/images/zenn-thumbnail.webp'

export async function getZennArticles(): Promise<Article[]> {
  const res = await fetch(ZENN_API, { next: { revalidate: 3600 } })
  if (!res.ok) return []
  const data = await res.json()
  const articles: ZennArticle[] = data.articles ?? []

  return articles.map((article) => ({
    id: article.id,
    href: `https://zenn.dev${article.path}`,
    title: article.title,
    date: article.published_at.slice(0, 10),
    thumbnailSrc: ZENN_THUMBNAIL,
  }))
}
