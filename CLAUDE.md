# おさじの宿・堂屋敷 — サイト制作ガイド

## 会話開始時のルール

**必ず最初に次の質問をすること：**
「作業メモ（`作業メモ/` フォルダ）を参照しますか？前回までの作業履歴を確認できます。」

参照する場合は `作業メモ/` 内のファイルをすべて読んでから作業を開始すること。

## 作業メモの自動記録ルール

以下のタイミングで、当日の作業メモ（`作業メモ/YYYY-MM-DD.md`）が未作成の場合は**依頼がなくても自動的に作成**すること：

1. `git push` を実行した直後
2. ユーザーが「終わり」「ありがとう」「お疲れ」「またね」「バイ」など会話終了を示す言葉を使ったとき

メモには当日行ったすべての変更・作業内容を記録する。

## フォルダ構成

```
src/
├── assets/images/      # 実写真（hero/ rooms/ access/ price/ experiences/）
├── components/         # 再利用部品
│   ├── BookingButtons.astro  ← 予約ボタン（URL管理はconfig/booking.ts）
│   ├── FAQ.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── ImagePlaceholder.astro  ← 写真差し替え前の仮表示
│   ├── MenuOverlay.astro
│   ├── PageShell.astro       ← 下層ページ共通枠（Header/Footer/Menu込み）
│   ├── PageTitle.astro       ← 下層ページのタイトルブロック
│   └── ReservationCTA.astro  ← 下層ページ末尾の予約セクション
├── config/
│   └── booking.ts      ← 予約サイトURL（ここだけ編集する）
├── content/            # テキストはここで管理（ページに直書きしない）
│   ├── config.ts       ← コレクション型定義
│   ├── home/ja.json    ← 日本語トップページのテキスト
│   ├── home/en.json    ← 英語トップページのテキスト
│   ├── rooms/ja.json   ← お部屋ページ
│   ├── amenities/ja.json  ← 設備ページ
│   ├── activities/ja.json ← 体験・アクティビティページ
│   ├── around/ja.json  ← 周辺ページ
│   ├── voices/ja.json  ← お客様の声ページ
│   ├── news-page/ja.json  ← ニュース一覧ページの枠テキスト
│   ├── news/*.md       ← ニュース記事（1記事1ファイル、frontmatter: title/date/description/cover）
│   ├── legal/ja.md     ← 特定商取引法（日本語）
│   ├── legal/en.md     ← 特定商取引法（英語）
│   ├── privacy/ja.md   ← プライバシーポリシー（日本語）
│   └── privacy/en.md   ← プライバシーポリシー（英語）
├── layouts/
│   └── Layout.astro    ← 全ページ共通枠（SEO head・フォント・CSS）
├── pages/
│   ├── index.astro     ← /  日本語トップページ（デフォルトロケール、無接頭辞）
│   ├── legal.astro     ← /legal/
│   ├── privacy.astro   ← /privacy/
│   ├── summercamp2026.astro  ← /summercamp2026/（単一ファイル完結、姉妹プロジェクト統合分）
│   ├── en/index.astro  ← /en/ 英語トップページ
│   ├── en/legal.astro
│   └── en/privacy.astro
└── styles/
    └── tokens.css      ← デザイントークン（色・フォント・余白）
```

## 命名ルール

- ファイル: PascalCase（`BookingButtons.astro`）
- CSS クラス: kebab-case（`exp-article`, `hero-text`）
- コンテンツ ID: kebab-case（`river`, `engawa`, `fire`, `forest`）
- 画像フォルダ: 小文字・セクション名（`hero/`, `rooms/`）

## ページ一覧

日本語がデフォルトロケール（無接頭辞）、英語のみ `/en/` を付与する非対称構造。

