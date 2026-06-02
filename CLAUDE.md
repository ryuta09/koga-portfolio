# CLAUDE.md — ポートフォリオサイト開発指示書

## プロジェクト概要

Ryuta Koga のポートフォリオサイトを Next.js 15（App Router）で構築する。
詳細な要件は `requirements.md` を参照すること。

---

## 開発の原則

### 最重要：デザインについて
- shadcn/ui のデフォルトデザインに**依存しない**。コンポーネントは使っても良いが、必ずカスタマイズする
- `requirements.md` のカラーパレット・タイポグラフィを忠実に実装する
- 「AIチックな汎用ポートフォリオ」にならないよう、余白・フォントサイズ・配色を丁寧に調整する
- Hero の見出しは**大きすぎない**（`2rem`〜`2.5rem` を上限とする）

### コーディング規約
- 言語：TypeScript（`any` 禁止、型を必ず定義する）
- コンポーネント：関数コンポーネント + Hooks のみ
- ファイル名：PascalCase（コンポーネント）/ camelCase（ユーティリティ）
- import は絶対パス（`@/`）を使用する
- `console.log` をコミットに含めない

### ディレクトリ構成
`requirements.md` のセクション8に従うこと。

---

## 実装フェーズ

### Phase 1：基盤構築
1. `globals.css` に CSS 変数（カラーパレット・フォント）を定義する
2. `next/font` で `Geist`（英数字）と `Noto Sans JP`（日本語）を設定する
3. `Header` / `Footer` コンポーネントを実装する
4. ルートレイアウト（`app/layout.tsx`）を完成させる

### Phase 2：トップページ
1. `Hero` セクション
2. `Skills` セクション
3. `Works` セクション（準備中メッセージ）
4. `Blog` セクション（Zenn API 連携）

### Phase 3：各ページ
1. `/profile` ページ
2. `/works` ページ
3. `/blog` ページ

### Phase 4：仕上げ
1. SEO（メタデータ・OGP）
2. `robots.txt` / `sitemap.xml`
3. レスポンシブ確認（モバイル・タブレット・PC）
4. アクセシビリティ確認

---

## デザイントークン（必ず使用すること）

```css
:root {
  --color-bg: #0a0f1e;
  --color-surface: #0f1629;
  --color-border: #1e2d4a;
  --color-text-primary: #e8edf5;
  --color-text-muted: #6b7fa3;
  --color-accent: #00d4ff;
  --color-accent-dim: rgba(0, 212, 255, 0.1);
}
```

---

## Zenn API

```typescript
// lib/zenn.ts
const ZENN_API = 'https://zenn.dev/api/articles?username=ryuta09&order=latest'

export async function getZennArticles() {
  const res = await fetch(ZENN_API, { next: { revalidate: 3600 } })
  if (!res.ok) return []
  const data = await res.json()
  return data.articles
}
```

- エラー時はフォールバック（空配列）を返し、UI側で「記事を取得できませんでした」と表示する
- 記事URLは `https://zenn.dev` + `article.path` で構成する


## セキュリティ・環境変数

- 秘匿情報は `.env.local` に記載し、`.gitignore` に含める
- 現時点で秘匿情報はないが、将来の拡張に備えて `.env.local.example` を作成する
- 外部リンクには必ず `target="_blank" rel="noopener noreferrer"` を付与する

---

## やってはいけないこと（禁止事項）

- `any` 型の使用
- インラインスタイル（`style={}` 属性）の多用（CSS変数・Tailwindを使う）
- shadcn/ui のデフォルト配色（青紫系グラデーション）をそのまま使う
- Hero の見出しを `4rem` 以上にする
- `console.log` をコードに残す
- `.env.local` をコミットする
- `requirements.md` に定義されていない外部ライブラリを無断で追加する（追加する場合は理由をコメントする）

---

## 完了の定義

各フェーズの完了条件：

- [ ] TypeScript のコンパイルエラーがない（`tsc --noEmit`）
- [ ] `next build` が成功する
- [ ] モバイル（375px）/ タブレット（768px）/ PC（1280px）で表示崩れがない
- [ ] Zenn API からの記事取得が動作する（または適切なフォールバックが表示される）
- [ ] 外部リンクに `rel="noopener noreferrer"` が付いている
- [ ] `requirements.md` のカラーパレットが CSS変数として定義されている

---

## 参考情報

- 参考サイト：https://kano.codes/
- Zenn ユーザー名：ryuta09
- GitHub ユーザー名：ryuta09
- X（Twitter）：@gdk0918
- デプロイ先：Vercel
