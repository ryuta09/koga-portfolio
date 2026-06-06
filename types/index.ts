/** Zenn API のレスポンス型 */
export type ZennArticle = {
  id: number
  title: string
  slug: string
  path: string
  published_at: string
  liked_count: number
  emoji: string
  article_type: string
}

/** UI で使用する変換済み記事型 */
export type Article = {
  id: number
  href: string
  title: string
  date: string
  thumbnailSrc: string
}
