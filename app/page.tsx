import { ArticleList } from '@/components/sections/ArticleList'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-xs font-semibold tracking-widest text-accent uppercase mb-8">
        Blog
      </h1>
      <ArticleList />
    </main>
  )
}
