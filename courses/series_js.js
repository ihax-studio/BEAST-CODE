SERIES.webintro = [
  {
    id: 'webintro-01',
    phase: 'Web 開発の全体像',
    title: 'Web 開発の全体像',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者は HTML・CSS・JavaScript の3つの役割を知り、ページに大見出しを1つ書く。</p>
<p>Web ページは、ブラウザ（Chrome や Safari など）が3種類のファイルを読み込んで表示する文書である。HTML はページの文章と構造を、CSS は色や配置などの見た目を、JavaScript はクリックへの反応などの動きを受け持つ。Web 開発は、この3つを組み合わせて画面を作る作業である。</p>
<p>作ったファイルをインターネット上のサーバーに置くと、世界中の人がページを閲覧できる。サーバーは、ブラウザの求めに応じてファイルを送り返すコンピュータである。このレッスンの右側のプレビューは、エディタの3つのファイルを組み合わせた結果を表示する。ボタンを押すと、JavaScript がプレビューの下のコンソールに文字を出す。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ゲーム制作部</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>ゲーム制作部へようこそ</h1>
  <p>この部では、ブラウザで遊べるゲームを作る。</p>
  <button id="hello">あいさつ</button>
  <script src="game.js"></script>
</body>
</html>`,
    blank: '  <h1>ゲーム制作部へようこそ</h1>',
    placeholder: '  <!-- ここに h1 タグの大見出しが入る -->',
    token: /<h1>[^<]+<\/h1>/,
    hint: '<code>&lt;h1&gt;ゲーム制作部へようこそ&lt;/h1&gt;</code> と書く。h1 は大見出しを表すタグである。',
    ctx: {
      css: `body { font-family: sans-serif; margin: 24px; line-height: 1.7; }
h1 { color: #264653; }
button { padding: 8px 18px; border: none; border-radius: 6px; background: #e76f51; color: #fff; cursor: pointer; }`,
      js: `document.querySelector('#hello').addEventListener('click', () => {
  console.log('JavaScript がボタンのクリックに反応した。');
});`
    }
  },
  {
    id: 'webintro-02',
    phase: 'HTML と CSS',
    title: 'Web ページの作成（基本タグ・文字の装飾）',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者は strong タグで文の一部を強調し、見出し・段落・リスト・リンク・画像を持つ紹介ページを作る。</p>
<p>タグは、文字を <code>&lt;タグ名&gt;</code> と <code>&lt;/タグ名&gt;</code> で囲み、その文字に意味を与える印である。h2 は中見出し、p は段落、ul と li は箇条書き、a はリンク、img は画像を表す。a の href 属性にはリンク先の URL を書く。img は開始タグのみで完結し、src 属性に画像の場所、alt 属性に画像の説明を書く。</p>
<p>文字の装飾にもタグを使う。strong は強い重要性を表し、ブラウザは太字で表示する。em は強調を表し、ブラウザは斜体で表示する。色や大きさの変更は CSS の役割であり、HTML のタグは文字の意味を示す。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>ゲーム制作部</h1>
  <img src="https://placehold.co/320x120/264653/ffffff?text=GAME+CLUB" alt="部のロゴ">
  <h2>活動内容</h2>
  <p>部員は毎週金曜日に集まり、<strong>ブラウザで遊べるゲーム</strong>を作る。</p>
  <ul>
    <li>アクションゲーム</li>
    <li>パズルゲーム</li>
    <li><em>3D</em> の迷路ゲーム</li>
  </ul>
  <p><a href="https://developer.mozilla.org/ja/">MDN（Web 技術の資料）</a></p>
</body>
</html>`,
    blank: '  <p>部員は毎週金曜日に集まり、<strong>ブラウザで遊べるゲーム</strong>を作る。</p>',
    placeholder: '  <!-- ここに strong タグで一部を強調した段落が入る -->',
    token: /<p>[^<]*<strong>[^<]+<\/strong>[^<]*<\/p>/,
    hint: '段落の中の「ブラウザで遊べるゲーム」を <code>&lt;strong&gt;</code> と <code>&lt;/strong&gt;</code> で囲む。<code>&lt;p&gt;部員は毎週金曜日に集まり、&lt;strong&gt;ブラウザで遊べるゲーム&lt;/strong&gt;を作る。&lt;/p&gt;</code>',
    ctx: {
      css: `body { font-family: sans-serif; margin: 24px; line-height: 1.7; }
h1 { color: #264653; }
img { display: block; max-width: 100%; border-radius: 8px; }
strong { color: #e76f51; }`,
      js: ``
    }
  },
  {
    id: 'webintro-03',
    phase: 'HTML と CSS',
    title: 'Web ページの構造（ページ構造・余白の調整）',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は header・main・footer で分けたページに、padding と margin で余白を付ける。</p>
<p>多くの Web ページは、上部の header、中央の main、下部の footer の3つの領域からなる。header はサイト名、main は主な内容、footer は著作権表示などを収める。このように意味を表すタグで領域を分けると、検索エンジンや読み上げソフトがページの構造を理解しやすくなる。</p>
<p>CSS では、すべての要素が四角い箱として扱われる。この考え方をボックスモデルと呼ぶ。padding は箱の内側の余白であり、枠と中身の間を空ける。margin は箱の外側の余白であり、隣の要素との間を空ける。<code>padding: 16px 24px;</code> のように値を2つ書くと、1つ目が上下、2つ目が左右の余白になる。<code>margin-bottom</code> は下側に限った外側の余白である。</p>`,
    code: `body {
  margin: 0;
  font-family: sans-serif;
  background: #f4f6f8;
}

header {
  background: #264653;
  color: #ffffff;
  padding: 16px 24px;
}

header h1 {
  margin: 0;
  font-size: 22px;
}

main {
  padding: 24px;
}

.box {
  background: #ffffff;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
}

footer {
  background: #222222;
  color: #cccccc;
  padding: 12px 24px;
  text-align: center;
}`,
    blank: `  margin-bottom: 16px;
  padding: 16px;`,
    placeholder: '  /* ここに外側の下の余白 16px と内側の余白 16px の宣言が入る */',
    token: /\.box\s*\{[^}]*margin-bottom\s*:\s*16px\s*;\s*padding\s*:\s*16px\s*;/,
    hint: '.box のルールに <code>margin-bottom: 16px;</code> と <code>padding: 16px;</code> の2行を書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <header><h1>ゲーム制作部</h1></header>
  <main>
    <div class="box"><h2>活動内容</h2><p>部員はブラウザで遊べるゲームを作る。</p></div>
    <div class="box"><h2>作品</h2><p>迷路ゲームとカードゲームを公開している。</p></div>
  </main>
  <footer><small>&copy; 2026 ゲーム制作部</small></footer>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'webintro-04',
    phase: 'HTML と CSS',
    title: 'レイアウトの幅を広げる',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は max-width と margin: 0 auto を使い、本文の幅を画面に合わせて広げ、中央にそろえる。</p>
<p>width は要素の幅を決めるプロパティである。<code>width: 480px;</code> のように固定の値を書くと、大きな画面では左側に細い列が残り、右側が大きく空いた状態になる。</p>
<p>幅を広げるには、width を 100% にし、max-width で上限を決める。max-width は要素の幅の最大値である。この指定で、要素は狭い画面では画面いっぱいに広がり、広い画面では 960px で止まる。さらに <code>margin: 0 auto;</code> を書くと、ブラウザは左右の余白を自動で等しく割り振り、要素を中央に置く。<code>box-sizing: border-box;</code> は、width に padding を含めて幅を計算する指定である。</p>`,
    code: `body {
  margin: 0;
  font-family: sans-serif;
  background: #f4f6f8;
}

header {
  background: #264653;
  color: #ffffff;
  padding: 16px 24px;
}

header h1 {
  margin: 0;
  font-size: 22px;
}

.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
}

.box {
  background: #ffffff;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
}`,
    blank: `  max-width: 960px;
  margin: 0 auto;`,
    placeholder: '  /* ここに幅の上限 960px と、左右の余白を自動にして中央に置く宣言が入る */',
    token: /max-width\s*:\s*960px\s*;\s*margin\s*:\s*0\s+auto\s*;/,
    hint: '.container のルールに <code>max-width: 960px;</code> と <code>margin: 0 auto;</code> の2行を書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <header><h1>ゲーム制作部</h1></header>
  <main class="container">
    <div class="box"><h2>活動内容</h2><p>部員はブラウザで遊べるゲームを作る。毎週金曜日に部室に集まり、企画からテストまでを分担して進める。</p></div>
    <div class="box"><h2>作品</h2><p>迷路ゲームとカードゲームを公開している。</p></div>
  </main>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'webintro-05',
    phase: 'JavaScript の基礎',
    title: 'JavaScript の開始',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は console.log を使い、コンソールに文字と計算の結果を表示する。</p>
<p>JavaScript は、ブラウザの中で動くプログラミング言語である。HTML に <code>&lt;script src="game.js"&gt;&lt;/script&gt;</code> と書くと、ブラウザは game.js を読み込み、上から順に命令を実行する。</p>
<p>console.log は、かっこの中の値をコンソールに表示する命令である。コンソールは、プログラムの出力やエラーを確認する画面である。文字列（文字の並び）は <code>'</code> または <code>"</code> で囲む。数値はそのまま書き、計算の結果を表示できる。命令の終わりにはセミコロン <code>;</code> を書く。<code>//</code> から行末まではコメントであり、ブラウザは実行の際にこの部分を読み飛ばす。</p>`,
    code: `// コンソールに文字列を表示する
console.log('こんにちは、JavaScript');

// 数値の計算の結果を表示する
console.log(3 + 5);
console.log(12 * 4);`,
    blank: `console.log('こんにちは、JavaScript');`,
    placeholder: '// ここに文字列をコンソールへ表示する命令が入る',
    token: /console\.log\(\s*["'][^"']+["']\s*\)/,
    hint: `<code>console.log('こんにちは、JavaScript');</code> と書く。文字列は引用符で囲む。`,
    output: `こんにちは、JavaScript
8
48`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>JavaScript の練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; }`
    }
  },
  {
    id: 'webintro-06',
    phase: 'JavaScript の基礎',
    title: 'JavaScript の基本',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は変数と if 文を使い、主人公の HP に応じて表示を変える。</p>
<p>変数は、値に名前を付けて保存する箱である。<code>let</code> で作った変数は後から値を変更でき、<code>const</code> で作った定数は値が固定される。文字列と変数は <code>+</code> でつなげる。</p>
<p>if 文は、条件が正しい（true）ときに限り <code>{ }</code> の中を実行する文である。<code>else</code> の中は、条件が誤り（false）のときに実行される。比較には <code>&gt;=</code>（以上）や <code>===</code>（等しい）などの比較演算子を使う。</p>`,
    code: `const heroName = 'アレン';
let hp = 100;

console.log(heroName + 'の HP は ' + hp);

// ダメージを受けて HP が減る
hp = hp - 70;
console.log('ダメージ後の HP は ' + hp);

if (hp >= 50) {
  console.log('まだ元気である。');
} else {
  console.log('回復が必要である。');
}`,
    blank: 'if (hp >= 50) {',
    placeholder: '// ここに「HP が 50 以上」の条件で始まる if 文の1行目が入る',
    token: /if\s*\(\s*hp\s*>=\s*50\s*\)\s*\{/,
    hint: '<code>if (hp &gt;= 50) {</code> と書く。条件はかっこで囲み、最後に波かっこを開く。',
    output: `アレンの HP は 100
ダメージ後の HP は 30
回復が必要である。`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript の練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; }`
    }
  },
  {
    id: 'webintro-07',
    phase: 'JavaScript の基礎',
    title: '配列',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は配列に持ち物を並べ、for...of 文で順に表示する。</p>
<p>配列は、複数の値を順番に並べて1つの変数に入れる仕組みである。<code>[ ]</code> の中に値をカンマで区切って書く。各値を要素と呼び、要素の位置を表す番号をインデックスと呼ぶ。インデックスは 0 から始まる。</p>
<p><code>items[0]</code> は最初の要素を取り出し、<code>items.length</code> は要素の数を表す。for...of 文は、配列の要素を先頭から順に取り出し、同じ処理を繰り返す文である。<code>for (const item of items)</code> と書くと、繰り返しのたびに item に次の要素が入る。</p>`,
    code: `const items = ['ポーション', '鉄の剣', '木の盾'];

console.log('最初のアイテム：' + items[0]);
console.log('アイテムの数：' + items.length);

for (const item of items) {
  console.log('持ち物：' + item);
}`,
    blank: 'for (const item of items) {',
    placeholder: '// ここに items の要素を順に item へ取り出す for...of 文の1行目が入る',
    token: /for\s*\(\s*(const|let)\s+item\s+of\s+items\s*\)\s*\{/,
    hint: '<code>for (const item of items) {</code> と書く。',
    output: `最初のアイテム：ポーション
アイテムの数：3
持ち物：ポーション
持ち物：鉄の剣
持ち物：木の盾`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript の練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; }`
    }
  },
  {
    id: 'webintro-08',
    phase: 'JavaScript の基礎',
    title: 'オブジェクト',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者はオブジェクトでキャラクターの情報をまとめ、プロパティの値を取り出す。</p>
<p>オブジェクトは、複数の値に名前を付けてまとめる仕組みである。<code>{ }</code> の中に「キー: 値」の組をカンマで区切って書く。この組をプロパティと呼ぶ。</p>
<p>プロパティの値は <code>hero.name</code> のようにドットで結んで取り出す。値の変更も同じ書き方で行う。配列の要素にオブジェクトを入れると、複数のキャラクターの情報を1つの配列で扱える。</p>`,
    code: `const hero = {
  name: 'アレン',
  job: '剣士',
  level: 5
};

console.log(hero.name + '（' + hero.job + '）');

hero.level = hero.level + 1;
console.log('レベルが ' + hero.level + ' に上がった。');

const party = [
  { name: 'ミナ', job: '魔法使い' },
  { name: 'ゴウ', job: '格闘家' }
];

for (const member of party) {
  console.log(member.name + 'は' + member.job + 'である。');
}`,
    blank: `  name: 'アレン',
  job: '剣士',
  level: 5`,
    placeholder: '  // ここに name・job・level の3つのプロパティが入る',
    token: /name\s*:\s*["']アレン["']\s*,\s*job\s*:\s*["']剣士["']\s*,\s*level\s*:\s*5/,
    hint: `<code>name: 'アレン',</code>、<code>job: '剣士',</code>、<code>level: 5</code> の3行を書く。プロパティの間はカンマで区切る。`,
    output: `アレン（剣士）
レベルが 6 に上がった。
ミナは魔法使いである。
ゴウは格闘家である。`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript の練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; }`
    }
  },
  {
    id: 'webintro-09',
    phase: 'JavaScript の基礎',
    title: '関数',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は引数と戻り値を持つ関数を作り、ダメージの計算を1か所にまとめる。</p>
<p>関数は、一連の処理をまとめて名前を付けたものである。<code>function 名前(引数) { … }</code> の形で定義する。引数は、関数を呼び出す側から受け取る値である。</p>
<p>定義の段階では、関数の中の処理は待機している。<code>calcDamage(30, 10)</code> のように呼び出した時点で処理が実行される。return は、関数の結果（戻り値）を呼び出し元に返す命令である。同じ計算を何度も使う場合、関数にまとめると修正の場所が1か所で済む。</p>`,
    code: `function calcDamage(attack, defense) {
  const damage = attack - defense;
  return damage;
}

const d1 = calcDamage(30, 10);
console.log('スライムに ' + d1 + ' のダメージ');

const d2 = calcDamage(50, 15);
console.log('ゴーレムに ' + d2 + ' のダメージ');`,
    blank: '  return damage;',
    placeholder: '  // ここに計算結果を呼び出し元へ返す命令が入る',
    token: /return\s+damage\s*;?/,
    hint: '<code>return damage;</code> と書く。',
    output: `スライムに 20 のダメージ
ゴーレムに 35 のダメージ`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript の練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; }`
    }
  },
  {
    id: 'webintro-10',
    phase: 'JavaScript の基礎',
    title: '配列の操作',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は push・forEach・filter・map を使い、モンスターの配列に追加・表示・絞り込みを行う。</p>
<p>配列には、要素を操作する専用の命令（メソッド）がある。メソッドは、オブジェクトや配列が持つ関数である。push は配列の末尾に要素を追加する。forEach は各要素に対して同じ関数を実行する。</p>
<p>filter は、条件に合う要素のみを集めた新しい配列を作る。<code>(m) =&gt; m.hp &gt;= 50</code> はアロー関数と呼ばれる短い関数の書き方であり、要素 m を受け取り、条件の結果（true または false）を返す。filter は true を返した要素を残す。map は各要素を変換した新しい配列を作り、join は要素を指定の文字で連結した文字列を作る。</p>`,
    code: `const monsters = [
  { name: 'スライム', hp: 20 },
  { name: 'ゴーレム', hp: 120 },
  { name: 'コウモリ', hp: 15 }
];

monsters.push({ name: 'ドラゴン', hp: 300 });

monsters.forEach((m) => {
  console.log(m.name + '：HP ' + m.hp);
});

const strong = monsters.filter((m) => m.hp >= 50);
const names = strong.map((m) => m.name);
console.log('強敵：' + names.join('、'));`,
    blank: 'const strong = monsters.filter((m) => m.hp >= 50);',
    placeholder: '// ここに HP が 50 以上のモンスターを集めた配列 strong を作る行が入る',
    token: /const\s+strong\s*=\s*monsters\.filter\(\s*\(?\s*m\s*\)?\s*=>\s*m\.hp\s*>=\s*50\s*\)/,
    hint: '<code>const strong = monsters.filter((m) =&gt; m.hp &gt;= 50);</code> と書く。',
    output: `スライム：HP 20
ゴーレム：HP 120
コウモリ：HP 15
ドラゴン：HP 300
強敵：ゴーレム、ドラゴン`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript の練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; }`
    }
  },
  {
    id: 'webintro-11',
    phase: '開発の準備と公開',
    title: 'コマンドライン',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は cd・ls・mkdir などのコマンドを使い、ターミナルで作品用のフォルダを作る。</p>
<p>コマンドラインは、文字の命令（コマンド）でコンピュータを操作する方法である。命令を入力する画面をターミナルと呼ぶ。macOS では「ターミナル」アプリ、Windows では「ターミナル」アプリの中の PowerShell を使う。主なコマンドは次のとおりである。<code>pwd</code> は今いるフォルダの場所を表示し、<code>ls</code> はフォルダの中身を一覧にする。<code>cd フォルダ名</code> は別のフォルダへ移動し、<code>cd ..</code> は1つ上のフォルダへ戻る。<code>mkdir フォルダ名</code> は新しいフォルダを作る。</p>
<p>macOS と Windows ではコマンドに違いがある。PowerShell では pwd・ls・cd・mkdir をそのまま使える。一方、古いコマンドプロンプトでは、一覧に <code>dir</code>、場所の表示に引数を省いた <code>cd</code> を使う。空のファイルの作成は、macOS では <code>touch index.html</code>、PowerShell では <code>New-Item index.html</code> と書く。フォルダの区切りの記号は、macOS が <code>/</code>、Windows が <code>&#92;</code> である。</p>`,
    code: `# 今いるフォルダの場所を表示する
pwd
# 作品用のフォルダを作る
mkdir game-club
# 作ったフォルダへ移動する
cd game-club
# 3つの空のファイルを作る（Windows では New-Item を使う）
touch index.html style.css game.js
# フォルダの中身を一覧にする
ls`,
    blank: 'mkdir game-club',
    placeholder: '# ここに game-club という名前のフォルダを作るコマンドが入る',
    token: /mkdir\s+game-club/,
    hint: '<code>mkdir game-club</code> と書く。mkdir の後に半角スペースとフォルダ名を続ける。',
    output: `$ pwd
/Users/aoi
$ mkdir game-club
$ cd game-club
$ touch index.html style.css game.js
$ ls
game.js    index.html    style.css`
  },
  {
    id: 'webintro-12',
    phase: '開発の準備と公開',
    title: '自分の PC で開発する準備',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は自分のパソコンに VS Code とブラウザを用意し、作ったページを表示する手順を知る。</p>
<p>Web ページの開発には、コードを書くエディタと、結果を確認するブラウザを使う。エディタには Visual Studio Code（VS Code）が広く使われている。VS Code は公式サイト（code.visualstudio.com）から入手できる。macOS では Homebrew で <code>brew install --cask visual-studio-code</code>、Windows では PowerShell で <code>winget install Microsoft.VisualStudioCode</code> と入力してもインストールできる。Homebrew と winget は、コマンドでアプリを導入する仕組み（パッケージマネージャー）である。</p>
<p>ブラウザには Google Chrome を使う。Chrome の開発者ツールは、コンソールや HTML の構造を確認する機能である。開発者ツールは、macOS では <code>Cmd + Option + I</code>、Windows では <code>F12</code> で開く。</p>
<p>VS Code では、メニューの「ファイル → フォルダーを開く」で作品のフォルダを開く。拡張機能「Live Server」を入れ、index.html を右クリックして「Open with Live Server」を選ぶと、ブラウザにページが表示される。ファイルを保存するたびに、ブラウザの表示は自動で更新される。</p>`,
    output: `$ code --version
1.95.3
（VS Code のバージョンが表示されれば、インストールは完了である）

Live Server の起動後のブラウザのアドレス欄（見本）
http://127.0.0.1:5500/index.html`
  },
  {
    id: 'webintro-13',
    phase: '開発の準備と公開',
    title: 'Web ページの公開',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は GitHub Pages と Netlify を使い、作ったページをインターネットに公開する手順を知る。</p>
<p>公開とは、ファイルをサーバーに置き、URL で誰でも閲覧できる状態にする作業である。GitHub Pages と Netlify は、HTML・CSS・JavaScript のファイルを置くとすぐに公開できるホスティングサービスである。ホスティングサービスは、ファイルを置く場所としてサーバーを貸し出すサービスである。どちらのサービスも、最初に表示するページのファイル名を index.html にする。</p>
<p>GitHub Pages では、GitHub にリポジトリ（ファイルの保管場所）を作り、index.html などを置く。リポジトリの Settings → Pages で公開するブランチ（main）を選ぶと、数分後に <code>https://ユーザー名.github.io/リポジトリ名/</code> でページが公開される。</p>
<p>Netlify では、アカウントを作成した後、管理画面の手動デプロイの欄（Deploy manually）に作品のフォルダをドラッグ＆ドロップする。デプロイは、作ったファイルをサーバーに配置して公開する作業である。Netlify は自動で URL（例：<code>https://名前.netlify.app</code>）を発行する。</p>`,
    output: `GitHub Pages の公開先（見本）
https://game-club.github.io/my-site/

Netlify の公開先（見本）
https://game-club-site.netlify.app`
  },
  {
    id: 'webintro-14',
    phase: 'JavaScript の発展',
    title: 'クラスとモジュール',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は class でキャラクターの設計図を作り、new で複数のキャラクターを生み出す。</p>
<p>クラスは、同じ形のオブジェクトを作るための設計図である。constructor は、new でオブジェクトを作る時点で実行される特別なメソッドである。constructor の中の this は作られる途中のオブジェクト自身を指し、<code>this.name = name;</code> でプロパティを設定する。クラスから作ったオブジェクトをインスタンスと呼ぶ。</p>
<p>モジュールは、プログラムをファイルごとに分ける仕組みである。<code>export</code> を付けたクラスや関数は、別のファイルから <code>import</code> で読み込める。HTML では <code>&lt;script type="module" src="main.js"&gt;</code> と書く。このレッスンのエディタは1つの game.js で動くため、クラスを同じファイルに書く。</p>
<pre>// character.js
export class Character { … }

// main.js
import { Character } from './character.js';</pre>`,
    code: `class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  attack(target) {
    target.hp = target.hp - 10;
    console.log(this.name + 'の攻撃。' + target.name + 'の HP は ' + target.hp);
  }
}

