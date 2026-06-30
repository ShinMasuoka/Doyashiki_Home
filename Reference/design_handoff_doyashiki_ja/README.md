# Handoff: おさじの宿・堂屋敷 — トップページ（日本語版）

## Overview
岡山県・西粟倉村にある築300年の古民家宿「おさじの宿・堂屋敷」の公式サイト **トップページ（日本語版）** のデザインです。**モバイル優先**。狙いは「高級・ラグジュアリー」ではなく「本物・素朴・ゆったりした時間・自然体験」。国内の家族・グループ客向けに、川あそび・羽釜ごはん・囲炉裏・森といった自然体験を前面に出した、明るく活発なトーンです。

> 本パッケージは **日本語版のみ**。英語版（陰影トーン・Airbnbのみの予約導線）は別途。

## About the Design Files
このバンドル内のファイルは **HTMLで作られたデザインの参照（プロトタイプ）** です。意図した見た目・挙動を示すもので、そのまま本番コードにコピーする想定ではありません。タスクは、**このHTMLデザインを、ターゲットのコードベースの既存環境（React / Vue / Next.js など）と確立されたパターン・ライブラリを使って忠実に再現する**ことです。環境がまだ無い場合は、プロジェクトに最適なフレームワークを選んで実装してください。

`*.dc.html` は社内のプレビュー用ランタイム（`support.js`）に依存した「Design Component」形式です。本番では **このランタイムを持ち込む必要はありません** — マークアップ・インラインスタイル・文言・挙動を抽出し、ターゲット環境のコンポーネントとして組み直してください。テンプレート内の `{{ ... }}` は値の差し込み、`<sc-if>` は条件表示（FAQ開閉）、`onClick="{{ ... }}"` はイベントハンドラを表します。

## Fidelity
**High-fidelity (hifi)**。最終的な配色・タイポgrafィ・余白・インタラクションを含むピクセル単位のモックです。下記のトークン・寸法に従い、コードベースの既存ライブラリ/パターンで忠実に再現してください。写真は現状すべて **差し替え用プレースホルダー枠**（後述）です。

## 全体構成（縦1カラム・モバイル幅 max 480px 中央寄せ）
固定ヘッダー → ヒーロー → ヒーロー下サブ画像 → 導入文 → 体験（4ブロック）→ 予約 → FAQ → アクセス → フッター。ハンバーガーで全画面メニューオーバーレイ。

- ページコンテナ: `max-width:480px; margin:0 auto;` 背景 `#F8F4EA`、本文色 `#2F2A22`、`line-height:1.85`、`box-shadow:0 0 50px rgba(47,42,34,.22)`。
- フォント: 見出し＝**Zen Old Mincho**（明朝、weight 500–600）、本文＝**Zen Kaku Gothic New**（ゴシック、weight 400）。Google Fonts。

## Screens / Views

### 1. ヘッダー（sticky）
- レイアウト: `position:sticky; top:0; z-index:40;` 高さ自動、`padding:13px 18px`、`display:flex; justify-content:space-between; align-items:center`。背景 `rgba(255,253,247,.9)` + `backdrop-filter:blur(10px)`、下境界 `.5px solid rgba(47,42,34,.12)`。
- 左: ロゴテキスト「おさじの宿・堂屋敷」Zen Old Mincho 20px / weight 600 / `letter-spacing:.14em` / 色 `#2F2A22`、`#top` へのリンク。
- 右: 言語表示ピル「日本語 ｜ EN」（枠 `.5px solid #D8CDB4`、`border-radius:20px`、`padding:4px 11px`、12px。"EN" は `#B3A98F`）＋ ハンバーガー（3本線、幅 24/24/16px、太さ1.5px、色 `#2F2A22`、gap 5px）。タップでメニューオーバーレイを開く。
  - 注: 言語ピルは現状 **静的表示**。本番では `/ja`・`/en` の言語切替リンクとして実装。

