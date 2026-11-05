SERIES.ts = [
  {
    id: 'ts-01',
    phase: 'TypeScript と型',
    title: 'TypeScript と型の概要',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、変数に型を書いた短い TypeScript のプログラムを完成させる。</p>
<p>TypeScript は、JavaScript に「型」の情報を加えた言語である。型とは、値の種類（数値、文字列など）を表す情報である。TypeScript のコンパイラは、プログラムを実行する前に型を調べ、型の食い違いを誤りとして報告する。</p>
<p>型は <code>変数名: 型</code> の形で書く。この書き方を型注釈と呼ぶ。たとえば <code>const price: number = 120;</code> は、price が数値（number 型）であることを宣言する。price に文字列を入れると、コンパイラは実行前にエラーを示す。</p>
<p>ブラウザが実行する言語は JavaScript である。そのため TypeScript のコードは、型の部分を取り除いて JavaScript に変換したうえで実行される。型は、実行前に誤りを見つけるための道具である。</p>`,
    code: `const price: number = 120;
const count: number = 3;
const total: number = price * count;
console.log('合計: ' + total);`,
    blank: 'const count: number = 3;',
    placeholder: '// count という名前の number 型の定数に 3 を入れる',
    token: /const\s+count\s*:\s*number\s*=\s*3\s*;?/,
    hint: '<code>const count: number = 3;</code> と書く。変数名の後ろに <code>: number</code> を付ける。',
    output: `合計: 360`
  },
  {
    id: 'ts-02',
    phase: '基本的な型定義',
    title: 'TypeScript の基本',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、string・number・boolean の3つの基本の型を使って変数を宣言する。</p>
<p>TypeScript の基本の型は次の3つである。string は文字列、number は数値（整数と小数の両方）、boolean は true か false の真偽値を表す。</p>
<pre>const userName: string = 'Aoi';
let age: number = 14;
const isMember: boolean = true;</pre>
<p>型注釈を省略した場合、TypeScript は代入された値から型を自動で決める。この仕組みを型推論と呼ぶ。<code>let score = 10;</code> の score は number 型と推論される。そのため score に文字列を代入すると、コンパイラはエラーを示す。</p>`,
    code: `const userName: string = 'Aoi';
let age: number = 14;
const isMember: boolean = true;
age = age + 1;
console.log(userName + ' は ' + age + ' 歳');
console.log('会員: ' + isMember);`,
    blank: 'const isMember: boolean = true;',
    placeholder: '// isMember という名前の boolean 型の定数に true を入れる',
    token: /const\s+isMember\s*:\s*boolean\s*=\s*true/,
    hint: '<code>const isMember: boolean = true;</code> と書く。',
    output: `Aoi は 15 歳
会員: true`
  },
  {
    id: 'ts-03',
    phase: '基本的な型定義',
    title: '関数への型の適用',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、関数の引数と戻り値に型を付ける。</p>
<p>関数の引数には、変数と同じく <code>引数名: 型</code> の形で型を書く。戻り値の型は、引数の丸括弧の後ろに <code>: 型</code> の形で書く。戻り値とは、関数が return で呼び出し元に返す値である。</p>
<pre>function add(a: number, b: number): number {
  return a + b;
}</pre>
<p>アロー関数でも書き方は同じである。return で値を返す処理を省いた関数の戻り値には void 型を使う。void は「返す値が空である」ことを表す型である。引数に型を付けると、呼び出す側が誤った種類の値を渡した時点でコンパイラがエラーを示す。</p>`,
    code: `function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => {
  return 'こんにちは、' + name;
};

function logMessage(message: string): void {
  console.log('[log] ' + message);
}

console.log(add(2, 3));
console.log(greet('Aoi'));
logMessage('処理が完了した');`,
    blank: 'function add(a: number, b: number): number {',
    placeholder: '// add 関数の宣言の行（引数 a と b、戻り値の型はすべて number）',
    token: /function\s+add\s*\(\s*a\s*:\s*number\s*,\s*b\s*:\s*number\s*\)\s*:\s*number\s*\{/,
    hint: '<code>function add(a: number, b: number): number {</code> と書く。',
    output: `5
こんにちは、Aoi
[log] 処理が完了した`
  },
  {
    id: 'ts-04',
    phase: '基本的な型定義',
    title: 'オブジェクトの型定義',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、type を使ってオブジェクトの形を型として定義する。</p>
<p>オブジェクトの型は、各プロパティの名前と型を波括弧の中に並べて書く。<code>type</code> は型に名前を付ける構文であり、名前を付けた型を型エイリアスと呼ぶ。</p>
<pre>type User = {
  name: string;
  age: number;
};</pre>
<p>User 型の変数は、name と age の両方を持つ必要がある。プロパティが欠けた場合や型が異なる場合、コンパイラはエラーを示す。同じ形は <code>interface User { name: string; age: number; }</code> とも書ける。interface はオブジェクトの形を定義する専用の構文である。</p>`,
    code: `type User = {
  name: string;
  age: number;
};

const user: User = { name: 'Aoi', age: 14 };

function introduce(u: User): string {
  return u.name + '（' + u.age + '歳）';
}

console.log(introduce(user));`,
    blank: `  name: string;
  age: number;`,
    placeholder: '  // name（string）と age（number）の2つのプロパティの型',
    token: /name\s*:\s*string\s*[;,]?\s*age\s*:\s*number/,
    hint: '1行目に <code>name: string;</code>、2行目に <code>age: number;</code> と書く。',
    output: `Aoi（14歳）`
  },
  {
    id: 'ts-05',
    phase: '発展的な型定義',
    title: 'ユニオン型とインターセクション型',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、2つのオブジェクト型を &amp; で合成した型を定義する。</p>
<p>ユニオン型は、複数の型のうちどれか1つを表す型である。<code>number | string</code> は「数値または文字列」を意味する。縦線 <code>|</code> で型を区切って書く。</p>
<p>インターセクション型は、複数の型の性質をすべて併せ持つ型である。<code>A &amp; B</code> は、A のプロパティと B のプロパティの両方を持つオブジェクトを表す。</p>
<pre>type HasName = { name: string };
type HasEmail = { email: string };
type Contact = HasName &amp; HasEmail;  // name と email の両方を持つ</pre>
<p>ユニオン型は値の選択肢を広げ、インターセクション型はオブジェクトに求める条件を増やす。</p>`,
    code: `type Id = number | string;
type HasName = { name: string };
type HasEmail = { email: string };
type Contact = HasName & HasEmail;

function showId(id: Id): void {
  console.log('ID: ' + id);
}

const c: Contact = { name: 'Aoi', email: 'aoi@example.com' };

showId(101);
showId('A-7');
console.log(c.name + ' <' + c.email + '>');`,
    blank: 'type Contact = HasName & HasEmail;',
    placeholder: '// HasName と HasEmail を合成した Contact 型',
    token: /type\s+Contact\s*=\s*(HasName\s*&\s*HasEmail|HasEmail\s*&\s*HasName)/,
    hint: '<code>type Contact = HasName &amp; HasEmail;</code> と書く。',
    output: `ID: 101
ID: A-7
Aoi <aoi@example.com>`
  },
  {
    id: 'ts-06',
    phase: '発展的な型定義',
    title: 'unknown 型（any との比較）',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、unknown 型の値を typeof で確かめてから使う。</p>
<p>any 型は、どの値でも入る型である。any 型の値に対して、コンパイラは型検査を省略する。そのため <code>a.toUpperCase()</code> のような呼び出しは、中身が数値の場合も実行時まで誤りが隠れたまま残る。</p>
<p>unknown 型も、どの値でも入る型である。ただしコンパイラは、unknown 型の値をそのまま使う操作をエラーとして扱う。使う前に、値の種類を確かめる処理が求められる。</p>
<pre>const u: unknown = 'world';
if (typeof u === 'string') {
  console.log(u.toUpperCase());  // ここでは u は string 型
}</pre>
<p>typeof 演算子は、値の種類を 'string' や 'number' などの文字列で返す。外部から受け取る値など、種類が不明な値には any より unknown を使うほうが安全である。</p>`,
    code: `const a: any = 'hello';
console.log(a.toUpperCase());

const u: unknown = 'world';
if (typeof u === 'string') {
  console.log(u.toUpperCase());
}`,
    blank: `if (typeof u === 'string') {`,
    placeholder: '// u が文字列であるかを typeof で確かめる if 文の行',
    token: /if\s*\(\s*typeof\s+u\s*===?\s*["']string["']\s*\)\s*\{/,
    hint: `<code>if (typeof u === 'string') {</code> と書く。`,
    output: `HELLO
WORLD`
  },
  {
    id: 'ts-07',
    phase: '発展的な型定義',
    title: 'タイプガード',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、型述語を返す関数を作り、ユニオン型の値を種類ごとに処理する。</p>
<p>タイプガードは、条件分岐の中で値の型を絞り込む仕組みである。前のレッスンの <code>typeof u === 'string'</code> もタイプガードの一種である。if の中では、コンパイラは u を string 型として扱う。</p>
<p>自分で作る関数もタイプガードにできる。戻り値の型に <code>引数名 is 型</code> と書く。この形を型述語と呼ぶ。関数が true を返した場合、コンパイラは引数をその型に絞り込む。</p>
<pre>function isCat(pet: Pet): pet is Cat {
  return pet.kind === 'cat';
}</pre>
<p>kind のように、ユニオン型の各メンバーが異なる文字列を持つプロパティは、種類を見分ける目印として役立つ。</p>`,
    code: `type Cat = { kind: 'cat'; meow: () => string };
type Dog = { kind: 'dog'; bark: () => string };
type Pet = Cat | Dog;

function isCat(pet: Pet): pet is Cat {
  return pet.kind === 'cat';
}

function speak(pet: Pet): string {
  if (isCat(pet)) {
    return pet.meow();
  }
  return pet.bark();
}

const tama: Pet = { kind: 'cat', meow: () => 'にゃー' };
const pochi: Pet = { kind: 'dog', bark: () => 'わん' };
console.log(speak(tama));
console.log(speak(pochi));`,
    blank: 'function isCat(pet: Pet): pet is Cat {',
    placeholder: '// isCat 関数の宣言の行（戻り値の型に型述語を使う）',
    token: /function\s+isCat\s*\(\s*pet\s*:\s*Pet\s*\)\s*:\s*pet\s+is\s+Cat\s*\{/,
    hint: '<code>function isCat(pet: Pet): pet is Cat {</code> と書く。',
    output: `にゃー
わん`
  },
  {
    id: 'ts-08',
    phase: '発展的な型定義',
    title: '配列型',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、数値の配列に型を付けて合計を求める。</p>
<p>配列の型は、要素の型の後ろに <code>[]</code> を付けて書く。<code>number[]</code> は数値の配列である。同じ型は <code>Array&lt;number&gt;</code> とも書ける。number[] 型の配列に文字列を push すると、コンパイラはエラーを示す。</p>
<p>タプル型は、要素の数と各位置の型を決めた配列の型である。<code>[string, number]</code> は、0番目が文字列、1番目が数値の2要素の配列を表す。</p>
<pre>const scores: number[] = [80, 92, 75];
const pair: [string, number] = ['Aoi', 14];</pre>
<p>配列の要素の型が決まると、reduce などのメソッドの中でも要素の型が推論される。</p>`,
    code: `const scores: number[] = [80, 92, 75];
const names: Array<string> = ['Aoi', 'Ren'];
const pair: [string, number] = ['Aoi', 14];

scores.push(88);
const total = scores.reduce((sum, s) => sum + s, 0);

console.log('点数: ' + scores.join(', '));
console.log('合計: ' + total);
console.log(names.length + '人');
console.log(pair[0] + ' / ' + pair[1]);`,
    blank: 'const scores: number[] = [80, 92, 75];',
    placeholder: '// 数値の配列 scores（80, 92, 75）',
    token: /const\s+scores\s*:\s*(number\s*\[\s*\]|Array\s*<\s*number\s*>)\s*=\s*\[\s*80\s*,\s*92\s*,\s*75\s*\]/,
    hint: '<code>const scores: number[] = [80, 92, 75];</code> と書く。',
    output: `点数: 80, 92, 75, 88
合計: 335
2人
Aoi / 14`
  },
  {
    id: 'ts-09',
    phase: '発展的な型定義',
    title: 'オブジェクトの任意プロパティ',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、省略してよいプロパティを ? で定義する。</p>
<p>任意プロパティは、オブジェクトに含めても省略してもよいプロパティである。プロパティ名の後ろに <code>?</code> を付けて書く。</p>
<pre>type Profile = {
  name: string;
  nickname?: string;
};</pre>
<p>nickname の型は、実際には <code>string | undefined</code> として扱われる。undefined は「値が未設定の状態」を表す特別な値である。<code>??</code> は null 合体演算子であり、左側が null または undefined の場合に右側の値を返す。<code>p.nickname ?? p.name</code> は、ニックネームがあればそれを、省略された場合は名前を返す。</p>`,
    code: `type Profile = {
  name: string;
  nickname?: string;
};

function displayName(p: Profile): string {
  return p.nickname ?? p.name;
}

console.log(displayName({ name: '青井 葵' }));
console.log(displayName({ name: '赤木 蓮', nickname: 'レン' }));`,
    blank: '  nickname?: string;',
    placeholder: '  // 省略してよい string 型のプロパティ nickname',
    token: /nickname\s*\?\s*:\s*string/,
    hint: '<code>nickname?: string;</code> と書く。',
    output: `青井 葵
レン`
  },
  {
    id: 'ts-10',
    phase: '発展的な型定義',
    title: 'readonly',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、readonly を使って書き換えを禁止したオブジェクト型を定義する。</p>
<p>readonly は、プロパティを読み取り専用にする修飾子である。readonly を付けたプロパティへの代入を、コンパイラはエラーとして報告する。</p>
<pre>type Point = {
  readonly x: number;
  readonly y: number;
};</pre>
<p>配列にも <code>readonly number[]</code> の形で readonly を付けられる。この配列では push などの要素を変える操作がエラーになる。値を変えたい場合は、元のオブジェクトを書き換える代わりに新しいオブジェクトを作る。この方法は、値が想定外の場所で変わる不具合を防ぐ。</p>`,
    code: `type Point = {
  readonly x: number;
  readonly y: number;
};

const p: Point = { x: 1, y: 2 };
// p.x = 10; と書くとコンパイルエラーになる

const list: readonly number[] = [1, 2, 3];
const moved: Point = { x: p.x + 5, y: p.y };

console.log(moved.x + ', ' + moved.y);
console.log(list.length);`,
    blank: `  readonly x: number;
  readonly y: number;`,
    placeholder: '  // 読み取り専用の x と y（どちらも number）',
    token: /readonly\s+x\s*:\s*number\s*[;,]?\s*readonly\s+y\s*:\s*number/,
    hint: '<code>readonly x: number;</code> と <code>readonly y: number;</code> の2行を書く。',
    output: `6, 2
3`
  },
  {
    id: 'ts-11',
    phase: '発展的な型定義',
    title: 'ジェネリクス',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、型引数 T を受け取る関数を定義する。</p>
<p>ジェネリクスは、型を引数のように受け取り、さまざまな型に使い回せる関数や型を作る仕組みである。型の引数を型引数と呼び、<code>&lt;T&gt;</code> の形で書く。T は慣習的に使われる名前である。</p>
<pre>function first&lt;T&gt;(items: T[]): T | undefined {
  return items[0];
}</pre>
<p>first に number[] を渡すと T は number になり、戻り値は number | undefined 型になる。string[] を渡すと T は string になる。T の中身は呼び出しの時点で推論される。型エイリアスにも <code>type Box&lt;T&gt; = { value: T }</code> のように型引数を付けられる。</p>`,
    code: `function first<T>(items: T[]): T | undefined {
  return items[0];
}

type Box<T> = { value: T };

const n = first([10, 20, 30]);
const s = first(['a', 'b']);
const box: Box<string> = { value: 'TypeScript' };

console.log(n);
console.log(s);
console.log(box.value);`,
    blank: 'function first<T>(items: T[]): T | undefined {',
    placeholder: '// 型引数 T を受け取る first 関数の宣言の行（引数 items は T の配列）',
    token: /function\s+first\s*<\s*T\s*>\s*\(\s*items\s*:\s*(T\s*\[\s*\]|Array\s*<\s*T\s*>)\s*\)/,
    hint: '<code>function first&lt;T&gt;(items: T[]): T | undefined {</code> と書く。',
    output: `10
a
TypeScript`
  },
  {
    id: 'ts-12',
    phase: '一歩進んだ型',
    title: '条件型',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、型が string かどうかで結果が変わる条件型を定義する。</p>
<p>条件型は、型に対する条件分岐である。<code>T extends U ? X : Y</code> と書き、T が U に代入可能であれば X、それ以外の場合は Y になる。extends はここでは「左の型が右の型に当てはまるか」を調べる意味を持つ。書き方は三項演算子 <code>条件 ? 値1 : 値2</code> に似ている。</p>
<pre>type IsString&lt;T&gt; = T extends string ? true : false;
type A = IsString&lt;'hello'&gt;;  // true
type B = IsString&lt;42&gt;;       // false</pre>
<p>条件型の結果は型である。この問題の結果は型のみであり、学習者はエディタ上でコンパイラが計算した型を確かめる。'hello' のように特定の値1つを表す型をリテラル型と呼ぶ。</p>`,
    code: `type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;
type B = IsString<42>;

type ToArray<T> = T extends any[] ? T : T[];

type C = ToArray<string>;
type D = ToArray<number[]>;`,
    blank: 'type IsString<T> = T extends string ? true : false;',
    placeholder: '// T が string に当てはまれば true、それ以外は false になる条件型 IsString',
    token: /type\s+IsString\s*<\s*T\s*>\s*=\s*T\s+extends\s+string\s*\?\s*true\s*:\s*false/,
    hint: '<code>type IsString&lt;T&gt; = T extends string ? true : false;</code> と書く。',
    output: `type A = true
type B = false
type C = string[]
type D = number[]  // 期待される型`
  },
  {
    id: 'ts-13',
    phase: '一歩進んだ型',
    title: 'インデックス型',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、任意のキー名を持つオブジェクトの型をインデックスシグネチャで定義する。</p>
<p>インデックスシグネチャは、キー名を前もって決める代わりに、キーと値の型を定める書き方である。<code>[subject: string]: number</code> は「文字列のキーに対して数値の値を持つ」ことを表す。subject はキーを説明するための名前であり、自由に付けられる。</p>
<pre>type Scores = {
  [subject: string]: number;
};</pre>
<p>型の側にも角括弧を使う書き方がある。<code>User['age']</code> はインデックスアクセス型と呼ばれ、User 型の age プロパティの型（ここでは number）を取り出す。</p>`,
    code: `type Scores = {
  [subject: string]: number;
};

const scores: Scores = { math: 90, english: 78 };
scores.science = 85;

type User = { name: string; age: number };
type AgeType = User['age'];
const age: AgeType = 14;

for (const key in scores) {
  console.log(key + ': ' + scores[key]);
}
console.log('age: ' + age);`,
    blank: '  [subject: string]: number;',
    placeholder: '  // 文字列のキー subject に対して number の値を持つインデックスシグネチャ',
    token: /\[\s*subject\s*:\s*string\s*\]\s*:\s*number/,
    hint: '<code>[subject: string]: number;</code> と書く。',
    output: `math: 90
english: 78
science: 85
age: 14`
  },
  {
    id: 'ts-14',
    phase: '一歩進んだ型',
    title: 'async 関数と Promise の型',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、async 関数の戻り値に Promise 型を付ける。</p>
<p>Promise は、時間のかかる処理の結果を後で受け取るためのオブジェクトである。async 関数は、常に Promise を返す関数である。そのため戻り値の型は <code>Promise&lt;結果の型&gt;</code> と書く。</p>
<pre>async function fetchUser(id: number): Promise&lt;User&gt; {
  await wait(100);
  return { id: id, name: 'Aoi' };
}</pre>
<p>await は、Promise の処理が終わるまで待ち、中の値を取り出す演算子である。<code>await fetchUser(1)</code> の結果は、Promise&lt;User&gt; の中身である User 型になる。</p>`,
    code: `type User = { id: number; name: string };

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchUser(id: number): Promise<User> {
  await wait(100);
  return { id: id, name: 'Aoi' };
}

async function main(): Promise<void> {
  const user = await fetchUser(1);
  console.log(user.id + ': ' + user.name);
}

main();`,
    blank: 'async function fetchUser(id: number): Promise<User> {',
    placeholder: '// fetchUser 関数の宣言の行（async 関数で、User 型の結果を返す）',
    token: /async\s+function\s+fetchUser\s*\(\s*id\s*:\s*number\s*\)\s*:\s*Promise\s*<\s*User\s*>/,
    hint: '<code>async function fetchUser(id: number): Promise&lt;User&gt; {</code> と書く。',
    output: `1: Aoi`
  },
  {
    id: 'ts-15',
    phase: '一歩進んだ型',
    title: 'never 型',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、never 型を使って switch 文の場合分けの漏れを検出する。</p>
<p>never 型は、取りうる値の集合が空である型である。常に例外を投げて終わる関数の戻り値は never 型になる。</p>
<p>ユニオン型を switch で場合分けすると、case を通るたびに残りの型が絞り込まれる。すべての case を書き終えた default の位置では、残りの型は never になる。</p>
<pre>default:
  return assertNever(s);  // s は never 型</pre>
<p>assertNever の引数は never 型である。Shape に新しい種類を加えて case を書き忘れると、s の型が never 以外になり、コンパイラがエラーを示す。この仕組みを網羅性チェックと呼ぶ。</p>`,
    code: `type Shape =
  | { kind: 'circle'; r: number }
  | { kind: 'square'; size: number };

function assertNever(x: never): never {
  throw new Error('想定外の値: ' + JSON.stringify(x));
}

function area(s: Shape): number {
  switch (s.kind) {
    case 'circle':
      return Math.round(Math.PI * s.r * s.r);
    case 'square':
      return s.size * s.size;
    default:
      return assertNever(s);
  }
}

console.log(area({ kind: 'circle', r: 2 }));
console.log(area({ kind: 'square', size: 3 }));`,
    blank: '      return assertNever(s);',
    placeholder: '      // s を assertNever に渡し、その結果を返す',
    token: /return\s+assertNever\s*\(\s*s\s*\)/,
    hint: '<code>return assertNever(s);</code> と書く。',
    output: `13
9`
  },
  {
    id: 'ts-16',
    phase: '一歩進んだ型',
    title: 'd.ts ファイル',
    type: 'info',
    run: 'static',
    file: 'types.d.ts',
    story: `<p class="lead">学習者は、型の情報を収めるファイルである d.ts ファイルの役割を理解する。</p>
<p>d.ts ファイル（型定義ファイル）は、拡張子が <code>.d.ts</code> のファイルであり、型の宣言のみを収める。中身は関数や変数の「形」の情報であり、実行される処理はほかのファイルに置かれる。</p>
<pre>// greet.d.ts
export declare function greet(name: string): string;
export declare const version: string;</pre>
<p><code>declare</code> は「この名前の値は別の場所に実在する」とコンパイラに伝えるキーワードである。JavaScript で書かれたライブラリを TypeScript から使うとき、コンパイラは d.ts ファイルを読んで引数や戻り値の型を知る。</p>
<p>多くのライブラリは d.ts ファイルを同梱している。型定義を同梱しているライブラリは、インストールと同時に型が使える状態になる。ほかのライブラリについては、<code>@types/ライブラリ名</code> というパッケージで有志が型定義を公開している場合が多い。例として、<code>npm install -D @types/lodash</code> は lodash の型定義を追加する。</p>`,
    output: `（型定義ファイルの用途はエディタの補完と型検査であり、実行結果は空である）`
  },
  {
    id: 'ts-17',
    phase: '一歩進んだ型',
    title: 'as const',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、as const で配列をリテラル型の読み取り専用タプルにし、そこからユニオン型を作る。</p>
<p>通常、<code>['red', 'green', 'blue']</code> の型は string[] と推論される。末尾に <code>as const</code> を付けると、TypeScript は値をそのまま型として扱う。型は <code>readonly ['red', 'green', 'blue']</code> になり、各要素はリテラル型になる。</p>
<pre>const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number];  // 'red' | 'green' | 'blue'</pre>
<p>型の位置に書く typeof は、変数の型を取り出す演算子である。<code>[number]</code> は配列の任意の位置の要素の型を取り出すインデックスアクセス型である。この2つを組み合わせると、配列の値から選択肢のユニオン型を作れる。オブジェクトに as const を付けると、すべてのプロパティが readonly のリテラル型になる。</p>`,
    code: `const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number];

const config = { mode: 'dark', size: 16 } as const;

function paint(c: Color): string {
  return 'paint: ' + c;
}

console.log(paint('green'));
console.log(config.mode + ' / ' + config.size);
console.log(colors.length);`,
    blank: `const colors = ['red', 'green', 'blue'] as const;`,
    placeholder: `// 'red' 'green' 'blue' の3要素の配列 colors をリテラル型の読み取り専用タプルにする`,
    token: /const\s+colors\s*=\s*\[\s*["']red["']\s*,\s*["']green["']\s*,\s*["']blue["']\s*\]\s*as\s+const/,
    hint: `<code>const colors = ['red', 'green', 'blue'] as const;</code> と書く。`,
    output: `paint: green
dark / 16
3`
  },
  {
    id: 'ts-18',
    phase: '一歩進んだ型',
    title: 'satisfies',
    type: 'code',
    run: 'ts',
    file: 'main.ts',
    story: `<p class="lead">学習者は、satisfies で型を検査しつつ、各プロパティの詳しい型を保つ。</p>
<p>satisfies 演算子は、値が指定した型に合うかを検査する。検査の後も、変数の型は値から推論された詳しい型のまま残る。</p>
<p><code>Record&lt;K, V&gt;</code> は、キーが K、値が V のオブジェクト型を作る組み込みの型である。<code>const palette: Palette = {...}</code> と型注釈を書くと、各プロパティの型は <code>string | number[]</code> に広がる。この場合、palette.green に toUpperCase を呼ぶとエラーになる。</p>
<pre>const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Palette;</pre>
<p>satisfies を使うと、キーの書き間違いなどは検査され、green は string 型、red は number[] 型として扱われる。</p>`,
    code: `type Color = 'red' | 'green' | 'blue';
type Palette = Record<Color, string | number[]>;

const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Palette;

console.log(palette.green.toUpperCase());
console.log(palette.red.join(','));`,
    blank: '} satisfies Palette;',
    placeholder: '} // 閉じ括弧の後ろで、値が Palette 型に合うかを検査する',
    token: /\}\s*satisfies\s+Palette/,
    hint: '閉じ括弧の後ろに <code>satisfies Palette</code> を付け、<code>} satisfies Palette;</code> と書く。',
    output: `#00FF00
255,0,0`
  }
];

SERIES.tc1 = [
  {
    id: 'tc1-01',
    phase: '初級：基本のユーティリティ型',
    title: 'Hello World',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、string 型を表す型エイリアス HelloWorld を完成させ、テストを通す。</p>
<p>Type Challenges は、型の定義を書いてテストの型を通す形式の問題集である。このシリーズの問題の結果は型のみであり、コンパイラのエラーが0件で型検査を終えた状態を正解とする。</p>
<p>コードの先頭にある Equal と Expect はテスト用の補助の型である。<code>Equal&lt;X, Y&gt;</code> は、X と Y が完全に同じ型のときに true 型になる。<code>Expect&lt;T extends true&gt;</code> は、T が true 型以外のときにエラーを出す。Equal の内部の仕組みは理解の対象外としてよい。</p>
<pre>type cases = [
  Expect&lt;Equal&lt;HelloWorld, string&gt;&gt;,
];</pre>
<p>cases の中のすべての行が true になれば、テストは成功である。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type HelloWorld = string;

type cases = [
  Expect<Equal<HelloWorld, string>>,
];`,
    blank: 'type HelloWorld = string;',
    placeholder: 'type HelloWorld = any; // string 型を表す型エイリアスにする',
    token: /type\s+HelloWorld\s*=\s*string\s*;?/,
    hint: '<code>type HelloWorld = string;</code> と書く。',
    output: `type HelloWorld = string  // 期待される型
（cases のすべてのテストが true になり、エラーは0件）`
  },
  {
    id: 'tc1-02',
    phase: '初級：基本のユーティリティ型',
    title: 'MyReadonly',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、組み込みの Readonly&lt;T&gt; と同じ働きをする MyReadonly&lt;T&gt; をマップ型で作る。</p>
<p>keyof は、オブジェクト型のプロパティ名をユニオン型として取り出す演算子である。<code>keyof { a: 1; b: 2 }</code> は <code>'a' | 'b'</code> になる。</p>
<p>マップ型は、プロパティ名のユニオン型から名前を順に取り出して新しいオブジェクト型を作る構文である。<code>[K in keyof T]: T[K]</code> は「T の各プロパティ名 K について、値の型を T[K] とする」という意味になる。T[K] は、前のシリーズで学んだインデックスアクセス型である。</p>
<pre>type MyReadonly&lt;T&gt; = {
  readonly [K in keyof T]: T[K];
};</pre>
<p>先頭に readonly を付けると、作られるすべてのプロパティが読み取り専用になる。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Book = {
  title: string;
  pages: number;
  tags: string[];
};

type cases = [
  Expect<Equal<MyReadonly<Book>, Readonly<Book>>>,
  Expect<Equal<MyReadonly<{ id: 1 }>, { readonly id: 1 }>>,
];`,
    blank: '  readonly [K in keyof T]: T[K];',
    placeholder: '  // T のすべてのプロパティを読み取り専用にするマップ型の1行',
    token: /readonly\s*\[\s*(\w+)\s+in\s+keyof\s+T\s*\]\s*:\s*T\s*\[\s*\1\s*\]/,
    hint: '<code>readonly [K in keyof T]: T[K];</code> と書く。',
    output: `type R = MyReadonly<Book>
// { readonly title: string; readonly pages: number; readonly tags: string[] }  // 期待される型`
  },
  {
    id: 'tc1-03',
    phase: '初級：基本のユーティリティ型',
    title: 'Length',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル型の要素数をリテラル型で返す Length&lt;T&gt; を作る。</p>
<p>タプル型は length プロパティの型として、要素数そのものをリテラル型で持つ。<code>['a', 'b', 'c']</code> のタプル型の length は、number 型より狭い 3 という型である。</p>
<pre>type Length&lt;T extends readonly any[]&gt; = T['length'];</pre>
<p>型引数の後ろの <code>extends readonly any[]</code> は制約である。制約は、型引数に渡せる型の範囲を決める。ここでは T を「読み取り専用を含む配列の型」に限る。as const で作ったタプルは readonly であるため、制約にも readonly を付ける。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type Length<T extends readonly any[]> = T['length'];

const fruits = ['apple', 'banana', 'cherry'] as const;
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'] as const;

type cases = [
  Expect<Equal<Length<typeof fruits>, 3>>,
  Expect<Equal<Length<typeof planets>, 5>>,
  Expect<Equal<Length<[]>, 0>>,
];

// @ts-expect-error
type error = Length<'hello'>;`,
    blank: `T['length']`,
    placeholder: '/* 配列型 T の要素数を表すプロパティの型 */',
    token: /T\s*\[\s*["']length["']\s*\]/,
    hint: `インデックスアクセス型で <code>T['length']</code> と書く。`,
    output: `type L = Length<typeof fruits>
// 3  // 期待される型`
  },
  {
    id: 'tc1-04',
    phase: '初級：基本のユーティリティ型',
    title: 'TupleToObject',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプルの各要素をキーと値の両方に持つオブジェクト型を作る。</p>
<p><code>T[number]</code> は、配列型 T の任意の位置の要素の型を取り出す。タプル型に使うと、全要素のユニオン型になる。<code>readonly ['ts', 'js']</code> の T[number] は <code>'ts' | 'js'</code> である。</p>
<p>このユニオン型をマップ型の <code>in</code> の右側に置くと、各要素がキーになる。値の型にもキーと同じ K を書くと、キーと値が等しいオブジェクト型になる。</p>
<pre>type TupleToObject&lt;T extends readonly (string | number | symbol)[]&gt; = {
  [K in T[number]]: K;
};</pre>
<p>制約の <code>string | number | symbol</code> は、オブジェクトのキーに使える型の集合である。配列やオブジェクトを要素に持つタプルはこの制約に反するため、<code>@ts-expect-error</code> の行でエラーになる。@ts-expect-error は、次の行がエラーになることを期待するコメントである。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K;
};

const langs = ['ts', 'js', 'go'] as const;

type cases = [
  Expect<Equal<TupleToObject<typeof langs>, { ts: 'ts'; js: 'js'; go: 'go' }>>,
  Expect<Equal<TupleToObject<readonly [1, 2]>, { 1: 1; 2: 2 }>>,
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;`,
    blank: '  [K in T[number]]: K;',
    placeholder: '  // タプルの各要素をキーにし、値にも同じ要素を入れるマップ型の1行',
    token: /\[\s*(\w+)\s+in\s+T\s*\[\s*number\s*\]\s*\]\s*:\s*\1\b/,
    hint: '<code>[K in T[number]]: K;</code> と書く。',
    output: `type R = TupleToObject<typeof langs>
// { ts: 'ts'; js: 'js'; go: 'go' }  // 期待される型`
  },
  {
    id: 'tc1-05',
    phase: '初級：基本のユーティリティ型',
    title: 'Push',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル型の末尾に要素を1つ加える Push&lt;T, U&gt; を作る。</p>
<p>型の世界でも、値の配列と同じくスプレッド構文 <code>...</code> が使える。<code>[...T]</code> は、タプル型 T の要素をすべて並べたタプル型である。</p>
<pre>type Push&lt;T extends any[], U&gt; = [...T, U];</pre>
<p>T の要素を並べた後ろに U を置くと、末尾に U が加わったタプル型になる。<code>Push&lt;[1, 2], '3'&gt;</code> は <code>[1, 2, '3']</code> である。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type Push<T extends any[], U> = [...T, U];

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['a', 'b'], 'c'>, ['a', 'b', 'c']>>,
];`,
    blank: '[...T, U]',
    placeholder: '/* T の要素を並べ、末尾に U を加えたタプル型 */',
    token: /\[\s*\.\.\.\s*T\s*,\s*U\s*\]/,
    hint: '<code>[...T, U]</code> と書く。',
    output: `type R = Push<[1, 2], '3'>
// [1, 2, '3']  // 期待される型`
  },
  {
    id: 'tc1-06',
    phase: '初級：基本のユーティリティ型',
    title: 'Unshift',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル型の先頭に要素を1つ加える Unshift&lt;T, U&gt; を作る。</p>
<p>Unshift は Push と向きが逆の操作である。新しい要素 U を先に置き、その後ろにスプレッド構文で T の要素を並べる。</p>
<pre>type Unshift&lt;T extends any[], U&gt; = [U, ...T];</pre>
<p>スプレッド構文はタプルのどの位置にも置ける。先頭、末尾、途中のどこに置いても、T の要素がその位置に展開される。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type Unshift<T extends any[], U> = [U, ...T];

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['b', 'c'], 'a'>, ['a', 'b', 'c']>>,
];`,
    blank: '[U, ...T]',
    placeholder: '/* 先頭に U を置き、その後ろに T の要素を並べたタプル型 */',
    token: /\[\s*U\s*,\s*\.\.\.\s*T\s*\]/,
    hint: '<code>[U, ...T]</code> と書く。',
    output: `type R = Unshift<[1, 2], 0>
// [0, 1, 2]  // 期待される型`
  },
  {
    id: 'tc1-07',
    phase: '初級：基本のユーティリティ型',
    title: 'MyPick',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、指定したプロパティのみを取り出す MyPick&lt;T, K&gt; を作る。</p>
<p>組み込みの <code>Pick&lt;T, K&gt;</code> は、型 T から K に含まれるプロパティのみを残したオブジェクト型を作る。MyPick は同じ働きを自作する問題である。</p>
<pre>type MyPick&lt;T, K extends keyof T&gt; = {
  [P in K]: T[P];
};</pre>
<p><code>K extends keyof T</code> は、K を T のプロパティ名の範囲に限る制約である。この制約により、存在するプロパティ名のみが指定可能になる。マップ型の in の右側に keyof T の代わりに K を置くと、K に含まれる名前のみがキーになる。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Item = {
  name: string;
  price: number;
  stock: number;
};

type cases = [
  Expect<Equal<MyPick<Item, 'name'>, { name: string }>>,
  Expect<Equal<MyPick<Item, 'name' | 'price'>, { name: string; price: number }>>,
];

// @ts-expect-error
type error = MyPick<Item, 'color'>;`,
    blank: '  [P in K]: T[P];',
    placeholder: '  // K に含まれる名前のみをキーにし、値の型を T から取り出すマップ型の1行',
    token: /\[\s*(\w+)\s+in\s+K\s*\]\s*:\s*T\s*\[\s*\1\s*\]/,
    hint: '<code>[P in K]: T[P];</code> と書く。',
    output: `type R = MyPick<Item, 'name' | 'price'>
// { name: string; price: number }  // 期待される型`
  },
  {
    id: 'tc1-08',
    phase: '初級：条件分岐と配列・関数の型',
    title: 'If',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、条件 C が true のとき T、false のとき F になる If&lt;C, T, F&gt; を作る。</p>
<p>条件型は、型に対する条件分岐である。<code>A extends B ? X : Y</code> と書き、A が B に代入可能であれば X、それ以外の場合は Y になる。書き方は値の三項演算子に似ている。</p>
<pre>type If&lt;C extends boolean, T, F&gt; = C extends true ? T : F;</pre>
<p>制約 <code>C extends boolean</code> により、C には true か false のみが渡せる。C が true 型であれば結果は T、false 型であれば F になる。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type If<C extends boolean, T, F> = C extends true ? T : F;

type cases = [
  Expect<Equal<If<true, 'yes', 'no'>, 'yes'>>,
  Expect<Equal<If<false, 'yes', 2>, 2>>,
];

// @ts-expect-error
type error = If<null, 'a', 'b'>;`,
    blank: 'C extends true ? T : F',
    placeholder: '/* C が true のとき T、それ以外は F になる条件型 */',
    token: /C\s+extends\s+true\s*\?\s*T\s*:\s*F/,
    hint: '<code>C extends true ? T : F</code> と書く。',
    output: `type R = If<true, 'yes', 'no'>
// 'yes'  // 期待される型`
  },
  {
    id: 'tc1-09',
    phase: '初級：条件分岐と配列・関数の型',
    title: 'MyAwaited',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、Promise の中身の型を取り出す MyAwaited&lt;T&gt; を、infer と再帰を使って作る。</p>
<p>infer は、条件型の extends の右側で使うキーワードであり、型の一部に名前を付けて取り出す。<code>T extends PromiseLike&lt;infer U&gt;</code> は「T が何かの Promise であれば、その中身の型を U と呼ぶ」という意味になる。PromiseLike は、then メソッドを持つ Promise 風のオブジェクトを表す組み込みの型である。</p>
<pre>type MyAwaited&lt;T&gt; =
  T extends PromiseLike&lt;infer U&gt; ? MyAwaited&lt;U&gt; : T;</pre>
<p>U もまた Promise である場合に備え、結果の位置で MyAwaited 自身を呼ぶ。型が自分自身を使う定義を再帰と呼ぶ。中身が Promise 以外になった時点で、条件型は T をそのまま返して止まる。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;

type A = Promise<string>;
type B = Promise<{ score: number }>;
type C = Promise<Promise<string | boolean>>;

type cases = [
  Expect<Equal<MyAwaited<A>, string>>,
  Expect<Equal<MyAwaited<B>, { score: number }>>,
  Expect<Equal<MyAwaited<C>, string | boolean>>,
];`,
    blank: 'T extends PromiseLike<infer U> ? MyAwaited<U> : T',
    placeholder: '/* T が Promise であれば中身を infer で取り出して再帰し、それ以外は T を返す条件型 */',
    token: /T\s+extends\s+(PromiseLike|Promise)\s*<\s*infer\s+(\w+)\s*>\s*\?\s*MyAwaited\s*<\s*\2\s*>\s*:\s*T/,
    hint: '<code>T extends PromiseLike&lt;infer U&gt; ? MyAwaited&lt;U&gt; : T</code> と書く。',
    output: `type R = MyAwaited<Promise<Promise<string | boolean>>>
// string | boolean  // 期待される型`
  },
  {
    id: 'tc1-10',
    phase: '初級：条件分岐と配列・関数の型',
    title: 'Concat',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、2つのタプル型をつなげる Concat&lt;T, U&gt; を作る。</p>
<p>Push と Unshift で使ったスプレッド構文は、1つのタプルの中で複数回使える。<code>[...T, ...U]</code> は、T の要素の後ろに U の要素を並べたタプル型である。</p>
<pre>type Concat&lt;T extends readonly unknown[], U extends readonly unknown[]&gt; = [...T, ...U];</pre>
<p>制約に readonly を付けると、as const で作った読み取り専用のタプルも受け取れる。unknown[] は「要素の型が任意である配列」を表し、any[] より安全な書き方である。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U];

