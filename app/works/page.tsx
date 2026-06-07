const PLACEHOLDER_COUNT = 6

function WorkCardPlaceholder() {
  return (
    <div className="rounded-lg border border-border bg-surface overflow-hidden">
      <div className="aspect-video w-full bg-border" />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-4 w-3/4 rounded bg-border" />
        <div className="flex flex-col gap-1.5">
          <div className="h-3 w-full rounded bg-border" />
          <div className="h-3 w-2/3 rounded bg-border" />
        </div>
        <div className="flex gap-2 mt-1">
          <div className="h-5 w-14 rounded bg-border" />
          <div className="h-5 w-14 rounded bg-border" />
        </div>
      </div>
    </div>
  )
}

export default function WorksPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <p className="text-xl font-bold text-primary mb-2">Works</p>
        <p className="text-sm text-muted">制作物一覧は現在準備中です。</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <WorkCardPlaceholder key={i} />
        ))}
      </div>
    </main>
  )
}