const hero = new Character('アレン', 100);
const slime = new Character('スライム', 30);

hero.attack(slime);
hero.attack(slime);`,
    blank: `    this.name = name;
    this.hp = hp;`,
    placeholder: '    // ここに引数 name と hp をプロパティに設定する2行が入る',
    token: /this\.name\s*=\s*name\s*;?\s*this\.hp\s*=\s*hp/,
    hint: '<code>this.name = name;</code> と <code>this.hp = hp;</code> の2行を書く。',
    output: `アレンの攻撃。スライムの HP は 20
アレンの攻撃。スライムの HP は 10`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript の練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; }`
    }
  },
  {
    id: 'webintro-15',
    phase: 'JavaScript の発展',
    title: 'Web ページを動かす（DOM）',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は addEventListener でボタンのクリックを受け取り、画面のスコアを書き換える。</p>
<p>DOM（Document Object Model）は、ブラウザが HTML を JavaScript から操作できる形に変えたものである。<code>document.querySelector('#score')</code> は、CSS と同じセレクタで要素を1つ取り出す。要素の textContent に値を代入すると、画面の文字が書き換わる。</p>
<p>イベントは、クリックやキー入力など、ページで起きた出来事である。<code>要素.addEventListener('click', 関数)</code> と書くと、ブラウザはクリックの時点で関数を実行する。登録の段階では関数は待機しており、ボタンを押すたびに中の処理が動く。</p>`,
    code: `const scoreText = document.querySelector('#score');
const button = document.querySelector('#coin');

let score = 0;

button.addEventListener('click', () => {
  score = score + 10;
  scoreText.textContent = score;
  console.log('コインを拾った。スコア：' + score);
});`,
    blank: `button.addEventListener('click', () => {`,
    placeholder: '// ここに button のクリックで動く処理の登録の1行目が入る',
    token: /button\.addEventListener\(\s*["']click["']\s*,\s*(\(\s*\)\s*=>|function\s*\(\s*\))\s*\{/,
    hint: `<code>button.addEventListener('click', () =&gt; {</code> と書く。`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>コイン集め</h1>
  <p class="score">スコア：<span id="score">0</span></p>
  <button id="coin">コインを拾う</button>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; text-align: center; background: #1d3557; color: #fff; }
.score { font-size: 28px; }
#score { color: #ffd166; font-weight: bold; }
button { padding: 12px 28px; font-size: 18px; border: none; border-radius: 30px; background: #ffd166; color: #1d3557; cursor: pointer; }`
    }
  },
  {
    id: 'webintro-16',
    phase: 'Web アプリケーション',
    title: 'Web アプリケーションの作成',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は Date オブジェクトで今月の日数と1日の曜日を求め、カレンダーを画面に描く。</p>
<p>このレッスンから、予定を記録できるカレンダーアプリを作る。Web アプリケーションは、利用者の操作に応じて画面が変わるページである。Date オブジェクトは、日付と時刻を扱う JavaScript の仕組みである。<code>new Date()</code> は現在の日時を表し、getFullYear は年、getMonth は月（0 が1月、11 が12月）、getDay は曜日（0 が日曜日）、getDate は日を返す。</p>
<p>月の日数は月ごとに違う。<code>new Date(year, month + 1, 0)</code> は「翌月の0日」を表し、JavaScript はこれを今月の最終日として扱う。その getDate() が今月の日数になる。1日を正しい曜日の位置に置くため、1日の曜日の番号と同じ数の空のマスを先に並べる。createElement は新しい要素を作り、appendChild は要素を親要素の末尾に加える。</p>`,
    code: `const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

const title = document.querySelector('#month');
const calendar = document.querySelector('#calendar');

title.textContent = year + '年' + (month + 1) + '月';

const weekNames = ['日', '月', '火', '水', '木', '金', '土'];
for (const name of weekNames) {
  const cell = document.createElement('div');
  cell.className = 'week';
  cell.textContent = name;
  calendar.appendChild(cell);
}

const firstDay = new Date(year, month, 1).getDay();
const lastDate = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
  calendar.appendChild(document.createElement('div'));
}

for (let d = 1; d <= lastDate; d++) {
  const cell = document.createElement('div');
  cell.className = 'day';
  if (d === today.getDate()) {
    cell.classList.add('today');
  }
  cell.textContent = d;
  calendar.appendChild(cell);
}`,
    blank: 'const lastDate = new Date(year, month + 1, 0).getDate();',
    placeholder: '// ここに今月の日数（翌月の0日の日付）を lastDate に入れる行が入る',
    token: /const\s+lastDate\s*=\s*new\s+Date\(\s*year\s*,\s*month\s*\+\s*1\s*,\s*0\s*\)\.getDate\(\)/,
    hint: '<code>const lastDate = new Date(year, month + 1, 0).getDate();</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <div class="app">
    <h1 id="month"></h1>
    <div id="calendar" class="calendar"></div>
  </div>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 0; background: #f1f5f9; }
.app { max-width: 420px; margin: 0 auto; padding: 16px; }
h1 { text-align: center; color: #1d3557; }
.calendar { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
.week { text-align: center; font-weight: bold; color: #64748b; padding: 4px 0; }
.day { background: #fff; border-radius: 6px; padding: 8px 4px; min-height: 36px; text-align: center; }
.today { background: #e76f51; color: #fff; font-weight: bold; }`
    }
  },
  {
    id: 'webintro-17',
    phase: 'Web アプリケーション',
    title: 'データの扱い',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は予定を localStorage に保存し、ページを読み込み直した後も予定が残るカレンダーにする。</p>
<p>localStorage は、ブラウザの中にデータを保存する仕組みである。<code>localStorage.setItem(キー, 値)</code> で保存し、<code>localStorage.getItem(キー)</code> で取り出す。保存したデータは、ページを閉じた後も残る。</p>
<p>localStorage が扱える値は文字列に限られる。そこで、配列やオブジェクトは <code>JSON.stringify</code> で JSON 形式の文字列に変えて保存する。JSON は、データを文字で表す書式である。取り出した文字列は <code>JSON.parse</code> で元の配列に戻す。初回は保存済みのデータが空（null）のため、<code>|| '[]'</code> で空の配列の文字列を代わりに使う。</p>
<p>日付の入力欄の値は「2026-11-05」の形式の文字列である。<code>padStart(2, '0')</code> は文字列が2文字になるまで先頭に 0 を足すメソッドであり、カレンダーの各日を同じ形式に整える。予定の id には作成時刻のミリ秒（Date.now()）を使う。</p>`,
    code: `const KEY = 'calendar-events';
let events = JSON.parse(localStorage.getItem(KEY) || '[]');

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

const title = document.querySelector('#month');
const calendar = document.querySelector('#calendar');
const dateInput = document.querySelector('#date');
const textInput = document.querySelector('#text');
const addButton = document.querySelector('#add');

function toKey(d) {
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(d).padStart(2, '0');
  return year + '-' + mm + '-' + dd;
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(events));
}

function render() {
  title.textContent = year + '年' + (month + 1) + '月';
  calendar.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) {
    calendar.appendChild(document.createElement('div'));
  }
  for (let d = 1; d <= lastDate; d++) {
    const cell = document.createElement('div');
    cell.className = 'day';
    cell.textContent = d;
    const dayEvents = events.filter((ev) => ev.date === toKey(d));
    for (const ev of dayEvents) {
      const tag = document.createElement('span');
      tag.className = 'event';
      tag.textContent = ev.text;
      cell.appendChild(tag);
    }
    calendar.appendChild(cell);
  }
}

