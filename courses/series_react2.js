SERIES.react2 = [
  {
    id: 'react2-01',
    phase: '基礎編：開発の準備',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は、自分のパソコンに Node.js を入れ、Vite で React のプロジェクトを作って起動する。</p>
<p>Node.js は、ブラウザの外で JavaScript を実行するための環境である。npm は Node.js に付属する道具で、ライブラリ（よく使う機能をまとめた部品集）を入れる役割をもつ。Vite は、React の開発用サーバーとプロジェクトのひな形を用意する道具である。</p>
<p><strong>macOS</strong> では、公式サイト（nodejs.org）から LTS 版のインストーラーを入れるか、Homebrew で <code>brew install node</code> を実行する。<strong>Windows</strong> では、公式サイトのインストーラーを使うか、PowerShell で <code>winget install OpenJS.NodeJS.LTS</code> を実行する。どちらの OS でも、ターミナルで <code>node -v</code> と <code>npm -v</code> を実行し、バージョン番号が表示されれば準備は完了である。</p>
<p>VS Code では、メニューの「ターミナル」→「新しいターミナル」で画面下にターミナルを開き、下のコマンドを順に実行する。拡張機能は「ES7+ React/Redux/React-Native snippets」「ESLint」「Prettier - Code formatter」を入れると書きやすくなる。応用編の TypeScript のレッスンでは、テンプレートを <code>react-ts</code> にしたプロジェクトを使う。</p>`,
    code: `node -v
npm -v
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`,
    output: `$ node -v
v22.11.0
$ npm -v
10.9.0
$ npm create vite@latest my-app -- --template react
Scaffolding project in ./my-app...
Done.
$ cd my-app
$ npm install
added 150 packages in 12s
$ npm run dev

  VITE v7.1.0  ready in 320 ms

  ➜  Local:   http://localhost:5173/

（ブラウザで http://localhost:5173/ を開くと、Vite と React の最初の画面が表示される。
 src/App.jsx を Hello, React と表示する内容に書き換えて保存すると、画面がすぐに更新される）`
  },
  {
    id: 'react2-02',
    phase: '基礎編：コンポーネントの作り方',
    title: 'JSX と関数コンポーネント',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、関数コンポーネントの中で JSX を書き、変数の値を画面に表示する。</p>
<p>コンポーネントは、画面の部品を表す関数である。関数の名前は大文字で始め、return で画面の見た目を返す。JSX は、JavaScript の中に HTML に似たタグを書ける記法である。</p>
<p>JSX の中で波かっこ <code>{ }</code> を使うと、JavaScript の値や式を埋め込める。<code>&lt;p&gt;主人公：{hero}&lt;/p&gt;</code> と書くと、変数 hero の中身が文字として表示される。return で返す要素は1つの親要素にまとめる。</p>`,
    code: `export default function App() {
  const hero = '勇者アオイ';
  const level = 5;

  return (
    <div>
      <h1>冒険の記録</h1>
      <p>主人公：{hero}</p>
      <p>レベル：{level + 1}（次のレベル）</p>
    </div>
  );
}`,
    blank: `<p>主人公：{hero}</p>`,
    placeholder: `{/* 「主人公：」に続けて変数 hero の値を表示する p 要素が入る */}`,
    token: /<p>\s*主人公：\s*\{\s*hero\s*\}\s*<\/p>/,
    hint: `波かっこで変数を埋め込む。<code>&lt;p&gt;主人公：{hero}&lt;/p&gt;</code>`
  },
  {
    id: 'react2-03',
    phase: '基礎編：コンポーネントの作り方',
    title: 'Props によるデータの受け渡し',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、Props を使って1つのカード部品に異なるモンスターの情報を渡す。</p>
<p>Props（プロップス）は、親のコンポーネントから子のコンポーネントへ渡す値である。親は <code>&lt;MonsterCard name="スライム" hp={12} /&gt;</code> のように、HTML の属性と同じ形で値を書く。文字列は引用符で囲み、数値や変数は波かっこで囲む。</p>
<p>子のコンポーネントは、引数で Props を受け取る。<code>function MonsterCard({ name, hp })</code> のように分割代入で書くと、name と hp をそのまま変数として使える。同じ部品に別の値を渡すことで、見た目のそろったカードを何枚でも作れる。</p>`,
    code: `function MonsterCard({ name, hp }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>HP：{hp}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>モンスター図鑑</h1>
      <MonsterCard name="スライム" hp={12} />
      <MonsterCard name="ドラゴン" hp={300} />
    </div>
  );
}`,
    blank: `<MonsterCard name="ドラゴン" hp={300} />`,
    placeholder: `{/* name に「ドラゴン」、hp に 300 を渡す MonsterCard が入る */}`,
    token: /<MonsterCard\s+name=["']ドラゴン["']\s+hp=\{\s*300\s*\}\s*\/>/,
    hint: `文字列は引用符、数値は波かっこで渡す。<code>&lt;MonsterCard name="ドラゴン" hp={300} /&gt;</code>`
  },
  {
    id: 'react2-04',
    phase: '基礎編：表示の出し分け',
    title: '条件付きレンダリング',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、HP の値に応じて表示を切り替えるコンポーネントを作る。</p>
<p>条件付きレンダリングは、条件によって画面に出す内容を変える書き方である。React では、JavaScript の if 文、三項演算子（<code>条件 ? A : B</code>）、論理演算子 <code>&amp;&amp;</code> を使って表示を切り替える。</p>
<p><code>{条件 &amp;&amp; &lt;要素 /&gt;}</code> と書くと、条件が true のときに限り要素が表示される。条件が false のとき、React はその部分を空として扱う。if 文は JSX の外で使い、早い段階で別の JSX を return する場面に向いている。</p>`,
    code: `function Status({ name, hp }) {
  if (hp <= 0) {
    return <p>{name} は倒れた</p>;
  }
  return (
    <div>
      <p>{name} の HP：{hp}（{hp >= 50 ? '元気' : '注意'}）</p>
      {hp < 30 && <strong>ピンチ</strong>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Status name="アオイ" hp={80} />
      <Status name="ハルト" hp={20} />
      <Status name="ミオ" hp={0} />
    </div>
  );
}`,
    blank: `{hp < 30 && <strong>ピンチ</strong>}`,
    placeholder: `{/* hp が 30 未満のときに限り「ピンチ」を strong で表示する式が入る */}`,
    token: /\{\s*hp\s*<\s*30\s*&&\s*<strong>\s*ピンチ\s*<\/strong>\s*\}/,
    hint: `論理演算子 &amp;&amp; を使う。<code>{hp &lt; 30 &amp;&amp; &lt;strong&gt;ピンチ&lt;/strong&gt;}</code>`
  },
  {
    id: 'react2-05',
    phase: '基礎編：表示の出し分け',
    title: 'リスト表示と key',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、配列の map メソッドで道具屋の商品一覧を表示する。</p>
<p>map メソッドは、配列の各要素を変換して新しい配列を作る。React では、データの配列を map で JSX の配列に変換し、そのまま波かっこの中に置くことで一覧を表示する。</p>
<p>一覧の各要素には key という特別な属性を付ける。key は、React が要素を見分けるための目印であり、兄弟の要素どうしで互いに異なる値を使う。データベースの id のように、要素ごとに固有の値が key に適している。</p>`,
    code: `const items = [
  { id: 1, name: 'やくそう', price: 10 },
  { id: 2, name: 'どうのつるぎ', price: 100 },
  { id: 3, name: 'かわのたて', price: 70 },
];

export default function App() {
  return (
    <div>
      <h1>道具屋</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}：{item.price} G</li>
        ))}
      </ul>
    </div>
  );
}`,
    blank: `<li key={item.id}>{item.name}：{item.price} G</li>`,
    placeholder: `{/* key に item.id を指定し、「名前：値段 G」の形で表示する li 要素が入る */}`,
    token: /<li\s+key=\{\s*item\.id\s*\}\s*>\s*\{\s*item\.name\s*\}\s*：\s*\{\s*item\.price\s*\}\s*G\s*<\/li>/,
    hint: `<code>&lt;li key={item.id}&gt;{item.name}：{item.price} G&lt;/li&gt;</code>`
  },
  {
    id: 'react2-06',
    phase: '基礎編：コンポーネントの動き',
    title: 'イベント処理と useState',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、ボタンを押すたびに拾ったコインの枚数が増える画面を作る。</p>
<p>イベント処理は、クリックや入力などの操作に反応して関数を実行する仕組みである。JSX では <code>onClick={handleClick}</code> のように、属性に関数そのものを渡す。<code>onClick={handleClick()}</code> のようにかっこを付けると描画の時点で関数が実行されるため、関数名のみを書く。</p>
<p>state は、コンポーネントが保持し、変化すると画面を再描画させる値である。useState は state を作る Hook（React の機能を関数から使うための仕組み）である。<code>const [coins, setCoins] = useState(0);</code> は、初期値 0 の state と、その値を更新する関数 setCoins を作る。setCoins に新しい値を渡すと、React は画面を描き直す。</p>`,
    code: `import { useState } from 'react';

export default function App() {
  const [coins, setCoins] = useState(0);

  const handleClick = () => {
    setCoins(coins + 1);
  };

  return (
    <div>
      <h1>コイン：{coins} 枚</h1>
      <button onClick={handleClick}>コインを拾う</button>
      <button onClick={() => setCoins(0)}>リセット</button>
    </div>
  );
}`,
    blank: `const [coins, setCoins] = useState(0);`,
    placeholder: `// 初期値 0 の state「coins」と更新用の関数「setCoins」を作る処理が入る`,
    token: /const\s*\[\s*coins\s*,\s*setCoins\s*\]\s*=\s*useState\(\s*0\s*\)/,
    hint: `分割代入で受け取る。<code>const [coins, setCoins] = useState(0);</code>`
  },
  {
    id: 'react2-07',
    phase: '基礎編：スタイリング',
    title: 'style 属性によるスタイリング',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、style 属性にオブジェクトを渡して、武器のカードに色と影を付ける。</p>
<p>JSX の style 属性には、文字列の代わりに JavaScript のオブジェクトを渡す。プロパティ名は <code>background-color</code> のようなハイフン区切りから、<code>backgroundColor</code> のようなキャメルケース（2語目以降の先頭を大文字にする書き方）に変える。</p>
<p>値は文字列で書く。数値を書くと、React は単位として px を補う。<code>style={{ marginTop: 0 }}</code> の外側の波かっこは JSX の埋め込み、内側の波かっこはオブジェクトを表す。スタイルを変数にまとめると、同じ見た目を複数の要素で使い回せる。</p>`,
    code: `export default function App() {
  const cardStyle = {
    width: 220,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0, color: '#facc15' }}>ほのおの剣</h2>
      <p>攻撃力 +25</p>
      <p style={{ fontSize: 12, opacity: 0.7 }}>火山の奥で見つかった剣</p>
    </div>
  );
}`,
    blank: `backgroundColor: '#1e293b',`,
    placeholder: `// 背景色を #1e293b にするプロパティが入る（キャメルケースで書く）`,
    token: /backgroundColor\s*:\s*["']#1e293b["']/,
    hint: `ハイフンの代わりにキャメルケースで書く。<code>backgroundColor: '#1e293b',</code>`
  },
  {
    id: 'react2-08',
    phase: '基礎編：スタイリング',
    title: 'CSS Modules・Tailwind CSS・Emotion の比較',
    type: 'info',
    run: 'static',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、React でよく使われる3つのスタイリング手法の特徴を比べる。</p>
<p><strong>CSS Modules</strong> は、<code>Card.module.css</code> のような名前の CSS ファイルを import して使う方法である。クラス名はファイルごとに自動で固有の名前に変換されるため、別の部品と名前がぶつかる心配が減る。普通の CSS の書き方をそのまま使える点が長所である。</p>
<p><strong>Tailwind CSS</strong> は、<code>p-4</code> や <code>rounded-xl</code> のような短いクラスを組み合わせて見た目を作る方法である。CSS ファイルを行き来する手間が減り、開発の速さに優れる。<strong>Emotion</strong> は、JavaScript の中に CSS を書く CSS-in-JS という方法の代表であり、props や state に応じてスタイルを変える処理に向いている。どの手法を選ぶかは、チームの好みとプロジェクトの規模で決める。</p>`,
    code: `// 1. CSS Modules（Card.module.css に .card { padding: 16px; } を書く）
import styles from './Card.module.css';
function CardA() {
  return <div className={styles.card}>CSS Modules</div>;
}

// 2. Tailwind CSS（クラス名で見た目を指定する）
function CardB() {
  return <div className="p-4 rounded-xl bg-slate-800 text-white">Tailwind CSS</div>;
}

// 3. Emotion（JavaScript の中に CSS を書く）
import styled from '@emotion/styled';
const Box = styled.div\`
  padding: 16px;
  border-radius: 12px;
  background: \${(props) => (props.danger ? '#ef4444' : '#1e293b')};
\`;
function CardC() {
  return <Box danger>Emotion</Box>;
}`,
    output: `■ CSS Modules
  書き方：普通の CSS ＋ className={styles.名前}
  長所　：CSS の知識をそのまま使える。クラス名の衝突が起きにくい。

■ Tailwind CSS
  書き方：className="p-4 rounded-xl" のような小さなクラスの組み合わせ
  長所　：ファイルを行き来する手間が減る。デザインの値がそろう。

■ Emotion（CSS-in-JS）
  書き方：JavaScript の中に CSS を書く
  長所　：props や state に応じてスタイルを変えやすい。`
  },
  {
    id: 'react2-09',
    phase: '基礎編：さまざまな Hooks',
    title: 'useEffect と useRef',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、useEffect と useRef を使ってスタート・ストップ機能付きのストップウォッチを作る。</p>
<p>useEffect は、描画の後に行う処理（副作用）を登録する Hook である。副作用とは、タイマーの開始や通信など、画面の描画以外の処理を指す。第2引数の配列（依存配列）に入れた値が変化したときに、React は処理を実行し直す。</p>
<p>useEffect の中で関数を return すると、その関数は後片付け（クリーンアップ）として次の実行の前に呼ばれる。タイマーを止める処理をここに書くと、タイマーが重複して動く事態を防げる。useRef は、再描画をまたいで値を保持する Hook である。<code>timerRef.current</code> への代入は画面の描き直しと切り離されて行われるため、タイマーの番号のような裏方の値の保存に向いている。</p>`,
    code: `import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 100);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  return (
    <div>
      <h1>{(time / 10).toFixed(1)} 秒</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? 'ストップ' : 'スタート'}
      </button>
      <button onClick={() => { setRunning(false); setTime(0); }}>リセット</button>
    </div>
  );
}`,
    blank: `return () => clearInterval(timerRef.current);`,
    placeholder: `// 後片付けとして timerRef.current のタイマーを止める関数を返す処理が入る`,
    token: /return\s*\(\s*\)\s*=>\s*clearInterval\(\s*timerRef\.current\s*\)/,
    hint: `アロー関数を return する。<code>return () =&gt; clearInterval(timerRef.current);</code>`
  },
  {
    id: 'react2-10',
    phase: '基礎編：さまざまな Hooks',
    title: 'カスタムフック',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、倒したモンスターの数を数えるカスタムフック useCounter を作り、2か所で使う。</p>
<p>カスタムフックは、Hooks を組み合わせた処理を1つの関数にまとめたものである。名前は use で始める決まりがある。同じ state の扱い方を複数のコンポーネントで使う場合に、カスタムフックにまとめるとコードの重複が減る。</p>
<p>カスタムフックを呼ぶたびに、React は独立した state を作る。下のコードでは、slime と dragon がそれぞれ別の count をもつ。カスタムフックは、使う側に渡したい値と関数をオブジェクトにまとめて return する。</p>`,
    code: `import { useState } from 'react';

function useCounter(initial) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(initial);
  return { count, increment, reset };
}

