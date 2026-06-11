import Image from 'next/image'

type ContentCardProps = {
  href: string
  title: string
  date: string
  thumbnailSrc: string
  thumbnailAlt?: string
}

export function ContentCard({
  href,
  title,
  date,
  thumbnailSrc,
  thumbnailAlt = '',
}: ContentCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-lg border-2 border-border bg-surface p-4 transition-colors hover:border-accent/50"
    >
      {/* サムネイル */}
      <div className="relative h-30 w-50 shrink-0 overflow-hidden rounded-md bg-border">
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt || title}
          fill
          sizes="200px"
          className="object-cover"
        />
      </div>

      {/* テキスト */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="line-clamp-2 text-xl font-medium leading-snug text-primary group-hover:text-accent transition-colors">
          {title}
        </p>
        <time className="text-sm text-muted">{date}</time>
      </div>

      {/* 矢印 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
        aria-hidden="true"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </a>
  )
}
