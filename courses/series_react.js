SERIES.reactclass = [
  {
    id: 'reactclass-01',
    phase: 'React の概要',
    title: 'React の概要',
    type: 'info',
    run: 'static',
    file: 'App.js',
    story: `<p class="lead">学習者は、React がどのような道具であり、何を作るために使われるかを知る。</p>
<p>React は、Web ページの画面（UI）を作るための JavaScript ライブラリである。ライブラリは、よく使う機能をまとめて、ほかのプログラムから利用できるようにした部品集である。React は Meta 社（旧 Facebook 社）が開発し、現在も多くの Web サービスで使われている。</p>
<p>React では、画面を「コンポーネント」という部品に分けて組み立てる。コンポーネントは、見た目と動きをひとまとめにした画面の部品である。たとえばヘッダー、ボタン、商品カードをそれぞれコンポーネントとして作り、組み合わせて1つのページにする。</p>
<p>このシリーズでは、昔から使われてきた「クラスコンポーネント」という書き方で React の基本を学ぶ。現在の主流は関数コンポーネントと Hooks であり、その書き方は別のシリーズで扱う。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  render() {
    return <h1>Hello, React</h1>;
  }
}

export default App;`,
    output: `画面に「Hello, React」という見出しが表示される。`
  },
  {
    id: 'reactclass-02',
    phase: 'React の概要',
    title: 'ブラウザへの表示（ReactDOM と root）',
    type: 'info',
    run: 'static',
    file: 'index.js',
    story: `<p class="lead">学習者は、React のコンポーネントがブラウザの画面に表示される仕組みを確かめる。</p>
<p>React のプロジェクトには、最初に読み込まれる index.js というファイルがある。index.js は、App コンポーネントを HTML の中の決まった場所に表示する役割をもつ。</p>
<p>ReactDOM は、React のコンポーネントをブラウザの画面（DOM）に描画するためのライブラリである。<code>ReactDOM.createRoot</code> は、表示先の HTML 要素から「root」を作る。root は、React が画面を管理する起点である。<code>root.render(&lt;App /&gt;)</code> を実行すると、App の内容が表示先の要素の中に描画される。</p>
<pre>&lt;!-- index.html --&gt;
&lt;div id="root"&gt;&lt;/div&gt;</pre>
<p>このアプリの実行画面でも、同じ仕組みで App が id="root" の要素に描画される。そのため、以降のレッスンで学習者が書くファイルは App.js が中心になる。</p>`,
    code: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
    output: `index.html の <div id="root"></div> の中に、App コンポーネントの内容が表示される。`
  },
  {
    id: 'reactclass-03',
    phase: 'JSX',
    title: 'JSX',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、JSX を使って見出しを画面に表示する。</p>
<p>JSX は、JavaScript の中に HTML に似たタグを書ける記法である。React は JSX を読み取り、画面の要素に変換する。render メソッドの return の後ろに書いた JSX が、そのコンポーネントの見た目になる。</p>
<p>JSX では、return で返す要素を1つの親要素にまとめる。複数の要素を並べる場合は、外側を <code>&lt;div&gt;</code> などで囲む。複数行の JSX は、読みやすさのために丸かっこ <code>( )</code> で囲む。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>こんにちは、React</h1>
        <p>JSX で画面を作る。</p>
      </div>
    );
  }
}

export default App;`,
    blank: `<h1>こんにちは、React</h1>`,
    placeholder: `{/* 「こんにちは、React」と表示する h1 要素が入る */}`,
    token: /<h1>\s*こんにちは、React\s*<\/h1>/,
    hint: `h1 タグで文字を囲む。<code>&lt;h1&gt;こんにちは、React&lt;/h1&gt;</code>`
  },
  {
    id: 'reactclass-04',
    phase: 'JSX',
    title: 'img タグ',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、JSX の img タグで画像を表示する。</p>
<p>JSX の img タグは、HTML と同じく src 属性に画像の URL を書く。alt 属性には、画像の内容を表す短い文を書く。</p>
<p>JSX では、img のような空要素（閉じタグを省略する要素）も、末尾に <code>/</code> を付けて閉じる決まりがある。HTML では <code>&lt;img src="…"&gt;</code> と書けるが、JSX では <code>&lt;img src="…" /&gt;</code> と書く。この決まりを守ると、Babel（JSX を JavaScript に変換する道具）がエラーを出す事態を防げる。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>今日の写真</h1>
        <img src="https://placehold.co/200x120" alt="サンプル画像" />
      </div>
    );
  }
}

export default App;`,
    blank: `<img src="https://placehold.co/200x120" alt="サンプル画像" />`,
    placeholder: `{/* 画像を表示する img 要素が入る */}`,
    token: /<img\s+src=["']https:\/\/placehold\.co\/200x120["'][^>]*\/>/,
    hint: `src に URL を書き、末尾を <code>/&gt;</code> で閉じる。<code>&lt;img src="https://placehold.co/200x120" alt="サンプル画像" /&gt;</code>`
  },
  {
    id: 'reactclass-05',
    phase: 'JSX',
    title: 'App.js の構成',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、App.js を構成する4つの部分を確かめ、クラスの宣言を書く。</p>
<p>App.js は、上から順に次の4つの部分でできている。</p>
<pre>import React from 'react';            // 1. React の読み込み
class App extends React.Component {  // 2. クラスの宣言
  render() { return (…); }          // 3. render メソッド
}
export default App;                  // 4. ほかのファイルへの公開</pre>
<p>import は、ほかのファイルやライブラリの機能を読み込む命令である。<code>class App extends React.Component</code> は、React.Component を土台にして App という名前のコンポーネントを作る宣言である。render メソッドは、画面に表示する JSX を返す。<code>export default App</code> は、index.js などのほかのファイルから App を読み込めるようにする命令である。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App.js の構成</h1>
        <p>import、クラス、render、export の順に並ぶ。</p>
      </div>
    );
  }
}

