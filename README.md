# portfolio-2025

> Frontend Engineer（UI実装特化）への転身を半年で仕上げるポートフォリオ&実験場

## ゴール（2026-02 までに内定獲得）
- Next.js（App Router, TS）での実務クオリティUI実装
- WordPress “納品できる”最小テーマ（固定/投稿/CPT/問い合わせ）
- GSAP/Framer Motionでのリッチ演出（CLS/INP配慮）
- Figma→コードの再現性と速度（設計テンプレ＋a11y）

## マイルストン
- M1：JSモダン化＋CSS設計テンプレ（tokens/utils/components/layouts）
- M2：Next.js ミニサイト公開（Vercel）
- M3：WP最小テーマとデモ記事運用
- M4：アニメーション・デモ（GSAP/Framer Motion）
- M5：UIカタログ（Storybook or 自作）＋E2E少数
- M6：Capstone（Next.js＋WPの統合デモ）＋応募開始

## 今週タスク
- [ ] GitHubに `portfolio-2025` を作成し初回プッシュ
- [ ] jQuery→素のJSリライト（モーダル/タブ/アコーディオン）
- [ ] CSS設計テンプレ雛形配置（`projects/css-template`）
- [ ] `create-next-app` で雛形を作り `projects/next-starter` に配置→Vercelにデプロイ

## ディレクトリ構成（初期）
projects/
js-exercises/          # 素JS練習（モーダル/タブ/アコーディオン）
css-template/          # 設計テンプレ（tokens, utils, components, layouts）
next-starter/          # Next.js 雛形（後で作成）
docs/
checklist/             # a11y/パフォーマンス/レビュー観点など

## 使用技術
- HTML/CSS（設計：FLOCSS/BEM + CSSカスタムプロパティ）
- TypeScript, Next.js, GSAP, Framer Motion, WordPress
- Lint: ESLint + Prettier + Stylelint

## ライセンス
MIT