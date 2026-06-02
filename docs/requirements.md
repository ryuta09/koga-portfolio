# ポートフォリオサイト 要求仕様書

## 1. プロジェクト概要

### 1.1 目的
フロントエンドエンジニア Ryuta Koga のポートフォリオサイトを刷新する。
現行サイトの「AIチックな汎用デザイン」を脱し、シンプルかつUXに配慮したダーク系テーマで個性を表現する。

### 1.2 公開先
- ホスティング：Vercel
- リポジトリ：GitHub（ryuta09）

### 1.3 参考サイト
- https://kano.codes/（デザイン・情報設計の参考）

---

## 2. 技術スタック

| 分類 | 技術 |
|------|------|
| フレームワーク | Next.js 15（App Router） |
| UI ライブラリ | React 19 |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS 4 |
| UIコンポーネント | shadcn/ui（デフォルトデザインに依存しないカスタマイズ前提） |
| デプロイ | Vercel |
| 外部API | Zenn API（記事取得） |

---

## 3. デザインシステム

### 3.1 カラーパレット

| トークン | 値 | 用途 |
|---------|-----|------|
| `--color-bg` | `#0a0f1e` | ページ背景 |
| `--color-surface` | `#0f1629` | カード・セクション背景 |
| `--color-border` | `#1e2d4a` | ボーダー・区切り線 |
| `--color-text-primary` | `#e8edf5` | 本文・見出し |
| `--color-text-muted` | `#6b7fa3` | サブテキスト・日付 |
| `--color-accent` | `#00d4ff` | アクセント（シアン） |
| `--color-accent-dim` | `rgba(0, 212, 255, 0.1)` | アクセントの薄い背景 |

### 3.2 タイポグラフィ

| 用途 | フォント |
|------|---------|
| 英数字・見出し | `Geist`（Google Fonts） |
| 日本語 | `Noto Sans JP`（Google Fonts） |

- 見出しは大きすぎない（`2rem`〜`2.5rem` を上限の目安とする）
- 行間・文字間隔を意識した読みやすい設定

### 3.3 アニメーション
- シンプルなフェードイン（スクロール連動）のみ
- Framer Motion は使用しない
- CSS transition / `@keyframes` で実装

### 3.4 デザイン原則
- AIチックな汎用デザイン（shadcn/ui デフォルトそのまま）にしない
- セクションごとにメリハリをつける
- 余白を十分に取る
- モバイルファーストのレスポンシブ対応

---

## 4. ページ構成

### 4.1 サイトマップ

```
/           トップページ
/profile    プロフィール・経歴ページ
/works      制作物一覧ページ
/blog       ブログ記事一覧ページ
```

### 4.2 共通レイアウト

**ヘッダー**
- ロゴ（`Ryuta Koga` テキスト）
- ナビゲーション：`Works` / `Profile` / `Blog`
- スクロール時に背景をぼかす（backdrop-filter）

**フッター**
- コピーライト
- SNSリンク：X（Twitter）/ GitHub / Zenn

---

## 5. 各ページ仕様

### 5.1 トップページ（/）

#### Hero セクション
- キャッチコピー（日本語）：「小売営業からエンジニアへ。UIで価値を届ける。」
- サブテキスト：職種名（Frontend Engineer）と簡単な一言紹介
- SNSリンクアイコン：X / GitHub / Zenn
- 過度に大きい文字・派手なアニメーションは使わない

#### Skills セクション
- 使用技術をタグ形式で表示
- カテゴリ別グループ（Frontend / Backend / Tool）
- 技術一覧：
  - Frontend：HTML / CSS / SCSS（FLOCSS） / JavaScript / TypeScript / React / Next.js
  - Backend：PHP / Laravel / WordPress / Liquid（Shopify/ecforce）
  - Tool：Git / GitHub / Figma / Vercel

#### Works セクション
- 見出し：`Works`
- 「現在制作物を準備中です」というメッセージを表示
- `/works` へのリンクを設置

#### Blog セクション
- 見出し：`Blog`
- Zenn API（`https://zenn.dev/api/articles?username=ryuta09&order=latest`）から最新3件取得
- 表示項目：記事タイトル / 投稿日 / 絵文字アイコン
- `/blog` へのリンク（「もっと見る」）

---

### 5.2 プロフィールページ（/profile）

#### 自己紹介
- 名前：Ryuta Koga（古賀 龍太）
- 職種：Frontend Engineer
- 経歴サマリ：「小売営業7年 → Webメディア運営会社 → システム系自社サービス開発会社（現職）」

#### スキル詳細
- 技術スタックをカテゴリ別に一覧表示

#### キャリア年表
- 職歴をタイムライン形式で表示（会社名はダミーまたは非公開でも可）

---

### 5.3 制作物一覧ページ（/works）

- 現時点では制作物なし
- 「現在制作物を準備中です。もうしばらくお待ちください。」と表示
- 将来的にカード形式で追加できる設計にしておく（型定義・データ構造のみ用意）

**Works カードのデータ構造（将来用）**
```typescript
type Work = {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl?: string
  siteUrl?: string
  githubUrl?: string
  category: 'web' | 'app' | 'other'
}
```

---

### 5.4 ブログ一覧ページ（/blog）

- Zenn API から全記事取得（ページネーションなしで最新20件）
- 表示項目：記事タイトル / 投稿日 / 絵文字アイコン
- 記事クリックで Zenn の記事ページに遷移（別タブ）

---

## 6. 外部API仕様

### Zenn API
- エンドポイント：`https://zenn.dev/api/articles?username=ryuta09&order=latest`
- 取得タイミング：ビルド時（SSG）
- キャッシュ：`revalidate: 3600`（1時間）
- エラー時：フォールバック表示（「記事を取得できませんでした」）

---

## 7. 非機能要件

### パフォーマンス
- Core Web Vitals（LCP / CLS / INP）を意識した実装
- 画像は `next/image` を使用
- フォントは `next/font` で最適化

### アクセシビリティ
- セマンティックな HTML 構造
- alt 属性の適切な設定
- キーボード操作対応

### SEO
- 各ページに適切な `<title>` / `<meta description>`
- OGP 設定（`og:title` / `og:description` / `og:image`）
- `robots.txt` / `sitemap.xml` の生成

### セキュリティ
- 環境変数を `.env.local` で管理
- 外部リンクには `rel="noopener noreferrer"` を付与
- `.gitignore` に `.env.local` を含める

---

## 8. ディレクトリ構成（想定）

```
src/
├── app/
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # トップページ
│   ├── profile/
│   │   └── page.tsx
│   ├── works/
│   │   └── page.tsx
│   └── blog/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Works.tsx
│   │   └── Blog.tsx
│   └── ui/              # shadcn/ui + カスタムコンポーネント
├── lib/
│   └── zenn.ts          # Zenn API クライアント
├── types/
│   └── index.ts         # 型定義
└── styles/
    └── globals.css      # CSS変数・グローバルスタイル
```

---

## 9. 将来的な拡張予定

- Works セクションへの制作物追加
- Tech Blog（Next.js製）への移行検討
- OGP画像の自動生成（`@vercel/og`）
