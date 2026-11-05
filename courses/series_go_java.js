SERIES.go = [
  {
    id: 'go-01',
    phase: 'Go の基礎',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は Go をパソコンにインストールし、VS Code で main.go を実行する環境を整える。</p>
<p>Go は、Google が開発したコンパイル型のプログラミング言語である。コンパイルは、人が書いたコードをコンピュータが実行できる形に変換する処理である。macOS では、公式サイト（go.dev）のインストーラ（.pkg）を使うか、Homebrew で <code>brew install go</code> を実行する。Windows では、公式サイトのインストーラ（.msi）を使うか、PowerShell で <code>winget install GoLang.Go</code> を実行する。インストール後、新しいターミナルを開き、<code>go version</code> でバージョンを確かめる。</p>
<p>VS Code には、拡張機能「Go」（提供元は Go Team at Google）を入れる。この拡張機能は、入力の補完やエラーの表示を行う。学習者は作業用フォルダを VS Code で開き、ターミナルで <code>go mod init hello</code> を実行する。このコマンドは、モジュールの設定ファイル go.mod を作る。モジュールは、Go のプログラムをまとめて管理する単位である。最後に <code>go run main.go</code> を実行すると、Go はコードをコンパイルし、すぐに実行する。</p>
<pre>go version
go mod init hello
go run main.go</pre>`,
    code: `package main

import "fmt"

func main() {
	fmt.Println("Hello, Go")
}
`,
    output: `$ go version
go version go1.24.0 darwin/arm64
$ go mod init hello
go: creating new go.mod: module hello
$ go run main.go
Hello, Go

（Windows では darwin/arm64 の部分が windows/amd64 などになる）`
  },
  {
    id: 'go-02',
    phase: 'Go の基礎',
    title: 'Go の開始',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は main 関数の中に fmt.Println を書き、ターミナルに文字を表示する。</p>
<p>Go のプログラムは <code>package main</code> の行から始まる。パッケージは、関連するコードをまとめる単位である。<code>import "fmt"</code> は、文字の表示を受け持つ標準パッケージ fmt を読み込む命令である。</p>
<p><code>func main()</code> は、プログラムの入口となる関数である。Go は main 関数の <code>{ }</code> の中を上の行から順に実行する。<code>fmt.Println</code> は、かっこの中の値を表示し、最後に改行する関数である。文字列は <code>"</code> で囲む。計算式を渡すと、計算の結果が表示される。<code>//</code> から行末まではコメントであり、Go はコメントを実行の対象から外す。</p>`,
    code: `package main

import "fmt"

// main 関数はプログラムの入口である
func main() {
	fmt.Println("BEAST CODE へようこそ")
	fmt.Println("Go の冒険を始める")
	fmt.Println(3 + 4)
}
`,
    blank: 'fmt.Println("Go の冒険を始める")',
    placeholder: '// 文字列「Go の冒険を始める」を表示する行',
    token: /fmt\.Println\(\s*"Go の冒険を始める"\s*\)/,
    hint: '<code>fmt.Println("Go の冒険を始める")</code> と書く。文字列は <code>"</code> で囲む。',
    output: `BEAST CODE へようこそ
Go の冒険を始める
7`
  },
  {
    id: 'go-03',
    phase: 'Go の基礎',
    title: '変数とデータ型',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は var と := で変数を作り、いくつかのデータ型の値を表示する。</p>
<p>変数は、値に名前をつけて保存する箱である。<code>var 名前 型 = 値</code> の形で作る。関数の中では <code>名前 := 値</code> という短い書き方も使える。この書き方では、Go が値から型を自動で決める。この仕組みを型推論という。</p>
<p>データ型は、値の種類を表す。int は整数、float64 は小数を含む数、string は文字列、bool は true（真）か false（偽）を表す型である。Go のコンパイラは、宣言したすべての変数がどこかで使われているかを確かめる。未使用の変数はコンパイルエラーになる。</p>
<pre>var name string = "Aoi"
hp := 100        // int
speed := 1.5     // float64
alive := true    // bool</pre>`,
    code: `package main

import "fmt"

func main() {
	var name string = "Aoi"
	hp := 100
	speed := 1.5
	alive := true

	hp = hp - 30
	fmt.Println("名前:", name)
	fmt.Println("HP:", hp)
	fmt.Println("速さ:", speed)
	fmt.Println("生存:", alive)
}
`,
    blank: 'hp := 100',
    placeholder: '// 変数 hp を := で作り、整数 100 を入れる行',
    token: /hp\s*:=\s*100/,
    hint: '<code>hp := 100</code> と書く。<code>:=</code> は変数の作成と代入を同時に行う。',
    output: `名前: Aoi
HP: 70
速さ: 1.5
生存: true`
  },
  {
    id: 'go-04',
    phase: 'Go の基礎',
    title: '条件分岐',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は if と switch を使い、HP や武器の種類に応じて表示を変える。</p>
<p>if 文は、条件が true のときに限り、続く <code>{ }</code> の中を実行する。<code>else if</code> は前の条件が false のときに次の条件を調べ、<code>else</code> は残りのすべての場合を受け持つ。Go の if では条件を囲むかっこを省略し、<code>{</code> は if と同じ行に書く。比較には <code>==</code>（等しい）、<code>!=</code>（異なる）、<code>&lt;</code>、<code>&gt;=</code> などの比較演算子を使い、条件は <code>&amp;&amp;</code>（かつ）や <code>||</code>（または）で組み合わせる。</p>
<p>switch 文は、1つの値をいくつかの候補と比べ、一致した case の処理を実行する。Go の switch は、一致した case の処理を終えると switch 全体を抜ける。残りの値は default が受け持つ。</p>`,
    code: `package main

import "fmt"

func main() {
	hp := 35
	if hp >= 70 {
		fmt.Println("元気いっぱい")
	} else if hp >= 30 {
		fmt.Println("少し疲れている")
	} else {
		fmt.Println("回復が必要")
	}

	weapon := "弓"
	switch weapon {
	case "剣":
		fmt.Println("近くの敵を攻撃する")
	case "弓":
		fmt.Println("遠くの敵を攻撃する")
	default:
		fmt.Println("素手で戦う")
	}
}
`,
    blank: '} else if hp >= 30 {',
    placeholder: '// hp が 30 以上かを調べる else if の行',
    token: /\}\s*else\s+if\s+hp\s*>=\s*30\s*\{/,
    hint: '<code>} else if hp &gt;= 30 {</code> と書く。',
    output: `少し疲れている
遠くの敵を攻撃する`
  },
  {
    id: 'go-05',
    phase: 'Go の基礎',
    title: '繰り返し',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は for 文の3つの書き方を使い、処理を繰り返す。</p>
<p>Go の繰り返しは for 文の1種類で表す。<code>for i := 1; i &lt;= 3; i++ { }</code> は、初期化、条件、更新の3つを並べる書き方である。i は 1 から始まり、条件が true の間、ブロックの実行と <code>i++</code>（1 増やす処理）を繰り返す。</p>
<p><code>for 条件 { }</code> は、条件が true の間に繰り返す書き方であり、他の言語の while にあたる。<code>continue</code> はその回の残りを飛ばして次の回へ進み、<code>break</code> は繰り返し全体を終える。<code>i%2 == 0</code> は、i を 2 で割った余りが 0、つまり偶数であることを表す。</p>`,
    code: `package main

import "fmt"

func main() {
	for i := 1; i <= 3; i++ {
		fmt.Println("ターン", i)
	}

	energy := 10
	for energy > 0 {
		energy -= 4
		fmt.Println("残りエネルギー:", energy)
	}

	sum := 0
	for i := 1; i <= 10; i++ {
		if i%2 == 0 {
			continue
		}
		sum += i
	}
	fmt.Println("奇数の合計:", sum)
}
`,
    blank: 'for i := 1; i <= 3; i++ {',
    placeholder: '// i を 1 から 3 まで 1 ずつ増やす for の行',
    token: /for\s+i\s*:=\s*1\s*;\s*i\s*<=\s*3\s*;\s*i\+\+\s*\{/,
    hint: '<code>for i := 1; i &lt;= 3; i++ {</code> と書く。3つの部分は <code>;</code> で区切る。',
    output: `ターン 1
ターン 2
ターン 3
残りエネルギー: 6
残りエネルギー: 2
残りエネルギー: -2
奇数の合計: 25`
  },
  {
    id: 'go-06',
    phase: 'Go の基礎',
    title: '標準パッケージと fmt',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は fmt.Printf と fmt.Sprintf で表示の形を整え、strings と math の関数を使う。</p>
<p>標準パッケージは、Go に最初から含まれる部品の集まりである。複数のパッケージは <code>import ( )</code> の中に並べて読み込む。strings は文字列の操作、math は数学の計算を受け持つ。</p>
<p><code>fmt.Printf</code> は、書式指定子を値で置き換えて表示する関数である。書式指定子には <code>%d</code>（整数）、<code>%s</code>（文字列）、<code>%.1f</code>（小数第1位まで）、<code>%T</code>（型の名前）などがあり、<code>%%</code> は記号 % そのものを表す。Printf の改行は、文字列の最後に <code>\\n</code> を書いて指定する。<code>fmt.Sprintf</code> は、表示の代わりに、整えた文字列を戻り値として返す。</p>`,
    code: `package main

import (
	"fmt"
	"math"
	"strings"
)

func main() {
	name := "Aoi"
	level := 7
	rate := 0.8567

	fmt.Printf("%s のレベルは %d\\n", name, level)
	fmt.Printf("命中率: %.1f%%\\n", rate*100)
	fmt.Printf("型: %T\\n", rate)

	title := fmt.Sprintf("[%s Lv.%d]", name, level)
	fmt.Println(title)

	fmt.Println(strings.ToUpper("beast"))
	fmt.Println(strings.Repeat("=", 10))
	fmt.Println(math.Sqrt(49))
}
`,
    blank: 'title := fmt.Sprintf("[%s Lv.%d]", name, level)',
    placeholder: '// name と level を埋め込んだ文字列を Sprintf で作り、title に入れる行',
    token: /title\s*:=\s*fmt\.Sprintf\(\s*"\[%s Lv\.%d\]"\s*,\s*name\s*,\s*level\s*\)/,
    hint: '<code>title := fmt.Sprintf("[%s Lv.%d]", name, level)</code> と書く。',
    output: `Aoi のレベルは 7
命中率: 85.7%
型: float64
[Aoi Lv.7]
BEAST
==========
7`
  },
  {
    id: 'go-07',
    phase: '関数と入力',
    title: '関数の基本',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は引数と戻り値を持つ関数 damage を定義し、main から呼び出す。</p>
<p>関数は、処理のまとまりに名前をつけたものである。<code>func 名前(引数 型) 戻り値の型 { }</code> の形で定義する。引数は関数が受け取る値であり、戻り値は関数が呼び出し元へ返す値である。<code>return</code> は戻り値を返し、関数の実行を終える。</p>
<p>定義の段階では、関数の中の命令は待機している。main から <code>damage(30, 12)</code> のように呼び出した時点で実行される。damage は、攻撃力から防御力を引き、結果が 1 より小さい場合は 1 を返す。同じ型の引数が続く場合は <code>attack, defense int</code> とまとめて書ける。</p>`,
    code: `package main

import "fmt"

func greet(name string) {
	fmt.Println(name, "が仲間に加わった")
}

func damage(attack int, defense int) int {
	result := attack - defense
	if result < 1 {
		return 1
	}
	return result
}

func main() {
	greet("Aoi")
	greet("Ren")
	fmt.Println("ダメージ:", damage(30, 12))
	fmt.Println("ダメージ:", damage(5, 20))
}
`,
    blank: 'func damage(attack int, defense int) int {',
    placeholder: '// int の引数 attack と defense を受け取り、int を返す関数 damage の最初の行',
    token: /func\s+damage\(\s*attack(\s+int)?\s*,\s*defense\s+int\s*\)\s*int\s*\{/,
    hint: '<code>func damage(attack int, defense int) int {</code> と書く。最後の <code>int</code> は戻り値の型である。',
    output: `Aoi が仲間に加わった
Ren が仲間に加わった
ダメージ: 18
ダメージ: 1`
  },
  {
    id: 'go-08',
    phase: '関数と入力',
    title: '関数の応用',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は複数の戻り値、関数を値として扱う書き方、クロージャを使う。</p>
<p>Go の関数は、複数の値を同時に返せる。<code>(int, int)</code> は戻り値が2つあることを示す。受け取る側は <code>a, b := f()</code> のように変数を並べる。不要な値は <code>_</code>（ブランク識別子）で受け取り、捨てる。</p>
<p>Go では、関数も値の一種である。無名関数は、名前を省いて書く関数であり、変数に入れて呼び出せる。クロージャは、外側の変数を覚えたまま動く関数である。makeCounter が返す関数は変数 count を保持し、呼び出しのたびに count を 1 増やす。</p>`,
    code: `package main

import "fmt"

func divide(total int, people int) (int, int) {
	return total / people, total % people
}

func makeCounter() func() int {
	count := 0
	return func() int {
		count++
		return count
	}
}

func main() {
	each, rest := divide(17, 5)
	fmt.Println("1人", each, "個、余り", rest, "個")

	combo := makeCounter()
	combo()
	combo()
	fmt.Println("コンボ数:", combo())

	double := func(x int) int {
		return x * 2
	}
	fmt.Println(double(21))
}
`,
    blank: 'each, rest := divide(17, 5)',
    placeholder: '// divide(17, 5) の2つの戻り値を each と rest で受け取る行',
    token: /each\s*,\s*rest\s*:=\s*divide\(\s*17\s*,\s*5\s*\)/,
    hint: '<code>each, rest := divide(17, 5)</code> と書く。変数を <code>,</code> で区切って並べる。',
    output: `1人 3 個、余り 2 個
コンボ数: 3
42`
  },
  {
    id: 'go-09',
    phase: '関数と入力',
    title: '入力と文字列変換（strconv）',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者はキーボードから入力された文字列を受け取り、strconv で数値に変換する。</p>
<p><code>bufio.NewScanner(os.Stdin)</code> は、標準入力を1行ずつ読む Scanner を作る。標準入力は、プログラムがキーボードなどから受け取る入力である。<code>scanner.Scan()</code> で1行を読み、<code>scanner.Text()</code> でその文字列を取り出す。<code>strings.TrimSpace</code> は、文字列の前後の空白を取り除く。</p>
<p>入力は常に文字列であるため、計算の前に数値へ変換する。<code>strconv.Atoi</code> は文字列を int に変換し、<code>strconv.Itoa</code> は int を文字列に変換する。Atoi は変換の結果とエラーの2つを返す。エラーは失敗の情報を持つ値であり、成功の場合は nil（空の値）になる。<code>err != nil</code> は、変換に失敗したことを表す。</p>`,
    code: `package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Print("レベルを入力: ")
	scanner.Scan()
	text := strings.TrimSpace(scanner.Text())

	level, err := strconv.Atoi(text)
	if err != nil {
		fmt.Println("数字を入力してください")
		return
	}
	fmt.Println("次のレベル:", level+1)
	fmt.Println("表示用の文字列: Lv." + strconv.Itoa(level))
}
`,
    blank: 'level, err := strconv.Atoi(text)',
    placeholder: '// text を int に変換し、結果を level、エラーを err で受け取る行',
    token: /level\s*,\s*err\s*:=\s*strconv\.Atoi\(\s*text\s*\)/,
    hint: '<code>level, err := strconv.Atoi(text)</code> と書く。',
    output: `レベルを入力: 12
次のレベル: 13
表示用の文字列: Lv.12`
  },
  {
    id: 'go-10',
    phase: '関数と入力',
    title: '総合：数当てゲーム',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者はこれまでの知識を組み合わせ、1 から 100 の数を当てるゲームを作る。</p>
<p>プログラムは、math/rand/v2 パッケージの <code>rand.IntN(100)</code> で 0 から 99 の乱数を作り、1 を足して答えを決める。乱数は、実行のたびに変わる予測の難しい数である。プレイヤーは最大 7 回まで予想を入力する。</p>
<p>judge 関数は、予想と答えを比べ、「もっと大きい」「もっと小さい」「正解」のいずれかを返す。main 関数は for 文で予想を繰り返し、正解の時点で return してゲームを終える。<code>!scanner.Scan()</code> は、入力の終わりに達した場合を表す。output の見本は、答えが 42 の場合の実行例である。</p>`,
    code: `package main

import (
	"bufio"
	"fmt"
	"math/rand/v2"
	"os"
	"strconv"
)

func judge(guess int, secret int) string {
	if guess < secret {
		return "もっと大きい"
	} else if guess > secret {
		return "もっと小さい"
	}
	return "正解"
}

func main() {
	secret := rand.IntN(100) + 1
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Println("1 から 100 の数を当てるゲーム")

	for tries := 1; tries <= 7; tries++ {
		fmt.Printf("%d 回目の予想: ", tries)
		if !scanner.Scan() {
			return
		}
		guess, err := strconv.Atoi(scanner.Text())
		if err != nil {
			fmt.Println("数字を入力してください")
			continue
		}
		result := judge(guess, secret)
		fmt.Println(result)
		if result == "正解" {
			fmt.Printf("%d 回で正解した\\n", tries)
			return
		}
	}
	fmt.Println("ゲームオーバー。答えは", secret)
}
`,
    blank: 'if guess < secret {\n		return "もっと大きい"',
    placeholder: '// guess が secret より小さいときに「もっと大きい」を返す if の部分',
    token: /if\s+guess\s*<\s*secret\s*\{\s*return\s+"もっと大きい"/,
    hint: '<code>if guess &lt; secret {</code> と書き、次の行に <code>return "もっと大きい"</code> と書く。',
    output: `1 から 100 の数を当てるゲーム
1 回目の予想: 50
もっと小さい
2 回目の予想: 25
もっと大きい
3 回目の予想: 37
もっと大きい
4 回目の予想: 42
正解
4 回で正解した`
  },
  {
    id: 'go-11',
    phase: 'データ構造',
    title: '配列とスライス',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は配列とスライスを作り、append でパーティに仲間を加える。</p>
<p>配列は、同じ型の値を決まった個数で並べたデータである。<code>[3]int</code> は int を 3 個持つ配列であり、長さは作成時に固定される。要素は 0 から始まる番号（インデックス）で読み書きする。</p>
<p>スライスは、長さを変更できる列である。<code>[]string{"Aoi", "Ren"}</code> のように作り、<code>append</code> で末尾に要素を加える。append は新しいスライスを返すため、結果を元の変数に代入する。<code>party[1:]</code> は、インデックス 1 から最後までを取り出す書き方である。<code>len</code> は要素の数を返す。</p>`,
    code: `package main

import "fmt"

func main() {
	var scores [3]int
	scores[0] = 80
	scores[1] = 65
	scores[2] = 92
	fmt.Println("配列:", scores, "長さ:", len(scores))

	party := []string{"Aoi", "Ren"}
	party = append(party, "Mio")
	fmt.Println("パーティ:", party)
	fmt.Println("先頭:", party[0])
	fmt.Println("2人目以降:", party[1:])
	fmt.Println("人数:", len(party))
}
`,
    blank: 'party = append(party, "Mio")',
    placeholder: '// party の末尾に "Mio" を加え、結果を party に入れ直す行',
    token: /party\s*=\s*append\(\s*party\s*,\s*"Mio"\s*\)/,
    hint: '<code>party = append(party, "Mio")</code> と書く。',
    output: `配列: [80 65 92] 長さ: 3
パーティ: [Aoi Ren Mio]
先頭: Aoi
2人目以降: [Ren Mio]
人数: 3`
  },
  {
    id: 'go-12',
    phase: 'データ構造',
    title: 'スライスと繰り返し',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は for と range でスライスの要素を順に取り出し、ゲームのスコアの合計・最高点・平均を求める。</p>
<p><code>for i, s := range scores { }</code> は、スライスの要素を先頭から順に取り出す書き方である。i にはインデックス、s には要素の値が入る。インデックスが不要な場合は <code>_</code> で受け取る。</p>
<p>合計は、0 から始めた変数に各要素を足して求める。最高点は、先頭の値を仮の最高点とし、それより大きい値が現れたときに置き換えて求める。平均の計算では、int を <code>float64()</code> で小数の型に変換してから割る。条件に合う要素を新しいスライスに集める処理は、絞り込みと呼ばれる。</p>`,
    code: `package main

import "fmt"

func main() {
	scores := []int{72, 88, 95, 60, 81}

	total := 0
	best := scores[0]
	for i, s := range scores {
		fmt.Printf("%d 回目: %d 点\\n", i+1, s)
		total += s
		if s > best {
			best = s
		}
	}
	fmt.Println("合計:", total)
	fmt.Println("最高:", best)
	fmt.Println("平均:", float64(total)/float64(len(scores)))

	high := []int{}
	for _, s := range scores {
		if s >= 80 {
			high = append(high, s)
		}
	}
	fmt.Println("80 点以上:", high)
}
`,
    blank: 'for i, s := range scores {',
    placeholder: '// scores のインデックスを i、値を s で受け取る range の行',
    token: /for\s+i\s*,\s*s\s*:=\s*range\s+scores\s*\{/,
    hint: '<code>for i, s := range scores {</code> と書く。',
    output: `1 回目: 72 点
2 回目: 88 点
3 回目: 95 点
4 回目: 60 点
5 回目: 81 点
合計: 396
最高: 95
平均: 79.2
80 点以上: [88 95 81]`
  },
  {
    id: 'go-13',
    phase: 'データ構造',
    title: 'マップ',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者はマップでアイテムの個数を管理し、追加・変更・削除・存在の確認を行う。</p>
<p>マップは、キーと値の組を保存するデータである。<code>map[string]int</code> は、string のキーに int の値を対応させる。<code>items["鍵"] = 2</code> で組の追加や変更を行い、<code>delete(items, "エーテル")</code> で組を削除する。</p>
<p><code>count, ok := items["鍵"]</code> は、値と、キーが存在するかを表す bool を同時に受け取る。キーが未登録の場合、値はその型のゼロ値（int では 0）になり、ok は false になる。マップを range で回す順番は、実行のたびに変わる。順番をそろえる場面では、キーをスライスに集め、<code>sort.Strings</code> で並べ替えてから表示する。</p>`,
    code: `package main

import (
	"fmt"
	"sort"
)

func main() {
	items := map[string]int{
		"ポーション": 3,
		"エーテル":  1,
	}
	items["鍵"] = 2
	items["ポーション"]--
	delete(items, "エーテル")

	count, ok := items["鍵"]
	fmt.Println("鍵:", count, ok)
	_, ok = items["地図"]
	fmt.Println("地図:", ok)

	names := []string{}
	for name := range items {
		names = append(names, name)
	}
	sort.Strings(names)
	for _, name := range names {
		fmt.Println(name, items[name])
	}
	fmt.Println("種類:", len(items))
}
`,
    blank: 'count, ok := items["鍵"]',
    placeholder: '// キー "鍵" の値を count、存在の有無を ok で受け取る行',
    token: /count\s*,\s*ok\s*:=\s*items\[\s*"鍵"\s*\]/,
    hint: '<code>count, ok := items["鍵"]</code> と書く。',
    output: `鍵: 2 true
地図: false
ポーション 2
鍵 2
種類: 2`
  },
  {
    id: 'go-14',
    phase: 'データ構造',
    title: 'ポインタ',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者はポインタを使い、関数の中から呼び出し元の変数を書き換える。</p>
<p>ポインタは、変数がメモリ上のどこにあるか（アドレス）を持つ値である。<code>&amp;hp</code> は変数 hp のアドレスを表し、<code>*p</code> はポインタ p が指す先の値を表す。<code>*int</code> は「int を指すポインタ」の型である。</p>
<p>Go の関数は、引数の値のコピーを受け取る。healCopy の中で hp を増やしても、変化はコピーに限られ、main の hp は 50 のままである。heal はアドレスを受け取るため、<code>*hp += 20</code> で main の hp そのものを書き換える。</p>`,
    code: `package main

import "fmt"

func healCopy(hp int) {
	hp += 20
}

func heal(hp *int) {
	*hp += 20
}

func main() {
	hp := 50
	p := &hp
	fmt.Println("p が指す値:", *p)

	healCopy(hp)
	fmt.Println("コピーを渡した後:", hp)

	heal(&hp)
	fmt.Println("ポインタを渡した後:", hp)
}
`,
    blank: '*hp += 20',
    placeholder: '// ポインタ hp が指す先の値に 20 を足す行',
    token: /\*hp\s*\+=\s*20/,
    hint: '<code>*hp += 20</code> と書く。先頭の <code>*</code> は、ポインタが指す先の値を表す。',
    output: `p が指す値: 50
コピーを渡した後: 50
ポインタを渡した後: 70`
  },
  {
    id: 'go-15',
    phase: 'データ構造',
    title: '構造体',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は構造体 Hero を定義し、名前・HP・攻撃力をひとまとめに扱う。</p>
<p>構造体は、複数の値をひとまとめにした型である。<code>type Hero struct { }</code> の中に、フィールド（構造体が持つ値）の名前と型を並べる。<code>Hero{Name: "Aoi", HP: 100, Power: 12}</code> の形で値を作り、<code>h.HP</code> のようにドットでフィールドを読み書きする。</p>
<p>構造体はスライスの要素にもなる。<code>[]Hero</code> を range で回すと、パーティ全員の値をまとめて計算できる。<code>%+v</code> は、フィールド名と値を並べて表示する書式指定子である。大文字で始まるフィールド名は、ほかのパッケージからも読める名前になる。</p>`,
    code: `package main

import "fmt"

type Hero struct {
	Name  string
	HP    int
	Power int
}

func main() {
	h := Hero{Name: "Aoi", HP: 100, Power: 12}
	h.HP -= 25
	fmt.Println(h.Name, "の HP:", h.HP)
	fmt.Printf("%+v\\n", h)

	party := []Hero{
		h,
		{Name: "Ren", HP: 80, Power: 15},
	}
	total := 0
	for _, m := range party {
		total += m.Power
	}
	fmt.Println("パーティの攻撃力:", total)
}
`,
    blank: 'h := Hero{Name: "Aoi", HP: 100, Power: 12}',
    placeholder: '// Name が Aoi、HP が 100、Power が 12 の Hero を作り、h に入れる行',
    token: /h\s*:=\s*Hero\{\s*Name:\s*"Aoi"\s*,\s*HP:\s*100\s*,\s*Power:\s*12\s*,?\s*\}/,
    hint: '<code>h := Hero{Name: "Aoi", HP: 100, Power: 12}</code> と書く。',
    output: `Aoi の HP: 75
{Name:Aoi HP:75 Power:12}
パーティの攻撃力: 27`
  },
  {
    id: 'go-16',
    phase: 'データ構造',
    title: 'メソッド',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は構造体 Hero にメソッドを定義し、状態の表示とダメージの処理を行う。</p>
<p>メソッドは、特定の型に結びついた関数である。<code>func (h Hero) Status() string</code> の <code>(h Hero)</code> をレシーバといい、メソッドを呼び出した値が h に入る。<code>h.Status()</code> のように、値の後にドットとメソッド名を書いて呼び出す。</p>
<p>値レシーバ <code>(h Hero)</code> は、値のコピーを受け取る。値を書き換えるメソッドには、ポインタレシーバ <code>(h *Hero)</code> を使う。ポインタレシーバのメソッドは、呼び出し元の構造体そのものを変更する。Go は <code>h.TakeDamage(15)</code> の呼び出しで、h のアドレスを自動で渡す。</p>`,
    code: `package main

import "fmt"

type Hero struct {
	Name string
	HP   int
}

func (h Hero) Status() string {
	return fmt.Sprintf("%s (HP %d)", h.Name, h.HP)
}

func (h *Hero) TakeDamage(d int) {
	h.HP -= d
	if h.HP < 0 {
		h.HP = 0
	}
}

func main() {
	h := Hero{Name: "Aoi", HP: 40}
	fmt.Println(h.Status())
	h.TakeDamage(15)
	fmt.Println(h.Status())
	h.TakeDamage(50)
	fmt.Println(h.Status())
}
`,
    blank: 'func (h *Hero) TakeDamage(d int) {',
    placeholder: '// ポインタレシーバ h *Hero を持ち、int の d を受け取るメソッド TakeDamage の最初の行',
    token: /func\s*\(\s*h\s+\*Hero\s*\)\s*TakeDamage\(\s*d\s+int\s*\)\s*\{/,
    hint: '<code>func (h *Hero) TakeDamage(d int) {</code> と書く。',
    output: `Aoi (HP 40)
Aoi (HP 25)
Aoi (HP 0)`
  },
  {
    id: 'go-17',
    phase: 'データ構造',
    title: '総合：月のカレンダーを表示するプログラム',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は time パッケージを使い、2026 年 4 月のカレンダーとゲームの予定を表示するプログラムを作る。</p>
<p><code>time.Date(年, 月, 日, 時, 分, 秒, ナノ秒, 場所)</code> は日時を表す値を作る。<code>Weekday()</code> は曜日を返し、int に変換すると日曜が 0、土曜が 6 になる。月の日数は、翌月の 0 日を作る方法で求める。Go は 0 日を前の月の最終日として扱う。</p>
<p>printCalendar は、1 日の曜日の番号と同じ個数の空白を出し、日付を <code>%3d</code>（3 文字の幅）で並べる。<code>(start+day)%7 == 0</code> が true になる日は土曜日であり、その後で改行する。予定はマップ <code>map[int]string</code> で管理し、1 日から順に調べて表示する。</p>`,
    code: `package main

import (
	"fmt"
	"time"
)

func daysIn(year int, month time.Month) int {
	return time.Date(year, month+1, 0, 0, 0, 0, 0, time.UTC).Day()
}

func printCalendar(year int, month time.Month, events map[int]string) {
	fmt.Printf("    %d年 %d月\\n", year, int(month))
	fmt.Println(" 日 月 火 水 木 金 土")

	first := time.Date(year, month, 1, 0, 0, 0, 0, time.UTC)
	start := int(first.Weekday())
	for i := 0; i < start; i++ {
		fmt.Print("   ")
	}
	last := daysIn(year, month)
	for day := 1; day <= last; day++ {
		fmt.Printf("%3d", day)
		if (start+day)%7 == 0 {
			fmt.Println()
		}
	}
	fmt.Println()

	fmt.Println("予定:")
	for day := 1; day <= last; day++ {
		if name, ok := events[day]; ok {
			fmt.Printf("  %d日 %s\\n", day, name)
		}
	}
}

func main() {
	events := map[int]string{
		3:  "ボス戦",
		18: "スコア大会",
		29: "新ステージ公開",
	}
	printCalendar(2026, time.April, events)
}
`,
    blank: 'if (start+day)%7 == 0 {',
    placeholder: '// その日が土曜日かを調べる if の行',
    token: /if\s*\(\s*start\s*\+\s*day\s*\)\s*%\s*7\s*==\s*0\s*\{/,
    hint: '<code>if (start+day)%7 == 0 {</code> と書く。',
    output: `    2026年 4月
 日 月 火 水 木 金 土
           1  2  3  4
  5  6  7  8  9 10 11
 12 13 14 15 16 17 18
 19 20 21 22 23 24 25
 26 27 28 29 30
予定:
  3日 ボス戦
  18日 スコア大会
  29日 新ステージ公開`
  },
  {
    id: 'go-18',
    phase: '実務で使う機能',
    title: 'エラー処理',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は error を返す関数を作り、MP 不足のエラーを判定して処理を分ける。</p>
<p>Go では、失敗の可能性がある関数は、最後の戻り値で error を返す。error は失敗の内容を表す型であり、成功時は nil を返す。呼び出し側は <code>if err != nil { }</code> でエラーを確かめ、失敗時の処理を書く。</p>
<p><code>errors.New</code> は、決まった内容のエラーを作る。<code>fmt.Errorf</code> の <code>%w</code> は、元のエラーを包んで新しいエラーを作る。<code>errors.Is(err, ErrNoMP)</code> は、包まれたエラーの中に ErrNoMP が含まれるかを調べる。この仕組みにより、呼び出し側はエラーの種類ごとに対応を変えられる。</p>`,
    code: `package main

import (
	"errors"
	"fmt"
)

var ErrNoMP = errors.New("MP 不足")

func castSpell(mp int, cost int) (int, error) {
	if cost > mp {
		return mp, fmt.Errorf("魔法の発動に失敗: %w", ErrNoMP)
	}
	return mp - cost, nil
}

func main() {
	mp := 10
	for _, cost := range []int{6, 6} {
		rest, err := castSpell(mp, cost)
		if err != nil {
			fmt.Println("エラー:", err)
			if errors.Is(err, ErrNoMP) {
				fmt.Println("ポーションで MP を回復する")
			}
			continue
		}
		mp = rest
		fmt.Println("魔法を使った。残り MP:", mp)
	}
}
`,
    blank: 'return mp, fmt.Errorf("魔法の発動に失敗: %w", ErrNoMP)',
    placeholder: '// mp と、ErrNoMP を %w で包んだエラーを返す行',
    token: /return\s+mp\s*,\s*fmt\.Errorf\(\s*"魔法の発動に失敗: %w"\s*,\s*ErrNoMP\s*\)/,
    hint: '<code>return mp, fmt.Errorf("魔法の発動に失敗: %w", ErrNoMP)</code> と書く。',
    output: `魔法を使った。残り MP: 4
エラー: 魔法の発動に失敗: MP 不足
ポーションで MP を回復する`
  },
  {
    id: 'go-19',
    phase: '実務で使う機能',
    title: 'interface',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は interface を定義し、剣と杖という異なる武器を同じ関数で扱う。</p>
<p>interface は、メソッドの一覧によって「何ができるか」を表す型である。Weapon interface は、Name と Damage の2つのメソッドを持つ型を表す。Go では、必要なメソッドをすべて持つ型は、特別な宣言を省いて自動で interface を満たす。</p>
<p>Sword と Wand はどちらも Name と Damage を持つため、Weapon として扱える。<code>[]Weapon</code> に両方を入れて range で同じように呼び出すと、それぞれの型のメソッドが実行される。<code>w.(Sword)</code> は型アサーションであり、interface の値から元の型の値を取り出す。ok は取り出しの成否を表す。</p>`,
    code: `package main

import "fmt"

type Weapon interface {
	Name() string
	Damage() int
}

type Sword struct {
	Level int
}

func (s Sword) Name() string { return "剣" }
func (s Sword) Damage() int  { return 10 + s.Level*2 }

type Wand struct {
	MP int
}

func (w Wand) Name() string { return "杖" }
func (w Wand) Damage() int  { return w.MP / 2 }

func useWeapon(w Weapon) {
	fmt.Printf("%s で %d のダメージ\\n", w.Name(), w.Damage())
}

func main() {
	weapons := []Weapon{Sword{Level: 3}, Wand{MP: 40}}
	total := 0
	for _, w := range weapons {
		useWeapon(w)
		total += w.Damage()
	}
	fmt.Println("合計:", total)

	var w Weapon = Sword{Level: 1}
	if s, ok := w.(Sword); ok {
		fmt.Println("剣のレベル:", s.Level)
	}
}
`,
    blank: 'weapons := []Weapon{Sword{Level: 3}, Wand{MP: 40}}',
    placeholder: '// Level 3 の Sword と MP 40 の Wand を入れた []Weapon を weapons に作る行',
    token: /weapons\s*:=\s*\[\]Weapon\{\s*Sword\{\s*Level:\s*3\s*\}\s*,\s*Wand\{\s*MP:\s*40\s*\}\s*,?\s*\}/,
    hint: '<code>weapons := []Weapon{Sword{Level: 3}, Wand{MP: 40}}</code> と書く。',
    output: `剣 で 16 のダメージ
杖 で 20 のダメージ
合計: 36
剣のレベル: 1`
  },
  {
    id: 'go-20',
    phase: '実務で使う機能',
    title: 'defer とファイル I/O',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は defer を使い、ファイルへのスコアの保存と読み込みを安全に行う。</p>
<p><code>defer</code> は、指定した関数の呼び出しを、囲んでいる関数の終了時まで遅らせる命令である。複数の defer は、後に書いたものから順に実行される。ファイルを開いた直後に <code>defer f.Close()</code> と書くと、関数の途中で return した場合でもファイルが確実に閉じられる。</p>
<p><code>os.Create</code> はファイルを新しく作って書き込み用に開き、<code>fmt.Fprintln</code> はファイルに1行を書き込む。<code>os.Open</code> はファイルを読み込み用に開く。bufio.Scanner は、標準入力と同じ方法でファイルを1行ずつ読む。</p>`,
    code: `package main

import (
	"bufio"
	"fmt"
	"os"
)

func saveScores(path string, scores []int) error {
	f, err := os.Create(path)
	if err != nil {
		return err
	}
	defer f.Close()
	for _, s := range scores {
		fmt.Fprintln(f, s)
	}
	return nil
}

func main() {
	defer fmt.Println("プログラムを終了する")

	if err := saveScores("scores.txt", []int{120, 340, 95}); err != nil {
		fmt.Println("保存に失敗:", err)
		return
	}
	fmt.Println("scores.txt に保存した")

	in, err := os.Open("scores.txt")
	if err != nil {
		fmt.Println("読み込みに失敗:", err)
		return
	}
	defer in.Close()

	scanner := bufio.NewScanner(in)
	line := 1
	for scanner.Scan() {
		fmt.Printf("%d 行目: %s\\n", line, scanner.Text())
		line++
	}
}
`,
    blank: 'defer f.Close()',
    placeholder: '// saveScores の終了時に f を閉じる defer の行',
    token: /defer\s+f\.Close\(\)/,
    hint: '<code>defer f.Close()</code> と書く。',
    output: `scores.txt に保存した
1 行目: 120
2 行目: 340
3 行目: 95
プログラムを終了する`
  },
  {
    id: 'go-21',
    phase: '実務で使う機能',
    title: '複数ファイルと JSON',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者はセーブデータの型を別ファイルに分け、encoding/json で JSON との変換を行う。</p>
<p>Go では、同じフォルダにある同じパッケージのファイルは、1つのプログラムとしてまとめてコンパイルされる。save.go に書いた型 SaveData は、main.go からそのまま使える。複数ファイルのプログラムは <code>go run .</code> で実行する。</p>
<pre>dungeon/
  go.mod
  main.go
  save.go</pre>
<pre>// save.go
package main

type SaveData struct {
    Name  string   \`json:"name"\`
    Level int      \`json:"level"\`
    Items []string \`json:"items"\`
}</pre>
<p>JSON は、データを文字で表すための広く使われる形式である。<code>json.Marshal</code> は構造体を JSON のバイト列に変換し、<code>json.Unmarshal</code> は JSON を構造体に読み込む。フィールドの後の <code>\`json:"name"\`</code> はタグであり、JSON でのキー名を指定する。</p>`,
    code: `package main

import (
	"encoding/json"
	"fmt"
)

func main() {
	data := SaveData{Name: "Aoi", Level: 5, Items: []string{"剣", "鍵"}}
	bytes, err := json.Marshal(data)
	if err != nil {
		fmt.Println("変換に失敗:", err)
		return
	}
	fmt.Println(string(bytes))

	text := \`{"name":"Ren","level":9,"items":["弓"]}\`
	var loaded SaveData
	if err := json.Unmarshal([]byte(text), &loaded); err != nil {
		fmt.Println("読み込みに失敗:", err)
		return
	}
	fmt.Println(loaded.Name, loaded.Level, loaded.Items)
}
`,
    blank: 'bytes, err := json.Marshal(data)',
    placeholder: '// data を JSON に変換し、結果を bytes、エラーを err で受け取る行',
    token: /bytes\s*,\s*err\s*:=\s*json\.Marshal\(\s*data\s*\)/,
    hint: '<code>bytes, err := json.Marshal(data)</code> と書く。',
    output: `{"name":"Aoi","level":5,"items":["剣","鍵"]}
Ren 9 [弓]`
  },
  {
    id: 'go-22',
    phase: '実務で使う機能',
    title: 'テスト',
    type: 'code',
    run: 'static',
    file: 'main_test.go',
    story: `<p class="lead">学習者は testing パッケージでテストを書き、Damage 関数の計算が正しいことを go test で確かめる。</p>
<p>テストは、関数が期待どおりに動くかをプログラムで確かめる仕組みである。Go では、ファイル名を <code>_test.go</code> で終え、<code>func TestXxx(t *testing.T)</code> の形で関数を書く。<code>go test -v</code> を実行すると、Go はテスト関数を順に実行し、結果を表示する。対象の Damage 関数は main.go にある。</p>
<pre>func Damage(attack, defense int) int {
    if attack-defense &lt; 1 {
        return 1
    }
    return attack - defense
}</pre>
<p><code>t.Errorf</code> は、失敗の内容を記録する。テーブル駆動テストは、入力と期待値の組をスライスに並べ、range で順に確かめる書き方である。組を1行加えると、新しい場面のテストが1つ増える。</p>`,
    code: `package main

import "testing"

func TestDamage(t *testing.T) {
	got := Damage(30, 12)
	if got != 18 {
		t.Errorf("Damage(30, 12) = %d; 期待値は 18", got)
	}
}

func TestDamageMinimum(t *testing.T) {
	tests := []struct {
		attack, defense, want int
	}{
		{5, 20, 1},
		{10, 10, 1},
		{11, 10, 1},
	}
	for _, tt := range tests {
		got := Damage(tt.attack, tt.defense)
		if got != tt.want {
			t.Errorf("Damage(%d, %d) = %d; 期待値は %d", tt.attack, tt.defense, got, tt.want)
		}
	}
}
`,
    blank: 'if got != 18 {',
    placeholder: '// got が期待値 18 と異なるかを調べる if の行',
    token: /if\s+got\s*!=\s*18\s*\{/,
    hint: '<code>if got != 18 {</code> と書く。<code>!=</code> は「異なる」を表す。',
    output: `$ go test -v
=== RUN   TestDamage
--- PASS: TestDamage (0.00s)
=== RUN   TestDamageMinimum
--- PASS: TestDamageMinimum (0.00s)
PASS
ok      dungeon 0.002s`
  },
  {
    id: 'go-23',
    phase: '並行処理と Web',
    title: 'goroutine とチャネルの基本',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は goroutine で3人の必殺技のチャージを同時に進め、チャネルで完了の知らせを受け取る。</p>
<p>goroutine は、Go が並行に実行する軽量な処理の単位である。並行処理は、複数の処理を同じ時間帯に進める仕組みである。関数呼び出しの前に <code>go</code> を書くと、その関数は新しい goroutine で動き、main はすぐ次の行に進む。</p>
<p>チャネルは、goroutine の間で値を受け渡す通り道である。<code>make(chan string)</code> で作り、<code>done &lt;- 値</code> で送信し、<code>&lt;-done</code> で受信する。受信は、値が届くまでその場で待つ。そのため、待ち時間の短い Ren から順に完了の知らせが届く。</p>`,
    code: `package main

import (
	"fmt"
	"time"
)

func charge(name string, ms int, done chan string) {
	time.Sleep(time.Duration(ms) * time.Millisecond)
	done <- name + " のチャージ完了"
}

func main() {
	done := make(chan string)
	go charge("Aoi", 300, done)
	go charge("Ren", 100, done)
	go charge("Mio", 200, done)

	for i := 0; i < 3; i++ {
		msg := <-done
		fmt.Println(msg)
	}
	fmt.Println("全員の準備が整った")
}
`,
    blank: 'done <- name + " のチャージ完了"',
    placeholder: '// name に「 のチャージ完了」をつなげた文字列を done に送る行',
    token: /done\s*<-\s*name\s*\+\s*" のチャージ完了"/,
    hint: '<code>done &lt;- name + " のチャージ完了"</code> と書く。<code>&lt;-</code> は送信を表す。',
    output: `Ren のチャージ完了
Mio のチャージ完了
Aoi のチャージ完了
全員の準備が整った`
  },
  {
    id: 'go-24',
    phase: '並行処理と Web',
    title: '並行処理の応用',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は sync.WaitGroup と sync.Mutex で100人分のスコアを安全に集計し、select で待ち時間に上限を設ける。</p>
<p>複数の goroutine が同じ変数を同時に書き換えると、値が壊れる場合がある。この問題をデータ競合という。<code>sync.Mutex</code> は、Lock から Unlock までの区間を、一度に1つの goroutine に限って実行させる鍵である。</p>
<p><code>sync.WaitGroup</code> は、goroutine の完了を待つ道具である。Add で待つ数を増やし、各 goroutine が Done で完了を伝え、Wait で全員の完了まで待つ。select は、複数のチャネルのうち先に値が届いたものを処理する。<code>time.After</code> と組み合わせると、待ち時間の上限を設定できる。</p>`,
    code: `package main

import (
	"fmt"
	"sync"
	"time"
)

type Scoreboard struct {
	mu    sync.Mutex
	total int
}

func (s *Scoreboard) Add(n int) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.total += n
}

func main() {
	board := &Scoreboard{}
	var wg sync.WaitGroup
	for player := 1; player <= 100; player++ {
		wg.Add(1)
		go func(p int) {
			defer wg.Done()
			board.Add(p)
		}(player)
	}
	wg.Wait()
	fmt.Println("合計スコア:", board.total)

	result := make(chan string)
	go func() {
		time.Sleep(50 * time.Millisecond)
		result <- "ボスの行動が決まった"
	}()
	select {
	case msg := <-result:
		fmt.Println(msg)
	case <-time.After(time.Second):
		fmt.Println("時間切れ")
	}
}
`,
    blank: 's.mu.Lock()\n	defer s.mu.Unlock()',
    placeholder: '// 鍵をかけ、関数の終了時に鍵を外す2行',
    token: /s\.mu\.Lock\(\)\s*defer\s+s\.mu\.Unlock\(\)/,
    hint: '<code>s.mu.Lock()</code> と書き、次の行に <code>defer s.mu.Unlock()</code> と書く。',
    output: `合計スコア: 5050
ボスの行動が決まった`
  },
  {
    id: 'go-25',
    phase: '並行処理と Web',
    title: 'HTTP ハンドラ',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は net/http のハンドラを作り、あいさつとランキングを返す Web API の動きを httptest で確かめる。</p>
<p>ハンドラは、HTTP リクエストを受け取り、レスポンスを書く関数である。<code>func(w http.ResponseWriter, r *http.Request)</code> の形を持ち、w に書いた内容がブラウザなどへ返る。<code>r.URL.Query().Get("name")</code> は、URL の <code>?name=Aoi</code> の部分の値を取り出す。</p>
<p><code>http.NewServeMux</code> は、URL のパスとハンドラを対応させるルーターを作る。<code>"GET /hello"</code> の形で、HTTP メソッドとパスを同時に指定する。本番のサーバーは <code>http.ListenAndServe(":8080", mux)</code> で起動し、ブラウザで localhost:8080/hello を開いて確かめる。この教材では、httptest でリクエストを疑似的に作り、サーバーの起動を省いて結果を確かめる。</p>`,
    code: `package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"strings"
)

type Ranking struct {
	Player string \`json:"player"\`
	Score  int    \`json:"score"\`
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if name == "" {
		name = "ゲスト"
	}
	fmt.Fprintf(w, "ようこそ、%s さん", name)
}

func rankingHandler(w http.ResponseWriter, r *http.Request) {
	list := []Ranking{{"Aoi", 980}, {"Ren", 870}}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(list)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /hello", helloHandler)
	mux.HandleFunc("GET /ranking", rankingHandler)

	// 本番では http.ListenAndServe(":8080", mux) でサーバーを起動する
	for _, path := range []string{"/hello?name=Aoi", "/hello", "/ranking"} {
		req := httptest.NewRequest("GET", path, nil)
		rec := httptest.NewRecorder()
		mux.ServeHTTP(rec, req)
		fmt.Println(rec.Code, strings.TrimSpace(rec.Body.String()))
	}
}
`,
    blank: 'mux.HandleFunc("GET /hello", helloHandler)',
    placeholder: '// GET /hello に helloHandler を対応させる行',
    token: /mux\.HandleFunc\(\s*"GET \/hello"\s*,\s*helloHandler\s*\)/,
    hint: '<code>mux.HandleFunc("GET /hello", helloHandler)</code> と書く。',
    output: `200 ようこそ、Aoi さん
200 ようこそ、ゲスト さん
200 [{"player":"Aoi","score":980},{"player":"Ren","score":870}]`
  },
  {
    id: 'go-26',
    phase: '並行処理と Web',
    title: 'CLI 開発の仕上げ',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は flag パッケージでコマンドライン引数を受け取り、ダンジョンの設定を変えられる CLI を仕上げる。</p>
<p>CLI（コマンドラインインタフェース）は、ターミナルで文字のコマンドを使って操作するプログラムである。flag パッケージは、<code>-name Aoi</code> のようなオプションを読み取る。<code>flag.String("name", "Hero", "説明")</code> は、オプション名、既定値、説明を受け取り、値へのポインタを返す。<code>flag.Parse()</code> の後、<code>*name</code> で値を読む。</p>
<p>誤った値への対応も CLI の仕上げの一部である。エラーのメッセージは <code>os.Stderr</code>（標準エラー出力）に書き、<code>os.Exit(1)</code> で失敗を表す終了コードを返す。<code>go build -o dungeon</code> は実行ファイルを作るコマンドであり、<code>./dungeon -h</code> でオプションの一覧が表示される。</p>`,
    code: `package main

import (
	"flag"
	"fmt"
	"os"
	"strings"
)

func main() {
	name := flag.String("name", "Hero", "主人公の名前")
	floors := flag.Int("floors", 3, "ダンジョンの階数")
	hard := flag.Bool("hard", false, "難しいモード")
	flag.Parse()

	if *floors < 1 || *floors > 10 {
		fmt.Fprintln(os.Stderr, "floors は 1 から 10 の範囲で指定する")
		os.Exit(1)
	}
	mode := "ふつう"
	if *hard {
		mode = "むずかしい"
	}
	fmt.Printf("主人公: %s / 階数: %d / モード: %s\\n", *name, *floors, mode)
	for i := 1; i <= *floors; i++ {
		fmt.Printf("B%dF %s\\n", i, strings.Repeat("■", i))
	}
}
`,
    blank: 'name := flag.String("name", "Hero", "主人公の名前")',
    placeholder: '// オプション -name を既定値 Hero、説明「主人公の名前」で定義する行',
    token: /name\s*:=\s*flag\.String\(\s*"name"\s*,\s*"Hero"\s*,\s*"主人公の名前"\s*\)/,
    hint: '<code>name := flag.String("name", "Hero", "主人公の名前")</code> と書く。',
    output: `$ go run main.go -name Aoi -floors 3 -hard
主人公: Aoi / 階数: 3 / モード: むずかしい
B1F ■
B2F ■■
B3F ■■■
$ go run main.go -floors 20
floors は 1 から 10 の範囲で指定する
exit status 1`
  },
  {
    id: 'go-27',
    phase: '発展と総合',
    title: '発展的な書き方（ジェネリクス）',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は型パラメータを使い、int・string・float64 のどれにも使える関数と、汎用のスタックを作る。</p>
<p>ジェネリクスは、型を引数のように受け取り、1つの定義を複数の型で使う仕組みである。<code>func MaxOf[T cmp.Ordered](values []T) T</code> の T を型パラメータという。<code>cmp.Ordered</code> は制約であり、<code>&lt;</code> や <code>&gt;</code> で比べられる型に T を限定する。<code>any</code> は、すべての型を受け入れる制約である。</p>
<p><code>Stack[T any]</code> は、要素の型を後から決める構造体である。<code>Stack[string]</code> と書くと、string 専用のスタックになる。スタックは、最後に入れた要素を最初に取り出すデータ構造であり、操作の取り消しの記録などに使う。<code>var zero T</code> は、T の型のゼロ値を表す。</p>`,
    code: `package main

import (
	"cmp"
	"fmt"
)

func MaxOf[T cmp.Ordered](values []T) T {
	best := values[0]
	for _, v := range values[1:] {
		if v > best {
			best = v
		}
	}
	return best
}

func Filter[T any](values []T, keep func(T) bool) []T {
	result := []T{}
	for _, v := range values {
		if keep(v) {
			result = append(result, v)
		}
	}
	return result
}

type Stack[T any] struct {
	items []T
}

func (s *Stack[T]) Push(v T) {
	s.items = append(s.items, v)
}

func (s *Stack[T]) Pop() (T, bool) {
	var zero T
	if len(s.items) == 0 {
		return zero, false
	}
	last := s.items[len(s.items)-1]
	s.items = s.items[:len(s.items)-1]
	return last, true
}

func main() {
	fmt.Println(MaxOf([]int{40, 95, 72}))
	fmt.Println(MaxOf([]string{"slime", "dragon", "golem"}))
	fmt.Println(MaxOf([]float64{1.5, 0.2, 3.25}))

	strong := Filter([]int{12, 55, 30, 81}, func(p int) bool { return p >= 30 })
	fmt.Println(strong)

	var history Stack[string]
	history.Push("北へ移動")
	history.Push("宝箱を開ける")
	action, _ := history.Pop()
	fmt.Println("取り消し:", action)
}
`,
    blank: 'func MaxOf[T cmp.Ordered](values []T) T {',
    placeholder: '// 制約 cmp.Ordered の型パラメータ T を持ち、[]T を受け取って T を返す関数 MaxOf の最初の行',
    token: /func\s+MaxOf\[\s*T\s+cmp\.Ordered\s*\]\(\s*values\s+\[\]T\s*\)\s*T\s*\{/,
    hint: '<code>func MaxOf[T cmp.Ordered](values []T) T {</code> と書く。型パラメータは <code>[ ]</code> の中に書く。',
    output: `95
slime
3.25
[55 30 81]
取り消し: 宝箱を開ける`
  },
  {
    id: 'go-28',
    phase: '発展と総合',
    title: '総合：ターン制ダンジョン探索ゲーム CLI',
    type: 'code',
    run: 'static',
    file: 'main.go',
    story: `<p class="lead">学習者は構造体・マップ・メソッド・エラー処理を組み合わせ、コマンドで遊ぶターン制のダンジョン探索ゲームを作る。</p>
<p>Game 構造体は、部屋のマップ、現在地、HP、攻撃力、ターン数を持つ。部屋は Room 構造体で表し、出口は「方向から部屋の名前へ」のマップで表す。モンスターがいる部屋では、Move メソッドが ErrBlocked を返し、先へ進む操作を止める。</p>
<p>main 関数は、1行のコマンドを <code>strings.Fields</code> で単語に分け、switch で処理を選ぶ。コマンドは look（周りを見る）、go 方向（移動）、attack（攻撃）、take（拾う）、quit（終了）である。王冠を拾った時点でクリアとなり、かかったターン数を表示する。</p>`,
    code: `package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"sort"
	"strings"
)

type Monster struct {
	Name  string
	HP    int
	Power int
}

type Room struct {
	Name    string
	Exits   map[string]string
	Monster *Monster
	Item    string
}

type Game struct {
	Rooms map[string]*Room
	Here  string
	HP    int
	Power int
	Turn  int
}

var ErrBlocked = errors.New("モンスターが行く手をふさぐ")

func newGame() *Game {
	rooms := map[string]*Room{
		"入口": {Name: "入口", Exits: map[string]string{"north": "通路"}},
		"通路": {Name: "通路", Exits: map[string]string{"south": "入口", "east": "宝物庫"},
			Monster: &Monster{Name: "スライム", HP: 12, Power: 3}},
		"宝物庫": {Name: "宝物庫", Exits: map[string]string{"west": "通路"}, Item: "王冠"},
	}
	return &Game{Rooms: rooms, Here: "入口", HP: 30, Power: 5}
}

func (g *Game) room() *Room {
	return g.Rooms[g.Here]
}

func (g *Game) Look() {
	r := g.room()
	dirs := []string{}
	for d := range r.Exits {
		dirs = append(dirs, d)
	}
	sort.Strings(dirs)
	fmt.Printf("%sにいる。出口: %s\\n", r.Name, strings.Join(dirs, ", "))
	if r.Monster != nil {
		fmt.Printf("%s（HP %d）がいる\\n", r.Monster.Name, r.Monster.HP)
	}
	if r.Item != "" {
		fmt.Printf("%sが落ちている\\n", r.Item)
	}
}

func (g *Game) Move(dir string) error {
	r := g.room()
	if r.Monster != nil {
		return ErrBlocked
	}
	next, ok := r.Exits[dir]
	if !ok {
		return fmt.Errorf("%s の方向は壁である", dir)
	}
	g.Here = next
	return nil
}

func (g *Game) Attack() {
	m := g.room().Monster
	if m == nil {
		fmt.Println("この部屋は静かである")
		return
	}
	m.HP -= g.Power
	if m.HP <= 0 {
		fmt.Printf("%sを倒した\\n", m.Name)
		g.room().Monster = nil
		return
	}
	fmt.Printf("%sに %d のダメージ（残り HP %d）\\n", m.Name, g.Power, m.HP)
	g.HP -= m.Power
	fmt.Printf("%sの反撃。%d のダメージ（自分の HP %d）\\n", m.Name, m.Power, g.HP)
}

func (g *Game) Take() bool {
	r := g.room()
	if r.Item == "" {
		fmt.Println("この部屋は空である")
		return false
	}
	fmt.Printf("%sを手に入れた\\n", r.Item)
	won := r.Item == "王冠"
	r.Item = ""
	return won
}

func main() {
	g := newGame()
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Println("ダンジョンに入った。コマンド: look, go 方向, attack, take, quit")
	for g.HP > 0 {
		fmt.Print("> ")
		if !scanner.Scan() {
			break
		}
		words := strings.Fields(scanner.Text())
		if len(words) == 0 {
			continue
		}
		g.Turn++
		switch words[0] {
		case "look":
			g.Look()
		case "go":
			if len(words) < 2 {
				fmt.Println("方向を指定する（例: go north）")
				continue
			}
			if err := g.Move(words[1]); err != nil {
				fmt.Println(err)
				continue
			}
			g.Look()
		case "attack":
			g.Attack()
		case "take":
			if g.Take() {
				fmt.Printf("%d ターンでクリアした\\n", g.Turn)
				return
			}
		case "quit":
			fmt.Println("冒険を中断した")
			return
		default:
			fmt.Println("未知のコマンド:", words[0])
		}
	}
	if g.HP <= 0 {
		fmt.Println("力尽きた。ゲームオーバー")
	}
}
`,
    blank: 'if err := g.Move(words[1]); err != nil {',
    placeholder: '// Move の結果を err に入れ、エラーの有無を調べる if の行',
    token: /if\s+err\s*:=\s*g\.Move\(\s*words\[\s*1\s*\]\s*\)\s*;\s*err\s*!=\s*nil\s*\{/,
    hint: '<code>if err := g.Move(words[1]); err != nil {</code> と書く。if の中で、変数の作成と条件を <code>;</code> で区切る。',
    output: `ダンジョンに入った。コマンド: look, go 方向, attack, take, quit
> look
入口にいる。出口: north
> go north
通路にいる。出口: east, south
スライム（HP 12）がいる
> go east
モンスターが行く手をふさぐ
> attack
スライムに 5 のダメージ（残り HP 7）
スライムの反撃。3 のダメージ（自分の HP 27）
> attack
スライムに 5 のダメージ（残り HP 2）
スライムの反撃。3 のダメージ（自分の HP 24）
> attack
スライムを倒した
> go west
west の方向は壁である
> go east
宝物庫にいる。出口: west
王冠が落ちている
> take
王冠を手に入れた
9 ターンでクリアした`
  }
];

SERIES.java = [
  {
    id: 'java-01',
    phase: 'Java の基礎',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は JDK をパソコンにインストールし、javac と java で Main.java を実行する環境を整える。</p>
<p>JDK（Java Development Kit）は、Java のプログラムを作るための道具一式であり、コンパイラ javac と実行用のコマンド java を含む。コンパイラは、人が書いたコードをコンピュータが実行できる形に変換するプログラムである。macOS では、Homebrew で <code>brew install openjdk@21</code> を実行するか、Eclipse Temurin（adoptium.net）のインストーラ（.pkg）を使う。Homebrew の場合は、インストール後に表示される案内に従って PATH を設定する。PATH は、コマンドの置き場所をターミナルに伝える設定である。Windows では、PowerShell で <code>winget install EclipseAdoptium.Temurin.21.JDK</code> を実行するか、同じ配布元のインストーラ（.msi）を使う。</p>
<p>インストール後、新しいターミナルで <code>java -version</code> と <code>javac -version</code> を実行し、バージョンを確かめる。VS Code には、拡張機能「Extension Pack for Java」（提供元は Microsoft）を入れる。ターミナルで <code>javac Main.java</code> を実行すると Main.class ができ、<code>java Main</code> でそのプログラムが動く。Java 11 以降では、<code>java Main.java</code> の1行でコンパイルと実行をまとめて行える。</p>
<pre>java -version
javac -version
javac Main.java
java Main</pre>`,
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java");
    }
}
`,
    output: `$ java -version
openjdk version "21.0.5" 2024-10-15 LTS
OpenJDK Runtime Environment Temurin-21.0.5+11 (build 21.0.5+11-LTS)
OpenJDK 64-Bit Server VM Temurin-21.0.5+11 (build 21.0.5+11-LTS, mixed mode, sharing)
$ javac -version
javac 21.0.5
$ javac Main.java
$ java Main
Hello, Java`
  },
  {
    id: 'java-02',
    phase: 'Java の基礎',
    title: 'Java の開始',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は main メソッドの中に System.out.println を書き、文字を表示する。</p>
<p>Java のプログラムはクラスの中に書く。クラスは、データと処理をまとめる単位である。<code>public class Main</code> と宣言したクラスは、ファイル名 Main.java と同じ名前にする決まりがある。</p>
<p><code>public static void main(String[] args)</code> は、プログラムの入口となるメソッドである。メソッドは、処理のまとまりに名前をつけたものである。Java は main の中を上から順に実行する。<code>System.out.println</code> は値を表示して改行する。Java の文は最後に <code>;</code>（セミコロン）を書き、<code>//</code> から行末まではコメントとして扱う。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        // main メソッドはプログラムの入口である
        System.out.println("BEAST CODE へようこそ");
        System.out.println("Java の冒険を始める");
        System.out.println(3 + 4);
    }
}
`,
    blank: 'System.out.println("Java の冒険を始める");',
    placeholder: '// 文字列「Java の冒険を始める」を表示する行',
    token: /System\.out\.println\(\s*"Java の冒険を始める"\s*\)\s*;/,
    hint: '<code>System.out.println("Java の冒険を始める");</code> と書く。最後の <code>;</code> も書く。',
    output: `BEAST CODE へようこそ
Java の冒険を始める
7`
  },
  {
    id: 'java-03',
    phase: 'Java の基礎',
    title: '変数とデータ型',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は型を指定して変数を作り、整数・小数・真偽値・文字・文字列を表示する。</p>
<p>Java の変数は、<code>型 名前 = 値;</code> の形で作る。int は整数、double は小数を含む数、boolean は true か false、char は1文字、String は文字列を表す型である。char は <code>'A'</code> のように単引用符で囲み、String は <code>"Aoi"</code> のように二重引用符で囲む。</p>
<p>Java は型に厳しい言語であり、int の変数に文字列を入れるとコンパイルエラーになる。<code>final</code> をつけた変数は定数となり、値の変更はコンパイルエラーになる。定数の名前は MAX_HP のように大文字とアンダースコアで書く慣習がある。<code>+</code> は、文字列と値をつなげて1つの文字列にする。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        String name = "Aoi";
        int hp = 100;
        double speed = 1.5;
        boolean alive = true;
        char rank = 'A';
        final int MAX_HP = 120;

        hp = hp - 30;
        System.out.println("名前: " + name);
        System.out.println("HP: " + hp + " / " + MAX_HP);
        System.out.println("速さ: " + speed);
        System.out.println("生存: " + alive);
        System.out.println("ランク: " + rank);
    }
}
`,
    blank: 'int hp = 100;',
    placeholder: '// int 型の変数 hp を作り、100 を入れる行',
    token: /int\s+hp\s*=\s*100\s*;/,
    hint: '<code>int hp = 100;</code> と書く。型の名前を変数名の前に書く。',
    output: `名前: Aoi
HP: 70 / 120
速さ: 1.5
生存: true
ランク: A`
  },
  {
    id: 'java-04',
    phase: 'Java の基礎',
    title: '式と演算子・型変換',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は演算子で計算を行い、キャストで型を変換する。</p>
<p>Java の算術演算子は <code>+ - * / %</code> である。int 同士の割り算は、小数点以下を切り捨てた整数になる。17 / 5 は 3、17 % 5 は余りの 2 である。<code>combo++</code> は 1 増やし、<code>combo += 10</code> は 10 を足して代入する。</p>
<p>キャストは、<code>(型)</code> を値の前に書いて型を変換する操作である。<code>(double) coins / people</code> では、coins を double に変換してから割るため、結果は 3.4 になる。<code>(int) 12.8</code> は小数点以下を切り捨て、12 になる。int から double への変換は安全な方向の変換であり、Java が自動で行う。</p>
<p>式は左から順に計算される。<code>"合計: " + 2 + 3</code> では文字列に 2 と 3 が順につながり、「合計: 23」になる。<code>(2 + 3)</code> のようにかっこで囲むと、先に足し算が行われる。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        int coins = 17;
        int people = 5;
        System.out.println(coins / people);
        System.out.println(coins % people);

        double each = (double) coins / people;
        System.out.println(each);

        int damage = (int) 12.8;
        System.out.println(damage);

        int combo = 0;
        combo++;
        combo += 10;
        System.out.println(combo);

        System.out.println("合計: " + 2 + 3);
        System.out.println("合計: " + (2 + 3));
    }
}
`,
    blank: 'double each = (double) coins / people;',
    placeholder: '// coins を double に変換してから people で割り、each に入れる行',
    token: /double\s+each\s*=\s*\(\s*double\s*\)\s*coins\s*\/\s*people\s*;/,
    hint: '<code>double each = (double) coins / people;</code> と書く。',
    output: `3
2
3.4
12
11
合計: 23
合計: 5`
  },
  {
    id: 'java-05',
    phase: 'Java の基礎',
    title: '文字列',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は String のメソッドを使い、文字数の取得、切り出し、比較、書式の整形を行う。</p>
<p>String はクラスであり、文字列を操作するメソッドを持つ。<code>length()</code> は文字数、<code>charAt(0)</code> は先頭の文字、<code>substring(8)</code> は 8 番目以降の部分を返す。番号は 0 から数える。<code>toUpperCase()</code> は大文字に変換し、<code>contains("Run")</code> は指定した文字列を含むかを true か false で返す。</p>
<p>文字列の内容の比較には <code>equals</code> を使う。<code>==</code> は2つの変数が同じ物体を指すかを比べる演算子であり、内容の比較の用途には equals が適する。<code>String.format</code> は、<code>%s</code> や <code>%d</code> を値で置き換えた文字列を作る。<code>"=".repeat(10)</code> は文字列を 10 回繰り返す。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        String title = "Dungeon Runner";
        System.out.println(title.length());
        System.out.println(title.charAt(0));
        System.out.println(title.substring(8));
        System.out.println(title.toUpperCase());
        System.out.println(title.contains("Run"));

        String input = "start";
        System.out.println(input.equals("start"));

        String msg = String.format("%s の得点は %d 点", "Aoi", 850);
        System.out.println(msg);
        System.out.println("=".repeat(10));
    }
}
`,
    blank: 'String msg = String.format("%s の得点は %d 点", "Aoi", 850);',
    placeholder: '// "Aoi" と 850 を埋め込んだ文字列を String.format で作り、msg に入れる行',
    token: /String\s+msg\s*=\s*String\.format\(\s*"%s の得点は %d 点"\s*,\s*"Aoi"\s*,\s*850\s*\)\s*;/,
    hint: '<code>String msg = String.format("%s の得点は %d 点", "Aoi", 850);</code> と書く。',
    output: `14
D
Runner
DUNGEON RUNNER
true
true
Aoi の得点は 850 点
==========`
  },
  {
    id: 'java-06',
    phase: '制御構文と配列',
    title: '条件分岐',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は if と switch を使い、HP や武器の種類に応じて処理を分ける。</p>
<p>if 文は、かっこ内の条件が true のときに限り、続く <code>{ }</code> の中を実行する。<code>else if</code> は次の条件を調べ、<code>else</code> は残りの場合を受け持つ。<code>&amp;&amp;</code> は「かつ」、<code>||</code> は「または」を表す論理演算子であり、2つの条件を組み合わせる。</p>
<p>switch 文は、値と一致した case から処理を始める。各 case の最後の <code>break</code> は switch を抜ける命令である。break を省略すると、次の case の処理まで続けて実行される。残りの値は default が受け持つ。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        int hp = 35;
        boolean hasPotion = true;
        if (hp >= 70) {
            System.out.println("元気いっぱい");
        } else if (hp >= 30) {
            System.out.println("少し疲れている");
        } else {
            System.out.println("回復が必要");
        }

        if (hp < 50 && hasPotion) {
            System.out.println("ポーションを使う");
        }

        String weapon = "弓";
        switch (weapon) {
            case "剣":
                System.out.println("近くの敵を攻撃する");
                break;
            case "弓":
                System.out.println("遠くの敵を攻撃する");
                break;
            default:
                System.out.println("素手で戦う");
        }
    }
}
`,
    blank: 'if (hp < 50 && hasPotion) {',
    placeholder: '// hp が 50 未満で、かつ hasPotion が true かを調べる if の行',
    token: /if\s*\(\s*hp\s*<\s*50\s*&&\s*hasPotion\s*\)\s*\{/,
    hint: '<code>if (hp &lt; 50 &amp;&amp; hasPotion) {</code> と書く。',
    output: `少し疲れている
ポーションを使う
遠くの敵を攻撃する`
  },
  {
    id: 'java-07',
    phase: '制御構文と配列',
    title: '繰り返し',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は for 文と while 文で処理を繰り返し、入れ子の繰り返しで階段の図形を描く。</p>
<p><code>for (int i = 1; i &lt;= 3; i++) { }</code> は、初期化、条件、更新を並べた繰り返しである。条件が true の間、ブロックの実行と i の更新を繰り返す。while 文は <code>while (条件) { }</code> の形で、条件が true の間に処理を繰り返す。回数が決まっている場合は for、条件で終わる場合は while が適する。</p>
<p>繰り返しの中に別の繰り返しを書く形を、入れ子（ネスト）という。外側の y が行を表し、内側の x がその行に並べる <code>*</code> の数を表す。y 行目には y 個の * が並ぶ。<code>break</code> は繰り返しを終え、<code>continue</code> は次の回へ進む。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            System.out.println("ターン " + i);
        }

        int energy = 10;
        while (energy > 0) {
            energy -= 4;
            System.out.println("残りエネルギー: " + energy);
        }

        for (int y = 1; y <= 3; y++) {
            String row = "";
            for (int x = 1; x <= y; x++) {
                row += "*";
            }
            System.out.println(row);
        }
    }
}
`,
    blank: 'for (int i = 1; i <= 3; i++) {',
    placeholder: '// i を 1 から 3 まで 1 ずつ増やす for の行',
    token: /for\s*\(\s*int\s+i\s*=\s*1\s*;\s*i\s*<=\s*3\s*;\s*i\+\+\s*\)\s*\{/,
    hint: '<code>for (int i = 1; i &lt;= 3; i++) {</code> と書く。',
    output: `ターン 1
ターン 2
ターン 3
残りエネルギー: 6
残りエネルギー: 2
残りエネルギー: -2
*
**
***`
  },
  {
    id: 'java-08',
    phase: '制御構文と配列',
    title: '配列',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は配列にゲームのスコアを入れ、拡張 for 文で合計・最高点・平均を求める。</p>
<p>配列は、同じ型の値を決まった個数で並べたデータである。<code>int[] scores = {72, 88, 95, 60, 81};</code> のように初期値を並べて作るか、<code>new String[3]</code> のように要素の数を指定して作る。要素は 0 から始まるインデックスで読み書きし、<code>scores.length</code> で要素の数を得る。</p>
<p>拡張 for 文 <code>for (int s : scores)</code> は、配列の要素を先頭から順に s に入れて繰り返す。インデックスが不要な場面で使う。<code>Arrays.toString</code> は配列の中身を <code>[ ]</code> で囲んだ文字列にする。Arrays は java.util パッケージのクラスであり、ファイルの先頭の <code>import java.util.Arrays;</code> で読み込む。</p>`,
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] scores = {72, 88, 95, 60, 81};
        int total = 0;
        int best = scores[0];
        for (int s : scores) {
            total += s;
            if (s > best) {
                best = s;
            }
        }
        System.out.println("回数: " + scores.length);
        System.out.println("合計: " + total);
        System.out.println("最高: " + best);
        System.out.println("平均: " + (double) total / scores.length);

        String[] party = new String[3];
        party[0] = "Aoi";
        party[1] = "Ren";
        party[2] = "Mio";
        System.out.println(Arrays.toString(party));
    }
}
`,
    blank: 'for (int s : scores) {',
    placeholder: '// scores の要素を順に s に入れる拡張 for 文の行',
    token: /for\s*\(\s*int\s+s\s*:\s*scores\s*\)\s*\{/,
    hint: '<code>for (int s : scores) {</code> と書く。',
    output: `回数: 5
合計: 396
最高: 95
平均: 79.2
[Aoi, Ren, Mio]`
  },
  {
    id: 'java-09',
    phase: 'メソッドとクラスの分割',
    title: 'メソッド（基礎）',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は引数と戻り値を持つメソッド damage を定義し、main から呼び出す。</p>
<p>メソッドは <code>修飾子 戻り値の型 名前(引数) { }</code> の形で定義する。<code>public static int damage(int attack, int defense)</code> は、int の引数を2つ受け取り、int を返すメソッドである。戻り値の型 <code>void</code> は、戻り値が空であることを表し、表示などで処理が完結するメソッドに使う。</p>
<p>static は、クラスから直接呼べるメソッドにする修飾子である（詳しくは後の章で学ぶ）。定義の段階では、メソッドの中の命令は待機している。<code>damage(30, 12)</code> の呼び出しで実行され、return の値が呼び出し元に返る。</p>`,
    code: `public class Main {
    public static void greet(String name) {
        System.out.println(name + " が仲間に加わった");
    }

    public static int damage(int attack, int defense) {
        int result = attack - defense;
        if (result < 1) {
            return 1;
        }
        return result;
    }

    public static void main(String[] args) {
        greet("Aoi");
        greet("Ren");
        System.out.println("ダメージ: " + damage(30, 12));
        System.out.println("ダメージ: " + damage(5, 20));
    }
}
`,
    blank: 'public static int damage(int attack, int defense) {',
    placeholder: '// int の引数 attack と defense を受け取り、int を返す static メソッド damage の最初の行',
    token: /public\s+static\s+int\s+damage\(\s*int\s+attack\s*,\s*int\s+defense\s*\)\s*\{/,
    hint: '<code>public static int damage(int attack, int defense) {</code> と書く。',
    output: `Aoi が仲間に加わった
Ren が仲間に加わった
ダメージ: 18
ダメージ: 1`
  },
  {
    id: 'java-10',
    phase: 'メソッドとクラスの分割',
    title: 'メソッド（発展）',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者はオーバーロード、配列の引数、再帰を使い、メソッドを使い分ける。</p>
<p>オーバーロードは、同じ名前で引数の型や数が異なるメソッドを複数定義する仕組みである。Java は呼び出しの引数を見て、どの heal を使うかを決める。<code>heal(50)</code> は引数1つの heal を呼び、その中で回復量 10 を指定して引数2つの heal を呼ぶ。<code>Math.min</code> は2つの値の小さい方を返す。</p>
<p>配列を引数に渡すと、メソッドは呼び出し元と同じ配列を扱う。そのため doubleAll の中の変更は、main の combo にも反映される。再帰は、メソッドが自分自身を呼び出す書き方である。power は指数を 1 減らして自分を呼び、指数が 0 のときに 1 を返して終わる。</p>`,
    code: `public class Main {
    public static int heal(int hp) {
        return heal(hp, 10);
    }

    public static int heal(int hp, int amount) {
        return Math.min(hp + amount, 100);
    }

    public static void doubleAll(int[] values) {
        for (int i = 0; i < values.length; i++) {
            values[i] *= 2;
        }
    }

    public static int sum(int[] values) {
        int total = 0;
        for (int v : values) {
            total += v;
        }
        return total;
    }

    public static int power(int base, int exp) {
        if (exp == 0) {
            return 1;
        }
        return base * power(base, exp - 1);
    }

    public static void main(String[] args) {
        System.out.println(heal(50));
        System.out.println(heal(95, 30));

        int[] combo = {3, 5, 8};
        doubleAll(combo);
        System.out.println(sum(combo));

        System.out.println(power(2, 10));
    }
}
`,
    blank: 'public static int heal(int hp, int amount) {',
    placeholder: '// int の引数 hp と amount を受け取る、2つ目の heal の最初の行',
    token: /public\s+static\s+int\s+heal\(\s*int\s+hp\s*,\s*int\s+amount\s*\)\s*\{/,
    hint: '<code>public static int heal(int hp, int amount) {</code> と書く。',
    output: `60
100
32
1024`
  },
  {
    id: 'java-11',
    phase: 'メソッドとクラスの分割',
    title: 'クラスへの分割・ライブラリ・入力',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は計算のメソッドを別のクラス ScoreTool に分け、Scanner でキーボードからの入力を受け取る。</p>
<p>大きなプログラムは、役割ごとにクラスを分け、別のファイルに書く。ScoreTool.java に書いた public なメソッドは、Main から <code>ScoreTool.rank(score)</code> の形で呼べる。同じフォルダの2つのファイルは、<code>javac Main.java ScoreTool.java</code> でまとめてコンパイルする。</p>
<pre>// ScoreTool.java
public class ScoreTool {
    public static String rank(int score) {
        if (score &gt;= 900) {
            return "S";
        } else if (score &gt;= 800) {
            return "A";
        }
        return "B";
    }

    public static int bonus(int score, double rate) {
        return (int) Math.round(score * rate);
    }
}</pre>
<p>ライブラリは、再利用できるクラスの集まりである。Java の標準ライブラリには Math や Scanner が含まれる。Scanner は java.util パッケージにあるため、import で読み込む。<code>scanner.nextLine()</code> は1行の文字列を読み、<code>Integer.parseInt</code> は文字列を int に変換する。Math は java.lang パッケージにあり、import を省略して使える。</p>`,
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("名前を入力: ");
        String name = scanner.nextLine();
        System.out.print("得点を入力: ");
        int score = Integer.parseInt(scanner.nextLine());

        String rank = ScoreTool.rank(score);
        int bonus = ScoreTool.bonus(score, 0.15);
        System.out.println(name + " のランク: " + rank);
        System.out.println("ボーナス: " + bonus);
        System.out.println("最終得点: " + Math.max(score + bonus, 0));
    }
}
`,
    blank: 'String rank = ScoreTool.rank(score);',
    placeholder: '// ScoreTool クラスの rank メソッドに score を渡し、結果を rank に入れる行',
    token: /String\s+rank\s*=\s*ScoreTool\.rank\(\s*score\s*\)\s*;/,
    hint: '<code>String rank = ScoreTool.rank(score);</code> と書く。クラス名の後にドットとメソッド名を書く。',
    output: `名前を入力: Aoi
得点を入力: 820
Aoi のランク: A
ボーナス: 123
最終得点: 943`
  },
  {
    id: 'java-12',
    phase: 'オブジェクト指向の基礎',
    title: 'オブジェクト指向の開始',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は Monster クラスを設計図として作り、new で2体のモンスターを生み出す。</p>
<p>オブジェクト指向は、データとそのデータを扱う処理をひとまとまりの「物」として表す考え方である。この「物」をオブジェクトという。ゲームのモンスターは、名前や HP というデータを持つオブジェクトとして表せる。</p>
<p>クラスはオブジェクトの設計図であり、インスタンスは設計図から作った実物である。<code>new Monster()</code> は Monster クラスからインスタンスを1つ作る。クラスの中の変数をフィールドといい、<code>slime.name</code> のようにドットで読み書きする。1つのクラスから作った複数のインスタンスは、それぞれ別々のフィールドの値を持つ。Main.java には、public の Main クラスの後に Monster クラスを並べて書ける。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        Monster slime = new Monster();
        slime.name = "スライム";
        slime.hp = 12;

        Monster golem = new Monster();
        golem.name = "ゴーレム";
        golem.hp = 40;

        System.out.println(slime.name + " HP " + slime.hp);
        System.out.println(golem.name + " HP " + golem.hp);
    }
}

class Monster {
    String name;
    int hp;
}
`,
    blank: 'Monster golem = new Monster();',
    placeholder: '// Monster のインスタンスを new で作り、変数 golem に入れる行',
    token: /Monster\s+golem\s*=\s*new\s+Monster\(\s*\)\s*;/,
    hint: '<code>Monster golem = new Monster();</code> と書く。',
    output: `スライム HP 12
ゴーレム HP 40`
  },
  {
    id: 'java-13',
    phase: 'オブジェクト指向の基礎',
    title: 'クラスとインスタンス',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は Hero クラスにメソッドを追加し、インスタンスごとに状態を変える。</p>
<p>クラスにはフィールドに加えてメソッドを定義できる。static を省いたメソッドをインスタンスメソッドといい、<code>aoi.takeDamage(15)</code> のようにインスタンスから呼ぶ。メソッドの中の hp は、呼び出したインスタンスのフィールドを指す。</p>
<p>aoi と ren は別のインスタンスであるため、aoi の HP を減らしても ren の HP は 40 のままである。一方、<code>Hero same = aoi;</code> は新しいインスタンスを作る代わりに、aoi と同じインスタンスを指す変数を作る。変数がインスタンスの場所を指す仕組みを参照という。same を通した変更は aoi にも反映される。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        Hero aoi = new Hero();
        aoi.name = "Aoi";
        aoi.hp = 50;

        Hero ren = new Hero();
        ren.name = "Ren";
        ren.hp = 40;

        aoi.takeDamage(15);
        aoi.showStatus();
        ren.showStatus();

        Hero same = aoi;
        same.takeDamage(5);
        aoi.showStatus();
    }
}

class Hero {
    String name;
    int hp;

    void showStatus() {
        System.out.println(name + "（HP " + hp + "）");
    }

    void takeDamage(int damage) {
        hp -= damage;
        if (hp < 0) {
            hp = 0;
        }
    }
}
`,
    blank: 'hp -= damage;',
    placeholder: '// フィールド hp から damage を引く行',
    token: /(this\.)?hp\s*(-=\s*damage|=\s*(this\.)?hp\s*-\s*damage)\s*;/,
    hint: '<code>hp -= damage;</code> と書く。<code>-=</code> は引いた結果を代入する。',
    output: `Aoi（HP 35）
Ren（HP 40）
Aoi（HP 30）`
  },
  {
    id: 'java-14',
    phase: 'オブジェクト指向の基礎',
    title: 'コンストラクタ',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者はコンストラクタを定義し、インスタンスの作成と同時にフィールドへ値を入れる。</p>
<p>コンストラクタは、new でインスタンスを作る時点で実行される特別なメソッドである。クラスと同じ名前で書き、戻り値の型の記述を省く。<code>new Hero("Aoi", 120, 15)</code> の引数がコンストラクタに渡る。</p>
<p><code>this</code> は、そのインスタンス自身を表す。<code>this.name = name;</code> の左辺はフィールド、右辺は引数である。同じ名前の引数とフィールドを区別するために this を使う。コンストラクタもオーバーロードでき、<code>this(name, 100, 10)</code> は別のコンストラクタを呼び出して既定値を設定する。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        Hero aoi = new Hero("Aoi", 120, 15);
        Hero ren = new Hero("Ren");
        System.out.println(aoi.status());
        System.out.println(ren.status());
    }
}

class Hero {
    String name;
    int hp;
    int power;

    Hero(String name, int hp, int power) {
        this.name = name;
        this.hp = hp;
        this.power = power;
    }

    Hero(String name) {
        this(name, 100, 10);
    }

    String status() {
        return name + " HP:" + hp + " 攻撃:" + power;
    }
}
`,
    blank: 'this.name = name;',
    placeholder: '// 引数 name の値をフィールド name に入れる行',
    token: /this\.name\s*=\s*name\s*;/,
    hint: '<code>this.name = name;</code> と書く。左辺の <code>this.name</code> がフィールドである。',
    output: `Aoi HP:120 攻撃:15
Ren HP:100 攻撃:10`
  },
  {
    id: 'java-15',
    phase: 'オブジェクト指向の基礎',
    title: 'カプセル化',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者はフィールドを private にし、メソッドを通して HP を正しい範囲に保つ。</p>
<p>カプセル化は、フィールドを外部から直接変更できる状態を避け、決まったメソッドを通して操作させる設計である。<code>private</code> をつけたフィールドは、そのクラスの中に限り読み書きできる。外部から <code>h.hp = 9999;</code> と書くと、コンパイルエラーになる。</p>
<p><code>getHp()</code> のように値を返すメソッドをゲッターという。heal と takeDamage は、HP を 0 以上、最大値以下に保つ処理を中に持つ。このように、クラス自身がデータの正しさを守る。final をつけた maxHp は、コンストラクタで一度設定した後は変更の対象外になる。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        Hero h = new Hero("Aoi", 100);
        h.takeDamage(70);
        System.out.println(h.getName() + " HP: " + h.getHp());
        h.heal(500);
        System.out.println(h.getName() + " HP: " + h.getHp());
        // h.hp = 9999; と書くとコンパイルエラーになる
    }
}

class Hero {
    private final String name;
    private final int maxHp;
    private int hp;

    Hero(String name, int maxHp) {
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
    }

    public String getName() {
        return name;
    }

    public int getHp() {
        return hp;
    }

    public void heal(int amount) {
        if (amount <= 0) {
            return;
        }
        hp = Math.min(hp + amount, maxHp);
    }

    public void takeDamage(int amount) {
        hp = Math.max(hp - amount, 0);
    }
}
`,
    blank: 'hp = Math.min(hp + amount, maxHp);',
    placeholder: '// hp + amount と maxHp の小さい方を hp に入れる行',
    token: /hp\s*=\s*Math\.min\(\s*hp\s*\+\s*amount\s*,\s*maxHp\s*\)\s*;/,
    hint: '<code>hp = Math.min(hp + amount, maxHp);</code> と書く。',
    output: `Aoi HP: 30
Aoi HP: 100`
  },
  {
    id: 'java-16',
    phase: 'オブジェクト指向の基礎',
    title: 'static',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は static フィールドでモンスターの出現数を数え、上限を超える出現を止める。</p>
<p>static をつけたフィールドは、クラス全体で1つを共有する値である。インスタンスをいくつ作っても、count は1つに保たれる。<code>Monster.count</code> のように、クラス名を通して読む。</p>
<p>static メソッドは、インスタンスを作る前から呼べるメソッドである。<code>Monster.canSpawn()</code> は、現在の出現数が上限 MAX より小さいかを返す。<code>static final</code> をつけた MAX は、クラス全体で共有する定数である。コンストラクタの中で count を増やすと、new のたびに数が増える。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        String[] names = {"スライム", "コウモリ", "ゴブリン", "ゴーレム"};
        for (String n : names) {
            if (Monster.canSpawn()) {
                Monster m = new Monster(n);
                System.out.println(m.name + " が出現した");
            } else {
                System.out.println(n + " は上限のため待機する");
            }
        }
        System.out.println("出現数: " + Monster.count);
    }
}

