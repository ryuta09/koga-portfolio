'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Blog', href: '/' },
  { label: 'Works', href: '/works' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      data-scrolled={scrolled}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent data-[scrolled=true]:border-border data-[scrolled=true]:bg-bg/85 data-[scrolled=true]:backdrop-blur-md"
    >
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-primary hover:text-accent transition-colors duration-200"
        >
          Ryuta Koga
        </Link>

        <nav aria-label="メインナビゲーション">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-primary font-medium'
                        : 'text-muted hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
