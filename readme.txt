# BEAST CODE v5.0.0 — 3Dゲームをつくって学ぶ（Progate風コードプレビュー）

旧「BEASTクイズ」を撤去し、コードを書いて即プレビューで確認しながら
3Dゲーム/CSSを完成させる学習アプリ。Mac/Windows両対応のOS風シェル。

## OS（Windows / Mac）
- 起動時に OS を選択（途中でも 設定・スタート・Appleメニュー から切替OK）。
- Mac＝メニューバー(クリックでドロップダウン)＋Dock＋信号機ボタン＋角丸窓。
  Appleメニュー＝この Mac について/システム設定/起動ディスク/強制終了/再起動/システム終了（⌥でシステム情報）。
- Windows＝メニューバー無し＋タスクバー＋スタートメニュー(おすすめ/起動ディスク左/電源⏻右)＋角張った窓＋Edge＋雲壁紙。
  電源⏻→再起動/シャットダウン。再起動→起動ディスク。

## 見た目・ウィンドウ操作
- vscode.dev風エディタ（信号機/サイドバー/タブ/行番号/シンタックスハイライト）
- タイトルバーで自由に移動。INPUT(エディタ)↔OUTPUT(プレビュー)境界をドラッグして幅調節。
- 上端へドラッグ＝枠プレビュー→離して最大化(0.3s)、最大化中に下へ＝元サイズ。
- 信号機 🔴=シェード(バーだけ) / 🟡=コードへ / 🟢=最大化。Win ×=閉じる(scale縮小)。
- システム設定（macOS設定風）：一般/外観・OS/サウンド(効果音ON/OFF)/壁紙/リセット。
  リセット＝スライドで全消去（スライダ）→最初のOS選択へ。進捗は同期コードでコピペ移行可。
- 再起動＝起動画面（Mac:ロゴ+プログレス / Win:回転スピナー+ロゴ＋起動音）→拡大表示。
- スマホ(iOS)は下部セグメント [説明 / コード / プレビュー]（縦横OK・ウィンドウ操作は自動無効）。

## 学習の流れ（フェーズ）
0. 起動時に「どの3Dゲームを作る？」プランを選んで開始（→ウィンドウ全画面）。あとで切替OK。
1. 環境構築：Google風UI→vscode.dev へ自動アクセスするアニメ（iPad風・インストール不要）→ 3ファイル
2. タイトル：ランダム配色（🎲）で個性的なゲームタイトル
3. HTML：ボタン設置
4. CSS：body・ボタンのスタイル決め
5. JavaScript：変数・関数・イベント・コンソール
6. Three.js：Scene/Camera/Renderer → 箱を表示 → ループで回す
7. ★ キーで動かす！「初めて自分のコードで動かせた！」← 最大の山場（紙吹雪＋音）
8. 選んだものを「土台 → 動かす → 完成」で作る（ゲーム完成版は実プレイ可）
   - 🐦 Claude水鶏クイナ（3D・コイン集め）/ 🍄 マリオ系 2D（Canvas）
   - 🧱 マリオ系 3D（足場ジャンプ）/ 🎯 FPS シューター（一人称・射撃）
   - 🎨 CSS特訓（CSSだけでマリオ風UI：影/角丸/transition を超ていねいに）

## 問題と答え（INPUT/OUTPUT）
- 各レッスンは「問題＝穴埋めコード(INPUT)」と「結果(OUTPUT)」を左右に分離。
- ヒント＝考え方のみ。別ボタン「✅ 答え」で解答コードを表示し「このコードを入れる」で投入可能。

## 操作
- PC：矢印キー / WASD、Space＝ジャンプ、FPSはクリックで視点ロック＋クリックで発射
- スマホ：画面の十字パッド＋JUMP/FIRE、FPSは右側ドラッグで視点
- プレビュー右上 ⛶ で全画面プレイ

## ファイル構成
/
├── index.html              ← 本体（単一HTML・全ロジック内蔵）
├── manifest.webmanifest
├── sw.js                   ← オフライン対応（assets/vendor をプリキャッシュ）
├── icon-192.png / icon-512.png / apple-touch-icon.png
├── vendor/
│   └── three.min.js        ← Three.js r128（同梱・オフライン動作）
└── assets/                 ← 抽出メディアから採用（macOSアイコン/壁紙/効果音）
    ├── wallpaper.jpg
    ├── safari.png settings.png photos.png news.png appstore.png facetime.png
    │   clock.png camera.png calendar.png contacts.png mail.png arcade.png
    │   controller.png gamecenter.png html.png
    └── tap.wav run.wav correct.wav clear.wav move.wav error.wav complete.caf fanfare.caf

※ アイコン/壁紙/効果音は ~/Desktop/抽出メディア の画像・音声を採用（CgBI iOS PNGは標準PNGへ再エンコード済）。
※ コイン/ジャンプ等のゲーム内SEはWebAudioで生成。

## 公開
Netlify Drop（https://app.netlify.com/drop）にフォルダごとドラッグ。
（vendor/three.min.js を同梱しているのでCDN不要・オフラインでも動作）

## 進捗
ブラウザの localStorage に保存。Dock左の ⟳（または設定）でリセット可能。