const pair = [1, 2] as const;

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[1], ['a', 'b']>, [1, 'a', 'b']>>,
  Expect<Equal<Concat<typeof pair, [3]>, [1, 2, 3]>>,
];`,
    blank: '[...T, ...U]',
    placeholder: '/* T の要素の後ろに U の要素を並べたタプル型 */',
    token: /\[\s*\.\.\.\s*T\s*,\s*\.\.\.\s*U\s*\]/,
    hint: '<code>[...T, ...U]</code> と書く。',
    output: `type R = Concat<[1], ['a', 'b']>
// [1, 'a', 'b']  // 期待される型`
  },
  {
    id: 'tc1-11',
    phase: '初級：条件分岐と配列・関数の型',
    title: 'First',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル型の先頭の要素の型を取り出す First&lt;T&gt; を作る。</p>
<p>infer はタプルの形の中でも使える。<code>[infer F, ...any[]]</code> は「先頭の要素を F と呼び、残りは任意」という形を表す。T がこの形に当てはまれば、条件型の結果は F になる。</p>
<pre>type First&lt;T extends any[]&gt; = T extends [infer F, ...any[]] ? F : never;</pre>
<p>空のタプル <code>[]</code> は先頭の要素を欠くため、この形から外れる。その場合の結果には never 型を使う。never 型は、取りうる値の集合が空である型である。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
];`,
    blank: 'T extends [infer F, ...any[]] ? F : never',
    placeholder: '/* T の先頭の要素を infer で取り出し、空のタプルでは never になる条件型 */',
    token: /T\s+extends\s+\[\s*infer\s+(\w+)\s*,\s*\.\.\.\s*(any|unknown)\s*\[\s*\]\s*\]\s*\?\s*\1\s*:\s*never/,
    hint: '<code>T extends [infer F, ...any[]] ? F : never</code> と書く。',
    output: `type R = First<[3, 2, 1]>
