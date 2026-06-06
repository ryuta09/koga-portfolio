import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ryuta Koga — Frontend Engineer',
    template: '%s | Ryuta Koga',
  },
  description:
    '小売営業からエンジニアへ転身したフロントエンドエンジニア Ryuta Koga のポートフォリオサイトです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${geist.variable} ${notoSansJP.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased bg-bg text-primary font-sans leading-[1.75]">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