export default App;`,
    blank: `class App extends React.Component {`,
    placeholder: `// App という名前のクラスコンポーネントを宣言する行が入る`,
    token: /class\s+App\s+extends\s+React\.Component\s*\{/,
    hint: `React.Component を継承する。<code>class App extends React.Component {</code>`
  },
  {
    id: 'reactclass-06',
    phase: 'JSX',
    title: 'JSX と JavaScript',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、JSX の中に波かっこ {} で JavaScript の値を埋め込む。</p>
<p>JSX の中で <code>{ }</code> を使うと、その部分は JavaScript の式として計算される。式は、変数や計算のように1つの値になる記述である。たとえば <code>{1 + 2}</code> は 3 として表示される。</p>
<p>render メソッドの中では、return の前に定数や変数を定義できる。定義した定数を JSX の <code>{ }</code> に書くと、その値が画面に表示される。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  render() {
    const name = 'ケン';
    return (
      <div>
        <h1>{name}さん、ようこそ</h1>
        <p>1 + 2 の答えは {1 + 2} である。</p>
      </div>
    );
  }
}

export default App;`,
    blank: `<h1>{name}さん、ようこそ</h1>`,
    placeholder: `{/* 定数 name を使ってあいさつを表示する h1 要素が入る */}`,
    token: /<h1>\s*\{\s*name\s*\}さん、ようこそ\s*<\/h1>/,
    hint: `定数は波かっこで囲む。<code>&lt;h1&gt;{name}さん、ようこそ&lt;/h1&gt;</code>`
  },
  {
    id: 'reactclass-07',
    phase: 'state とイベント',
    title: '表示切り替えの準備',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、表示を切り替えるアプリの土台として、見出しと2つのボタンを並べる。</p>
<p>この章では、ボタンを押すと見出しの名前が「ひつじ」と「かえる」で切り替わるアプリを作る。最初の段階として、画面の部品を JSX で用意する。</p>
<p>この時点のボタンは見た目の部品である。押した後の動きは次のレッスン以降で順に加える。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>こんにちは、ひつじ</h1>
        <button>ひつじ</button>
        <button>かえる</button>
      </div>
    );
  }
}

export default App;`,
    blank: `<button>ひつじ</button>
        <button>かえる</button>`,
    placeholder: `{/* 「ひつじ」と「かえる」の2つのボタンが入る */}`,
    token: /<button>\s*ひつじ\s*<\/button>\s*<button>\s*かえる\s*<\/button>/,
    hint: `button タグを2つ並べる。<code>&lt;button&gt;ひつじ&lt;/button&gt;</code> と <code>&lt;button&gt;かえる&lt;/button&gt;</code>`
  },
  {
    id: 'reactclass-08',
    phase: 'state とイベント',
    title: 'onClick イベント',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、onClick を使ってボタンが押された時点で処理を実行させる。</p>
<p>イベントは、クリックや文字の入力のように、画面の上で起こる出来事である。React では <code>onClick={処理}</code> と書くと、要素がクリックされた時点でその処理が実行される。</p>
<p>処理には矢印関数 <code>() =&gt; { … }</code> を渡す。矢印関数は、関数を短く書くための記法である。このレッスンでは、ボタンを押すとコンソールに名前が出力される。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>こんにちは、ひつじ</h1>
        <button onClick={() => { console.log('ひつじ'); }}>ひつじ</button>
        <button onClick={() => { console.log('かえる'); }}>かえる</button>
      </div>
    );
  }
}

export default App;`,
    blank: `onClick={() => { console.log('ひつじ'); }}`,
    placeholder: `/* クリックでコンソールに「ひつじ」を出す onClick が入る */`,
    token: /onClick=\{\s*\(\)\s*=>\s*\{?\s*console\.log\(\s*["']ひつじ["']\s*\);?\s*\}?\s*\}/,
    hint: `かえるのボタンと同じ形で書く。<code>onClick={() =&gt; { console.log('ひつじ'); }}</code>`
  },
  {
    id: 'reactclass-09',
    phase: 'state とイベント',
    title: 'state',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、constructor の中で state の初期値を定義する。</p>
<p>state は、コンポーネントが保持し、変化すると画面を再描画させる値である。クラスコンポーネントでは、state を constructor の中で <code>this.state</code> にオブジェクトとして代入する。</p>
<p>constructor は、クラスからコンポーネントが作られる時点で最初に実行されるメソッドである。constructor の先頭には <code>super(props);</code> を書く決まりがある。この行は、土台である React.Component の準備を行う。</p>
<pre>constructor(props) {
  super(props);
  this.state = { name: 'ひつじ' };
}</pre>`,
    code: `import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'ひつじ' };
  }

  render() {
    return (
      <div>
        <h1>こんにちは、ひつじ</h1>
        <button onClick={() => { console.log('ひつじ'); }}>ひつじ</button>
        <button onClick={() => { console.log('かえる'); }}>かえる</button>
      </div>
    );
  }
}

export default App;`,
    blank: `this.state = { name: 'ひつじ' };`,
    placeholder: `// name の初期値を「ひつじ」とする state の定義が入る`,
    token: /this\.state\s*=\s*\{\s*name\s*:\s*["']ひつじ["']\s*\}/,
    hint: `this.state にオブジェクトを代入する。<code>this.state = { name: 'ひつじ' };</code>`
  },
  {
    id: 'reactclass-10',
    phase: 'state とイベント',
    title: 'state の表示',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、state の値を JSX の中に表示する。</p>
<p>state の値は <code>this.state.プロパティ名</code> で取り出せる。name の値を取り出す場合は <code>this.state.name</code> と書く。</p>
<p>JSX の中では、波かっこで囲むと JavaScript の値を表示できる。見出しの名前を固定の文字から <code>{this.state.name}</code> に置き換えると、見出しは state の値に連動するようになる。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'ひつじ' };
  }

  render() {
    return (
      <div>
        <h1>こんにちは、{this.state.name}</h1>
        <button onClick={() => { console.log('ひつじ'); }}>ひつじ</button>
        <button onClick={() => { console.log('かえる'); }}>かえる</button>
      </div>
    );
  }
}

