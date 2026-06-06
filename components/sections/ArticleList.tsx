import { getZennArticles } from '@/lib/zenn'
import { ContentCard } from '@/components/ui/ContentCard'

export async function ArticleList() {
  const articles = await getZennArticles()

  if (articles.length === 0) {
    return (
      <p className="text-sm text-muted py-8 text-center">
        記事を取得できませんでした
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-3 list-none p-0 m-0">
      {articles.map((article) => (
        <li key={article.id}>
          <ContentCard
            href={article.href}
            title={article.title}
            date={article.date}
            thumbnailSrc={article.thumbnailSrc}
          />
        </li>
      ))}
    </ul>
  )
}