### 2. ヒーロー（画像も動画も入る箱）
- レイアウト: `position:relative; height:84vh; min-height:560px; overflow:hidden;` 背景 `#e7edd8`。
- **画像/動画ボックス**: 現状は画像プレースホルダー（`image-slot`）を `position:absolute; inset:0` で全面配置し、ゆっくりズーム（Ken Burns）。
  - アニメ: `@keyframes kb { from{transform:scale(1.03)} to{transform:scale(1.14)} }`、`animation:kb 22s ease-out infinite alternate`。
  - **将来ドローン動画に差し替える前提**。本番は `<video>`（短尺10–20秒ループ・無音・自動再生・`playsinline`）に置換し、読み込み前/低速回線/モバイル用に **静止画フォールバック** を必ず用意。
- オーバーレイ: 上から下への暗転グラデ `linear-gradient(180deg, rgba(40,34,24,.06) 0%, rgba(40,34,24,.12) 45%, rgba(40,34,24,.62) 100%)`、`pointer-events:none`。
- ロゴ（白）: 右上 `top:16px; right:18px;` 52×52px、`filter:brightness(0) invert(1); opacity:.95`（`logo.png` を白く着色）。
- テキスト群（下寄せ、`padding:0 22px 30px`、色 `#FCF8EF`、登場アニメ `fadeUp 1.1s`）:
  - 小ラベル「おさじの宿・堂屋敷」11.5px / `letter-spacing:.3em` / weight 500 / `opacity:.92`。
  - 見出し `<h1>`「自然のなかで、暮らすように遊ぶ。」Zen Old Mincho 32px / weight 500 / `line-height:1.42` / `letter-spacing:.03em` / `text-shadow:0 2px 22px rgba(0,0,0,.42)`。
  - サブ「山間の村、築三百年の古民家を、一日一組で。／川で遊んで、火を囲んで、星を見上げて。」14px / `line-height:1.9` / `max-width:310px`。
- スクロール誘導: 最下中央「SCROLL」9.5px + 縦線（1×30px グラデ）、上下に揺れる `@keyframes bob`（`bob 2.4s ease-in-out infinite`）。

### 3. ヒーロー下サブ画像
- `background:#FFFDF7; padding:24px 22px 4px`。画像プレースホルダー1枚（角丸 radius 10、`aspect-ratio:3/2`、横幅100%）。

### 4. 導入文
- `background:#FFFDF7; padding:42px 26px 46px;` 下境界 `.5px solid rgba(47,42,34,.08)`。中央寄せコンテナ `max-width:360px`。
- 上部に飾り線 `width:32px; height:1px; background:<accent>; margin:0 auto 22px`。
- 本文（左寄せ、15px / `line-height:2.05` / 色 `#3F3A30`）2段落:
  - 「はじめまして、岡山県西粟倉村にある、おさじの宿・堂屋敷です。築三百年と言われる古民家を、一日一組で貸し切る宿です。派手なもてなしも、豪華な料理もありません。あるのは、川のせせらぎと、囲炉裏の火と、夜になると降ってくる星。」
  - 「あるゲストは、ここを「日本の原風景のような場所」と呼びました。」

### 5. 体験（EXPERIENCES）
- セクション `background:#FFFDF7`。見出しブロック中央寄せ（`padding:30px 22px 8px`）:
  - 小ラベル「EXPERIENCES」11px / `letter-spacing:.3em` / weight 600 / 色 `<accent>`。
  - `<h2>`「ここでの過ごし方」Zen Old Mincho 23px / weight 500 / `letter-spacing:.06em`。