export default App;`,
    blank: `<h1>こんにちは、{this.state.name}</h1>`,
    placeholder: `{/* state の name を使った見出しの h1 要素が入る */}`,
    token: /<h1>\s*こんにちは、\{\s*this\.state\.name\s*\}\s*<\/h1>/,
    hint: `this.state.name を波かっこで囲む。<code>&lt;h1&gt;こんにちは、{this.state.name}&lt;/h1&gt;</code>`
  },
  {
    id: 'reactclass-11',
    phase: 'state とイベント',
    title: 'state の変更',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、setState を使ってボタンのクリックで state を書き換える。</p>
<p>state の値を変えるには <code>this.setState</code> を使う。setState は、引数のオブジェクトの内容で state を更新し、画面の再描画を React に依頼するメソッドである。</p>
<p>React は、setState を通した変更を検知して画面を描き直す。<code>this.state.name = 'かえる'</code> のように直接代入すると、React は変更を検知する機会を失い、画面は古い表示のまま残る。そのため、state の変更には常に setState を使う。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'ひつじ' };
  }

  render() {
    return (
      <div>
        <h1>こんにちは、{this.state.name}</h1>
        <button onClick={() => { this.setState({ name: 'ひつじ' }); }}>ひつじ</button>
        <button onClick={() => { this.setState({ name: 'かえる' }); }}>かえる</button>
      </div>
    );
  }
}

export default App;`,
    blank: `this.setState({ name: 'ひつじ' });`,
    placeholder: `/* name を「ひつじ」に変える setState が入る */`,
    token: /this\.setState\(\s*\{\s*name\s*:\s*["']ひつじ["']\s*\}\s*\)/,
    hint: `かえるのボタンと同じ形で書く。<code>this.setState({ name: 'ひつじ' });</code>`
  },
  {
    id: 'reactclass-12',
    phase: 'state とイベント',
    title: 'メソッドの作成',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、state を変える処理を handleClick メソッドにまとめ、constructor で bind する。</p>
<p>同じ形の処理が複数の場所にある場合は、メソッドにまとめると読みやすくなる。メソッドは、クラスの中に定義する関数である。handleClick は引数 name を受け取り、その値で state を更新する。</p>
<p>クラスのメソッドの中の <code>this</code> は、呼び出し方によって指す先が変わる。<code>this.handleClick = this.handleClick.bind(this);</code> を constructor に書くと、handleClick の中の this が常に App を指すように固定される。bind は、関数の this を決める命令である。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'ひつじ' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState({ name: name });
  }

  render() {
    return (
      <div>
        <h1>こんにちは、{this.state.name}</h1>
        <button onClick={() => { this.handleClick('ひつじ'); }}>ひつじ</button>
        <button onClick={() => { this.handleClick('かえる'); }}>かえる</button>
      </div>
    );
  }
}

export default App;`,
    blank: `handleClick(name) {
    this.setState({ name: name });
  }`,
    placeholder: `// 引数 name で state を更新する handleClick メソッドが入る`,
    token: /handleClick\(\s*name\s*\)\s*\{\s*this\.setState\(\s*\{\s*name\s*(:\s*name\s*)?\}\s*\);?\s*\}/,
    hint: `メソッドは <code>handleClick(name) { … }</code> の形で定義し、中で <code>this.setState({ name: name });</code> を実行する。`
  },
  {
    id: 'reactclass-13',
    phase: 'カウントアップ機能',
    title: 'カウントアップ機能の作成（1）',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、カウントの値を保持する state を用意し、画面に表示する。</p>
<p>この章では、ボタンを押すたびに数が1増えるカウンターを作る。最初の段階として、数を保持する state count を定義し、初期値を 0 にする。</p>
<p>count の値は <code>{this.state.count}</code> で見出しに表示する。ボタンの処理は次のレッスンで加える。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button>+</button>
      </div>
    );
  }
}

export default App;`,
    blank: `this.state = { count: 0 };`,
    placeholder: `// count の初期値を 0 とする state の定義が入る`,
    token: /this\.state\s*=\s*\{\s*count\s*:\s*0\s*\}/,
    hint: `this.state に count をもつオブジェクトを代入する。<code>this.state = { count: 0 };</code>`
  },
  {
    id: 'reactclass-14',
    phase: 'カウントアップ機能',
    title: 'カウントアップ機能の作成（2）',
    type: 'code',
    run: 'react',
    file: 'App.js',
    story: `<p class="lead">学習者は、ボタンを押すと count が1増える handleClick メソッドを完成させる。</p>
<p>handleClick は、現在の count に 1 を足した値で state を更新する。現在の値は <code>this.state.count</code> で取り出せるため、新しい値は <code>this.state.count + 1</code> になる。</p>
<p>onClick には、bind 済みのメソッドを <code>onClick={this.handleClick}</code> の形でそのまま渡せる。constructor の bind によって、handleClick の中の this は App を指す。これでカウンターが完成する。</p>`,
    code: `import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default App;`,
    blank: `this.setState({ count: this.state.count + 1 });`,
    placeholder: `// count を 1 増やす setState が入る`,
    token: /this\.setState\(\s*\{\s*count\s*:\s*this\.state\.count\s*\+\s*1\s*\}\s*\)/,
    hint: `現在の値に 1 を足す。<code>this.setState({ count: this.state.count + 1 });</code>`
  }
];