export default function App() {
  const slime = useCounter(0);
  const dragon = useCounter(0);

  return (
    <div>
      <p>スライムを倒した数：{slime.count}</p>
      <button onClick={slime.increment}>スライムを倒す</button>
      <p>ドラゴンを倒した数：{dragon.count}</p>
      <button onClick={dragon.increment}>ドラゴンを倒す</button>
      <hr />
      <button onClick={() => { slime.reset(); dragon.reset(); }}>記録を消す</button>
    </div>
  );
}`,
    blank: `return { count, increment, reset };`,
    placeholder: `// count・increment・reset の3つをオブジェクトにまとめて返す処理が入る`,
    token: /return\s*\{\s*count\s*,\s*increment\s*,\s*reset\s*\}/,
    hint: `オブジェクトの省略記法を使う。<code>return { count, increment, reset };</code>`
  },
  {
    id: 'react2-11',
    phase: '基礎編：リストの更新',
    title: 'イミュータブルな更新',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、パーティーの一覧に仲間を加える処理・レベルを上げる処理・外す処理を、元の配列はそのまま保ち、新しい配列を作る形で書く。</p>
<p>イミュータブル（不変）な更新とは、元のデータを直接変更する代わりに、変更後の新しいデータを作って state に渡す方法である。React は、state が新しい配列やオブジェクトに置き換わったことを検知して再描画する。push で元の配列に追加すると、React は配列を前と同じものと判断し、画面は古い表示のまま残る。</p>
<p>追加にはスプレッド構文 <code>[...party, 新しい要素]</code>、変更には map、削除には filter を使う。入れ子の深いデータでは、この書き方が長くなる。Immer というライブラリを使うと、<code>draft.push(…)</code> のような直接書き換える形で書いたコードから、自動で新しいデータを作れる。</p>`,
    code: `import { useState, useRef } from 'react';

export default function App() {
  const [party, setParty] = useState([
    { id: 1, name: 'アオイ', level: 5 },
    { id: 2, name: 'ハルト', level: 3 },
  ]);
  const nextId = useRef(3);

  const addMember = () => {
    setParty([...party, { id: nextId.current, name: '仲間' + nextId.current, level: 1 }]);
    nextId.current += 1;
  };

  const levelUp = (id) => {
    setParty(party.map((m) => (m.id === id ? { ...m, level: m.level + 1 } : m)));
  };

  const removeMember = (id) => {
    setParty(party.filter((m) => m.id !== id));
  };

  return (
    <div>
      <button onClick={addMember}>仲間を加える</button>
      <ul>
        {party.map((m) => (
          <li key={m.id}>
            {m.name}（Lv.{m.level}）
            <button onClick={() => levelUp(m.id)}>レベルアップ</button>
            <button onClick={() => removeMember(m.id)}>外す</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    blank: `setParty([...party, { id: nextId.current, name: '仲間' + nextId.current, level: 1 }]);`,
    placeholder: `// スプレッド構文で party の後ろに新しい仲間を加えた配列を setParty に渡す処理が入る`,
    token: /setParty\(\s*\[\s*\.\.\.party\s*,\s*\{\s*id\s*:\s*nextId\.current\s*,\s*name\s*:\s*["']仲間["']\s*\+\s*nextId\.current\s*,\s*level\s*:\s*1\s*\}\s*\]\s*\)/,
    hint: `<code>setParty([...party, { id: nextId.current, name: '仲間' + nextId.current, level: 1 }]);</code>`
  },
  {
    id: 'react2-12',
    phase: '基礎編：リストの更新',
    title: 'useReducer による状態の整理',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、useReducer を使って戦闘中の HP と回復薬の数をまとめて管理する。</p>
<p>useReducer は、state の更新方法を reducer という1つの関数に集める Hook である。reducer は、現在の state と action（何が起きたかを表すオブジェクト）を受け取り、新しい state を返す。更新の種類が多い画面では、処理が1か所にまとまり、読みやすさが上がる。</p>
<p><code>const [state, dispatch] = useReducer(reducer, initialState);</code> は、state と dispatch 関数を作る。dispatch に <code>{ type: 'heal' }</code> のような action を渡すと、React は reducer を呼び出して state を更新する。reducer の中でも、前のレッスンと同じくイミュータブルな更新を行う。</p>`,
    code: `import { useReducer } from 'react';

const initialState = { hp: 100, potions: 3, log: '戦いが始まった' };

function reducer(state, action) {
  switch (action.type) {
    case 'attack':
      return { ...state, hp: Math.max(state.hp - action.damage, 0), log: action.damage + ' のダメージを受けた' };
    case 'heal':
      if (state.potions === 0) return { ...state, log: '回復薬を使い切った' };
      return { ...state, hp: Math.min(state.hp + 30, 100), potions: state.potions - 1, log: 'HP を 30 回復した' };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>HP：{state.hp} / 100</h2>
      <p>回復薬：{state.potions} 個</p>
      <p>{state.log}</p>
      <button onClick={() => dispatch({ type: 'attack', damage: 25 })}>攻撃を受ける</button>
      <button onClick={() => dispatch({ type: 'heal' })}>回復する</button>
      <button onClick={() => dispatch({ type: 'reset' })}>最初から</button>
    </div>
  );
}`,
    blank: `const [state, dispatch] = useReducer(reducer, initialState);`,
    placeholder: `// reducer と initialState から state と dispatch を作る処理が入る`,
    token: /const\s*\[\s*state\s*,\s*dispatch\s*\]\s*=\s*useReducer\(\s*reducer\s*,\s*initialState\s*\)/,
    hint: `<code>const [state, dispatch] = useReducer(reducer, initialState);</code>`
  },
  {
    id: 'react2-13',
    phase: '応用編：TypeScript の要点',
    title: 'TypeScript の要点',
    type: 'info',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、React で使う範囲の TypeScript の書き方を確かめる。</p>
<p>TypeScript は、JavaScript に型の情報を加えた言語である。型とは、値の種類（数値、文字列など）を表す情報である。TypeScript は実行前に型を調べ、型の食い違いをエラーとして知らせる。変数には <code>const name: string = 'アオイ';</code> のように型注釈を書く。</p>
<p>オブジェクトの形は type で名前を付けて定義する。プロパティ名の後ろに <code>?</code> を付けると、省略できるプロパティになる。<code>'fire' | 'water'</code> のように縦棒で区切って並べた型はユニオン型と呼ばれ、並べた値のうちどれか1つを表す。関数では、引数と戻り値に型を書く。</p>`,
    code: `type Element = 'fire' | 'water' | 'wind';

type Monster = {
  name: string;
  hp: number;
  element: Element;
  boss?: boolean;
};

const slime: Monster = { name: 'スライム', hp: 12, element: 'water' };

function damage(monster: Monster, power: number): number {
  return Math.max(monster.hp - power, 0);
}

console.log(damage(slime, 5));

// 型の食い違いの例
const golem: Monster = { name: 'ゴーレム', hp: '150', element: 'earth' };`,
    output: `$ npx tsc main.ts
main.ts:18:44 - error TS2322: Type 'string' is not assignable to type 'number'.
main.ts:18:58 - error TS2322: Type '"earth"' is not assignable to type 'Element'.

（hp に文字列、element に定義外の値を入れたため、実行前にエラーが報告される）`
  },
  {
    id: 'react2-14',
    phase: '応用編：React + TypeScript',
    title: 'props とイベントの型',
    type: 'code',
    run: 'react',
    file: 'App.tsx',
    story: `<p class="lead">学習者は、技ボタンの props とテキスト入力のイベントに型を付ける。</p>
<p>props の型は type で定義し、<code>function SkillButton({ label, power, onUse }: SkillButtonProps)</code> のように引数に付ける。関数を受け取る props は <code>(power: number) =&gt; void</code> の形で書く。void は、戻り値が空であることを表す型である。useState では <code>useState&lt;number&gt;(300)</code> のように、山かっこで state の型を指定できる。</p>
<p>イベントの型は React が用意している。入力欄の変化は <code>React.ChangeEvent&lt;HTMLInputElement&gt;</code>、ボタンのクリックは <code>React.MouseEvent&lt;HTMLButtonElement&gt;</code> を使う。型を付けると、エディタが <code>e.target.value</code> のような候補を正しく表示する。</p>`,
    code: `import { useState } from 'react';

type SkillButtonProps = {
  label: string;
  power: number;
  onUse: (power: number) => void;
};

function SkillButton({ label, power, onUse }: SkillButtonProps) {
  return <button onClick={() => onUse(power)}>{label}（威力 {power}）</button>;
}

export default function App() {
  const [bossHp, setBossHp] = useState<number>(300);
  const [heroName, setHeroName] = useState<string>('アオイ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroName(e.target.value);
  };

  const handleUse = (power: number) => {
    setBossHp((hp) => Math.max(hp - power, 0));
  };

  return (
    <div>
      <input value={heroName} onChange={handleChange} />
      <p>{heroName} の攻撃。ボスの HP：{bossHp}</p>
      <SkillButton label="ファイア" power={40} onUse={handleUse} />
      <SkillButton label="サンダー" power={70} onUse={handleUse} />
    </div>
  );
}`,
    blank: `const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {`,
    placeholder: `  // 引数 e に入力欄の変化イベントの型を付けた handleChange の書き出しが入る`,
    token: /const\s+handleChange\s*=\s*\(\s*e\s*:\s*React\.ChangeEvent<\s*HTMLInputElement\s*>\s*\)\s*=>\s*\{/,
    hint: `<code>const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {</code>`
  },
  {
    id: 'react2-15',
    phase: '応用編：API への接続',
    title: 'fetch と useEffect によるデータ取得',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、fetch でモンスターの一覧データを取得し、読み込み中・エラー・成功の3つの状態を表示し分ける。</p>
<p>API は、プログラムどうしがデータをやり取りするための窓口である。fetch は、URL にリクエストを送り、応答を Promise（後で結果が届く処理）として返す関数である。<code>res.json()</code> は応答の本文を JSON として読み取る。React では、最初の描画の後に1回取得するため、依存配列を空にした useEffect の中で fetch を呼ぶ。</p>
<p>このレッスンでは、data: で始まる URL に JSON を入れて、本物の API の代わりにする。実際のアプリでは <code>fetch('https://…/api/monsters')</code> のようにサーバーの URL を書く。Suspense は、データの到着を待つ間に代わりの表示（fallback）を出す React の仕組みである。SWR は、取得・キャッシュ（一時保存）・再取得をまとめて行うライブラリであり、<code>const { data, error, isLoading } = useSWR(url, fetcher);</code> の1行で同じ3つの状態を扱える。</p>`,
    code: `import { useState, useEffect } from 'react';

const monsters = [
  { id: 1, name: 'スライム', hp: 12 },
  { id: 2, name: 'ゴーレム', hp: 150 },
  { id: 3, name: 'ドラゴン', hp: 300 },
];
// 練習用の API：data URL に JSON を入れて、本物の fetch で読み込む
const API_URL = 'data:application/json,' + encodeURIComponent(JSON.stringify(monsters));

export default function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>読み込み中…</p>;
  if (error) return <p>エラー：{error}</p>;

  return (
    <ul>
      {list.map((m) => (
        <li key={m.id}>{m.name}（HP {m.hp}）</li>
      ))}
    </ul>
  );
}`,
    blank: `.then((res) => res.json())`,
    placeholder: `      // 応答 res の本文を JSON として読み取る then が入る`,
    token: /\.then\(\s*\(?\s*res\s*\)?\s*=>\s*res\.json\(\s*\)\s*\)/,
    hint: `<code>.then((res) =&gt; res.json())</code>`
  },
  {
    id: 'react2-16',
    phase: '応用編：アニメーション',
    title: 'CSS transition と state',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、ボタンを押すと宝箱がなめらかに動いて回転するアニメーションを作る。</p>
<p>CSS の transition は、スタイルの値が変わるときに、その変化を一定の時間をかけて行わせるプロパティである。<code>transition: 'transform 0.5s ease'</code> は、transform の変化を 0.5 秒かけて行う指定である。ease は、ゆっくり始まりゆっくり終わる動き方を表す。</p>
<p>React では、state の値に応じて style の値を切り替える。state が変わると React が新しい style を適用し、ブラウザが transition に従って途中の動きを補う。このように、アニメーションの「始まり」と「終わり」の見た目を state で決めることが、React でのアニメーションの基本の形である。</p>`,
    code: `import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  const boxStyle = {
    width: 160,
    height: 100,
    margin: '16px 0',
    borderRadius: 12,
    background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
    transform: open ? 'translateX(120px) rotate(10deg) scale(1.1)' : 'translateX(0) rotate(0deg) scale(1)',
    opacity: open ? 1 : 0.5,
  };

  return (
    <div>
      <button onClick={() => setOpen(!open)}>{open ? 'もどす' : '動かす'}</button>
      <div style={boxStyle}>宝箱</div>
    </div>
  );
}`,
    blank: `transition: 'transform 0.5s ease, opacity 0.5s ease',`,
    placeholder: `// transform と opacity の変化を、どちらも 0.5 秒・ease で行う transition の指定が入る`,
    token: /transition\s*:\s*["']transform\s+0\.5s\s+ease\s*,\s*opacity\s+0\.5s\s+ease["']/,
    hint: `カンマで区切って2つ書く。<code>transition: 'transform 0.5s ease, opacity 0.5s ease',</code>`
  },
  {
    id: 'react2-17',
    phase: '応用編：フォーム',
    title: '制御コンポーネントと入力チェック',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、名前と職業を入力して仲間を登録するフォームを作り、名前の長さを確かめる処理を加える。</p>
<p>制御コンポーネントは、入力欄の値を state で管理するフォームの書き方である。<code>value={name}</code> で state を入力欄に表示し、<code>onChange</code> で入力のたびに state を更新する。入力中の値が常に state にあるため、値を使った入力チェックや表示の切り替えが簡単になる。</p>
<p>入力チェック（バリデーション）は、入力された値が条件に合うかを確かめる処理である。下のコードでは、validate 関数が誤りの内容を文字列で返し、正しい場合は空文字を返す。form の onSubmit では <code>e.preventDefault()</code> を呼び、ブラウザが標準で行うページの再読み込みを止める。</p>`,
    code: `import { useState } from 'react';

function validate(name) {
  if (name.trim() === '') return '名前を入力してください';
  if (name.length > 10) return '名前は10文字以内で入力してください';
  return '';
}

export default function App() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('戦士');
  const [touched, setTouched] = useState(false);
  const [party, setParty] = useState([]);

  const error = validate(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (error) return;
    setParty([...party, { name: name.trim(), job }]);
    setName('');
    setTouched(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="名前" />
      <select value={job} onChange={(e) => setJob(e.target.value)}>
        <option>戦士</option>
        <option>魔法使い</option>
        <option>僧侶</option>
      </select>
      <button type="submit">仲間に加える</button>
      {touched && error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {party.map((m, i) => (
          <li key={i}>{m.name}（{m.job}）</li>
        ))}
      </ul>
    </form>
  );
}`,
    blank: `<input value={name} onChange={(e) => setName(e.target.value)} placeholder="名前" />`,
    placeholder: `{/* value に name を表示し、onChange で入力値を setName に渡す input 要素が入る */}`,
    token: /<input\s+value=\{\s*name\s*\}\s+onChange=\{\s*\(?\s*e\s*\)?\s*=>\s*setName\(\s*e\.target\.value\s*\)\s*\}[^>]*\/>/,
    hint: `<code>&lt;input value={name} onChange={(e) =&gt; setName(e.target.value)} placeholder="名前" /&gt;</code>`
  },
  {
    id: 'react2-18',
    phase: '応用編：パフォーマンスを意識したフック',
    title: 'useMemo・useCallback・React.memo',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、useMemo・useCallback・React.memo を使い、関係する値が変わったときに限り計算と再描画を行う画面を作る。</p>
<p>React は、state が変わるたびにコンポーネント関数を最初から実行し直す。useMemo は、計算の結果を覚えておき、依存配列の値が変わったときに限り計算し直す Hook である。useCallback は、関数そのものを覚えておく Hook である。React.memo は、受け取る props が前回と同じ場合に子コンポーネントの再描画を省く関数である。</p>
<p>下のコードで「時計を進める」を押すと、App は再描画される。skills と handleSelect は前回と同じものが使われるため、SkillList の再描画とスキル一覧の計算は省かれる。コンソールの表示で、どの操作で計算が行われたかを確かめられる。</p>`,
    code: `import { useState, useMemo, useCallback } from 'react';

const allSkills = [
  { name: 'ファイア', level: 1 },
  { name: 'ヒール', level: 2 },
  { name: 'サンダー', level: 4 },
  { name: 'メテオ', level: 8 },
];

const SkillList = React.memo(function SkillList({ skills, onSelect }) {
  console.log('SkillList を描画した');
  return (
    <ul>
      {skills.map((s) => (
        <li key={s.name}>
          <button onClick={() => onSelect(s)}>{s.name}</button>
        </li>
      ))}
    </ul>
  );
});

export default function App() {
  const [level, setLevel] = useState(1);
  const [selected, setSelected] = useState('');
  const [clock, setClock] = useState(0);

  const skills = useMemo(() => {
    console.log('スキル一覧を計算した');
    return allSkills.filter((s) => s.level <= level);
  }, [level]);

  const handleSelect = useCallback((skill) => {
    setSelected(skill.name);
  }, []);

  return (
    <div>
      <p>レベル {level}／選んだ技：{selected || '未選択'}／時計 {clock}</p>
      <button onClick={() => setLevel(level + 1)}>レベルを上げる</button>
      <button onClick={() => setClock(clock + 1)}>時計を進める</button>
      <SkillList skills={skills} onSelect={handleSelect} />
    </div>
  );
}`,
    blank: `const skills = useMemo(() => {`,
    placeholder: `  // 計算結果を覚える useMemo で skills を作る処理の書き出しが入る`,
    token: /const\s+skills\s*=\s*useMemo\(\s*\(\s*\)\s*=>\s*\{/,
    hint: `<code>const skills = useMemo(() =&gt; {</code> と書き、閉じる部分の <code>}, [level]);</code> とつなげる。`
  },
  {
    id: 'react2-19',
    phase: '応用編：ルーティング',
    title: 'ルーティングの考え方',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、state で表示する画面を切り替える仕組みを作り、ルーティングの考え方を確かめる。</p>
<p>ルーティングは、URL や操作に応じて表示する画面を選ぶ仕組みである。実際の React アプリでは React Router というライブラリを使い、URL と画面の組み合わせを次のように書く。<code>Link</code> は画面を切り替えるリンク、<code>useNavigate</code> はプログラムから画面を移る関数を作る Hook である。</p>
<pre>&lt;BrowserRouter&gt;
  &lt;Link to="/shop"&gt;道具屋&lt;/Link&gt;
  &lt;Routes&gt;
    &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
    &lt;Route path="/shop" element={&lt;Shop /&gt;} /&gt;
  &lt;/Routes&gt;
&lt;/BrowserRouter&gt;</pre>
<p>このレッスンでは、React Router の代わりに state を使う。画面の名前を state に入れ、名前とコンポーネントの対応表から表示する部品を選ぶ。React Router も、内部では「現在の場所」と「表示する部品」を対応させる同じ考え方で動く。</p>`,
    code: `import { useState } from 'react';

function Home({ go }) {
  return (
    <div>
      <h2>はじまりの村</h2>
      <button onClick={() => go('shop')}>道具屋へ行く</button>
    </div>
  );
}

function Shop() {
  return <h2>道具屋：やくそう 10 G</h2>;
}

function WorldMap() {
  return <h2>世界地図：北に魔王の城がある</h2>;
}

const pages = { home: Home, shop: Shop, map: WorldMap };
const labels = { home: '村', shop: '道具屋', map: '地図' };

export default function App() {
  const [page, setPage] = useState('home');
  const CurrentPage = pages[page];

  return (
    <div>
      <nav>
        {Object.keys(pages).map((key) => (
          <button key={key} onClick={() => setPage(key)} disabled={key === page}>
            {labels[key]}
          </button>
        ))}
      </nav>
      <CurrentPage go={setPage} />
    </div>
  );
}`,
    blank: `const CurrentPage = pages[page];`,
    placeholder: `  // 対応表 pages から、state の page に対応するコンポーネントを CurrentPage に入れる処理が入る`,
    token: /const\s+CurrentPage\s*=\s*pages\[\s*page\s*\]/,
    hint: `オブジェクトの値を角かっこで取り出す。<code>const CurrentPage = pages[page];</code>`
  },
  {
    id: 'react2-20',
    phase: '応用編：一歩進んだ TypeScript',
    title: 'ジェネリクスとユーティリティ型',
    type: 'info',
    run: 'static',
    file: 'types.ts',
    story: `<p class="lead">学習者は、ジェネリクス・ユーティリティ型・型の絞り込みという、一歩進んだ TypeScript の書き方を知る。</p>
<p>ジェネリクスは、型を引数のように後から指定できる仕組みである。<code>function first&lt;T&gt;(list: T[]): T</code> と書くと、数値の配列を渡したときは number を、文字列の配列を渡したときは string を返す関数になる。useState&lt;number&gt; の山かっこも、ジェネリクスの一例である。</p>
<p>ユーティリティ型は、既存の型から新しい型を作る道具である。Partial はすべてのプロパティを省略可能にし、Pick は指定したプロパティを取り出し、Omit は指定したプロパティを除く。型の絞り込みは、if 文で <code>typeof</code> や <code>'boss' in x</code> を調べ、その中で型を限定する仕組みである。</p>`,
    code: `type Monster = { id: number; name: string; hp: number; element: 'fire' | 'water' };

// ジェネリクス
function first<T>(list: T[]): T {
  return list[0];
}
const n = first([3, 5, 8]);       // number
const s = first(['火', '水']);     // string

// ユーティリティ型
type MonsterUpdate = Partial<Monster>;          // すべて省略可能
type MonsterLabel = Pick<Monster, 'id' | 'name'>; // id と name を取り出す
type NewMonster = Omit<Monster, 'id'>;           // id を除く

// 型の絞り込み
function show(value: number | string) {
  if (typeof value === 'number') {
    return value.toFixed(1);   // ここでは number
  }
  return value.toUpperCase();  // ここでは string
}`,
    output: `first([3, 5, 8])      → 3（型は number）
first(['火', '水'])   → '火'（型は string）

MonsterUpdate  = { id?: number; name?: string; hp?: number; element?: 'fire' | 'water' }
MonsterLabel   = { id: number; name: string }
NewMonster     = { name: string; hp: number; element: 'fire' | 'water' }

show(2)      → '2.0'
show('boss') → 'BOSS'`
  },
  {
    id: 'react2-21',
    phase: '応用編：リント',
    title: 'ESLint と Prettier',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は、ESLint と Prettier を使ってコードの誤りと書き方のばらつきを自動で直す手順を知る。</p>
<p>リントは、コードを実行する前に、誤りや危険な書き方を見つける作業である。ESLint は JavaScript と TypeScript のリントの道具であり、Vite のひな形には初めから設定ファイル <code>eslint.config.js</code> が含まれる。<code>npm run lint</code> で検査し、React Hooks の規則に反する書き方なども報告する。</p>
<p>Prettier は、インデントや引用符などのコードの形をそろえる整形の道具である。ESLint が「正しさ」、Prettier が「見た目」を受け持つ。VS Code に拡張機能「ESLint」と「Prettier - Code formatter」を入れ、設定の「Format On Save」を有効にすると、保存のたびに整形が行われる。</p>`,
    code: `npm run lint
npm install -D prettier eslint-config-prettier
npx prettier --write src`,
    output: `$ npm run lint

/my-app/src/App.jsx
  12:9  error  'score' is assigned a value but never used  no-unused-vars
  20:5  error  React Hook "useState" is called conditionally  react-hooks/rules-of-hooks

✖ 2 problems (2 errors, 0 warnings)

$ npx prettier --write src
src/App.jsx 45ms
src/main.jsx 3ms

（ESLint が報告した行を直し、Prettier がファイルの書式をそろえた）`
  },
  {
    id: 'react2-22',
    phase: '応用編：共通の状態管理',
    title: 'createContext と useContext',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、所持金と持ち物を Context で共有し、離れた3つのコンポーネントから同じデータを使う。</p>
<p>Props で値を渡す方法では、深い階層の部品に届けるまでに、途中のすべての部品が値を受け渡す必要がある。この手間は「Props のバケツリレー」と呼ばれる。Context は、コンポーネントの木全体で値を共有する仕組みであり、この手間を減らす。</p>
<p><code>createContext</code> で Context を作り、<code>&lt;PlayerContext.Provider value={…}&gt;</code> で囲んだ範囲に値を届ける。値を使う側は <code>useContext(PlayerContext)</code> を呼ぶ。Provider の value が変わると、useContext を使うコンポーネントがすべて再描画される。</p>`,
    code: `import { useState, useContext, createContext } from 'react';

const PlayerContext = createContext(null);

function PlayerProvider({ children }) {
  const [coins, setCoins] = useState(100);
  const [items, setItems] = useState([]);

  const buy = (item) => {
    if (coins < item.price) return;
    setCoins(coins - item.price);
    setItems([...items, item.name]);
  };

  return (
    <PlayerContext.Provider value={{ coins, items, buy }}>
      {children}
    </PlayerContext.Provider>
  );
}

function Header() {
  const { coins } = useContext(PlayerContext);
  return <h2>所持金：{coins} G</h2>;
}

function Shop() {
  const { coins, buy } = useContext(PlayerContext);
  const goods = [
    { name: 'やくそう', price: 10 },
    { name: 'てつのたて', price: 60 },
  ];
  return (
    <div>
      {goods.map((g) => (
        <button key={g.name} onClick={() => buy(g)} disabled={coins < g.price}>
          {g.name}（{g.price} G）
        </button>
      ))}
    </div>
  );
}

function Bag() {
  const { items } = useContext(PlayerContext);
  return <p>持ち物：{items.length > 0 ? items.join('、') : '空っぽ'}</p>;
}

export default function App() {
  return (
    <PlayerProvider>
      <Header />
      <Shop />
      <Bag />
    </PlayerProvider>
  );
}`,
    blank: `const { coins } = useContext(PlayerContext);`,
    placeholder: `  // PlayerContext から coins を取り出す処理が入る`,
    token: /const\s*\{\s*coins\s*\}\s*=\s*useContext\(\s*PlayerContext\s*\)/,
    hint: `分割代入で取り出す。<code>const { coins } = useContext(PlayerContext);</code>`
  },
  {
    id: 'react2-23',
    phase: '応用編：総合制作',
    title: '総合制作：カレンダーアプリ',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、月を切り替えられ、日付を選んで予定を書き込めるカレンダーアプリを完成させる。</p>
<p>カレンダーを描くには、「その月の1日が何曜日か」と「その月が何日まであるか」の2つの情報を使う。<code>new Date(year, month, 1).getDay()</code> は1日の曜日を 0（日曜）〜6（土曜）で返す。<code>new Date(year, month + 1, 0)</code> は「次の月の0日」を表し、JavaScript はこれを「今月の最終日」として扱う。その getDate() が月の日数になる。</p>
<p>1日より前の空きマスを null で埋め、続けて日付を並べた配列を作り、CSS Grid で7列に並べる。予定は「年-月-日」の文字列をキーにしたオブジェクトに保存する。ここまでに学んだ useState・イベント処理・リスト表示・制御コンポーネント・イミュータブルな更新をすべて使う。</p>`,
    code: `import { useState } from 'react';

const WEEK = ['日', '月', '火', '水', '木', '金', '土'];

export default function App() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); // 0 が1月
  const [events, setEvents] = useState({});
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState('');

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= lastDate; d++) cells.push(d);

  const keyOf = (d) => year + '-' + (month + 1) + '-' + d;

  const move = (diff) => {
    const d = new Date(year, month + diff, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
    setSelected(null);
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (selected === null || text.trim() === '') return;
    const key = keyOf(selected);
    setEvents({ ...events, [key]: [...(events[key] || []), text.trim()] });
    setText('');
  };

  const cellStyle = (d) => ({
    minHeight: 48,
    padding: 4,
    borderRadius: 6,
    fontSize: 13,
    cursor: d ? 'pointer' : 'default',
    background: d === selected ? '#fde68a' : d ? '#f1f5f9' : 'transparent',
  });

  return (
    <div style={{ maxWidth: 420, fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => move(-1)}>前の月</button>
        <h2>{year} 年 {month + 1} 月</h2>
        <button onClick={() => move(1)}>次の月</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
        {WEEK.map((w) => (
          <div key={w} style={{ textAlign: 'center', fontWeight: 'bold' }}>{w}</div>
        ))}
        {cells.map((d, i) => (
          <div key={i} style={cellStyle(d)} onClick={() => d && setSelected(d)}>
            {d}
            {d && events[keyOf(d)] && <div style={{ color: '#2563eb' }}>●{events[keyOf(d)].length}</div>}
          </div>
        ))}
      </div>
      {selected && (
        <form onSubmit={addEvent} style={{ marginTop: 12 }}>
          <strong>{month + 1} 月 {selected} 日の予定</strong>
          <ul>
            {(events[keyOf(selected)] || []).map((ev, i) => (
              <li key={i}>{ev}</li>
            ))}
          </ul>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="予定を書く" />
          <button type="submit">追加</button>
        </form>
      )}
    </div>
  );
}`,
    blank: `const lastDate = new Date(year, month + 1, 0).getDate();`,
    placeholder: `  // 「次の月の0日」の Date から、今月の日数を lastDate に入れる処理が入る`,
    token: /const\s+lastDate\s*=\s*new\s+Date\(\s*year\s*,\s*month\s*\+\s*1\s*,\s*0\s*\)\.getDate\(\s*\)/,
    hint: `<code>const lastDate = new Date(year, month + 1, 0).getDate();</code>`
  },
  {
    id: 'react2-24',
    phase: '応用編：総合制作',
    title: '総合制作：3D風のカードめくりゲーム',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、CSS の transform で立体的に裏返るカードを使い、同じ絵柄の2枚をそろえるゲームを完成させる。</p>
<p>CSS では、<code>perspective</code>（遠近感の強さ）を親に、<code>transformStyle: 'preserve-3d'</code>（子を立体空間に置く指定）をカードに与えると、<code>rotateY(180deg)</code> で Y 軸を中心にカードが裏返る。表と裏の2枚の面を重ね、裏面をあらかじめ 180 度回しておく。<code>backfaceVisibility: 'hidden'</code> は、向こう側を向いた面を隠す指定である。</p>
<p>ゲームの進み方は state で管理する。deck はカードの配列、open はめくっている最中のカードの id、moves は手数である。2枚めくった時点で絵柄を比べ、0.8 秒後にそろった2枚を matched にするか、裏に戻す。カードを裏返す見た目は、flipped という真偽値で transform を切り替えて作る。</p>`,
    code: `import { useState } from 'react';

const SYMBOLS = ['火', '水', '風', '土', '光', '闇'];

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeDeck() {
  return shuffle([...SYMBOLS, ...SYMBOLS]).map((symbol, i) => ({ id: i, symbol, matched: false }));
}

function Card({ card, flipped, onClick }) {
  const inner = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s',
    transformStyle: 'preserve-3d',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };
  const face = {
    position: 'absolute',
    inset: 0,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.35)',
  };
  return (
    <div style={{ width: 70, height: 90, perspective: 600, cursor: 'pointer' }} onClick={onClick}>
      <div style={inner}>
        <div style={{ ...face, background: 'linear-gradient(135deg, #6366f1, #0ea5e9)', color: '#fff' }}>?</div>
        <div style={{ ...face, background: card.matched ? '#fde68a' : '#f8fafc', color: '#1e293b', transform: 'rotateY(180deg)' }}>
          {card.symbol}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [deck, setDeck] = useState(makeDeck);
  const [open, setOpen] = useState([]);
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);

  const handleClick = (card) => {
    if (lock || card.matched || open.includes(card.id)) return;
    const next = [...open, card.id];
    setOpen(next);
    if (next.length === 2) {
      setMoves(moves + 1);
      setLock(true);
      const [a, b] = next.map((id) => deck.find((c) => c.id === id));
      setTimeout(() => {
        if (a.symbol === b.symbol) {
          setDeck((d) => d.map((c) => (c.id === a.id || c.id === b.id ? { ...c, matched: true } : c)));
        }
        setOpen([]);
        setLock(false);
      }, 800);
    }
  };

  const restart = () => {
    setDeck(makeDeck());
    setOpen([]);
    setMoves(0);
    setLock(false);
  };

  const cleared = deck.every((c) => c.matched);

  return (
    <div style={{ fontFamily: 'sans-serif', perspective: 900 }}>
      <h2>カードめくり：手数 {moves}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 70px)', gap: 10, transform: 'rotateX(15deg)' }}>
        {deck.map((card) => (
          <Card
            key={card.id}
            card={card}
            flipped={card.matched || open.includes(card.id)}
            onClick={() => handleClick(card)}
          />
        ))}
      </div>
      {cleared && <p>クリア。手数は {moves} 回である。</p>}
      <button onClick={restart} style={{ marginTop: 16 }}>新しいゲーム</button>
    </div>
  );
}`,
    blank: `transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',`,
    placeholder: `// flipped が true なら rotateY(180deg)、false なら rotateY(0deg) にする transform の指定が入る`,
    token: /transform\s*:\s*flipped\s*\?\s*["']rotateY\(\s*180deg\s*\)["']\s*:\s*["']rotateY\(\s*0deg\s*\)["']/,
    hint: `三項演算子で切り替える。<code>transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',</code>`
  }
];

SERIES.express = [
  {
    id: 'express-01',
    phase: '準備',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、Node.js と Express を自分のパソコンに入れ、最初の Web サーバーを起動する。</p>
<p>Node.js は、ブラウザの外で JavaScript を実行する環境である。Express は、Node.js で Web サーバーを作るためのフレームワーク（アプリの骨組みと決まりを用意した開発の枠組み）である。Web サーバーは、ブラウザからのリクエスト（要求）を受け取り、レスポンス（応答）を返すプログラムである。</p>
<p><strong>macOS</strong> では、公式サイト（nodejs.org）の LTS 版インストーラーを使うか、Homebrew で <code>brew install node</code> を実行する。<strong>Windows</strong> では、公式サイトのインストーラーを使うか、PowerShell で <code>winget install OpenJS.NodeJS.LTS</code> を実行する。ターミナルで <code>node -v</code> と <code>npm -v</code> を実行し、バージョン番号が出れば完了である。</p>
<p>次に、作業用のフォルダを VS Code で開き、メニューの「ターミナル」→「新しいターミナル」で <code>npm init -y</code> と <code>npm install express</code> を実行する。server.js に下のコードを書き、<code>node server.js</code> で起動する。リクエストを試す拡張機能として「REST Client」や「Thunder Client」が便利である。サーバーは Ctrl + C で止める。</p>`,
    code: `// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.listen(3000, () => {
  console.log('http://localhost:3000 で起動した');
});`,
    output: `$ node -v
v22.11.0
$ npm -v
10.9.0
$ npm init -y
Wrote to /dungeon-api/package.json
$ npm install express
added 66 packages in 3s
$ node server.js
http://localhost:3000 で起動した

（ブラウザで http://localhost:3000 を開くと「Hello, Express」と表示される）`
  },
  {
    id: 'express-02',
    phase: 'Express の基本',
    title: 'ルーティングと res.send',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、URL ごとに異なる応答を返すダンジョン案内のサーバーを作る。</p>
<p>ルーティングは、リクエストの URL と HTTP メソッドに応じて、実行する処理を選ぶ仕組みである。HTTP メソッドは、リクエストの目的を表す種類であり、ページの取得には GET を使う。<code>app.get('/パス', (req, res) =&gt; { … })</code> は、そのパスへの GET リクエストを受け持つ処理を登録する。</p>
<p>req はリクエストの情報、res はレスポンスを作る道具である。<code>res.send()</code> は文字列や HTML を応答として返す。パスに <code>:no</code> のようなコロン付きの名前を書くと、その部分は変数（ルートパラメータ）になり、<code>req.params.no</code> で値を取り出せる。<code>?</code> の後ろの値（クエリ）は <code>req.query</code> で取り出す。</p>`,
    code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>ダンジョンの入り口</h1><a href="/floors/1">地下 1 階へ</a>');
});

app.get('/floors/:no', (req, res) => {
  const no = Number(req.params.no);
  const light = req.query.light === 'on' ? '明るい' : '暗い';
  res.send('<h1>地下 ' + no + ' 階</h1><p>通路は' + light + '。</p><a href="/floors/' + (no + 1) + '">さらに下へ</a>');
});

app.listen(3000, () => {
  console.log('http://localhost:3000 で起動した');
});`,
    blank: `app.get('/floors/:no', (req, res) => {`,
    placeholder: `// パス /floors/:no への GET リクエストを受け持つ処理の書き出しが入る`,
    token: /app\.get\(\s*["']\/floors\/:no["']\s*,\s*\(\s*req\s*,\s*res\s*\)\s*=>\s*\{/,
    hint: `<code>app.get('/floors/:no', (req, res) =&gt; {</code>`,
    output: `$ node server.js
http://localhost:3000 で起動した

ブラウザ：GET http://localhost:3000/
  ダンジョンの入り口
  地下 1 階へ（リンク）

ブラウザ：GET http://localhost:3000/floors/3?light=on
  地下 3 階
  通路は明るい。
  さらに下へ（リンク）`
  },
  {
    id: 'express-03',
    phase: 'データベースとの連携',
    title: 'SQLite との連携',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、SQLite のデータベースにモンスターの情報を保存し、一覧を JSON で返す。</p>
<p>データベースは、データを整理して保存し、検索や更新を行う仕組みである。SQLite は、1つのファイルにデータを保存する手軽なデータベースである。このレッスンでは、Node.js から SQLite を使うライブラリ better-sqlite3 を <code>npm install better-sqlite3</code> で入れる。</p>
<p><code>db.exec()</code> は SQL をそのまま実行し、<code>db.prepare()</code> は SQL を準備して、実行用のオブジェクトを返す。準備した SQL の <code>.all()</code> は該当するすべての行を配列で返し、<code>.get()</code> は最初の1行を返し、<code>.run()</code> は追加や更新を実行する。<code>res.json()</code> は、配列やオブジェクトを JSON 形式で応答する。</p>`,
    code: `const express = require('express');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('game.db');

db.exec('CREATE TABLE IF NOT EXISTS monsters (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, hp INTEGER)');

const count = db.prepare('SELECT COUNT(*) AS n FROM monsters').get().n;
if (count === 0) {
  const insert = db.prepare('INSERT INTO monsters (name, hp) VALUES (?, ?)');
  insert.run('スライム', 12);
  insert.run('ゴーレム', 150);
  insert.run('ドラゴン', 300);
}

app.get('/monsters', (req, res) => {
  const rows = db.prepare('SELECT * FROM monsters').all();
  res.json(rows);
});

app.listen(3000, () => {
  console.log('http://localhost:3000 で起動した');
});`,
    blank: `const rows = db.prepare('SELECT * FROM monsters').all();`,
    placeholder: `  // monsters テーブルのすべての行を取得して rows に入れる処理が入る`,
    token: /const\s+rows\s*=\s*db\.prepare\(\s*["']SELECT\s+\*\s+FROM\s+monsters["']\s*\)\.all\(\s*\)/i,
    hint: `<code>const rows = db.prepare('SELECT * FROM monsters').all();</code>`,
    output: `$ npm install better-sqlite3
$ node server.js
http://localhost:3000 で起動した

ブラウザ：GET http://localhost:3000/monsters
[{"id":1,"name":"スライム","hp":12},{"id":2,"name":"ゴーレム","hp":150},{"id":3,"name":"ドラゴン","hp":300}]

（フォルダに game.db というファイルが作られる）`
  },
  {
    id: 'express-04',
    phase: 'データベースとの連携',
    title: 'データの更新と削除',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、フォームから送られた値でモンスターの HP を更新する処理と、モンスターを削除する処理を作る。</p>
<p>フォームの送信には POST メソッドを使う。<code>app.use(express.urlencoded({ extended: false }))</code> を書くと、フォームの値が <code>req.body</code> に入る。HTML のフォームは GET と POST の2種類に限り送れるため、ここでは URL の末尾を update や delete にして処理を分ける。</p>
<p>更新には SQL の UPDATE、削除には DELETE を使う。<code>WHERE id = ?</code> の <code>?</code> はプレースホルダーと呼ばれ、<code>.run()</code> に渡した値が安全に埋め込まれる。WHERE を書き忘れるとすべての行が対象になるため、条件の指定を確かめる。処理の後は <code>res.redirect()</code> で一覧のページへ移る。</p>`,
    code: `const express = require('express');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('game.db');
app.use(express.urlencoded({ extended: false }));

app.get('/monsters', (req, res) => {
  const rows = db.prepare('SELECT * FROM monsters').all();
  const list = rows.map((m) =>
    '<li>' + m.name + '（HP ' + m.hp + '）' +
    '<form method="post" action="/monsters/' + m.id + '/update"><input name="hp" value="' + m.hp + '"><button>更新</button></form>' +
    '<form method="post" action="/monsters/' + m.id + '/delete"><button>削除</button></form></li>'
  );
  res.send('<ul>' + list.join('') + '</ul>');
});

app.post('/monsters/:id/update', (req, res) => {
  db.prepare('UPDATE monsters SET hp = ? WHERE id = ?').run(Number(req.body.hp), req.params.id);
  res.redirect('/monsters');
});

app.post('/monsters/:id/delete', (req, res) => {
  db.prepare('DELETE FROM monsters WHERE id = ?').run(req.params.id);
  res.redirect('/monsters');
});

app.listen(3000);`,
    blank: `db.prepare('DELETE FROM monsters WHERE id = ?').run(req.params.id);`,
    placeholder: `  // id が req.params.id のモンスターを DELETE 文で削除する処理が入る`,
    token: /db\.prepare\(\s*["']DELETE\s+FROM\s+monsters\s+WHERE\s+id\s*=\s*\?["']\s*\)\.run\(\s*req\.params\.id\s*\)/i,
    hint: `<code>db.prepare('DELETE FROM monsters WHERE id = ?').run(req.params.id);</code>`,
    output: `ブラウザ：GET /monsters
  ・スライム（HP 12）  [12][更新] [削除]
  ・ゴーレム（HP 150） [150][更新] [削除]
  ・ドラゴン（HP 300） [300][更新] [削除]

スライムの欄に 99 を入れて［更新］→ POST /monsters/1/update → /monsters に戻る
  ・スライム（HP 99）

ゴーレムの［削除］→ POST /monsters/2/delete → /monsters に戻る
  ・スライム（HP 99）
  ・ドラゴン（HP 300）`
  },
  {
    id: 'express-05',
    phase: 'デバッグの基本',
    title: 'デバッグの基本',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、ダメージ計算の結果がおかしくなる原因を、console.log とデバッガーで突き止める。</p>
<p>デバッグは、プログラムの誤り（バグ）の原因を探して直す作業である。最も手軽な方法は、途中の値を <code>console.log</code> でターミナルに出すことである。サーバーの console.log の出力は、ブラウザの画面とは別に、ターミナルに表示される。</p>
<p>VS Code では、行番号の左をクリックしてブレークポイント（実行を一時停止する場所）を置き、「実行とデバッグ」から起動すると、止まった時点の変数の中身を確かめられる。ターミナルで <code>node --inspect server.js</code> と起動し、Chrome の開発者ツールにつなぐ方法もある。下の例では、クエリに数字以外が入ると Number() が NaN（数値への変換の失敗を表す特別な値）を返し、計算結果も NaN になる様子をログで確かめる。</p>`,
    code: `const express = require('express');
const app = express();

app.get('/damage', (req, res) => {
  const attack = Number(req.query.attack);
  const defense = Number(req.query.defense);
  console.log('attack =', attack, 'defense =', defense);

  if (Number.isNaN(attack) || Number.isNaN(defense)) {
    return res.status(400).send('attack と defense には数字を指定してください');
  }
  const damage = Math.max(attack - defense, 0);
  res.send('ダメージ：' + damage);
});

// どこかで例外が起きたときに、内容をターミナルに記録する
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('サーバーでエラーが起きた');
});

app.listen(3000);`,
    blank: `console.log('attack =', attack, 'defense =', defense);`,
    placeholder: `  // attack と defense の値をターミナルに出す処理が入る`,
    token: /console\.log\(\s*["']attack =["']\s*,\s*attack\s*,\s*["']defense =["']\s*,\s*defense\s*\)/,
    hint: `ラベルの文字列と変数を交互に並べる。<code>console.log('attack =', attack, 'defense =', defense);</code>`,
    output: `ブラウザ：GET /damage?attack=30&defense=12
  ダメージ：18
ターミナル：
  attack = 30 defense = 12

ブラウザ：GET /damage?attack=abc&defense=12
  attack と defense には数字を指定してください
ターミナル：
  attack = NaN defense = 12`
  },
  {
    id: 'express-06',
    phase: 'ログイン機能',
    title: 'セッションによるログイン',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、ユーザー名とパスワードを照合し、セッションでログイン状態を保つ処理を作る。</p>
<p>セッションは、同じブラウザからの複数のリクエストを、サーバーが同じ利用者のものとして扱う仕組みである。express-session は、ブラウザに ID 入りの Cookie（ブラウザが保存する小さなデータ）を渡し、サーバー側の <code>req.session</code> に情報を保存する。ログインに成功したら <code>req.session.userId</code> にユーザーの id を入れる。</p>
<p>パスワードは、そのままの文字列でデータベースに保存すると危険である。bcrypt は、パスワードを元に戻しにくい文字列（ハッシュ）に変換するライブラリである。<code>bcrypt.compare()</code> は、入力されたパスワードと保存済みのハッシュが一致するかを調べる。このレッスンでは、users テーブルにユーザーが登録済みの状態から始め、登録の処理は次のレッスンで作る。</p>`,
    code: `const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('game.db');
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'change-this-secret',
  resave: false,
  saveUninitialized: false,
}));

app.get('/login', (req, res) => {
  res.send('<form method="post" action="/login"><input name="username"><input name="password" type="password"><button>ログイン</button></form>');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if (!user) return res.status(401).send('ユーザー名かパスワードが誤っています');
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(401).send('ユーザー名かパスワードが誤っています');
  req.session.userId = user.id;
  res.redirect('/mypage');
});

app.get('/mypage', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  res.send('ようこそ、冒険者 ' + req.session.userId + ' 番');
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

app.listen(3000);`,
    blank: `const ok = await bcrypt.compare(password, user.password_hash);`,
    placeholder: `  // 入力の password と保存済みの user.password_hash を bcrypt で照合し、結果を ok に入れる処理が入る`,
    token: /const\s+ok\s*=\s*await\s+bcrypt\.compare\(\s*password\s*,\s*user\.password_hash\s*\)/,
    hint: `<code>const ok = await bcrypt.compare(password, user.password_hash);</code>`,
    output: `$ npm install express-session bcrypt
$ node server.js

ブラウザ：/login で aoi / 正しいパスワード を送信
  → /mypage に移り「ようこそ、冒険者 1 番」と表示される

ブラウザ：/login で aoi / 誤ったパスワード を送信
  → 401「ユーザー名かパスワードが誤っています」

ブラウザ：ログイン前に /mypage を開く
  → /login に移る`
  },
  {
    id: 'express-07',
    phase: 'ユーザー登録機能',
    title: 'ユーザー登録とパスワードのハッシュ化',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、新しい冒険者を users テーブルに登録する処理を作り、パスワードをハッシュにして保存する。</p>
<p>登録の処理は、入力のチェック、重複の確認、ハッシュ化、保存の4段階で進む。<code>bcrypt.hash(password, 10)</code> は、パスワードからハッシュを作る。2つ目の引数 10 はコスト（計算の手間の大きさ）であり、値を大きくすると総当たりの攻撃に強くなる。</p>
<p>同じユーザー名がすでにある場合は、HTTP ステータスコード 409（衝突）を返す。ステータスコードは、応答の結果を表す3桁の番号である。登録に成功したら、<code>info.lastInsertRowid</code>（追加した行の id）をセッションに入れ、そのままログインした状態にする。</p>`,
    code: `const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('game.db');
db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password_hash TEXT)');
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'change-this-secret', resave: false, saveUninitialized: false }));

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password || password.length < 8) {
    return res.status(400).send('ユーザー名と8文字以上のパスワードを入力してください');
  }
  const exists = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
  if (exists) return res.status(409).send('このユーザー名は使用済みです');

  const hash = await bcrypt.hash(password, 10);
  const info = db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)').run(username, hash);
  req.session.userId = info.lastInsertRowid;
  res.redirect('/mypage');
});

app.listen(3000);`,
    blank: `const hash = await bcrypt.hash(password, 10);`,
    placeholder: `  // password をコスト 10 でハッシュにして hash に入れる処理が入る`,
    token: /const\s+hash\s*=\s*await\s+bcrypt\.hash\(\s*password\s*,\s*10\s*\)/,
    hint: `<code>const hash = await bcrypt.hash(password, 10);</code>`,
    output: `ブラウザ：/register に username=haruto, password=dragon2026 を送信
  → /mypage に移り「ようこそ、冒険者 2 番」と表示される

users テーブルの中身：
  id | username | password_hash
  1  | aoi      | $2b$10$Qe3...（60文字のハッシュ）
  2  | haruto   | $2b$10$8kL...（60文字のハッシュ）

同じ username=haruto で再び送信
  → 409「このユーザー名は使用済みです」`
  },
  {
    id: 'express-08',
    phase: 'ローカル開発環境',
    title: 'ローカル開発環境の整備',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、保存するたびに自動で再起動する開発用サーバーと、環境変数で設定を切り替える仕組みを整える。</p>
<p>ローカル開発環境は、自分のパソコンの中でアプリを作って試すための環境である。<code>node --watch server.js</code> で起動すると、Node.js はファイルの変更を見張り、保存のたびにサーバーを再起動する。古い Node.js では nodemon という道具が同じ役割をもつ。package.json の scripts に登録すると、<code>npm run dev</code> の短いコマンドで起動できる。</p>
<p>環境変数は、プログラムの外から設定値を渡す仕組みである。ポート番号や秘密の文字列を .env ファイルに書き、dotenv ライブラリで読み込むと、<code>process.env.PORT</code> のように使える。.env は .gitignore に書き、Git の管理から外す。</p>
<pre>// package.json の一部
"scripts": {
  "dev": "node --watch server.js",
  "start": "node server.js"
}

# .env
PORT=4000
SESSION_SECRET=dev-secret</pre>`,
    code: `require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('開発中のダンジョン API');
});

app.listen(PORT, () => {
  console.log('開発サーバー：http://localhost:' + PORT);
});`,
    blank: `const PORT = process.env.PORT || 3000;`,
    placeholder: `// 環境変数 PORT を使い、指定が空のときは 3000 を使う定数 PORT が入る`,
    token: /const\s+PORT\s*=\s*process\.env\.PORT\s*\|\|\s*3000/,
    hint: `論理和 || で初期値を決める。<code>const PORT = process.env.PORT || 3000;</code>`,
    output: `$ npm install dotenv
$ npm run dev

> dungeon-api@1.0.0 dev
> node --watch server.js

開発サーバー：http://localhost:4000

（server.js を書き換えて保存すると）
Restarting 'server.js'
開発サーバー：http://localhost:4000`
  },
  {
    id: 'express-09',
    phase: 'Prisma による ORM',
    title: 'Prisma によるデータ操作',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、Prisma を使い、SQL の代わりに JavaScript のメソッドでスコアの保存と取得を行う。</p>
<p>ORM（オブジェクト関係マッピング）は、データベースの表を JavaScript のオブジェクトとして扱う仕組みである。Prisma は Node.js の代表的な ORM であり、schema.prisma というファイルに表の形を書く。<code>npx prisma migrate dev</code> を実行すると、Prisma はその定義から表を作り、型付きの操作用コード（Prisma Client）を生成する。</p>
<pre>// prisma/schema.prisma の一部
model Score {
  id        Int      @id @default(autoincrement())
  player    String
  points    Int
  createdAt DateTime @default(now())
}</pre>
<p><code>prisma.score.findMany()</code> は複数の行を取得し、<code>orderBy</code> で並び順、<code>take</code> で件数を指定する。<code>prisma.score.create()</code> は行を追加する。Prisma のバージョンによって設定ファイルの細部が変わるため、導入の際は公式ドキュメントの手順と照らし合わせる。</p>`,
    code: `const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get('/scores', async (req, res) => {
  const scores = await prisma.score.findMany({
    orderBy: { points: 'desc' },
    take: 5,
  });
  res.json(scores);
});

app.post('/scores', async (req, res) => {
  const score = await prisma.score.create({
    data: { player: req.body.player, points: req.body.points },
  });
  res.status(201).json(score);
});

app.listen(3000);`,
    blank: `const scores = await prisma.score.findMany({`,
    placeholder: `  // prisma.score の findMany で複数のスコアを取得する処理の書き出しが入る`,
    token: /const\s+scores\s*=\s*await\s+prisma\.score\.findMany\(\s*\{/,
    hint: `<code>const scores = await prisma.score.findMany({</code>`,
    output: `$ npm install prisma --save-dev
$ npm install @prisma/client
$ npx prisma init --datasource-provider sqlite
$ npx prisma migrate dev --name init
Your database is now in sync with your schema.
✔ Generated Prisma Client

ブラウザ：GET /scores
[{"id":3,"player":"ミオ","points":9800,"createdAt":"2026-11-05T10:00:00.000Z"},
 {"id":1,"player":"アオイ","points":7200,"createdAt":"2026-11-04T09:12:00.000Z"}]`
  },
  {
    id: 'express-10',
    phase: 'JSON API とバリデーション',
    title: 'JSON API と入力チェック',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、JSON でスコアを受け取る API を作り、値が条件から外れる場合に 400 番のエラーを返す。</p>
<p>JSON API は、画面の HTML の代わりに JSON 形式のデータをやり取りする API である。ゲームやスマートフォンのアプリは、この形でサーバーとデータを交換する。<code>app.use(express.json())</code> を書くと、リクエストの本文の JSON が <code>req.body</code> に入る。</p>
<p>バリデーションは、受け取った値が期待する形かを確かめる処理である。サーバーは、利用者がどんな値でも送れる前提で、常に内容を確かめる立場にある。条件に合う値に限り保存し、誤りがあればステータスコード 400（不正なリクエスト）と、誤りの内容を JSON で返す。大きなアプリでは zod などのライブラリで条件をまとめて書く。</p>`,
    code: `const express = require('express');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('game.db');
db.exec('CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, player TEXT, points INTEGER)');
app.use(express.json());

function validateScore(body) {
  const errors = [];
  if (typeof body.player !== 'string' || body.player.trim() === '') {
    errors.push('player は1文字以上の文字列にしてください');
  }
  if (!Number.isInteger(body.points) || body.points < 0) {
    errors.push('points は0以上の整数にしてください');
  }
  return errors;
}

app.post('/api/scores', (req, res) => {
  const errors = validateScore(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  const info = db.prepare('INSERT INTO scores (player, points) VALUES (?, ?)').run(req.body.player.trim(), req.body.points);
  res.status(201).json({ id: info.lastInsertRowid, player: req.body.player.trim(), points: req.body.points });
});

app.listen(3000);`,
    blank: `return res.status(400).json({ errors });`,
    placeholder: `    // ステータスコード 400 と errors を JSON で返す処理が入る`,
    token: /return\s+res\.status\(\s*400\s*\)\.json\(\s*\{\s*errors\s*\}\s*\)/,
    hint: `status と json をつなげて書く。<code>return res.status(400).json({ errors });</code>`,
    output: `$ curl -X POST http://localhost:3000/api/scores -H "Content-Type: application/json" -d '{"player":"アオイ","points":1200}'
{"id":1,"player":"アオイ","points":1200}

$ curl -X POST http://localhost:3000/api/scores -H "Content-Type: application/json" -d '{"player":"","points":-5}'
{"errors":["player は1文字以上の文字列にしてください","points は0以上の整数にしてください"]}`
  },
  {
    id: 'express-11',
    phase: '既存アプリの改修',
    title: '既存アプリへの機能追加',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、すでに動いているモンスター一覧の API に、HP の下限で絞り込む機能を追加する。</p>
<p>実際の開発では、ゼロから作るよりも、既存のアプリを直す作業のほうが多い。改修は次の順に進める。(1) Git でブランチを作る。(2) 該当する処理を読み、今の動きを確かめる。(3) 変更を最小限にとどめて追加する。(4) 新しい機能と、もとからある動きの両方を試す。</p>
<p>この改修では、<code>/monsters?minHp=100</code> のようにクエリで下限を受け取る。<code>Number(req.query.minHp) || 0</code> と書くと、クエリが空のときや数字以外のときに 0 になる。下限が 0 であれば全件が対象になるため、もとからある <code>/monsters</code> の結果はそのまま保たれる。</p>`,
    code: `const express = require('express');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('game.db');

// 既存の機能：モンスターの一覧を返す
// 改修：?minHp=100 のように HP の下限を指定できるようにする
app.get('/monsters', (req, res) => {
  const minHp = Number(req.query.minHp) || 0;
  const rows = db.prepare('SELECT * FROM monsters WHERE hp >= ? ORDER BY hp').all(minHp);
  res.json(rows);
});

app.listen(3000);`,
    blank: `const minHp = Number(req.query.minHp) || 0;`,
    placeholder: `  // クエリ minHp を数値にし、空や数字以外のときは 0 にした定数 minHp が入る`,
    token: /const\s+minHp\s*=\s*Number\(\s*req\.query\.minHp\s*\)\s*\|\|\s*0/,
    hint: `<code>const minHp = Number(req.query.minHp) || 0;</code>`,
    output: `$ git switch -c feature/min-hp

ブラウザ：GET /monsters（もとからある動き）
[{"id":1,"name":"スライム","hp":12},{"id":2,"name":"ゴーレム","hp":150},{"id":3,"name":"ドラゴン","hp":300}]

ブラウザ：GET /monsters?minHp=100（追加した機能）
[{"id":2,"name":"ゴーレム","hp":150},{"id":3,"name":"ドラゴン","hp":300}]`
  },
  {
    id: 'express-12',
    phase: 'REST に従った設計',
    title: 'REST に従った API の設計',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、クエスト（依頼）のデータを REST の決まりに沿った5つの API で扱う。</p>
<p>REST は、Web API の設計の考え方である。データの種類をリソースと呼び、<code>/api/quests</code> のような名詞の URL で表す。操作の種類は HTTP メソッドで表し、取得は GET、作成は POST、更新は PUT、削除は DELETE を使う。動詞を URL に入れる代わりにメソッドで操作を区別すると、API の形がそろい、使う側が覚えやすくなる。</p>
<p>結果はステータスコードで伝える。成功は 200、作成の成功は 201、本文が空の成功は 204、対象の不在は 404 を返す。下のコードでは、データを配列に保存して、REST の形に集中する。</p>`,
    code: `const express = require('express');
const app = express();
app.use(express.json());

let quests = [{ id: 1, title: 'スライムを10体倒す', done: false }];
let nextId = 2;

app.get('/api/quests', (req, res) => {
  res.json(quests);
});

app.get('/api/quests/:id', (req, res) => {
  const quest = quests.find((q) => q.id === Number(req.params.id));
  if (!quest) return res.status(404).json({ error: '指定のクエストは未登録です' });
  res.json(quest);
});

app.post('/api/quests', (req, res) => {
  const quest = { id: nextId++, title: req.body.title, done: false };
  quests.push(quest);
  res.status(201).json(quest);
});

app.put('/api/quests/:id', (req, res) => {
  const quest = quests.find((q) => q.id === Number(req.params.id));
  if (!quest) return res.status(404).json({ error: '指定のクエストは未登録です' });
  quest.title = req.body.title ?? quest.title;
  quest.done = req.body.done ?? quest.done;
  res.json(quest);
});

app.delete('/api/quests/:id', (req, res) => {
  quests = quests.filter((q) => q.id !== Number(req.params.id));
  res.status(204).end();
});

app.listen(3000);`,
    blank: `app.delete('/api/quests/:id', (req, res) => {`,
    placeholder: `// パス /api/quests/:id への DELETE リクエストを受け持つ処理の書き出しが入る`,
    token: /app\.delete\(\s*["']\/api\/quests\/:id["']\s*,\s*\(\s*req\s*,\s*res\s*\)\s*=>\s*\{/,
    hint: `メソッド名と同じ名前の関数を使う。<code>app.delete('/api/quests/:id', (req, res) =&gt; {</code>`,
    output: `メソッド  URL                 意味          ステータス
GET     /api/quests         一覧の取得      200
GET     /api/quests/1       1件の取得       200（未登録の id は 404）
POST    /api/quests         作成           201
PUT     /api/quests/1       更新           200
DELETE  /api/quests/1       削除           204

$ curl -X DELETE -i http://localhost:3000/api/quests/1
HTTP/1.1 204 No Content`
  },
  {
    id: 'express-13',
    phase: 'Web セキュリティ',
    title: 'XSS・SQL インジェクション・CSRF への対策',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、Web アプリの代表的な3つの攻撃と、それぞれを防ぐコードを確かめる。</p>
<p><strong>SQL インジェクション</strong>は、入力に SQL の一部を混ぜて、意図と異なる命令をデータベースに実行させる攻撃である。入力を文字列の連結で SQL に埋め込むと危険であり、プレースホルダー <code>?</code> で値を渡すと防げる。<strong>XSS（クロスサイトスクリプティング）</strong>は、入力に script タグなどを混ぜて、ほかの利用者のブラウザで実行させる攻撃である。HTML に出す前に <code>&lt;</code> や <code>&amp;</code> などの記号を別の表記（エスケープ）に置き換えて防ぐ。</p>
<p><strong>CSRF（クロスサイトリクエストフォージェリ）</strong>は、ログイン中の利用者に、別のサイトから本人の意図と異なる送信をさせる攻撃である。サーバーがフォームごとに推測しにくい合言葉（CSRF トークン）を埋め込み、送信時に一致を確かめて防ぐ。Cookie に SameSite 属性を付ける対策も合わせて使う。</p>`,
    code: `const express = require('express');
const session = require('express-session');
const crypto = require('crypto');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('game.db');
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'change-this-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax' },
}));

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// SQL インジェクション対策：値はプレースホルダーで渡す
app.get('/players', (req, res) => {
  const player = db.prepare('SELECT username FROM users WHERE username = ?').get(req.query.name);
  // XSS 対策：画面に出す値はエスケープする
  res.send('<p>検索結果：' + escapeHtml(player ? player.username : '該当者は未登録') + '</p>');
});

// CSRF 対策：フォームにトークンを埋め込み、送信時に照合する
app.get('/profile', (req, res) => {
  req.session.csrfToken = crypto.randomBytes(32).toString('hex');
  res.send('<form method="post" action="/profile"><input type="hidden" name="csrfToken" value="' + req.session.csrfToken + '"><input name="nickname"><button>変更</button></form>');
});

app.post('/profile', (req, res) => {
  if (req.body.csrfToken !== req.session.csrfToken) {
    return res.status(403).send('不正な送信です');
  }
  res.send('ニックネームを ' + escapeHtml(req.body.nickname) + ' に変更した');
});

app.listen(3000);`,
    blank: `const player = db.prepare('SELECT username FROM users WHERE username = ?').get(req.query.name);`,
    placeholder: `  // プレースホルダー ? を使った SELECT 文に req.query.name を渡し、結果を player に入れる処理が入る`,
    token: /const\s+player\s*=\s*db\.prepare\(\s*["']SELECT\s+username\s+FROM\s+users\s+WHERE\s+username\s*=\s*\?["']\s*\)\.get\(\s*req\.query\.name\s*\)/i,
    hint: `値は get の引数で渡す。<code>const player = db.prepare('SELECT username FROM users WHERE username = ?').get(req.query.name);</code>`,
    output: `ブラウザ：GET /players?name=aoi
  検索結果：aoi

ブラウザ：GET /players?name=' OR '1'='1
  検索結果：該当者は未登録
  （入力全体が1つの名前として扱われ、該当者がゼロ件という結果になる）

ブラウザ：GET /players?name=<script>alert(1)</script>
  検索結果：該当者は未登録
  （入力が画面に出る場合も &lt;script&gt; の文字として表示される）

別のサイトから POST /profile を送らせた場合
  403「不正な送信です」`
  },
  {
    id: 'express-14',
    phase: '総仕上げ',
    title: '総仕上げ：ハイスコアを記録するゲーム API',
    type: 'code',
    run: 'static',
    file: 'server.js',
    story: `<p class="lead">学習者は、ゲームごとのハイスコアを登録し、上位10件のランキングと自己ベストを返す API を完成させる。</p>
<p>この API は、ここまでの内容をすべて使う。REST の形で URL を設計し、JSON で値を受け取ってバリデーションを行い、SQLite にプレースホルダーで保存する。ランキングは SQL の <code>ORDER BY points DESC</code>（点数の大きい順）と <code>LIMIT 10</code>（先頭の10件）で作る。</p>
<p>スコアを登録したときは、その点数より高いスコアの件数に 1 を足して順位を求め、応答に含める。ブラウザのゲームからは <code>fetch('/api/games/dungeon/scores', { method: 'POST', … })</code> の形で呼び出せる。React 実践シリーズで作ったカードめくりゲームの手数を送る使い方もできる。</p>`,
    code: `const express = require('express');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('highscore.db');
app.use(express.json());

db.exec('CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, game TEXT, player TEXT, points INTEGER, created_at TEXT DEFAULT CURRENT_TIMESTAMP)');

function validate(body) {
  const errors = [];
  if (typeof body.player !== 'string' || body.player.trim() === '' || body.player.length > 20) {
    errors.push('player は1〜20文字にしてください');
  }
  if (!Number.isInteger(body.points) || body.points < 0) {
    errors.push('points は0以上の整数にしてください');
  }
  return errors;
}

// ランキング（上位10件）
app.get('/api/games/:game/scores', (req, res) => {
  const rows = db.prepare('SELECT player, points, created_at FROM scores WHERE game = ? ORDER BY points DESC LIMIT 10').all(req.params.game);
  res.json(rows.map((r, i) => ({ rank: i + 1, ...r })));
});

// スコアの登録
app.post('/api/games/:game/scores', (req, res) => {
  const errors = validate(req.body);
  if (errors.length > 0) return res.status(400).json({ errors });
  const player = req.body.player.trim();
  const info = db.prepare('INSERT INTO scores (game, player, points) VALUES (?, ?, ?)').run(req.params.game, player, req.body.points);
  const rank = db.prepare('SELECT COUNT(*) + 1 AS rank FROM scores WHERE game = ? AND points > ?').get(req.params.game, req.body.points).rank;
  res.status(201).json({ id: info.lastInsertRowid, player, points: req.body.points, rank });
});

// 自己ベスト
app.get('/api/games/:game/players/:player/best', (req, res) => {
  const row = db.prepare('SELECT MAX(points) AS best, COUNT(*) AS plays FROM scores WHERE game = ? AND player = ?').get(req.params.game, req.params.player);
  if (row.plays === 0) return res.status(404).json({ error: 'このプレイヤーの記録は未登録です' });
  res.json({ player: req.params.player, best: row.best, plays: row.plays });
});

app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

app.listen(3000, () => {
  console.log('ハイスコア API：http://localhost:3000');
});`,
    blank: `const rows = db.prepare('SELECT player, points, created_at FROM scores WHERE game = ? ORDER BY points DESC LIMIT 10').all(req.params.game);`,
    placeholder: `  // game が一致するスコアを点数の大きい順に10件取得して rows に入れる処理が入る`,
    token: /const\s+rows\s*=\s*db\.prepare\(\s*["']SELECT\s+player\s*,\s*points\s*,\s*created_at\s+FROM\s+scores\s+WHERE\s+game\s*=\s*\?\s+ORDER\s+BY\s+points\s+DESC\s+LIMIT\s+10["']\s*\)\.all\(\s*req\.params\.game\s*\)/i,
    hint: `<code>ORDER BY points DESC LIMIT 10</code> を使う。<code>const rows = db.prepare('SELECT player, points, created_at FROM scores WHERE game = ? ORDER BY points DESC LIMIT 10').all(req.params.game);</code>`,
    output: `$ node server.js
ハイスコア API：http://localhost:3000

$ curl -X POST http://localhost:3000/api/games/dungeon/scores -H "Content-Type: application/json" -d '{"player":"アオイ","points":7200}'
{"id":1,"player":"アオイ","points":7200,"rank":1}

$ curl -X POST http://localhost:3000/api/games/dungeon/scores -H "Content-Type: application/json" -d '{"player":"ミオ","points":9800}'
{"id":2,"player":"ミオ","points":9800,"rank":1}

$ curl http://localhost:3000/api/games/dungeon/scores
[{"rank":1,"player":"ミオ","points":9800,"created_at":"2026-11-05 10:02:11"},
 {"rank":2,"player":"アオイ","points":7200,"created_at":"2026-11-05 10:01:40"}]

$ curl http://localhost:3000/api/games/dungeon/players/アオイ/best
{"player":"アオイ","best":7200,"plays":1}`
  }
];
