SERIES.tc2 = [
  {
    id: 'tc2-01',
    phase: '中級：オブジェクトと配列の型',
    title: 'LookUp：union からの型の取り出し',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、union 型の中から type プロパティが指定の値に一致する型を取り出す LookUp を実装する。</p>
<p>Type Challenges は、型の定義のみで小さな課題を解く問題集である。コードの先頭の Equal は、2つの型が完全に一致するとき true になる補助型である。Expect は true を受け取る補助型であり、false を渡すと型エラーになる。学習者の型が正しいとき、cases のすべての行がエラー 0 件で通る。</p>
<p>条件型（conditional type）は、<code>A extends B ? X : Y</code> の形で、A が B に代入可能なら X、それ以外なら Y になる型である。検査対象が型引数のとき、union を渡すと各メンバーに分けて評価される。この性質を分配的条件型（distributive conditional type）とよぶ。</p>
<p>LookUp では <code>U extends { type: T } ? U : never</code> と書く。Cat | Dog は Cat と Dog に分けて検査され、条件を満たすメンバーが残る。never は空の集合を表す型であり、union の中では消える。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type LookUp<U, T> =
  U extends { type: T } ? U : never;

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}
interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}
type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
];`,
    blank: `  U extends { type: T } ? U : never;`,
    placeholder: `  // ここに、type が T に一致するメンバーを残す条件型が入る`,
    token: /U\s+extends\s*\{\s*type\s*:\s*T\s*;?\s*\}\s*\?\s*U\s*:\s*never/,
    hint: `条件型の形は <code>U extends { type: T } ? U : never</code> である。U が union のとき、メンバーごとに判定される。`,
    output: `LookUp<Animal, 'dog'>  →  Dog
LookUp<Animal, 'cat'>  →  Cat

型チェック：cases の 2 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-02',
    phase: '中級：オブジェクトと配列の型',
    title: 'Pop：最後の要素を除いたタプル',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル型から最後の要素を取り除いた型を返す Pop を実装する。</p>
<p>タプル型は、要素の数と各位置の型が決まった配列の型である。<code>[...Rest, X]</code> のように <code>...</code> を使うと、「前半の任意個の要素」と「最後の1要素」に分けた形を表せる。この書き方を可変長タプル型とよぶ。</p>
<p>infer は、条件型の extends の右側で使い、一致した部分の型に名前を付けて取り出す構文である。<code>T extends [...infer Rest, any] ? Rest : []</code> と書くと、TypeScript は最後の1要素の手前までを Rest として推論する。空のタプルは偽の側に進み、結果は <code>[]</code> になる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Pop<T extends any[]> =
  T extends [...infer Rest, any] ? Rest : [];

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
];`,
    blank: `  T extends [...infer Rest, any] ? Rest : [];`,
    placeholder: `  // ここに、最後の要素の手前までを infer で取り出す条件型が入る`,
    token: /T\s+extends\s*\[\s*\.\.\.infer\s+(\w+)\s*,\s*(any|unknown|infer\s+\w+)\s*\]\s*\?\s*\1\s*:\s*\[\s*\]/,
    hint: `<code>T extends [...infer Rest, any] ? Rest : []</code> の形で書く。infer Rest が最後の要素の手前までを受け取る。`,
    output: `Pop<[3, 2, 1]>            →  [3, 2]
Pop<['a', 'b', 'c', 'd']>  →  ['a', 'b', 'c']
Pop<[]>                   →  []

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-03',
    phase: '中級：オブジェクトと配列の型',
    title: 'DeepReadonly：入れ子まで読み取り専用',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、オブジェクトの入れ子の奥のプロパティまで readonly にする DeepReadonly を実装する。</p>
<p>マップ型（mapped type）は、<code>{ [K in keyof T]: … }</code> の形で、T のキーを1つずつ取り出して新しいオブジェクト型を作る構文である。keyof T は T のキーの union である。K の前に readonly を付けると、作られるプロパティはすべて読み取り専用になる。</p>
<p>再帰型（recursive type）は、定義の中で自分自身を参照する型である。DeepReadonly は、値がオブジェクトのプロパティに対して DeepReadonly を再び適用する。関数もオブジェクトの一種であるため、先に <code>T[K] extends Function</code> で関数を取り分け、関数はそのまま残す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: { f: string };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: { readonly f: string };
  };
};

type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
];`,
    blank: `  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends object ? DeepReadonly<T[K]> : T[K];`,
    placeholder: `  // ここに、各プロパティを readonly にし、オブジェクトの値には DeepReadonly を再び適用するマップ型の本体が入る`,
    token: /readonly\s*\[\s*K\s+in\s+keyof\s+T\s*\][\s\S]*DeepReadonly\s*<\s*T\s*\[\s*K\s*\]\s*>/,
    hint: `<code>readonly [K in keyof T]: T[K] extends Function ? T[K] : T[K] extends object ? DeepReadonly&lt;T[K]&gt; : T[K];</code> の形で書く。`,
    output: `DeepReadonly<X>  →
{
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: { readonly f: string };
  };
}

型チェック：cases の 1 件が true（エラー 0 件）`
  },
  {
    id: 'tc2-04',
    phase: '中級：オブジェクトと配列の型',
    title: 'MyReturnType：関数の戻り値の型',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、関数型から戻り値の型を取り出す MyReturnType を実装する。</p>
<p>関数型は <code>(...args: any[]) =&gt; R</code> の形で表せる。戻り値の位置に infer R を置くと、TypeScript は渡された関数型の戻り値を R として推論する。引数はどの型でもよいため、引数の側は <code>any[]</code> で受け止める。</p>
<p>typeof は、値から型を取り出す演算子である。テストの <code>typeof fn</code> は、関数 fn の型 <code>(v: boolean) =&gt; 1 | 2</code> を表す。MyReturnType はこの型から <code>1 | 2</code> を取り出す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type MyReturnType<T> =
  T extends (...args: any[]) => infer R ? R : never;

const fn = (v: boolean) => (v ? 1 : 2);

type cases = [
  Expect<Equal<MyReturnType<() => string>, string>>,
  Expect<Equal<MyReturnType<(a: number) => Promise<boolean>>, Promise<boolean>>>,
  Expect<Equal<MyReturnType<typeof fn>, 1 | 2>>,
];`,
    blank: `  T extends (...args: any[]) => infer R ? R : never;`,
    placeholder: `  // ここに、関数型の戻り値の位置を infer で取り出す条件型が入る`,
    token: /T\s+extends\s*\(\s*\.\.\.\w+\s*:\s*(any|unknown|never)\[\]\s*\)\s*=>\s*infer\s+(\w+)\s*\?\s*\2\s*:\s*never/,
    hint: `<code>T extends (...args: any[]) =&gt; infer R ? R : never</code> の形で書く。`,
    output: `MyReturnType<() => string>                    →  string
MyReturnType<(a: number) => Promise<boolean>>  →  Promise<boolean>
MyReturnType<typeof fn>                        →  1 | 2

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-05',
    phase: '中級：オブジェクトと配列の型',
    title: 'Last：タプルの最後の要素',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル型の最後の要素の型を返す Last を実装する。</p>
<p>Last は Pop と対になる型である。Pop は最後の要素の手前を取り出した。Last は最後の要素そのものを infer で受け取る。</p>
<p><code>T extends [...any[], infer L] ? L : never</code> と書くと、前半の要素は <code>...any[]</code> が受け止め、末尾の1要素が L になる。空のタプルは偽の側に進み、結果は never になる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Last<T extends any[]> =
  T extends [...any[], infer L] ? L : never;

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  Expect<Equal<Last<[]>, never>>,
];`,
    blank: `  T extends [...any[], infer L] ? L : never;`,
    placeholder: `  // ここに、末尾の1要素を infer で取り出す条件型が入る`,
    token: /T\s+extends\s*\[\s*\.\.\.(any|unknown)\[\]\s*,\s*infer\s+(\w+)\s*\]\s*\?\s*\2\s*:\s*never/,
    hint: `<code>T extends [...any[], infer L] ? L : never</code> の形で書く。`,
    output: `Last<[3, 2, 1]>                  →  1
Last<[() => 123, { a: string }]>  →  { a: string }
Last<[]>                         →  never

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-06',
    phase: '中級：オブジェクトと配列の型',
    title: 'MyOmit：指定のキーの除外',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、オブジェクト型から指定のキーを取り除く MyOmit を実装する。</p>
<p>キーの再マッピング（key remapping）は、マップ型の中で <code>as</code> を使い、作られるキーを別の型に置き換える構文である。<code>[P in keyof T as 新しいキー]</code> の形で書く。新しいキーが never のとき、そのプロパティは結果から消える。</p>
<p>MyOmit では <code>P extends K ? never : P</code> を新しいキーにする。K に含まれるキーは never になって消え、残りのキーは元の名前で残る。値の型は <code>T[P]</code> で元の型を引き継ぐ。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
interface Expected1 {
  title: string;
  completed: boolean;
}
interface Expected2 {
  title: string;
}

type cases = [
  Expect<Equal<MyOmit<Todo, 'description'>, Expected1>>,
  Expect<Equal<MyOmit<Todo, 'description' | 'completed'>, Expected2>>,
];`,
    blank: `  [P in keyof T as P extends K ? never : P]: T[P];`,
    placeholder: `  // ここに、as で K のキーを never に置き換えるマップ型の本体が入る`,
    token: /\[\s*P\s+in\s+keyof\s+T\s+as\s+P\s+extends\s+K\s*\?\s*never\s*:\s*P\s*\]\s*:\s*T\s*\[\s*P\s*\]/,
    hint: `<code>[P in keyof T as P extends K ? never : P]: T[P];</code> の形で書く。`,
    output: `MyOmit<Todo, 'description'>              →  { title: string; completed: boolean }
MyOmit<Todo, 'description' | 'completed'>  →  { title: string }

型チェック：cases の 2 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-07',
    phase: '中級：オブジェクトと配列の型',
    title: 'Merge：2つのオブジェクト型の合成',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、2つのオブジェクト型を1つにまとめ、重なるキーでは2つ目の型を優先する Merge を実装する。</p>
<p>マップ型の <code>in</code> の右側には、任意のキーの union を置ける。<code>keyof F | keyof S</code> と書くと、F と S のどちらかが持つキーがすべて対象になる。</p>
<p>値の型は条件型で選ぶ。K が S のキーなら <code>S[K]</code>、それ以外で F のキーなら <code>F[K]</code> を使う。S を先に検査するため、b のように両方が持つキーでは S の型が残る。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
};

type Foo = { a: number; b: string };
type Bar = { b: number; c: boolean };

type cases = [
  Expect<Equal<Merge<Foo, Bar>, { a: number; b: number; c: boolean }>>,
];`,
    blank: `  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;`,
    placeholder: `  // ここに、F と S のキーをすべて並べ、S の値を優先するマップ型の本体が入る`,
    token: /\[\s*K\s+in\s+keyof\s+F\s*\|\s*keyof\s+S\s*\]\s*:\s*K\s+extends\s+keyof\s+S\s*\?\s*S\s*\[\s*K\s*\]/,
    hint: `<code>[K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;</code> の形で書く。`,
    output: `Merge<Foo, Bar>  →  { a: number; b: number; c: boolean }

型チェック：cases の 1 件が true（エラー 0 件）`
  },
  {
    id: 'tc2-08',
    phase: '中級：オブジェクトと配列の型',
    title: 'Diff：片方のみが持つプロパティ',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、2つのオブジェクト型のうち片方のみが持つプロパティを集めた Diff を実装する。</p>
<p>Diff は Merge と MyOmit の組み合わせである。まず <code>keyof O | keyof O1</code> で両方のキーを並べる。次に as で、両方に共通するキーを never に置き換えて除く。</p>
<p>共通のキーは <code>keyof O &amp; keyof O1</code> で表せる。&amp; は交差型（intersection type）であり、キーの union どうしに使うと両方に含まれるキーが残る。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Diff<O, O1> = {
  [K in keyof O | keyof O1 as K extends keyof O & keyof O1 ? never : K]:
    K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never;
};

type Foo = { name: string; age: string };
type Bar = { name: string; age: string; gender: number };
type Coo = { name: string; gender: number };

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
];`,
    blank: `  [K in keyof O | keyof O1 as K extends keyof O & keyof O1 ? never : K]:`,
    placeholder: `  // ここに、両方のキーを並べ、共通のキーを as で never に置き換えるキーの部分が入る`,
    token: /\[\s*K\s+in\s+keyof\s+O\s*\|\s*keyof\s+O1\s+as\s+K\s+extends\s+keyof\s+O\s*&\s*keyof\s+O1\s*\?\s*never\s*:\s*K\s*\]\s*:/,
    hint: `<code>[K in keyof O | keyof O1 as K extends keyof O &amp; keyof O1 ? never : K]:</code> の形で書く。`,
    output: `Diff<Foo, Bar>  →  { gender: number }
Diff<Bar, Foo>  →  { gender: number }
Diff<Foo, Coo>  →  { age: string; gender: number }

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-09',
    phase: '中級：オブジェクトと配列の型',
    title: 'StringToUnion：文字列から文字の union',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、文字列リテラル型を1文字ごとに分け、文字の union にする StringToUnion を実装する。</p>
<p>テンプレートリテラル型（template literal type）は、<code>\`\${A}\${B}\`</code> のようにバッククォートで文字列の形を表す型である。infer と組み合わせると、文字列を部分に分けられる。<code>\`\${infer F}\${infer R}\`</code> では、F が先頭の1文字、R が残りの文字列になる。</p>
<p>StringToUnion は先頭の F を union に加え、残りの R に自分自身を再び適用する再帰型である。R が空文字列になると条件が偽になり、never で終わる。never は union の中で消えるため、結果は文字の union になる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type StringToUnion<S extends string> =
  S extends \`\${infer F}\${infer R}\` ? F | StringToUnion<R> : never;

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'n' | 'a' | 'v' | 'i' | 'u' | 's'>>,
];`,
    blank: "  S extends `${infer F}${infer R}` ? F | StringToUnion<R> : never;",
    placeholder: `  // ここに、先頭の1文字を取り出して残りに再び適用する条件型が入る`,
    token: /S\s+extends\s*`\$\{infer\s+(\w+)\}\$\{infer\s+(\w+)\}`\s*\?\s*\1\s*\|\s*StringToUnion\s*<\s*\2\s*>\s*:\s*never/,
    hint: `<code>S extends \`\${infer F}\${infer R}\` ? F | StringToUnion&lt;R&gt; : never</code> の形で書く。`,
    output: `StringToUnion<''>       →  never
StringToUnion<'t'>      →  't'
StringToUnion<'hello'>  →  'h' | 'e' | 'l' | 'o'
StringToUnion<'coronavirus'>  →  'c' | 'o' | 'r' | 'n' | 'a' | 'v' | 'i' | 'u' | 's'

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-10',
    phase: '中級：文字列と Union の型',
    title: 'TupleToUnion：タプルの要素の union',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル型のすべての要素の型を union にまとめる TupleToUnion を実装する。</p>
<p>インデックスアクセス型（indexed access type）は、<code>T[K]</code> の形で、型 T のキー K に対応する値の型を取り出す構文である。配列やタプルは数値のキーを持つため、<code>T[number]</code> と書くと、すべての位置の要素の型が union になる。</p>
<p>as const を付けた配列は readonly のタプルになる。readonly のタプルも受け取れるよう、型引数の制約は <code>readonly any[]</code> にする。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type TupleToUnion<T extends readonly any[]> = T[number];

const roles = ['admin', 'editor', 'viewer'] as const;

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
  Expect<Equal<TupleToUnion<typeof roles>, 'admin' | 'editor' | 'viewer'>>,
];`,
    blank: `type TupleToUnion<T extends readonly any[]> = T[number];`,
    placeholder: `// ここに、readonly のタプルを受け取り、数値のキーで要素の型を取り出す TupleToUnion の定義が入る`,
    token: /type\s+TupleToUnion\s*<\s*T\s+extends\s+readonly\s+(any|unknown)\[\]\s*>\s*=\s*T\s*\[\s*number\s*\]/,
    hint: `<code>type TupleToUnion&lt;T extends readonly any[]&gt; = T[number];</code> と書く。`,
    output: `TupleToUnion<[123, '456', true]>  →  123 | '456' | true
TupleToUnion<[123]>               →  123
TupleToUnion<typeof roles>        →  'admin' | 'editor' | 'viewer'

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-11',
    phase: '中級：文字列と Union の型',
    title: 'Trim：前後の空白の除去',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、文字列リテラル型の前後にある空白を取り除く Trim を実装する。</p>
<p>テンプレートリテラル型の中に union を置くと、その位置にはどのメンバーでも一致する。Space を <code>' ' | '\\n' | '\\t'</code> とすると、<code>\`\${Space}\${infer R}\`</code> は「空白で始まる文字列」を表す。</p>
<p>extends の右側を union にすると、「先頭が空白」または「末尾が空白」のどちらかに一致したとき、空白を1文字除いた R が得られる。Trim はこの R に再び Trim を適用し、両端の空白が消えた時点で S をそのまま返す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Space = ' ' | '\\n' | '\\t';
type Trim<S extends string> =
  S extends \`\${Space}\${infer R}\` | \`\${infer R}\${Space}\` ? Trim<R> : S;

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \\n\\t foo bar \\t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
];`,
    blank: "  S extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : S;",
    placeholder: `  // ここに、先頭または末尾の空白を1文字除いて Trim を再び適用する条件型が入る`,
    token: /S\s+extends\s*`\$\{Space\}\$\{infer\s+(\w+)\}`\s*\|\s*`\$\{infer\s+\1\}\$\{Space\}`\s*\?\s*Trim\s*<\s*\1\s*>\s*:\s*S/,
    hint: `<code>S extends \`\${Space}\${infer R}\` | \`\${infer R}\${Space}\` ? Trim&lt;R&gt; : S</code> の形で書く。`,
    output: `Trim<'str'>                   →  'str'
Trim<' str'>                  →  'str'
Trim<'     str     '>         →  'str'
Trim<'   \\n\\t foo bar \\t'>  →  'foo bar'
Trim<''>                      →  ''

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-12',
    phase: '中級：文字列と Union の型',
    title: 'Flatten：入れ子の配列の平坦化',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、入れ子になったタプル型を1段の平らなタプルにする Flatten を実装する。</p>
<p>Flatten は、タプルを先頭の要素 F と残り R に分けて処理する。<code>[infer F, ...infer R]</code> は、先頭の1要素と残りのタプルを同時に取り出す形である。</p>
<p>F が配列なら、F 自身にも Flatten を適用して展開する。F が配列以外なら、F をそのまま先頭に置く。どちらの場合も、残りの R には Flatten を再び適用し、スプレッド構文 <code>...</code> で1つのタプルにつなげる。タプルが空になった時点で <code>[]</code> を返す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Flatten<T extends any[]> =
  T extends [infer F, ...infer R]
    ? F extends any[] ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>]
    : [];

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar' }, 'foobar']>, [{ foo: 'bar' }, 'foobar']>>,
];`,
    blank: `    ? F extends any[] ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>]`,
    placeholder: `    // ここに、F が配列なら F も展開し、それ以外なら F を先頭に置く分岐が入る`,
    token: /\?\s*F\s+extends\s+(any|unknown)\[\]\s*\?\s*\[\s*\.\.\.Flatten\s*<\s*F\s*>\s*,\s*\.\.\.Flatten\s*<\s*R\s*>\s*\]\s*:\s*\[\s*F\s*,\s*\.\.\.Flatten\s*<\s*R\s*>\s*\]/,
    hint: `<code>? F extends any[] ? [...Flatten&lt;F&gt;, ...Flatten&lt;R&gt;] : [F, ...Flatten&lt;R&gt;]</code> の形で書く。`,
    output: `Flatten<[]>                          →  []
Flatten<[1, 2, 3, 4]>                →  [1, 2, 3, 4]
Flatten<[1, [2]]>                    →  [1, 2]
Flatten<[1, 2, [3, 4], [[[5]]]]>     →  [1, 2, 3, 4, 5]
Flatten<[{ foo: 'bar' }, 'foobar']>  →  [{ foo: 'bar' }, 'foobar']

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-13',
    phase: '中級：文字列と Union の型',
    title: 'Replace：最初の一致の置換',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、文字列 S の中で最初に現れる From を To に置き換える Replace を実装する。</p>
<p><code>\`\${infer L}\${From}\${infer R}\`</code> は、S を「From の手前 L」「From」「From の後ろ R」の3つに分ける形である。TypeScript は L をできるかぎり短く推論するため、最初に現れる From の位置で分割される。</p>
<p>一致したときは <code>\`\${L}\${To}\${R}\`</code> で組み立て直す。From が空文字列のときは置換の意味があいまいになるため、最初に <code>From extends ''</code> を検査して S をそのまま返す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Replace<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends \`\${infer L}\${From}\${infer R}\` ? \`\${L}\${To}\${R}\` : S;

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
];`,
    blank: "    : S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}` : S;",
    placeholder: `    // ここに、From の前後を infer で取り出して To で組み立て直す条件型が入る`,
    token: /S\s+extends\s*`\$\{infer\s+(\w+)\}\$\{From\}\$\{infer\s+(\w+)\}`\s*\?\s*`\$\{\1\}\$\{To\}\$\{\2\}`\s*:\s*S/,
    hint: `<code>: S extends \`\${infer L}\${From}\${infer R}\` ? \`\${L}\${To}\${R}\` : S;</code> の形で書く。`,
    output: `Replace<'foobar', 'bar', 'foo'>     →  'foofoo'
Replace<'foobarbar', 'bar', 'foo'>  →  'foofoobar'
Replace<'foobarbar', '', 'foo'>     →  'foobarbar'
Replace<'', '', ''>                 →  ''

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-14',
    phase: '中級：文字列と Union の型',
    title: 'ReplaceAll：すべての一致の置換',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、文字列 S の中のすべての From を To に置き換える ReplaceAll を実装する。</p>
<p>ReplaceAll は Replace を再帰型にしたものである。最初の From を To に置き換えたあと、後ろの R に ReplaceAll を再び適用する。</p>
<p>再帰の対象は R のみにする。置換後の文字列全体を再検査すると、To と R の境目に新しく From が生まれた場合も置換されてしまう。<code>'foboorfor'</code> を <code>'for' → 'foo'</code> で置き換える例では、R のみを対象にする方法で正しく <code>'foboorfoo'</code> が得られる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends \`\${infer L}\${From}\${infer R}\` ? \`\${L}\${To}\${ReplaceAll<R, From, To>}\` : S;

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foboorfor', 'for', 'foo'>, 'foboorfoo'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar foo', 'foo'>, 'barfoo'>>,
];`,
    blank: "    : S extends `${infer L}${From}${infer R}` ? `${L}${To}${ReplaceAll<R, From, To>}` : S;",
    placeholder: `    // ここに、最初の From を To に置き換え、後ろの R に ReplaceAll を再び適用する条件型が入る`,
    token: /S\s+extends\s*`\$\{infer\s+(\w+)\}\$\{From\}\$\{infer\s+(\w+)\}`\s*\?\s*`\$\{\1\}\$\{To\}\$\{ReplaceAll\s*<\s*\2\s*,\s*From\s*,\s*To\s*>\}`\s*:\s*S/,
    hint: `<code>: S extends \`\${infer L}\${From}\${infer R}\` ? \`\${L}\${To}\${ReplaceAll&lt;R, From, To&gt;}\` : S;</code> の形で書く。`,
    output: `ReplaceAll<'foobar', 'bar', 'foo'>     →  'foofoo'
ReplaceAll<'foobarbar', 'bar', 'foo'>  →  'foofoofoo'
ReplaceAll<'t y p e s', ' ', ''>       →  'types'
ReplaceAll<'foboorfor', 'for', 'foo'>  →  'foboorfoo'
ReplaceAll<'barfoo', 'bar foo', 'foo'> →  'barfoo'

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-15',
    phase: '中級：文字列と Union の型',
    title: 'MyCapitalize：先頭の大文字化',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、文字列リテラル型の先頭の1文字を大文字にする MyCapitalize を実装する。</p>
<p>Uppercase は、TypeScript に組み込まれた型であり、文字列リテラル型のすべての文字を大文字に変える。組み込みの型を intrinsic 型とよび、Lowercase、Capitalize、Uncapitalize も同じ仲間である。</p>
<p>MyCapitalize は、<code>\`\${infer F}\${infer R}\`</code> で先頭の F と残りの R に分け、F のみに Uppercase を適用する。空文字列は偽の側に進み、S をそのまま返す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type MyCapitalize<S extends string> =
  S extends \`\${infer F}\${infer R}\` ? \`\${Uppercase<F>}\${R}\` : S;

type cases = [
  Expect<Equal<MyCapitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<MyCapitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<MyCapitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<MyCapitalize<''>, ''>>,
  Expect<Equal<MyCapitalize<'a'>, 'A'>>,
];`,
    blank: "  S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S;",
    placeholder: `  // ここに、先頭の1文字のみを Uppercase で大文字にする条件型が入る`,
    token: /S\s+extends\s*`\$\{infer\s+(\w+)\}\$\{infer\s+(\w+)\}`\s*\?\s*`\$\{Uppercase\s*<\s*\1\s*>\}\$\{\2\}`\s*:\s*S/,
    hint: `<code>S extends \`\${infer F}\${infer R}\` ? \`\${Uppercase&lt;F&gt;}\${R}\` : S</code> の形で書く。`,
    output: `MyCapitalize<'foobar'>   →  'Foobar'
MyCapitalize<'FOOBAR'>   →  'FOOBAR'
MyCapitalize<'foo bar'>  →  'Foo bar'
MyCapitalize<''>         →  ''
MyCapitalize<'a'>        →  'A'

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-16',
    phase: '中級：文字列と Union の型',
    title: 'Chainable：つなげて書ける設定の型',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、option でキーと値を追加し、get で最終的なオブジェクトの型を得る Chainable を実装する。</p>
<p>Chainable の型引数 T は、それまでに登録した設定の型である。option は呼び出すたびに、T に新しいキー K と値 V を加えた Chainable を返す。このため <code>.option(…).option(…)</code> とつなげて書ける。</p>
<p>新しい T は <code>Omit&lt;T, K&gt; &amp; Record&lt;K, V&gt;</code> で作る。Record&lt;K, V&gt; は、キー K に値 V を持つオブジェクト型である。Omit で同じ名前の古いキーを先に除くため、1つのキーは1つの値の型を持つ。key の型を <code>K extends keyof T ? never : K</code> にすると、登録済みのキーを再び渡したときに型エラーになる。</p>
<p>get は <code>{ [P in keyof T]: T[P] }</code> を返す。このマップ型は、Omit と Record の交差型を1つのオブジェクト型にまとめ直す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>;
  get(): { [P in keyof T]: T[P] };
};

declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get();

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error 登録済みのキーは型エラーになる
  .option('name', 'last name')
  .get();

type Expected1 = {
  foo: number;
  bar: { value: string };
  name: string;
};
type Expected2 = { name: string };

type cases = [
  Expect<Equal<typeof result1, Expected1>>,
  Expect<Equal<typeof result2, Expected2>>,
];`,
    blank: `  ): Chainable<Omit<T, K> & Record<K, V>>;`,
    placeholder: `  // ここに、T から K を除いて K と V を加えた Chainable を返す戻り値の型が入る`,
    token: /\)\s*:\s*Chainable\s*<\s*Omit\s*<\s*T\s*,\s*K\s*>\s*&\s*Record\s*<\s*K\s*,\s*V\s*>\s*>/,
    hint: `戻り値の型は <code>): Chainable&lt;Omit&lt;T, K&gt; &amp; Record&lt;K, V&gt;&gt;;</code> である。`,
    output: `typeof result1  →  { foo: number; bar: { value: string }; name: string }
typeof result2  →  { name: string }
2回目の .option('name', …) の行は @ts-expect-error のとおり型エラーになる

型チェック：cases の 2 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-17',
    phase: '中級：文字列と Union の型',
    title: 'AppendArgument：引数の追加',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、関数型の引数リストの末尾に新しい引数 A を加える AppendArgument を実装する。</p>
<p>関数の引数リストは、タプル型として infer で取り出せる。<code>Fn extends (...args: infer P) =&gt; infer R</code> と書くと、P に引数のタプル、R に戻り値の型が入る。</p>
<p>新しい関数型は <code>(...args: [...P, A]) =&gt; R</code> で組み立てる。<code>[...P, A]</code> は、P の要素の後ろに A を1つ加えたタプルである。型の一致の判定では引数の型と順序が比べられ、引数の名前は判定の対象外である。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type AppendArgument<Fn extends (...args: any[]) => any, A> =
  Fn extends (...args: infer P) => infer R ? (...args: [...P, A]) => R : never;

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
];`,
    blank: `  Fn extends (...args: infer P) => infer R ? (...args: [...P, A]) => R : never;`,
    placeholder: `  // ここに、引数のタプルと戻り値を infer で取り出し、末尾に A を加えた関数型を作る条件型が入る`,
    token: /Fn\s+extends\s*\(\s*\.\.\.\w+\s*:\s*infer\s+(\w+)\s*\)\s*=>\s*infer\s+(\w+)\s*\?\s*\(\s*\.\.\.\w+\s*:\s*\[\s*\.\.\.\1\s*,\s*A\s*\]\s*\)\s*=>\s*\2\s*:\s*never/,
    hint: `<code>Fn extends (...args: infer P) =&gt; infer R ? (...args: [...P, A]) =&gt; R : never</code> の形で書く。`,
    output: `Case1  →  (a: number, b: string, x: boolean) => number
Case2  →  (x: undefined) => void

型チェック：cases の 2 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-18',
    phase: '中級：文字列と Union の型',
    title: 'AppendToObject：プロパティの追加',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、オブジェクト型に新しいキー U と値 V を加える AppendToObject を実装する。</p>
<p>交差型 <code>T &amp; { [K in U]: V }</code> でも同じ値を表せる。ただし Equal は交差型と1つにまとまったオブジェクト型を区別する。そこで、マップ型で新しい1つのオブジェクト型を作る。</p>
<p>キーは <code>keyof T | U</code> とし、値は K が T のキーなら <code>T[K]</code>、それ以外なら V とする。U の制約に使う PropertyKey は、string、number、symbol の union であり、オブジェクトのキーに使える型の全体を表す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type AppendToObject<T, U extends PropertyKey, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};

type Test1 = { key: 'cat'; value: 'green' };
type Test2 = { key: 'dog' | undefined; value: 'white'; sun: true };

type cases = [
  Expect<Equal<AppendToObject<Test1, 'home', boolean>, { key: 'cat'; value: 'green'; home: boolean }>>,
  Expect<Equal<AppendToObject<Test2, 'home', 1>, { key: 'dog' | undefined; value: 'white'; sun: true; home: 1 }>>,
];`,
    blank: `  [K in keyof T | U]: K extends keyof T ? T[K] : V;`,
    placeholder: `  // ここに、T のキーと U を並べ、U の値を V にするマップ型の本体が入る`,
    token: /\[\s*K\s+in\s+keyof\s+T\s*\|\s*U\s*\]\s*:\s*K\s+extends\s+keyof\s+T\s*\?\s*T\s*\[\s*K\s*\]\s*:\s*V/,
    hint: `<code>[K in keyof T | U]: K extends keyof T ? T[K] : V;</code> の形で書く。`,
    output: `AppendToObject<Test1, 'home', boolean>
  →  { key: 'cat'; value: 'green'; home: boolean }
AppendToObject<Test2, 'home', 1>
  →  { key: 'dog' | undefined; value: 'white'; sun: true; home: 1 }

型チェック：cases の 2 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-19',
    phase: '中級：高度な型操作',
    title: 'Permutation：union の順列',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、union のメンバーを並べたすべての順列をタプルの union として返す Permutation を実装する。</p>
<p>Permutation は分配的条件型を意図的に使う。<code>K extends K ? … : never</code> は常に真の条件であり、K を union の各メンバーに分けて処理させるための書き方である。各メンバー K を先頭に置き、残りのメンバー <code>Exclude&lt;T, K&gt;</code> の順列を後ろにつなげる。Exclude&lt;T, K&gt; は、T から K を取り除いた union である。</p>
<p>再帰の終わりは T が never になった時点である。<code>T extends never</code> と書くと never が分配されて結果も never になるため、<code>[T] extends [never]</code> のように角かっこで包み、分配を止めて判定する。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Permutation<T, K = T> =
  [T] extends [never]
    ? []
    : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never;

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<Equal<Permutation<'A' | 'B' | 'C'>,
    | ['A', 'B', 'C'] | ['A', 'C', 'B']
    | ['B', 'A', 'C'] | ['B', 'C', 'A']
    | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>,
];`,
    blank: `    : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never;`,
    placeholder: `    // ここに、K をメンバーごとに分け、残りの順列を後ろにつなげる条件型が入る`,
    token: /K\s+extends\s+K\s*\?\s*\[\s*K\s*,\s*\.\.\.Permutation\s*<\s*Exclude\s*<\s*T\s*,\s*K\s*>\s*>\s*\]\s*:\s*never/,
    hint: `<code>: K extends K ? [K, ...Permutation&lt;Exclude&lt;T, K&gt;&gt;] : never;</code> の形で書く。`,
    output: `Permutation<'A'>              →  ['A']
Permutation<'A' | 'B' | 'C'>  →  ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C']
                                 | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
Permutation<boolean>          →  [false, true] | [true, false]
Permutation<never>            →  []

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-20',
    phase: '中級：高度な型操作',
    title: 'PromiseAll：Promise.all の型',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、配列の各要素の Promise を解決した結果のタプルを返す関数 PromiseAll の型を宣言する。</p>
<p>declare function は、本体を省略して関数の型のみを宣言する構文である。引数の型を <code>readonly [...T]</code> にすると、TypeScript は渡された配列をタプルとして推論する。readonly を付けるのは、as const の配列も受け取るためである。</p>
<p>マップ型をタプル型に適用すると、結果もタプル型になる。<code>{ [K in keyof T]: Awaited&lt;T[K]&gt; }</code> は、各位置の型に Awaited を適用したタプルである。Awaited は、Promise を解決した後の値の型を表す組み込みの型である。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が宣言する関数の型
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: Awaited<T[K]> }>;

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
];`,
    blank: `): Promise<{ [K in keyof T]: Awaited<T[K]> }>;`,
    placeholder: `// ここに、T の各位置に Awaited を適用したタプルを Promise で包む戻り値の型が入る`,
    token: /\)\s*:\s*Promise\s*<\s*\{\s*\[\s*K\s+in\s+keyof\s+T\s*\]\s*:\s*Awaited\s*<\s*T\s*\[\s*K\s*\]\s*>\s*;?\s*\}\s*>/,
    hint: `戻り値の型は <code>): Promise&lt;{ [K in keyof T]: Awaited&lt;T[K]&gt; }&gt;;</code> である。`,
    output: `typeof promiseAllTest1  →  Promise<[1, 2, 3]>
typeof promiseAllTest2  →  Promise<[1, 2, number]>
typeof promiseAllTest3  →  Promise<[number, number, number]>

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-21',
    phase: '中級：高度な型操作',
    title: 'KebabCase：ケバブケースへの変換',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、キャメルケースやパスカルケースの文字列をケバブケースに変える KebabCase を実装する。</p>
<p>ケバブケースは、<code>foo-bar-baz</code> のように小文字の単語をハイフンでつなぐ書き方である。KebabCase は文字列を先頭の F と残り R に分け、R の先頭が大文字かどうかで区切りの有無を決める。</p>
<p><code>R extends Uncapitalize&lt;R&gt;</code> は、R の先頭を小文字にしても R と同じ型のとき、つまり R の先頭が大文字以外のときに真になる。真なら F を小文字にしてそのままつなげ、偽なら F の後ろにハイフンを入れる。R が空文字列のときも条件は真になり、文字列はハイフン以外の文字で終わる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type KebabCase<S extends string> =
  S extends \`\${infer F}\${infer R}\`
    ? R extends Uncapitalize<R>
      ? \`\${Uncapitalize<F>}\${KebabCase<R>}\`
      : \`\${Uncapitalize<F>}-\${KebabCase<R>}\`
    : S;

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<''>, ''>>,
];`,
    blank: "    ? R extends Uncapitalize<R>\n      ? `${Uncapitalize<F>}${KebabCase<R>}`\n      : `${Uncapitalize<F>}-${KebabCase<R>}`",
    placeholder: `    // ここに、R の先頭が大文字かどうかでハイフンの有無を決める分岐が入る`,
    token: /R\s+extends\s+Uncapitalize\s*<\s*R\s*>\s*\?\s*`\$\{Uncapitalize\s*<\s*F\s*>\}\$\{KebabCase\s*<\s*R\s*>\}`\s*:\s*`\$\{Uncapitalize\s*<\s*F\s*>\}-\$\{KebabCase\s*<\s*R\s*>\}`/,
    hint: `<code>? R extends Uncapitalize&lt;R&gt; ? \`\${Uncapitalize&lt;F&gt;}\${KebabCase&lt;R&gt;}\` : \`\${Uncapitalize&lt;F&gt;}-\${KebabCase&lt;R&gt;}\`</code> の形で書く。`,
    output: `KebabCase<'FooBarBaz'>  →  'foo-bar-baz'
KebabCase<'fooBarBaz'>  →  'foo-bar-baz'
KebabCase<'foo-bar'>    →  'foo-bar'
KebabCase<'ABC'>        →  'a-b-c'
KebabCase<''>           →  ''

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-22',
    phase: '中級：高度な型操作',
    title: 'Absolute：絶対値の文字列',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、数値・文字列・bigint を受け取り、その絶対値を文字列リテラル型で返す Absolute を実装する。</p>
<p>テンプレートリテラル型 <code>\`\${T}\`</code> は、数値リテラル型や bigint リテラル型を文字列リテラル型に変える。<code>-5</code> は <code>'-5'</code> に、<code>-1_000_000n</code> は <code>'-1000000'</code> になる。</p>
<p>文字列にした後で <code>\`-\${infer U}\`</code> に一致すれば、マイナス記号の後ろの U が絶対値である。偽の場合は、文字列にした値そのものが答えである。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Absolute<T extends number | string | bigint> =
  \`\${T}\` extends \`-\${infer U}\` ? U : \`\${T}\`;

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<'-42'>, '42'>>,
];`,
    blank: "  `${T}` extends `-${infer U}` ? U : `${T}`;",
    placeholder: `  // ここに、T を文字列にしてマイナス記号の後ろを取り出す条件型が入る`,
    token: /`\$\{T\}`\s*extends\s*`-\$\{infer\s+(\w+)\}`\s*\?\s*\1\s*:\s*`\$\{T\}`/,
    hint: `<code>\`\${T}\` extends \`-\${infer U}\` ? U : \`\${T}\`</code> の形で書く。`,
    output: `Absolute<0>            →  '0'
Absolute<-5>           →  '5'
Absolute<10>           →  '10'
Absolute<-1_000_000n>  →  '1000000'
Absolute<'-42'>        →  '42'

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-23',
    phase: '中級：高度な型操作',
    title: 'LengthOfString：文字列の長さ',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、文字列リテラル型の文字数を数値リテラル型で返す LengthOfString を実装する。</p>
<p>型の世界では、タプルの <code>length</code> が数値リテラル型を返す。この値が足し算の代わりになる。この性質を使い、数を数える入れ物としてタプルを使う。</p>
<p>LengthOfString は2つ目の型引数 Acc にタプルを持ち、初期値を <code>[]</code> にする。先頭の1文字を取り出すたびに Acc に要素を1つ加え、残りの文字列で再び呼び出す。文字列が空になった時点で <code>Acc['length']</code> を返す。このように途中の結果を型引数で受け渡す手法をアキュムレータとよぶ。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type LengthOfString<S extends string, Acc extends string[] = []> =
  S extends \`\${infer F}\${infer R}\` ? LengthOfString<R, [...Acc, F]> : Acc['length'];

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reiwa'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];`,
    blank: "  S extends `${infer F}${infer R}` ? LengthOfString<R, [...Acc, F]> : Acc['length'];",
    placeholder: `  // ここに、1文字ごとに Acc へ要素を加え、最後に Acc の length を返す条件型が入る`,
    token: /S\s+extends\s*`\$\{infer\s+(\w+)\}\$\{infer\s+(\w+)\}`\s*\?\s*LengthOfString\s*<\s*\2\s*,\s*\[\s*\.\.\.Acc\s*,\s*\w+\s*\]\s*>\s*:\s*Acc\s*\[\s*["']length["']\s*\]/,
    hint: `<code>S extends \`\${infer F}\${infer R}\` ? LengthOfString&lt;R, [...Acc, F]&gt; : Acc['length']</code> の形で書く。`,
    output: `LengthOfString<''>                  →  0
LengthOfString<'kumiko'>            →  6
LengthOfString<'reiwa'>             →  5
LengthOfString<'Sound! Euphonium'>  →  16

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-24',
    phase: '中級：高度な型操作',
    title: 'AllCombinations：文字の組み合わせ',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、文字列の各文字を多くても1回使って作れるすべての文字列を union で返す AllCombinations を実装する。</p>
<p>AllCombinations は、これまでの2つの技法を組み合わせる。StringToUnion で文字列を文字の union に変え、Permutation と同じ考え方で各文字を先頭に置いて残りを並べる。</p>
<p>Permutation との違いは、途中で止めた並びも答えに含める点である。そこで各段階で空文字列 <code>''</code> を union に加える。<code>'' | \`\${K}\${Combs&lt;Exclude&lt;U, K&gt;&gt;}\`</code> と書くと、K のみの文字列から、すべての文字を使った文字列までが得られる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

type StringToUnion<S extends string> =
  S extends \`\${infer F}\${infer R}\` ? F | StringToUnion<R> : never;

// 学習者が実装する型
type Combs<U extends string, K extends string = U> =
  [U] extends [never]
    ? ''
    : '' | (K extends K ? \`\${K}\${Combs<Exclude<U, K>>}\` : never);

type AllCombinations<S extends string> = Combs<StringToUnion<S>>;

type cases = [
  Expect<Equal<AllCombinations<''>, ''>>,
  Expect<Equal<AllCombinations<'A'>, '' | 'A'>>,
  Expect<Equal<AllCombinations<'AB'>, '' | 'A' | 'B' | 'AB' | 'BA'>>,
  Expect<Equal<AllCombinations<'ABC'>,
    | '' | 'A' | 'B' | 'C'
    | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB'
    | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'>>,
];`,
    blank: "    : '' | (K extends K ? `${K}${Combs<Exclude<U, K>>}` : never);",
    placeholder: `    // ここに、空文字列と「K を先頭に置いて残りを並べた文字列」の union が入る`,
    token: /:\s*["']{2}\s*\|\s*\(\s*K\s+extends\s+K\s*\?\s*`\$\{K\}\$\{Combs\s*<\s*Exclude\s*<\s*U\s*,\s*K\s*>\s*>\}`\s*:\s*never\s*\)/,
    hint: `<code>: '' | (K extends K ? \`\${K}\${Combs&lt;Exclude&lt;U, K&gt;&gt;}\` : never);</code> の形で書く。`,
    output: `AllCombinations<''>     →  ''
AllCombinations<'A'>    →  '' | 'A'
AllCombinations<'AB'>   →  '' | 'A' | 'B' | 'AB' | 'BA'
AllCombinations<'ABC'>  →  '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB'
                           | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-25',
    phase: '中級：高度な型操作',
    title: 'IsReadonlyKey：readonly の判定',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、オブジェクト型のキー K が readonly のプロパティかどうかを true または false で返す IsReadonlyKey を実装する。</p>
<p>この課題はオリジナルの課題である。ふつうの代入可能性の検査では、readonly のプロパティと書き換え可能なプロパティは互いに代入できる。このため extends による比較では2つが同じものとして扱われ、別の方法が要る。</p>
<p>テスト用の Equal は、readonly の有無まで区別する厳密な比較である。そこで <code>Pick&lt;T, K&gt;</code> で K のプロパティのみを取り出し、それを Readonly で包んだ型と Equal で比べる。元から readonly なら Readonly を加えた後も型は同じであり、結果は true になる。書き換え可能なら readonly が加わって型が変わり、結果は false になる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type IsReadonlyKey<T, K extends keyof T> =
  Equal<Pick<T, K>, Readonly<Pick<T, K>>>;

interface User {
  readonly id: number;
  name: string;
  readonly tags: string[];
  email?: string;
}

type cases = [
  Expect<Equal<IsReadonlyKey<User, 'id'>, true>>,
  Expect<Equal<IsReadonlyKey<User, 'name'>, false>>,
  Expect<Equal<IsReadonlyKey<User, 'tags'>, true>>,
  Expect<Equal<IsReadonlyKey<User, 'email'>, false>>,
];`,
    blank: `  Equal<Pick<T, K>, Readonly<Pick<T, K>>>;`,
    placeholder: `  // ここに、K のプロパティと、それを Readonly で包んだ型を Equal で比べる式が入る`,
    token: /Equal\s*<\s*Pick\s*<\s*T\s*,\s*K\s*>\s*,\s*Readonly\s*<\s*Pick\s*<\s*T\s*,\s*K\s*>\s*>\s*>/,
    hint: `<code>Equal&lt;Pick&lt;T, K&gt;, Readonly&lt;Pick&lt;T, K&gt;&gt;&gt;</code> と書く。`,
    output: `IsReadonlyKey<User, 'id'>     →  true
IsReadonlyKey<User, 'name'>   →  false
IsReadonlyKey<User, 'tags'>   →  true
IsReadonlyKey<User, 'email'>  →  false

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc2-26',
    phase: '中級：高度な型操作',
    title: 'DeepPick：パスによる深い取り出し',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、<code>'b.d.e'</code> のようなドット区切りのパスで、入れ子のプロパティを構造ごと取り出す DeepPick を実装する。</p>
<p>この課題はオリジナルの課題である。パスに <code>.</code> を含むときは、<code>\`\${infer K}.\${infer Rest}\`</code> で最初のキー K と残りのパス Rest に分ける。K が T のキーなら、キー K の値として <code>DeepPick&lt;T[K], Rest&gt;</code> を持つオブジェクト型を作る。</p>
<p>パスが <code>.</code> を含む形と異なるときは、それが最後のキーである。キー P と値 <code>T[P]</code> を持つオブジェクト型を返す。<code>{ [Q in K]: … }</code> は、キーが K の1つのみのマップ型であり、取り出したキーで新しいオブジェクト型を作る。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type DeepPick<T, P extends string> =
  P extends \`\${infer K}.\${infer Rest}\`
    ? K extends keyof T ? { [Q in K]: DeepPick<T[K], Rest> } : never
    : P extends keyof T ? { [Q in P]: T[P] } : never;

type Obj = {
  a: number;
  b: {
    c: string;
    d: { e: boolean; f: null };
  };
};

type cases = [
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'b.c'>, { b: { c: string } }>>,
  Expect<Equal<DeepPick<Obj, 'b.d.e'>, { b: { d: { e: boolean } } }>>,
  Expect<Equal<DeepPick<Obj, 'x'>, never>>,
];`,
    blank: `    ? K extends keyof T ? { [Q in K]: DeepPick<T[K], Rest> } : never`,
    placeholder: `    // ここに、K が T のキーなら K の値として DeepPick を再び適用するオブジェクト型が入る`,
    token: /\?\s*K\s+extends\s+keyof\s+T\s*\?\s*\{\s*\[\s*\w+\s+in\s+K\s*\]\s*:\s*DeepPick\s*<\s*T\s*\[\s*K\s*\]\s*,\s*Rest\s*>\s*;?\s*\}\s*:\s*never/,
    hint: `<code>? K extends keyof T ? { [Q in K]: DeepPick&lt;T[K], Rest&gt; } : never</code> の形で書く。`,
    output: `DeepPick<Obj, 'a'>      →  { a: number }
DeepPick<Obj, 'b.c'>    →  { b: { c: string } }
DeepPick<Obj, 'b.d.e'>  →  { b: { d: { e: boolean } } }
DeepPick<Obj, 'x'>      →  never

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  }
];

SERIES.tc3 = [
  {
    id: 'tc3-01',
    phase: '上級：型の変換とキー操作',
    title: 'IsAny：any の判定',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、型引数 T が any のときに true、それ以外のときに false を返す IsAny を実装する。</p>
<p>この上級シリーズも、先頭の Equal と Expect で答えを確かめる。Equal は2つの型が完全に一致するときに true になり、Expect は true 以外を受け取ると型エラーになる。</p>
<p>any は、どの型とも互いに代入できる特別な型である。交差型 <code>1 &amp; T</code> は、T がふつうの型なら 1 か never になる。T が any のときに限り、<code>1 &amp; any</code> は any になる。<code>0 extends 1 &amp; T</code> は、右側が any のときに限り真になるため、any を見分ける判定式として働く。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type IsAny<T> = 0 extends 1 & T ? true : false;

type cases = [
  Expect<Equal<IsAny<any>, true>>,
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
];`,
    blank: `type IsAny<T> = 0 extends 1 & T ? true : false;`,
    placeholder: `// ここに、1 & T が any のときに限り真になる判定で IsAny を定義する式が入る`,
    token: /type\s+IsAny\s*<\s*T\s*>\s*=\s*0\s+extends\s+1\s*&\s*T\s*\?\s*true\s*:\s*false/,
    hint: `<code>type IsAny&lt;T&gt; = 0 extends 1 &amp; T ? true : false;</code> と書く。`,
    output: `IsAny<any>        →  true
IsAny<undefined>  →  false
IsAny<unknown>    →  false
IsAny<never>      →  false
IsAny<string>     →  false

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-02',
    phase: '上級：型の変換とキー操作',
    title: 'ToNumber：文字列から数値の型',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、数字の文字列リテラル型を数値リテラル型に変える ToNumber を実装する。</p>
<p>infer には制約を付けられる。<code>infer N extends number</code> と書くと、TypeScript は一致した部分を数値として解釈できるときに限り、N を数値リテラル型として推論する。この書き方は TypeScript 4.8 以降で使える。</p>
<p><code>S extends \`\${infer N extends number}\`</code> は、S 全体が数値として読める文字列のときに真になる。<code>'12'</code> なら N は <code>12</code> になり、<code>'abc'</code> では条件が偽になって never を返す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type ToNumber<S extends string> =
  S extends \`\${infer N extends number}\` ? N : never;

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27.76'>, 27.76>>,
  Expect<Equal<ToNumber<'abc'>, never>>,
];`,
    blank: "  S extends `${infer N extends number}` ? N : never;",
    placeholder: `  // ここに、制約付きの infer で S を数値として読み取る条件型が入る`,
    token: /S\s+extends\s*`\$\{infer\s+(\w+)\s+extends\s+number\}`\s*\?\s*\1\s*:\s*never/,
    hint: `<code>S extends \`\${infer N extends number}\` ? N : never</code> の形で書く。`,
    output: `ToNumber<'0'>      →  0
ToNumber<'5'>      →  5
ToNumber<'12'>     →  12
ToNumber<'27.76'>  →  27.76
ToNumber<'abc'>    →  never

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-03',
    phase: '上級：型の変換とキー操作',
    title: 'UnionToIntersection：union から交差型',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、<code>A | B</code> の形の union を <code>A &amp; B</code> の交差型に変える UnionToIntersection を実装する。</p>
<p>まず分配的条件型で、union の各メンバーを関数の引数の位置に置く。<code>A | B</code> は <code>((arg: A) =&gt; void) | ((arg: B) =&gt; void)</code> になる。</p>
<p>次に、その union から引数の型を infer で取り出す。関数の引数の位置は反変（contravariant）である。反変とは、代入の向きが型の大小関係と逆になる性質である。反変の位置にある1つの infer に複数の候補があるとき、TypeScript はすべての候補を満たす型として交差型を推論する。この結果、<code>A &amp; B</code> が得られる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type UnionToIntersection<U> =
  (U extends any ? (arg: U) => void : never) extends (arg: infer I) => void
    ? I
    : never;

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<{ a: 1 } | { b: 2 }>, { a: 1 } & { b: 2 }>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
];`,
    blank: `  (U extends any ? (arg: U) => void : never) extends (arg: infer I) => void`,
    placeholder: `  // ここに、各メンバーを引数の位置に置いた関数型から、引数の型を infer で取り出す条件が入る`,
    token: /\(\s*U\s+extends\s+(any|unknown)\s*\?\s*\(\s*\w+\s*:\s*U\s*\)\s*=>\s*void\s*:\s*never\s*\)\s*extends\s*\(\s*\w+\s*:\s*infer\s+I\s*\)\s*=>\s*void/,
    hint: `<code>(U extends any ? (arg: U) =&gt; void : never) extends (arg: infer I) =&gt; void</code> の形で書く。`,
    output: `UnionToIntersection<'foo' | 42 | true>    →  never（'foo' & 42 & true と同じ）
UnionToIntersection<{ a: 1 } | { b: 2 }>  →  { a: 1 } & { b: 2 }
UnionToIntersection<(() => 'foo') | ((i: 42) => true)>
  →  (() => 'foo') & ((i: 42) => true)

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-04',
    phase: '上級：型の変換とキー操作',
    title: 'Get：パスによる値の型の取得',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、<code>'foo.bar.count'</code> のようなドット区切りのパスで、入れ子のプロパティの値の型を返す Get を実装する。</p>
<p>Get は、まずパス K 全体が T のキーかどうかを調べる。<code>'foo.baz'</code> のように、ドットを含む名前のキーも存在するためである。K がキーなら <code>T[K]</code> を返す。</p>
<p>K がキー以外のときは、<code>\`\${infer H}.\${infer R}\`</code> で最初のキー H と残りのパス R に分ける。H が T のキーなら、<code>Get&lt;T[H], R&gt;</code> で1段深いオブジェクトに進む。どちらの条件も偽になるパスは never になる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Get<T, K extends string> =
  K extends keyof T
    ? T[K]
    : K extends \`\${infer H}.\${infer R}\`
      ? H extends keyof T ? Get<T[H], R> : never
      : never;

type Data = {
  foo: {
    bar: { value: 'foobar'; count: 6 };
    included: true;
  };
  'foo.baz': false;
  hello: 'world';
};

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,
  Expect<Equal<Get<Data, 'no.existed'>, never>>,
];`,
    blank: `      ? H extends keyof T ? Get<T[H], R> : never`,
    placeholder: `      // ここに、H が T のキーなら残りのパス R で1段深く進む分岐が入る`,
    token: /\?\s*H\s+extends\s+keyof\s+T\s*\?\s*Get\s*<\s*T\s*\[\s*H\s*\]\s*,\s*R\s*>\s*:\s*never/,
    hint: `<code>? H extends keyof T ? Get&lt;T[H], R&gt; : never</code> の形で書く。`,
    output: `Get<Data, 'hello'>          →  'world'
Get<Data, 'foo.bar.count'>  →  6
Get<Data, 'foo.bar'>        →  { value: 'foobar'; count: 6 }
Get<Data, 'foo.baz'>        →  false
Get<Data, 'no.existed'>     →  never

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-05',
    phase: '上級：型の変換とキー操作',
    title: 'OptionalKeys：省略可能なキーの union',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、オブジェクト型のうち省略可能（<code>?</code> 付き）なプロパティのキーを union で返す OptionalKeys を実装する。</p>
<p>省略可能なプロパティの判定には <code>{} extends Pick&lt;T, K&gt;</code> を使う。空のオブジェクト <code>{}</code> は、K が省略可能なときに限り <code>Pick&lt;T, K&gt;</code> に代入できる。K が必須なら、{} には K が欠けているため、条件は偽になる。</p>
<p>キーの再マッピングで、条件が真のキーのみを残したオブジェクト型を作る。最後に keyof でそのキーを union として取り出す。値の型が undefined であっても、省略可能かどうかは <code>?</code> の有無で決まる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type OptionalKeys<T> = keyof {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys<{}>, never>>,
];`,
    blank: `  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];`,
    placeholder: `  // ここに、{} が Pick<T, K> に代入できるキーのみを残すマップ型の本体が入る`,
    token: /\[\s*K\s+in\s+keyof\s+T\s+as\s+\{\s*\}\s*extends\s+Pick\s*<\s*T\s*,\s*K\s*>\s*\?\s*K\s*:\s*never\s*\]/,
    hint: `<code>[K in keyof T as {} extends Pick&lt;T, K&gt; ? K : never]: T[K];</code> の形で書く。`,
    output: `OptionalKeys<{ a: number; b?: string }>        →  'b'
OptionalKeys<{ a: undefined; b?: undefined }>  →  'b'
OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>
  →  'b' | 'c' | 'd'
OptionalKeys<{}>                               →  never

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-06',
    phase: '上級：型の変換とキー操作',
    title: 'RequiredKeys：必須のキーの union',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、オブジェクト型のうち必須のプロパティのキーを union で返す RequiredKeys を実装する。</p>
<p>RequiredKeys は OptionalKeys の条件の結果を入れ替えた型である。<code>{} extends Pick&lt;T, K&gt;</code> が真のキーは省略可能なので never にし、偽のキーを残す。</p>
<p>このように1つの判定式を共有し、真と偽の側を入れ替えると、対になる2つの型を作れる。次の2つのレッスンでは、同じ判定式でオブジェクト型そのものを作る。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type RequiredKeys<T> = keyof {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];
};

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
];`,
    blank: `  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];`,
    placeholder: `  // ここに、{} が Pick<T, K> に代入できるキーを never にするマップ型の本体が入る`,
    token: /\[\s*K\s+in\s+keyof\s+T\s+as\s+\{\s*\}\s*extends\s+Pick\s*<\s*T\s*,\s*K\s*>\s*\?\s*never\s*:\s*K\s*\]/,
    hint: `<code>[K in keyof T as {} extends Pick&lt;T, K&gt; ? never : K]: T[K];</code> の形で書く。`,
    output: `RequiredKeys<{ a: number; b?: string }>        →  'a'
RequiredKeys<{ a: undefined; b?: undefined }>  →  'a'
RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>
  →  'a' | 'c' | 'd'
RequiredKeys<{}>                               →  never

型チェック：cases の 4 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-07',
    phase: '上級：型の変換とキー操作',
    title: 'GetOptional：省略可能なプロパティの抽出',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、オブジェクト型から省略可能なプロパティのみを集めたオブジェクト型を返す GetOptional を実装する。</p>
<p><code>[K in keyof T]</code> の形のマップ型は、元の型のプロパティの修飾子（<code>?</code> や readonly）を引き継ぐ。この性質を準同型（homomorphic）とよぶ。as でキーを絞り込んでも、この性質は保たれる。</p>
<p>GetOptional は OptionalKeys の keyof を外した形である。残ったプロパティは <code>?</code> を引き継ぐため、結果は <code>{ bar?: string }</code> のように省略可能なままになる。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type GetOptional<T> = {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
];`,
    blank: `  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];`,
    placeholder: `  // ここに、省略可能なキーのみを残し、値の型を引き継ぐマップ型の本体が入る`,
    token: /\[\s*K\s+in\s+keyof\s+T\s+as\s+\{\s*\}\s*extends\s+Pick\s*<\s*T\s*,\s*K\s*>\s*\?\s*K\s*:\s*never\s*\]\s*:\s*T\s*\[\s*K\s*\]/,
    hint: `<code>[K in keyof T as {} extends Pick&lt;T, K&gt; ? K : never]: T[K];</code> の形で書く。`,
    output: `GetOptional<{ foo: number; bar?: string }>        →  { bar?: string }
GetOptional<{ foo: undefined; bar?: undefined }>  →  { bar?: undefined }

型チェック：cases の 2 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-08',
    phase: '上級：型の変換とキー操作',
    title: 'GetRequired：必須のプロパティの抽出',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、オブジェクト型から必須のプロパティのみを集めたオブジェクト型を返す GetRequired を実装する。</p>
<p>GetRequired は GetOptional の条件の結果を入れ替えた型である。<code>{} extends Pick&lt;T, K&gt;</code> が偽のキーのみを残す。</p>
<p>準同型のマップ型は修飾子を引き継ぐため、残ったプロパティは必須のままである。この章で使った4つの型は、すべて同じ判定式とキーの再マッピングの組み合わせで書ける。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type GetRequired<T> = {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];
};

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
];`,
    blank: `  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];`,
    placeholder: `  // ここに、必須のキーのみを残し、値の型を引き継ぐマップ型の本体が入る`,
    token: /\[\s*K\s+in\s+keyof\s+T\s+as\s+\{\s*\}\s*extends\s+Pick\s*<\s*T\s*,\s*K\s*>\s*\?\s*never\s*:\s*K\s*\]\s*:\s*T\s*\[\s*K\s*\]/,
    hint: `<code>[K in keyof T as {} extends Pick&lt;T, K&gt; ? never : K]: T[K];</code> の形で書く。`,
    output: `GetRequired<{ foo: number; bar?: string }>        →  { foo: number }
GetRequired<{ foo: undefined; bar?: undefined }>  →  { foo: undefined }

型チェック：cases の 2 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-09',
    phase: '上級：応用的な型操作',
    title: 'Without：指定の値の除外',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、タプル T から U に含まれる値をすべて取り除いたタプルを返す Without を実装する。</p>
<p>U は1つの値でも、値のタプルでもよい。補助型 ToUnion は、U がタプルなら <code>U[number]</code> で要素の union に変え、それ以外ならそのまま返す。これで「除く値の集合」を1つの union で表せる。</p>
<p>Without はタプルを先頭 F と残り R に分ける。F が除く値の union に含まれるなら F を捨てて R の処理に進み、それ以外なら F を先頭に残す。この処理は Flatten と同じく、タプルを1要素ごとに組み立て直す再帰型である。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type ToUnion<U> = U extends any[] ? U[number] : U;

type Without<T extends any[], U> =
  T extends [infer F, ...infer R]
    ? F extends ToUnion<U> ? Without<R, U> : [F, ...Without<R, U>]
    : [];

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
];`,
    blank: `    ? F extends ToUnion<U> ? Without<R, U> : [F, ...Without<R, U>]`,
    placeholder: `    // ここに、F が除く値なら捨て、それ以外なら先頭に残す分岐が入る`,
    token: /\?\s*F\s+extends\s+ToUnion\s*<\s*U\s*>\s*\?\s*Without\s*<\s*R\s*,\s*U\s*>\s*:\s*\[\s*F\s*,\s*\.\.\.Without\s*<\s*R\s*,\s*U\s*>\s*\]/,
    hint: `<code>? F extends ToUnion&lt;U&gt; ? Without&lt;R, U&gt; : [F, ...Without&lt;R, U&gt;]</code> の形で書く。`,
    output: `Without<[1, 2], 1>                       →  [2]
Without<[1, 2, 4, 1, 5], [1, 2]>         →  [4, 5]
Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>  →  []

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-10',
    phase: '上級：応用的な型操作',
    title: 'TupleToEnum：タプルから列挙オブジェクト',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、文字列のタプルから、先頭を大文字にした名前をキーに持つ読み取り専用オブジェクトを作る TupleToEnum を実装する。</p>
<p>タプル型の keyof には、<code>'0'</code>、<code>'1'</code> のような位置の文字列のほかに、length や配列のメソッド名も含まれる。as の中で <code>K extends \`\${number}\`</code> を検査すると、位置を表すキーのみを残せる。<code>\`\${number}\`</code> は、数値として読める文字列の全体を表すテンプレートリテラル型である。</p>
<p>キーの名前は <code>Capitalize&lt;T[K] &amp; string&gt;</code> で作る。<code>&amp; string</code> は T[K] を文字列に絞り込むための交差型である。値は、2つ目の型引数 N が true なら位置 K を数値に変えたもの、それ以外なら元の文字列 T[K] にする。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type TupleToEnum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in keyof T as K extends \`\${number}\` ? Capitalize<T[K] & string> : never]:
    N extends true ? (K extends \`\${infer I extends number}\` ? I : never) : T[K];
};

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const;

type cases = [
  Expect<Equal<TupleToEnum<[]>, {}>>,
  Expect<Equal<
    TupleToEnum<typeof OperatingSystem>,
    { readonly MacOS: 'macOS'; readonly Windows: 'Windows'; readonly Linux: 'Linux' }
  >>,
  Expect<Equal<
    TupleToEnum<typeof OperatingSystem, true>,
    { readonly MacOS: 0; readonly Windows: 1; readonly Linux: 2 }
  >>,
];`,
    blank: "  readonly [K in keyof T as K extends `${number}` ? Capitalize<T[K] & string> : never]:",
    placeholder: `  // ここに、位置を表すキーのみを残し、要素の先頭を大文字にした名前に置き換えるキーの部分が入る`,
    token: /readonly\s*\[\s*K\s+in\s+keyof\s+T\s+as\s+K\s+extends\s*`\$\{number\}`\s*\?\s*Capitalize\s*<\s*T\s*\[\s*K\s*\]\s*&\s*string\s*>\s*:\s*never\s*\]\s*:/,
    hint: `<code>readonly [K in keyof T as K extends \`\${number}\` ? Capitalize&lt;T[K] &amp; string&gt; : never]:</code> の形で書く。`,
    output: `TupleToEnum<[]>  →  {}
TupleToEnum<typeof OperatingSystem>
  →  { readonly MacOS: 'macOS'; readonly Windows: 'Windows'; readonly Linux: 'Linux' }
TupleToEnum<typeof OperatingSystem, true>
  →  { readonly MacOS: 0; readonly Windows: 1; readonly Linux: 2 }

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-11',
    phase: '上級：応用的な型操作',
    title: 'CamelCase：キャメルケースへの変換',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、<code>foo-bar-baz</code> のようなケバブケースの文字列を <code>fooBarBaz</code> のキャメルケースに変える CamelCase を実装する。</p>
<p>CamelCase は KebabCase の逆の変換である。<code>\`\${infer L}-\${infer R}\`</code> で、最初のハイフンの手前 L と後ろ R に分ける。</p>
<p>R の先頭が小文字なら、ハイフンを消して R の先頭を Capitalize で大文字にする。R がすでに大文字で始まるとき（<code>R extends Capitalize&lt;R&gt;</code> が真のとき）は、ハイフンを残す。<code>foo-Bar</code> の形は元の文字を保つ決まりにするためである。どちらの場合も残りの部分に CamelCase を再び適用する。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type CamelCase<S extends string> =
  S extends \`\${infer L}-\${infer R}\`
    ? R extends Capitalize<R>
      ? \`\${L}-\${CamelCase<R>}\`
      : \`\${L}\${CamelCase<Capitalize<R>>}\`
    : S;

type cases = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'foobarbaz'>, 'foobarbaz'>>,
  Expect<Equal<CamelCase<'foo-Bar'>, 'foo-Bar'>>,
  Expect<Equal<CamelCase<'foo--bar'>, 'foo-Bar'>>,
  Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase<''>, ''>>,
];`,
    blank: "      : `${L}${CamelCase<Capitalize<R>>}`",
    placeholder: `      // ここに、ハイフンを消して R の先頭を大文字にし、CamelCase を再び適用する文字列の型が入る`,
    token: /:\s*`\$\{L\}\$\{CamelCase\s*<\s*Capitalize\s*<\s*R\s*>\s*>\}`/,
    hint: `<code>: \`\${L}\${CamelCase&lt;Capitalize&lt;R&gt;&gt;}\`</code> の形で書く。`,
    output: `CamelCase<'foo-bar-baz'>  →  'fooBarBaz'
CamelCase<'foobarbaz'>    →  'foobarbaz'
CamelCase<'foo-Bar'>      →  'foo-Bar'
CamelCase<'foo--bar'>     →  'foo-Bar'
CamelCase<'a-b-c'>        →  'aBC'
CamelCase<''>             →  ''

型チェック：cases の 6 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-12',
    phase: '上級：応用的な型操作',
    title: 'Currying：カリー化の型',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、複数の引数を取る関数を、引数を1つずつ受け取る関数の連なりに変える Currying の型を宣言する。</p>
<p>カリー化（currying）は、<code>(a, b, c) =&gt; r</code> の関数を <code>(a) =&gt; (b) =&gt; (c) =&gt; r</code> の形に変える変換である。補助型 Curried は、引数のタプル A を先頭 F と残り Rest に分け、F を受け取って Curried&lt;Rest, R&gt; を返す関数型を作る。Rest が空になった時点で戻り値の型 R を返す。</p>
<p>Currying は関数の型 F 全体を型引数で受け取り、infer で引数のタプル A と戻り値の型 R を取り出す。引数が0個の関数は、Curried に渡すと R そのものになる。そこで戻り値の型では、まず <code>A extends []</code> を検査し、0個のときは <code>() =&gt; R</code> を返す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
type Curried<A extends unknown[], R> =
  A extends [infer F, ...infer Rest] ? (arg: F) => Curried<Rest, R> : R;

declare function Currying<F>(
  fn: F
): F extends (...args: infer A) => infer R
  ? A extends [] ? () => R : Curried<A, R>
  : never;

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true);
const curried3 = Currying(() => true);

type cases = [
  Expect<Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>>,
  Expect<Equal<typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true>>,
  Expect<Equal<typeof curried3, () => true>>,
];`,
    blank: `  A extends [infer F, ...infer Rest] ? (arg: F) => Curried<Rest, R> : R;`,
    placeholder: `  // ここに、先頭の引数 F を受け取り、残りの引数で Curried を作る関数型を返す条件型が入る`,
    token: /A\s+extends\s*\[\s*infer\s+(\w+)\s*,\s*\.\.\.infer\s+(\w+)\s*\]\s*\?\s*\(\s*\w+\s*:\s*\1\s*\)\s*=>\s*Curried\s*<\s*\2\s*,\s*R\s*>\s*:\s*R/,
    hint: `<code>A extends [infer F, ...infer Rest] ? (arg: F) =&gt; Curried&lt;Rest, R&gt; : R</code> の形で書く。`,
    output: `typeof curried1  →  (a: string) => (b: number) => (c: boolean) => true
typeof curried2  →  (a: string) => (b: number) => (c: boolean) => (d: boolean)
                    => (e: boolean) => (f: string) => (g: boolean) => true
typeof curried3  →  () => true

型チェック：cases の 3 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-13',
    phase: '上級：応用的な型操作',
    title: 'DeepObjectToUniq：構造の同じ型の区別',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、構造が同じでも置かれた場所が異なるオブジェクト型を、別の型として区別できるようにする DeepObjectToUniq を実装する。</p>
<p>TypeScript の型の比較は構造的型付け（structural typing）である。構造的型付けとは、型の名前よりもプロパティの形で型の一致を判定する方式である。このため Foo の baz と bar がともに Quz なら、2つは同じ型として扱われる。</p>
<p>unique symbol は、宣言ごとに唯一の型を持つシンボルの型である。DeepObjectToUniq は、オブジェクト型の各階層に <code>[KEY]?: [O, K]</code> という省略可能な目印を加える。目印には「親の型 O」と「キー K」が入るため、置かれた場所ごとに型が異なる。目印は省略可能なので、元の型の値との代入は両方向とも成り立つ。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 学習者が実装する型
declare const KEY: unique symbol;

type DeepObjectToUniq<O extends object> = {
  [K in keyof O]: O[K] extends object
    ? DeepObjectToUniq<O[K]> & { readonly [KEY]?: [O, K] }
    : O[K];
} & { readonly [KEY]?: O };

type Quz = { quz: 4 };
type Foo = { foo: 2; baz: Quz; bar: Quz };
type UniqFoo = DeepObjectToUniq<Foo>;

declare let foo: Foo;
declare let uniqFoo: UniqFoo;
uniqFoo = foo;
foo = uniqFoo;

type cases = [
  Expect<Equal<Equal<UniqFoo, Foo>, false>>,
  Expect<Equal<UniqFoo['foo'], 2>>,
  Expect<Equal<UniqFoo['bar']['quz'], 4>>,
  Expect<Equal<Equal<UniqFoo['bar'], UniqFoo['baz']>, false>>,
  Expect<Equal<keyof Foo, keyof UniqFoo & string>>,
];`,
    blank: `    ? DeepObjectToUniq<O[K]> & { readonly [KEY]?: [O, K] }`,
    placeholder: `    // ここに、値のオブジェクトにも DeepObjectToUniq を適用し、親の型とキーの目印を加える型が入る`,
    token: /\?\s*DeepObjectToUniq\s*<\s*O\s*\[\s*K\s*\]\s*>\s*&\s*\{\s*(readonly\s+)?\[\s*KEY\s*\]\s*\?\s*:\s*\[\s*O\s*,\s*K\s*\]\s*;?\s*\}/,
    hint: `<code>? DeepObjectToUniq&lt;O[K]&gt; &amp; { readonly [KEY]?: [O, K] }</code> の形で書く。`,
    output: `Equal<UniqFoo, Foo>                     →  false
UniqFoo['foo']                          →  2
UniqFoo['bar']['quz']                   →  4
Equal<UniqFoo['bar'], UniqFoo['baz']>   →  false
keyof UniqFoo & string                  →  'foo' | 'baz' | 'bar'
uniqFoo = foo / foo = uniqFoo           →  どちらも代入可能

型チェック：cases の 5 件がすべて true（エラー 0 件）`
  },
  {
    id: 'tc3-14',
    phase: '上級：応用的な型操作',
    title: 'Sum：大きな整数の足し算',
    type: 'code',
    run: 'static',
    file: 'main.ts',
    story: `<p class="lead">学習者は、2つの非負整数を受け取り、その和を文字列リテラル型で返す Sum を実装する。</p>
<p>タプルの length を使う足し算は、再帰の深さに上限があるため、大きな数では型エラーになる。そこで Sum は筆算と同じ手順をとる。2つの数を文字列にして逆順に並べ、1の位から1桁ずつ足す。Tuple&lt;D&gt; は1桁の数字 D を、その個数の要素を持つタプルに変える補助型である。</p>
<p>Step は、2つの桁と繰り上がり C のタプルをつなげ、合計の要素が10個以上かどうかを調べる。10個以上なら先頭の10個を取り除いた残りの長さをその桁の数字にし、次の桁へ繰り上がり <code>[0]</code> を渡す。10個未満なら合計の長さをそのまま桁の数字にする。最後に Reverse で文字列を元の順に戻す。</p>`,
    code: `// テスト用の補助型
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// 補助型：文字列の反転と、1桁の数字からタプルへの変換
type Reverse<S extends string> =
  S extends \`\${infer F}\${infer R}\` ? \`\${Reverse<R>}\${F}\` : '';
type Tuple<D extends string, Acc extends 0[] = []> =
  \`\${Acc['length']}\` extends D ? Acc : Tuple<D, [...Acc, 0]>;

// 学習者が実装する型
type Step<A extends string, B extends string, AR extends string, BR extends string, C extends 0[]> =
  [...Tuple<A>, ...Tuple<B>, ...C] extends [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...infer Rest extends 0[]]
    ? \`\${Rest['length']}\${AddRev<AR, BR, [0]>}\`
    : \`\${[...Tuple<A>, ...Tuple<B>, ...C]['length'] & number}\${AddRev<AR, BR>}\`;

type AddRev<A extends string, B extends string, C extends 0[] = []> =
  A extends \`\${infer a}\${infer AR}\`
    ? B extends \`\${infer b}\${infer BR}\` ? Step<a, b, AR, BR, C> : Step<a, '0', AR, '', C>
    : B extends \`\${infer b}\${infer BR}\` ? Step<'0', b, '', BR, C>
    : C extends [0] ? '1' : '';

type Sum<A extends string | number | bigint, B extends string | number | bigint> =
  Reverse<AddRev<Reverse<\`\${A}\`>, Reverse<\`\${B}\`>>>;

type cases = [
  Expect<Equal<Sum<2, 3>, '5'>>,
  Expect<Equal<Sum<'13', '21'>, '34'>>,
  Expect<Equal<Sum<'328', 7>, '335'>>,
  Expect<Equal<Sum<9999, 1>, '10000'>>,
  Expect<Equal<Sum<0, 0>, '0'>>,
  Expect<Equal<Sum<1_000_000_000_000n, '123'>, '1000000000123'>>,
  Expect<Equal<Sum<'999999999999999999', 1>, '1000000000000000000'>>,
];`,
    blank: "    ? `${Rest['length']}${AddRev<AR, BR, [0]>}`",
    placeholder: `    // ここに、10 を超えた分をこの桁の数字にし、次の桁へ繰り上がり [0] を渡す文字列の型が入る`,
    token: /\?\s*`\$\{Rest\s*\[\s*["']length["']\s*\]\}\$\{AddRev\s*<\s*AR\s*,\s*BR\s*,\s*\[\s*0\s*\]\s*>\}`/,
    hint: `<code>? \`\${Rest['length']}\${AddRev&lt;AR, BR, [0]&gt;}\`</code> の形で書く。Rest は10個を取り除いた残りの要素である。`,
    output: `Sum<2, 3>                            →  '5'
Sum<'13', '21'>                      →  '34'
Sum<'328', 7>                        →  '335'
Sum<9999, 1>                         →  '10000'
Sum<0, 0>                            →  '0'
Sum<1_000_000_000_000n, '123'>       →  '1000000000123'
Sum<'999999999999999999', 1>         →  '1000000000000000000'

型チェック：cases の 7 件がすべて true（エラー 0 件）`
  }
];