SERIES.react = [
  {
    id: 'react-01',
    phase: 'コンポーネントと JSX',
    title: '関数コンポーネント',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、関数として App コンポーネントを定義し、見出しを表示する。</p>
<p>関数コンポーネントは、JSX を返す JavaScript の関数として書くコンポーネントである。現在の React では、クラスよりも関数で書く形が主流である。クラスの render メソッドの役割を、関数の return が担う。</p>
<p>コンポーネントの名前は大文字で始める決まりがある。React は、大文字で始まるタグを自作のコンポーネント、小文字で始まるタグを HTML の要素として区別する。</p>`,
    code: `import React from 'react';

function App() {
  return (
    <div>
      <h1>はじめての関数コンポーネント</h1>
      <p>関数が JSX を返す。</p>
    </div>
  );
}

export default App;`,
    blank: `function App() {`,
    placeholder: `// App という名前の関数を宣言する行が入る`,
    token: /function\s+App\s*\(\s*\)\s*\{/,
    hint: `関数を宣言する。<code>function App() {</code>`
  },
  {
    id: 'react-02',
    phase: 'コンポーネントと JSX',
    title: 'JSX と式',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、JSX の中に計算式を埋め込み、合計金額を表示する。</p>
<p>JSX の中の <code>{ }</code> には、1つの値になる JavaScript の式を書ける。変数、計算、関数の呼び出しはどれも式である。</p>
<p>このレッスンでは、単価 price と個数 qty を掛け算して合計を表示する。関数の中で定義した定数は、同じ関数の return の中で使える。</p>`,
    code: `import React from 'react';

function App() {
  const item = 'りんご';
  const price = 120;
  const qty = 3;
  return (
    <div>
      <h1>{item}の注文</h1>
      <p>単価 {price} 円 × {qty} 個</p>
      <p>合計は {price * qty} 円である。</p>
    </div>
  );
}

export default App;`,
    blank: `<p>合計は {price * qty} 円である。</p>`,
    placeholder: `{/* price と qty を掛けた合計を表示する p 要素が入る */}`,
    token: /\{\s*price\s*\*\s*qty\s*\}/,
    hint: `掛け算の式を波かっこで囲む。<code>&lt;p&gt;合計は {price * qty} 円である。&lt;/p&gt;</code>`
  },
  {
    id: 'react-03',
    phase: 'コンポーネントと JSX',
    title: 'props',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、props を使って子コンポーネントに名前を渡す。</p>
<p>props は、親コンポーネントから子コンポーネントへ渡す値である。親は HTML の属性と同じ形で <code>&lt;Greeting name="ハナ" /&gt;</code> と書く。子は引数 props を受け取り、<code>props.name</code> で値を取り出す。</p>
<p>同じコンポーネントに異なる props を渡すと、1つの部品で異なる表示を作れる。このレッスンでは Greeting を2回使い、2人にあいさつを表示する。</p>`,
    code: `import React from 'react';

function Greeting(props) {
  return <p>{props.name}さん、こんにちは。</p>;
}

function App() {
  return (
    <div>
      <h1>あいさつ</h1>
      <Greeting name="ハナ" />
      <Greeting name="タロウ" />
    </div>
  );
}

export default App;`,
    blank: `<Greeting name="ハナ" />`,
    placeholder: `{/* name に「ハナ」を渡す Greeting が入る */}`,
    token: /<Greeting\s+name=["']ハナ["']\s*\/>/,
    hint: `下の行と同じ形で書く。<code>&lt;Greeting name="ハナ" /&gt;</code>`
  },
  {
    id: 'react-04',
    phase: 'コンポーネントと JSX',
    title: '配列の表示（map と key）',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、map を使って配列の要素をリストとして表示する。</p>
<p>配列の map メソッドは、各要素に同じ処理を行い、その結果を新しい配列にして返す。JSX の中で map を使うと、配列の要素を順に li 要素に変換して並べられる。</p>
<p>map で作る要素には key 属性を付ける。key は、React が各要素を見分けるための目印であり、兄弟の要素の間で互いに異なる値を使う決まりがある。このレッスンでは果物の名前そのものを key にする。</p>`,
    code: `import React from 'react';

function App() {
  const fruits = ['りんご', 'みかん', 'ぶどう'];
  return (
    <div>
      <h1>果物の一覧</h1>
      <ul>
        {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
      </ul>
    </div>
  );
}

export default App;`,
    blank: `{fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}`,
    placeholder: `{/* fruits の各要素を li 要素に変換する map が入る */}`,
    token: /fruits\.map\(\s*\(?\s*fruit\s*\)?\s*=>\s*\(?\s*<li\s+key=\{\s*fruit\s*\}\s*>\s*\{\s*fruit\s*\}\s*<\/li>/,
    hint: `map の中で li を返し、key を付ける。<code>{fruits.map((fruit) =&gt; &lt;li key={fruit}&gt;{fruit}&lt;/li&gt;)}</code>`
  },
  {
    id: 'react-05',
    phase: 'コンポーネントと JSX',
    title: '条件付きの表示',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、条件演算子を使って条件に応じた表示を切り替える。</p>
<p>条件演算子 <code>条件 ? A : B</code> は、条件が true のとき A、false のとき B になる式である。式であるため、JSX の <code>{ }</code> の中に書ける。</p>
<p>条件が true のときに限り要素を表示する場合は、<code>{条件 &amp;&amp; 要素}</code> の形も使える。このレッスンでは isMember の値によって案内文を切り替える。isMember を false に書き換えると、表示が変わる様子を確かめられる。</p>`,
    code: `import React from 'react';

function App() {
  const isMember = true;
  const points = 120;
  return (
    <div>
      <h1>ポイントのご案内</h1>
      {isMember ? <p>会員の方へ：今月はポイントが2倍になる。</p> : <p>会員登録でポイントがたまる。</p>}
      {isMember && <p>現在のポイントは {points} である。</p>}
    </div>
  );
}

export default App;`,
    blank: `{isMember ? <p>会員の方へ：今月はポイントが2倍になる。</p> : <p>会員登録でポイントがたまる。</p>}`,
    placeholder: `{/* isMember によって2つの案内文を切り替える条件演算子が入る */}`,
    token: /\{\s*isMember\s*\?\s*<p>[^<]*<\/p>\s*:\s*<p>[^<]*<\/p>\s*\}/,
    hint: `<code>{isMember ? &lt;p&gt;…&lt;/p&gt; : &lt;p&gt;…&lt;/p&gt;}</code> の形で書く。`
  },
  {
    id: 'react-06',
    phase: 'イベントと state',
    title: 'イベント',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、関数コンポーネントの中で定義した関数をボタンのクリックに結び付ける。</p>
<p>関数コンポーネントでは、イベントの処理をコンポーネントの中の関数として定義する。この関数をイベントハンドラと呼ぶ。イベントハンドラは、イベントが起きた時点で呼び出される関数である。</p>
<p>ボタンには <code>onClick={handleClick}</code> の形で関数そのものを渡す。<code>onClick={handleClick()}</code> と書くと、描画の時点で関数が実行されてしまう。クリックの時点で実行させるには、かっこを省いて関数名のみを書く。</p>`,
    code: `import React from 'react';

function App() {
  function handleClick() {
    console.log('ボタンが押された。');
  }

  return (
    <div>
      <h1>イベント</h1>
      <button onClick={handleClick}>押す</button>
    </div>
  );
}

export default App;`,
    blank: `onClick={handleClick}`,
    placeholder: `/* handleClick をクリックに結び付ける属性が入る */`,
    token: /<button\s+onClick=\{\s*handleClick\s*\}\s*>/,
    hint: `かっこを省いて関数名のみを書く。<code>onClick={handleClick}</code>`
  },
  {
    id: 'react-07',
    phase: 'イベントと state',
    title: 'useState',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、useState を使ってカウンターの state を定義する。</p>
<p>state は、コンポーネントが保持し、変化すると画面を再描画させる値である。関数コンポーネントでは、useState という Hook で state を作る。Hook は、関数コンポーネントに React の機能を追加する特別な関数であり、名前は use で始まる。</p>
<p><code>const [count, setCount] = useState(0);</code> は、初期値 0 の state を作る。count は現在の値、setCount は値を更新する関数である。setCount に新しい値を渡すと、React は画面を再描画する。</p>`,
    code: `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>リセット</button>
    </div>
  );
}

export default App;`,
    blank: `const [count, setCount] = useState(0);`,
    placeholder: `// 初期値 0 の state count と更新関数 setCount の定義が入る`,
    token: /const\s*\[\s*count\s*,\s*setCount\s*\]\s*=\s*useState\(\s*0\s*\)/,
    hint: `分割代入で受け取る。<code>const [count, setCount] = useState(0);</code>`
  },
  {
    id: 'react-08',
    phase: 'イベントと state',
    title: 'state の更新（関数形式）',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、関数形式の更新を使い、1回のクリックで count を3増やす。</p>
<p>setCount を同じ処理の中で3回呼んでも、<code>setCount(count + 1)</code> の形では count が1増えた状態で止まる。3回とも、描画の時点の同じ count を元に計算するからである。</p>
<p>setCount に関数を渡す形 <code>setCount((c) =&gt; c + 1)</code> では、React が直前の更新結果を引数 c に入れて関数を呼ぶ。そのため、3回呼ぶと3回分の更新が積み重なる。前の値を元に次の値を決める場合は、この関数形式を使う。</p>`,
    code: `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function addThree() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addThree}>+3</button>
    </div>
  );
}

export default App;`,
    blank: `setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);`,
    placeholder: `// 関数形式の setCount を3回呼ぶ処理が入る`,
    token: /(setCount\(\s*\(?\s*c\s*\)?\s*=>\s*c\s*\+\s*1\s*\)\s*;?\s*){3}/,
    hint: `同じ行を3回書く。<code>setCount((c) =&gt; c + 1);</code>`
  },
  {
    id: 'react-09',
    phase: 'イベントと state',
    title: 'フォーム入力（制御コンポーネント）',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、入力欄の文字を state と結び付け、入力内容を画面に反映する。</p>
<p>制御コンポーネントは、入力欄の値を React の state で管理するフォームの部品である。input の value に state を指定し、onChange で state を更新する。</p>
<p>onChange は、入力欄の内容が変わるたびに呼ばれるイベントである。引数 e はイベントの情報をもつオブジェクトであり、<code>e.target.value</code> に入力欄の現在の文字が入る。この値で setName を呼ぶと、入力と表示が常に一致する。</p>`,
    code: `import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>名前の入力</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前"
      />
      <p>こんにちは、{name || 'ゲスト'}さん。</p>
    </div>
  );
}