- 4つの `<article>`（各 `padding:24px 22px`、間に `.5px solid rgba(47,42,34,.08)` の区切り。最後は区切りなし）。各 article 共通:
  - 画像プレースホルダー（角丸 radius 10、`aspect-ratio:3/2`、`margin-bottom:16px`）。**ただし体験2は縦2枚**（`display:flex; flex-direction:column; gap:10px`、各 `aspect-ratio:3/2`）。
  - `<h3>` Zen Old Mincho 20px / weight 600 / `letter-spacing:.05em`。
  - `<p>` 14px / `line-height:1.95` / 色 `#3F3A30`。
  - `<blockquote>` ゲストの声: `padding-left:12px; border-left:2px solid #6F9A3E;`（葉色）、Zen Old Mincho 13.5px / `line-height:1.75` / 色 `#5D6A3D`。中に「ご宿泊のお客様より」を `display:block; margin-top:4px;` Zen Kaku Gothic New 11px / 色 `#9AA07D`。
  - **内容**:
    1. 「川で、遊ぶ」— 宿の前には清流が流れています。冷たい水に歓声があがります。／引用「子どもたちは川遊びを楽しみに。宿の前の川で気軽に遊べました」
    2. 「縁側で、ひと休み」（画像2枚＝羽釜ごはん／縁側でスイカ）— 羽釜でごはんを炊いて、縁側でスイカ。山を眺めて、何もしない時間も、ごちそうです。／引用「羽釜のお米炊きを子どもにもさせてもらい、大人は大自然の中でお酒を」
    3. 「火を、囲む」— 夜は囲炉裏に火を入れて。炭の灯りだけで、語らって。いつもより少し、素直になれる時間。／引用「囲炉裏で火を囲むと、いつになく母も饒舌だった」
    4. 「森を体感する」— 西粟倉は、中国山地の山間の村。「若杉天然林」まで足を伸ばせば、森の散策を楽しめます。／引用「施設から車で10分ほどのところに原生林があり、森林浴ができた」

### 6. 予約（RESERVATION）
- `background:#EEF3E0`（淡い葉色パネル）、`padding:40px 26px 44px`、中央寄せ。
- 見出し「この夏、家族で。」Zen Old Mincho 19px / 色 `#3D4A26`。サブ「星空とほたるの季節も、ぜひ。」12.5px / 色 `#6C7553`。
- **主ボタン**（自社予約＝じゃらんエンジン想定）: `display:flex; justify-content:center; gap:9px;` 背景 `<accent>`、色 `#FFFDF7`、`padding:18px 22px; border-radius:8px; font-size:15.5px; weight 600;` 影 `0 8px 20px color-mix(in srgb,<accent> 34%,transparent)`。テキスト「▶ 公式予約ページで空室を見る」。
- 補助文「各サイトからもご予約いただけます」12px / `#7A7263`。
- **副リンク（OTA）**: ピル3つ（Airbnb / じゃらん / Tabilmo）。枠 `.5px solid rgba(47,42,34,.2)`、`border-radius:999px; padding:8px 16px; font-size:13px; 色 #3F3A30`。`display:flex; justify-content:center; gap:8px; flex-wrap:wrap`。
  - 注: 「公式が最安」とは書かない（OTA料金均一規約のため）。価格でなく"特典"で公式へ誘導する方針。

### 7. FAQ
- `background:#FFFDF7; padding:42px 24px 46px;` 上境界 `.5px solid rgba(47,42,34,.08)`。
- `<h2>`「よくあるご質問」Zen Old Mincho 22px / weight 500 / 中央。
- アコーディオン6件（`max-width:400px; margin:0 auto`）。各項目: 下境界 `.5px solid rgba(47,42,34,.1)`（最後はなし）。
  - 質問ボタン: `width:100%; display:flex; justify-content:space-between; align-items:center; padding:16px 0;` 14.5px / weight 500 / 色 `#2F2A22`。右端に開閉アイコン「+」18px / 色 `<accent>`。
  - 回答（開いた時のみ表示）: 13.5px / 色 `#5D564A` / `line-height:1.85` / `padding:0 0 16px`。
  - **挙動**: 単一開閉（アコーディオン、同時に開くのは1件。開いている項目を再タップで閉じる）。
  - 内容: ①食事は出ますか？→素泊まり、台所自由、買い出し相談可 ②何を持っていけばいい？→食材・飲みもの・虫対策 ③子ども連れでも大丈夫？→一棟貸切、川は大人付き添い ④電車だけで行けますか？→駅徒歩10分、送迎相談 ⑤虫は出ますか？→古民家ゆえ。特にカメムシ（村では「カメちゃん」）。引き取りの作法を案内 ⑥寒くない／暑くない？→夏夜は涼しい、冬は暖房あり。（各回答の正確な文面はHTML参照）