| URL | ファイル | 状態 |
|-----|---------|------|
| `/` | `pages/index.astro` | ✅ 完成（写真は仮）|
| `/en/` | `pages/en/index.astro` | 未作成（後日制作） |
| `/legal/` | `pages/legal.astro` | 未作成 |
| `/en/legal/` | `pages/en/legal.astro` | 未作成 |
| `/privacy/` | `pages/privacy.astro` | 未作成 |
| `/en/privacy/` | `pages/en/privacy.astro` | 未作成 |
| `/summercamp2026/` | `pages/summercamp2026.astro` | ✅ 完成（姉妹プロジェクト統合分、日本語のみ）|
| `/rooms/` | `pages/rooms.astro` | ✅ 完成（和室・庭・間取り図の写真は仮）※トップからのリンク未設置 |
| `/amenities/` | `pages/amenities.astro` | ✅ 完成 ※トップからのリンク未設置 |
| `/activities/` | `pages/activities.astro` | ✅ 完成（流しソーメン・星空・オオサンショウウオの写真は仮）※トップからのリンク未設置 |
| `/around/` | `pages/around.astro` | ✅ 完成 ※トップからのリンク未設置 |
| `/voices/` | `pages/voices.astro` | ✅ 完成（声の日付表記は要確認）※トップからのリンク未設置 |
| `/news/` | `pages/news/index.astro` | ✅ 完成（記事はサンプル3本）※トップからのリンク未設置 |
| `/news/<slug>/` | `pages/news/[slug].astro` | ✅ 完成（`content/news/*.md` から自動生成）|
| `/about/` | 未作成 | - |

下層ページは `PageShell` + `PageTitle` + `ReservationCTA` を組み合わせて作る。
ニュース記事の追加は `src/content/news/` に `.md` を1ファイル置くだけ（ビルドで一覧・詳細に自動反映）。

## news記事とInstagramの運用ルール（C案・手動連携）

**news記事を新規作成したときは、依頼がなくてもInstagram用の投稿セットを併せて提案すること：**

1. キャプション案（IG向けに文体を調整、絵文字ひかえめ、末尾にハッシュタグ案：#西粟倉 #古民家宿 #おさじの宿堂屋敷 など＋記事の季節ネタ）
2. 使う写真の指定（記事のcover写真。なければ「IGには写真必須」と伝える）

※将来、A案（GitHub Actions＋Instagram Graph APIによる自動投稿）に移行予定。newsやInstagramの話題が出たら、A案への挑戦を忘れていないかユーザーにリマインドする。

## デザインの基本

| 項目 | 値 |
|------|-----|
| アクセントカラー | `#E0563B`（スイカの赤） |
| ページ背景 | `#F8F4EA` |
| 白パネル | `#FFFDF7` |
| 予約パネル | `#EEF3E0`（淡い葉） |
| 本文色 | `#2F2A22` |
| 見出しフォント | Zen Old Mincho（weight 500–600） |
| 本文フォント | Zen Kaku Gothic New（weight 400） |
| ページ最大幅 | 480px（モバイル優先・中央寄せ）|
| セクション左右パディング | 22–26px |

トークンはすべて `src/styles/tokens.css` で管理。ページに直書きしない。

## 各ページ作成時の確認事項

**必ず先に確認してから実装すること：**

1. `src/components/` — 使えるコンポーネントがあれば流用する
2. `src/content/` — テキストはコンテンツコレクションに追加し、ページに直書きしない
3. `src/styles/tokens.css` — 色・サイズは CSS 変数で指定する
4. `src/config/booking.ts` — 予約ボタンは `BookingButtons` コンポーネントを使う

## 予約ボタンの方針

- URL は `src/config/booking.ts` の `BOOKING_URLS` に一括管理
- 日本語版: 自社予約（じゃらんエンジン）を主ボタン、他は副ピル
- 英語版: `primaryKey` prop で主ボタンを差し替え可能
- 「公式が最安」とは書かない（OTA均一規約のため）

## 写真の差し替え手順

1. `src/assets/images/<セクション>/` に WebP 形式で追加
2. `ImagePlaceholder` コンポーネントを `<Image>` に差し替え:

```astro
---
import { Image } from 'astro:assets';
import heroImg from '../../assets/images/hero/main.webp';
---
<Image src={heroImg} alt="..." width={960} height={640} loading="eager" />
```

3. `<Image>` は自動で WebP 変換・圧縮・遅延読み込みを行う

## デプロイ

- ビルド: `npm run build` → `dist/` に出力
- ローカル確認: `npm run dev`（http://localhost:4321）
- Cloudflare: `wrangler.toml` の `[assets]` で Workers 静的配信
- CI/CD: Cloudflare Pages の Git Integration でgit push → 自動ビルド・デプロイ
  - ビルドコマンド: `npm run build`
  - 出力ディレクトリ: `dist`
