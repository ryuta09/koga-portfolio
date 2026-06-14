import Image from 'next/image'
import Link from 'next/link'

const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS(Scss)', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Laravel',],
  },
  {
    category: 'Tools & Infra',
    items: ['Git / GitHub', 'Vercel','Docker'],
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
          古賀龍太
        </h1>
        <p className="text-sm text-muted font-medium">Frontend Engineer</p>
        <div className="flex flex-col gap-2 mt-4 text-base text-primary leading-relaxed">
          <p>
            販売員として約7年従事したのち、Progateをきっかけにプログラミングの面白さに気づき、Web業界へ転身。
          </p>
          <p>
            コーダーとして静的コーディングやWordPress構築、保守から始め、Next.jsを用いたメディアサイトの開発を経て、現在は受託開発の現場でReactとLaravelを中心にエンジニアとして働いています。
          </p>
        </div>
      </section>

      {/* Career */}
      <section aria-labelledby="career-heading" className="mb-20">
        <h2
          id="career-heading"
          className="text-xl font-bold text-primary mb-8"
        >
          経歴
        </h2>
        <ol className="relative border-l border-border pl-6 space-y-8 list-none m-0 p-0 pl-6">
          <li>
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-accent" />
            <p className="text-sm text-muted mb-1">2026年 5月 — 現在</p>
            <p className="text-lg font-medium text-primary">受託開発</p>
            <p className="text-sm text-muted mt-0.5 text-white">受託案件に携わって日々開発しています。現在はReactとLaravelを使ったプロジェクトに参画中</p>
          </li>
          <li>
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-border" />
            <p className="text-sm text-muted mb-1">2023年4月 — 20264月</p>
            <p className="text-lg font-medium text-primary">Webメディア運営会社</p>
            <p className="text-sm text-muted mt-0.5 text-white">コーダーとして静的なコーディングからWordPress構築、保守を担当。Next.jsを採用したメディアサイトの開発にも携わる</p>
          </li>
          <li>
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-border" />
            <p className="text-sm text-muted mb-1"> — 2023年3月</p>
            <p className="text-lg font-medium text-primary">販売員時代</p>
            <p className="text-sm text-muted mt-0.5 text-white">大手通信販売代理店に新卒で入社。携帯電話の販売員として日々お客様に最適なサービスや端末を提案し販売を行う</p>
          </li>
        </ol>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="mb-20">
        <h2
          id="skills-heading"
          className="text-xl font-bold text-primary mb-8"
        >
          スキル
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
          お問い合わせ
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
