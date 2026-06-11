import { ArticleList } from '@/components/sections/ArticleList'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-lg font-bold tracking-widest text-white uppercase mb-8">
        Blog
      </h1>
      <ArticleList />
    </main>
  )
}