// 3  // 期待される型`
  },
  {
    id: 'tc1-12',
    phase: '初級：条件分岐と配列・関数の型',
    title: 'Includes',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル型 T が型 U と完全に同じ要素を含むかを判定する Includes&lt;T, U&gt; を作る。</p>
<p>この問題では、タプルの先頭から要素を1つ取り出して U と比べる処理を再帰で繰り返す。<code>T extends readonly [infer F, ...infer R]</code> は、先頭の要素を F、残りのタプルを R として取り出す。</p>
<pre>type Includes&lt;T extends readonly any[], U&gt; =
  T extends readonly [infer F, ...infer R]
    ? Equal&lt;F, U&gt; extends true ? true : Includes&lt;R, U&gt;
    : false;</pre>
<p>比較には <code>F extends U</code> の代わりにテスト用の Equal を使う。extends は「当てはまるか」を調べるため、false を boolean に当てはまると判定する。Equal は完全一致を調べるため、正確な判定になる。F と U が一致すれば true、それ以外の場合は残りの R で同じ処理を続ける。要素が尽きた時点で結果は false になる。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type Includes<T extends readonly any[], U> =
  T extends readonly [infer F, ...infer R]
    ? Equal<F, U> extends true ? true : Includes<R, U>
    : false;

type cases = [
  Expect<Equal<Includes<['red', 'green', 'blue'], 'green'>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 4>, false>>,
  Expect<Equal<Includes<[boolean, 1], false>, false>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[null], null>, true>>,
];`,
    blank: 'Equal<F, U> extends true ? true : Includes<R, U>',
    placeholder: '/* F と U が完全に同じなら true、それ以外は残り R で再帰する条件型 */',
    token: /Equal\s*<\s*F\s*,\s*U\s*>\s*extends\s+true\s*\?\s*true\s*:\s*Includes\s*<\s*R\s*,\s*U\s*>/,
    hint: '<code>Equal&lt;F, U&gt; extends true ? true : Includes&lt;R, U&gt;</code> と書く。',
    output: `type R1 = Includes<['red', 'green', 'blue'], 'green'>  // true
type R2 = Includes<[boolean, 1], false>               // false  // 期待される型`
  },
  {
    id: 'tc1-13',
    phase: '初級：条件分岐と配列・関数の型',
    title: 'MyParameters',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、関数型の引数の型をタプル型として取り出す MyParameters&lt;T&gt; を作る。</p>
<p>関数の型は <code>(引数) =&gt; 戻り値の型</code> の形で書く。<code>(...args: P) =&gt; any</code> は、すべての引数をまとめて P とした関数型である。この P の位置に infer を置くと、引数の型の並びをタプル型として取り出せる。</p>
<pre>type MyParameters&lt;T extends (...args: any[]) =&gt; any&gt; =
  T extends (...args: infer P) =&gt; any ? P : never;</pre>
<p>制約により T は関数型に限られる。<code>(a: string, b: number) =&gt; void</code> を渡すと、P は <code>[a: string, b: number]</code> になる。名前付きのタプル要素は、名前を除いた <code>[string, number]</code> と同じ型として扱われる。</p>`,
    code: `type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type MyParameters<T extends (...args: any[]) => any> =
  T extends (...args: infer P) => any ? P : never;

const greet = (name: string, times: number): void => {};
const isEven = (n: number): boolean => n % 2 === 0;
const now = (): number => 0;

type cases = [
  Expect<Equal<MyParameters<typeof greet>, [string, number]>>,
  Expect<Equal<MyParameters<typeof isEven>, [number]>>,
  Expect<Equal<MyParameters<typeof now>, []>>,
];`,
    blank: 'T extends (...args: infer P) => any ? P : never',
    placeholder: '/* 関数型 T の引数の並びを infer で取り出す条件型 */',
    token: /T\s+extends\s+\(\s*\.\.\.\s*\w+\s*:\s*infer\s+(\w+)\s*\)\s*=>\s*(any|unknown)\s*\?\s*\1\s*:\s*never/,
    hint: '<code>T extends (...args: infer P) =&gt; any ? P : never</code> と書く。',
    output: `type R = MyParameters<typeof greet>
// [name: string, times: number]  // 期待される型`
  }
];