class Monster {
    static int count = 0;
    static final int MAX = 3;
    String name;

    Monster(String name) {
        this.name = name;
        count++;
    }

    static boolean canSpawn() {
        return count < MAX;
    }
}
`,
    blank: 'count++;',
    placeholder: '// 作成のたびに count を 1 増やす行',
    token: /(Monster\.)?count\s*(\+\+|\+=\s*1)\s*;/,
    hint: '<code>count++;</code> と書く。',
    output: `スライム が出現した
コウモリ が出現した
ゴブリン が出現した
ゴーレム は上限のため待機する
出現数: 3`
  },
  {
    id: 'java-17',
    phase: 'オブジェクト指向の基礎',
    title: '総合：オブジェクト指向基礎（RPG のキャラクター）',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者はカプセル化したキャラクターのクラスを作り、勇者とドラゴンのターン制バトルを表示する。</p>
<p>Character クラスは、名前、HP、攻撃力、防御力を private なフィールドとして持つ。attack メソッドは、自分の攻撃力から相手の防御力を引いた値をダメージとし、最低でも 1 のダメージを与える。<code>Math.max(値, 1)</code> は、値と 1 の大きい方を返す。</p>
<p>同じクラスの中では、相手のインスタンスの private フィールドも読み書きできる。そのため attack は <code>target.hp</code> を直接変更する。main は while 文で、両者の HP が残っている間にターンを繰り返す。<code>条件 ? A : B</code> は三項演算子であり、条件が true なら A、false なら B を返す。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        Character hero = new Character("Aoi", 60, 16, 5);
        Character boss = new Character("ドラゴン", 45, 14, 4);

        int turn = 1;
        while (hero.isAlive() && boss.isAlive()) {
            System.out.println("--- ターン " + turn + " ---");
            hero.attack(boss);
            if (boss.isAlive()) {
                boss.attack(hero);
            }
            turn++;
        }
        Character winner = hero.isAlive() ? hero : boss;
        System.out.println(winner.getName() + " の勝利");
    }
}

class Character {
    private final String name;
    private final int power;
    private final int defense;
    private int hp;

    Character(String name, int hp, int power, int defense) {
        this.name = name;
        this.hp = hp;
        this.power = power;
        this.defense = defense;
    }

    String getName() {
        return name;
    }

    boolean isAlive() {
        return hp > 0;
    }

    void attack(Character target) {
        int damage = Math.max(power - target.defense, 1);
        target.hp = Math.max(target.hp - damage, 0);
        System.out.println(name + " の攻撃。" + target.name + " に " + damage + " のダメージ（残り HP " + target.hp + "）");
    }
}
`,
    blank: 'int damage = Math.max(power - target.defense, 1);',
    placeholder: '// power から target の defense を引いた値と 1 の大きい方を damage に入れる行',
    token: /int\s+damage\s*=\s*Math\.max\(\s*power\s*-\s*target\.defense\s*,\s*1\s*\)\s*;/,
    hint: '<code>int damage = Math.max(power - target.defense, 1);</code> と書く。',
    output: `--- ターン 1 ---
Aoi の攻撃。ドラゴン に 12 のダメージ（残り HP 33）
ドラゴン の攻撃。Aoi に 9 のダメージ（残り HP 51）
--- ターン 2 ---
Aoi の攻撃。ドラゴン に 12 のダメージ（残り HP 21）
ドラゴン の攻撃。Aoi に 9 のダメージ（残り HP 42）
--- ターン 3 ---
Aoi の攻撃。ドラゴン に 12 のダメージ（残り HP 9）
ドラゴン の攻撃。Aoi に 9 のダメージ（残り HP 33）
--- ターン 4 ---
Aoi の攻撃。ドラゴン に 12 のダメージ（残り HP 0）
Aoi の勝利`
  },
  {
    id: 'java-18',
    phase: 'オブジェクト指向の発展',
    title: '継承',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は Character クラスを継承した Warrior と Mage を作り、攻撃の方法を職業ごとに変える。</p>
<p>継承は、既存のクラスの機能を引き継いで新しいクラスを作る仕組みである。<code>class Warrior extends Character</code> と書くと、Warrior は Character のフィールドとメソッドを受け継ぐ。元のクラスをスーパークラス、新しいクラスをサブクラスという。<code>protected</code> は、サブクラスからの利用を許す修飾子である。</p>
<p><code>super(name, 120)</code> は、スーパークラスのコンストラクタを呼ぶ。オーバーライドは、受け継いだメソッドをサブクラスで書き換える仕組みであり、<code>@Override</code> はその意図をコンパイラに伝える注釈である。Mage は attack をそのまま受け継ぎ、新しいメソッド castSpell を加える。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        Warrior w = new Warrior("Aoi");
        Mage m = new Mage("Mio");
        w.introduce();
        m.introduce();
        w.attack();
        m.attack();
        m.castSpell();
    }
}

