SERIES.htmlcss = [
  {
    id: 'htmlcss-01',
    phase: '基礎編',
    title: 'HTMLの基礎',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者は h1 タグを使い、Webページに大見出しを1つ書く。</p>
<p>HTML は、Webページの文章に「これは見出し」「これは段落」という意味を付ける言語である。意味を付ける印をタグと呼ぶ。タグは <code>&lt;h1&gt;</code> のような開始タグと <code>&lt;/h1&gt;</code> のような終了タグで文字を囲む。</p>
<p>h1 はページで最も大きな見出しを表す。p は段落を表す。ブラウザは HTML を上から順に読み、タグの意味に合わせて文字を表示する。</p>
<pre>&lt;h1&gt;大見出し&lt;/h1&gt;
&lt;p&gt;段落の文章&lt;/p&gt;</pre>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>はじめてのページ</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>はじめてのWebページ</h1>
  <p>この段落は p タグで囲まれている。</p>
  <script src="game.js"></script>
</body>
</html>`,
    blank: '<h1>はじめてのWebページ</h1>',
    placeholder: '<!-- ここに h1 タグで大見出しが入る -->',
    token: /<h1>[^<]+<\/h1>/,
    hint: '<code>&lt;h1&gt;はじめてのWebページ&lt;/h1&gt;</code> のように、文字を開始タグと終了タグで囲む。',
    ctx: {
      css: `body { font-family: sans-serif; margin: 24px; line-height: 1.7; }`,
      js: ``
    }
  },
  {
    id: 'htmlcss-02',
    phase: '基礎編',
    title: 'CSSによるスタイリングの基礎',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は CSS で h1 の文字色を赤に変える。</p>
<p>CSS は、HTML の見た目を決める言語である。CSS の1つのまとまりをルールと呼ぶ。ルールは「セレクタ」と「宣言」からできている。セレクタは、どの要素に見た目を当てるかを指定する部分である。宣言は「プロパティ: 値;」の形で、何をどう変えるかを書く部分である。</p>
<pre>h1 {
  color: #e63946;
}</pre>
<p>上の例では、セレクタ h1 がすべての h1 要素を選び、color プロパティが文字色を #e63946（赤）にする。</p>`,
    code: `body {
  font-family: sans-serif;
  margin: 24px;
}

h1 {
  color: #e63946;
  font-size: 32px;
}

p {
  color: #333;
}`,
    blank: '  color: #e63946;',
    placeholder: '  /* 文字色を赤（#e63946）にする宣言が入る */',
    token: /h1\s*\{\s*color\s*:\s*#e63946\s*;/i,
    hint: 'h1 のルールの中に <code>color: #e63946;</code> と書く。最後のセミコロンも書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>CSSで色を付ける</h1>
  <p>見出しの色は CSS で決まる。</p>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'htmlcss-03',
    phase: '基礎編',
    title: 'Webページの基本構造（header・main・footer）',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者は main タグを書き、ページの本文の領域を作る。</p>
<p>多くのWebページは、上部のヘッダー、中央の本文、下部のフッターの3つの領域に分かれる。HTML にはこの領域を表す専用のタグがある。header はサイト名やメニューの領域、main はページの主な内容の領域、footer は著作権表示などの領域である。</p>
<p>このように意味を表すタグをセマンティック要素と呼ぶ。div と見た目は同じでも、セマンティック要素を使うと、検索エンジンや読み上げソフトがページの構造を正しく理解できる。main は1ページに1つ置く。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <p class="logo">My Site</p>
  </header>
  <main>
    <p>ここはページの主な内容の領域である。</p>
  </main>
  <footer>
    <small>&copy; 2026 My Site</small>
  </footer>
</body>
</html>`,
    blank: `  <main>
    <p>ここはページの主な内容の領域である。</p>
  </main>`,
    placeholder: '  <!-- ここに main タグで本文の領域が入る -->',
    token: /<main>[\s\S]*<\/main>/,
    hint: '<code>&lt;main&gt;</code> と <code>&lt;/main&gt;</code> の間に <code>&lt;p&gt;…&lt;/p&gt;</code> を1つ書く。',
    ctx: {
      css: `body { margin: 0; font-family: sans-serif; }
header { background: #264653; color: #fff; padding: 12px 20px; }
.logo { margin: 0; font-weight: bold; }
main { padding: 40px 20px; min-height: 160px; background: #f4f4f4; }
footer { background: #222; color: #ccc; padding: 12px 20px; text-align: center; }`,
      js: ``
    }
  },
  {
    id: 'htmlcss-04',
    phase: 'レイアウト・デザイン編',
    title: 'ランディングページの作成',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者はランディングページのヒーロー領域に、申し込みボタンのリンクを置く。</p>
<p>ランディングページは、1つの商品やサービスを紹介し、閲覧者に1つの行動（申し込みや購入）を促すページである。ページの最上部にある大きな領域をヒーローと呼ぶ。ヒーローには、キャッチコピー、短い説明、行動を促すボタンを並べる。</p>
<p>行動を促すボタンは CTA（Call To Action）と呼ばれる。HTML では a タグにクラスを付け、CSS でボタンの形に整える。href に <code>#signup</code> のような値を書くと、ページ内の id="signup" の位置へ移動するリンクになる。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <section class="hero">
    <h1>毎日5分で、英単語が身につく</h1>
    <p>通学の時間に使える単語学習アプリ</p>
    <a class="btn" href="#signup">無料で始める</a>
  </section>
  <section class="features">
    <h2>3つの特長</h2>
    <p>短い問題、音声付き、復習の通知。</p>
  </section>
  <section id="signup" class="signup">
    <h2>登録はこちら</h2>
  </section>
</body>
</html>`,
    blank: '    <a class="btn" href="#signup">無料で始める</a>',
    placeholder: '    <!-- ここに class="btn" のリンクが入る -->',
    token: /<a\s+class=["']btn["']\s+href=["']#signup["']\s*>[^<]+<\/a>/,
    hint: '<code>&lt;a class="btn" href="#signup"&gt;無料で始める&lt;/a&gt;</code> と書く。',
    ctx: {
      css: `body { margin: 0; font-family: sans-serif; text-align: center; }
.hero { padding: 80px 20px; background: linear-gradient(135deg, #2a9d8f, #264653); color: #fff; }
.hero h1 { font-size: 30px; margin: 0 0 12px; }
.btn { display: inline-block; margin-top: 20px; padding: 12px 28px; background: #e9c46a; color: #222; border-radius: 999px; text-decoration: none; font-weight: bold; }
.features, .signup { padding: 48px 20px; }
.signup { background: #f4f4f4; }`,
      js: ``
    }
  },
  {
    id: 'htmlcss-05',
    phase: 'レイアウト・デザイン編',
    title: 'レスポンシブデザイン（@media）',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は @media を書き、画面幅が 600px 以下のときにカードを縦に並べる。</p>
<p>レスポンシブデザインは、画面の幅に合わせてレイアウトを切り替える作り方である。スマートフォンとパソコンでは画面の幅が大きく異なるため、1つのレイアウトで両方に対応するにはこの考え方が役に立つ。</p>
<p>@media はメディアクエリと呼ばれ、条件に合うときに限り中のルールを適用する。<code>max-width: 600px</code> は「画面幅が 600px 以下」という条件である。プレビューの幅を狭くすると、カードの並び方が変わる。</p>
<pre>@media (max-width: 600px) {
  .cards { flex-direction: column; }
}</pre>`,
    code: `body {
  font-family: sans-serif;
  margin: 20px;
}

.cards {
  display: flex;
  gap: 16px;
}

.card {
  flex: 1;
  padding: 20px;
  background: #e9f5f3;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .cards { flex-direction: column; }
}`,
    blank: `@media (max-width: 600px) {
  .cards { flex-direction: column; }
}`,
    placeholder: '/* ここに画面幅 600px 以下で縦並びにするメディアクエリが入る */',
    token: /@media\s*\(\s*max-width\s*:\s*600px\s*\)\s*\{\s*\.cards\s*\{\s*flex-direction\s*:\s*column\s*;?\s*\}\s*\}/,
    hint: '<code>@media (max-width: 600px) {</code> の中に <code>.cards { flex-direction: column; }</code> を書き、最後に <code>}</code> で閉じる。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>おすすめプラン</h1>
  <div class="cards">
    <div class="card">ライト</div>
    <div class="card">スタンダード</div>
    <div class="card">プレミアム</div>
  </div>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'htmlcss-06',
    phase: 'レイアウト・デザイン編',
    title: 'Flexbox',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は Flexbox を使い、ナビゲーションのロゴとメニューを左右の端に分けて並べる。</p>
<p>Flexbox は、要素を横または縦の一列に並べるためのレイアウト方式である。親要素に <code>display: flex;</code> を書くと、その子要素が横一列に並ぶ。このとき親要素をフレックスコンテナ、子要素をフレックスアイテムと呼ぶ。</p>
<p>justify-content は、並ぶ向きに沿った配置を決めるプロパティである。値を space-between にすると、最初の要素は左端、最後の要素は右端に寄り、残りの余白は要素の間に均等に入る。</p>`,
    code: `body {
  margin: 0;
  font-family: sans-serif;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #264653;
  color: #fff;
}

.menu {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}`,
    blank: `  display: flex;
  justify-content: space-between;`,
    placeholder: '  /* フレックスコンテナにして、両端に寄せる2つの宣言が入る */',
    token: /\.nav\s*\{\s*display\s*:\s*flex\s*;\s*justify-content\s*:\s*space-between\s*;/,
    hint: '.nav の中に <code>display: flex;</code> と <code>justify-content: space-between;</code> をこの順に書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <nav class="nav">
    <strong>LOGO</strong>
    <ul class="menu">
      <li>ホーム</li>
      <li>料金</li>
      <li>お問い合わせ</li>
    </ul>
  </nav>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'htmlcss-07',
    phase: 'レイアウト・デザイン編',
    title: 'Grid',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は CSS Grid を使い、6枚の写真を3列の格子に並べる。</p>
<p>CSS Grid は、要素を行と列の格子（グリッド）に並べるレイアウト方式である。Flexbox が一列の並びを得意とするのに対し、Grid は縦と横の2方向を同時に整える用途に向く。</p>
<p>grid-template-columns は列の数と幅を決めるプロパティである。fr は「残りの幅を分け合う割合」を表す単位である。<code>repeat(3, 1fr)</code> は「同じ幅の列を3つ作る」という意味になる。gap は格子の間のすき間を決める。</p>`,
    code: `body {
  font-family: sans-serif;
  margin: 20px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.gallery img {
  width: 100%;
  border-radius: 6px;
}`,
    blank: '  grid-template-columns: repeat(3, 1fr);',
    placeholder: '  /* 同じ幅の列を3つ作る宣言が入る */',
    token: /grid-template-columns\s*:\s*repeat\(\s*3\s*,\s*1fr\s*\)\s*;/,
    hint: '<code>grid-template-columns: repeat(3, 1fr);</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>ギャラリー</h1>
  <div class="gallery">
    <img src="https://placehold.co/200x120?text=1" alt="写真1">
    <img src="https://placehold.co/200x120?text=2" alt="写真2">
    <img src="https://placehold.co/200x120?text=3" alt="写真3">
    <img src="https://placehold.co/200x120?text=4" alt="写真4">
    <img src="https://placehold.co/200x120?text=5" alt="写真5">
    <img src="https://placehold.co/200x120?text=6" alt="写真6">
  </div>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'htmlcss-08',
    phase: 'レイアウト・デザイン編',
    title: 'CSSアニメーション（@keyframes）',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は @keyframes で上下にふわりと動くアニメーションを定義し、ボールを動かす。</p>
<p>@keyframes は、アニメーションの途中の状態を定義する仕組みである。from が開始の状態、to が終了の状態を表す。ブラウザは2つの状態の間をなめらかにつなげて表示する。</p>
<p>定義したアニメーションは、animation プロパティで要素に割り当てる。<code>animation: float 1s ease-in-out infinite alternate;</code> は「float を1秒かけて実行し、無限にくり返し、往復させる」という意味である。</p>`,
    code: `body {
  font-family: sans-serif;
  display: grid;
  place-items: center;
  height: 240px;
}

.ball {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f4a261;
  animation: float 1s ease-in-out infinite alternate;
}

@keyframes float {
  from { transform: translateY(0); }
  to { transform: translateY(-40px); }
}`,
    blank: `  from { transform: translateY(0); }
  to { transform: translateY(-40px); }`,
    placeholder: '  /* 開始（from）と終了（to）の transform が入る */',
    token: /from\s*\{\s*transform\s*:\s*translateY\(\s*0(px)?\s*\)\s*;?\s*\}\s*to\s*\{\s*transform\s*:\s*translateY\(\s*-40px\s*\)\s*;?\s*\}/,
    hint: '<code>from { transform: translateY(0); }</code> と <code>to { transform: translateY(-40px); }</code> の2行を書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <div class="ball"></div>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'htmlcss-09',
    phase: 'レイアウト・デザイン編',
    title: 'CSS変数',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は CSS 変数 --main を使い、ボタンの背景色をテーマの色にそろえる。</p>
<p>CSS 変数（カスタムプロパティ）は、値に名前を付けて保存し、何度も使い回す仕組みである。名前は <code>--</code> で始める。<code>:root</code> はページ全体を表すセレクタで、ここに書いた変数はすべての要素から使える。</p>
<p>変数の値は <code>var(--main)</code> の形で読み出す。テーマの色を1か所にまとめると、:root の値を書き換えるのみでページ全体の色が一度に変わる。</p>`,
    code: `:root {
  --main: #2a9d8f;
  --radius: 8px;
}

body {
  font-family: sans-serif;
  margin: 24px;
}

h1 {
  color: var(--main);
}

.btn {
  padding: 10px 24px;
  border: none;
  color: #fff;
  background: var(--main);
  border-radius: var(--radius);
}`,
    blank: '  background: var(--main);',
    placeholder: '  /* 背景色に変数 --main の値を使う宣言が入る */',
    token: /\.btn\s*\{[^}]*background\s*:\s*var\(\s*--main\s*\)\s*;/,
    hint: '<code>background: var(--main);</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>テーマカラー</h1>
  <button class="btn">送信する</button>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'htmlcss-10',
    phase: 'レイアウト・デザイン編',
    title: '実践的なCSSのテクニック',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は :hover と transition を組み合わせ、カードにマウスを重ねると浮き上がる動きを作る。</p>
<p>実際のサイト制作では、いくつかの決まった書き方がくり返し使われる。<code>box-sizing: border-box;</code> は、枠線と内側の余白を含めて幅を計算させる指定である。この指定により、幅の計算が直感どおりになる。</p>
<p><code>:hover</code> は、マウスが要素の上にあるときの状態を選ぶ擬似クラスである。transition は、プロパティの変化にかける時間を決める。2つを組み合わせると、カードがなめらかに浮き上がる。</p>`,
    code: `* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 24px;
}

.card {
  width: 240px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}`,
    blank: `.card:hover {
  transform: translateY(-6px);`,
    placeholder: '/* ここに、マウスを重ねたときに上へ 6px 動かすルールの書き出しが入る */',
    token: /\.card:hover\s*\{\s*transform\s*:\s*translateY\(\s*-6px\s*\)\s*;/,
    hint: '<code>.card:hover {</code> の次の行に <code>transform: translateY(-6px);</code> を書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body style="background:#f1f3f5">
  <div class="card">
    <h2>カード</h2>
    <p>マウスを重ねると、このカードが浮き上がる。</p>
  </div>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'htmlcss-11',
    phase: 'レイアウト・デザイン編',
    title: 'ライブラリの活用',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者は CDN から CSS ライブラリ water.css を link タグで読み込み、ページ全体の見た目を整える。</p>
<p>CSS ライブラリは、ほかの開発者が作成した CSS をまとめたものである。CDN（コンテンツ配信ネットワーク）は、ライブラリのファイルをインターネット上で配布するサービスである。CDN の URL を link タグの href に書くと、ファイルを手元に保存する手間を省いて、すぐにライブラリを使える。</p>
<p>water.css は、クラスを付ける手間を省き、HTML のタグに直接きれいな見た目を当てるライブラリである。<code>@2</code> はバージョン2系を使うという指定である。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>ライブラリで整えたページ</h1>
  <p>見出し、段落、ボタン、入力欄に見た目が付く。</p>
  <input type="text" placeholder="名前">
  <button>送信</button>
</body>
</html>`,
    blank: '  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">',
    placeholder: '  <!-- ここに water.css を読み込む link タグが入る -->',
    token: /<link\s+rel=["']stylesheet["']\s+href=["']https:\/\/cdn\.jsdelivr\.net\/npm\/water\.css@2\/out\/water\.css["']\s*\/?>/,
    hint: '<code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"&gt;</code> と書く。',
    ctx: {
      css: `/* 自分の CSS はライブラリの後に読み込み、上書きに使う */
h1 { color: #2a9d8f; }`,
      js: ``
    }
  },
  {
    id: 'htmlcss-12',
    phase: '実践マークアップ編',
    title: 'フォームの作り方',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者はメールアドレスの入力欄を、必須項目として form の中に置く。</p>
<p>フォームは、閲覧者が文字を入力してサーバーへ送るための部品である。form タグで全体を囲み、中に input（入力欄）や button（送信ボタン）を置く。</p>
<p>input の type 属性は入力の種類を決める。<code>type="email"</code> にすると、ブラウザはメールアドレスの形かどうかを送信前に確かめる。<code>required</code> 属性を付けると、その欄は入力が必須になる。空のまま送信すると、ブラウザは入力を求めるメッセージを出す。label の for 属性に input の id を書くと、ラベルと入力欄が結び付く。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form class="form">
    <label for="name">お名前</label>
    <input type="text" id="name" name="name">
    <label for="email">メールアドレス</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">送信する</button>
  </form>
</body>
</html>`,
    blank: '    <input type="email" id="email" name="email" required>',
    placeholder: '    <!-- ここに必須のメールアドレス入力欄が入る -->',
    token: /<input\s+type=["']email["']\s+id=["']email["'][^>]*required/,
    hint: '<code>&lt;input type="email" id="email" name="email" required&gt;</code> と書く。',
    ctx: {
      css: `body { font-family: sans-serif; margin: 24px; }
.form { display: flex; flex-direction: column; gap: 8px; max-width: 320px; }
input { padding: 8px; border: 1px solid #aaa; border-radius: 4px; }
button { margin-top: 8px; padding: 10px; background: #2a9d8f; color: #fff; border: none; border-radius: 4px; }`,
      js: ``
    }
  },
  {
    id: 'htmlcss-13',
    phase: '実践マークアップ編',
    title: '実践的なHTMLのテクニック（details・figure）',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者は details と summary を使い、クリックで開閉するよくある質問の欄を作る。</p>
<p>HTML には、JavaScript を書く手間を省いて動きのある部品を作れるタグがある。details は、中身を折りたたんで表示する要素である。summary は、折りたたんだ状態でも見える見出しの部分である。summary をクリックすると、残りの内容が開く。</p>
<p>figure は、画像とその説明をひとまとまりにする要素である。figcaption がその説明文を表す。画像と説明の関係が HTML の構造として明確になる。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>よくある質問</h1>
  <details>
    <summary>送料はいくらか</summary>
    <p>全国一律 500 円である。</p>
  </details>
  <figure>
    <img src="https://placehold.co/300x160" alt="商品の写真">
    <figcaption>図1 商品の外観</figcaption>
  </figure>
</body>
</html>`,
    blank: '    <summary>送料はいくらか</summary>',
    placeholder: '    <!-- ここに summary タグで質問の見出しが入る -->',
    token: /<details>\s*<summary>[^<]+<\/summary>/,
    hint: 'details の直後に <code>&lt;summary&gt;送料はいくらか&lt;/summary&gt;</code> を書く。',
    ctx: {
      css: `body { font-family: sans-serif; margin: 24px; }
details { border: 1px solid #ccc; border-radius: 6px; padding: 8px 12px; margin-bottom: 20px; }
summary { cursor: pointer; font-weight: bold; }
figcaption { font-size: 14px; color: #555; }`,
      js: ``
    }
  },
  {
    id: 'htmlcss-14',
    phase: '実践マークアップ編',
    title: 'アクセシビリティとSEOを意識したマークアップ',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者は meta description を書き、検索結果に表示されるページの説明文を用意する。</p>
<p>アクセシビリティは、障がいの有無や利用環境の違いを越えて、だれもが情報を利用できる状態のことである。SEO（検索エンジン最適化）は、検索エンジンにページの内容を正しく伝え、検索結果で見つけてもらいやすくする工夫である。2つは共通する書き方が多い。</p>
<p>代表的な書き方は次のとおりである。img の alt に画像の内容を書く。input には label を結び付ける。見出しは h1、h2、h3 の順に階層を守る。head の中に <code>&lt;meta name="description" content="…"&gt;</code> を書き、ページの要約を示す。検索エンジンはこの要約を検索結果の説明文に使う。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>港町カフェ | 海の見える喫茶店</title>
  <meta name="description" content="港町カフェは海の見える喫茶店である。季節のケーキと自家焙煎のコーヒーを提供する。">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>港町カフェ</h1>
  <img src="https://placehold.co/400x200" alt="窓から海が見える店内の写真">
  <h2>メニュー</h2>
  <h3>ドリンク</h3>
  <p>自家焙煎のコーヒー</p>
</body>
</html>`,
    blank: '  <meta name="description" content="港町カフェは海の見える喫茶店である。季節のケーキと自家焙煎のコーヒーを提供する。">',
    placeholder: '  <!-- ここにページの要約を示す meta タグが入る -->',
    token: /<meta\s+name=["']description["']\s+content=["'][^"']+["']\s*\/?>/,
    hint: '<code>&lt;meta name="description" content="ページの要約"&gt;</code> の形で、content に説明文を書く。',
    ctx: {
      css: `body { font-family: sans-serif; margin: 24px; }
img { max-width: 100%; border-radius: 8px; }`,
      js: ``
    }
  },
  {
    id: 'htmlcss-15',
    phase: '実践マークアップ編',
    title: 'UIコンポーネントの実装（カード・ボタン・モーダル）',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者はボタンのクリックでモーダルに open クラスを付け、モーダルを表示する。</p>
<p>UI コンポーネントは、カード、ボタン、モーダルのように、画面でくり返し使う部品である。モーダルは、ページの上に重ねて表示する小さな窓である。ここでは CSS 側で「.modal は非表示、.modal.open は表示」と決めてある。</p>
<p>JavaScript の <code>classList.add('open')</code> は、要素に open クラスを追加する命令である。<code>classList.remove('open')</code> はクラスを取り除く。ブラウザはクラスの変化に合わせて CSS を当て直し、モーダルの表示と非表示が切り替わる。</p>`,
    code: `const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
  modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});`,
    blank: "  modal.classList.add('open');",
    placeholder: '  // ここに modal へ open クラスを追加する命令が入る',
    token: /modal\.classList\.add\(\s*["']open["']\s*\)/,
    hint: "<code>modal.classList.add('open');</code> と書く。",
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <div class="card">
    <img src="https://placehold.co/280x140" alt="イベントの写真">
    <h2>夏のワークショップ</h2>
    <p>8月10日に開催する。</p>
    <button id="openBtn" class="btn">詳細を見る</button>
  </div>
  <div id="modal" class="modal">
    <div class="modal-box">
      <p>会場は市民ホールである。参加費は 1000 円である。</p>
      <button id="closeBtn" class="btn">閉じる</button>
    </div>
  </div>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #f1f3f5; }
.card { width: 280px; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.15); }
.card img { width: 100%; display: block; }
.card h2, .card p { margin: 12px 16px; }
.btn { margin: 0 16px 16px; padding: 8px 20px; background: #e76f51; color: #fff; border: none; border-radius: 6px; cursor: pointer; }
.modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); place-items: center; }
.modal.open { display: grid; }
.modal-box { background: #fff; padding: 20px; border-radius: 10px; max-width: 260px; }
.modal-box .btn { margin: 0; }`
    }
  },
  {
    id: 'htmlcss-16',
    phase: '実践マークアップ編',
    title: 'Webサイトの模写',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者はヘッダー、ヒーロー、カード一覧からなるサイトを模写し、カード一覧を自動で折り返す格子にする。</p>
<p>模写は、実在のサイトの見た目を観察し、自分の HTML と CSS で再現する練習である。模写では、まずページを大きな領域に分け、次に各領域の並び方（Flexbox か Grid か）を決める。これまでに学んだ技術を組み合わせる良い練習になる。</p>
<p><code>repeat(auto-fit, minmax(180px, 1fr))</code> は、「1列の幅を最小 180px、最大 1fr とし、入る数の列を自動で作る」という指定である。この1行で、メディアクエリを書く手間を省いて列の数が画面幅に合わせて変わる。</p>`,
    code: `* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  background: #1d3557;
  color: #fff;
}

.hero {
  padding: 60px 20px;
  text-align: center;
  background: #a8dadc;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  padding: 24px 20px;
}

.item {
  padding: 16px;
  background: #f1faee;
  border-radius: 8px;
}`,
    blank: '  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));',
    placeholder: '  /* 最小 180px の列を自動の数で並べる宣言が入る */',
    token: /grid-template-columns\s*:\s*repeat\(\s*auto-fit\s*,\s*minmax\(\s*180px\s*,\s*1fr\s*\)\s*\)\s*;/,
    hint: '<code>grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));</code> と書く。かっこの数に注意する。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="style.css"></head>
<body>
  <header class="header"><strong>TRAVEL</strong><span>ログイン</span></header>
  <section class="hero">
    <h1>週末に行ける旅を探す</h1>
    <p>近場の名所を地域ごとに紹介する。</p>
  </section>
  <section class="list">
    <div class="item"><h3>鎌倉</h3><p>古都の寺社めぐり</p></div>
    <div class="item"><h3>箱根</h3><p>温泉と美術館</p></div>
    <div class="item"><h3>日光</h3><p>世界遺産の社寺</p></div>
    <div class="item"><h3>伊豆</h3><p>海の幸と海岸線</p></div>
  </section>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'htmlcss-17',
    phase: '実践マークアップ編',
    title: '開発者ツールによるデバッグ',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は console.log で要素の中身を出力し、開発者ツールを使ったデバッグの手順を確かめる。</p>
<p>デバッグは、プログラムやページの誤りを見つけて直す作業である。ブラウザには開発者ツールが備わっており、F12 キー（Mac では Command + Option + I）で開く。Elements パネルでは、ページ上の要素を右クリックして「検証」を選ぶと、その要素の HTML と当たっている CSS を確認できる。</p>
<p>Console パネルは、JavaScript の出力やエラーを表示する場所である。<code>console.log()</code> に値を渡すと、その値がコンソールに表示される。変数の中身を出力して確かめる方法は、最も基本的なデバッグの手段である。</p>`,
    code: `const title = document.querySelector('h1');
const items = document.querySelectorAll('li');

console.log('見出しの文字:', title.textContent);
console.log('リストの項目数:', items.length);

title.style.outline = '2px dashed #e63946';`,
    blank: "console.log('見出しの文字:', title.textContent);",
    placeholder: '// ここに見出しの文字（title.textContent）をコンソールへ出す命令が入る',
    token: /console\.log\([^)]*title\.textContent\s*\)/,
    hint: "<code>console.log('見出しの文字:', title.textContent);</code> と書く。",
    output: `見出しの文字: デバッグの練習
リストの項目数: 3`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>デバッグの練習</h1>
  <ul>
    <li>F12 で開発者ツールを開く</li>
    <li>要素を右クリックして検証する</li>
    <li>Console で値を確かめる</li>
  </ul>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; }
li { margin: 6px 0; }`
    }
  }
];

SERIES.jspattern = [
  {
    id: 'jspattern-01',
    phase: '代入の基本',
    title: '代入と再代入',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は変数 score に新しい値を再代入し、値が上書きされる様子を確かめる。</p>
<p>変数は、値に名前を付けて保存する箱である。<code>let score = 10;</code> は、score という箱を作り、10 を入れる命令である。このように値を入れることを代入と呼ぶ。<code>=</code> は「右の値を左の箱に入れる」という意味である。数学の「等しい」とは別の意味を持つ。</p>
<p>let で作った変数には、あとから別の値を入れ直せる。これを再代入と呼ぶ。再代入では let を省いて <code>score = 25;</code> と書く。古い値は消え、新しい値に置き換わる。</p>`,
    code: `let score = 10;
console.log('最初の score:', score);

score = 25;
console.log('再代入後の score:', score);`,
    blank: 'score = 25;',
    placeholder: '// ここに score へ 25 を再代入する文が入る',
    token: /^\s*score\s*=\s*25\s*;?/m,
    hint: 'let を省いて <code>score = 25;</code> と書く。',
    output: `最初の score: 10
再代入後の score: 25`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-02',
    phase: '代入の基本',
    title: '複合代入（+= -= *=）',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は複合代入 -= を使い、hp から 30 を引いた値を hp に入れ直す。</p>
<p>複合代入は、「今の値に計算をして、結果を同じ変数に入れ直す」操作を短く書く書き方である。<code>hp = hp - 30;</code> と <code>hp -= 30;</code> は同じ意味になる。</p>
<pre>hp += 20;  // hp = hp + 20 と同じ
hp -= 30;  // hp = hp - 30 と同じ
hp *= 2;   // hp = hp * 2 と同じ</pre>
<p>右辺の計算が先に行われ、その結果が左辺の変数に代入される。この順番は、すべての代入で共通である。</p>`,
    code: `let hp = 100;

hp += 20;
console.log('回復後:', hp);

hp -= 30;
console.log('ダメージ後:', hp);

hp *= 2;
console.log('2倍後:', hp);`,
    blank: 'hp -= 30;',
    placeholder: '// ここに hp から 30 を引く複合代入が入る',
    token: /hp\s*-=\s*30/,
    hint: '<code>hp -= 30;</code> と書く。',
    output: `回復後: 120
ダメージ後: 90
2倍後: 180`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-03',
    phase: '代入の基本',
    title: 'インクリメント',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者はインクリメント演算子 ++ を使い、count を1ずつ増やす。</p>
<p>インクリメントは、変数の値を1増やす操作である。<code>count++;</code> は <code>count += 1;</code> や <code>count = count + 1;</code> と同じ意味になる。値を1減らす操作はデクリメントと呼び、<code>count--;</code> と書く。</p>
<p>1ずつ増やす処理は、回数を数える場面や、次の番号へ進む場面でくり返し登場する。このため専用の短い書き方が用意されている。</p>`,
    code: `let count = 0;

count++;
console.log('1回目:', count);

count++;
console.log('2回目:', count);

count--;
console.log('1つ戻す:', count);`,
    blank: `count++;
console.log('2回目:', count);`,
    placeholder: `// ここに count を1増やす文と、2回目の値を出力する文が入る`,
    token: /count\+\+;?\s*console\.log\(\s*['"]2回目:['"]\s*,\s*count\s*\)/,
    hint: "<code>count++;</code> の次の行に <code>console.log('2回目:', count);</code> を書く。",
    output: `1回目: 1
2回目: 2
1つ戻す: 1`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-04',
    phase: '代入の基本',
    title: '2つの変数の値の入れ替え（分割代入）',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は分割代入を使い、変数 a と b の値を1行で入れ替える。</p>
<p>2つの変数の値を入れ替えるとき、<code>a = b; b = a;</code> と書くと、1行目で a の元の値が上書きされて消える。昔からの方法では、一時的な変数 tmp に a の値を退避させてから入れ替える。</p>
<pre>let tmp = a;
a = b;
b = tmp;</pre>
<p>分割代入は、配列の要素を複数の変数へ一度に代入する書き方である。<code>[a, b] = [b, a];</code> と書くと、右辺で元の値の組 [b, a] が先に作られ、それが a と b に順に入る。この1行で入れ替えが完了する。</p>`,
    code: `let a = 'りんご';
let b = 'みかん';
console.log('入れ替え前:', a, b);

[a, b] = [b, a];
console.log('入れ替え後:', a, b);`,
    blank: '[a, b] = [b, a];',
    placeholder: '// ここに分割代入で a と b を入れ替える文が入る',
    token: /\[\s*a\s*,\s*b\s*\]\s*=\s*\[\s*b\s*,\s*a\s*\]/,
    hint: '<code>[a, b] = [b, a];</code> と書く。',
    output: `入れ替え前: りんご みかん
入れ替え後: みかん りんご`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-05',
    phase: '繰り返しの基本',
    title: 'for文',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は for 文を書き、1から5までの数を順に出力する。</p>
<p>for 文は、条件が成り立つ間、処理をくり返す構文である。回数を数える変数を使い、決まった回数のくり返しを書く用途によく使われる。かっこの中は「初期化; 条件; 更新」の3つの部分に分かれる。</p>
<pre>for (let i = 1; i &lt;= 5; i++) {
  // くり返す処理
}</pre>
<p>この例では、まず i に 1 を代入する。次に条件 <code>i &lt;= 5</code> を確かめ、成り立てば中の処理を実行する。処理のあとで <code>i++</code> により i が1増える。条件が成り立つ限り、この流れが続く。前のレッスンのインクリメントが、ここで更新の部分に使われる。</p>`,
    code: `for (let i = 1; i <= 5; i++) {
  console.log(i + '回目');
}
console.log('くり返しが終了した');`,
    blank: 'for (let i = 1; i <= 5; i++) {',
    placeholder: '// ここに i を 1 から 5 まで1ずつ増やす for 文の1行目が入る',
    token: /for\s*\(\s*let\s+i\s*=\s*1\s*;\s*i\s*<=\s*5\s*;\s*i\+\+\s*\)\s*\{/,
    hint: '<code>for (let i = 1; i &lt;= 5; i++) {</code> と書く。',
    output: `1回目
2回目
3回目
4回目
5回目
くり返しが終了した`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-06',
    phase: '繰り返しの基本',
    title: 'while文',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は while 文を書き、所持金が 0 円より多い間、買い物をくり返す。</p>
<p>while 文は、かっこの中の条件が成り立つ間、処理をくり返す構文である。for 文と比べると、くり返す回数が前もって決まっている場面より、「ある状態になるまで続ける」場面に向く。</p>
<pre>while (条件) {
  // くり返す処理
}</pre>
<p>while 文では、中の処理で条件に関わる変数を必ず変化させる。変化させるのを忘れると、条件が成り立ち続け、くり返しが永遠に続く。このような状態を無限ループと呼ぶ。</p>`,
    code: `let money = 1000;
let count = 0;

while (money > 0) {
  money -= 300;
  count++;
}

console.log('買い物の回数:', count);
console.log('最後の所持金:', money);`,
    blank: 'while (money > 0) {',
    placeholder: '// ここに money が 0 より大きい間くり返す while 文の1行目が入る',
    token: /while\s*\(\s*money\s*>\s*0\s*\)\s*\{/,
    hint: '<code>while (money &gt; 0) {</code> と書く。',
    output: `買い物の回数: 4
最後の所持金: -200`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-07',
    phase: '繰り返しの基本',
    title: 'for...of と配列',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は for...of 文を使い、配列の要素を1つずつ取り出して出力する。</p>
<p>配列は、複数の値を順番に並べて1つにまとめたものである。<code>['赤', '青', '緑']</code> のように角かっこで囲み、要素をカンマで区切る。</p>
<p>for...of 文は、配列の要素を先頭から1つずつ取り出し、変数に代入して処理をくり返す構文である。番号 i を使う for 文と比べて、要素そのものを直接扱えるため、短く読みやすいコードになる。以降のレッスンでは、この形を集計の土台として使う。</p>`,
    code: `const colors = ['赤', '青', '緑'];

for (const color of colors) {
  console.log('色:', color);
}`,
    blank: 'for (const color of colors) {',
    placeholder: '// ここに colors の要素を color に1つずつ取り出す for...of 文の1行目が入る',
    token: /for\s*\(\s*(const|let)\s+color\s+of\s+colors\s*\)\s*\{/,
    hint: '<code>for (const color of colors) {</code> と書く。',
    output: `色: 赤
色: 青
色: 緑`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-08',
    phase: '集計のパターン',
    title: 'カウンタのパターン',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者はボタンが押された回数を変数で数え、その値を画面に表示する。</p>
<p>カウンタは、出来事が起きた回数を数える変数である。カウンタのパターンは次の3段階からなる。</p>
<pre>1. 準備：let clicks = 0;      （0 で初期化する）
2. 更新：clicks++;            （出来事のたびに1増やす）
3. 表示：要素.textContent = clicks;</pre>
<p>初期化は、くり返しやイベントの外側で1回行う。内側で初期化すると、毎回 0 に戻る。textContent は、要素の中の文字を表すプロパティである。ここに代入すると、画面の文字が書き換わる。</p>`,
    code: `let clicks = 0;
const button = document.getElementById('btn');
const display = document.getElementById('count');

button.addEventListener('click', () => {
  clicks++;
  display.textContent = clicks;
});`,
    blank: '  display.textContent = clicks;',
    placeholder: '  // ここに clicks の値を display の文字として代入する文が入る',
    token: /display\.textContent\s*=\s*clicks/,
    hint: '<code>display.textContent = clicks;</code> と書く。',
    output: `（ボタンを3回押すと、画面の数字が 3 になる）`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <p>押した回数：<span id="count">0</span></p>
  <button id="btn">押す</button>
  <script src="game.js"></script>
</body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }
#count { font-size: 32px; font-weight: bold; color: #2a9d8f; }
button { padding: 8px 24px; font-size: 16px; }`
    }
  },
  {
    id: 'jspattern-09',
    phase: '集計のパターン',
    title: '合計（累積）のパターン',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は for...of 文と += を組み合わせ、配列の値段の合計を求める。</p>
<p>合計のパターンは、カウンタのパターンとよく似た形をとる。違いは、1ずつ増やす代わりに、要素の値を足し込む点である。このように値を次々と足し合わせることを累積と呼ぶ。</p>
<pre>let total = 0;           // 準備
for (const p of prices) {
  total += p;            // 足し込む
}
console.log(total);      // くり返しの後で使う</pre>
<p>合計を入れる変数は、くり返しの前に 0 で初期化する。くり返しのたびに、total には「ここまでの合計」が入っている。</p>`,
    code: `const prices = [120, 300, 80, 500];
let total = 0;

for (const price of prices) {
  total += price;
}

console.log('合計金額:', total);`,
    blank: '  total += price;',
    placeholder: '  // ここに price を total に足し込む文が入る',
    token: /total\s*\+=\s*price|total\s*=\s*total\s*\+\s*price/,
    hint: '<code>total += price;</code> と書く。',
    output: `合計金額: 1000`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-10',
    phase: '集計のパターン',
    title: '最大値・最小値のパターン',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は配列の点数から最高点を求めるため、より大きな値が見つかったときに max を更新する。</p>
<p>最大値のパターンでは、まず配列の先頭の要素を「仮の最大値」として変数に入れる。次に残りの要素と順に比べ、仮の最大値より大きな要素が見つかったら、その値を代入して更新する。</p>
<pre>let max = scores[0];
for (const s of scores) {
  if (s &gt; max) {
    max = s;
  }
}</pre>
<p>最小値を求める場合は、比較の向きを逆にして <code>s &lt; min</code> と書く。初期値を 0 にすると、要素がすべて負の数の場合に誤った結果になる。このため初期値には先頭の要素を使う。</p>`,
    code: `const scores = [72, 88, 65, 91, 80];
let max = scores[0];
let min = scores[0];

for (const score of scores) {
  if (score > max) {
    max = score;
  }
  if (score < min) {
    min = score;
  }
}

console.log('最高点:', max);
console.log('最低点:', min);`,
    blank: `  if (score > max) {
    max = score;`,
    placeholder: '  // ここに score が max より大きいときに max を更新する if 文の前半が入る',
    token: /if\s*\(\s*score\s*>\s*max\s*\)\s*\{\s*max\s*=\s*score/,
    hint: '<code>if (score &gt; max) {</code> の次の行に <code>max = score;</code> を書く。',
    output: `最高点: 91
最低点: 65`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-11',
    phase: '集計のパターン',
    title: '条件付きの集計',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は if 文とカウンタを組み合わせ、60点以上の人数と、その人たちの合計点を求める。</p>
<p>条件付きの集計は、条件に合う要素に限って数えたり足したりするパターンである。くり返しの中に if 文を置き、条件が成り立つときに限りカウンタや合計を更新する。</p>
<pre>for (const s of scores) {
  if (s &gt;= 60) {
    passCount++;
    passTotal += s;
  }
}</pre>
<p>このパターンは、これまでのカウンタ、合計、if 文を組み合わせた形である。平均は「合計 ÷ 人数」で求められる。</p>`,
    code: `const scores = [45, 78, 60, 52, 90];
let passCount = 0;
let passTotal = 0;

for (const score of scores) {
  if (score >= 60) {
    passCount++;
    passTotal += score;
  }
}

console.log('合格者の人数:', passCount);
console.log('合格者の合計点:', passTotal);
console.log('合格者の平均点:', passTotal / passCount);`,
    blank: '  if (score >= 60) {',
    placeholder: '  // ここに score が 60 以上のときに限り実行する if 文の1行目が入る',
    token: /if\s*\(\s*score\s*>=\s*60\s*\)\s*\{/,
    hint: '<code>if (score &gt;= 60) {</code> と書く。',
    output: `合格者の人数: 3
合格者の合計点: 228
合格者の平均点: 76`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-12',
    phase: '配列のメソッド',
    title: 'map',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は map を使い、税抜き価格の配列から税込み価格の配列を作る。</p>
<p>map は、配列のすべての要素に同じ処理を行い、その結果を並べた新しい配列を返すメソッドである。メソッドは、値に付属する関数のことである。元の配列は元の値のまま残る。</p>
<pre>const 新しい配列 = 配列.map((要素) =&gt; 変換後の値);</pre>
<p>map は、「空の配列を用意し、for...of で1つずつ変換して push する」パターンを1行にまとめたものと考えられる。<code>(p) =&gt; p * 1.1</code> はアロー関数で、受け取った p を 1.1 倍した値を返す。</p>`,
    code: `const prices = [100, 250, 400];

const withTax = prices.map((p) => Math.round(p * 1.1));

console.log('税抜き:', prices);
console.log('税込み:', withTax);`,
    blank: 'const withTax = prices.map((p) => Math.round(p * 1.1));',
    placeholder: '// ここに prices の各要素を 1.1 倍して四捨五入した配列 withTax を作る文が入る',
    token: /const\s+withTax\s*=\s*prices\.map\(\s*\(?\s*p\s*\)?\s*=>\s*Math\.round\(\s*p\s*\*\s*1\.1\s*\)\s*\)/,
    hint: '<code>const withTax = prices.map((p) =&gt; Math.round(p * 1.1));</code> と書く。',
    output: `税抜き: [100, 250, 400]
税込み: [110, 275, 440]`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-13',
    phase: '配列のメソッド',
    title: 'filter',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は filter を使い、点数の配列から 80 点以上の点数を取り出した新しい配列を作る。</p>
<p>filter は、条件に合う要素を選び出し、新しい配列として返すメソッドである。渡した関数が true を返した要素が残り、false を返した要素は取り除かれる。</p>
<pre>const 選んだ配列 = 配列.filter((要素) =&gt; 条件);</pre>
<p>filter は、条件付きの集計で学んだ「for...of と if を組み合わせて条件に合う要素を集める」パターンを短くしたものである。結果の配列の length を見ると、条件に合う要素の数がわかる。</p>`,
    code: `const scores = [72, 88, 65, 91, 80];

const high = scores.filter((s) => s >= 80);

console.log('80点以上:', high);
console.log('人数:', high.length);`,
    blank: 'const high = scores.filter((s) => s >= 80);',
    placeholder: '// ここに scores から 80 以上の要素を選んだ配列 high を作る文が入る',
    token: /const\s+high\s*=\s*scores\.filter\(\s*\(?\s*s\s*\)?\s*=>\s*s\s*>=\s*80\s*\)/,
    hint: '<code>const high = scores.filter((s) =&gt; s &gt;= 80);</code> と書く。',
    output: `80点以上: [88, 91, 80]
人数: 3`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-14',
    phase: '配列のメソッド',
    title: 'reduce',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は reduce を使い、配列の値段の合計を1行で求める。</p>
<p>reduce は、配列の要素を順に1つの値へまとめていくメソッドである。渡す関数は2つの引数をとる。1つ目の acc（accumulator＝累積値）は「ここまでの結果」、2つ目は「今の要素」である。関数が返した値が、次の acc になる。</p>
<pre>const total = prices.reduce((acc, p) =&gt; acc + p, 0);</pre>
<p>最後の 0 は acc の初期値である。これは合計のパターンの <code>let total = 0;</code> にあたる。<code>acc + p</code> は <code>total += price;</code> にあたる。reduce は合計のパターンそのものを1つのメソッドにまとめた形である。</p>`,
    code: `const prices = [120, 300, 80, 500];

const total = prices.reduce((acc, p) => acc + p, 0);

console.log('合計金額:', total);`,
    blank: 'const total = prices.reduce((acc, p) => acc + p, 0);',
    placeholder: '// ここに reduce で prices の合計 total を求める文が入る',
    token: /const\s+total\s*=\s*prices\.reduce\(\s*\(\s*acc\s*,\s*p\s*\)\s*=>\s*acc\s*\+\s*p\s*,\s*0\s*\)/,
    hint: '<code>const total = prices.reduce((acc, p) =&gt; acc + p, 0);</code> と書く。',
    output: `合計金額: 1000`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body><p>結果はコンソールに表示される。</p><script src="game.js"></script></body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }`
    }
  },
  {
    id: 'jspattern-15',
    phase: '画面への出力',
    title: 'DOM への繰り返し出力',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は for...of 文で li 要素を作り、ul に1つずつ追加して画面にリストを表示する。</p>
<p>DOM（Document Object Model）は、ブラウザが HTML を JavaScript から操作できる形に表したものである。<code>document.createElement('li')</code> は新しい li 要素を作る命令である。作った直後の要素はまだ画面の外にある。</p>
<p><code>list.appendChild(li)</code> は、li を ul の最後の子要素として追加する命令である。追加した時点で、要素が画面に現れる。くり返しの中で「作る、文字を入れる、追加する」の3段階を行うと、配列の要素と同じ数のリストの項目ができる。</p>`,
    code: `const fruits = ['りんご', 'バナナ', 'ぶどう'];
const list = document.getElementById('list');

for (const fruit of fruits) {
  const li = document.createElement('li');
  li.textContent = fruit;
  list.appendChild(li);
}`,
    blank: '  list.appendChild(li);',
    placeholder: '  // ここに li を list の子要素として追加する命令が入る',
    token: /list\.appendChild\(\s*li\s*\)|list\.append\(\s*li\s*\)/,
    hint: '<code>list.appendChild(li);</code> と書く。',
    output: `（画面に「りんご」「バナナ」「ぶどう」の3項目のリストが表示される）`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>果物リスト</h1>
  <ul id="list"></ul>
  <script src="game.js"></script>
</body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }
#list li { padding: 6px 10px; margin: 4px 0; background: #e9f5f3; border-radius: 4px; list-style: none; }`
    }
  },
  {
    id: 'jspattern-16',
    phase: '画面への出力',
    title: 'JS で CSS 変数に値を代入する',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は setProperty を使い、スライダーの値を CSS 変数 --size に代入して、円の大きさを変える。</p>
<p>CSS 変数の値は、JavaScript からも書き換えられる。<code>element.style.setProperty('--size', '80px')</code> は、その要素の CSS 変数 --size に 80px を代入する命令である。CSS 側では <code>var(--size)</code> がこの値を読み出すため、見た目がすぐに変わる。</p>
<p>input イベントは、スライダーを動かすたびに発生するイベントである。slider.value は文字列なので、単位 px を連結して <code>slider.value + 'px'</code> とする。JavaScript は値の計算を担当し、CSS は見た目を担当する。この役割分担がこのパターンの考え方である。</p>`,
    code: `const slider = document.getElementById('slider');
const box = document.getElementById('box');

slider.addEventListener('input', () => {
  box.style.setProperty('--size', slider.value + 'px');
  console.log('--size:', slider.value + 'px');
});`,
    blank: "  box.style.setProperty('--size', slider.value + 'px');",
    placeholder: '  // ここに box の CSS 変数 --size へスライダーの値（px 付き）を代入する命令が入る',
    token: /box\.style\.setProperty\(\s*["']--size["']\s*,\s*slider\.value\s*\+\s*["']px["']\s*\)/,
    hint: "<code>box.style.setProperty('--size', slider.value + 'px');</code> と書く。",
    output: `（スライダーを動かすと円の大きさが変わり、コンソールに --size: 120px のように表示される）`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <input id="slider" type="range" min="20" max="200" value="60">
  <div id="box"></div>
  <script src="game.js"></script>
</body></html>`,
      css: `body { font-family: sans-serif; margin: 20px; }
#box {
  --size: 60px;
  width: var(--size);
  height: var(--size);
  margin-top: 16px;
  border-radius: 50%;
  background: #e76f51;
}`
    }
  }
];
