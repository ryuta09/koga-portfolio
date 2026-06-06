# ポートフォリオサイト 要求仕様書

## 1. プロジェクト概要

### 1.1 目的
フロントエンドエンジニア Ryuta Koga のポートフォリオサイトを刷新する。
現行サイトの「AIチックな汎用デザイン」を脱し、記事が主役のシンプルなダーク系サイトを構築する。

### 1.2 公開先
- ホスティング：Vercel
- リポジトリ：GitHub（ryuta09 / koga-portfolio）

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

`tailwind.config.ts` の `theme.extend.colors` に定義。CSS カスタムプロパティではなく Tailwind クラスで使用する。

| トークン名 | 値 | Tailwind クラス例 | 用途 |
|-----------|-----|-----------------|------|
| `bg` | `#0a0f1e` | `bg-bg` | ページ背景 |
| `surface` | `#0f1629` | `bg-surface` | カード背景 |
| `border` | `#1e2d4a` | `border-border` | ボーダー・区切り線 |
| `primary` | `#e8edf5` | `text-primary` | 本文・見出し |
| `muted` | `#6b7fa3` | `text-muted` | サブテキスト・日付 |
| `accent` | `#00d4ff` | `text-accent` / `bg-accent` | アクセント（シアン） |
| — | — | `bg-accent/10` | アクセントの薄い背景 |

### 3.2 タイポグラフィ

| 用途 | フォント |
|------|---------|
| 英数字・見出し | `Geist`（next/font） |
| 日本語 | `Noto Sans JP`（next/font） |

### 3.3 アニメーション
- シンプルなフェードイン（スクロール連動）のみ
- Framer Motion は使用しない
- Tailwind の `transition` / `opacity` / `translate` クラス + `IntersectionObserver` で実装
- `globals.css` に CSS を書かない。`@keyframes` は不要（Tailwind のユーティリティクラスで代替）

### 3.4 デザイン原則
- shadcn/ui のデフォルト配色をそのまま使わない
- Hero セクションは設けない（Header に名前・肩書きを入れる程度）
- 記事一覧がメインコンテンツ
- 余白を十分に取り、セクションにメリハリをつける
- モバイルファーストのレスポンシブ対応

---

## 4. サイト構成

### 4.1 サイトマップ

```
/        トップページ（Zenn記事一覧のみ）
/about   プロフィール・CONTACT ページ
/works   制作物一覧（将来実装）
```

### 4.2 ナビゲーション

**ヘッダー**
- 左：サイト名（`Ryuta Koga`）
- 右：`Blog`（`/`）/ `Works`（`/works`）/ `About`（`/about`）
- `Blog` はトップページ（`/`）にいるときアクティブ状態
- `Works` は将来実装。現時点ではリンクのみ設置（ページは未作成）
- スクロール時に `backdrop-filter: blur` で背景をぼかす

**フッター**
- コピーライト
- SNSリンク：X（@gdk0918）/ GitHub（ryuta09）/ Zenn（ryuta09）

---

## 5. トップページ（/）詳細仕様

トップページは Zenn 記事一覧のみで構成する。Hero・About・Contact セクションは設けない。
About・Contact は `/about` ページに集約する。

### 5.1 記事一覧セクション

#### 概要
Zenn API から取得した記事を1カラム・縦積みで表示する。
フィルタータブは設けない（記事のみ表示）。

#### カードレイアウト（1カラム・縦積み）

```
┌──────────────────────────────────────────────┐
│ [サムネイル画像]  [タイトル]               ＞ │
│                  [日付]                       │
└──────────────────────────────────────────────┘
```

- サムネイル：左側に固定サイズ（w-50 h-30 程度）で表示
- タイトル：`text-primary`、`text-xl`
- 日付：タイトルの下、`text-muted`・小さめ
- 右端に `＞` アイコン
- カード背景：`bg-surface`、ホバー時にボーダーを強調

#### サムネイル画像
全記事共通で `/public/images/zenn-thumbnail.png` を使用する。

#### Zenn API
- エンドポイント：`https://zenn.dev/api/articles?username=ryuta09&order=latest`
- 取得タイミング：SSG（`revalidate: 3600`）
- 表示件数：最新20件
- エラー時：「記事を取得できませんでした」フォールバック表示
- 記事 URL：`https://zenn.dev` + `article.path`

---

## 6. ABOUTページ（/about）

About・Contact を集約した単一ページ。

- 名前・肩書き・アイコン画像（任意）
- 自己紹介文
- 経歴サマリ（会社名は非公開でも可）
- スキル詳細（カテゴリ別タグ）
- Contact：SNSリンク（X / GitHub / Zenn）・メールアドレス（任意）

---

## 7. WORKSページ（/works）※将来実装

- 制作物を一覧表示する
- 将来的にヘッドレスCMSで管理予定
- 現時点ではページ未作成。ヘッダーナビの `Works` リンクは設置するが遷移先はなし（または準備中ページ）

---

## 8. 非機能要件

### パフォーマンス
- `next/image` で画像最適化
- `next/font` でフォント最適化

### SEO
- 各ページに `<title>` / `<meta description>`
- OGP（`og:title` / `og:description` / `og:image`）
- `robots.txt` / `sitemap.xml`

### アクセシビリティ
- セマンティックな HTML 構造
- `alt` 属性の適切な設定
- キーボード操作対応

### セキュリティ
- 外部リンクに `rel="noopener noreferrer"` を付与
- `.env.local` を `.gitignore` に含める
- `.env.local.example` を作成する

---

## 9. ディレクトリ構成（想定）

```
app/
├── layout.tsx
├── page.tsx           # トップページ（Zenn記事一覧）
├── about/
│   └── page.tsx
└── works/
    └── page.tsx       # 将来実装
components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/
│   ├── ArticleList.tsx  # Zenn記事一覧
│   ├── About.tsx
│   └── Contact.tsx
├── ui/
│   └── ContentCard.tsx  # 記事カードコンポーネント
└── ...
lib/
└── zenn.ts
types/
└── index.ts
public/
└── images/
    ├── zenn-thumbnail.png
    └── works/           # 将来の制作物画像
```

---

## 10. 将来的な拡張予定

- `/works` ページの実装（ヘッドレスCMSと連携）
- OGP画像の自動生成（`@vercel/og`）
- Tech Blog（Next.js製）への移行検討