### 8. アクセス（ACCESS）
- `background:#F8F4EA; padding:42px 26px 44px`。見出しブロック中央（小ラベル「ACCESS」+ `<h2>`「アクセス」Zen Old Mincho 22px）。
- **地図カード**: 「堂屋敷駐車場」を開く外部リンク。`<a target="_blank">`、`height:180px`、背景 `#EEF0E4` + 斜めストライプ `repeating-linear-gradient(45deg, rgba(47,42,34,.025) 0 11px, transparent 11px 22px)`、角丸10。中央にピン（丸＋しずく型 `border-radius:50% 50% 50% 0; transform:rotate(-45deg)`、色 `<accent>`、内側に白丸）＋「堂屋敷 駐車場」（Zen Old Mincho 15px）＋「Googleマップで開く →」（12px / `#6F7D4A`）。
  - リンク先: `https://www.google.com/maps/search/?api=1&query=58MP%2BH9%20西粟倉村%20岡山県`（Plus Code `58MP+H9 西粟倉村、岡山県`）。
  - **本番推奨**: Google マップ「共有 → 地図を埋め込む」で発行される **pb形式の埋め込みURL** を使った live iframe に差し替えると登録ピンに確実に固定できる（`maps.google.com/maps?q=...&output=embed` は X-Frame で表示拒否されるため不可）。
- 情報2行（13.5px / `line-height:1.8` / 色 `#3F3A30`、ラベルは `<accent>` の Zen Old Mincho 15px / `min-width:2.4em`）:
  - 車: 鳥取道「西粟倉IC」より約5分。駐車場無料。山里ですが、ICから近く着きやすい立地です。
  - 電車: 「あわくら温泉駅」より徒歩約10分。送迎のご相談も承ります。

### 9. フッター
- `background:#FFFDF7; padding:20px 22px;` 上境界 `.5px solid rgba(47,42,34,.1)`、`display:flex; justify-content:space-between; align-items:center; font-size:11px; 色 #8A8170`。
- 左: ロゴ（黒）28×28px `filter:brightness(0)` ＋「おさじの宿・堂屋敷」Zen Old Mincho 14px / 色 `#5D564A` / `letter-spacing:.08em`（`display:flex; align-items:center; gap:9px`）。右: 「岡山県・西粟倉村」。

### 10. メニューオーバーレイ（全画面）
- ハンバーガーで開く。`position:fixed; inset:0; z-index:60; background:#2F2A22; color:#F8F4EA;` `display:flex; flex-direction:column;` 登場 `fadeUp .35s`。
- 上部: 「堂屋敷」Zen Old Mincho 19px ＋ 閉じる「×」26px。
- ナビ（中央寄せ、Zen Old Mincho 24px、各 `padding:11px 0`、右に連番 01–06 を 12px / `opacity:.4`）: トップ / この家のこと / 体験 / 客室 / アクセス / FAQ。リンクは該当アンカー（`#top`, `#experiences`, `#access`, `#faq`。「この家のこと」「客室」は未作成のため現状 `#`）。クリックで閉じる。
- 最下部: 主CTA「空室を見る・予約する」背景 `<accent>` / `border-radius:8px` / `padding:17px` / Zen Kaku Gothic New weight 600。

## Interactions & Behavior
- **メニュー開閉**: ハンバーガー→オーバーレイ表示、×またはナビ項目タップで閉じる。
- **FAQアコーディオン**: 単一展開（state は「開いているindex、なければ -1」）。同項目再タップで閉じる。
- **アンカースクロール**: `html { scroll-behavior:smooth }`。ヘッダーが sticky のため、本番では scroll-margin-top でアンカー位置を調整推奨。
- **アニメーション**: ヒーロー Ken Burns（`kb` 22s alternate）、テキスト登場 `fadeUp`（0.35–1.1s ease）、スクロール誘導 `bob`（2.4s）。
- **ヒーロー動画化**: `<video autoplay muted loop playsinline poster="<still>">` ＋ 静止画フォールバック。重い動画はモバイルを遅くするため軽量化必須。
- **画像の最適化**: 写真は予約の決め手。差し替え後は必ず軽量化（WebP等）してから載せる。縦長構図をスマホ基本に。