addButton.addEventListener('click', () => {
  if (dateInput.value === '' || textInput.value === '') {
    return;
  }
  events.push({ id: Date.now(), date: dateInput.value, text: textInput.value });
  save();
  textInput.value = '';
  render();
});

dateInput.value = toKey(today.getDate());
render();`,
    blank: '  localStorage.setItem(KEY, JSON.stringify(events));',
    placeholder: '  // ここに events を JSON の文字列に変えて KEY の名前で保存する命令が入る',
    token: /localStorage\.setItem\(\s*KEY\s*,\s*JSON\.stringify\(\s*events\s*\)\s*\)/,
    hint: '<code>localStorage.setItem(KEY, JSON.stringify(events));</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <div class="app">
    <h1 id="month"></h1>
    <div class="form">
      <input id="date" type="date">
      <input id="text" type="text" placeholder="予定（例：ゲーム大会）">
      <button id="add">追加</button>
    </div>
    <div class="calendar week-row"><div>日</div><div>月</div><div>火</div><div>水</div><div>木</div><div>金</div><div>土</div></div>
    <div id="calendar" class="calendar"></div>
  </div>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 0; background: #f1f5f9; }
.app { max-width: 460px; margin: 0 auto; padding: 16px; }
h1 { text-align: center; color: #1d3557; margin: 8px 0; }
.form { display: flex; gap: 6px; margin-bottom: 12px; }
.form input[type="text"] { flex: auto; }
input, button { padding: 6px; font-size: 14px; }
button { background: #1d3557; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
.calendar { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
.week-row div { text-align: center; font-weight: bold; color: #64748b; }
.day { background: #fff; border-radius: 6px; padding: 4px; min-height: 48px; font-size: 13px; }
.event { display: block; margin-top: 2px; background: #e76f51; color: #fff; border-radius: 3px; font-size: 10px; padding: 1px 3px; overflow: hidden; white-space: nowrap; }`
    }
  },
  {
    id: 'webintro-18',
    phase: 'Web アプリケーション',
    title: 'データの更新と削除',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は予定の一覧に「変更」と「削除」のボタンを付け、保存済みの予定を書き換えたり消したりする。</p>
<p>保存済みのデータを操作するときは、各予定を区別する目印を使う。前のレッスンで予定に付けた id（作成時刻のミリ秒）は、予定ごとに異なる値であり、この目印になる。</p>
<p>更新は、find で id の一致する予定を探し、そのプロパティを書き換える処理である。find は、条件に合う最初の要素を返すメソッドである。削除は、filter で id の異なる予定を集め、その新しい配列で events を置き換える処理である。<code>!==</code> は2つの値が異なるときに true になる比較演算子である。どちらの処理の後も、save で localStorage に保存し、render で画面を描き直す。</p>
<p>prompt は、入力欄付きの小さな画面を出し、入力された文字列を返す命令である。利用者がキャンセルを選んだ場合、prompt は null を返す。</p>`,
    code: `const KEY = 'calendar-events';
let events = JSON.parse(localStorage.getItem(KEY) || '[]');

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

const title = document.querySelector('#month');
const calendar = document.querySelector('#calendar');
const list = document.querySelector('#list');
const dateInput = document.querySelector('#date');
const textInput = document.querySelector('#text');
const addButton = document.querySelector('#add');

function toKey(d) {
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(d).padStart(2, '0');
  return year + '-' + mm + '-' + dd;
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(events));
}

function updateEvent(id) {
  const target = events.find((ev) => ev.id === id);
  const newText = prompt('新しい予定の内容', target.text);
  if (newText === null || newText === '') {
    return;
  }
  target.text = newText;
  save();
  render();
}

function deleteEvent(id) {
  events = events.filter((ev) => ev.id !== id);
  save();
  render();
}

