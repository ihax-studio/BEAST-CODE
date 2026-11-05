# BEAST CODE — 作って学ぶプログラミング

index.html 1ファイルで動く学習アプリ。ページの移動（リダイレクト）は行わない。
スマートフォン・タブレット・パソコンのすべてで同じ index.html を開く。

## 学習の流れ
1. 起動時に OS（Windows / Mac）を選ぶ。
2. 「作るものを選ぶ」画面で、上のタブ（作品・HTML/CSS・JavaScript・React・TypeScript・3D・Python・Go・Java・C#・PHP・SQL・Swift・Node.js・Git・OS）から
   言語を選び、コースを1つ選ぶ。すべてのコースは無料。
3. 「作品」のコースは次の順に進む。
   基礎（プログラムとは何か）→ 環境構築（VS Code のインストール → フォルダを開く → 3つのファイルのつなぎ方）
   → HTML → CSS → JavaScript（console.log・変数・オブジェクト・関数・イベント）→ 各作品
   作品：シンプルなホームページ／ボタンと触覚（iOS）／加速度で影を動かす（JS→CSS 変数）／
         Claude水鶏クイナ（3D）／2Dアクション／3Dアクション／FPS／CSS特訓
4. 修了すると「マイアプリ」（Dock・タスクバー・スタートメニュー）に作品が追加される。
   作品は ▶ 起動（全画面）・新しいタブ・保存（単独で動く1つの HTML ファイル）の3つの方法で使える。

## 説明文の書き方
- 各手順の最初の1文は「学習者は〜する。」の形で、行う作業を結論として先に書く。
- である調。否定形（ない・ません 等）と「だけ」は使わない。

## 言語別シリーズ（答え合わせで自動検証）
- 教材データは courses/*.js にあり、tools/build_series.py で index.html の SERIES ブロックへ埋め込む。
    python3 tools/build_series.py
- 実行方法（レッスンの run）
  web    : HTML/CSS/JS をプレビューで実行
  react  : vendor/ の React 18 と Babel で JSX / TSX を実行
  ts     : Babel で型を取り除いて実行
  sql    : vendor/ の sql.js（SQLite）で実行し、結果を表で表示
  python : Pyodide（CDN）で実行
  static : 実行結果の見本を表示（Swift・Go・Java・C#・PHP・Git・OS など）
- 判定はレッスンごとの正規表現（token）で行う。

## ファイル構成
index.html            本体（全ロジック・全教材を内蔵）
courses/*.js          シリーズ教材の元データ（ビルドで index.html に埋め込む）
tools/build_series.py 教材の埋め込みスクリプト
vendor/               three.min.js・React・ReactDOM・Babel・sql.js（ライセンスは vendor/LICENSES.txt）
assets/ sounds/       アイコン・壁紙・効果音
mobile.html           穴埋め式クイズ（App Store アイコンから開く）
sw.js                 オフライン対応

## 公開
フォルダごと Netlify などの静的ホスティングに置く。