export default App;`,
    blank: `onChange={(e) => setName(e.target.value)}`,
    placeholder: `// 入力のたびに setName を呼ぶ onChange が入る`,
    token: /onChange=\{\s*\(?\s*e\s*\)?\s*=>\s*setName\(\s*e\.target\.value\s*\)\s*\}/,
    hint: `入力欄の文字は e.target.value に入る。<code>onChange={(e) =&gt; setName(e.target.value)}</code>`
  },
  {
    id: 'react-10',
    phase: 'Hooks の活用',
    title: 'useEffect',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、useEffect を使って1秒ごとに数が増えるタイマーを作る。</p>
<p>useEffect は、画面の描画の後に実行したい処理（副作用）を登録する Hook である。副作用は、タイマーの開始やデータの取得のように、画面の描画以外で外部に働きかける処理である。</p>
<p>useEffect の第2引数は依存配列と呼ばれる。空の配列 <code>[]</code> を渡すと、処理は最初の描画の後に1回実行される。また、useEffect の中で返した関数は、コンポーネントが画面から消える時点で実行される。この関数でタイマーを止めると、不要な処理が残る事態を防げる。</p>`,
    code: `import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>経過時間</h1>
      <p>{seconds} 秒</p>
    </div>
  );
}

export default App;`,
    blank: `const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);`,
    placeholder: `// 1000 ミリ秒ごとに seconds を 1 増やす setInterval が入る`,
    token: /setInterval\(\s*\(\)\s*=>\s*\{?\s*setSeconds\(\s*\(?\s*s\s*\)?\s*=>\s*s\s*\+\s*1\s*\)\s*;?\s*\}?\s*,\s*1000\s*\)/,
    hint: `<code>const id = setInterval(() =&gt; { setSeconds((s) =&gt; s + 1); }, 1000);</code>`
  },
  {
    id: 'react-11',
    phase: 'Hooks の活用',
    title: 'useRef',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、useRef を使ってボタンのクリックで入力欄にカーソルを移す。</p>
<p>useRef は、再描画をまたいで値を保持する入れ物を作る Hook である。入れ物の中身は <code>.current</code> で読み書きする。state と異なり、current を書き換えた後も画面は今の表示を保つ。</p>
<p>JSX の要素に <code>ref={inputRef}</code> を付けると、描画の後に inputRef.current にその要素が入る。このレッスンでは、<code>inputRef.current.focus()</code> を呼んで入力欄にカーソルを移す。</p>`,
    code: `import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} placeholder="ここに入力" />
      <button onClick={handleFocus}>入力欄へ移動</button>
    </div>
  );
}