function renderCalendar() {
  title.textContent = year + '年' + (month + 1) + '月';
  calendar.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) {
    calendar.appendChild(document.createElement('div'));
  }
  for (let d = 1; d <= lastDate; d++) {
    const cell = document.createElement('div');
    cell.className = 'day';
    cell.textContent = d;
    for (const ev of events.filter((e) => e.date === toKey(d))) {
      const tag = document.createElement('span');
      tag.className = 'event';
      tag.textContent = ev.text;
      cell.appendChild(tag);
    }
    calendar.appendChild(cell);
  }
}

function renderList() {
  list.innerHTML = '';
  for (const ev of events) {
    const li = document.createElement('li');
    li.textContent = ev.date + ' ' + ev.text + ' ';
    const editButton = document.createElement('button');
    editButton.textContent = '変更';
    editButton.addEventListener('click', () => updateEvent(ev.id));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => deleteEvent(ev.id));
    li.append(editButton, deleteButton);
    list.appendChild(li);
  }
}

function render() {
  renderCalendar();
  renderList();
}

addButton.addEventListener('click', () => {
  if (dateInput.value === '' || textInput.value === '') {
    return;
  }
  events.push({ id: Date.now(), date: dateInput.value, text: textInput.value });
  save();
  textInput.value = '';
  render();
});

dateInput.value = toKey(today.getDate());
render();`,
    blank: '  events = events.filter((ev) => ev.id !== id);',
    placeholder: '  // ここに id の異なる予定を集めた新しい配列で events を置き換える行が入る',
    token: /events\s*=\s*events\.filter\(\s*\(?\s*ev\s*\)?\s*=>\s*ev\.id\s*!==?\s*id\s*\)/,
    hint: '<code>events = events.filter((ev) =&gt; ev.id !== id);</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <div class="app">
    <h1 id="month"></h1>
    <div class="form">
      <input id="date" type="date">
      <input id="text" type="text" placeholder="予定（例：ゲーム大会）">
      <button id="add">追加</button>
    </div>
    <div class="calendar week-row"><div>日</div><div>月</div><div>火</div><div>水</div><div>木</div><div>金</div><div>土</div></div>
    <div id="calendar" class="calendar"></div>
    <h2>予定の一覧</h2>
    <ul id="list"></ul>
  </div>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 0; background: #f1f5f9; }
.app { max-width: 460px; margin: 0 auto; padding: 16px; }
h1 { text-align: center; color: #1d3557; margin: 8px 0; }
h2 { font-size: 16px; color: #1d3557; }
.form { display: flex; gap: 6px; margin-bottom: 12px; }
.form input[type="text"] { flex: auto; }
input, button { padding: 6px; font-size: 14px; }
button { background: #1d3557; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
.calendar { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
.week-row div { text-align: center; font-weight: bold; color: #64748b; }
.day { background: #fff; border-radius: 6px; padding: 4px; min-height: 48px; font-size: 13px; }
.event { display: block; margin-top: 2px; background: #e76f51; color: #fff; border-radius: 3px; font-size: 10px; padding: 1px 3px; overflow: hidden; white-space: nowrap; }
#list { padding-left: 18px; }
#list li { margin-bottom: 6px; }
#list button { margin-left: 4px; padding: 2px 8px; font-size: 12px; }`
    }
  }
];