## State Management
- `menuOpen: boolean` — メニューオーバーレイの表示。
- `faqOpen: number` — 開いているFAQのindex（-1で全閉）。
- 言語（`ja`/`en`）— 本番では `/ja`・`/en` ルーティングで管理（このファイルは ja 単体）。

## Design Tokens
**配色（明るい家族・自然体験トーン）**
- ベース背景: `#F8F4EA` / パネル白: `#FFFDF7` / 体験下地: `#FFFDF7`
- 予約パネル（淡葉）: `#EEF3E0` / 地図下地: `#EEF0E4`
- 本文: `#2F2A22` / 副本文: `#3F3A30` / 弱: `#5D564A` / さらに弱: `#8A8170`・`#7A7263`
- 差し色（スイカの赤＝デフォルトaccent）: `#E0563B`（他候補: 柿渋 `#C16A35` / 葉色 `#6F9A3E`）
- 葉色（引用罫・予約パネル文字）: `#6F9A3E` / `#5D6A3D` / `#3D4A26` / `#6C7553` / `#9AA07D`
- ヒーロー文字: `#FCF8EF` / メニュー地: `#2F2A22` 文字 `#F8F4EA`
- 境界線: `rgba(47,42,34,.08–.2)`

**タイポグラフィ**
- 見出し: Zen Old Mincho（500/600）。H1 32 / H2 22–23 / H3 20 / ロゴ 20。
- 本文: Zen Kaku Gothic New（400/500）。本文 14–15 / 補助 11–13.5。
- 主な letter-spacing: ロゴ `.14em` / 小ラベル `.3em` / 見出し `.05–.06em`。

**角丸 / 影**
- 角丸: ボタン・カード 8、画像 10、ピル 999、ピン特殊形状。
- 影: ページ `0 0 50px rgba(47,42,34,.22)`、主ボタン `0 8px 20px color-mix(...accent 34%)`、ピン `0 6px 14px rgba(47,42,34,.18)`。

**コンテナ / 余白**
- ページ幅 `max-width:480px`。セクション左右パディング 22–28px、上下 30–46px。

**アニメーション**
- `kb`: scale 1.03→1.14、22s ease-out alternate。
- `fadeUp`: opacity 0→1 + translateY 14px→0。
- `bob`: translateY 0→7→0、2.4s。

## Assets
- `logo.png` — おさじロゴ（透過PNG 2380×2380、黒シルエット）。ヒーロー右上は白く着色（`brightness(0) invert(1)`）、フッターは黒（`brightness(0)`）。
- 写真は **すべて差し替え用プレースホルダー**（`image-slot`、ラベル付き）。本番では実写真に差し替え。スロット一覧:
  - ヒーロー（全面・将来は動画）／ヒーロー下サブ（3:2）
  - 体験: 川あそび（3:2）／羽釜ごはん（3:2）＋縁側スイカ（3:2）／囲炉裏（3:2）／若杉天然林（3:2）
- フォント: Google Fonts「Zen Old Mincho」「Zen Kaku Gothic New」。

## Files
- `堂屋敷トップページ.dc.html` — 日本語版トップページのデザイン本体（マークアップ＋インラインスタイル＋ロジック）。**実装時の最優先参照**。
- `logo.png` — ロゴ画像。
- `image-slot.js` / `support.js` — プレビュー用ランタイム（**参考のみ。本番には不要**）。画像プレースホルダーの挙動を理解するための参照。

## 注意（方針メモ）
- トーンは「高級」ではなく「本物・素朴・体験・ゆったりした時間」。みすぼらしさ・不便さは売りにしない。
- 「この家のこと」では不便を正直に、でも笑って（店なし＝買い出し相談／虫＝カメちゃん／自然の影響）。
- 区切りは基本直線。要所で1〜2回だけ非直線（波・手描き風）を許容。
- 背景の地紋は今回入れず、後から薄い層（5–8%）として追加できる余白を意識。
- 英語版（陰影トーン・Airbnbのみ）は別管理。本ハンドオフは **日本語版のみ**。