class Character {
    protected String name;
    protected int hp;

    Character(String name, int hp) {
        this.name = name;
        this.hp = hp;
    }

    void introduce() {
        System.out.println(name + "（HP " + hp + "）");
    }

    void attack() {
        System.out.println(name + " は素手で攻撃した");
    }
}

class Warrior extends Character {
    Warrior(String name) {
        super(name, 120);
    }

    @Override
    void attack() {
        System.out.println(name + " は剣で斬りつけた");
    }
}

class Mage extends Character {
    private int mp = 30;

    Mage(String name) {
        super(name, 70);
    }

    void castSpell() {
        mp -= 10;
        System.out.println(name + " は炎の魔法を唱えた（残り MP " + mp + "）");
    }
}
`,
    blank: 'class Warrior extends Character {',
    placeholder: '// Character を継承するクラス Warrior の最初の行',
    token: /class\s+Warrior\s+extends\s+Character\s*\{/,
    hint: '<code>class Warrior extends Character {</code> と書く。',
    output: `Aoi（HP 120）
Mio（HP 70）
Aoi は剣で斬りつけた
Mio は素手で攻撃した
Mio は炎の魔法を唱えた（残り MP 20）`
  },
  {
    id: 'java-19',
    phase: 'オブジェクト指向の発展',
    title: '抽象クラスとインタフェース',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は抽象クラス Monster とインタフェース Flyable を作り、モンスターごとの性質を表す。</p>
<p>抽象クラスは、<code>abstract</code> をつけた未完成のクラスであり、サブクラスの土台として使う。抽象クラスからのインスタンスの作成はコンパイルエラーになる。abstract メソッドは中身の記述を省いたメソッドであり、サブクラスがオーバーライドで中身を書く。</p>
<p>インタフェースは、クラスが持つべきメソッドの一覧である。<code>implements Flyable</code> と書いたクラスは、altitude メソッドの中身を書く義務を負う。<code>default</code> メソッドは、インタフェースの中に書いた標準の中身であり、実装クラスはそのまま使える。Java のクラスが継承できるスーパークラスは1つに限られるが、インタフェースは複数を実装できる。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        Monster slime = new Slime();
        Bat bat = new Bat();
        slime.show();
        bat.show();
        System.out.println(bat.flyMessage());
        // new Monster("謎") と書くと、抽象クラスのためコンパイルエラーになる
    }
}

abstract class Monster {
    protected final String name;

    Monster(String name) {
        this.name = name;
    }

    abstract int attackPower();

    void show() {
        System.out.println(name + " の攻撃力: " + attackPower());
    }
}

interface Flyable {
    int altitude();

    default String flyMessage() {
        return "高さ " + altitude() + " m を飛んでいる";
    }
}

class Slime extends Monster {
    Slime() {
        super("スライム");
    }

    @Override
    int attackPower() {
        return 3;
    }
}

class Bat extends Monster implements Flyable {
    Bat() {
        super("コウモリ");
    }

    @Override
    int attackPower() {
        return 5;
    }

    @Override
    public int altitude() {
        return 12;
    }
}
`,
    blank: 'class Bat extends Monster implements Flyable {',
    placeholder: '// Monster を継承し、Flyable を実装するクラス Bat の最初の行',
    token: /class\s+Bat\s+extends\s+Monster\s+implements\s+Flyable\s*\{/,
    hint: '<code>class Bat extends Monster implements Flyable {</code> と書く。extends の後に implements を書く。',
    output: `スライム の攻撃力: 3
コウモリ の攻撃力: 5
高さ 12 m を飛んでいる`
  },
  {
    id: 'java-20',
    phase: 'オブジェクト指向の発展',
    title: '多態性',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は職業の異なる仲間を Character 型の配列にまとめ、同じ呼び出しで職業ごとの攻撃を実行する。</p>
<p>多態性（ポリモーフィズム）は、同じメソッドの呼び出しが、インスタンスの実際のクラスに応じて異なる動きをする性質である。Character 型の変数は、Warrior、Mage、Healer のどのインスタンスも指せる。<code>c.attack()</code> を呼ぶと、Java は実際のクラスでオーバーライドされた attack を実行する。</p>
<p>多態性により、新しい職業を追加しても、main の繰り返しの部分は変更の対象外になる。<code>c instanceof Healer h</code> は、c が Healer のインスタンスかを調べ、true の場合は Healer 型の変数 h として使えるようにする。この書き方をパターンマッチングという。</p>`,
    code: `public class Main {
    public static void main(String[] args) {
        Character[] party = {new Warrior("Aoi"), new Mage("Mio"), new Healer("Ren")};
        int total = 0;
        for (Character c : party) {
            total += c.attack();
        }
        System.out.println("パーティの合計ダメージ: " + total);

        for (Character c : party) {
            if (c instanceof Healer h) {
                h.heal();
            }
        }
    }
}

abstract class Character {
    protected final String name;

    Character(String name) {
        this.name = name;
    }

    abstract int attack();
}

class Warrior extends Character {
    Warrior(String name) {
        super(name);
    }

    @Override
    int attack() {
        System.out.println(name + " は剣で 18 のダメージ");
        return 18;
    }
}

class Mage extends Character {
    Mage(String name) {
        super(name);
    }

    @Override
    int attack() {
        System.out.println(name + " は魔法で 25 のダメージ");
        return 25;
    }
}

class Healer extends Character {
    Healer(String name) {
        super(name);
    }

    @Override
    int attack() {
        System.out.println(name + " は杖で 6 のダメージ");
        return 6;
    }

    void heal() {
        System.out.println(name + " はパーティを回復した");
    }
}
`,
    blank: 'total += c.attack();',
    placeholder: '// c の attack を呼び、戻り値を total に足す行',
    token: /total\s*(\+=\s*c\.attack\(\)|=\s*total\s*\+\s*c\.attack\(\))\s*;/,
    hint: '<code>total += c.attack();</code> と書く。',
    output: `Aoi は剣で 18 のダメージ
Mio は魔法で 25 のダメージ
Ren は杖で 6 のダメージ
パーティの合計ダメージ: 49
Ren はパーティを回復した`
  },
  {
    id: 'java-21',
    phase: 'オブジェクト指向の発展',
    title: 'Object クラスと契約（equals, hashCode, toString）',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は Item クラスで toString・equals・hashCode をオーバーライドし、同じ内容のアイテムを等しいものとして扱う。</p>
<p>Java のすべてのクラスは、Object クラスを自動で継承する。Object は toString、equals、hashCode などのメソッドを持つ。toString はインスタンスを文字列で表すメソッドであり、println に渡すと自動で呼ばれる。</p>
<p><code>==</code> は2つの変数が同じインスタンスを指すかを比べ、equals は内容が等しいかを比べる。equals と hashCode には「equals で等しい2つのインスタンスは、同じ hashCode を返す」という契約がある。HashSet は、同じ要素を1つにまとめて保持するコレクションであり、この契約を前提に重複を判定する。<code>Objects.hash</code> は、複数のフィールドから hashCode を計算する。</p>`,
    code: `import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Item a = new Item("剣", 3);
        Item b = new Item("剣", 3);
        System.out.println(a);
        System.out.println(a == b);
        System.out.println(a.equals(b));

        Set<Item> bag = new HashSet<>();
        bag.add(a);
        bag.add(b);
        bag.add(new Item("盾", 1));
        System.out.println("種類: " + bag.size());
    }
}

class Item {
    private final String name;
    private final int level;

    Item(String name, int level) {
        this.name = name;
        this.level = level;
    }

    @Override
    public String toString() {
        return name + "+" + level;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Item other)) {
            return false;
        }
        return level == other.level && name.equals(other.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, level);
    }
}
`,
    blank: 'return Objects.hash(name, level);',
    placeholder: '// name と level から計算した hashCode を返す行',
    token: /return\s+Objects\.hash\(\s*name\s*,\s*level\s*\)\s*;/,
    hint: '<code>return Objects.hash(name, level);</code> と書く。',
    output: `剣+3
false
true
種類: 2`
  },
  {
    id: 'java-22',
    phase: '実用的な Java',
    title: 'コレクション',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は ArrayList と HashMap でパーティとスコアを管理し、並べ替えと順番のそろった表示を行う。</p>
<p>コレクションは、複数の値をまとめて扱うクラスの集まりである。ArrayList は要素の数を自由に変えられるリストであり、add で追加し、remove で削除する。<code>List&lt;String&gt;</code> の <code>&lt;&gt;</code> の中は要素の型を表す。型を後から指定するこの仕組みをジェネリクスという。</p>
<p>HashMap は、キーと値の組を保存する。put で登録し、get で値を取り出す。<code>getOrDefault</code> は、キーが未登録の場合に既定値を返す。コレクションには int の代わりにラッパークラス Integer を使う。TreeMap はキーの順に組を保持するため、表示の順番がそろう。<code>Collections.sort</code> はリストを小さい順に並べ替える。</p>`,
    code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        List<String> party = new ArrayList<>();
        party.add("Aoi");
        party.add("Ren");
        party.add("Mio");
        party.remove("Ren");
        System.out.println(party + " 人数: " + party.size());

        Map<String, Integer> scores = new HashMap<>();
        scores.put("Aoi", 820);
        scores.put("Mio", 910);
        scores.put("Aoi", scores.get("Aoi") + 50);
        System.out.println("Aoi: " + scores.get("Aoi"));
        System.out.println("Ren の記録: " + scores.containsKey("Ren"));
        System.out.println("Ren の得点: " + scores.getOrDefault("Ren", 0));

        List<Integer> rolls = new ArrayList<>(List.of(5, 2, 6, 1));
        Collections.sort(rolls);
        System.out.println(rolls);

        Map<String, Integer> ranking = new TreeMap<>(scores);
        for (Map.Entry<String, Integer> e : ranking.entrySet()) {
            System.out.println(e.getKey() + "=" + e.getValue());
        }
    }
}
`,
    blank: 'scores.put("Aoi", scores.get("Aoi") + 50);',
    placeholder: '// "Aoi" の得点に 50 を足した値を登録し直す行',
    token: /scores\.put\(\s*"Aoi"\s*,\s*scores\.get\(\s*"Aoi"\s*\)\s*\+\s*50\s*\)\s*;/,
    hint: '<code>scores.put("Aoi", scores.get("Aoi") + 50);</code> と書く。',
    output: `[Aoi, Mio] 人数: 2
Aoi: 870
Ren の記録: false
Ren の得点: 0
[1, 2, 5, 6]
Aoi=870
Mio=910`
  },
  {
    id: 'java-23',
    phase: '実用的な Java',
    title: '例外',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は独自の例外クラスを作り、try と catch で MP 不足の失敗を処理する。</p>
<p>例外は、実行中に起きた異常を表すオブジェクトである。<code>throw new 例外クラス(メッセージ)</code> で例外を発生させると、メソッドの処理はその場で中断する。<code>try { } catch (例外クラス e) { }</code> は、try の中で発生した例外を catch で受け止める。<code>finally</code> の中は、例外の有無にかかわらず実行される。</p>
<p>Exception を継承した例外はチェック例外といい、メソッドに <code>throws</code> で宣言し、呼び出し側で処理する義務がある。NumberFormatException のような実行時例外は、宣言を省略できる。<code>Integer.parseInt("十")</code> は数字以外の文字の変換を試みるため、NumberFormatException を発生させる。</p>`,
    code: `public class Main {
    static int cast(int mp, int cost) throws MpShortageException {
        if (cost > mp) {
            throw new MpShortageException("MP 不足: 必要 " + cost + "、残り " + mp);
        }
        return mp - cost;
    }

    public static void main(String[] args) {
        int mp = 10;
        int[] costs = {6, 6};
        for (int cost : costs) {
            try {
                mp = cast(mp, cost);
                System.out.println("魔法を使った。残り MP: " + mp);
            } catch (MpShortageException e) {
                System.out.println("エラー: " + e.getMessage());
            } finally {
                System.out.println("ターン終了");
            }
        }

        try {
            int level = Integer.parseInt("十");
            System.out.println(level);
        } catch (NumberFormatException e) {
            System.out.println("数字への変換に失敗した");
        }
    }
}

class MpShortageException extends Exception {
    MpShortageException(String message) {
        super(message);
    }
}
`,
    blank: 'throw new MpShortageException("MP 不足: 必要 " + cost + "、残り " + mp);',
    placeholder: '// 必要な MP と残りの MP を含むメッセージで MpShortageException を発生させる行',
    token: /throw\s+new\s+MpShortageException\(.*cost.*mp.*\)\s*;/,
    hint: '<code>throw new MpShortageException("MP 不足: 必要 " + cost + "、残り " + mp);</code> と書く。',
    output: `魔法を使った。残り MP: 4
ターン終了
エラー: MP 不足: 必要 6、残り 4
ターン終了
数字への変換に失敗した`
  },
  {
    id: 'java-24',
    phase: '実用的な Java',
    title: 'モダンな Java（record, var, switch 式, Stream）',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は record、var、switch 式、Stream を使い、スコアの集計を短く書く。</p>
<p>record は、データを保持するクラスを短く定義する仕組みである。<code>record Score(String player, int points) {}</code> と書くと、Java はコンストラクタ、読み出し用のメソッド <code>player()</code>、toString、equals、hashCode を自動で作る。var は、右辺から型を推論して変数を作る書き方である。switch 式は <code>case 値 -&gt; 結果</code> の形で値を返す switch であり、break は不要である。</p>
<p>Stream は、コレクションの要素を流れとして扱い、処理をつなげて書く仕組みである。filter は条件に合う要素を残し、map は要素を別の値に変換し、toList はリストに集める。<code>s -&gt; s.points() &gt;= 800</code> はラムダ式であり、名前を省いた短い関数を表す。<code>Score::player</code> はメソッド参照であり、<code>s -&gt; s.player()</code> と同じ意味を持つ。</p>`,
    code: `import java.util.List;

public class Main {
    static String rank(int points) {
        return switch (points / 100) {
            case 10, 9 -> "S";
            case 8 -> "A";
            case 7 -> "B";
            default -> "C";
        };
    }

    public static void main(String[] args) {
        var scores = List.of(
                new Score("Aoi", 920),
                new Score("Ren", 780),
                new Score("Mio", 850),
                new Score("Sora", 640));

        for (var s : scores) {
            System.out.println(s.player() + ": " + rank(s.points()));
        }

        var top = scores.stream()
                .filter(s -> s.points() >= 800)
                .map(Score::player)
                .toList();
        System.out.println("800 点以上: " + top);

        int total = scores.stream().mapToInt(Score::points).sum();
        System.out.println("合計: " + total);
        System.out.println(scores.get(0));
    }
}

record Score(String player, int points) {}
`,
    blank: '.filter(s -> s.points() >= 800)',
    placeholder: '// 800 点以上の記録に絞り込む filter の行',
    token: /\.filter\(\s*(\w+)\s*->\s*\1\.points\(\)\s*>=\s*800\s*\)/,
    hint: '<code>.filter(s -&gt; s.points() &gt;= 800)</code> と書く。<code>-&gt;</code> の左が引数、右が条件である。',
    output: `Aoi: S
Ren: B
Mio: A
Sora: C
800 点以上: [Aoi, Mio]
合計: 3190
Score[player=Aoi, points=920]`
  },
  {
    id: 'java-25',
    phase: '実用的な Java',
    title: '日付とファイル',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は LocalDate でイベントの日付を計算し、Files で予定をファイルに保存して読み込む。</p>
<p>java.time パッケージの LocalDate は、年月日を表すクラスである。<code>LocalDate.of(2026, 4, 1)</code> で日付を作り、<code>plusDays(17)</code> で 17 日後を求める。<code>getDayOfWeek()</code> は曜日を返す。<code>ChronoUnit.DAYS.between</code> は2つの日付の間の日数を数え、DateTimeFormatter は日付を指定した形式の文字列に整える。</p>
<p>java.nio.file パッケージの Files クラスは、ファイルの読み書きを行う。<code>Path.of("events.txt")</code> はファイルの場所を表す。<code>Files.writeString</code> は文字列をファイルに書き込み、<code>Files.readAllLines</code> は全行を <code>List&lt;String&gt;</code> として読む。ファイル操作は IOException を発生させる可能性があるため、main に <code>throws IOException</code> を宣言する。</p>`,
    code: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        LocalDate start = LocalDate.of(2026, 4, 1);
        LocalDate event = start.plusDays(17);
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        System.out.println("イベント日: " + event.format(fmt));
        System.out.println("曜日: " + event.getDayOfWeek());
        System.out.println("あと " + ChronoUnit.DAYS.between(start, event) + " 日");

        Path path = Path.of("events.txt");
        String text = start.plusDays(2).format(fmt) + " ボス戦\\n"
                + event.format(fmt) + " スコア大会\\n";
        Files.writeString(path, text);

        List<String> lines = Files.readAllLines(path);
        for (String line : lines) {
            System.out.println("読み込み: " + line);
        }
    }
}
`,
    blank: 'List<String> lines = Files.readAllLines(path);',
    placeholder: '// path のファイルの全行を読み、lines に入れる行',
    token: /(List<String>|var)\s+lines\s*=\s*Files\.readAllLines\(\s*path\s*\)\s*;/,
    hint: '<code>List&lt;String&gt; lines = Files.readAllLines(path);</code> と書く。',
    output: `イベント日: 2026/04/18
曜日: SATURDAY
あと 17 日
読み込み: 2026/04/03 ボス戦
読み込み: 2026/04/18 スコア大会`
  },
  {
    id: 'java-26',
    phase: '実用的な Java',
    title: 'JUnit によるテスト',
    type: 'code',
    run: 'static',
    file: 'BattleTest.java',
    story: `<p class="lead">学習者は JUnit 5 でテストクラスを書き、Battle.damage の計算が正しいことを確かめる。</p>
<p>テストは、メソッドが期待どおりの値を返すかをプログラムで確かめる仕組みである。JUnit は、Java で広く使われるテストのライブラリである。<code>@Test</code> をつけたメソッドが1件のテストになり、<code>assertEquals(期待値, 実際の値)</code> は2つの値が等しいことを確かめる。値が異なる場合、テストは失敗として報告される。対象の Battle クラスは次のとおりである。</p>
<pre>public class Battle {
    public static int damage(int attack, int defense) {
        return Math.max(attack - defense, 1);
    }
}</pre>
<p>JUnit は標準ライブラリの外にあるため、Maven や Gradle というビルドツールで依存関係として追加する。ビルドツールは、コンパイル、テスト、ライブラリの取得をまとめて行う道具である。VS Code では、Extension Pack for Java に含まれる「Test Runner for Java」が、テストメソッドの横に実行ボタンを表示する。ターミナルでは <code>mvn test</code> で全テストを実行する。</p>`,
    code: `import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class BattleTest {
    @Test
    void damageIsAttackMinusDefense() {
        assertEquals(18, Battle.damage(30, 12));
    }

    @Test
    void damageIsAtLeastOne() {
        assertEquals(1, Battle.damage(5, 20));
        assertEquals(1, Battle.damage(10, 10));
    }
}
`,
    blank: 'assertEquals(18, Battle.damage(30, 12));',
    placeholder: '// Battle.damage(30, 12) の結果が 18 に等しいことを確かめる行',
    token: /assertEquals\(\s*18\s*,\s*Battle\.damage\(\s*30\s*,\s*12\s*\)\s*\)\s*;/,
    hint: '<code>assertEquals(18, Battle.damage(30, 12));</code> と書く。最初の引数が期待値である。',
    output: `$ mvn test
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running BattleTest
[INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.031 s -- in BattleTest
[INFO]
[INFO] Results:
[INFO]
[INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0
[INFO]
[INFO] BUILD SUCCESS`
  },
  {
    id: 'java-27',
    phase: '実用的な Java',
    title: '総合：オブジェクト指向発展（カードゲーム）',
    type: 'code',
    run: 'static',
    file: 'Main.java',
    story: `<p class="lead">学習者は enum、record、インタフェース、コレクションを組み合わせ、合計 21 を目指すカードゲームを作る。</p>
<p>enum は、決まった値の集まりを表す型である。Suit は4種類のマークを表し、それぞれが記号の文字列を持つ。record Card はマークと数字を持ち、points で点数（J・Q・K は 10）を返す。Deck は 52 枚のカードを作り、<code>Collections.shuffle</code> で混ぜる。<code>new Random(7)</code> のように乱数の種（シード）を固定すると、毎回同じ順番になり、動作の確認がしやすい。</p>
<p>Player は、カードを引き続けるかの判断を Strategy インタフェースに任せる。LimitStrategy は、合計が上限より小さい間はカードを引く。プレイヤーは 15、ディーラーは 17 を上限とする。判断の方法を別のクラスに分けると、新しい戦略のクラスを追加して遊び方を変えられる。この設計は、多態性の応用である。</p>`,
    code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Deck deck = new Deck(new Random(7));
        Player you = new Player("Aoi", new LimitStrategy(15));
        Player dealer = new Player("ディーラー", new LimitStrategy(17));

        System.out.println("カードゲーム 21");
        you.play(deck);
        dealer.play(deck);
        System.out.println(you);
        System.out.println(dealer);
        System.out.println(judge(you, dealer));
    }

    static String judge(Player you, Player dealer) {
        int a = you.total();
        int b = dealer.total();
        if (a > 21) {
            return "バースト。" + dealer.getName() + " の勝ち";
        }
        if (b > 21 || a > b) {
            return you.getName() + " の勝ち";
        }
        if (a == b) {
            return "引き分け";
        }
        return dealer.getName() + " の勝ち";
    }
}