SERIES.flexbox = [
  {
    id: 'flexbox-01',
    phase: 'Flexbox の基本',
    title: 'Flexbox の概要と完成形の確認',
    type: 'code',
    run: 'web',
    file: 'index.html',
    story: `<p class="lead">学習者はキャラクターのカードを1枚 HTML に加え、このシリーズで作るカード一覧の完成形を確認する。</p>
<p>このシリーズでは、ゲームのキャラクターを紹介するカード一覧のページを作る。完成形では、カードが横に並び、画面の幅に合わせて自動で折り返す。スマートフォンほどの狭い画面では、カードが1列になり、画像と文章が横に並ぶ。このように画面の幅に応じて配置を変えるデザインをレスポンシブデザインと呼ぶ。</p>
<p>この配置は Flexbox で作る。Flexbox は、親要素の中の子要素を横や縦に並べる CSS の仕組みである。並べる側の親要素を flex コンテナ、並ぶ側の子要素を flex アイテムと呼ぶ。このレッスンの style.css には完成形の CSS が入っている。次のレッスンからは CSS を一から順に書き、完成形に近づける。</p>`,
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>キャラクター図鑑</h1>
  </header>
  <div class="cards">
    <div class="card">
      <img src="https://placehold.co/240x140/e63946/ffffff?text=Knight" alt="ナイト">
      <div class="body"><h2>ナイト</h2><p class="job">前衛・HP 120</p><p>重い鎧で仲間を守る剣士である。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/7b2cbf/ffffff?text=Wizard" alt="ウィザード">
      <div class="body"><h2>ウィザード</h2><p class="job">後衛・HP 60</p><p>炎と氷の魔法で敵をまとめて攻撃する。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/2a9d8f/ffffff?text=Archer" alt="アーチャー">
      <div class="body"><h2>アーチャー</h2><p class="job">後衛・HP 80</p><p>遠くの敵を弓で正確に射る。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/f4a261/ffffff?text=Healer" alt="ヒーラー">
      <div class="body"><h2>ヒーラー</h2><p class="job">支援・HP 70</p><p>祈りの力で仲間の傷を治す。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/457b9d/ffffff?text=Thief" alt="シーフ">
      <div class="body"><h2>シーフ</h2><p class="job">前衛・HP 75</p><p>素早い動きで宝箱の鍵を開ける。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/e76f51/ffffff?text=Tamer" alt="ドラゴン使い">
      <div class="body"><h2>ドラゴン使い</h2><p class="job">前衛・HP 110</p><p>小さな竜と共に戦う。</p></div>
    </div>
  </div>
</body>
</html>`,
    blank: `      <img src="https://placehold.co/240x140/e76f51/ffffff?text=Tamer" alt="ドラゴン使い">
      <div class="body"><h2>ドラゴン使い</h2><p class="job">前衛・HP 110</p><p>小さな竜と共に戦う。</p></div>`,
    placeholder: '      <!-- ここにドラゴン使いの画像（img）と説明（div class="body"）が入る -->',
    token: /alt=["']ドラゴン使い["']\s*>\s*<div\s+class=["']body["']>\s*<h2>ドラゴン使い<\/h2>/,
    hint: 'ほかのカードと同じ形で、<code>&lt;img src="https://placehold.co/240x140/e76f51/ffffff?text=Tamer" alt="ドラゴン使い"&gt;</code> と、h2 に「ドラゴン使い」を書いた <code>&lt;div class="body"&gt;…&lt;/div&gt;</code> の2行を書く。',
    ctx: {
      css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #1d2433;
  color: #f1f1f1;
}

header {
  padding: 16px 20px;
  background: #11151f;
}

header h1 {
  margin: 0;
  font-size: 22px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
}

.card {
  flex: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  background: #2b3448;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card .body {
  padding: 12px 14px;
}

.card h2 {
  margin: 0 0 4px;
  font-size: 18px;
}

.card p {
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.6;
}

.card .job {
  color: #ffd166;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
    flex-direction: row;
  }

  .card img {
    width: 120px;
    height: auto;
  }
}`,
      js: ``
    }
  },
  {
    id: 'flexbox-02',
    phase: 'Flexbox の基本',
    title: 'display: flex',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は .cards に display: flex を指定し、カードを横一列に並べる。</p>
<p>div などのブロック要素は、通常は上から下へ縦に積み重なる。親要素に <code>display: flex;</code> を指定すると、親要素は flex コンテナになり、子要素（flex アイテム）は左から右へ横一列に並ぶ。flex コンテナの中では、アイテムの間隔を gap プロパティで決める。</p>
<p>この段階では、ブラウザはすべてのカードを1行に収めるため、カードの幅を縮める。そのため、狭い画面ではカードが細長く縮む。この状態は、後のレッスンで flex-wrap を使って改善する。</p>`,
    code: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #1d2433;
  color: #f1f1f1;
}

header {
  padding: 16px 20px;
  background: #11151f;
}

header h1 {
  margin: 0;
  font-size: 22px;
}

.cards {
  display: flex;
  gap: 16px;
  padding: 20px;
}

.card {
  width: 200px;
  background: #2b3448;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card .body {
  padding: 12px 14px;
}

.card h2 {
  margin: 0 0 4px;
  font-size: 18px;
}

.card p {
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.6;
}

.card .job {
  color: #ffd166;
}`,
    blank: '  display: flex;',
    placeholder: '  /* ここに .cards を flex コンテナにする宣言が入る */',
    token: /\.cards\s*\{\s*display\s*:\s*flex\s*;/,
    hint: '.cards のルールの最初に <code>display: flex;</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>キャラクター図鑑</h1>
  </header>
  <div class="cards">
    <div class="card">
      <img src="https://placehold.co/240x140/e63946/ffffff?text=Knight" alt="ナイト">
      <div class="body"><h2>ナイト</h2><p class="job">前衛・HP 120</p><p>重い鎧で仲間を守る剣士である。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/7b2cbf/ffffff?text=Wizard" alt="ウィザード">
      <div class="body"><h2>ウィザード</h2><p class="job">後衛・HP 60</p><p>炎と氷の魔法で敵をまとめて攻撃する。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/2a9d8f/ffffff?text=Archer" alt="アーチャー">
      <div class="body"><h2>アーチャー</h2><p class="job">後衛・HP 80</p><p>遠くの敵を弓で正確に射る。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/f4a261/ffffff?text=Healer" alt="ヒーラー">
      <div class="body"><h2>ヒーラー</h2><p class="job">支援・HP 70</p><p>祈りの力で仲間の傷を治す。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/457b9d/ffffff?text=Thief" alt="シーフ">
      <div class="body"><h2>シーフ</h2><p class="job">前衛・HP 75</p><p>素早い動きで宝箱の鍵を開ける。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/e76f51/ffffff?text=Tamer" alt="ドラゴン使い">
      <div class="body"><h2>ドラゴン使い</h2><p class="job">前衛・HP 110</p><p>小さな竜と共に戦う。</p></div>
    </div>
  </div>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'flexbox-03',
    phase: 'Flexbox の基本',
    title: 'flex: auto',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は .card に flex: auto を指定し、カードが行の余った幅を分け合って広がるようにする。</p>
<p>flex は、flex アイテムの伸び縮みを決めるプロパティである。<code>flex: auto;</code> は「コンテナの幅に余りがあるときは伸び、幅が不足するときは縮む」という指定であり、width の値を基準の幅として使う。</p>
<p>アイテムの幅の合計がコンテナの幅より小さいとき、各アイテムは余りの幅を均等に分け合って広がる。その結果、カードの列は右端までそろう。広い画面で表示すると、効果がはっきり表れる。次のレッスンで折り返しを加えると、どの画面の幅でもこの効果が働く。</p>`,
    code: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #1d2433;
  color: #f1f1f1;
}

header {
  padding: 16px 20px;
  background: #11151f;
}

header h1 {
  margin: 0;
  font-size: 22px;
}

.cards {
  display: flex;
  gap: 16px;
  padding: 20px;
}

.card {
  flex: auto;
  width: 200px;
  background: #2b3448;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card .body {
  padding: 12px 14px;
}

.card h2 {
  margin: 0 0 4px;
  font-size: 18px;
}

.card p {
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.6;
}

.card .job {
  color: #ffd166;
}`,
    blank: '  flex: auto;',
    placeholder: '  /* ここにカードを余りの幅に応じて伸び縮みさせる宣言が入る */',
    token: /\.card\s*\{\s*flex\s*:\s*auto\s*;/,
    hint: '.card のルールの最初に <code>flex: auto;</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>キャラクター図鑑</h1>
  </header>
  <div class="cards">
    <div class="card">
      <img src="https://placehold.co/240x140/e63946/ffffff?text=Knight" alt="ナイト">
      <div class="body"><h2>ナイト</h2><p class="job">前衛・HP 120</p><p>重い鎧で仲間を守る剣士である。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/7b2cbf/ffffff?text=Wizard" alt="ウィザード">
      <div class="body"><h2>ウィザード</h2><p class="job">後衛・HP 60</p><p>炎と氷の魔法で敵をまとめて攻撃する。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/2a9d8f/ffffff?text=Archer" alt="アーチャー">
      <div class="body"><h2>アーチャー</h2><p class="job">後衛・HP 80</p><p>遠くの敵を弓で正確に射る。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/f4a261/ffffff?text=Healer" alt="ヒーラー">
      <div class="body"><h2>ヒーラー</h2><p class="job">支援・HP 70</p><p>祈りの力で仲間の傷を治す。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/457b9d/ffffff?text=Thief" alt="シーフ">
      <div class="body"><h2>シーフ</h2><p class="job">前衛・HP 75</p><p>素早い動きで宝箱の鍵を開ける。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/e76f51/ffffff?text=Tamer" alt="ドラゴン使い">
      <div class="body"><h2>ドラゴン使い</h2><p class="job">前衛・HP 110</p><p>小さな竜と共に戦う。</p></div>
    </div>
  </div>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'flexbox-04',
    phase: 'Flexbox の基本',
    title: 'flex-wrap: wrap',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は .cards に flex-wrap: wrap を指定し、1行からあふれるカードを次の行へ折り返す。</p>
<p>flex コンテナは、初期状態ではすべてのアイテムを1行に詰め込む。このとき、ブラウザはアイテムを縮めて幅を合わせる。<code>flex-wrap: wrap;</code> を指定すると、1行からあふれるアイテムは次の行へ移る。</p>
<p>前のレッスンの <code>flex: auto;</code> と組み合わせると、各行のカードは width の 200px を基準に並び、行の余りの幅を分け合って広がる。画面の幅に応じて1行のカードの枚数が自動で変わり、どの行も右端までそろう。</p>`,
    code: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #1d2433;
  color: #f1f1f1;
}

header {
  padding: 16px 20px;
  background: #11151f;
}

header h1 {
  margin: 0;
  font-size: 22px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
}

.card {
  flex: auto;
  width: 200px;
  background: #2b3448;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card .body {
  padding: 12px 14px;
}

.card h2 {
  margin: 0 0 4px;
  font-size: 18px;
}

.card p {
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.6;
}

.card .job {
  color: #ffd166;
}`,
    blank: '  flex-wrap: wrap;',
    placeholder: '  /* ここにあふれたアイテムを次の行へ送る宣言が入る */',
    token: /flex-wrap\s*:\s*wrap\s*;/,
    hint: '.cards のルールの display: flex; の次の行に <code>flex-wrap: wrap;</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>キャラクター図鑑</h1>
  </header>
  <div class="cards">
    <div class="card">
      <img src="https://placehold.co/240x140/e63946/ffffff?text=Knight" alt="ナイト">
      <div class="body"><h2>ナイト</h2><p class="job">前衛・HP 120</p><p>重い鎧で仲間を守る剣士である。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/7b2cbf/ffffff?text=Wizard" alt="ウィザード">
      <div class="body"><h2>ウィザード</h2><p class="job">後衛・HP 60</p><p>炎と氷の魔法で敵をまとめて攻撃する。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/2a9d8f/ffffff?text=Archer" alt="アーチャー">
      <div class="body"><h2>アーチャー</h2><p class="job">後衛・HP 80</p><p>遠くの敵を弓で正確に射る。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/f4a261/ffffff?text=Healer" alt="ヒーラー">
      <div class="body"><h2>ヒーラー</h2><p class="job">支援・HP 70</p><p>祈りの力で仲間の傷を治す。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/457b9d/ffffff?text=Thief" alt="シーフ">
      <div class="body"><h2>シーフ</h2><p class="job">前衛・HP 75</p><p>素早い動きで宝箱の鍵を開ける。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/e76f51/ffffff?text=Tamer" alt="ドラゴン使い">
      <div class="body"><h2>ドラゴン使い</h2><p class="job">前衛・HP 110</p><p>小さな竜と共に戦う。</p></div>
    </div>
  </div>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'flexbox-05',
    phase: 'レスポンシブデザイン',
    title: 'メディアクエリ',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者はメディアクエリを書き、画面の幅が 600px 以下のときにカードを1列に並べる。</p>
<p>メディアクエリは、画面の幅などの条件に応じて CSS を切り替える仕組みである。<code>@media (max-width: 600px) { … }</code> の中のルールは、画面の幅が 600px 以下のときに限り有効になる。スマートフォンの画面の幅は 360〜430px 程度である。スマートフォンで幅を正しく判定させるため、HTML の head には viewport の meta タグを書く。</p>
<p>狭い画面では、カードの width を 100% にし、1行に1枚を並べる。ブラウザの幅を狭めると、プレビューの表示も切り替わる。Chrome の開発者ツールのデバイスモードを使うと、スマートフォンの幅を再現できる。</p>`,
    code: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #1d2433;
  color: #f1f1f1;
}

header {
  padding: 16px 20px;
  background: #11151f;
}

header h1 {
  margin: 0;
  font-size: 22px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
}

.card {
  flex: auto;
  width: 200px;
  background: #2b3448;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card .body {
  padding: 12px 14px;
}

.card h2 {
  margin: 0 0 4px;
  font-size: 18px;
}

.card p {
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.6;
}

.card .job {
  color: #ffd166;
}

@media (max-width: 600px) {
  .card { width: 100%; }
}`,
    blank: `@media (max-width: 600px) {
  .card { width: 100%; }
}`,
    placeholder: '/* ここに画面の幅が 600px 以下のときにカードの幅を 100% にするメディアクエリが入る */',
    token: /@media\s*\(\s*max-width\s*:\s*600px\s*\)\s*\{\s*\.card\s*\{\s*width\s*:\s*100%\s*;?\s*\}\s*\}/,
    hint: '<code>@media (max-width: 600px) {</code> の中に <code>.card { width: 100%; }</code> を書き、最後に <code>}</code> で閉じる。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>キャラクター図鑑</h1>
  </header>
  <div class="cards">
    <div class="card">
      <img src="https://placehold.co/240x140/e63946/ffffff?text=Knight" alt="ナイト">
      <div class="body"><h2>ナイト</h2><p class="job">前衛・HP 120</p><p>重い鎧で仲間を守る剣士である。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/7b2cbf/ffffff?text=Wizard" alt="ウィザード">
      <div class="body"><h2>ウィザード</h2><p class="job">後衛・HP 60</p><p>炎と氷の魔法で敵をまとめて攻撃する。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/2a9d8f/ffffff?text=Archer" alt="アーチャー">
      <div class="body"><h2>アーチャー</h2><p class="job">後衛・HP 80</p><p>遠くの敵を弓で正確に射る。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/f4a261/ffffff?text=Healer" alt="ヒーラー">
      <div class="body"><h2>ヒーラー</h2><p class="job">支援・HP 70</p><p>祈りの力で仲間の傷を治す。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/457b9d/ffffff?text=Thief" alt="シーフ">
      <div class="body"><h2>シーフ</h2><p class="job">前衛・HP 75</p><p>素早い動きで宝箱の鍵を開ける。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/e76f51/ffffff?text=Tamer" alt="ドラゴン使い">
      <div class="body"><h2>ドラゴン使い</h2><p class="job">前衛・HP 110</p><p>小さな竜と共に戦う。</p></div>
    </div>
  </div>
</body>
</html>`,
      js: ``
    }
  },
  {
    id: 'flexbox-06',
    phase: 'レスポンシブデザイン',
    title: 'flex-direction',
    type: 'code',
    run: 'web',
    file: 'style.css',
    story: `<p class="lead">学習者は flex-direction を使い、狭い画面ではカードの画像と文章を横に並べる。</p>
<p>flex-direction は、flex アイテムを並べる向き（主軸）を決めるプロパティである。row は左から右への横並びで、初期値である。column は上から下への縦並びである。</p>
<p>このレッスンでは、カード自体も flex コンテナにする。広い画面では column で画像の下に文章を置き、600px 以下の画面では row で画像の右に文章を置く。メディアクエリの中で値を上書きすると、同じ HTML のまま配置を切り替えられる。これで、カード一覧のページは最初のレッスンで確認した完成形と同じ姿になる。</p>`,
    code: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #1d2433;
  color: #f1f1f1;
}

header {
  padding: 16px 20px;
  background: #11151f;
}

header h1 {
  margin: 0;
  font-size: 22px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
}

.card {
  flex: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  background: #2b3448;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card .body {
  padding: 12px 14px;
}

.card h2 {
  margin: 0 0 4px;
  font-size: 18px;
}

.card p {
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.6;
}

.card .job {
  color: #ffd166;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
    flex-direction: row;
  }

  .card img {
    width: 120px;
    height: auto;
  }
}`,
    blank: '    flex-direction: row;',
    placeholder: '    /* ここに狭い画面でカードの中身を横並びにする宣言が入る */',
    token: /flex-direction\s*:\s*row\s*;/,
    hint: 'メディアクエリの中の .card のルールに <code>flex-direction: row;</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>キャラクター図鑑</h1>
  </header>
  <div class="cards">
    <div class="card">
      <img src="https://placehold.co/240x140/e63946/ffffff?text=Knight" alt="ナイト">
      <div class="body"><h2>ナイト</h2><p class="job">前衛・HP 120</p><p>重い鎧で仲間を守る剣士である。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/7b2cbf/ffffff?text=Wizard" alt="ウィザード">
      <div class="body"><h2>ウィザード</h2><p class="job">後衛・HP 60</p><p>炎と氷の魔法で敵をまとめて攻撃する。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/2a9d8f/ffffff?text=Archer" alt="アーチャー">
      <div class="body"><h2>アーチャー</h2><p class="job">後衛・HP 80</p><p>遠くの敵を弓で正確に射る。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/f4a261/ffffff?text=Healer" alt="ヒーラー">
      <div class="body"><h2>ヒーラー</h2><p class="job">支援・HP 70</p><p>祈りの力で仲間の傷を治す。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/457b9d/ffffff?text=Thief" alt="シーフ">
      <div class="body"><h2>シーフ</h2><p class="job">前衛・HP 75</p><p>素早い動きで宝箱の鍵を開ける。</p></div>
    </div>
    <div class="card">
      <img src="https://placehold.co/240x140/e76f51/ffffff?text=Tamer" alt="ドラゴン使い">
      <div class="body"><h2>ドラゴン使い</h2><p class="job">前衛・HP 110</p><p>小さな竜と共に戦う。</p></div>
    </div>
  </div>
</body>
</html>`,
      js: ``
    }
  }
];

SERIES.js = [
  {
    id: 'js-01',
    phase: '基礎編：JavaScript の基本',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は自分のパソコンに Node.js と VS Code を用意し、JavaScript のファイルを実行する手順を知る。</p>
<p>JavaScript は、ブラウザに加えて Node.js の上でも動く。Node.js は、JavaScript をパソコンの上で直接実行するソフトウェアである。macOS では、公式サイト（nodejs.org）から LTS 版のインストーラーを入手するか、Homebrew で <code>brew install node</code> と入力する。Windows では、公式サイトのインストーラーを使うか、PowerShell で <code>winget install OpenJS.NodeJS.LTS</code> と入力する。LTS 版は、長期間の保守が約束された安定版である。インストールの後、ターミナルで <code>node -v</code> と <code>npm -v</code> を入力し、バージョンの番号が表示されれば準備は完了である。</p>
<p>エディタには VS Code を使う。VS Code は JavaScript に標準で対応している。hello.js というファイルを作って <code>console.log('Hello, World');</code> と書き、VS Code のターミナル（メニューの「ターミナル → 新しいターミナル」）で <code>node hello.js</code> と入力すると、結果が表示される。拡張機能「Code Runner」を入れると、右上の実行ボタンでも実行できる。HTML と組み合わせる場合は、拡張機能「Live Server」でページをブラウザに表示する。</p>`,
    output: `$ node -v
v22.11.0
$ npm -v
10.9.0
$ node hello.js
Hello, World`
  },
  {
    id: 'js-02',
    phase: '基礎編：JavaScript の基本',
    title: '変数・定数とデータ型',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は const と let で変数を作り、テンプレートリテラルでキャラクターの状態を表示する。</p>
<p>変数は、値に名前を付けて保存する仕組みである。<code>const</code> は再代入（値の入れ替え）を禁じる定数を作り、<code>let</code> は再代入が可能な変数を作る。値が変化する場合に限り let を使い、ほかは const を使う書き方が一般的である。<code>hp += 20</code> は <code>hp = hp + 20</code> の短い書き方である。</p>
<p>値には型（データの種類）がある。主な型は、文字列（string）、数値（number）、真偽値（boolean：true か false）である。typeof 演算子は値の型を文字列で返す。テンプレートリテラルは、バッククォート <code>\`</code> で囲む文字列であり、<code>\${式}</code> の位置に式の値を埋め込む。</p>`,
    code: `const heroName = 'リナ';
let level = 1;
let hp = 50;
const isAlive = true;

level = level + 1;
hp += 20;

console.log(\`\${heroName} は Lv.\${level}、HP \${hp}\`);
console.log(typeof heroName, typeof hp, typeof isAlive);`,
    blank: 'console.log(`${heroName} は Lv.${level}、HP ${hp}`);',
    placeholder: '// ここに heroName・level・hp をテンプレートリテラルで埋め込んで表示する行が入る',
    token: /console\.log\(\s*`\$\{heroName\}[^`]*\$\{level\}[^`]*\$\{hp\}[^`]*`\s*\)/,
    hint: 'バッククォートで囲み、<code>console.log(`${heroName} は Lv.${level}、HP ${hp}`);</code> と書く。',
    output: `リナ は Lv.2、HP 70
string number boolean`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript 練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }`
    }
  },
  {
    id: 'js-03',
    phase: '基礎編：条件分岐と繰り返し',
    title: '条件分岐',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は if・else if・else と論理演算子を使い、さいころの目から攻撃の結果を判定する。</p>
<p>if 文は、条件が true のときに限り続くブロックを実行する。else if は前の条件が false のときに次の条件を調べ、else は残りのすべての場合を受け持つ。比較演算子 <code>===</code> は、型と値の両方が等しいかを調べる。</p>
<p>論理演算子は、条件を組み合わせる記号である。<code>&amp;&amp;</code>（かつ）は両方が true のとき、<code>||</code>（または）はどちらかが true のときに true になる。<code>!</code> は true と false を反転する。</p>`,
    code: `const dice = 6;
const hasSword = true;

if (dice === 6 && hasSword) {
  console.log('会心の一撃');
} else if (dice >= 4) {
  console.log('攻撃が命中した');
} else {
  console.log('攻撃は外れた');
}

const mp = 3;
if (mp >= 5 || hasSword) {
  console.log('次のターンも攻撃できる');
}`,
    blank: 'if (dice === 6 && hasSword) {',
    placeholder: '// ここに「目が 6 かつ剣を持つ」の条件で始まる if 文の1行目が入る',
    token: /if\s*\(\s*dice\s*===\s*6\s*&&\s*hasSword\s*\)\s*\{/,
    hint: '<code>if (dice === 6 &amp;&amp; hasSword) {</code> と書く。',
    output: `会心の一撃
次のターンも攻撃できる`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript 練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }`
    }
  },
  {
    id: 'js-04',
    phase: '基礎編：条件分岐と繰り返し',
    title: '繰り返し',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は for 文と while 文を使い、敵の HP が 0 になるまで攻撃を繰り返す。</p>
<p>for 文は、決まった回数の繰り返しに使う。<code>for (let i = 1; i &lt;= 3; i++)</code> は「i を 1 から始め、i が 3 以下の間、1回ごとに i を 1 増やす」という意味である。<code>i++</code> は i に 1 を足す書き方であり、<code>-=</code> は左の変数から右の値を引く書き方である。</p>
<p>while 文は、条件が true の間、ブロックを繰り返す。繰り返しの回数が実行の途中で決まる処理に向く。条件が常に true のままだと、繰り返しは永久に続き、ブラウザが固まる。そのため、ブロックの中で条件に関わる値を毎回変化させる。</p>`,
    code: `for (let turn = 1; turn <= 3; turn++) {
  console.log('ターン ' + turn + '：力をためる');
}

let enemyHp = 60;
let count = 0;
while (enemyHp > 0) {
  enemyHp -= 15;
  count++;
  console.log(count + '回目の攻撃。敵の残り HP：' + enemyHp);
}
console.log('敵を倒した。攻撃の回数：' + count);`,
    blank: 'while (enemyHp > 0) {',
    placeholder: '// ここに「敵の HP が 0 より大きい間」繰り返す while 文の1行目が入る',
    token: /while\s*\(\s*enemyHp\s*>\s*0\s*\)\s*\{/,
    hint: '<code>while (enemyHp &gt; 0) {</code> と書く。',
    output: `ターン 1：力をためる
ターン 2：力をためる
ターン 3：力をためる
1回目の攻撃。敵の残り HP：45
2回目の攻撃。敵の残り HP：30
3回目の攻撃。敵の残り HP：15
4回目の攻撃。敵の残り HP：0
敵を倒した。攻撃の回数：4`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript 練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }`
    }
  },
  {
    id: 'js-05',
    phase: '基礎編：配列・オブジェクト・クラス',
    title: '配列とオブジェクト',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者はキャラクターのオブジェクトを配列にまとめ、パーティ全体の情報を表示する。</p>
<p>配列は値を順番に並べる仕組みで、<code>[ ]</code> で作る。オブジェクトは値に名前（キー）を付けてまとめる仕組みで、<code>{ }</code> で作る。キーと値の組をプロパティと呼ぶ。2つを組み合わせると、複数のキャラクターのデータを1つの変数で扱える。</p>
<p><code>party[0].name</code> は「配列の0番目の要素の name プロパティ」を表す。for...of 文は配列の要素を先頭から順に取り出す。分割代入は、<code>const { name, hp } = member;</code> のように、オブジェクトのプロパティを同じ名前の変数に取り出す書き方である。</p>`,
    code: `const party = [
  { name: 'リナ', job: '剣士', hp: 120 },
  { name: 'ソラ', job: '魔法使い', hp: 70 },
  { name: 'ケン', job: '弓使い', hp: 90 }
];

console.log('リーダー：' + party[0].name);
console.log('人数：' + party.length);

let total = 0;
for (const member of party) {
  const { name, job, hp } = member;
  console.log(name + '（' + job + '）HP ' + hp);
  total += hp;
}
console.log('HP の合計：' + total);`,
    blank: '  const { name, job, hp } = member;',
    placeholder: '  // ここに member の name・job・hp を同じ名前の変数に取り出す分割代入が入る',
    token: /const\s*\{\s*name\s*,\s*job\s*,\s*hp\s*\}\s*=\s*member/,
    hint: '<code>const { name, job, hp } = member;</code> と書く。',
    output: `リーダー：リナ
人数：3
リナ（剣士）HP 120
ソラ（魔法使い）HP 70
ケン（弓使い）HP 90
HP の合計：280`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript 練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }`
    }
  },
  {
    id: 'js-06',
    phase: '基礎編：配列・オブジェクト・クラス',
    title: 'クラスと継承',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者はクラスと継承を使い、モンスターと、その特別な種類であるボスを作る。</p>
<p>クラスは、同じ形のオブジェクトを作る設計図である。constructor は new の時点で実行され、this（作られるオブジェクト自身）にプロパティを設定する。クラスの中に書いた関数はメソッドと呼ばれ、どのインスタンスからも呼び出せる。インスタンスは、クラスから作られたオブジェクトである。</p>
<p>継承は、既存のクラスをもとに新しいクラスを作る仕組みである。<code>class Boss extends Monster</code> と書くと、Boss は Monster のプロパティとメソッドを引き継ぐ。Boss の constructor では、最初に <code>super(…)</code> で親クラスの constructor を呼び出す。同じ名前のメソッドを書くと、親の処理を上書きできる。</p>`,
    code: `class Monster {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  roar() {
    console.log(this.name + 'がうなり声を上げた');
  }
}

class Boss extends Monster {
  constructor(name, hp, skill) {
    super(name, hp);
    this.skill = skill;
  }

  roar() {
    console.log(this.name + 'が' + this.skill + 'を放った');
  }
}

const slime = new Monster('スライム', 20);
const dragon = new Boss('ドラゴン', 500, '炎のブレス');

slime.roar();
dragon.roar();
console.log(dragon.name + 'の HP：' + dragon.hp);`,
    blank: '    super(name, hp);',
    placeholder: '    // ここに親クラスの constructor へ name と hp を渡す呼び出しが入る',
    token: /super\(\s*name\s*,\s*hp\s*\)/,
    hint: '<code>super(name, hp);</code> と書く。',
    output: `スライムがうなり声を上げた
ドラゴンが炎のブレスを放った
ドラゴンの HP：500`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript 練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }`
    }
  },
  {
    id: 'js-07',
    phase: '基礎編：モジュール',
    title: 'import と export',
    type: 'code',
    run: 'static',
    file: 'main.js',
    story: `<p class="lead">学習者は export と import を使い、さいころの関数を別のファイルに分けて読み込む。</p>
<p>モジュールは、1つのファイルを1つの部品として扱う仕組みである。ファイルの中の関数や定数は、初期状態ではそのファイルの中に閉じている。<code>export</code> を付けると、その値をほかのファイルへ公開できる。<code>import { 名前 } from './ファイル名.js';</code> は、公開された値を読み込む文である。</p>
<pre>// dice.js
export const SIDES = 6;
export function roll() {
  return Math.floor(Math.random() * SIDES) + 1;
}</pre>
<p>1つのファイルにつき1つの値を <code>export default</code> で公開する方法もある。この場合、読み込む側は <code>import 好きな名前 from …</code> と書き、波かっこを省く。ブラウザでモジュールを使うには <code>&lt;script type="module" src="main.js"&gt;</code> と書く。Node.js では package.json に <code>"type": "module"</code> を書く。Math.random は 0 以上 1 未満の数をランダムに返し、Math.floor は小数点以下を切り捨てる。</p>`,
    code: `import { roll, SIDES } from './dice.js';

console.log(SIDES + '面のさいころを振る');
const a = roll();
const b = roll();
console.log('出た目：' + a + ' と ' + b);
console.log('合計：' + (a + b));`,
    blank: `import { roll, SIDES } from './dice.js';`,
    placeholder: '// ここに dice.js から roll と SIDES を読み込む文が入る',
    token: /import\s*\{\s*(roll\s*,\s*SIDES|SIDES\s*,\s*roll)\s*\}\s*from\s*["']\.\/dice\.js["']/,
    hint: `<code>import { roll, SIDES } from './dice.js';</code> と書く。`,
    output: `$ node main.js
6面のさいころを振る
出た目：3 と 5
合計：8
（出た目は実行のたびに変わる）`
  },
  {
    id: 'js-08',
    phase: '基礎編：ロジックの腕試し',
    title: 'FizzBuzz と素数の判定',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は剰余演算子を使い、FizzBuzz と素数の判定のプログラムを書く。</p>
<p>剰余演算子 <code>%</code> は、割り算の余りを求める。<code>a % b === 0</code> は「a は b で割り切れる」という意味である。FizzBuzz は、1 から順に数を数え、3 の倍数で Fizz、5 の倍数で Buzz、両方の倍数で FizzBuzz と表示する問題である。15 の倍数の判定は最初に置く。後に置くと、3 の倍数の判定が先に成立する。</p>
<p>素数は、1 と自分自身の2つに限り約数を持つ、2 以上の整数である。判定の関数は、2 から √n（Math.sqrt(n)）までの数で順に割り、割り切れる数が見つかった時点で false を返す。どの数でも余りが出た場合、最後に true を返す。</p>`,
    code: `for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

function isPrime(n) {
  if (n < 2) return false;
  for (let d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) return false;
  }
  return true;
}

const primes = [];
for (let n = 1; n <= 30; n++) {
  if (isPrime(n)) primes.push(n);
}
console.log('30 以下の素数：' + primes.join(', '));`,
    blank: '    if (n % d === 0) return false;',
    placeholder: '    // ここに「n が d で割り切れたら false を返す」行が入る',
    token: /if\s*\(\s*n\s*%\s*d\s*===?\s*0\s*\)\s*\{?\s*return\s+false/,
    hint: '<code>if (n % d === 0) return false;</code> と書く。',
    output: `1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
30 以下の素数：2, 3, 5, 7, 11, 13, 17, 19, 23, 29`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript 練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }`
    }
  },
  {
    id: 'js-09',
    phase: '基礎編：ロジックの腕試し',
    title: 'カレンダーの日付計算',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者はうるう年の判定と Date オブジェクトを使い、指定した月の日数と1日の曜日を求める。</p>
<p>うるう年は、2月が29日まである年である。規則は「4 で割り切れる年はうるう年。ただし 100 で割り切れる年は平年。さらに 400 で割り切れる年はうるう年」である。この規則は、論理演算子を使って1つの式に書ける。<code>!==</code> は2つの値が異なるときに true になる比較演算子である。</p>
<p>Date オブジェクトを使う方法もある。<code>new Date(年, 月の番号, 0)</code> は「その月の0日」、つまり前の月の最終日を表す。月の番号は 0 が1月であり、2 は3月を表す。そのため <code>new Date(2026, 2, 0)</code> は3月0日、つまり2月の最終日になる。getDate は日を、getDay は曜日の番号（0 が日曜日）を返す。</p>`,
    code: `function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function daysInMonth(y, m) {
  return new Date(y, m, 0).getDate();
}

const weekNames = ['日', '月', '火', '水', '木', '金', '土'];

for (const y of [2024, 2026, 2100, 2000]) {
  console.log(y + '年はうるう年か：' + isLeapYear(y));
}

console.log('2026年2月の日数：' + daysInMonth(2026, 2));
console.log('2028年2月の日数：' + daysInMonth(2028, 2));

const first = new Date(2026, 11, 1);
console.log('2026年12月1日は' + weekNames[first.getDay()] + '曜日');`,
    blank: '  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;',
    placeholder: '  // ここにうるう年の規則を1つの式で返す行が入る',
    token: /return\s*\(?\s*y\s*%\s*4\s*===\s*0\s*&&\s*y\s*%\s*100\s*!==\s*0\s*\)?\s*\|\|\s*y\s*%\s*400\s*===\s*0/,
    hint: '<code>return (y % 4 === 0 &amp;&amp; y % 100 !== 0) || y % 400 === 0;</code> と書く。',
    output: `2024年はうるう年か：true
2026年はうるう年か：false
2100年はうるう年か：false
2000年はうるう年か：true
2026年2月の日数：28
2028年2月の日数：29
2026年12月1日は火曜日`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript 練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }`
    }
  },
  {
    id: 'js-10',
    phase: '応用編：DOM 操作',
    title: 'DOM 操作',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は createElement と appendChild を使い、配列のデータからカードゲームの手札を画面に並べる。</p>
<p>DOM は、ブラウザが HTML の各要素を JavaScript のオブジェクトとして扱う仕組みである。document.querySelector は CSS セレクタに一致する最初の要素を返す。document.createElement は新しい要素を作り、appendChild は要素を親要素の末尾に加える。</p>
<p>配列のデータを for...of で順に取り出し、要素を作って画面に加えると、データの数に応じた画面が自動でできる。textContent は要素の文字を設定するプロパティである。dataset は <code>data-</code> で始まる属性を読み書きするプロパティであり、要素に追加の情報を持たせる用途に使う。children は子要素の一覧である。</p>`,
    code: `const hand = [
  { name: 'ファイア', power: 30 },
  { name: 'アイス', power: 20 },
  { name: 'サンダー', power: 40 },
  { name: 'ヒール', power: 0 }
];

const area = document.querySelector('#hand');

for (const card of hand) {
  const div = document.createElement('div');
  div.className = 'card';
  div.dataset.power = card.power;
  div.textContent = card.name + '（' + card.power + '）';
  area.appendChild(div);
}

console.log('手札の枚数：' + area.children.length);`,
    blank: '  area.appendChild(div);',
    placeholder: '  // ここに作った div を area の末尾に加える命令が入る',
    token: /area\.appendChild\(\s*div\s*\)/,
    hint: '<code>area.appendChild(div);</code> と書く。',
    output: `手札の枚数：4`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>カードバトル</h1>
  <div id="hand" class="hand"></div>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #14213d; color: #fff; }
.hand { display: flex; flex-wrap: wrap; gap: 10px; }
.card { width: 90px; height: 120px; display: grid; place-items: center; text-align: center; background: #fca311; color: #14213d; font-weight: bold; border-radius: 10px; }`
    }
  },
  {
    id: 'js-11',
    phase: '応用編：イベントとクラス操作',
    title: 'イベントと classList',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者はクリックのイベントと classList.toggle を使い、選んだカードを強調表示する。</p>
<p>addEventListener は、要素にイベントの処理（イベントリスナー）を登録する。処理の関数の引数 event には、出来事の詳しい情報が入る。event.currentTarget は、リスナーを登録した要素を指す。querySelectorAll は、セレクタに一致するすべての要素を返す。</p>
<p>classList は、要素の class 属性を操作するプロパティである。add はクラスを加え、remove はクラスを外し、toggle はクラスの有無を切り替える。CSS 側に <code>.card.selected</code> のルールを用意すると、JavaScript はクラスの付け外しのみで見た目を変えられる。見た目を CSS に、動きを JavaScript に分ける書き方は、修正のしやすいコードにつながる。</p>`,
    code: `const hand = ['ファイア', 'アイス', 'サンダー', 'ヒール'];

const area = document.querySelector('#hand');
const info = document.querySelector('#info');

for (const name of hand) {
  const div = document.createElement('div');
  div.className = 'card';
  div.textContent = name;
  div.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('selected');
    const count = document.querySelectorAll('.card.selected').length;
    info.textContent = '選んだカード：' + count + '枚';
  });
  area.appendChild(div);
}`,
    blank: `    event.currentTarget.classList.toggle('selected');`,
    placeholder: '    // ここにクリックされたカードの selected クラスを切り替える命令が入る',
    token: /event\.currentTarget\.classList\.toggle\(\s*["']selected["']\s*\)/,
    hint: `<code>event.currentTarget.classList.toggle('selected');</code> と書く。`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>カードバトル</h1>
  <p id="info">選んだカード：0枚</p>
  <div id="hand" class="hand"></div>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #14213d; color: #fff; }
.hand { display: flex; flex-wrap: wrap; gap: 10px; }
.card { width: 90px; height: 120px; display: grid; place-items: center; background: #fca311; color: #14213d; font-weight: bold; border-radius: 10px; cursor: pointer; transition: transform .15s; }
.card.selected { transform: translateY(-12px); outline: 3px solid #ffffff; background: #ffd166; }`
    }
  },
  {
    id: 'js-12',
    phase: '応用編：非同期処理と API 通信',
    title: 'fetch と async/await',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は fetch と async/await を使い、Web API から ToDo のデータを取得して画面に表示する。</p>
<p>Web API は、URL にアクセスするとデータを返す仕組みである。多くの API は JSON 形式でデータを返す。fetch は、指定した URL にリクエスト（要求）を送る関数である。通信には時間がかかるため、fetch は結果の代わりに Promise を返す。Promise は「後で結果が届く約束」を表すオブジェクトである。</p>
<p>非同期処理は、時間のかかる処理の完了を待つ間に、ほかの処理を先に進める仕組みである。async を付けた関数の中では、<code>await</code> で Promise の結果が届くまで待てる。<code>await res.json()</code> は、届いた本文を JSON として読み、オブジェクトに変える。通信の失敗に備え、try...catch でエラーを受け止める。コンソールでは、関数の外の console.log が先に表示される。</p>`,
    code: `const URL_TODO = 'https://jsonplaceholder.typicode.com/todos/1';
const out = document.querySelector('#out');

async function loadTodo() {
  try {
    out.textContent = '読み込み中…';
    const res = await fetch(URL_TODO);
    const todo = await res.json();
    out.textContent = 'ToDo #' + todo.id + '：' + todo.title;
    console.log('完了済みか：' + todo.completed);
  } catch (error) {
    out.textContent = '通信に失敗した：' + error.message;
  }
}

loadTodo();
console.log('fetch の完了を待つ間に、この行が先に実行される');`,
    blank: '    const res = await fetch(URL_TODO);',
    placeholder: '    // ここに URL_TODO へリクエストを送り、結果を待って res に入れる行が入る',
    token: /const\s+res\s*=\s*await\s+fetch\(\s*URL_TODO\s*\)/,
    hint: '<code>const res = await fetch(URL_TODO);</code> と書く。',
    output: `fetch の完了を待つ間に、この行が先に実行される
完了済みか：false
（画面）ToDo #1：delectus aut autem`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>API からのデータ</h1>
  <p id="out" class="out"></p>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }
