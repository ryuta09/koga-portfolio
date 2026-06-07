import Image from 'next/image'
import Link from 'next/link'

const skills = [
  {
    category: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST API'],
  },
  {
    category: 'Tools & Infra',
    items: ['Git / GitHub', 'Vercel', 'Figma', 'Docker'],
  },
]

const snsLinks = [
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/gdk0918',
    handle: '@gdk0918',
    icon: '/icon/x.svg',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ryuta09',
    handle: 'ryuta09',
    icon: '/icon/github.svg',
  },
  {
    label: 'Zenn',
    href: 'https://zenn.dev/ryuta09',
    handle: 'ryuta09',
    icon: '/icon/zenn.svg',
  },
]

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Profile */}
      <section aria-labelledby="about-heading" className="mb-20">
        <p className="text-xl font-bold text-primary mb-4">About</p>
        <h1 id="about-heading" className="text-3xl font-bold text-primary mb-2">
          Ryuta Koga
        </h1>
        <p className="text-base text-muted mb-8">Frontend Engineer</p>
        <div className="space-y-4 text-base text-primary leading-relaxed">
          <p>
            フロントエンドエンジニアとして、主に React / Next.js を使ったプロダクト開発に携わっています。
          </p>
          <p>
            ユーザーが心地よく使えるインターフェースの設計・実装に興味があり、
            パフォーマンスとアクセシビリティの両立を意識しながら開発しています。
          </p>
          <p>
            技術的なアウトプットは Zenn に投稿しています。
          </p>
        </div>
      </section>

      {/* Career */}
      <section aria-labelledby="career-heading" className="mb-20">
        <h2
          id="career-heading"
          className="text-xl font-bold text-primary mb-8"
        >
          Career
        </h2>
        <ol className="relative border-l border-border pl-6 space-y-8 list-none m-0 p-0 pl-6">
          <li>
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-accent" />
            <p className="text-sm text-muted mb-1">2022 — 現在</p>
            <p className="text-base font-medium text-primary">フロントエンドエンジニア</p>
            <p className="text-sm text-muted mt-0.5">Web系企業</p>
          </li>
          <li>
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-border" />
            <p className="text-sm text-muted mb-1">2020 — 2022</p>
            <p className="text-base font-medium text-primary">エンジニア</p>
            <p className="text-sm text-muted mt-0.5">SIer</p>
          </li>
        </ol>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="mb-20">
        <h2
          id="skills-heading"
          className="text-xl font-bold text-primary mb-8"
        >
          Skills
        </h2>
        <div className="flex flex-col gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-sm text-muted mb-3">{group.category}</p>
              <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface px-3 py-1 text-sm text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading">
        <h2
          id="contact-heading"
          className="text-xl font-bold text-primary mb-8"
        >
          Contact
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0">
          {snsLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border bg-surface px-5 py-4 transition-colors duration-200 hover:border-accent/30"
              >
                <Image src={link.icon} alt={link.label} width={24} height={24} className="text-muted transition-colors duration-200 group-hover:text-accent shrink-0 invert"/>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-muted">{link.label}</span>
                  <span className="text-sm text-primary group-hover:text-accent transition-colors duration-200">{link.handle}</span>
                </div>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="mailto:gako0918@gmail.com"
              className="group flex items-center gap-4 rounded-lg border border-border bg-surface px-5 py-4 transition-colors duration-200 hover:border-accent/30"
            >
              <Image src="/icon/email.svg" alt="Email" width={24} height={24} className="text-muted transition-colors duration-200 group-hover:text-accent shrink-0 invert"/>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-muted">Email</span>
                <span className="text-sm text-primary group-hover:text-accent transition-colors duration-200">gako0918@gmail.com</span>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