enum Suit {
    SPADE("♠"), HEART("♥"), DIAMOND("♦"), CLUB("♣");

    final String mark;

    Suit(String mark) {
        this.mark = mark;
    }
}

record Card(Suit suit, int rank) {
    int points() {
        return Math.min(rank, 10);
    }

    @Override
    public String toString() {
        String label = switch (rank) {
            case 1 -> "A";
            case 11 -> "J";
            case 12 -> "Q";
            case 13 -> "K";
            default -> String.valueOf(rank);
        };
        return suit.mark + label;
    }
}

class Deck {
    private final List<Card> cards = new ArrayList<>();

    Deck(Random random) {
        for (Suit s : Suit.values()) {
            for (int r = 1; r <= 13; r++) {
                cards.add(new Card(s, r));
            }
        }
        Collections.shuffle(cards, random);
    }

    Card draw() {
        return cards.remove(cards.size() - 1);
    }
}

interface Strategy {
    boolean wantsCard(int total);
}

class LimitStrategy implements Strategy {
    private final int limit;

    LimitStrategy(int limit) {
        this.limit = limit;
    }

    @Override
    public boolean wantsCard(int total) {
        return total < limit;
    }
}

class Player {
    private final String name;
    private final Strategy strategy;
    private final List<Card> hand = new ArrayList<>();

    Player(String name, Strategy strategy) {
        this.name = name;
        this.strategy = strategy;
    }

    String getName() {
        return name;
    }

    int total() {
        return hand.stream().mapToInt(Card::points).sum();
    }

    void play(Deck deck) {
        hand.add(deck.draw());
        hand.add(deck.draw());
        while (strategy.wantsCard(total())) {
            hand.add(deck.draw());
        }
    }

    @Override
    public String toString() {
        return name + ": " + hand + " = " + total();
    }
}
`,
    blank: 'while (strategy.wantsCard(total())) {',
    placeholder: '// strategy が次のカードを望む間に繰り返す while の行',
    token: /while\s*\(\s*strategy\.wantsCard\(\s*total\(\)\s*\)\s*\)\s*\{/,
    hint: '<code>while (strategy.wantsCard(total())) {</code> と書く。',
    output: `カードゲーム 21
Aoi: [♥4, ♦A, ♦10] = 15
ディーラー: [♣6, ♠5, ♥A, ♣2, ♥2, ♠J] = 26
Aoi の勝ち`
  }
];
