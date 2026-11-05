SERIES.swift = [
  {
    id: 'swift-01',
    phase: 'Swift の基礎',
    title: 'Swift の概要と Playground',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は print を使い、Xcode のコンソールに文字を表示する。</p>
<p>Swift は、Apple が開発したプログラミング言語である。iPhone、iPad、Mac のアプリの開発に使われる。Swift は安全性と読みやすさを重視して設計されている。</p>
<p>Playground は、書いたコードをその場で実行し、結果をすぐに確かめる Xcode の機能である。学習者は Playground で短いコードを試し、Swift の動きを確認する。</p>
<p>print は、かっこの中の値をコンソールに表示する関数である。文字列は <code>"</code> で囲む。Swift はコードを上の行から順に実行する。</p>
<pre>print("こんにちは")</pre>`,
    code: `// Swift はコードを上の行から順に実行する
print("Hello, Swift")
print("BEAST CODE")
`,
    blank: 'print("Hello, Swift")',
    placeholder: '// 文字列 Hello, Swift を表示する print の行',
    token: /print\(\s*"Hello, Swift"\s*\)/,
    hint: '<code>print("Hello, Swift")</code> と書く。文字列は <code>"</code> で囲む。',
    output: `Hello, Swift
BEAST CODE`
  },
  {
    id: 'swift-02',
    phase: 'Swift の基礎',
    title: '変数と定数（var, let）',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は var で変数を、let で定数を作り、値を表示する。</p>
<p>変数は、値に名前をつけて保存する箱である。var で作った変数は、後から別の値を代入して変更できる。</p>
<p>定数は、一度決めた値を固定する箱である。let で作る。定数に別の値を代入すると、コンパイラはエラーを出す。Swift では、変更の予定がある値に限り var を使い、それ以外は let を使う書き方が推奨される。</p>
<pre>var score = 10   // 変更可能
let name = "Aoi" // 固定</pre>
<p>Swift は、代入された値から型を自動で決める。この仕組みを型推論という。10 は Int（整数）、"Aoi" は String（文字列）になる。</p>`,
    code: `var score = 10
score = score + 5
let name = "Aoi"
print(name)
print(score)
`,
    blank: 'let name = "Aoi"',
    placeholder: '// 定数 name を作り、文字列 Aoi を入れる行',
    token: /let\s+name\s*=\s*"Aoi"/,
    hint: '定数は <code>let</code> で作る。<code>let name = "Aoi"</code> と書く。',
    output: `Aoi
15`
  },
  {
    id: 'swift-03',
    phase: 'Swift の基礎',
    title: '数値と計算',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は Int と Double を使い、四則演算と余りの計算を行う。</p>
<p>Int は整数を表す型であり、Double は小数を含む数を表す型である。Swift の算術演算子は <code>+</code>（足し算）、<code>-</code>（引き算）、<code>*</code>（掛け算）、<code>/</code>（割り算）、<code>%</code>（余り）である。</p>
<p>Swift では、Int と Double を組み合わせる計算の前に、型をそろえる必要がある。<code>Double(total)</code> は Int の値を Double に変換する。Int 同士の割り算は、小数点以下を切り捨てた整数になる。</p>
<pre>let a = 7 / 2          // 3
let b = 7.0 / 2.0      // 3.5</pre>`,
    code: `let price = 480
let count = 3
let total = price * count
print(total)

let half = Double(total) / 2.0
print(half)

print(total % 100)
`,
    blank: 'let total = price * count',
    placeholder: '// price と count を掛けた値を定数 total に入れる行',
    token: /let\s+total\s*=\s*price\s*\*\s*count/,
    hint: '掛け算は <code>*</code> を使う。<code>let total = price * count</code> と書く。',
    output: `1440
720.0
40`
  },
  {
    id: 'swift-04',
    phase: 'Swift の基礎',
    title: '文字列',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は文字列補間を使い、変数の値を文字列の中に埋め込む。</p>
<p>文字列補間は、文字列の中に <code>\\(値)</code> と書き、その位置に値を埋め込む仕組みである。数値も自動で文字列に変換される。</p>
<pre>let age = 15
print("年齢は \\(age)")   // 年齢は 15</pre>
<p>文字列同士は <code>+</code> で連結できる。<code>count</code> は、文字列の文字数を返すプロパティである。プロパティは、値が持つ情報を取り出すための名前である。</p>`,
    code: `let name = "Aoi"
let age = 15
let message = "\\(name) は \\(age) 歳"
print(message)

print("Swift" + "UI")
print(message.count)
`,
    blank: 'let message = "\\(name) は \\(age) 歳"',
    placeholder: '// name と age を埋め込んだ文字列を定数 message に入れる行',
    token: /let\s+message\s*=\s*"\\\(\s*name\s*\)\s*は\s*\\\(\s*age\s*\)\s*歳"/,
    hint: '<code>let message = "\\(name) は \\(age) 歳"</code> と書く。<code>\\( )</code> の中に変数名を入れる。',
    output: `Aoi は 15 歳
SwiftUI
10`
  },
  {
    id: 'swift-05',
    phase: 'Swift の基礎',
    title: '条件分岐（if, switch）',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は if と switch を使い、値に応じて異なる処理を実行する。</p>
<p>if 文は、条件が true（真）のときに限り、続く <code>{ }</code> の中を実行する。<code>else if</code> は次の条件を調べ、<code>else</code> は残りのすべての場合を受け持つ。Swift の if では、条件を囲むかっこを省略する。</p>
<p>switch 文は、1つの値をいくつかの候補と比べ、一致した <code>case</code> の処理を実行する。Swift の switch は、すべての可能性を網羅する必要がある。<code>default</code> は、残りのすべての値を受け持つ。</p>
<pre>switch weather {
case "sunny":
    print("散歩に行く")
default:
    print("天気を確認する")
}</pre>`,
    code: `let score = 72
if score >= 80 {
    print("A")
} else if score >= 60 {
    print("B")
} else {
    print("C")
}

let weather = "rain"
switch weather {
case "sunny":
    print("散歩に行く")
case "rain":
    print("傘を持つ")
default:
    print("天気を確認する")
}
`,
    blank: '} else if score >= 60 {',
    placeholder: '// score が 60 以上かを調べる else if の行',
    token: /\}\s*else\s+if\s+score\s*>=\s*60\s*\{/,
    hint: '<code>} else if score &gt;= 60 {</code> と書く。',
    output: `B
傘を持つ`
  },
  {
    id: 'swift-06',
    phase: 'Swift の基礎',
    title: '繰り返し処理（for-in, while）',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は for-in と while を使い、同じ処理を繰り返す。</p>
<p>for-in 文は、範囲や配列の要素を順に取り出し、そのたびに <code>{ }</code> の中を実行する。<code>1...3</code> は 1 から 3 までを含む範囲である。<code>1..&lt;3</code> は 3 の手前で止まる範囲であり、1 と 2 を表す。</p>
<p>while 文は、条件が true の間、処理を繰り返す。学習者は、条件がいつか false になるように、ループの中で値を変更する。<code>energy -= 1</code> は、energy から 1 を引いて代入する書き方である。</p>`,
    code: `for i in 1...3 {
    print("\\(i) 回目")
}

var energy = 3
while energy > 0 {
    print("残り \\(energy)")
    energy -= 1
}
print("終了")
`,
    blank: 'for i in 1...3 {',
    placeholder: '// i に 1 から 3 までを順に入れて繰り返す for-in の行',
    token: /for\s+i\s+in\s+1\s*\.\.\.\s*3\s*\{/,
    hint: '<code>for i in 1...3 {</code> と書く。',
    output: `1 回目
2 回目
3 回目
残り 3
残り 2
残り 1
終了`
  },
  {
    id: 'swift-07',
    phase: 'Swift の基礎',
    title: '配列',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は配列を作り、要素の追加・取り出し・繰り返しを行う。</p>
<p>配列は、同じ型の値を順番に並べて保存する入れ物である。<code>[ ]</code> の中に値をコンマで区切って書く。<code>["apple", "banana"]</code> は String の配列であり、型は <code>[String]</code> と表す。</p>
<p>配列の要素には、0 から始まる番号（インデックス）がつく。<code>fruits[0]</code> は先頭の要素を表す。<code>append</code> は配列の末尾に要素を追加するメソッドであり、<code>count</code> は要素の数を返す。メソッドは、値に結びついた関数である。</p>
<p>要素を追加する配列は var で作る。let の配列は内容が固定される。</p>`,
    code: `var fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits[0])
print(fruits.count)

for fruit in fruits {
    print(fruit)
}
`,
    blank: 'fruits.append("cherry")',
    placeholder: '// 配列 fruits の末尾に cherry を追加する行',
    token: /fruits\.append\(\s*"cherry"\s*\)/,
    hint: '<code>fruits.append("cherry")</code> と書く。',
    output: `apple
3
apple
banana
cherry`
  },
  {
    id: 'swift-08',
    phase: 'Swift の基礎',
    title: 'Optional（?, if let, guard let, ??）',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は Optional の値を if let・guard let・?? で安全に取り出す。</p>
<p>Optional は、値が入っている状態と nil（値が空の状態）のどちらかを持つ型である。型名の後ろに <code>?</code> をつけて表す。<code>Int("42")</code> は、文字列が数の形のときに限り Int を返し、それ以外のときは nil を返す。そのため結果の型は <code>Int?</code> になる。</p>
<p><code>if let</code> は、Optional に値があるときに限り、その値を新しい定数に入れて <code>{ }</code> の中を実行する。<code>guard let</code> は、値が nil のときに <code>else</code> の処理で早めに抜け出し、以降の行で値を使う書き方である。</p>
<p><code>??</code> は、Optional が nil のときの代わりの値を指定する演算子である。</p>
<pre>let nickname: String? = nil
print(nickname ?? "ゲスト")   // ゲスト</pre>`,
    code: `let input = "42"
let number: Int? = Int(input)

if let value = number {
    print("数値は \\(value)")
}

let inputs = ["10", "abc", "7"]
for text in inputs {
    guard let n = Int(text) else {
        print("\\(text) をスキップ")
        continue
    }
    print(n * 2)
}

let nickname: String? = nil
print(nickname ?? "ゲスト")
`,
    blank: 'if let value = number {',
    placeholder: '// number に値があるとき、その値を value に入れる if let の行',
    token: /if\s+let\s+value\s*=\s*number\s*\{/,
    hint: '<code>if let value = number {</code> と書く。',
    output: `数値は 42
20
abc をスキップ
14
ゲスト`
  },
  {
    id: 'swift-09',
    phase: 'Swift の基礎',
    title: '辞書',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は辞書を使い、キーと値の組でデータを管理する。</p>
<p>辞書（Dictionary）は、キーと値を組にして保存する入れ物である。<code>["apple": 5]</code> のように、キーと値をコロンでつなぐ。キーを指定すると、対応する値を取り出せる。</p>
<p><code>stock["cherry"] = 8</code> は、キー cherry に値 8 を登録する。同じキーがすでにある場合は、値を上書きする。</p>
<p>辞書から値を取り出すと、結果は Optional になる。未登録のキーを指定した場合に nil が返るためである。学習者は前のレッスンの <code>??</code> を使い、代わりの値を決める。</p>
<p>辞書の要素の並び順は、実行のたびに変わる場合がある。そのため、学習者は <code>keys.sorted()</code> でキーを並べ替えてから値を取り出す。</p>`,
    code: `var stock = ["apple": 5, "banana": 2]
stock["cherry"] = 8
stock["apple"] = 4

print(stock["apple"] ?? 0)
print(stock["melon"] ?? 0)

for key in stock.keys.sorted() {
    print("\\(key): \\(stock[key] ?? 0)")
}
`,
    blank: 'stock["cherry"] = 8',
    placeholder: '// キー cherry に値 8 を登録する行',
    token: /stock\[\s*"cherry"\s*\]\s*=\s*8/,
    hint: '<code>stock["cherry"] = 8</code> と書く。',
    output: `4
0
apple: 4
banana: 2
cherry: 8`
  },
  {
    id: 'swift-10',
    phase: 'Swift の基礎',
    title: '関数',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は func で関数を定義し、引数と戻り値を使う。</p>
<p>関数は、一連の処理にまとめて名前をつけたものである。<code>func</code> で定義し、呼び出しの時点で中の処理が実行される。引数は関数に渡す値であり、戻り値は関数が <code>return</code> で返す値である。戻り値の型は <code>-&gt;</code> の後ろに書く。</p>
<p>Swift の引数には、呼び出し側で使う名前（引数ラベル）がある。<code>greet(name: "Aoi")</code> のように、ラベルを書いて呼び出す。引数名の前に <code>_</code> を置くと、ラベルを省略した呼び出し方になる。</p>
<pre>func add(_ a: Int, _ b: Int) -&gt; Int
add(3, 4)</pre>`,
    code: `func greet(name: String) -> String {
    return "こんにちは、\\(name)"
}

func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

print(greet(name: "Aoi"))
print(add(3, 4))
`,
    blank: 'func add(_ a: Int, _ b: Int) -> Int {',
    placeholder: '// ラベルを省略した Int の引数 a と b を受け取り、Int を返す関数 add の定義の行',
    token: /func\s+add\s*\(\s*_\s+a\s*:\s*Int\s*,\s*_\s+b\s*:\s*Int\s*\)\s*->\s*Int\s*\{/,
    hint: '<code>func add(_ a: Int, _ b: Int) -&gt; Int {</code> と書く。',
    output: `こんにちは、Aoi
7`
  },
  {
    id: 'swift-11',
    phase: 'Swift の基礎',
    title: '構造体',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は struct で商品を表す構造体を定義し、そのインスタンスを作る。</p>
<p>構造体は、関係するいくつかの値と処理を1つの型にまとめる仕組みである。<code>struct</code> で定義する。構造体の中の変数や定数をプロパティ、関数をメソッドと呼ぶ。</p>
<p>インスタンスは、型をもとに作った具体的な値である。Swift は構造体に対して、すべてのプロパティを引数に持つイニシャライザを自動で用意する。イニシャライザは、インスタンスを作るときに呼ばれる処理である。</p>
<pre>Item(name: "コーヒー", price: 400)</pre>
<p>let で定義したプロパティは固定され、var で定義したプロパティは後から変更できる。変更するインスタンス自体も var で作る。</p>`,
    code: `struct Item {
    let name: String
    var price: Int

    func label() -> String {
        return "\\(name)（\\(price) 円）"
    }
}

var coffee = Item(name: "コーヒー", price: 400)
print(coffee.label())
coffee.price = 450
print(coffee.label())
`,
    blank: 'var price: Int',
    placeholder: '// 変更可能な Int のプロパティ price を定義する行',
    token: /var\s+price\s*:\s*Int/,
    hint: '後から変更するプロパティは var で定義する。<code>var price: Int</code> と書く。',
    output: `コーヒー（400 円）
コーヒー（450 円）`
  },
  {
    id: 'swift-12',
    phase: 'Swift の基礎',
    title: 'enum による状態の表現',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は enum で注文の状態を表し、switch で状態ごとの文章を返す。</p>
<p>enum（列挙型）は、取りうる値の候補をあらかじめ並べて定義する型である。それぞれの候補を case と呼ぶ。注文の状態のように、値の種類が決まっているデータに適している。</p>
<p>型が明らかな場所では、<code>OrderStatus.done</code> を <code>.done</code> と短く書ける。enum を switch で調べるとき、すべての case を書けば default を省略できる。後から case を追加すると、コンパイラが対応の漏れを知らせる。</p>`,
    code: `enum OrderStatus {
    case waiting
    case cooking
    case done
}

func message(for status: OrderStatus) -> String {
    switch status {
    case .waiting:
        return "受付済み"
    case .cooking:
        return "調理中"
    case .done:
        return "完成"
    }
}

var status = OrderStatus.waiting
print(message(for: status))
status = .cooking
print(message(for: status))
status = .done
print(message(for: status))
`,
    blank: 'case .cooking:\n        return "調理中"',
    placeholder: '// cooking の場合に文字列 調理中 を返す case',
    token: /case\s+\.cooking\s*:\s*return\s+"調理中"/,
    hint: '<code>case .cooking:</code> の次の行に <code>return "調理中"</code> と書く。',
    output: `受付済み
調理中
完成`
  },
  {
    id: 'swift-13',
    phase: 'Swift の基礎',
    title: 'クロージャ',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者はクロージャを定義し、関数の引数として渡す。</p>
<p>クロージャは、名前を持つ関数と同じく処理をまとめたもので、変数に入れたり引数として渡したりできる値である。<code>{ (引数) -&gt; 戻り値の型 in 処理 }</code> の形で書く。<code>in</code> の後ろが処理の本体である。</p>
<p>関数の最後の引数がクロージャの場合、かっこの外に <code>{ }</code> を書く省略形が使える。この書き方をトレイリングクロージャという。</p>
<pre>repeatTask(times: 3) { i in
    print(i)
}</pre>
<p><code>(Int) -&gt; Void</code> は「Int を受け取り、空の戻り値を返す関数」の型である。Void は戻り値が空であることを表す。</p>`,
    code: `let double = { (n: Int) -> Int in
    return n * 2
}
print(double(5))

func repeatTask(times: Int, task: (Int) -> Void) {
    for i in 1...times {
        task(i)
    }
}

repeatTask(times: 3) { i in
    print("\\(i) 回目の処理")
}
`,
    blank: 'let double = { (n: Int) -> Int in',
    placeholder: '// Int の n を受け取り Int を返すクロージャを定数 double に入れる行',
    token: /let\s+double\s*=\s*\{\s*\(\s*n\s*:\s*Int\s*\)\s*->\s*Int\s+in/,
    hint: '<code>let double = { (n: Int) -&gt; Int in</code> と書く。',
    output: `10
1 回目の処理
2 回目の処理
3 回目の処理`
  },
  {
    id: 'swift-14',
    phase: 'Swift の基礎',
    title: 'コレクション操作（map, filter, reduce, sorted）',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は map・filter・reduce・sorted を使い、配列をまとめて加工する。</p>
<p>これらのメソッドは、クロージャを受け取り、配列の各要素に処理を適用する。クロージャの中の <code>$0</code> と <code>$1</code> は、1番目と2番目の引数を表す省略記法である。</p>
<ul>
<li><code>map</code> は、各要素を変換した新しい配列を返す。</li>
<li><code>filter</code> は、条件が true になる要素を集めた配列を返す。</li>
<li><code>reduce</code> は、初期値から始めて要素を順番に合わせ、1つの値にまとめる。<code>$0</code> がそれまでの結果、<code>$1</code> が現在の要素である。</li>
<li><code>sorted</code> は、比較の規則に従って並べ替えた配列を返す。</li>
</ul>
<p>どのメソッドも元の配列をそのまま残し、結果を新しい配列や値として返す。</p>`,
    code: `let prices = [300, 450, 120, 600]

let withTax = prices.map { $0 * 110 / 100 }
print(withTax)

let expensive = prices.filter { $0 >= 400 }
print(expensive)

let total = prices.reduce(0) { $0 + $1 }
print(total)

let ordered = prices.sorted { $0 > $1 }
print(ordered)
`,
    blank: 'let total = prices.reduce(0) { $0 + $1 }',
    placeholder: '// reduce で prices の合計を求め、定数 total に入れる行',
    token: /prices\.reduce\(\s*0\s*\)\s*\{\s*\$0\s*\+\s*\$1\s*\}/,
    hint: '<code>let total = prices.reduce(0) { $0 + $1 }</code> と書く。',
    output: `[330, 495, 132, 660]
[450, 600]
1470
[600, 450, 300, 120]`
  },
  {
    id: 'swift-15',
    phase: '演習',
    title: 'カフェの注文集計',
    type: 'code',
    run: 'static',
    file: 'main.swift',
    story: `<p class="lead">学習者は注文の構造体の配列から、合計金額と品目ごとの個数を集計する。</p>
<p>この演習では、これまでに学んだ構造体・配列・reduce・辞書を組み合わせる。Order 構造体は、品目名・単価・個数を持つ。注文の一覧は Order の配列で表す。</p>
<p>合計金額は、reduce で「単価 × 個数」を足し合わせて求める。品目ごとの個数は、品目名をキー、個数を値とする辞書に集める。</p>
<p><code>counts[order.item, default: 0]</code> は、キーが未登録の場合に 0 を初期値として扱う書き方である。この書き方により、初めて出てきた品目にもそのまま <code>+=</code> で個数を足せる。</p>`,
    code: `struct Order {
    let item: String
    let price: Int
    let quantity: Int
}

let orders = [
    Order(item: "コーヒー", price: 400, quantity: 2),
    Order(item: "ケーキ", price: 500, quantity: 1),
    Order(item: "コーヒー", price: 400, quantity: 1),
    Order(item: "紅茶", price: 450, quantity: 2)
]

// 合計金額を求める
let total = orders.reduce(0) { $0 + $1.price * $1.quantity }
print("合計: \\(total) 円")

// 品目ごとの個数を集計する
var counts: [String: Int] = [:]
for order in orders {
    counts[order.item, default: 0] += order.quantity
}

for item in counts.keys.sorted() {
    print("\\(item): \\(counts[item] ?? 0) 個")
}
`,
    blank: 'counts[order.item, default: 0] += order.quantity',
    placeholder: '// 品目名をキーとして、辞書 counts に個数を足す行',
    token: /counts\[\s*order\.item\s*,\s*default\s*:\s*0\s*\]\s*\+=\s*order\.quantity/,
    hint: '<code>counts[order.item, default: 0] += order.quantity</code> と書く。',
    output: `合計: 2600 円
ケーキ: 1 個
コーヒー: 3 個
紅茶: 2 個`
  },
  {
    id: 'swift-16',
    phase: 'SwiftUI',
    title: 'レイアウト（VStack, HStack, ZStack, Spacer, padding）',
    type: 'code',
    run: 'static',
    file: 'ContentView.swift',
    story: `<p class="lead">学習者は VStack・HStack・ZStack を組み合わせ、カフェのメニュー画面を配置する。</p>
<p>SwiftUI は、画面の見た目をコードで宣言する Apple のフレームワークである。画面の部品を View と呼ぶ。<code>body</code> は、その View が表示する内容を返すプロパティである。</p>
<ul>
<li><code>VStack</code> は、中の View を縦に並べる。</li>
<li><code>HStack</code> は、中の View を横に並べる。</li>
<li><code>ZStack</code> は、中の View を奥から手前へ重ねる。</li>
<li><code>Spacer</code> は、空いた場所を埋めて、両側の View を押し広げる。</li>
<li><code>.padding()</code> は、View の周りに余白を加える。</li>
</ul>
<p><code>.font</code> や <code>.padding</code> のように、View の後ろにつけて見た目を変えるメソッドをモディファイアという。</p>`,
    code: `import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 16) {
            Text("BEAST CAFE")
                .font(.largeTitle)
            HStack {
                Text("コーヒー")
                Spacer()
                Text("400 円")
            }
            .padding()
            ZStack {
                Color.orange
                Text("本日のおすすめ")
                    .foregroundColor(.white)
            }
            .frame(height: 80)
        }
        .padding()
    }
}
`,
    blank: 'Text("コーヒー")\n                Spacer()\n                Text("400 円")',
    placeholder: '// 左端にコーヒー、右端に 400 円を置き、間を Spacer で広げる3行',
    token: /Text\(\s*"コーヒー"\s*\)\s*Spacer\(\s*\)\s*Text\(\s*"400 円"\s*\)/,
    hint: '<code>Text("コーヒー")</code>、<code>Spacer()</code>、<code>Text("400 円")</code> の順に3行で書く。',
    output: `┌────────────────────────────┐
│                            │
│         BEAST CAFE         │
│                            │
│  コーヒー          400 円  │
│                            │
│ ┌────────────────────────┐ │
│ │     本日のおすすめ     │ │
│ └────────────────────────┘ │
│                            │
└────────────────────────────┘
・BEAST CAFE が大きな文字で中央に表示される
・コーヒーが左端、400 円が右端に表示される
・オレンジ色の帯（高さ 80）の上に白い文字が重なる`
  },
  {
    id: 'swift-17',
    phase: 'SwiftUI',
    title: '@State による画面の更新（カウンター）',
    type: 'code',
    run: 'static',
    file: 'ContentView.swift',
    story: `<p class="lead">学習者は @State を使い、ボタンを押すたびに数が変わるカウンターを作る。</p>
<p>@State は、View が保持し、変化すると画面を再描画させる値を宣言する仕組みである。SwiftUI は、@State の値の変化を検知し、body を作り直して画面を最新の状態にする。</p>
<p><code>Button("+1") { … }</code> は、ラベルと押されたときの処理を持つボタンである。処理の中で count を変更すると、Text に表示される数も自動で更新される。</p>
<p>@State の変数には <code>private</code> をつける書き方が推奨される。private は、その View の内部に限り使える値であることを示す。</p>`,
    code: `import SwiftUI

struct ContentView: View {
    @State private var count = 0

    var body: some View {
        VStack(spacing: 20) {
            Text("\\(count) 杯")
                .font(.largeTitle)
            HStack(spacing: 24) {
                Button("-1") {
                    if count > 0 {
                        count -= 1
                    }
                }
                Button("+1") {
                    count += 1
                }
            }
        }
        .padding()
    }
}
`,
    blank: '@State private var count = 0',
    placeholder: '// 画面の更新に使う数を保持する変数 count を 0 で宣言する行',
    token: /@State\s+private\s+var\s+count\s*=\s*0/,
    hint: '<code>@State private var count = 0</code> と書く。',
    output: `起動直後の画面
┌──────────────────┐
│       0 杯       │
│   [-1]   [+1]    │
└──────────────────┘

+1 を3回押した後の画面
┌──────────────────┐
│       3 杯       │
│   [-1]   [+1]    │
└──────────────────┘
・-1 は count が 1 以上のときに限り数を減らす`
  },
  {
    id: 'swift-18',
    phase: 'SwiftUI',
    title: '入力と View の部品化（TextField, @Binding, 子 View への分割）',
    type: 'code',
    run: 'static',
    file: 'ContentView.swift',
    story: `<p class="lead">学習者は TextField を子 View に分け、@Binding で親 View の値と結びつける。</p>
<p>TextField は、文字の入力欄を表示する View である。<code>text: $name</code> のように、入力内容を保存する変数を <code>$</code> つきで渡す。<code>$name</code> は、値そのものに代わり、値への参照（バインディング）を表す。</p>
<p>画面が大きくなると、学習者は部品ごとに View を分ける。子 View が親 View の @State を読み書きする場合、子 View 側では <code>@Binding</code> で変数を宣言する。@Binding は、ほかの View が持つ値を参照し、変更を元の値に反映させる仕組みである。</p>
<pre>NameField(name: $name)   // 親から参照を渡す</pre>
<p>この構成により、入力欄で文字を打つと、親 View の Text も同時に更新される。</p>`,
    code: `import SwiftUI

struct NameField: View {
    @Binding var name: String

    var body: some View {
        TextField("名前を入力", text: $name)
            .textFieldStyle(.roundedBorder)
    }
}

struct ContentView: View {
    @State private var name = ""

    var body: some View {
        VStack(spacing: 16) {
            NameField(name: $name)
            Text(name.isEmpty ? "ようこそ" : "ようこそ、\\(name) さん")
        }
        .padding()
    }
}
`,
    blank: '@Binding var name: String',
    placeholder: '// 親 View の文字列を参照する変数 name を宣言する行',
    token: /@Binding\s+var\s+name\s*:\s*String/,
    hint: '<code>@Binding var name: String</code> と書く。',
    output: `入力前の画面
┌────────────────────────┐
│ ┌────────────────────┐ │
│ │ 名前を入力         │ │
│ └────────────────────┘ │
│        ようこそ        │
└────────────────────────┘

入力欄に Aoi と入力した後の画面
┌────────────────────────┐
│ ┌────────────────────┐ │
│ │ Aoi                │ │
│ └────────────────────┘ │
│   ようこそ、Aoi さん   │
└────────────────────────┘`
  },
  {
    id: 'swift-19',
    phase: 'SwiftUI',
    title: '実務的な画面構成（List, NavigationStack, ForEach）',
    type: 'code',
    run: 'static',
    file: 'ContentView.swift',
    story: `<p class="lead">学習者は List・NavigationStack・ForEach を使い、TODO を追加できる画面を作る。</p>
<p>Identifiable は、各データが一意の <code>id</code> を持つことを示すプロトコルである。プロトコルは、型が備えるべきプロパティやメソッドの約束である。<code>UUID()</code> は、ほぼ確実に重複を避けた識別子を作る。ForEach は、この id を使って各行を区別する。</p>
<ul>
<li><code>NavigationStack</code> は、画面上部のタイトルや画面遷移を管理する入れ物である。</li>
<li><code>List</code> は、行を縦に並べたスクロール可能な一覧を表示する。</li>
<li><code>ForEach</code> は、配列の要素ごとに View を作る。</li>
</ul>
<p>追加ボタンを押すと、todos 配列に新しい Todo が加わる。todos は @State であるため、一覧は自動で更新される。<code>.disabled</code> は、入力欄が空の間ボタンを押せる状態から外す。</p>`,
    code: `import SwiftUI

struct Todo: Identifiable {
    let id = UUID()
    var title: String
    var isDone = false
}

struct ContentView: View {
    @State private var todos = [
        Todo(title: "牛乳を買う", isDone: true),
        Todo(title: "Swift の復習"),
        Todo(title: "Git の練習")
    ]
    @State private var newTitle = ""

    var body: some View {
        NavigationStack {
            List {
                HStack {
                    TextField("新しい TODO", text: $newTitle)
                    Button("追加") {
                        todos.append(Todo(title: newTitle))
                        newTitle = ""
                    }
                    .disabled(newTitle.isEmpty)
                }
                ForEach(todos) { todo in
                    HStack {
                        Image(systemName: todo.isDone ? "checkmark.circle.fill" : "circle")
                        Text(todo.title)
                    }
                }
            }
            .navigationTitle("TODO")
        }
    }
}
`,
    blank: 'ForEach(todos) { todo in',
    placeholder: '// 配列 todos の要素を順番に todo として取り出す ForEach の行',
    token: /ForEach\(\s*todos\s*\)\s*\{\s*todo\s+in/,
    hint: '<code>ForEach(todos) { todo in</code> と書く。',
    output: `┌──────────────────────────┐
│ TODO                     │
├──────────────────────────┤
│ 新しい TODO        追加  │
├──────────────────────────┤
│ (✓) 牛乳を買う           │
├──────────────────────────┤
│ ( ) Swift の復習         │
├──────────────────────────┤
│ ( ) Git の練習           │
└──────────────────────────┘
・画面上部に大きな文字で TODO のタイトルが表示される
・入力欄に文字を入れて追加を押すと、一覧の末尾に新しい行が加わる`
  }
];

SERIES.git = [
  {
    id: 'git-01',
    phase: 'Git の基本',
    title: 'Git の準備（git config, git init）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git config で自分の名前を登録し、git init でリポジトリを作る。</p>
<p>Git は、ファイルの変更履歴を記録するバージョン管理システムである。学習者は Git を使い、いつ・だれが・何を変更したかを後から確かめる。</p>
<p><code>git config --global</code> は、パソコン全体で使う Git の設定を登録するコマンドである。Git は、ここで登録した名前とメールアドレスを、変更の記録に書き込む。<code>init.defaultBranch main</code> は、最初のブランチの名前を main にする設定である。</p>
<p>リポジトリは、Git が履歴を保存する場所である。<code>git init</code> は、現在のフォルダをリポジトリにする。このとき、フォルダの中に履歴を保存する <code>.git</code> フォルダが作られる。</p>`,
    code: `# 名前とメールアドレスを登録する
git config --global user.name "Aoi Sato"
git config --global user.email "aoi@example.com"
git config --global init.defaultBranch main

# 作業用のフォルダを作り、その中に移動する
mkdir cafe-app
cd cafe-app
git init
`,
    blank: 'git init',
    placeholder: '# 現在のフォルダをリポジトリにするコマンド',
    token: /^git\s+init\s*$/m,
    hint: '<code>git init</code> と書く。',
    output: `$ git config --global user.name "Aoi Sato"
$ git config --global user.email "aoi@example.com"
$ git config --global init.defaultBranch main
$ mkdir cafe-app
$ cd cafe-app
$ git init
Initialized empty Git repository in /Users/aoi/cafe-app/.git/`
  },
  {
    id: 'git-02',
    phase: 'Git の基本',
    title: '共有するファイルの選択（git add）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git add で、記録に含めるファイルを選ぶ。</p>
<p>Git は、変更を2段階で記録する。1段階目で記録に含めるファイルを選び、2段階目でその内容を記録する。<code>git add</code> は、1段階目の「選ぶ」作業を行うコマンドである。</p>
<p>ステージ（staging area）は、次の記録に含めるファイルを置いておく場所である。<code>git add ファイル名</code> は、指定したファイルをステージに加える。メモのように手元に置く予定のファイルは、ステージの外に残す。</p>
<pre>git add index.html   # 1つのファイルを選ぶ
git add .            # フォルダ内のすべての変更を選ぶ</pre>
<p>git add の成功時、ターミナルの出力は空である。</p>`,
    code: `# 3つのファイルを作る
touch index.html style.css memo.txt

# 記録に含めるファイルを選ぶ
git add index.html style.css
`,
    blank: 'git add index.html style.css',
    placeholder: '# index.html と style.css をステージに加えるコマンド',
    token: /git\s+add\s+index\.html\s+style\.css/,
    hint: '<code>git add</code> の後ろにファイル名を空白で区切って並べる。<code>git add index.html style.css</code> と書く。',
    output: `$ touch index.html style.css memo.txt
$ git add index.html style.css
（出力は空である。index.html と style.css がステージに加わり、memo.txt は作業フォルダに残る。）`
  },
  {
    id: 'git-03',
    phase: 'Git の基本',
    title: '選択したファイルの記録（git commit -m）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git commit -m で、ステージにあるファイルの状態を履歴に記録する。</p>
<p>コミットは、ある時点のファイルの状態を履歴として保存したものである。<code>git commit</code> は、ステージにあるファイルを1つのコミットとして記録する。ステージの外のファイルは、この記録に含まれる対象から外れる。</p>
<p><code>-m</code> は、コミットメッセージをその場で指定するオプションである。コミットメッセージは、そのコミットで何を変更したかを説明する短い文章である。</p>
<p>出力の <code>3f2a1c9</code> は、コミットを識別する ID（ハッシュ）の先頭部分である。<code>root-commit</code> は、そのリポジトリで最初のコミットであることを示す。</p>`,
    code: `git add index.html style.css
git commit -m "トップページを作成"
`,
    blank: 'git commit -m "トップページを作成"',
    placeholder: '# メッセージ トップページを作成 をつけて記録するコマンド',
    token: /git\s+commit\s+-m\s+["']トップページを作成["']/,
    hint: '<code>git commit -m "トップページを作成"</code> と書く。メッセージは引用符で囲む。',
    output: `$ git add index.html style.css
$ git commit -m "トップページを作成"
[main (root-commit) 3f2a1c9] トップページを作成
 2 files changed, 12 insertions(+)
 create mode 100644 index.html
 create mode 100644 style.css`
  },
  {
    id: 'git-04',
    phase: 'Git の基本',
    title: 'リモートリポジトリの準備（git remote add origin）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git remote add で、GitHub 上のリポジトリを送り先として登録する。</p>
<p>GitHub は、Git のリポジトリをインターネット上で保管し、ほかの人と共有するサービスである。インターネット上のリポジトリをリモートリポジトリ、手元のパソコンのリポジトリをローカルリポジトリと呼ぶ。</p>
<p>学習者は、GitHub の画面で空のリポジトリを作り、その URL をコピーする。<code>git remote add origin URL</code> は、その URL に origin という名前をつけて登録するコマンドである。origin は、主なリモートリポジトリにつける慣習的な名前である。</p>
<p><code>git remote -v</code> は、登録済みのリモートリポジトリの一覧を表示する。</p>`,
    code: `git remote add origin https://github.com/aoi-sato/cafe-app.git
git remote -v
`,
    blank: 'git remote add origin https://github.com/aoi-sato/cafe-app.git',
    placeholder: '# GitHub のリポジトリの URL を origin という名前で登録するコマンド',
    token: /git\s+remote\s+add\s+origin\s+https:\/\/github\.com\/aoi-sato\/cafe-app\.git/,
    hint: '<code>git remote add origin https://github.com/aoi-sato/cafe-app.git</code> と書く。',
    output: `$ git remote add origin https://github.com/aoi-sato/cafe-app.git
$ git remote -v
origin	https://github.com/aoi-sato/cafe-app.git (fetch)
origin	https://github.com/aoi-sato/cafe-app.git (push)`
  },
  {
    id: 'git-05',
    phase: 'Git の基本',
    title: 'ファイルのアップロード（git push）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git push で、ローカルのコミットを GitHub に送る。</p>
<p><code>git push</code> は、ローカルリポジトリのコミットをリモートリポジトリに送るコマンドである。<code>git push origin main</code> は、main ブランチのコミットを origin に送る。ブランチは、コミットの流れにつけた名前であり、作業の系統を表す。</p>
<p><code>-u</code> は、ローカルの main とリモートの main を対応づけるオプションである。初回に一度指定すると、2回目以降は <code>git push</code> と短く書ける。</p>
<p>送信が終わると、GitHub のリポジトリの画面に index.html と style.css が表示される。</p>`,
    code: `# 初回の送信では -u をつける
git push -u origin main
`,
    blank: 'git push -u origin main',
    placeholder: '# main ブランチを origin に送り、対応づけを登録するコマンド',
    token: /git\s+push\s+-u\s+origin\s+main/,
    hint: '<code>git push -u origin main</code> と書く。',
    output: `$ git push -u origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 512 bytes | 512.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/aoi-sato/cafe-app.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.`
  },
  {
    id: 'git-06',
    phase: 'Git の基本',
    title: 'ファイルのダウンロード（git pull, git clone）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git clone でリポジトリを複製し、git pull で最新の変更を取り込む。</p>
<p><code>git clone URL</code> は、リモートリポジトリを履歴ごと手元に複製するコマンドである。別のパソコンで作業を始めるときや、チームのリポジトリに初めて参加するときに使う。clone で作ったリポジトリには、origin が自動で登録される。</p>
<p><code>git pull origin main</code> は、リモートの main にある新しいコミットを取り込み、手元のファイルを最新の状態にするコマンドである。ほかの人が push した変更は、pull の時点で手元に反映される。</p>
<p>出力の <code>Fast-forward</code> は、手元の履歴をそのまま先へ進める形で更新したことを示す。</p>`,
    code: `# 別のパソコンでリポジトリを複製する
git clone https://github.com/aoi-sato/cafe-app.git
cd cafe-app

# 後日、リモートの最新の変更を取り込む
git pull origin main
`,
    blank: 'git pull origin main',
    placeholder: '# リモートの main の最新の変更を取り込むコマンド',
    token: /git\s+pull\s+origin\s+main/,
    hint: '<code>git pull origin main</code> と書く。',
    output: `$ git clone https://github.com/aoi-sato/cafe-app.git
Cloning into 'cafe-app'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 4 (delta 0), pack-reused 0
Receiving objects: 100% (4/4), done.
$ cd cafe-app
$ git pull origin main
From https://github.com/aoi-sato/cafe-app
 * branch            main       -> FETCH_HEAD
Updating 3f2a1c9..8b7d4e2
Fast-forward
 menu.html | 12 ++++++++++++
 1 file changed, 12 insertions(+)
 create mode 100644 menu.html`
  },
  {
    id: 'git-07',
    phase: 'Git の基本',
    title: '共同開発の流れの復習',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は、チームで1つのリポジトリを開発するときの流れを確認する。</p>
<p>共同開発では、各メンバーが main ブランチを直接変更する代わりに、作業ごとのブランチを作る。<code>git switch -c ブランチ名</code> は、新しいブランチを作り、そのブランチに移動するコマンドである。</p>
<ol>
<li><strong>clone</strong>：リモートリポジトリを手元に複製する。</li>
<li><strong>branch</strong>：作業用のブランチを作る。</li>
<li><strong>commit</strong>：ブランチ上で変更を記録する。</li>
<li><strong>push</strong>：ブランチを GitHub に送る。</li>
<li><strong>pull request</strong>：GitHub 上で「この変更を main に取り込んでほしい」と依頼する。プルリクエストは、変更内容をチームで確認するための依頼である。</li>
<li><strong>merge</strong>：レビューの後、ブランチの変更を main に統合する。</li>
</ol>
<p>merge の後、各メンバーは <code>git pull</code> で最新の main を取り込み、次の作業に進む。</p>`,
    code: `git clone https://github.com/aoi-sato/cafe-app.git
cd cafe-app
git switch -c add-menu
# menu.html を編集する
git add menu.html
git commit -m "メニューページを追加"
git push origin add-menu
# GitHub でプルリクエストを作り、レビュー後に main へマージする
git switch main
git pull origin main
`,
    output: `clone → branch → commit → push → pull request → merge

  main      ●────────────────────●（merge）
             \\                  /
  add-menu    ●──── commit ────●
             （branch）     （push と pull request）`
  },
  {
    id: 'git-08',
    phase: '変更履歴の把握',
    title: '変更したファイルの把握（git status）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git status で、作業フォルダ内のファイルの状態を確認する。</p>
<p><code>git status</code> は、どのファイルが変更され、どのファイルがステージにあるかを一覧で表示するコマンドである。学習者は、add や commit の前にこのコマンドで状態を確かめる。</p>
<ul>
<li><code>Changes to be committed</code>：ステージにあり、次のコミットに含まれるファイル。</li>
<li><code>Changes not staged for commit</code>：変更後、ステージに加える前の段階にあるファイル。</li>
<li><code>Untracked files</code>：Git の管理の外にある新しいファイル。</li>
</ul>
<p>この例では、index.html が変更済みで、memo.txt が管理の外にある新しいファイルである。</p>`,
    code: `# index.html を編集し、memo.txt を作った後で状態を確認する
git status
`,
    blank: 'git status',
    placeholder: '# 作業フォルダ内のファイルの状態を一覧で表示するコマンド',
    token: /^git\s+status\s*$/m,
    hint: '<code>git status</code> と書く。',
    output: `$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	memo.txt

no changes added to commit (use "git add" and/or "git commit -a")`
  },
  {
    id: 'git-09',
    phase: '変更履歴の把握',
    title: '変更したコードの把握（git diff）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git diff で、ファイルの中のどの行が変わったかを確認する。</p>
<p><code>git diff</code> は、最後のコミット（またはステージ）と現在のファイルとの差分を表示するコマンドである。差分は、2つの状態の間で変わった部分である。git status がファイル単位の情報を示すのに対し、git diff は行単位の変更を示す。</p>
<p>出力のうち、<code>-</code> で始まる行は削除された行、<code>+</code> で始まる行は追加された行である。先頭が空白の行は、変更の前後で同じ内容の行であり、位置の目印として表示される。</p>
<p>この例では、style.css の見出しの色が black から brown に変わった。</p>`,
    code: `# style.css の見出しの色を書き換えた後で差分を確認する
git diff
`,
    blank: 'git diff',
    placeholder: '# 変更した行を表示するコマンド',
    token: /^git\s+diff\s*$/m,
    hint: '<code>git diff</code> と書く。',
    output: `$ git diff
diff --git a/style.css b/style.css
index 4b1c2d3..9e8f7a6 100644
--- a/style.css
+++ b/style.css
@@ -1,4 +1,4 @@
 h1 {
-  color: black;
+  color: brown;
   font-size: 32px;
 }`
  },
  {
    id: 'git-10',
    phase: '変更履歴の把握',
    title: 'add されたファイルの確認（git diff --staged）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git diff --staged で、ステージに加えた変更の内容を確認する。</p>
<p>git add の後で <code>git diff</code> を実行すると、出力は空になる。git diff は、ステージと作業フォルダの差分を表示するためである。ステージに加えた変更は、すでにステージ側に移っている。</p>
<p><code>git diff --staged</code> は、最後のコミットとステージとの差分を表示するコマンドである。学習者はこのコマンドで、次のコミットに含まれる内容を記録の直前に確かめる。<code>--cached</code> も同じ意味のオプションである。</p>`,
    code: `git add style.css
git diff
git diff --staged
`,
    blank: 'git diff --staged',
    placeholder: '# ステージに加えた変更の差分を表示するコマンド',
    token: /^git\s+diff\s+--(staged|cached)\s*$/m,
    hint: '<code>git diff --staged</code> と書く。',
    output: `$ git add style.css
$ git diff
$ git diff --staged
diff --git a/style.css b/style.css
index 4b1c2d3..9e8f7a6 100644
--- a/style.css
+++ b/style.css
@@ -1,4 +1,4 @@
 h1 {
-  color: black;
+  color: brown;
   font-size: 32px;
 }`
  },
  {
    id: 'git-11',
    phase: '変更履歴の把握',
    title: 'コミットメッセージ',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は、変更の種類と内容が一読でわかるコミットメッセージを書く。</p>
<p>コミットメッセージは、未来の自分やチームの仲間が履歴を読むための説明である。「修正」や「update」のみのメッセージは、何を変えたかを後から読み取りにくい。</p>
<ul>
<li>1行目に、変更の内容を短く要約する（目安は 50 文字程度）。</li>
<li>1つのコミットには、1つのまとまった変更を入れる。</li>
<li>先頭に変更の種類をつける。<code>feat</code> は機能の追加、<code>fix</code> は不具合の修正、<code>style</code> は見た目の調整、<code>docs</code> は文書の更新を表す。</li>
</ul>
<pre>良い例：fix: 合計金額の計算の誤りを修正
悪い例：修正</pre>`,
    code: `git add style.css
git commit -m "style: 見出しの色を茶色に変更"
`,
    blank: 'git commit -m "style: 見出しの色を茶色に変更"',
    placeholder: '# 種類 style と変更内容の要約を書いたメッセージで記録するコマンド',
    token: /git\s+commit\s+-m\s+["']style:\s*見出しの色を茶色に変更["']/,
    hint: '<code>git commit -m "style: 見出しの色を茶色に変更"</code> と書く。',
    output: `$ git add style.css
$ git commit -m "style: 見出しの色を茶色に変更"
[main 5c6d7e8] style: 見出しの色を茶色に変更
 1 file changed, 1 insertion(+), 1 deletion(-)`
  },
  {
    id: 'git-12',
    phase: '変更履歴の把握',
    title: 'コミット履歴の確認（git log, git log --oneline）',
    type: 'code',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は git log でコミットの履歴を確認し、--oneline で各コミット1行の一覧にする。</p>
<p><code>git log</code> は、コミットの履歴を新しい順に表示するコマンドである。各コミットについて、ID・作者・日時・メッセージが表示される。</p>
<p><code>git log --oneline</code> は、各コミットを「ID の先頭7文字とメッセージ」の1行にまとめて表示する。履歴の全体を短く見渡すときに便利である。</p>
<p><code>HEAD -&gt; main</code> は、現在の作業位置が main ブランチの最新のコミットであることを示す。<code>origin/main</code> は、最後に push や pull をした時点のリモートの main の位置を示す。表示が長い場合、学習者は <code>q</code> キーで一覧を閉じる。</p>`,
    code: `git log
git log --oneline
`,
    blank: 'git log --oneline',
    placeholder: '# 履歴を1コミット1行で表示するコマンド',
    token: /^git\s+log\s+--oneline\s*$/m,
    hint: '<code>git log --oneline</code> と書く。',
    output: `$ git log
commit 5c6d7e8a1b2c3d4e5f60718293a4b5c6d7e8f901 (HEAD -> main)
Author: Aoi Sato <aoi@example.com>
Date:   Thu Nov 5 10:12:30 2026 +0900

    style: 見出しの色を茶色に変更

commit 8b7d4e2f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d (origin/main)
Author: Ren Mori <ren@example.com>
Date:   Wed Nov 4 18:40:05 2026 +0900

    メニューページを追加

commit 3f2a1c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b
Author: Aoi Sato <aoi@example.com>
Date:   Tue Nov 3 09:05:44 2026 +0900

    トップページを作成
$ git log --oneline
5c6d7e8 (HEAD -> main) style: 見出しの色を茶色に変更
8b7d4e2 (origin/main) メニューページを追加
3f2a1c9 トップページを作成`
  }
];