.out { padding: 14px; background: #1f2937; border-left: 4px solid #22c55e; border-radius: 6px; }`
    }
  },
  {
    id: 'js-13',
    phase: '応用編：ブラウザの機能',
    title: 'setTimeout と localStorage',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は setTimeout で反応速度ゲームを作り、最高記録を localStorage に保存する。</p>
<p>setTimeout は、指定したミリ秒の後に関数を1回実行する。1000 ミリ秒は1秒である。Date.now() は、現在の時刻をミリ秒の数値で返す。合図の時刻とクリックの時刻の差が、反応にかかった時間になる。合図までの時間は Math.random で毎回変える。</p>
<p>localStorage は、ブラウザにデータを保存する仕組みであり、ページを閉じた後もデータが残る。setItem(キー, 値) で保存し、getItem(キー) で取り出す。値は文字列で保存されるため、数値として使うときは Number で変換する。初回の getItem は null を返し、Number(null) は 0 になる。</p>`,
    code: `const button = document.querySelector('#btn');
const message = document.querySelector('#msg');
const bestText = document.querySelector('#best');

let best = Number(localStorage.getItem('reaction-best'));
let startTime = 0;
let ready = false;

function showBest() {
  if (best > 0) {
    bestText.textContent = '最高記録：' + best + ' ミリ秒';
  } else {
    bestText.textContent = '最高記録：未登録';
  }
}

button.addEventListener('click', () => {
  if (ready === false) {
    message.textContent = '合図を待つ…';
    button.disabled = true;
    const wait = 1000 + Math.floor(Math.random() * 2000);
    setTimeout(() => {
      message.textContent = '今だ。クリック';
      startTime = Date.now();
      ready = true;
      button.disabled = false;
    }, wait);
    return;
  }

  const time = Date.now() - startTime;
  ready = false;
  message.textContent = '反応時間：' + time + ' ミリ秒。もう1回はボタンを押す';
  if (best === 0 || time < best) {
    best = time;
    localStorage.setItem('reaction-best', best);
  }
  showBest();
});

showBest();`,
    blank: `    localStorage.setItem('reaction-best', best);`,
    placeholder: `    // ここに best の値を 'reaction-best' の名前で保存する命令が入る`,
    token: /localStorage\.setItem\(\s*["']reaction-best["']\s*,\s*best\s*\)/,
    hint: `<code>localStorage.setItem('reaction-best', best);</code> と書く。`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>反応速度ゲーム</h1>
  <p id="msg" class="msg">ボタンを押すとゲームが始まる</p>
  <button id="btn">ボタン</button>
  <p id="best"></p>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; text-align: center; background: #10141f; color: #e5e7eb; }
.msg { font-size: 20px; min-height: 30px; }
button { padding: 16px 40px; font-size: 20px; border: none; border-radius: 12px; background: #22c55e; color: #fff; cursor: pointer; }
button:disabled { background: #6b7280; }`
    }
  },
  {
    id: 'js-14',
    phase: '応用編：ブラウザの機能',
    title: 'requestAnimationFrame',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は requestAnimationFrame を使い、キャンバスの中で跳ね回るボールのアニメーションを作る。</p>
<p>アニメーションは、位置を小刻みに変えた絵を連続で描き直す処理である。requestAnimationFrame は、ブラウザが次に画面を描き直す直前に、指定した関数を1回実行する。関数の最後で再び requestAnimationFrame を呼ぶと、1秒に約60回の描画が続く。</p>
<p>canvas は、JavaScript で図形を描く HTML 要素である。getContext('2d') で描画用のオブジェクトを取り出し、clearRect で前の絵を消し、arc と fill で円を描く。ボールが壁に達したら速度の符号を反転させ、跳ね返りを表す。</p>`,
    code: `const canvas = document.querySelector('#stage');
const ctx = canvas.getContext('2d');

const ball = { x: 40, y: 40, vx: 3, vy: 2, r: 12 };

function update() {
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.x < ball.r || ball.x > canvas.width - ball.r) {
    ball.vx = -ball.vx;
  }
  if (ball.y < ball.r || ball.y > canvas.height - ball.r) {
    ball.vy = -ball.vy;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = '#ffd166';
  ctx.fill();

  requestAnimationFrame(update);
}

update();`,
    blank: '  requestAnimationFrame(update);',
    placeholder: '  // ここに次の描画の直前に update を再び実行させる命令が入る',
    token: /requestAnimationFrame\(\s*update\s*\)/,
    hint: '関数の最後に <code>requestAnimationFrame(update);</code> と書く。',
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <h1>跳ねるボール</h1>
  <canvas id="stage" width="320" height="200"></canvas>
  <script src="game.js"></script>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }
canvas { display: block; background: #1d3557; border-radius: 8px; max-width: 100%; }`
    }
  },
  {
    id: 'js-15',
    phase: '応用編：データ処理の腕試し',
    title: 'スコアのランキング',
    type: 'code',
    run: 'web',
    file: 'game.js',
    story: `<p class="lead">学習者は filter・sort・reduce・map を組み合わせ、ゲームのスコアからランキングを作る。</p>
<p>配列のメソッドを組み合わせると、データの加工を短く書ける。filter は条件に合う要素を集め、map は各要素を変換し、reduce は全要素から1つの値（合計など）を作る。sort は比較の関数に従って要素を並べ替える。<code>(a, b) =&gt; b.score - a.score</code> は、スコアの大きい順（降順）に並べる比較の関数である。</p>
<p>sort は元の配列そのものを並べ替える。元の配列を残すため、スプレッド構文 <code>[...stage2]</code> で複製を作ってから並べ替える。スプレッド構文は、配列の要素を展開して並べる書き方である。Set は同じ値を1つにまとめる集合であり、参加者の名前の重複を取り除く用途に使う。</p>`,
    code: `const scores = [
  { player: 'リナ', stage: 1, score: 820 },
  { player: 'ソラ', stage: 1, score: 950 },
  { player: 'ケン', stage: 2, score: 400 },
  { player: 'リナ', stage: 2, score: 1200 },
  { player: 'ソラ', stage: 2, score: 760 }
];

const stage2 = scores.filter((s) => s.stage === 2);
const ranking = [...stage2].sort((a, b) => b.score - a.score);

ranking.forEach((s, i) => {
  console.log((i + 1) + '位 ' + s.player + ' ' + s.score + '点');
});

const total = scores.reduce((sum, s) => sum + s.score, 0);
console.log('全スコアの合計：' + total);

const players = [...new Set(scores.map((s) => s.player))];
console.log('参加者：' + players.join('、'));`,
    blank: 'const ranking = [...stage2].sort((a, b) => b.score - a.score);',
    placeholder: '// ここに stage2 の複製をスコアの大きい順に並べた ranking を作る行が入る',
    token: /const\s+ranking\s*=\s*\[\s*\.\.\.stage2\s*\]\.sort\(\s*\(\s*a\s*,\s*b\s*\)\s*=>\s*b\.score\s*-\s*a\.score\s*\)/,
    hint: '<code>const ranking = [...stage2].sort((a, b) =&gt; b.score - a.score);</code> と書く。',
    output: `1位 リナ 1200点
2位 ソラ 760点
3位 ケン 400点
全スコアの合計：4130
参加者：リナ、ソラ、ケン`,
    ctx: {
      html: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"></head>
<body>
  <h1>JavaScript 練習</h1>
  <p>結果はプレビューの下のコンソールに表示される。</p>
</body>
</html>`,
      css: `body { font-family: sans-serif; margin: 24px; background: #10141f; color: #e5e7eb; }`
    }
  },
  {
    id: 'js-16',
    phase: '実践編：ローカル開発環境',
    title: 'ローカル開発環境',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は自分のパソコンに Node.js・VS Code・npm の開発環境を整え、プロジェクトのフォルダを作る。</p>
<p>ローカル開発環境は、自分のパソコンの中でプログラムを書き、実行し、確かめるための道具の組み合わせである。Node.js のインストールは、最初のレッスン「パソコンで動かす準備」の手順で行う。macOS では Homebrew の <code>brew install node</code>、Windows では <code>winget install OpenJS.NodeJS.LTS</code> が手早い。複数のバージョンを切り替える場合は、macOS では nvm、Windows では nvm-windows などのバージョン管理ツールを使う。</p>
<p>npm（Node Package Manager）は、Node.js に付属するパッケージ管理ツールである。パッケージは、ほかの開発者が公開したプログラムの部品である。<code>npm init -y</code> はプロジェクトの設定ファイル package.json を作る。<code>npm install パッケージ名</code> はパッケージを node_modules フォルダに入れ、package.json の dependencies に記録する。</p>
<p>VS Code では、プロジェクトのフォルダを開き、メニューの「ターミナル → 新しいターミナル」でフォルダの位置のターミナルを開く。拡張機能「ESLint」はコードの誤りを指摘し、「Prettier」はコードの書式を自動で整える。package.json の scripts に命令を登録すると、<code>npm run 名前</code> でその命令を実行できる。</p>`,
    output: `$ mkdir dungeon-game
$ cd dungeon-game
$ npm init -y
Wrote to /Users/aoi/dungeon-game/package.json:
{
  "name": "dungeon-game",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  }
}
$ npm install dayjs
added 1 package in 1s`
  },
  {
    id: 'js-17',
    phase: '実践編：ローカル環境での実践',
    title: 'node コマンドでの実行',
    type: 'code',
    run: 'static',
    file: 'dungeon.js',
    story: `<p class="lead">学習者は Node.js 用のダンジョン探索プログラムを書き、ターミナルの node コマンドで実行する。</p>
<p>Node.js では、<code>node ファイル名</code> と入力すると、そのファイルの JavaScript が実行される。console.log の出力はターミナルに表示される。document や localStorage はブラウザ専用の機能である。Node.js では代わりに、ファイルの操作やコマンドの引数の受け取りなど、パソコン向けの機能を使う。</p>
<p>process.argv は、コマンドに続けて入力した値（コマンドライン引数）を収めた配列である。0番目は node の場所、1番目はファイルの場所であり、2番目以降に利用者の入力が入る。<code>node dungeon.js 5</code> と入力すると、<code>process.argv[2]</code> は文字列の '5' になる。Number で数値に変換し、結果が 0 や NaN（数値に変換できなかった印）の場合は <code>|| 3</code> で 3 を使う。break は繰り返しを途中で終える命令である。</p>`,
    code: `// 使い方：node dungeon.js 階の数
const floors = Number(process.argv[2]) || 3;

let hp = 30;
for (let f = 1; f <= floors; f++) {
  const damage = f * 4;
  hp -= damage;
  console.log(\`地下\${f}階：罠で \${damage} のダメージ。残り HP \${hp}\`);
  if (hp <= 0) {
    console.log('力尽きた。地上へ戻る。');
    break;
  }
}
if (hp > 0) {
  console.log(\`\${floors}階を踏破した。\`);
}`,
    blank: 'const floors = Number(process.argv[2]) || 3;',
    placeholder: '// ここにコマンドライン引数の2番目を数値に変えて floors に入れる行（初期値は 3）が入る',
    token: /const\s+floors\s*=\s*Number\(\s*process\.argv\[\s*2\s*\]\s*\)\s*\|\|\s*3/,
    hint: '<code>const floors = Number(process.argv[2]) || 3;</code> と書く。',
    output: `$ node dungeon.js 2
地下1階：罠で 4 のダメージ。残り HP 26
地下2階：罠で 8 のダメージ。残り HP 18
2階を踏破した。
$ node dungeon.js 5
地下1階：罠で 4 のダメージ。残り HP 26
地下2階：罠で 8 のダメージ。残り HP 18
地下3階：罠で 12 のダメージ。残り HP 6
地下4階：罠で 16 のダメージ。残り HP -10
力尽きた。地上へ戻る。`
  },
  {
    id: 'js-18',
    phase: '実践編：ローカル環境での実践',
    title: 'ファイルの読み書きと npm スクリプト',
    type: 'code',
    run: 'static',
    file: 'score.js',
    story: `<p class="lead">学習者は fs モジュールでスコアの JSON ファイルを読み書きし、npm スクリプトでプログラムを実行する。</p>
<p>fs は、Node.js に組み込まれたファイル操作のモジュールである。readFileSync はファイルの中身を文字列で読み、writeFileSync は文字列をファイルに書き込む。existsSync はファイルの有無を true か false で返す。名前の Sync は、処理の完了を待ってから次の行へ進む同期処理を表す。</p>
<p>このプログラムは import を使うため、package.json に <code>"type": "module"</code> を書く。さらに scripts に <code>"start": "node score.js"</code> と書くと、<code>npm start</code> で同じ命令を実行できる。実行のたびにスコアが scores.json に追記され、記録が積み上がる。</p>
<pre>{
  "name": "dungeon-game",
  "type": "module",
  "scripts": {
    "start": "node score.js"
  }
}</pre>`,
    code: `import fs from 'node:fs';

const FILE = 'scores.json';

let scores = [];
if (fs.existsSync(FILE)) {
  scores = JSON.parse(fs.readFileSync(FILE, 'utf8'));
}

const newScore = Math.floor(Math.random() * 1000);
scores.push(newScore);
fs.writeFileSync(FILE, JSON.stringify(scores));

const best = Math.max(...scores);
console.log('今回のスコア：' + newScore);
console.log('記録の数：' + scores.length + '、最高：' + best);`,
    blank: 'fs.writeFileSync(FILE, JSON.stringify(scores));',
    placeholder: '// ここに scores を JSON の文字列に変えて FILE に書き込む命令が入る',
    token: /fs\.writeFileSync\(\s*FILE\s*,\s*JSON\.stringify\(\s*scores\s*\)\s*\)/,
    hint: '<code>fs.writeFileSync(FILE, JSON.stringify(scores));</code> と書く。',
    output: `$ npm start

> dungeon-game@1.0.0 start
> node score.js

今回のスコア：640
記録の数：1、最高：640
$ npm start
（略）
今回のスコア：215
記録の数：2、最高：640
$ cat scores.json
[640,215]`
  }
];