export default App;`,
    blank: `inputRef.current.focus();`,
    placeholder: `// inputRef の要素にカーソルを移す処理が入る`,
    token: /inputRef\.current\.focus\(\s*\)/,
    hint: `要素は inputRef.current に入っている。<code>inputRef.current.focus();</code>`
  },
  {
    id: 'react-12',
    phase: 'Hooks の活用',
    title: 'コンポーネントの分割と props の受け渡し',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、商品カードを別のコンポーネントに分け、親から関数を props で渡して子の操作を親に伝える。</p>
<p>画面が大きくなると、1つのコンポーネントに処理が集まり読みにくくなる。繰り返し現れる部分を別のコンポーネントに分けると、見通しがよくなる。</p>
<p>state は親の App が保持する。子の ProductCard は、親から受け取った関数 onBuy をクリックの時点で呼ぶ。このように、子から親へは「親が渡した関数を子が呼ぶ」形で情報を伝える。引数の <code>{ name, price, onBuy }</code> は、props から必要な値を取り出す分割代入である。</p>`,
    code: `import React, { useState } from 'react';

function ProductCard({ name, price, onBuy }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 8, margin: 8 }}>
      <h2>{name}</h2>
      <p>{price} 円</p>
      <button onClick={() => onBuy(name)}>カートに入れる</button>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  function handleBuy(name) {
    setCart((items) => [...items, name]);
  }

  return (
    <div>
      <h1>ショップ</h1>
      <ProductCard name="ノート" price={150} onBuy={handleBuy} />
      <ProductCard name="ペン" price={100} onBuy={handleBuy} />
      <p>カートの中身：{cart.join('、') || '空'}</p>
    </div>
  );
}

export default App;`,
    blank: `<button onClick={() => onBuy(name)}>カートに入れる</button>`,
    placeholder: `{/* クリックで onBuy に name を渡すボタンが入る */}`,
    token: /onClick=\{\s*\(\)\s*=>\s*onBuy\(\s*name\s*\)\s*\}/,
    hint: `<code>&lt;button onClick={() =&gt; onBuy(name)}&gt;カートに入れる&lt;/button&gt;</code>`
  },
  {
    id: 'react-13',
    phase: 'アプリの作成',
    title: 'リストの追加・削除（TODO）',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、項目の追加と削除ができる TODO アプリを完成させる。</p>
<p>TODO の一覧は配列の state todos で管理する。React の state の配列は、元の配列を直接書き換える代わりに、新しい配列を作って setTodos に渡す。追加にはスプレッド構文 <code>[...todos, 新しい項目]</code> を使う。</p>
<p>削除には filter メソッドを使う。filter は、条件に合う要素を集めた新しい配列を返す。<code>todo.id !== id</code> を条件にすると、指定した id 以外の項目が残り、結果として1件が削除される。各項目の id は Date.now() で作る。</p>`,
    code: `import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  function addTodo() {
    if (text.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: text }]);
    setText('');
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>TODO リスト</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;`,
    blank: `setTodos(todos.filter((todo) => todo.id !== id));`,
    placeholder: `// id が一致する項目を除いた配列で todos を更新する処理が入る`,
    token: /setTodos\(\s*todos\.filter\(\s*\(?\s*todo\s*\)?\s*=>\s*todo\.id\s*!==?\s*id\s*\)\s*\)/,
    hint: `filter で残す項目を選ぶ。<code>setTodos(todos.filter((todo) =&gt; todo.id !== id));</code>`
  },
  {
    id: 'react-14',
    phase: 'アプリの作成',
    title: 'カスタムフック',
    type: 'code',
    run: 'react',
    file: 'App.jsx',
    story: `<p class="lead">学習者は、カウンターの処理を useCounter というカスタムフックにまとめ、2つのカウンターで使い回す。</p>
<p>カスタムフックは、Hooks を使った処理をまとめて自作した関数である。名前は use で始める決まりがある。カスタムフックの中では useState などの Hook を呼べる。</p>
<p>useCounter は初期値 initial を受け取り、count と、値を変える関数をオブジェクトで返す。カスタムフックを呼ぶたびに独立した state が作られるため、りんごとみかんのカウンターはそれぞれ別の値をもつ。</p>`,
    code: `import React, { useState } from 'react';

function useCounter(initial) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(initial);
  return { count, increment, reset };
}

function App() {
  const apple = useCounter(0);
  const orange = useCounter(10);

  return (
    <div>
      <h1>カスタムフック</h1>
      <p>りんご：{apple.count}</p>
      <button onClick={apple.increment}>+1</button>
      <button onClick={apple.reset}>リセット</button>
      <p>みかん：{orange.count}</p>
      <button onClick={orange.increment}>+1</button>
      <button onClick={orange.reset}>リセット</button>
    </div>
  );
}

export default App;`,
    blank: `const [count, setCount] = useState(initial);`,
    placeholder: `// 初期値 initial の state count と setCount の定義が入る`,
    token: /const\s*\[\s*count\s*,\s*setCount\s*\]\s*=\s*useState\(\s*initial\s*\)/,
    hint: `初期値に引数 initial を渡す。<code>const [count, setCount] = useState(initial);</code>`
  }
];

SERIES.nextjs = [
  {
    id: 'nextjs-01',
    phase: 'Next.js の基本',
    title: 'Next.js の概要',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は、Next.js の役割を知り、create-next-app で作られるフォルダ構成を確かめる。</p>
<p>Next.js は、React を土台にした Web アプリ用のフレームワークである。フレームワークは、アプリの骨組みと決まりをあらかじめ用意した開発の枠組みである。Next.js は、ページの切り替え（ルーティング）、サーバーでの描画、本番用のビルドを React に追加する。</p>
<p>新しいプロジェクトは <code>npx create-next-app@latest</code> で作る。このシリーズでは、app フォルダの構成でページを作る「App Router」という方式を扱う。</p>
<pre>my-app/
├─ app/
│  ├─ layout.tsx   … 全ページ共通の外枠
│  ├─ page.tsx     … トップページ（/）
│  └─ globals.css
├─ public/         … 画像などの静的ファイル
├─ package.json
└─ next.config.ts</pre>`,
    code: `npx create-next-app@latest my-app
cd my-app
npm run dev`,
    output: `▲ Next.js
- Local: http://localhost:3000

✓ Ready
（ブラウザで http://localhost:3000 を開くと、トップページが表示される）`
  },
  {
    id: 'nextjs-02',
    phase: 'Next.js の基本',
    title: 'app/page.tsx とページ',
    type: 'code',
    run: 'react',
    file: 'page.jsx',
    story: `<p class="lead">学習者は、app/page.tsx に Page コンポーネントを書き、トップページの内容を作る。</p>
<p>App Router では、app フォルダの page.tsx がページの本体である。page.tsx で export default したコンポーネントが、そのページの画面として表示される。app 直下の page.tsx は、URL の「/」に対応するトップページになる。</p>
<p>実際のプロジェクトでは TypeScript の page.tsx を使うことが多い。このレッスンでは、ブラウザ上で動かすために同じ内容を JSX で書く。コンポーネントの名前は Page とする。</p>`,
    code: `export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>トップページ</h1>
      <p>このページは app/page.tsx から作られる。</p>
    </main>
  );
}`,
    blank: `<h1>トップページ</h1>`,
    placeholder: `{/* 「トップページ」と表示する h1 要素が入る */}`,
    token: /<h1>\s*トップページ\s*<\/h1>/,
    hint: `<code>&lt;h1&gt;トップページ&lt;/h1&gt;</code>`
  },
  {
    id: 'nextjs-03',
    phase: 'Next.js の基本',
    title: 'レイアウト（layout.tsx）',
    type: 'code',
    run: 'react',
    file: 'layout.jsx',
    story: `<p class="lead">学習者は、children を受け取るレイアウトを作り、ページの共通部分をまとめる。</p>
<p>layout.tsx は、複数のページで共通する外枠（ヘッダーやフッター）を定義するファイルである。Next.js は、各ページの Page コンポーネントを layout の props の children に入れて表示する。children は、コンポーネントのタグで挟まれた中身を表す特別な props である。</p>
<p>本物の app/layout.tsx は &lt;html&gt; と &lt;body&gt; を返す。このレッスンではブラウザ上で動かすために、RootLayout を div で作り、Page の中で RootLayout に中身を挟んで、Next.js の動きを再現する。</p>
<pre>// app/layout.tsx（本物の形）
export default function RootLayout({ children }) {
  return (
    &lt;html lang="ja"&gt;
      &lt;body&gt;{children}&lt;/body&gt;
    &lt;/html&gt;
  );
}</pre>`,
    code: `function RootLayout({ children }) {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ background: '#222', color: '#fff', padding: 12 }}>マイサイト</header>
      <main style={{ padding: 16 }}>{children}</main>
      <footer style={{ padding: 12, color: '#888' }}>© 2026 マイサイト</footer>
    </div>
  );
}

export default function Page() {
  return (
    <RootLayout>
      <h1>トップページ</h1>
      <p>ヘッダーとフッターはレイアウトが表示する。</p>
    </RootLayout>
  );
}`,
    blank: `<main style={{ padding: 16 }}>{children}</main>`,
    placeholder: `{/* children を表示する main 要素が入る */}`,
    token: /<main[^>]*>\s*\{\s*children\s*\}\s*<\/main>/,
    hint: `main 要素の中に children を置く。<code>&lt;main style={{ padding: 16 }}&gt;{children}&lt;/main&gt;</code>`
  },
  {
    id: 'nextjs-04',
    phase: 'ルーティング',
    title: 'ルーティング（フォルダと URL の対応）',
    type: 'info',
    run: 'static',
    file: 'app/',
    story: `<p class="lead">学習者は、app フォルダの中のフォルダ構成と URL の対応を確かめる。</p>
<p>ルーティングは、URL に応じて表示するページを決める仕組みである。App Router では、app フォルダの中のフォルダ名がそのまま URL のパスになる。各フォルダに page.tsx を置くと、そのパスでページが表示される。</p>
<p>フォルダ名を角かっこで囲んだ <code>[id]</code> は動的ルートである。動的ルートは、URL の一部を変数として受け取るフォルダである。たとえば /blog/1 と /blog/2 は、どちらも app/blog/[id]/page.tsx で表示され、id に "1" や "2" が入る。</p>`,
    code: `app/
├─ page.tsx              → /
├─ about/
│  └─ page.tsx           → /about
└─ blog/
   ├─ page.tsx           → /blog
   └─ [id]/
      └─ page.tsx        → /blog/1, /blog/2 など`,
    output: `http://localhost:3000/about   → app/about/page.tsx の内容
http://localhost:3000/blog/42 → app/blog/[id]/page.tsx の内容（id は "42"）`
  },
  {
    id: 'nextjs-05',
    phase: 'ルーティング',
    title: 'Link コンポーネント',
    type: 'info',
    run: 'static',
    file: 'app/page.tsx',
    story: `<p class="lead">学習者は、Link コンポーネントを使ってページ間のリンクを作る方法を知る。</p>
<p>Link は、Next.js が用意するページ移動用のコンポーネントである。<code>import Link from 'next/link';</code> で読み込み、href に移動先のパスを書く。</p>
<p>通常の &lt;a&gt; タグでは、移動のたびにページ全体を読み込み直す。Link では、Next.js が必要な部分に限って読み込み、画面を素早く切り替える。また、画面に表示された Link の移動先を Next.js が先に読み込むため、クリックの後の表示が速くなる。サイトの中のページへのリンクには Link を使い、外部サイトへのリンクには &lt;a&gt; を使う。</p>`,
    code: `import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>トップページ</h1>
      <ul>
        <li><Link href="/about">このサイトについて</Link></li>
        <li><Link href="/blog">ブログ</Link></li>
      </ul>
    </main>
  );
}`,
    output: `トップページ
・このサイトについて（クリックで /about へ移動）
・ブログ（クリックで /blog へ移動）
移動の際、ページ全体の再読み込みは省かれ、画面の中身が切り替わる。`
  },
  {
    id: 'nextjs-06',
    phase: 'コンポーネントの種類とデータ',
    title: 'Server Component と Client Component',
    type: 'code',
    run: 'react',
    file: 'LikeButton.jsx',
    story: `<p class="lead">学習者は、"use client" を書いて、state を使う Client Component を作る。</p>
<p>App Router のコンポーネントは、初めの状態では Server Component である。Server Component は、サーバー上で HTML に変換されてからブラウザに届くコンポーネントである。ブラウザに送る JavaScript が減るため、表示が速くなる。</p>
<p>一方、useState や onClick のようにブラウザ上の操作を扱うコンポーネントは、Client Component にする。ファイルの1行目に <code>'use client';</code> と書くと、そのファイルのコンポーネントは Client Component になる。このレッスンでは、いいねボタンを Client Component として作る。</p>`,
    code: `'use client';

import { useState } from 'react';

export default function Page() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ padding: 24 }}>
      <h1>記事のタイトル</h1>
      <button onClick={() => setLikes(likes + 1)}>いいね {likes}</button>
    </div>
  );
}`,
    blank: `'use client';`,
    placeholder: `// このファイルを Client Component にする宣言が入る`,
    token: /^\s*["']use client["'];?/,
    hint: `ファイルの1行目に文字列を書く。<code>'use client';</code>`
  },
  {
    id: 'nextjs-07',
    phase: 'コンポーネントの種類とデータ',
    title: 'データ取得（async コンポーネントと fetch）',
    type: 'code',
    run: 'static',
    file: 'app/posts/page.tsx',
    story: `<p class="lead">学習者は、async の Server Component の中で fetch を使い、記事の一覧を取得して表示する。</p>
<p>Server Component は、async 関数として書ける。async 関数の中では await を使い、データの取得が終わるまで次の行を待たせる。fetch は、URL を指定してデータを取得する関数である。</p>
<p>取得の処理はサーバー上で実行され、ブラウザには完成した HTML が届く。<code>await res.json()</code> は、取得した結果を JavaScript のオブジェクトに変換する。このレッスンのコードはサーバーで動く形のため、実行結果は見本として示す。</p>`,
    code: `export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const posts = await res.json();

  return (
    <main>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}`,
    blank: `const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');`,
    placeholder: `// fetch で記事のデータを取得し res に入れる処理が入る`,
    token: /const\s+res\s*=\s*await\s+fetch\(\s*["']https:\/\/jsonplaceholder\.typicode\.com\/posts\?_limit=3["']\s*\)/,
    hint: `await を付けて fetch を呼ぶ。<code>const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');</code>`,
    output: `記事一覧
・sunt aut facere repellat provident occaecati excepturi optio reprehenderit
・qui est esse
・ea molestias quasi exercitationem repellat qui ipsa sit aut`
  },
  {
    id: 'nextjs-08',
    phase: '公開',
    title: 'デプロイ（Vercel）',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は、作成した Next.js アプリを Vercel で公開する手順を知る。</p>
<p>デプロイは、作ったアプリをインターネット上のサーバーに置き、だれでも見られる状態にする作業である。Vercel は、Next.js を開発した会社が提供するホスティングサービスである。</p>
<p>手順は次のとおりである。最初に、プロジェクトを GitHub のリポジトリに push する。次に、Vercel にログインしてそのリポジトリを読み込む。Vercel は Next.js のプロジェクトを自動で判別し、ビルドと公開を行う。以後は、GitHub に push するたびに Vercel が新しい版を自動で公開する。</p>
<p>手元で本番用の動作を確かめる場合は、<code>npm run build</code> でビルドし、<code>npm run start</code> で起動する。</p>`,
    code: `git add .
git commit -m "first commit"
git push origin main
# Vercel の画面で GitHub のリポジトリを選び、Deploy を押す`,
    output: `Building...
✓ Compiled successfully
Deployment complete
https://my-app.vercel.app`
  }
];
