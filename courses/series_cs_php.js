SERIES.csharp = [
  {
    id: 'csharp-01',
    phase: 'はじめての C#',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は .NET SDK をパソコンに入れ、VS Code で C# のプログラムを実行する。</p>
<p>.NET SDK は、C# のプログラムを作り、コンパイルし、実行するための道具一式である。macOS では Microsoft の公式サイト（dotnet.microsoft.com）のインストーラー、または Homebrew の <code>brew install --cask dotnet-sdk</code> で入れる。Windows では公式サイトのインストーラー、または PowerShell の <code>winget install Microsoft.DotNet.SDK.10</code> で入れる。どちらの環境でも、ターミナルで <code>dotnet --version</code> を実行し、バージョン番号が表示されることを確かめる。</p>
<p>VS Code では、拡張機能「C# Dev Kit」を入れる。<code>dotnet new console -o Hello</code> は、Hello フォルダに新しいコンソールアプリを作るコマンドである。学習者は <code>cd Hello</code> でフォルダに移動し、<code>dotnet run</code> で Program.cs を実行する。このシリーズのコードは、この Program.cs に書く前提で進む。</p>`,
    code: `// ターミナルで実行するコマンド
//   dotnet --version
//   dotnet new console -o Hello
//   cd Hello
//   dotnet run

// dotnet new console が作る Program.cs の中身
Console.WriteLine("Hello, World!");
`,
    output: `$ dotnet --version
10.0.100
$ dotnet new console -o Hello
The template "Console App" was created successfully.
$ cd Hello
$ dotnet run
Hello, World!`
  },
  {
    id: 'csharp-02',
    phase: 'はじめての C#',
    title: 'C# の基礎',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は Console.WriteLine を使い、コンソールに文字と計算結果を表示する。</p>
<p>C# は Microsoft が開発したプログラミング言語であり、ゲームエンジンの Unity、Web アプリ、デスクトップアプリの開発に使われる。Console.WriteLine は、かっこの中の値を表示して改行するメソッドである。メソッドは、まとまった処理に名前をつけたものである。Console.Write は表示の後で同じ行にとどまる。文の終わりにはセミコロン（;）を置き、<code>//</code> から行末まではコメントとして扱われる。</p>`,
    code: `// プログラムは上の行から順に実行される
Console.WriteLine("ダンジョンへようこそ");
Console.Write("勇者：");
Console.WriteLine("Aoi");
Console.WriteLine(3 + 4);
`,
    blank: 'Console.WriteLine("ダンジョンへようこそ");',
    placeholder: '// 文字列「ダンジョンへようこそ」を表示して改行する行',
    token: /Console\.WriteLine\(\s*"ダンジョンへようこそ"\s*\)\s*;/,
    hint: '<code>Console.WriteLine("ダンジョンへようこそ");</code> と書く。文字列は <code>"</code> で囲み、最後にセミコロンを置く。',
    output: `ダンジョンへようこそ
勇者：Aoi
7`
  },
  {
    id: 'csharp-03',
    phase: 'はじめての C#',
    title: '変数',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は型を指定して変数を作り、HP の計算結果を表示する。</p>
<p>変数は、値に名前をつけて保存する箱である。C# では変数を作るときに型を書く。型は、値の種類を表す名前である。int は整数、double は小数、string は文字列、bool は true か false を表す。<code>$"..."</code> は文字列補間であり、<code>{ }</code> の中に書いた変数の値を文字列に埋め込む。</p>
<pre>int hp = 120;
hp = hp - 35;   // 85 を代入し直す</pre>`,
    code: `int hp = 120;
int damage = 35;
hp = hp - damage;
string name = "スライム";
double speed = 1.5;
bool isAlive = hp > 0;

Console.WriteLine($"{name} の HP：{hp}");
Console.WriteLine(speed * 2);
Console.WriteLine(isAlive);
`,
    blank: 'hp = hp - damage;',
    placeholder: '// hp から damage を引いた値を hp に代入し直す行',
    token: /hp\s*=\s*hp\s*-\s*damage\s*;|hp\s*-=\s*damage\s*;/,
    hint: '<code>hp = hp - damage;</code> と書く。<code>hp -= damage;</code> も同じ意味になる。',
    output: `スライム の HP：85
3
True`
  },
  {
    id: 'csharp-04',
    phase: '条件分岐',
    title: 'if 文',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は if 文を使い、HP の量に応じて勇者の行動を変える。</p>
<p>if 文は、かっこの中の条件が true のときに限り、続く <code>{ }</code> の中を実行する。<code>else if</code> は次の条件を調べ、<code>else</code> は残りのすべての場合を受け持つ。比較には <code>==</code>（等しい）、<code>!=</code>（異なる）、<code>&lt;</code>、<code>&gt;=</code> などを使う。<code>&amp;&amp;</code> は「かつ」、<code>||</code> は「または」を表す。</p>`,
    code: `int hp = 20;
if (hp <= 0)
{
    Console.WriteLine("ゲームオーバー");
}
else if (hp < 30)
{
    Console.WriteLine("ピンチ：回復薬を使う");
}
else
{
    Console.WriteLine("探索を続ける");
}

bool hasKey = true;
int floor = 3;
if (hasKey && floor >= 3)
{
    Console.WriteLine("ボス部屋の扉が開く");
}
`,
    blank: 'else if (hp < 30)',
    placeholder: '// hp が 30 未満かを調べる else if の行',
    token: /else\s+if\s*\(\s*hp\s*<\s*30\s*\)/,
    hint: '<code>else if (hp &lt; 30)</code> と書く。条件はかっこで囲む。',
    output: `ピンチ：回復薬を使う
ボス部屋の扉が開く`
  },
  {
    id: 'csharp-05',
    phase: '条件分岐',
    title: 'switch とパターンマッチング',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は switch 文と switch 式を使い、コマンドとスコアから結果を選ぶ。</p>
<p>switch 文は、1つの値をいくつかの case と比べ、一致した case の処理を実行する。各 case の最後には break を置く。switch 式は、値に応じて別の値を返す短い書き方である。<code>&gt;= 90 =&gt; "S"</code> のような書き方を関係パターンといい、上から順に条件を調べる。パターンマッチングは、値の形や範囲を調べて処理を選ぶ仕組みである。<code>_</code> は残りのすべての値に一致する。</p>`,
    code: `string command = "attack";
switch (command)
{
    case "attack":
        Console.WriteLine("剣で攻撃した");
        break;
    case "heal":
        Console.WriteLine("HP を回復した");
        break;
    default:
        Console.WriteLine("様子を見る");
        break;
}

int score = 82;
string rank = score switch
{
    >= 90 => "S",
    >= 70 => "A",
    >= 50 => "B",
    _ => "C"
};
Console.WriteLine($"ランク：{rank}");
`,
    blank: '>= 70 => "A",',
    placeholder: '// 70 以上のとき A を返す行',
    token: />=\s*70\s*=>\s*"A"\s*,/,
    hint: '<code>&gt;= 70 =&gt; "A",</code> と書く。行の最後にコンマを置く。',
    output: `剣で攻撃した
ランク：A`
  },
  {
    id: 'csharp-06',
    phase: '繰り返しとデータ',
    title: '繰り返し',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は for 文と while 文を使い、ターンの表示と攻撃の回数を数える処理を書く。</p>
<p>for 文は、<code>for (初期化; 条件; 更新)</code> の形で、決まった回数の繰り返しを書く。<code>turn++</code> は turn に 1 を足す書き方である。while 文は、条件が true の間、処理を繰り返す。学習者は、条件がいつか false になるように、ループの中で値を変える。</p>`,
    code: `for (int turn = 1; turn <= 3; turn++)
{
    Console.WriteLine($"ターン {turn}");
}

int enemyHp = 50;
int count = 0;
while (enemyHp > 0)
{
    enemyHp -= 20;
    count++;
}
Console.WriteLine($"{count} 回の攻撃で倒した");
`,
    blank: 'for (int turn = 1; turn <= 3; turn++)',
    placeholder: '// turn を 1 から 3 まで 1 を足しながら繰り返す for の行',
    token: /for\s*\(\s*int\s+turn\s*=\s*1\s*;\s*turn\s*<=\s*3\s*;\s*turn\s*\+\+\s*\)/,
    hint: '<code>for (int turn = 1; turn &lt;= 3; turn++)</code> と書く。',
    output: `ターン 1
ターン 2
ターン 3
3 回の攻撃で倒した`
  },
  {
    id: 'csharp-07',
    phase: '繰り返しとデータ',
    title: '文字列',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は string のメソッドを使い、ゲームのタイトルを加工する。</p>
<p>string は多くのメソッドとプロパティを持つ。Length は文字数、ToUpper は大文字への変換、Contains は部分文字列を含むかどうか、Replace は置き換え、Split は区切り文字での分割を行う。これらのメソッドは新しい文字列を返し、元の文字列はそのまま残る。<code>{gold:N0}</code> は、数値を 3 けたごとのコンマつきで表示する書式指定である。</p>`,
    code: `string title = "Crystal Cave Quest";
Console.WriteLine(title.Length);
Console.WriteLine(title.ToUpper());
Console.WriteLine(title.Contains("Cave"));
Console.WriteLine(title.Replace("Quest", "Map"));

string[] words = title.Split(' ');
Console.WriteLine(words[0]);

int gold = 1500;
Console.WriteLine($"所持金：{gold:N0} G");
`,
    blank: 'Console.WriteLine(title.Replace("Quest", "Map"));',
    placeholder: '// title の Quest を Map に置き換えて表示する行',
    token: /title\.Replace\(\s*"Quest"\s*,\s*"Map"\s*\)/,
    hint: '<code>Console.WriteLine(title.Replace("Quest", "Map"));</code> と書く。',
    output: `18
CRYSTAL CAVE QUEST
True
Crystal Cave Map
Crystal
所持金：1,500 G`
  },
  {
    id: 'csharp-08',
    phase: '繰り返しとデータ',
    title: '配列と List',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は配列と List を使い、スコアと持ち物を管理する。</p>
<p>配列は、同じ型の値を決まった個数で並べる入れ物であり、<code>int[]</code> のように書く。要素の番号（インデックス）は 0 から始まる。List は、要素の数を後から増減できる入れ物である。<code>List&lt;string&gt;</code> は string を入れる List を表し、Add で追加、Remove で削除を行う。foreach 文は、入れ物の要素を先頭から順に取り出して繰り返す。</p>`,
    code: `int[] scores = { 120, 80, 150 };
Console.WriteLine(scores[0]);
Console.WriteLine(scores.Length);

List<string> items = new List<string>();
items.Add("薬草");
items.Add("たいまつ");
items.Add("鍵");
items.Remove("たいまつ");

foreach (string item in items)
{
    Console.WriteLine(item);
}
Console.WriteLine($"アイテム数：{items.Count}");
`,
    blank: 'foreach (string item in items)',
    placeholder: '// items の要素を item に順に入れて繰り返す foreach の行',
    token: /foreach\s*\(\s*(string|var)\s+item\s+in\s+items\s*\)/,
    hint: '<code>foreach (string item in items)</code> と書く。',
    output: `120
3
薬草
鍵
アイテム数：2`
  },
  {
    id: 'csharp-09',
    phase: 'メソッド',
    title: 'メソッドの基本',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者はメソッドを定義し、ステータスの表示と回復の計算をまとめる。</p>
<p>メソッドは、処理に名前をつけ、何度でも呼び出せる形にしたものである。かっこの中の変数を引数といい、呼び出し側から値を受け取る。return は計算した値を呼び出し側に返す。戻り値の型は名前の前に書き、戻り値が空のメソッドでは型に void を書く。定義の段階では中の処理は待機しており、呼び出しの時点で実行される。</p>`,
    code: `void ShowStatus(string name, int hp)
{
    Console.WriteLine($"{name}：HP {hp}");
}

int Heal(int hp, int amount)
{
    return hp + amount;
}

ShowStatus("Aoi", 40);
int newHp = Heal(40, 25);
ShowStatus("Aoi", newHp);
`,
    blank: 'return hp + amount;',
    placeholder: '// hp と amount の合計を呼び出し側に返す行',
    token: /return\s+hp\s*\+\s*amount\s*;/,
    hint: '<code>return hp + amount;</code> と書く。',
    output: `Aoi：HP 40
Aoi：HP 65`
  },
  {
    id: 'csharp-10',
    phase: 'メソッド',
    title: 'メソッドの活用',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は省略可能な引数、名前つき引数、out 引数を使い、攻撃と道具の処理を書く。</p>
<p><code>int bonus = 0</code> のように既定値を持つ引数は、呼び出しのときに省略できる。<code>critical: true</code> のように引数名を書くと、途中の引数を飛ばして指定できる。<code>=&gt;</code> を使う書き方は式形式のメンバーといい、1つの式を返すメソッドを短く書く。out 引数は、メソッドから2つめの結果を受け取るための引数である。</p>`,
    code: `int Attack(int power, int bonus = 0, bool critical = false)
    => critical ? (power + bonus) * 2 : power + bonus;

Console.WriteLine(Attack(10));
Console.WriteLine(Attack(10, 5));
Console.WriteLine(Attack(10, critical: true));

bool TryUsePotion(int potions, out int left)
{
    left = Math.Max(0, potions - 1);
    return potions > 0;
}

if (TryUsePotion(2, out int rest))
{
    Console.WriteLine($"薬を使った。残り {rest} 個");
}
`,
    blank: 'Console.WriteLine(Attack(10, critical: true));',
    placeholder: '// 名前つき引数で critical に true を渡し、結果を表示する行',
    token: /Attack\(\s*10\s*,\s*critical\s*:\s*true\s*\)/,
    hint: '<code>Console.WriteLine(Attack(10, critical: true));</code> と書く。',
    output: `10
15
20
薬を使った。残り 1 個`
  },
  {
    id: 'csharp-11',
    phase: 'メソッド',
    title: 'クラスライブラリ',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は .NET のクラスライブラリから Math と Random を使い、ダメージとサイコロの計算を行う。</p>
<p>クラスライブラリは、.NET があらかじめ用意したクラスの集まりである。Math は計算用のメソッドを持ち、Max は大きいほう、Round は四捨五入、Clamp は範囲内への収め込み、Sqrt は平方根を返す。Random は乱数（予測の難しい数）を作るクラスであり、<code>Next(1, 7)</code> は 1 以上 7 未満、つまり 1〜6 の整数を返す。</p>`,
    code: `int hp = Math.Max(0, 30 - 45);
Console.WriteLine(hp);
Console.WriteLine(Math.Round(7.456, 1));
Console.WriteLine(Math.Clamp(150, 0, 100));
Console.WriteLine(Math.Sqrt(81));

var dice = new Random();
int roll = dice.Next(1, 7);
Console.WriteLine(roll >= 1 && roll <= 6);
`,
    blank: 'int roll = dice.Next(1, 7);',
    placeholder: '// 1〜6 の乱数を作り、roll に入れる行',
    token: /int\s+roll\s*=\s*dice\.Next\(\s*1\s*,\s*7\s*\)\s*;/,
    hint: '<code>int roll = dice.Next(1, 7);</code> と書く。2つめの値は範囲に含まれる数より 1 大きい。',
    output: `0
7.5
100
9
True`
  },
  {
    id: 'csharp-12',
    phase: 'メソッド',
    title: 'キーボード入力',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は Console.ReadLine で名前とレベルを受け取り、冒険の開始を表示する。</p>
<p>Console.ReadLine は、キーボードから1行を読み取り、文字列として返すメソッドである。入力が終わった場合は null（値が空の状態）を返すことがあるため、<code>?? ""</code> で空文字に置き換える。<code>int.TryParse</code> は文字列を整数に変換し、成功すると true を返して out 引数に結果を入れる。変換に失敗すると false を返すため、プログラムはそのまま次の処理へ進む。</p>`,
    code: `Console.Write("名前を入力：");
string name = Console.ReadLine() ?? "";

Console.Write("レベルを入力：");
string? text = Console.ReadLine();

if (int.TryParse(text, out int level))
{
    Console.WriteLine($"{name}（Lv.{level}）が冒険を始める");
}
else
{
    Console.WriteLine("レベルは数字で入力してください");
}
`,
    blank: 'if (int.TryParse(text, out int level))',
    placeholder: '// text を整数に変換し、成功したら level に入れる if の行',
    token: /if\s*\(\s*int\.TryParse\(\s*text\s*,\s*out\s+int\s+level\s*\)\s*\)/,
    hint: '<code>if (int.TryParse(text, out int level))</code> と書く。',
    output: `名前を入力：Aoi
レベルを入力：5
Aoi（Lv.5）が冒険を始める`
  },
  {
    id: 'csharp-13',
    phase: 'メソッド',
    title: '総合：ハイ＆ローゲーム',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は乱数、繰り返し、入力、条件分岐を組み合わせ、数当てのハイ＆ローゲームを作る。</p>
<p>コンピュータは 1〜100 の答えを1つ決める。プレイヤーが予想を入力すると、プログラムは答えより小さいか大きいかを伝え、正解までの回数を数える。<code>while (true)</code> は条件が常に true の繰り返しであり、正解の時点で break により抜け出す。continue は、残りの処理を飛ばして次の繰り返しに進む命令である。実行結果は、答えが 63 の場合の一例である。</p>`,
    code: `var random = new Random();
int answer = random.Next(1, 101);
int tries = 0;

while (true)
{
    Console.Write("1〜100 の数を予想：");
    if (!int.TryParse(Console.ReadLine(), out int guess))
    {
        Console.WriteLine("数字で入力してください");
        continue;
    }
    tries++;

    if (guess < answer)
    {
        Console.WriteLine("もっと大きい（High）");
    }
    else if (guess > answer)
    {
        Console.WriteLine("もっと小さい（Low）");
    }
    else
    {
        Console.WriteLine($"正解。{tries} 回で当てた");
        break;
    }
}
`,
    blank: 'else if (guess > answer)',
    placeholder: '// 予想が答えより大きいかを調べる else if の行',
    token: /else\s+if\s*\(\s*guess\s*>\s*answer\s*\)/,
    hint: '<code>else if (guess &gt; answer)</code> と書く。',
    output: `1〜100 の数を予想：50
もっと大きい（High）
1〜100 の数を予想：75
もっと小さい（Low）
1〜100 の数を予想：62
もっと大きい（High）
1〜100 の数を予想：63
正解。4 回で当てた`
  },
  {
    id: 'csharp-14',
    phase: 'オブジェクト指向',
    title: 'クラスとインスタンス',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は Character クラスを定義し、勇者とスライムのインスタンスを作って戦わせる。</p>
<p>クラスは、データ（フィールド）と処理（メソッド）をまとめた設計図である。インスタンスは、<code>new</code> で設計図から作った実物である。コンストラクタは、インスタンスを作るときに呼ばれる特別なメソッドであり、クラスと同じ名前を持つ。C# のファイルでは、上に実行する文を書き、その下にクラスの定義を置く。</p>`,
    code: `var hero = new Character("Aoi", 100);
var slime = new Character("スライム", 30);
hero.Attack(slime, 12);
slime.Show();

class Character
{
    public string Name;
    public int Hp;

    public Character(string name, int hp)
    {
        Name = name;
        Hp = hp;
    }

    public void Attack(Character target, int power)
    {
        target.Hp -= power;
        Console.WriteLine($"{Name} の攻撃。{target.Name} に {power} のダメージ");
    }

    public void Show()
    {
        Console.WriteLine($"{Name}：HP {Hp}");
    }
}
`,
    blank: 'var slime = new Character("スライム", 30);',
    placeholder: '// 名前がスライム、HP が 30 の Character を作り、slime に入れる行',
    token: /slime\s*=\s*new\s+Character\(\s*"スライム"\s*,\s*30\s*\)\s*;/,
    hint: '<code>var slime = new Character("スライム", 30);</code> と書く。',
    output: `Aoi の攻撃。スライム に 12 のダメージ
スライム：HP 18`
  },
  {
    id: 'csharp-15',
    phase: 'オブジェクト指向',
    title: 'プロパティとカプセル化',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者はプロパティを使い、Hero の HP をクラスの内部でのみ変更できる形にする。</p>
<p>プロパティは、フィールドの読み書きを get と set で管理する仕組みである。<code>{ get; private set; }</code> と書くと、外部からは読み取りのみが可能になり、変更はクラスの内部に限られる。このように、データを内部に隠し、決められたメソッドを通して操作させる設計をカプセル化という。カプセル化により、HP が負の値になるような誤った状態を防げる。</p>`,
    code: `var hero = new Hero("Aoi");
hero.TakeDamage(30);
hero.TakeDamage(90);
Console.WriteLine($"{hero.Name}：HP {hero.Hp}");
Console.WriteLine(hero.IsDown);

class Hero
{
    public string Name { get; }
    public int Hp { get; private set; } = 100;
    public bool IsDown => Hp == 0;

    public Hero(string name)
    {
        Name = name;
    }

    public void TakeDamage(int amount)
    {
        Hp = Math.Max(0, Hp - amount);
    }
}
`,
    blank: 'public int Hp { get; private set; } = 100;',
    placeholder: '// 読み取りは公開し、変更はクラス内部に限る Hp プロパティ（初期値 100）',
    token: /public\s+int\s+Hp\s*\{\s*get\s*;\s*private\s+set\s*;\s*\}\s*=\s*100\s*;/,
    hint: '<code>public int Hp { get; private set; } = 100;</code> と書く。',
    output: `Aoi：HP 0
True`
  },
  {
    id: 'csharp-16',
    phase: 'オブジェクト指向',
    title: 'static メンバーと定数',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は static メンバーと const を使い、モンスターの出現数とゲームのルールを管理する。</p>
<p>static メンバーは、インスタンスの代わりにクラスそのものに属するメンバーである。<code>Monster.Count</code> のように、クラス名から直接使う。const は、プログラムの実行中に一定である値（定数）を表す。static class は static メンバーのみを持つクラスであり、ルールの計算のような道具箱に向く。</p>`,
    code: `var a = new Monster("スライム");
var b = new Monster("ゴブリン");
Console.WriteLine($"出現数：{Monster.Count}");
Console.WriteLine($"最大レベル：{GameRule.MaxLevel}");
Console.WriteLine(GameRule.ExpToNext(3));

class Monster
{
    public static int Count = 0;
    public string Name { get; }

    public Monster(string name)
    {
        Name = name;
        Count++;
    }
}

static class GameRule
{
    public const int MaxLevel = 99;
    public static int ExpToNext(int level) => level * level * 10;
}
`,
    blank: 'public const int MaxLevel = 99;',
    placeholder: '// 値が 99 の定数 MaxLevel を公開する行',
    token: /public\s+const\s+int\s+MaxLevel\s*=\s*99\s*;/,
    hint: '<code>public const int MaxLevel = 99;</code> と書く。',
    output: `出現数：2
最大レベル：99
90`
  },
  {
    id: 'csharp-17',
    phase: 'オブジェクト指向',
    title: '値型と参照型',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は struct と class の代入を比べ、値型と参照型の違いを確かめる。</p>
<p>値型（int や struct など）は、代入のときに中身がまるごと複製される。そのため、p2 を変えても p1 はそのまま残る。参照型（class など）は、代入のときにインスタンスの場所（参照）が複製される。b1 と b2 は同じインスタンスを指すため、b2 の変更は b1 にも現れる。</p>`,
    code: `Point p1 = new Point(1, 2);
Point p2 = p1;
p2.X = 10;
Console.WriteLine($"p1.X = {p1.X}");

Bag b1 = new Bag();
Bag b2 = b1;
b2.Gold = 500;
Console.WriteLine($"b1.Gold = {b1.Gold}");

struct Point
{
    public int X;
    public int Y;
    public Point(int x, int y) { X = x; Y = y; }
}

class Bag
{
    public int Gold;
}
`,
    blank: 'Point p2 = p1;',
    placeholder: '// p1 を p2 に代入する行',
    token: /Point\s+p2\s*=\s*p1\s*;/,
    hint: '<code>Point p2 = p1;</code> と書く。',
    output: `p1.X = 1
b1.Gold = 500`
  },
  {
    id: 'csharp-18',
    phase: 'オブジェクト指向',
    title: 'enum と record',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は enum で属性を、record でカードを表し、with 式でカードの複製を作る。</p>
<p>enum（列挙型）は、決まった選択肢に名前をつけた型である。record は、データを運ぶためのクラスを1行で定義する書き方であり、ToString による読みやすい表示と、中身による等価判定を自動で備える。<code>with</code> 式は、一部の値を変えた複製を作る。元の record はそのまま残る。</p>`,
    code: `var card = new Card("ファイアドラゴン", Element.Fire, 8);
Console.WriteLine(card);

var copy = card with { Power = 9 };
Console.WriteLine(copy.Power);
Console.WriteLine(card == new Card("ファイアドラゴン", Element.Fire, 8));

enum Element { Fire, Water, Wind }

record Card(string Name, Element Type, int Power);
`,
    blank: 'var copy = card with { Power = 9 };',
    placeholder: '// card の Power を 9 に変えた複製を copy に入れる行',
    token: /copy\s*=\s*card\s+with\s*\{\s*Power\s*=\s*9\s*\}\s*;/,
    hint: '<code>var copy = card with { Power = 9 };</code> と書く。',
    output: `Card { Name = ファイアドラゴン, Type = Fire, Power = 8 }
9
True`
  },
  {
    id: 'csharp-19',
    phase: 'オブジェクト指向',
    title: 'null と安全な書き方',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は null 許容型と ?. ?? ??= を使い、値が空の場合も安全に動くコードを書く。</p>
<p>null は、変数の指す先が空である状態を表す。<code>string?</code> のように型に ? をつけると、null を入れてよい型（null 許容型）になる。<code>?.</code> は左側が null のときに処理を止めて null を返し、<code>??</code> は左側が null のときに右側の値を使う。<code>??=</code> は、変数が null のときに限り値を代入する。</p>`,
    code: `string? title = null;
Console.WriteLine(title ?? "見習い");
title ??= "勇者";
Console.WriteLine(title);

Player? found = FindPlayer("Ren");
Console.WriteLine(found?.Name ?? "該当者は 0 人");

Player? aoi = FindPlayer("Aoi");
Console.WriteLine(aoi?.Name.Length);

Player? FindPlayer(string name) =>
    name == "Aoi" ? new Player("Aoi") : null;

record Player(string Name);
`,
    blank: 'Console.WriteLine(found?.Name ?? "該当者は 0 人");',
    placeholder: '// found が null のときは「該当者は 0 人」を表示する行',
    token: /found\s*\?\.\s*Name\s*\?\?\s*"該当者は 0 人"/,
    hint: '<code>Console.WriteLine(found?.Name ?? "該当者は 0 人");</code> と書く。',
    output: `見習い
勇者
該当者は 0 人
3`
  },
  {
    id: 'csharp-20',
    phase: 'オブジェクト指向',
    title: '継承',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は Enemy クラスを継承して Boss クラスを作り、行動の一部を書き換える。</p>
<p>継承は、既存のクラス（基底クラス）の機能を引き継いで新しいクラス（派生クラス）を作る仕組みであり、<code>class Boss : Enemy</code> と書く。基底クラスで virtual をつけたメソッドは、派生クラスで override により書き換えられる。<code>base.Act()</code> は基底クラスの処理を呼び出す。Enemy 型の配列に Boss を入れても、実行時には Boss の Act が呼ばれる。</p>`,
    code: `Enemy[] enemies = { new Enemy("スライム", 5), new Boss("魔王", 20) };
foreach (var e in enemies)
{
    e.Act();
}

class Enemy
{
    public string Name { get; }
    public int Power { get; }

    public Enemy(string name, int power)
    {
        Name = name;
        Power = power;
    }

    public virtual void Act()
    {
        Console.WriteLine($"{Name} の攻撃：{Power} ダメージ");
    }
}

class Boss : Enemy
{
    public Boss(string name, int power) : base(name, power) { }

    public override void Act()
    {
        base.Act();
        Console.WriteLine($"{Name} は力をためている");
    }
}
`,
    blank: 'class Boss : Enemy',
    placeholder: '// Enemy を継承する Boss クラスの宣言',
    token: /class\s+Boss\s*:\s*Enemy/,
    hint: '<code>class Boss : Enemy</code> と書く。コロンの右に基底クラスの名前を置く。',
    output: `スライム の攻撃：5 ダメージ
魔王 の攻撃：20 ダメージ
魔王 は力をためている`
  },
  {
    id: 'csharp-21',
    phase: 'オブジェクト指向',
    title: '抽象クラスとインタフェース',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者はインタフェースと抽象クラスを使い、効果の異なる道具を同じ手順で使う。</p>
<p>インタフェースは、クラスが持つべきメソッドの名前と形のみを定めた約束である。抽象クラス（abstract class）は、共通の処理を持ちつつ、一部のメソッドを派生クラスに任せるクラスである。abstract のメソッドは中身が空であり、派生クラスが override で中身を書く。呼び出し側は IUsable 型として扱うため、道具の種類が増えても同じループで処理できる。</p>`,
    code: `var items = new List<IUsable> { new Potion(), new Bomb() };
foreach (var item in items)
{
    Console.WriteLine(item.Use());
}

interface IUsable
{
    string Use();
}

abstract class Item : IUsable
{
    public abstract string Name { get; }
    public string Use() => $"{Name} を使った：{Effect()}";
    protected abstract string Effect();
}

class Potion : Item
{
    public override string Name => "回復薬";
    protected override string Effect() => "HP が 30 回復";
}

class Bomb : Item
{
    public override string Name => "爆弾";
    protected override string Effect() => "敵全体に 20 ダメージ";
}
`,
    blank: 'protected override string Effect() => "HP が 30 回復";',
    placeholder: '// Effect を書き換え、「HP が 30 回復」を返す行',
    token: /protected\s+override\s+string\s+Effect\(\s*\)\s*=>\s*"HP が 30 回復"\s*;/,
    hint: '<code>protected override string Effect() =&gt; "HP が 30 回復";</code> と書く。',
    output: `回復薬 を使った：HP が 30 回復
爆弾 を使った：敵全体に 20 ダメージ`
  },
  {
    id: 'csharp-22',
    phase: '実務の道具',
    title: 'コレクションと LINQ',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は Dictionary にスコアを入れ、LINQ で上位のプレイヤーを取り出す。</p>
<p>Dictionary は、キーと値の組を保存するコレクションである。<code>scores["Sora"] = 390</code> はキー Sora に値を入れる。LINQ は、コレクションの絞り込み・並べ替え・変換をメソッドの連結で書く仕組みである。Where は条件に合う要素を残し、OrderByDescending は大きい順に並べ、Select は各要素を別の形に変える。<code>p =&gt; p.Value &gt;= 300</code> はラムダ式であり、その場で定義する小さな関数である。</p>`,
    code: `var scores = new Dictionary<string, int>
{
    ["Aoi"] = 320,
    ["Ren"] = 450,
    ["Mio"] = 280
};
scores["Sora"] = 390;

var top = scores
    .Where(p => p.Value >= 300)
    .OrderByDescending(p => p.Value)
    .Select(p => $"{p.Key}:{p.Value}");

Console.WriteLine(string.Join(", ", top));
Console.WriteLine($"合計：{scores.Values.Sum()}");
`,
    blank: '.Where(p => p.Value >= 300)',
    placeholder: '// 値が 300 以上の組を残す Where の行',
    token: /\.Where\(\s*p\s*=>\s*p\.Value\s*>=\s*300\s*\)/,
    hint: '<code>.Where(p =&gt; p.Value &gt;= 300)</code> と書く。',
    output: `Ren:450, Sora:390, Aoi:320
合計：1440`
  },
  {
    id: 'csharp-23',
    phase: '実務の道具',
    title: '例外',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は try・catch・finally を使い、入力の誤りでプログラムが止まる事態を防ぐ。</p>
<p>例外は、実行中に起きた異常を知らせる仕組みである。try の中で例外が起きると、処理は種類の一致する catch に移る。FormatException は文字列の形式の誤り、DivideByZeroException は 0 による割り算を表す。finally の中は、どの場合でも最後に実行される。</p>`,
    code: `string[] inputs = { "12", "abc", "0" };
foreach (var text in inputs)
{
    try
    {
        int people = int.Parse(text);
        int share = 120 / people;
        Console.WriteLine($"1 人あたり {share} 枚");
    }
    catch (FormatException)
    {
        Console.WriteLine($"「{text}」は数字の形式と異なる");
    }
    catch (DivideByZeroException)
    {
        Console.WriteLine("0 で割る計算は例外になる");
    }
    finally
    {
        Console.WriteLine("-- 次の入力へ --");
    }
}
`,
    blank: 'catch (DivideByZeroException)',
    placeholder: '// 0 による割り算の例外を受け止める catch の行',
    token: /catch\s*\(\s*DivideByZeroException(\s+\w+)?\s*\)/,
    hint: '<code>catch (DivideByZeroException)</code> と書く。',
    output: `1 人あたり 10 枚
-- 次の入力へ --
「abc」は数字の形式と異なる
-- 次の入力へ --
0 で割る計算は例外になる
-- 次の入力へ --`
  },
  {
    id: 'csharp-24',
    phase: '実務の道具',
    title: 'テスト（xUnit）',
    type: 'code',
    run: 'static',
    file: 'ScoreTests.cs',
    story: `<p class="lead">学習者は xUnit でテストを書き、スコア計算が正しい値を返すことを自動で確かめる。</p>
<p>テストは、コードが期待どおりに動くかを確かめるプログラムである。<code>dotnet new xunit -o Game.Tests</code> でテスト用のプロジェクトを作り、<code>dotnet test</code> で実行する。[Fact] は1つの確認を表し、[Theory] と [InlineData] は同じテストを複数の入力で繰り返す。<code>Assert.Equal(期待値, 実際の値)</code> は2つの値が等しいことを確かめ、異なる場合はテストを失敗にする。</p>`,
    code: `using Xunit;

public static class Score
{
    public static int Total(int baseScore, int combo) => baseScore + combo * 10;
}

public class ScoreTests
{
    [Fact]
    public void Total_AddsComboBonus()
    {
        int result = Score.Total(100, 3);
        Assert.Equal(130, result);
    }

    [Theory]
    [InlineData(0, 0, 0)]
    [InlineData(50, 1, 60)]
    public void Total_WorksForVariousInputs(int baseScore, int combo, int expected)
    {
        Assert.Equal(expected, Score.Total(baseScore, combo));
    }
}
`,
    blank: 'Assert.Equal(130, result);',
    placeholder: '// result が 130 と等しいことを確かめる行',
    token: /Assert\.Equal\(\s*130\s*,\s*result\s*\)\s*;/,
    hint: '<code>Assert.Equal(130, result);</code> と書く。期待値を先に書く。',
    output: `$ dotnet test
Passed!  - Failed:     0, Passed:     3, Skipped:     0, Total:     3, Duration: 12 ms - Game.Tests.dll (net10.0)`
  },
  {
    id: 'csharp-25',
    phase: '総合制作',
    title: '総合：ターン制バトルゲーム',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者はクラス、プロパティ、繰り返しを組み合わせ、勇者とドラゴンのターン制バトルを作る。</p>
<p>Fighter クラスは名前・HP・攻撃力を持ち、Attack メソッドで相手の HP を減らす。HP は private set で守られ、0 以上の範囲で更新される。while 文は両者が生きている間ターンを繰り返し、ドラゴンは生き残っている場合に限り反撃する。最後に条件演算子 <code>? :</code> で勝者を表示する。</p>`,
    code: `var hero = new Fighter("勇者", 60, 20);
var dragon = new Fighter("ドラゴン", 80, 11);
int turn = 1;

while (hero.IsAlive && dragon.IsAlive)
{
    Console.WriteLine($"--- ターン {turn} ---");
    hero.Attack(dragon);
    if (dragon.IsAlive)
    {
        dragon.Attack(hero);
    }
    turn++;
}
Console.WriteLine(hero.IsAlive ? "勇者の勝利" : "ドラゴンの勝利");

class Fighter
{
    public string Name { get; }
    public int Hp { get; private set; }
    public int Power { get; }
    public bool IsAlive => Hp > 0;

    public Fighter(string name, int hp, int power)
    {
        Name = name;
        Hp = hp;
        Power = power;
    }

    public void Attack(Fighter target)
    {
        target.Hp = Math.Max(0, target.Hp - Power);
        Console.WriteLine($"{Name} の攻撃 → {target.Name} HP {target.Hp}");
    }
}
`,
    blank: 'while (hero.IsAlive && dragon.IsAlive)',
    placeholder: '// 勇者とドラゴンの両方が生きている間に繰り返す while の行',
    token: /while\s*\(\s*hero\.IsAlive\s*&&\s*dragon\.IsAlive\s*\)/,
    hint: '<code>while (hero.IsAlive &amp;&amp; dragon.IsAlive)</code> と書く。',
    output: `--- ターン 1 ---
勇者 の攻撃 → ドラゴン HP 60
ドラゴン の攻撃 → 勇者 HP 49
--- ターン 2 ---
勇者 の攻撃 → ドラゴン HP 40
ドラゴン の攻撃 → 勇者 HP 38
--- ターン 3 ---
勇者 の攻撃 → ドラゴン HP 20
ドラゴン の攻撃 → 勇者 HP 27
--- ターン 4 ---
勇者 の攻撃 → ドラゴン HP 0
勇者の勝利`
  },
  {
    id: 'csharp-26',
    phase: '総合制作',
    title: '総合：ダンジョン探索',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は文字列の配列で地図を表し、移動コマンドに従って勇者を宝箱まで進める。</p>
<p>地図の <code>#</code> は壁、<code>.</code> は通路、<code>T</code> は宝箱を表す。<code>map[row][col]</code> は row 行目・col 列目の文字を取り出す。switch 式は移動の向きを (行の変化, 列の変化) の組に変換し、プログラムは移動先が壁の場合に移動を取りやめて次のコマンドへ進む。宝箱に着いた時点で break により探索を終える。</p>`,
    code: `string[] map =
{
    "#######",
    "#S..#T#",
    "#.#...#",
    "#...#.#",
    "#######"
};
int row = 1, col = 1;
string moves = "RRRDRRU";

foreach (char m in moves)
{
    (int dr, int dc) = m switch
    {
        'U' => (-1, 0),
        'D' => (1, 0),
        'L' => (0, -1),
        _ => (0, 1)
    };
    char next = map[row + dr][col + dc];
    if (next == '#')
    {
        Console.WriteLine($"{m}：壁にぶつかった");
        continue;
    }
    row += dr;
    col += dc;
    Console.WriteLine($"{m}：({row}, {col}) へ移動");
    if (next == 'T')
    {
        Console.WriteLine("宝箱を見つけた。探索成功");
        break;
    }
}
`,
    blank: "if (next == '#')",
    placeholder: '// 移動先の文字が壁（#）かを調べる if の行',
    token: /if\s*\(\s*next\s*==\s*'#'\s*\)/,
    hint: "<code>if (next == '#')</code> と書く。char の値は <code>'</code> で囲む。",
    output: `R：(1, 2) へ移動
R：(1, 3) へ移動
R：壁にぶつかった
D：(2, 3) へ移動
R：(2, 4) へ移動
R：(2, 5) へ移動
U：(1, 5) へ移動
宝箱を見つけた。探索成功`
  },
  {
    id: 'csharp-27',
    phase: '実務レベルの C#',
    title: '値の等価性と並べ替え',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は record の等価性を確かめ、IComparable を実装してスコアを並べ替える。</p>
<p>等価性には2種類ある。参照の等価性は「同じインスタンスかどうか」、値の等価性は「中身が同じかどうか」を表す。record の == は値の等価性で比べ、ReferenceEquals は参照の等価性で比べる。List の Sort は、要素の CompareTo の結果（負・0・正）で順序を決める。ここでは点数の大きい順に並べ、同点の場合は名前の順に並べる。</p>`,
    code: `var a = new Score("Aoi", 320);
var b = new Score("Aoi", 320);
Console.WriteLine(a == b);
Console.WriteLine(ReferenceEquals(a, b));

var list = new List<Score>
{
    new("Ren", 450), new("Mio", 280), new("Sora", 450), new("Aoi", 320)
};
list.Sort();
foreach (var s in list)
{
    Console.WriteLine($"{s.Name} {s.Points}");
}

record Score(string Name, int Points) : IComparable<Score>
{
    public int CompareTo(Score? other)
    {
        if (other is null) return -1;
        int byPoints = other.Points.CompareTo(Points);
        return byPoints != 0 ? byPoints : string.CompareOrdinal(Name, other.Name);
    }
}
`,
    blank: 'int byPoints = other.Points.CompareTo(Points);',
    placeholder: '// 点数の大きい順になるよう、相手の点数と自分の点数を比べる行',
    token: /int\s+byPoints\s*=\s*other\.Points\.CompareTo\(\s*Points\s*\)\s*;/,
    hint: '<code>int byPoints = other.Points.CompareTo(Points);</code> と書く。相手を先に置くと大きい順になる。',
    output: `True
False
Ren 450
Sora 450
Aoi 320
Mio 280`
  },
  {
    id: 'csharp-28',
    phase: '実務レベルの C#',
    title: 'タプルと record',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者はタプルで2つの戻り値を返し、record struct で座標を表す。</p>
<p>タプルは、複数の値を1つにまとめる軽い入れ物であり、<code>(int Min, int Max)</code> のように要素に名前をつけられる。<code>var (low, high) = result;</code> は分解と呼ばれ、要素を別々の変数に取り出す。record struct は値型の record であり、小さなデータを表すのに向く。record も同じ形で分解できる。</p>`,
    code: `var result = MinMax(new[] { 42, 17, 88, 63 });
Console.WriteLine($"最小 {result.Min} / 最大 {result.Max}");
var (low, high) = result;
Console.WriteLine(high - low);

var p = new Position(3, 4);
var (x, y) = p;
Console.WriteLine($"{p} → x={x}, y={y}");
Console.WriteLine(p with { Y = 0 });

(int Min, int Max) MinMax(int[] values) => (values.Min(), values.Max());

readonly record struct Position(int X, int Y);
`,
    blank: '(int Min, int Max) MinMax(int[] values) => (values.Min(), values.Max());',
    placeholder: '// 最小値と最大値を名前つきタプルで返す MinMax の定義',
    token: /\(\s*int\s+Min\s*,\s*int\s+Max\s*\)\s*MinMax\(\s*int\[\]\s*values\s*\)\s*=>\s*\(\s*values\.Min\(\s*\)\s*,\s*values\.Max\(\s*\)\s*\)/,
    hint: '<code>(int Min, int Max) MinMax(int[] values) =&gt; (values.Min(), values.Max());</code> と書く。',
    output: `最小 17 / 最大 88
71
Position { X = 3, Y = 4 } → x=3, y=4
Position { X = 3, Y = 0 }`
  },
  {
    id: 'csharp-29',
    phase: '実務レベルの C#',
    title: 'パターンマッチング',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は型・プロパティ・リストのパターンを組み合わせ、さまざまなドロップ品を説明する。</p>
<p>型パターン（<code>int gold</code>）は、値がその型のときに一致し、変数に取り出す。when は追加の条件を表す。プロパティパターン（<code>Loot { Rarity: &gt;= 5 }</code>）は、プロパティの値で一致を判定する。リストパターン（<code>[7, 7, 7]</code>）は、配列の並びで一致を判定する。switch 式は上から順に調べるため、細かい条件を先に書く。</p>`,
    code: `object[] drops =
{
    250,
    "古びた地図",
    new Loot("盾", 3),
    new Loot("王冠", 5),
    new[] { 7, 7, 7 }
};

foreach (var drop in drops)
{
    Console.WriteLine(Describe(drop));
}

string Describe(object drop) => drop switch
{
    int gold when gold >= 100 => $"大量の金貨 {gold} G",
    int gold => $"金貨 {gold} G",
    string name => $"アイテム「{name}」",
    Loot { Rarity: >= 5 } loot => $"伝説級の {loot.Name}",
    Loot loot => $"{loot.Name}（レア度 {loot.Rarity}）",
    int[] nums when nums is [7, 7, 7] => "スロットで大当たり",
    _ => "正体不明の物"
};

record Loot(string Name, int Rarity);
`,
    blank: 'Loot { Rarity: >= 5 } loot => $"伝説級の {loot.Name}",',
    placeholder: '// Rarity が 5 以上の Loot に一致し、伝説級として説明する行',
    token: /Loot\s*\{\s*Rarity\s*:\s*>=\s*5\s*\}\s*loot\s*=>\s*\$"伝説級の \{loot\.Name\}"\s*,/,
    hint: '<code>Loot { Rarity: &gt;= 5 } loot =&gt; $"伝説級の {loot.Name}",</code> と書く。',
    output: `大量の金貨 250 G
アイテム「古びた地図」
盾（レア度 3）
伝説級の 王冠
スロットで大当たり`
  },
  {
    id: 'csharp-30',
    phase: '実務レベルの C#',
    title: 'ジェネリクス',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者はジェネリクスを使い、どの型でも使える持ち物袋と最大値のメソッドを作る。</p>
<p>ジェネリクスは、型を引数のように受け取る仕組みである。<code>Bag&lt;T&gt;</code> の T は型パラメーターであり、使う側が <code>Bag&lt;string&gt;</code> のように具体的な型を決める。<code>where T : IComparable&lt;T&gt;</code> は制約であり、T を比較可能な型に限る。制約により、メソッドの中で CompareTo を安全に呼べる。</p>`,
    code: `var bag = new Bag<string>(3);
foreach (var name in new[] { "薬草", "鍵", "地図", "宝石" })
{
    Console.WriteLine($"{name}：{(bag.Add(name) ? "入れた" : "満杯")}");
}

Console.WriteLine(MaxOf(new[] { 3, 9, 4 }));
Console.WriteLine(MaxOf(new[] { "pear", "apple", "fig" }));

T MaxOf<T>(T[] values) where T : IComparable<T>
{
    T best = values[0];
    foreach (var v in values)
    {
        if (v.CompareTo(best) > 0) best = v;
    }
    return best;
}

class Bag<T>
{
    private readonly List<T> _items = new();
    private readonly int _capacity;

    public Bag(int capacity) => _capacity = capacity;

    public bool Add(T item)
    {
        if (_items.Count >= _capacity) return false;
        _items.Add(item);
        return true;
    }
}
`,
    blank: 'T MaxOf<T>(T[] values) where T : IComparable<T>',
    placeholder: '// T を比較可能な型に限るジェネリックメソッド MaxOf の宣言',
    token: /T\s+MaxOf\s*<\s*T\s*>\s*\(\s*T\[\]\s*values\s*\)\s*where\s+T\s*:\s*IComparable\s*<\s*T\s*>/,
    hint: '<code>T MaxOf&lt;T&gt;(T[] values) where T : IComparable&lt;T&gt;</code> と書く。',
    output: `薬草：入れた
鍵：入れた
地図：入れた
宝石：満杯
9
pear`
  },
  {
    id: 'csharp-31',
    phase: '実務レベルの C#',
    title: 'デリゲートとイベント',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者はデリゲートとイベントを使い、ターンの開始を複数の処理に知らせる。</p>
<p>デリゲートは、メソッドを値として扱う型である。<code>Func&lt;int, int&gt;</code> は int を受け取り int を返すメソッド、<code>Action&lt;string&gt;</code> は string を受け取り戻り値が空のメソッドを表す。イベントは、発生を登録済みの処理に知らせる仕組みであり、<code>+=</code> で処理を登録する。<code>?.Invoke</code> は、登録が1つ以上ある場合に限り全員を呼び出す。</p>`,
    code: `var timer = new TurnTimer();
timer.TurnStarted += turn => Console.WriteLine($"ターン {turn} 開始");
timer.TurnStarted += turn =>
{
    if (turn % 2 == 0) Console.WriteLine("  敵の増援が出現");
};

Func<int, int> doubleDamage = x => x * 2;
Action<string> log = msg => Console.WriteLine($"[LOG] {msg}");

timer.Run(3);
log($"最終ダメージ {doubleDamage(15)}");

class TurnTimer
{
    public event Action<int>? TurnStarted;

    public void Run(int turns)
    {
        for (int t = 1; t <= turns; t++)
        {
            TurnStarted?.Invoke(t);
        }
    }
}
`,
    blank: 'TurnStarted?.Invoke(t);',
    placeholder: '// 登録済みの処理に現在のターン番号 t を知らせる行',
    token: /TurnStarted\s*\?\.\s*Invoke\(\s*t\s*\)\s*;/,
    hint: '<code>TurnStarted?.Invoke(t);</code> と書く。',
    output: `ターン 1 開始
ターン 2 開始
  敵の増援が出現
ターン 3 開始
[LOG] 最終ダメージ 30`
  },
  {
    id: 'csharp-32',
    phase: '実務レベルの C#',
    title: 'LINQ によるデータ処理',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は GroupBy と集計メソッドを使い、ゲーム大会の結果をチームごとにまとめる。</p>
<p>GroupBy は、キーの等しい要素をグループにまとめる。各グループは Key と要素の並びを持ち、Sum や MaxBy で集計できる。MaxBy は、指定した値が最大の要素を返す。<code>new { ... }</code> は匿名型であり、その場限りのデータの形を名前なしで作る。<code>{値:F1}</code> は小数第1位までの表示を指定する。</p>`,
    code: `var matches = new[]
{
    new Match("Aoi", "赤", 120),
    new Match("Ren", "青", 200),
    new Match("Mio", "赤", 180),
    new Match("Sora", "青", 90),
    new Match("Kai", "赤", 150)
};

var teams = matches
    .GroupBy(m => m.Team)
    .Select(g => new
    {
        Team = g.Key,
        Total = g.Sum(m => m.Score),
        Best = g.MaxBy(m => m.Score)!.Player
    })
    .OrderByDescending(t => t.Total);

foreach (var t in teams)
{
    Console.WriteLine($"{t.Team}チーム 合計 {t.Total} / MVP {t.Best}");
}
Console.WriteLine($"平均 {matches.Average(m => m.Score):F1}");

record Match(string Player, string Team, int Score);
`,
    blank: '.GroupBy(m => m.Team)',
    placeholder: '// チーム名ごとにグループにまとめる行',
    token: /\.GroupBy\(\s*m\s*=>\s*m\.Team\s*\)/,
    hint: '<code>.GroupBy(m =&gt; m.Team)</code> と書く。',
    output: `赤チーム 合計 450 / MVP Mio
青チーム 合計 290 / MVP Ren
平均 148.0`
  },
  {
    id: 'csharp-33',
    phase: '実務レベルの C#',
    title: 'IEnumerable と拡張メソッド',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は yield return で数列を作り、拡張メソッドで IEnumerable に新しい操作を加える。</p>
<p>IEnumerable&lt;T&gt; は、foreach で順に取り出せる並びを表すインタフェースである。yield return は、値を1つ返して処理を一時停止し、次の要求で続きから再開する。この仕組みにより、無限に続く数列も Take で必要な数に限って取り出せる。拡張メソッドは、static クラスの中で最初の引数に this をつけて定義し、既存の型に後からメソッドを追加したように呼び出せる。</p>`,
    code: `foreach (var n in Fibonacci().Take(8))
{
    Console.Write($"{n} ");
}
Console.WriteLine();

var floors = new[] { "B1", "B2", "B3", "B4", "B5" };
foreach (var f in floors.EveryOther())
{
    Console.WriteLine($"休憩所：{f}");
}

IEnumerable<int> Fibonacci()
{
    int a = 0, b = 1;
    while (true)
    {
        yield return a;
        (a, b) = (b, a + b);
    }
}

static class SequenceExtensions
{
    public static IEnumerable<T> EveryOther<T>(this IEnumerable<T> source)
    {
        int i = 0;
        foreach (var item in source)
        {
            if (i % 2 == 0) yield return item;
            i++;
        }
    }
}
`,
    blank: 'public static IEnumerable<T> EveryOther<T>(this IEnumerable<T> source)',
    placeholder: '// IEnumerable<T> に EveryOther を追加する拡張メソッドの宣言',
    token: /static\s+IEnumerable\s*<\s*T\s*>\s*EveryOther\s*<\s*T\s*>\s*\(\s*this\s+IEnumerable\s*<\s*T\s*>\s+source\s*\)/,
    hint: '<code>public static IEnumerable&lt;T&gt; EveryOther&lt;T&gt;(this IEnumerable&lt;T&gt; source)</code> と書く。',
    output: `0 1 1 2 3 5 8 13
休憩所：B1
休憩所：B3
休憩所：B5`
  },
  {
    id: 'csharp-34',
    phase: '実務レベルの C#',
    title: 'コレクションの選択',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は HashSet・Queue・Stack・Dictionary を使い分け、ゲームの状態を管理する。</p>
<p>HashSet は同じ要素を1つに限って保持する集合であり、Add は新しい要素のときに true を返す。Queue は先に入れた要素を先に取り出す待ち行列であり、行動の順番に向く。Stack は最後に入れた要素を先に取り出す積み重ねであり、操作の取り消しに向く。Dictionary はキーによる検索が速く、TryGetValue はキーの有無の確認と値の取り出しを同時に行う。</p>`,
    code: `var visited = new HashSet<string> { "入口" };
Console.WriteLine(visited.Add("広間"));
Console.WriteLine(visited.Add("入口"));

var turnOrder = new Queue<string>(new[] { "勇者", "魔法使い", "スライム" });
string first = turnOrder.Dequeue();
turnOrder.Enqueue(first);
Console.WriteLine(string.Join(" → ", turnOrder));

var undo = new Stack<string>();
undo.Push("北へ移動");
undo.Push("宝箱を開ける");
Console.WriteLine($"取り消し：{undo.Pop()}");

var prices = new Dictionary<string, int> { ["薬草"] = 10, ["鍵"] = 50 };
if (prices.TryGetValue("鍵", out int price))
{
    Console.WriteLine($"鍵は {price} G");
}
`,
    blank: 'string first = turnOrder.Dequeue();',
    placeholder: '// 待ち行列の先頭を取り出し、first に入れる行',
    token: /string\s+first\s*=\s*turnOrder\.Dequeue\(\s*\)\s*;/,
    hint: '<code>string first = turnOrder.Dequeue();</code> と書く。',
    output: `True
False
魔法使い → スライム → 勇者
取り消し：宝箱を開ける
鍵は 50 G`
  },
  {
    id: 'csharp-35',
    phase: '実務レベルの C#',
    title: '文字列と日時の実務',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は DateTime・TimeSpan・StringBuilder を使い、イベントの予定表を作る。</p>
<p>DateTime は日付と時刻、TimeSpan は時間の長さ、DateOnly は日付のみを表す型である。2つの DateTime を引き算すると TimeSpan になる。ToString に書式と CultureInfo.InvariantCulture を渡すと、どの地域設定のパソコンでも同じ表示になる。StringBuilder は、文字列を何度も追加するときに効率よく連結するクラスである。</p>`,
    code: `using System.Globalization;
using System.Text;

var start = new DateTime(2026, 11, 5, 19, 30, 0);
var end = start.AddMinutes(95);
TimeSpan play = end - start;

Console.WriteLine(start.ToString("yyyy-MM-dd HH:mm", CultureInfo.InvariantCulture));
Console.WriteLine($"プレイ時間 {play.Hours} 時間 {play.Minutes} 分");
Console.WriteLine(start.DayOfWeek);

var sb = new StringBuilder();
foreach (var day in new[] { 5, 6, 7 })
{
    var date = new DateOnly(2026, 11, day);
    sb.AppendLine($"{date:MM-dd} イベント");
}
Console.Write(sb.ToString());
`,
    blank: 'TimeSpan play = end - start;',
    placeholder: '// end と start の差を TimeSpan として play に入れる行',
    token: /TimeSpan\s+play\s*=\s*end\s*-\s*start\s*;/,
    hint: '<code>TimeSpan play = end - start;</code> と書く。',
    output: `2026-11-05 19:30
プレイ時間 1 時間 35 分
Thursday
11-05 イベント
11-06 イベント
11-07 イベント`
  },
  {
    id: 'csharp-36',
    phase: '実務レベルの C#',
    title: '例外の設計と演算子の定義',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は独自の例外クラスと + 演算子を定義し、所持金の計算を安全で読みやすい形にする。</p>
<p>独自の例外クラスは Exception を継承して作り、不足額のような追加の情報を持たせられる。throw は例外を発生させる命令である。演算子の定義は <code>public static 型 operator +(型 a, 型 b)</code> の形で書き、<code>wallet += reward</code> のような自然な計算を可能にする。Gold は readonly record struct であり、計算のたびに新しい値を返す。</p>`,
    code: `var wallet = new Gold(300);
var reward = new Gold(150);
wallet += reward;
Console.WriteLine(wallet);

try
{
    wallet = wallet.Pay(new Gold(1000));
}
catch (ShortOfGoldException ex)
{
    Console.WriteLine(ex.Message);
}

readonly record struct Gold(int Amount)
{
    public static Gold operator +(Gold a, Gold b) => new(a.Amount + b.Amount);
    public static Gold operator -(Gold a, Gold b) => new(a.Amount - b.Amount);

    public Gold Pay(Gold price)
    {
        if (price.Amount > Amount)
        {
            throw new ShortOfGoldException(price.Amount - Amount);
        }
        return this - price;
    }

    public override string ToString() => $"{Amount} G";
}

class ShortOfGoldException : Exception
{
    public int Shortage { get; }

    public ShortOfGoldException(int shortage)
        : base($"所持金の不足：あと {shortage} G 必要")
    {
        Shortage = shortage;
    }
}
`,
    blank: 'public static Gold operator +(Gold a, Gold b) => new(a.Amount + b.Amount);',
    placeholder: '// 2つの Gold の Amount を足した Gold を返す + 演算子の定義',
    token: /public\s+static\s+Gold\s+operator\s*\+\s*\(\s*Gold\s+a\s*,\s*Gold\s+b\s*\)\s*=>\s*new\s*(Gold\s*)?\(\s*a\.Amount\s*\+\s*b\.Amount\s*\)/,
    hint: '<code>public static Gold operator +(Gold a, Gold b) =&gt; new(a.Amount + b.Amount);</code> と書く。',
    output: `450 G
所持金の不足：あと 550 G 必要`
  },
  {
    id: 'csharp-37',
    phase: '実務レベルの C#',
    title: '総合：カードショップの運営',
    type: 'code',
    run: 'static',
    file: 'Program.cs',
    story: `<p class="lead">学習者は enum・record・Dictionary・タプル・例外・LINQ を組み合わせ、カードショップの在庫と売上を管理する。</p>
<p>CardShop クラスは、カード名をキーとし、(カード, 在庫数) のタプルを値とする Dictionary で在庫を持つ。Sell は在庫を1つ減らして売上に加え、在庫が 0 のときは InvalidOperationException を投げる。Report は LINQ でレア度の高い順に並べ、<code>{値,-6}</code> の書式で左寄せの表を作る。</p>`,
    code: `var shop = new CardShop();
shop.Stock(new Card("炎の竜", Rarity.Rare, 800), 2);
shop.Stock(new Card("森の妖精", Rarity.Common, 120), 5);
shop.Stock(new Card("氷の巨人", Rarity.Epic, 1500), 1);

shop.Sell("炎の竜");
shop.Sell("氷の巨人");
try
{
    shop.Sell("氷の巨人");
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"エラー：{ex.Message}");
}
shop.Report();

enum Rarity { Common, Rare, Epic }

record Card(string Name, Rarity Grade, int Price);

class CardShop
{
    private readonly Dictionary<string, (Card Card, int Count)> _stock = new();
    private int _sales;

    public void Stock(Card card, int count) => _stock[card.Name] = (card, count);

    public void Sell(string name)
    {
        if (!_stock.TryGetValue(name, out var entry) || entry.Count == 0)
        {
            throw new InvalidOperationException($"{name} は在庫切れ");
        }
        _stock[name] = (entry.Card, entry.Count - 1);
        _sales += entry.Card.Price;
        Console.WriteLine($"販売：{name}（{entry.Card.Price} G）");
    }

    public void Report()
    {
        Console.WriteLine($"売上合計：{_sales} G");
        foreach (var (card, count) in _stock.Values.OrderByDescending(e => e.Card.Grade))
        {
            Console.WriteLine($"{card.Grade,-6} {card.Name} 残り {count}");
        }
    }
}
`,
    blank: '_stock[name] = (entry.Card, entry.Count - 1);',
    placeholder: '// 在庫数を 1 減らしたタプルを _stock[name] に入れ直す行',
    token: /_stock\[\s*name\s*\]\s*=\s*\(\s*entry\.Card\s*,\s*entry\.Count\s*-\s*1\s*\)\s*;/,
    hint: '<code>_stock[name] = (entry.Card, entry.Count - 1);</code> と書く。',
    output: `販売：炎の竜（800 G）
販売：氷の巨人（1500 G）
エラー：氷の巨人 は在庫切れ
売上合計：2300 G
Epic   氷の巨人 残り 0
Rare   炎の竜 残り 1
Common 森の妖精 残り 5`
  }
];

SERIES.php = [
  {
    id: 'php-01',
    phase: 'はじめての PHP',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は PHP をパソコンに入れ、VS Code とターミナルで PHP のプログラムを実行する。</p>
<p>macOS では Homebrew の <code>brew install php</code> で PHP を入れる。Windows では、公式サイト（php.net）の配布物、Web サーバーとデータベースを同梱した XAMPP、または PowerShell の <code>winget install PHP.PHP.8.4</code> のどれかで入れる。どちらの環境でも、ターミナルで <code>php -v</code> を実行し、バージョン番号が表示されることを確かめる。XAMPP の場合は、XAMPP のフォルダ内の php フォルダを環境変数 PATH に加えると、ターミナルから php コマンドを使える。</p>
<p>VS Code では、拡張機能「PHP Intelephense」を入れると、入力の補完と誤りの検出が働く。学習者は index.php を作り、ターミナルで <code>php index.php</code> を実行する。<code>php -S localhost:8000</code> は PHP に内蔵された開発用 Web サーバーを起動するコマンドであり、ブラウザで http://localhost:8000 を開くと index.php の結果が表示される。</p>`,
    code: `<?php
// ターミナルで実行するコマンド
//   php -v
//   php index.php
//   php -S localhost:8000   （ブラウザで http://localhost:8000 を開く）

echo "Hello, World!\\n";
`,
    output: `$ php -v
PHP 8.4.14 (cli) (built: Oct 21 2026 10:00:00) (NTS)
$ php index.php
Hello, World!
$ php -S localhost:8000
[Thu Nov  5 19:00:00 2026] PHP 8.4.14 Development Server (http://localhost:8000) started`
  },
  {
    id: 'php-02',
    phase: 'はじめての PHP',
    title: 'PHP と実行の仕組み',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は echo と HTML の埋め込みを使い、PHP がサーバーで文字列を組み立てる様子を確かめる。</p>
<p>PHP は、主に Web サーバーの上で動くプログラミング言語である。ブラウザが index.php を要求すると、サーバーの PHP がコードを実行し、できあがった HTML をブラウザに送る。PHP のコードは <code>&lt;?php</code> から始め、文の終わりにセミコロンを置く。echo は文字列を出力する命令であり、<code>.</code> は文字列をつなぐ演算子である。<code>&lt;?= $title ?&gt;</code> は、HTML の中に変数の値を出力する短い書き方である。</p>`,
    code: `<?php
$title = "ダンジョン入口";
echo "冒険の書を開いた\\n";
echo "レベル：" . 1 . "\\n";
?>
<h1><?= $title ?></h1>
<p>PHP がこの HTML を組み立てた</p>
`,
    blank: '<h1><?= $title ?></h1>',
    placeholder: '<!-- h1 の中に変数 $title の値を出力する行 -->',
    token: /<h1>\s*<\?=\s*\$title\s*;?\s*\?>\s*<\/h1>/,
    hint: '<code>&lt;h1&gt;&lt;?= $title ?&gt;&lt;/h1&gt;</code> と書く。',
    output: `冒険の書を開いた
レベル：1
<h1>ダンジョン入口</h1>
<p>PHP がこの HTML を組み立てた</p>`
  },
  {
    id: 'php-03',
    phase: 'はじめての PHP',
    title: '変数・型・計算',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は $ つきの変数に値を入れ、HP の計算と型の確認を行う。</p>
<p>PHP の変数は <code>$hp</code> のように $ で始まる。PHP は代入された値から型を自動で決める。主な型は int（整数）、float（小数）、string（文字列）、bool（true と false）である。<code>%</code> は割り算の余り、intdiv は整数の割り算を返す。var_dump は値と型を両方表示する関数であり、動作の確認に使う。ダブルクォートの文字列の中では、<code>"{$name}"</code> の形で変数の値を埋め込める。</p>`,
    code: `<?php
$hp = 120;
$damage = 35.5;
$name = "スライム";
$isBoss = false;

$hp = $hp - $damage;
echo "{$name} の HP：{$hp}\\n";
echo intdiv(17, 5) . " 余り " . 17 % 5 . "\\n";
var_dump($hp, $isBoss);
`,
    blank: '$hp = $hp - $damage;',
    placeholder: '// $hp から $damage を引いた値を $hp に代入し直す行',
    token: /\$hp\s*=\s*\$hp\s*-\s*\$damage\s*;|\$hp\s*-=\s*\$damage\s*;/,
    hint: '<code>$hp = $hp - $damage;</code> と書く。<code>$hp -= $damage;</code> も同じ意味になる。',
    output: `スライム の HP：84.5
3 余り 2
float(84.5)
bool(false)`
  },
  {
    id: 'php-04',
    phase: 'はじめての PHP',
    title: '文字列と日本語（mb_ 関数）',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は mb_ で始まる関数を使い、日本語の文字列を文字単位で正しく扱う。</p>
<p>strlen は文字列のバイト数（データの大きさ）を返す。日本語の文字は UTF-8 で1文字あたり 3 バイトを使うため、strlen の結果は文字数と一致しにくい。mb_strlen は文字数を、mb_substr は文字単位の切り出しを返す。mb は multibyte（複数バイトの文字）を表し、日本語を扱うときは mb_ の関数を選ぶ。sprintf は書式に従って文字列を組み立て、<code>%03d</code> は 3 けたの 0 埋めを表す。</p>`,
    code: `<?php
$title = "竜の洞窟";
echo strlen($title) . "\\n";
echo mb_strlen($title) . "\\n";
echo mb_substr($title, 0, 2) . "\\n";

$player = "Aoi";
echo "{$player} が{$title}に入った\\n";
echo sprintf("部屋番号 %03d", 7) . "\\n";
`,
    blank: 'echo mb_strlen($title) . "\\n";',
    placeholder: '// $title の文字数を表示する行',
    token: /echo\s+mb_strlen\(\s*\$title\s*\)/,
    hint: '<code>echo mb_strlen($title) . "\\n";</code> と書く。',
    output: `12
4
竜の
Aoi が竜の洞窟に入った
部屋番号 007`
  },
  {
    id: 'php-05',
    phase: '条件とデータ',
    title: '条件と入力の境界',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は if と match を使い、フォームから届いたスコアを検査してランクを決める。</p>
<p>フォームの入力は文字列として届く。そのため、プログラムは is_numeric で数値の形かを調べ、範囲の外の値を先に取り除く。80 のような区切りの値を境界値といい、<code>&gt;=</code> と <code>&gt;</code> の選び方で結果が変わる。match 式は、上から順に条件を調べ、最初に一致した値を返す。<code>==</code> は型を変換して比べ、<code>===</code> は型も含めて比べる。</p>`,
    code: `<?php
$input = "80";   // フォームから届いた文字列とする

if (!is_numeric($input)) {
    echo "数値で入力してください\\n";
} elseif ($input < 0 || $input > 100) {
    echo "0〜100 の範囲で入力してください\\n";
} else {
    $score = (int)$input;
    $rank = match (true) {
        $score >= 80 => "A",
        $score >= 50 => "B",
        default => "C",
    };
    echo "スコア {$score} はランク {$rank}\\n";
}

var_dump("80" == 80, "80" === 80);
`,
    blank: '$score >= 80 => "A",',
    placeholder: '// 80 以上のときに A を返す行',
    token: /\$score\s*>=\s*80\s*=>\s*"A"\s*,/,
    hint: '<code>$score &gt;= 80 =&gt; "A",</code> と書く。80 ちょうどもランク A に入る。',
    output: `スコア 80 はランク A
bool(true)
bool(false)`
  },
  {
    id: 'php-06',
    phase: '条件とデータ',
    title: '配列とデータの形',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は添字配列と連想配列を使い、パーティーとモンスターのデータを表す。</p>
<p>配列は複数の値をまとめる入れ物である。添字配列は 0 から始まる番号で要素を指し、<code>$party[] = 値</code> は末尾に要素を加える。連想配列は <code>"name" =&gt; "ゴーレム"</code> のように文字列のキーで値を指す。配列の中に配列を入れると、表や階層のような形のデータを表せる。print_r は配列の中身を読みやすく表示する。</p>`,
    code: `<?php
$party = ["勇者", "魔法使い", "僧侶"];
$party[] = "盗賊";
echo count($party) . "\\n";
echo $party[1] . "\\n";

$monster = [
    "name" => "ゴーレム",
    "hp" => 300,
    "drops" => ["石板", "魔石"],
];
echo $monster["name"] . " HP " . $monster["hp"] . "\\n";
echo $monster["drops"][1] . "\\n";
print_r(array_keys($monster));
`,
    blank: '$party[] = "盗賊";',
    placeholder: '// $party の末尾に「盗賊」を加える行',
    token: /\$party\s*\[\s*\]\s*=\s*"盗賊"\s*;/,
    hint: '<code>$party[] = "盗賊";</code> と書く。',
    output: `4
魔法使い
ゴーレム HP 300
魔石
Array
(
    [0] => name
    [1] => hp
    [2] => drops
)`
  },
  {
    id: 'php-07',
    phase: '条件とデータ',
    title: '繰り返しと集計',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は foreach と for を使い、ゲームのスコアの合計・平均・トップを求める。</p>
<p>foreach は、配列の要素を先頭から順に取り出して繰り返す。<code>foreach ($scores as $player =&gt; $score)</code> と書くと、キーと値を同時に受け取れる。合計は、0 から始めた変数に値を足し続けて求める。最大の値は、それまでの最大と比べて大きいときに入れ替えて求める。for は、カウントダウンのように回数の決まった繰り返しに使う。</p>`,
    code: `<?php
$scores = ["Aoi" => 320, "Ren" => 450, "Mio" => 280, "Sora" => 390];
$total = 0;
$best = "";

foreach ($scores as $player => $score) {
    $total += $score;
    if ($best === "" || $score > $scores[$best]) {
        $best = $player;
    }
}
echo "合計 {$total} / 平均 " . $total / count($scores) . "\\n";
echo "トップ：{$best}\\n";

for ($i = 3; $i >= 1; $i--) {
    echo "カウントダウン {$i}\\n";
}
`,
    blank: 'foreach ($scores as $player => $score) {',
    placeholder: '// $scores のキーを $player、値を $score に入れて繰り返す foreach の行',
    token: /foreach\s*\(\s*\$scores\s+as\s+\$player\s*=>\s*\$score\s*\)\s*\{/,
    hint: '<code>foreach ($scores as $player =&gt; $score) {</code> と書く。',
    output: `合計 1440 / 平均 360
トップ：Ren
カウントダウン 3
カウントダウン 2
カウントダウン 1`
  },
  {
    id: 'php-08',
    phase: '関数',
    title: '関数',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は関数を定義し、ダメージの計算と表示を部品にまとめる。</p>
<p>関数は、処理に名前をつけて何度でも呼び出せる形にしたものであり、<code>function 名前(引数) { }</code> と書く。引数は呼び出し側から受け取る値であり、<code>$defense = 0</code> のように既定値を書くと省略できる。return は結果を呼び出し側に返す。max は引数の中で最大の値を返すため、ダメージが負の値になる事態を防ぐ。</p>`,
    code: `<?php
function damage($power, $defense = 0)
{
    return max(0, $power - $defense);
}

function showHit($name, $amount)
{
    echo "{$name} に {$amount} のダメージ\\n";
}

showHit("スライム", damage(30, 5));
showHit("ゴーレム", damage(30, 40));
showHit("コウモリ", damage(12));
`,
    blank: 'return max(0, $power - $defense);',
    placeholder: '// 0 と（$power - $defense）の大きいほうを返す行',
    token: /return\s+max\(\s*0\s*,\s*\$power\s*-\s*\$defense\s*\)\s*;/,
    hint: '<code>return max(0, $power - $defense);</code> と書く。',
    output: `スライム に 25 のダメージ
ゴーレム に 0 のダメージ
コウモリ に 12 のダメージ`
  },
  {
    id: 'php-09',
    phase: '関数',
    title: '型宣言と関数の契約',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は引数と戻り値に型を宣言し、関数が受け取る値と返す値の約束を明確にする。</p>
<p>型宣言は、<code>int $hp</code> や <code>): int</code> のように、引数と戻り値の型を書く仕組みである。この約束を関数の契約という。ファイルの先頭の <code>declare(strict_types=1);</code> は、型の自動変換を止め、型の異なる値を TypeError として知らせる設定である。<code>?string</code> は「string または null」を表す。</p>`,
    code: `<?php
declare(strict_types=1);

function heal(int $hp, int $amount, int $maxHp = 100): int
{
    return min($maxHp, $hp + $amount);
}

function findItem(array $bag, string $name): ?string
{
    return in_array($name, $bag, true) ? $name : null;
}

echo heal(80, 30) . "\\n";
var_dump(findItem(["薬草", "鍵"], "地図"));

try {
    echo heal("80", 30);
} catch (TypeError $e) {
    echo "TypeError：引数の型が int と異なる\\n";
}
`,
    blank: 'function heal(int $hp, int $amount, int $maxHp = 100): int',
    placeholder: '// int の引数を3つ受け取り、int を返す heal 関数の宣言',
    token: /function\s+heal\(\s*int\s+\$hp\s*,\s*int\s+\$amount\s*,\s*int\s+\$maxHp\s*=\s*100\s*\)\s*:\s*int/,
    hint: '<code>function heal(int $hp, int $amount, int $maxHp = 100): int</code> と書く。',
    output: `100
NULL
TypeError：引数の型が int と異なる`
  },
  {
    id: 'php-10',
    phase: '関数',
    title: '総合：探検の調査報告',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は配列・繰り返し・関数・match を組み合わせ、ダンジョンの部屋ごとの調査報告を出力する。</p>
<p>各部屋は、名前・モンスターの数・宝の額を持つ連想配列で表す。dangerLevel 関数はモンスターの数から危険度を決め、foreach は部屋ごとに1行の報告を作りながら宝の合計を求める。printf は sprintf と同じ書式で、組み立てた文字列をそのまま出力する。<code>%s</code> は文字列、<code>%d</code> は整数の差し込み位置を表す。</p>`,
    code: `<?php
declare(strict_types=1);

$rooms = [
    ["name" => "苔の回廊", "monsters" => 3, "treasure" => 120],
    ["name" => "水晶の間", "monsters" => 0, "treasure" => 450],
    ["name" => "骨の広場", "monsters" => 5, "treasure" => 80],
];

function dangerLevel(int $monsters): string
{
    return match (true) {
        $monsters >= 5 => "危険",
        $monsters >= 1 => "注意",
        default => "安全",
    };
}

$totalGold = 0;
echo "=== 調査報告 ===\\n";
foreach ($rooms as $i => $room) {
    $totalGold += $room["treasure"];
    printf("%d. %s：%s（宝 %d G）\\n", $i + 1, $room["name"], dangerLevel($room["monsters"]), $room["treasure"]);
}
echo "宝の合計：{$totalGold} G\\n";
`,
    blank: '$monsters >= 5 => "危険",',
    placeholder: '// モンスターが 5 体以上のときに「危険」を返す行',
    token: /\$monsters\s*>=\s*5\s*=>\s*"危険"\s*,/,
    hint: '<code>$monsters &gt;= 5 =&gt; "危険",</code> と書く。大きい値の条件を先に置く。',
    output: `=== 調査報告 ===
1. 苔の回廊：注意（宝 120 G）
2. 水晶の間：安全（宝 450 G）
3. 骨の広場：危険（宝 80 G）
宝の合計：650 G`
  },
  {
    id: 'php-11',
    phase: '実用の道具',
    title: 'コールバックと配列操作',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は array_filter・usort・array_map にコールバックを渡し、強いカードを並べ替えて表示する。</p>
<p>コールバックは、別の関数に引数として渡す関数である。<code>fn($c) =&gt; 式</code> はアロー関数であり、1つの式を返す短い関数を作る。array_filter は条件に合う要素を残し、usort は比べ方の関数に従って並べ替え、array_map は各要素を別の値に変える。<code>&lt;=&gt;</code> は宇宙船演算子と呼ばれ、左が小さいと -1、等しいと 0、大きいと 1 を返す。</p>`,
    code: `<?php
$cards = [
    ["name" => "炎の竜", "power" => 8],
    ["name" => "森の妖精", "power" => 3],
    ["name" => "氷の巨人", "power" => 9],
    ["name" => "砂の兵士", "power" => 5],
];

$strong = array_filter($cards, fn($c) => $c["power"] >= 5);
usort($strong, fn($a, $b) => $b["power"] <=> $a["power"]);
$names = array_map(fn($c) => $c["name"], $strong);
echo implode(" > ", $names) . "\\n";

$total = array_sum(array_column($cards, "power"));
echo "合計パワー {$total}\\n";
`,
    blank: 'usort($strong, fn($a, $b) => $b["power"] <=> $a["power"]);',
    placeholder: '// power の大きい順に $strong を並べ替える行',
    token: /usort\(\s*\$strong\s*,\s*fn\s*\(\s*\$a\s*,\s*\$b\s*\)\s*=>\s*\$b\["power"\]\s*<=>\s*\$a\["power"\]\s*\)/,
    hint: '<code>usort($strong, fn($a, $b) =&gt; $b["power"] &lt;=&gt; $a["power"]);</code> と書く。$b を左に置くと大きい順になる。',
    output: `氷の巨人 > 炎の竜 > 砂の兵士
合計パワー 25`
  },
  {
    id: 'php-12',
    phase: '実用の道具',
    title: '小さな CLI ツール',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者はコマンドライン引数を受け取り、秒数を時:分:秒に変換するタイマー用の CLI ツールを作る。</p>
<p>CLI ツールは、ターミナルから文字で操作するプログラムである。<code>$argv</code> は、コマンドに続けて書いた引数を入れた配列であり、<code>$argv[0]</code> はファイル名である。array_slice で 1 番目以降を取り出す。使い方の誤りは STDERR（エラー用の出力先）に書き、exit(1) で失敗を知らせる。終了コード 0 は成功を表す。</p>`,
    code: `<?php
// 使い方：php index.php 125 30 3600
$args = array_slice($argv, 1);

if (count($args) === 0) {
    fwrite(STDERR, "使い方：php index.php 秒数...\\n");
    exit(1);
}

foreach ($args as $arg) {
    $sec = (int)$arg;
    printf("%5d 秒 = %02d:%02d:%02d\\n", $sec, intdiv($sec, 3600), intdiv($sec % 3600, 60), $sec % 60);
}
exit(0);
`,
    blank: '$args = array_slice($argv, 1);',
    placeholder: '// $argv の 1 番目以降を取り出し、$args に入れる行',
    token: /\$args\s*=\s*array_slice\(\s*\$argv\s*,\s*1\s*\)\s*;/,
    hint: '<code>$args = array_slice($argv, 1);</code> と書く。',
    output: `$ php index.php 125 30 3600
  125 秒 = 00:02:05
   30 秒 = 00:00:30
 3600 秒 = 01:00:00`
  },
  {
    id: 'php-13',
    phase: '実用の道具',
    title: 'エラーと例外',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は throw と try・catch・finally を使い、範囲外のステージ番号を例外として扱う。</p>
<p>例外は、処理の継続が困難な異常を呼び出し側に知らせる仕組みである。throw は例外を発生させ、try の中で起きた例外は種類の一致する catch が受け止める。InvalidArgumentException は引数の誤りを表す標準の例外である。getMessage は例外の説明文を返す。finally の中は、どの場合でも最後に実行される。</p>`,
    code: `<?php
declare(strict_types=1);

function loadLevel(int $level): string
{
    if ($level < 1 || $level > 3) {
        throw new InvalidArgumentException("レベル {$level} は範囲外");
    }
    return "ステージ {$level} を読み込んだ";
}

foreach ([2, 5] as $level) {
    try {
        echo loadLevel($level) . "\\n";
    } catch (InvalidArgumentException $e) {
        echo "エラー：" . $e->getMessage() . "\\n";
    } finally {
        echo "-- 処理 {$level} の終了 --\\n";
    }
}
`,
    blank: 'throw new InvalidArgumentException("レベル {$level} は範囲外");',
    placeholder: '// 「レベル N は範囲外」という InvalidArgumentException を発生させる行',
    token: /throw\s+new\s+InvalidArgumentException\(\s*"レベル \{\$level\} は範囲外"\s*\)\s*;/,
    hint: '<code>throw new InvalidArgumentException("レベル {$level} は範囲外");</code> と書く。',
    output: `ステージ 2 を読み込んだ
-- 処理 2 の終了 --
エラー：レベル 5 は範囲外
-- 処理 5 の終了 --`
  },
  {
    id: 'php-14',
    phase: '実用の道具',
    title: 'ファイル・CSV・JSON',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者はスコアの CSV ファイルを読み込み、JSON の形に変換して出力する。</p>
<p>CSV は、値をコンマで区切って並べる表の形式である。file_put_contents はファイルに文字列を書き込み、fopen と fgetcsv は CSV を1行ごとに配列として読み込む。array_combine は見出しの配列と値の配列から連想配列を作る。JSON は、データをやりとりするための文字の形式であり、json_encode は配列を JSON に、json_decode は JSON を配列に変える。JSON_UNESCAPED_UNICODE を指定すると、日本語がそのまま出力される。</p>`,
    code: `<?php
$path = sys_get_temp_dir() . "/scores.csv";
file_put_contents($path, "player,score\\nAoi,320\\nRen,450\\n");

$rows = [];
$fp = fopen($path, "r");
$header = fgetcsv($fp, escape: "");
while (($line = fgetcsv($fp, escape: "")) !== false) {
    $rows[] = array_combine($header, $line);
}
fclose($fp);

echo json_encode($rows, JSON_UNESCAPED_UNICODE) . "\\n";

$data = json_decode('{"stage":3,"boss":"竜"}', true);
echo "ステージ {$data["stage"]} のボス：{$data["boss"]}\\n";
`,
    blank: '$rows[] = array_combine($header, $line);',
    placeholder: '// 見出しと値から連想配列を作り、$rows の末尾に加える行',
    token: /\$rows\s*\[\s*\]\s*=\s*array_combine\(\s*\$header\s*,\s*\$line\s*\)\s*;/,
    hint: '<code>$rows[] = array_combine($header, $line);</code> と書く。',
    output: `[{"player":"Aoi","score":"320"},{"player":"Ren","score":"450"}]
ステージ 3 のボス：竜`
  },
  {
    id: 'php-15',
    phase: '実用の道具',
    title: '日時と再現できる処理',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は「現在時刻」と乱数の種を外から渡し、何度実行しても同じ結果になるイベント案内を作る。</p>
<p>DateTimeImmutable は日時を表すクラスであり、modify などの操作は元の値を保ったまま新しい日時を返す。関数の中で現在時刻を直接読むと、実行のたびに結果が変わり、確認が難しくなる。そこで現在時刻を引数で受け取ると、固定の日時で同じ結果を再現できる。乱数も、<code>Random\\Engine\\Mt19937</code> に種（シード）を与えると、毎回同じ並びになる。</p>`,
    code: `<?php
declare(strict_types=1);

function nextEvent(DateTimeImmutable $now): string
{
    $event = $now->modify("next saturday")->setTime(20, 0);
    $diff = $now->diff($event);
    return $event->format("Y-m-d (D) H:i") . " まで {$diff->days} 日と {$diff->h} 時間";
}

$tz = new DateTimeZone("Asia/Tokyo");
$fixedNow = new DateTimeImmutable("2026-11-05 18:00", $tz);
echo nextEvent($fixedNow) . "\\n";

$rng = new Random\\Randomizer(new Random\\Engine\\Mt19937(2026));
echo "ダイス：" . $rng->getInt(1, 6) . ", " . $rng->getInt(1, 6) . "\\n";
`,
    blank: '$fixedNow = new DateTimeImmutable("2026-11-05 18:00", $tz);',
    placeholder: '// 2026-11-05 18:00（東京）の固定の日時を $fixedNow に入れる行',
    token: /\$fixedNow\s*=\s*new\s+DateTimeImmutable\(\s*"2026-11-05 18:00"\s*,\s*\$tz\s*\)\s*;/,
    hint: '<code>$fixedNow = new DateTimeImmutable("2026-11-05 18:00", $tz);</code> と書く。',
    output: `2026-11-07 (Sat) 20:00 まで 2 日と 2 時間
ダイス：4, 1`
  },
  {
    id: 'php-16',
    phase: '実用の道具',
    title: '総合：字幕データの修復ツール',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は順番の乱れた字幕データを読み込み、並べ替え・表示時刻の補正・全角文字の整理を行うツールを作る。</p>
<p>字幕データは、番号・表示時刻・せりふの3行を1組とし、空行で区切る。<code>&lt;&lt;&lt;SRT</code> はヒアドキュメントであり、複数行の文字列をそのまま書く。preg_split は正規表現で文字列を分割し、<code>\\R</code> は改行を表す。toMs と fromMs は時刻とミリ秒を相互に変換し、全体を 500 ミリ秒後ろへ移す。mb_convert_kana の "as" は全角の英数字と空白を半角に変える。</p>`,
    code: `<?php
declare(strict_types=1);

$raw = <<<SRT
3
00:00:07,000 --> 00:00:09,500
　ボスが現れた

1
00:00:01,000 --> 00:00:03,000
冒険の始まり

2
00:00:04,200 --> 00:00:06,000
ＨＰ　を回復
SRT;

function toMs(string $t): int
{
    [$h, $m, $rest] = explode(":", $t);
    [$s, $ms] = explode(",", $rest);
    return ((int)$h * 3600 + (int)$m * 60 + (int)$s) * 1000 + (int)$ms;
}

function fromMs(int $ms): string
{
    return sprintf("%02d:%02d:%02d,%03d", intdiv($ms, 3600000), intdiv($ms, 60000) % 60, intdiv($ms, 1000) % 60, $ms % 1000);
}

$cues = [];
foreach (preg_split('/\\R\\R+/', trim($raw)) as $block) {
    $lines = preg_split('/\\R/', $block);
    [$start, $end] = explode(" --> ", $lines[1]);
    $cues[] = [
        "start" => toMs($start) + 500,
        "end" => toMs($end) + 500,
        "text" => trim(mb_convert_kana($lines[2], "as")),
    ];
}

usort($cues, fn($a, $b) => $a["start"] <=> $b["start"]);

foreach ($cues as $i => $cue) {
    echo ($i + 1) . "\\n";
    echo fromMs($cue["start"]) . " --> " . fromMs($cue["end"]) . "\\n";
    echo $cue["text"] . "\\n\\n";
}
`,
    blank: 'usort($cues, fn($a, $b) => $a["start"] <=> $b["start"]);',
    placeholder: '// 開始時刻の早い順に $cues を並べ替える行',
    token: /usort\(\s*\$cues\s*,\s*fn\s*\(\s*\$a\s*,\s*\$b\s*\)\s*=>\s*\$a\["start"\]\s*<=>\s*\$b\["start"\]\s*\)/,
    hint: '<code>usort($cues, fn($a, $b) =&gt; $a["start"] &lt;=&gt; $b["start"]);</code> と書く。',
    output: `1
00:00:01,500 --> 00:00:03,500
冒険の始まり

2
00:00:04,700 --> 00:00:06,500
HP を回復

3
00:00:07,500 --> 00:00:10,000
ボスが現れた`
  },
  {
    id: 'php-17',
    phase: 'オブジェクト指向',
    title: 'クラスと状態の管理',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は Timer クラスを作り、残り時間と動作中かどうかの状態をメソッドで管理する。</p>
<p>クラスは、データ（プロパティ）と処理（メソッド）をまとめた設計図であり、<code>new</code> でインスタンスを作る。private のプロパティはクラスの内部に限って読み書きでき、外部からは start・tick・status のメソッドを通して操作する。この形により、タイマーの状態（残り時間と動作の有無）は決められた手順でのみ変化する。コンストラクタの引数に private をつけると、プロパティの宣言と代入を一度に書ける。この書き方をコンストラクタのプロモーションという。</p>`,
    code: `<?php
declare(strict_types=1);

class Timer
{
    private int $remaining;
    private bool $running = false;

    public function __construct(private string $label, int $seconds)
    {
        $this->remaining = $seconds;
    }

    public function start(): void
    {
        $this->running = true;
    }

    public function tick(int $seconds = 1): void
    {
        if (!$this->running) {
            return;
        }
        $this->remaining = max(0, $this->remaining - $seconds);
        if ($this->remaining === 0) {
            $this->running = false;
        }
    }

    public function status(): string
    {
        $state = $this->running ? "動作中" : "停止中";
        return "{$this->label}：残り {$this->remaining} 秒（{$state}）";
    }
}

$timer = new Timer("ボス戦の制限時間", 90);
$timer->tick(10);
echo $timer->status() . "\\n";
$timer->start();
$timer->tick(30);
echo $timer->status() . "\\n";
$timer->tick(70);
echo $timer->status() . "\\n";
`,
    blank: '$this->remaining = max(0, $this->remaining - $seconds);',
    placeholder: '// 残り時間から $seconds を引き、0 を下限として保存する行',
    token: /\$this->remaining\s*=\s*max\(\s*0\s*,\s*\$this->remaining\s*-\s*\$seconds\s*\)\s*;/,
    hint: '<code>$this->remaining = max(0, $this->remaining - $seconds);</code> と書く。',
    output: `ボス戦の制限時間：残り 90 秒（停止中）
ボス戦の制限時間：残り 60 秒（動作中）
ボス戦の制限時間：残り 0 秒（停止中）`
  },
  {
    id: 'php-18',
    phase: 'オブジェクト指向',
    title: '値とオブジェクトの違い',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は配列とオブジェクトの代入を比べ、書き換えを禁じた値オブジェクトで座標を表す。</p>
<p>PHP の配列は、代入のときに中身が複製される。オブジェクトは、代入のときに同じインスタンスへの手がかり（ハンドル）が複製されるため、$h2 の変更は $h1 にも現れる。値オブジェクトは、中身の値そのものに意味を持つオブジェクトである。readonly のプロパティは一度のみ代入でき、move は自分を変える代わりに新しい Position を返す。<code>===</code> は同じインスタンスかを、<code>==</code> はプロパティの値が等しいかを比べる。</p>`,
    code: `<?php
declare(strict_types=1);

$a = ["hp" => 100];
$b = $a;
$b["hp"] = 50;
echo "配列：a={$a["hp"]} b={$b["hp"]}\\n";

class Hero
{
    public function __construct(public int $hp) {}
}
$h1 = new Hero(100);
$h2 = $h1;
$h2->hp = 50;
echo "オブジェクト：h1={$h1->hp} h2={$h2->hp}\\n";

final class Position
{
    public function __construct(public readonly int $x, public readonly int $y) {}

    public function move(int $dx, int $dy): self
    {
        return new self($this->x + $dx, $this->y + $dy);
    }

    public function equals(Position $other): bool
    {
        return $this->x === $other->x && $this->y === $other->y;
    }
}

$p = new Position(1, 1);
$q = $p->move(2, 0);
echo "p=({$p->x},{$p->y}) q=({$q->x},{$q->y})\\n";
var_dump($q->equals(new Position(3, 1)), $q === new Position(3, 1), $q == new Position(3, 1));
`,
    blank: 'return new self($this->x + $dx, $this->y + $dy);',
    placeholder: '// 移動後の座標を持つ新しい Position を返す行',
    token: /return\s+new\s+(self|Position)\(\s*\$this->x\s*\+\s*\$dx\s*,\s*\$this->y\s*\+\s*\$dy\s*\)\s*;/,
    hint: '<code>return new self($this->x + $dx, $this->y + $dy);</code> と書く。',
    output: `配列：a=100 b=50
オブジェクト：h1=50 h2=50
p=(1,1) q=(3,1)
bool(true)
bool(false)
bool(true)`
  },
  {
    id: 'php-19',
    phase: 'オブジェクト指向',
    title: 'インターフェースと依存の分離',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者はサイコロをインターフェースで表し、すごろくのクラスに外から渡して結果を再現できる形にする。</p>
<p>インターフェースは、クラスが持つべきメソッドの名前と形を定めた約束である。BoardGame は具体的な RandomDice を内部で作る代わりに、Dice 型の値をコンストラクタで受け取る。この設計を依存性の注入（DI）といい、依存する部品を外から差し替えられる。動作の確認では、決まった目を返す FixedDice を渡すと、毎回同じ結果を得られる。</p>`,
    code: `<?php
declare(strict_types=1);

interface Dice
{
    public function roll(): int;
}

final class RandomDice implements Dice
{
    public function roll(): int
    {
        return random_int(1, 6);
    }
}

final class FixedDice implements Dice
{
    private int $i = 0;

    public function __construct(private array $values) {}

    public function roll(): int
    {
        return $this->values[$this->i++ % count($this->values)];
    }
}

final class BoardGame
{
    public function __construct(private Dice $dice) {}

    public function move(int $position, int $turns): int
    {
        for ($t = 0; $t < $turns; $t++) {
            $position += $this->dice->roll();
        }
        return $position;
    }
}

$game = new BoardGame(new FixedDice([3, 5, 2]));
echo "3 ターン後のマス：" . $game->move(0, 3) . "\\n";

$live = new BoardGame(new RandomDice());
echo "本番用のサイコロでも動作：" . ($live->move(0, 1) >= 1 ? "OK" : "NG") . "\\n";
`,
    blank: 'public function __construct(private Dice $dice) {}',
    placeholder: '// Dice 型の値を受け取り、private プロパティ $dice に保存するコンストラクタ',
    token: /public\s+function\s+__construct\(\s*private\s+Dice\s+\$dice\s*\)\s*\{\s*\}/,
    hint: '<code>public function __construct(private Dice $dice) {}</code> と書く。',
    output: `3 ターン後のマス：10
本番用のサイコロでも動作：OK`
  },
  {
    id: 'php-20',
    phase: 'オブジェクト指向',
    title: '継承・抽象クラス・トレイト',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は抽象クラス Unit を継承して騎士と魔導士を作り、記録の機能をトレイトで加える。</p>
<p>継承は、既存のクラスの機能を引き継いで新しいクラスを作る仕組みであり、<code>class Mage extends Unit</code> と書く。抽象クラスは、一部のメソッド（abstract メソッド）の中身を子クラスに任せるクラスである。トレイトは、複数のクラスに同じメソッドを組み込むための部品であり、クラスの中で <code>use HasLog;</code> と書いて取り込む。</p>`,
    code: `<?php
declare(strict_types=1);

trait HasLog
{
    private array $log = [];

    public function log(string $msg): void
    {
        $this->log[] = $msg;
    }

    public function history(): string
    {
        return implode(" / ", $this->log);
    }
}

abstract class Unit
{
    use HasLog;

    public function __construct(protected string $name, protected int $hp) {}

    abstract protected function skill(): string;

    public function act(): void
    {
        $this->log("{$this->name} は {$this->skill()}");
    }
}

class Knight extends Unit
{
    protected function skill(): string
    {
        return "盾で仲間を守る";
    }
}

class Mage extends Unit
{
    protected function skill(): string
    {
        return "炎の魔法を放つ";
    }
}

foreach ([new Knight("騎士", 120), new Mage("魔導士", 60)] as $unit) {
    $unit->act();
    echo $unit->history() . "\\n";
}
`,
    blank: 'class Mage extends Unit',
    placeholder: '// Unit を継承する Mage クラスの宣言',
    token: /class\s+Mage\s+extends\s+Unit/,
    hint: '<code>class Mage extends Unit</code> と書く。',
    output: `騎士 は 盾で仲間を守る
魔導士 は 炎の魔法を放つ`
  },
  {
    id: 'php-21',
    phase: 'オブジェクト指向',
    title: '列挙型とモダンな PHP',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は列挙型で魔法の属性を表し、名前つき引数や readonly クラスなど PHP 8 の書き方を使う。</p>
<p>列挙型（enum）は、決まった選択肢を型として定義する仕組みである。<code>enum Element: string</code> は各選択肢に文字列の値を持たせる。from は値から選択肢を取り出し、tryFrom は該当する選択肢が存在する場合に限り選択肢を返し、それ以外の場合は null を返す。cases は全選択肢の配列を返す。readonly class はすべてのプロパティを一度のみ代入可能にし、<code>name: "フレイム"</code> のような名前つき引数は、引数の意味を呼び出し側で明確にする。</p>`,
    code: `<?php
declare(strict_types=1);

enum Element: string
{
    case Fire = "fire";
    case Water = "water";
    case Wind = "wind";

    public function strongAgainst(): self
    {
        return match ($this) {
            self::Fire => self::Wind,
            self::Water => self::Fire,
            self::Wind => self::Water,
        };
    }
}

final readonly class Spell
{
    public function __construct(
        public string $name,
        public Element $element,
        public int $power = 10,
    ) {}
}

$spell = new Spell(name: "フレイム", element: Element::from("fire"));
echo "{$spell->name}（{$spell->element->name}）は {$spell->element->strongAgainst()->name} に強い\\n";
var_dump(Element::tryFrom("ice"));

$values = array_map(fn(Element $e) => $e->value, Element::cases());
echo implode(", ", $values) . "\\n";
`,
    blank: 'self::Water => self::Fire,',
    placeholder: '// 水の属性は火に強い、という対応を書く行',
    token: /self::Water\s*=>\s*self::Fire\s*,/,
    hint: '<code>self::Water =&gt; self::Fire,</code> と書く。',
    output: `フレイム（Fire）は Wind に強い
NULL
fire, water, wind`
  },
  {
    id: 'php-22',
    phase: 'プロジェクトとテスト',
    title: '名前空間と Composer',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は名前空間でクラスを整理し、Composer の自動読み込みの仕組みを理解する。</p>
<p>名前空間（namespace）は、クラス名の住所のようなものであり、別の作者の同じ名前のクラスとの衝突を防ぐ。<code>use Game\\Score\\Board;</code> と書くと、短い名前 Board で使える。Composer は PHP のパッケージ管理ツールであり、<code>composer require</code> で外部のライブラリを入れる。composer.json に <code>"autoload": {"psr-4": {"Game\\\\": "src/"}}</code> と書いて <code>composer dump-autoload</code> を実行すると、vendor/autoload.php を読み込む1行で src フォルダのクラスが自動で読み込まれる。この教材では1つのファイルに2つの名前空間を並べて確かめる。</p>`,
    code: `<?php
declare(strict_types=1);

// 実際のプロジェクトでは src/Score/Board.php に置き、
// require __DIR__ . "/vendor/autoload.php"; で読み込む
namespace Game\\Score;

final class Board
{
    private array $scores = [];

    public function add(string $player, int $score): void
    {
        $this->scores[$player] = $score;
    }

    public function top(): string
    {
        arsort($this->scores);
        return (string)array_key_first($this->scores);
    }
}

namespace App;

use Game\\Score\\Board;

$board = new Board();
$board->add("Aoi", 320);
$board->add("Ren", 450);
echo "トップ：" . $board->top() . "\\n";
echo Board::class . "\\n";
`,
    blank: 'use Game\\Score\\Board;',
    placeholder: '// Game\\Score\\Board を短い名前 Board で使うための行',
    token: /^use\s+Game\\Score\\Board\s*;/m,
    hint: '<code>use Game\\Score\\Board;</code> と書く。区切りには円記号（バックスラッシュ）を使う。',
    output: `トップ：Ren
Game\\Score\\Board`
  },
  {
    id: 'php-23',
    phase: 'プロジェクトとテスト',
    title: 'PHPUnit',
    type: 'code',
    run: 'static',
    file: 'ComboTest.php',
    story: `<p class="lead">学習者は PHPUnit でテストを書き、コンボ得点の計算が正しいことを自動で確かめる。</p>
<p>PHPUnit は PHP の標準的なテストツールであり、<code>composer require --dev phpunit/phpunit</code> で入れ、<code>vendor/bin/phpunit</code> で実行する。テストクラスは TestCase を継承し、test で始まるメソッドが1つのテストになる。assertSame は期待値と実際の値が型も含めて等しいことを確かめる。#[DataProvider] は、同じテストを複数の入力の組で繰り返す属性である。</p>`,
    code: `<?php
declare(strict_types=1);

use PHPUnit\\Framework\\TestCase;
use PHPUnit\\Framework\\Attributes\\DataProvider;

// 実際のプロジェクトでは src に置く関数
function comboScore(int $base, int $combo): int
{
    return $base + $combo * 10;
}

final class ComboTest extends TestCase
{
    public function testComboBonusIsAdded(): void
    {
        $this->assertSame(130, comboScore(100, 3));
    }

    #[DataProvider('cases')]
    public function testVariousInputs(int $base, int $combo, int $expected): void
    {
        $this->assertSame($expected, comboScore($base, $combo));
    }

    public static function cases(): array
    {
        return [[0, 0, 0], [50, 1, 60]];
    }
}
`,
    blank: '$this->assertSame(130, comboScore(100, 3));',
    placeholder: '// comboScore(100, 3) が 130 と等しいことを確かめる行',
    token: /\$this->assertSame\(\s*130\s*,\s*comboScore\(\s*100\s*,\s*3\s*\)\s*\)\s*;/,
    hint: '<code>$this->assertSame(130, comboScore(100, 3));</code> と書く。期待値を先に書く。',
    output: `$ vendor/bin/phpunit ComboTest.php
PHPUnit 11.5.0 by Sebastian Bergmann and contributors.

...                                                                 3 / 3 (100%)

Time: 00:00.012, Memory: 8.00 MB

OK (3 tests, 3 assertions)`
  },
  {
    id: 'php-24',
    phase: 'プロジェクトとテスト',
    title: '総合：ゲーム大会の受付',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は列挙型・readonly プロパティ・例外を組み合わせ、定員つきのゲーム大会の受付を作る。</p>
<p>Division 列挙型は年齢から部門を決め、Entry は受付済みの参加者を readonly のプロパティで表す。Reception の register は、名前の空欄と定員の超過を例外で知らせ、条件を満たす申し込みに限り Entry を作って保存する。呼び出し側は2種類の例外を <code>|</code> でまとめて1つの catch で受け止め、最後の申込者まで受付を続ける。countBy は array_filter で部門ごとの人数を数える。</p>`,
    code: `<?php
declare(strict_types=1);

enum Division: string
{
    case Junior = "ジュニア";
    case Open = "一般";

    public static function forAge(int $age): self
    {
        return $age <= 15 ? self::Junior : self::Open;
    }
}

final class Entry
{
    public function __construct(
        public readonly string $name,
        public readonly int $age,
        public readonly Division $division,
    ) {}
}

final class Reception
{
    /** @var Entry[] */
    private array $entries = [];

    public function __construct(private int $capacity) {}

    public function register(string $name, int $age): Entry
    {
        $name = trim($name);
        if ($name === "") {
            throw new InvalidArgumentException("名前が空欄");
        }
        if (count($this->entries) >= $this->capacity) {
            throw new RuntimeException("定員 {$this->capacity} 名に到達");
        }
        $entry = new Entry($name, $age, Division::forAge($age));
        $this->entries[] = $entry;
        return $entry;
    }

    public function countBy(Division $d): int
    {
        return count(array_filter($this->entries, fn(Entry $e) => $e->division === $d));
    }
}

$desk = new Reception(capacity: 3);
$applicants = [["Aoi", 14], ["  ", 20], ["Ren", 22], ["Mio", 15], ["Sora", 30]];

foreach ($applicants as [$name, $age]) {
    try {
        $e = $desk->register($name, $age);
        echo "受付：{$e->name}（{$e->division->value}）\\n";
    } catch (InvalidArgumentException | RuntimeException $ex) {
        echo "受付エラー：" . $ex->getMessage() . "\\n";
    }
}
echo "ジュニア " . $desk->countBy(Division::Junior) . " 名 / 一般 " . $desk->countBy(Division::Open) . " 名\\n";
`,
    blank: 'if (count($this->entries) >= $this->capacity) {',
    placeholder: '// 受付済みの人数が定員に達したかを調べる if の行',
    token: /if\s*\(\s*count\(\s*\$this->entries\s*\)\s*>=\s*\$this->capacity\s*\)\s*\{/,
    hint: '<code>if (count($this->entries) &gt;= $this->capacity) {</code> と書く。',
    output: `受付：Aoi（ジュニア）
受付エラー：名前が空欄
受付：Ren（一般）
受付：Mio（ジュニア）
受付エラー：定員 3 名に到達
ジュニア 2 名 / 一般 1 名`
  },
  {
    id: 'php-25',
    phase: '実務の PHP',
    title: '反復可能なデータと標準 API',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者はジェネレーターと IteratorAggregate を使い、戦闘ログとパーティーを foreach で扱える形にする。</p>
<p>ジェネレーターは、yield で値を順に1つ返す関数である。値を必要な時点で1つ作るため、大きなログもメモリを節約して処理できる。iterable は配列とジェネレーターの両方を受け取れる型である。IteratorAggregate と Countable は PHP の標準インターフェースであり、実装したクラスは foreach と count にそのまま渡せる。iterator_to_array は反復の結果を配列に変える。</p>`,
    code: `<?php
declare(strict_types=1);

function readLog(): Generator
{
    $lines = ["10:00 start", "10:05 kill slime", "10:07 kill bat", "10:20 boss", "10:21 kill dragon"];
    foreach ($lines as $line) {
        yield $line;
    }
}

function onlyKills(iterable $lines): Generator
{
    foreach ($lines as $line) {
        if (str_contains($line, "kill")) {
            yield substr($line, strrpos($line, " ") + 1);
        }
    }
}

final class Party implements IteratorAggregate, Countable
{
    public function __construct(private array $members) {}

    public function getIterator(): ArrayIterator
    {
        return new ArrayIterator($this->members);
    }

    public function count(): int
    {
        return count($this->members);
    }
}

echo implode(", ", iterator_to_array(onlyKills(readLog()), false)) . "\\n";

$party = new Party(["勇者", "僧侶"]);
echo count($party) . " 人：";
foreach ($party as $i => $member) {
    echo "{$i}:{$member} ";
}
echo "\\n";
`,
    blank: 'yield substr($line, strrpos($line, " ") + 1);',
    placeholder: '// 最後の空白より後ろの文字列（倒した敵の名前）を1つ返す行',
    token: /yield\s+substr\(\s*\$line\s*,\s*strrpos\(\s*\$line\s*,\s*" "\s*\)\s*\+\s*1\s*\)\s*;/,
    hint: '<code>yield substr($line, strrpos($line, " ") + 1);</code> と書く。',
    output: `slime, bat, dragon
2 人：0:勇者 1:僧侶`
  },
  {
    id: 'php-26',
    phase: '実務の PHP',
    title: 'PDO とデータベース',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は PDO で SQLite のデータベースを操作し、プレイヤーごとの合計スコアを求める。</p>
<p>PDO は、さまざまなデータベースを同じ書き方で操作するための PHP の標準クラスである。<code>"sqlite::memory:"</code> はメモリ上に一時的なデータベースを作る指定である。prepare はプレースホルダー（<code>:player</code> や <code>?</code>）つきの SQL を準備し、execute が値を安全に埋め込んで実行する。この方法は、入力値で SQL が書き換えられる攻撃（SQL インジェクション）を防ぐ。</p>`,
    code: `<?php
declare(strict_types=1);

$pdo = new PDO("sqlite::memory:");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("CREATE TABLE scores (player TEXT, stage INTEGER, score INTEGER)");

$insert = $pdo->prepare("INSERT INTO scores VALUES (:player, :stage, :score)");
$records = [["Aoi", 1, 320], ["Ren", 1, 450], ["Aoi", 2, 510], ["Mio", 2, 280]];
foreach ($records as [$p, $s, $sc]) {
    $insert->execute([":player" => $p, ":stage" => $s, ":score" => $sc]);
}

$stmt = $pdo->prepare(
    "SELECT player, SUM(score) AS total FROM scores WHERE stage >= ? GROUP BY player ORDER BY total DESC"
);
$stmt->execute([1]);
foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
    echo "{$row["player"]}：{$row["total"]}\\n";
}
`,
    blank: '$insert->execute([":player" => $p, ":stage" => $s, ":score" => $sc]);',
    placeholder: '// プレースホルダーに $p・$s・$sc を埋め込んで実行する行',
    token: /\$insert->execute\(\s*\[\s*":player"\s*=>\s*\$p\s*,\s*":stage"\s*=>\s*\$s\s*,\s*":score"\s*=>\s*\$sc\s*\]\s*\)\s*;/,
    hint: '<code>$insert->execute([":player" =&gt; $p, ":stage" =&gt; $s, ":score" =&gt; $sc]);</code> と書く。',
    output: `Aoi：830
Ren：450
Mio：280`
  },
  {
    id: 'php-27',
    phase: '実務の PHP',
    title: '永続化とテストの設計',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者はセーブデータの保存をリポジトリのインターフェースで表し、メモリ版とデータベース版を差し替えて動かす。</p>
<p>永続化は、プログラムの終了後もデータを残すことである。リポジトリは、データの保存と取り出しの方法を1か所にまとめるクラスである。SaveService は SaveRepository インターフェースのみに依存するため、テストでは速い InMemorySaveRepository を、本番では PdoSaveRepository を渡せる。保存先が変わっても、SaveService のコードはそのまま使える。</p>`,
    code: `<?php
declare(strict_types=1);

interface SaveRepository
{
    public function save(string $slot, array $data): void;
    public function load(string $slot): ?array;
}

final class InMemorySaveRepository implements SaveRepository
{
    private array $slots = [];

    public function save(string $slot, array $data): void
    {
        $this->slots[$slot] = $data;
    }

    public function load(string $slot): ?array
    {
        return $this->slots[$slot] ?? null;
    }
}

final class PdoSaveRepository implements SaveRepository
{
    public function __construct(private PDO $pdo)
    {
        $pdo->exec("CREATE TABLE IF NOT EXISTS saves (slot TEXT PRIMARY KEY, data TEXT)");
    }

    public function save(string $slot, array $data): void
    {
        $stmt = $this->pdo->prepare("REPLACE INTO saves (slot, data) VALUES (?, ?)");
        $stmt->execute([$slot, json_encode($data, JSON_UNESCAPED_UNICODE)]);
    }

    public function load(string $slot): ?array
    {
        $stmt = $this->pdo->prepare("SELECT data FROM saves WHERE slot = ?");
        $stmt->execute([$slot]);
        $json = $stmt->fetchColumn();
        return $json === false ? null : json_decode($json, true);
    }
}

final class SaveService
{
    public function __construct(private SaveRepository $repo) {}

    public function checkpoint(string $slot, int $floor, int $hp): string
    {
        $this->repo->save($slot, ["floor" => $floor, "hp" => $hp]);
        $loaded = $this->repo->load($slot);
        return "{$slot}：{$loaded["floor"]} 階 / HP {$loaded["hp"]}";
    }
}

$repos = [new InMemorySaveRepository(), new PdoSaveRepository(new PDO("sqlite::memory:"))];
foreach ($repos as $repo) {
    $service = new SaveService($repo);
    echo $repo::class . " → " . $service->checkpoint("slot1", 7, 42) . "\\n";
}
`,
    blank: 'public function __construct(private SaveRepository $repo) {}',
    placeholder: '// SaveRepository 型の値を受け取り、$repo に保存するコンストラクタ',
    token: /public\s+function\s+__construct\(\s*private\s+SaveRepository\s+\$repo\s*\)\s*\{\s*\}/,
    hint: '<code>public function __construct(private SaveRepository $repo) {}</code> と書く。具体的なクラスの代わりにインターフェースを型にする。',
    output: `InMemorySaveRepository → slot1：7 階 / HP 42
PdoSaveRepository → slot1：7 階 / HP 42`
  },
  {
    id: 'php-28',
    phase: '実務の PHP',
    title: '実務コードの読み方',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は PHPDoc・関数の宣言・分岐の順に報酬計算のコードを読み、小さな入力で動きを追跡する。</p>
<p>他人の書いたコードは、最初に関数の名前・引数・戻り値の型と PHPDoc（<code>/** */</code> で書く説明のコメント）を読み、入力と出力の約束をつかむ。<code>array{rank: string, clearTime: int}</code> は、配列が持つキーと型を表す PHPDoc の書き方である。次に分岐を上から読み、最後に具体的な入力を3つほど用意して結果を確かめる。この順序により、全体の目的から細部へと理解を進められる。</p>`,
    code: `<?php
declare(strict_types=1);

/**
 * クエストの報酬を計算する。
 *
 * @param array{rank: string, clearTime: int} $quest
 * @return int 報酬のゴールド
 */
function reward(array $quest, bool $isMember): int
{
    $base = match ($quest["rank"]) {
        "S" => 1000,
        "A" => 600,
        default => 300,
    };
    if ($quest["clearTime"] <= 60) {
        $base = (int)($base * 1.5);
    }
    return $isMember ? $base + 100 : $base;
}

$cases = [
    [["rank" => "S", "clearTime" => 45], true],
    [["rank" => "A", "clearTime" => 90], false],
    [["rank" => "B", "clearTime" => 30], false],
];
foreach ($cases as [$quest, $member]) {
    echo "{$quest["rank"]} / {$quest["clearTime"]} 秒 → " . reward($quest, $member) . " G\\n";
}
`,
    blank: '$base = (int)($base * 1.5);',
    placeholder: '// 60 秒以内のクリアで報酬を 1.5 倍にし、整数に変換する行',
    token: /\$base\s*=\s*\(int\)\s*\(\s*\$base\s*\*\s*1\.5\s*\)\s*;/,
    hint: '<code>$base = (int)($base * 1.5);</code> と書く。',
    output: `S / 45 秒 → 1600 G
A / 90 秒 → 600 G
B / 30 秒 → 450 G`
  },
  {
    id: 'php-29',
    phase: '実務の PHP',
    title: '静的解析と保守',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は PHPStan の静的解析にかけやすい形でコードを書き、空のデッキの扱いを含めて保守しやすくする。</p>
<p>静的解析は、プログラムを実行する前にコードを読み、型の食い違いなどの誤りを見つける方法である。PHPStan は代表的な静的解析ツールであり、<code>composer require --dev phpstan/phpstan</code> で入れ、<code>vendor/bin/phpstan analyse --level 8</code> で実行する。<code>@param list&lt;Card&gt;</code> は配列の中身の型を伝える PHPDoc であり、解析の精度を高める。空の配列を先に処理する書き方（早期 return）は、0 による割り算を防ぐ。</p>`,
    code: `<?php
declare(strict_types=1);

final class Card
{
    public function __construct(
        public readonly string $name,
        public readonly int $cost,
    ) {}
}

/**
 * @param list<Card> $deck
 */
function averageCost(array $deck): float
{
    if ($deck === []) {
        return 0.0;
    }
    $total = array_sum(array_map(fn(Card $c): int => $c->cost, $deck));
    return round($total / count($deck), 2);
}

$deck = [new Card("火球", 3), new Card("盾", 1), new Card("竜召喚", 7)];
echo averageCost($deck) . "\\n";
echo averageCost([]) . "\\n";
`,
    blank: 'if ($deck === []) {',
    placeholder: '// $deck が空の配列かを調べる if の行',
    token: /if\s*\(\s*(\$deck\s*===\s*\[\s*\]|count\(\s*\$deck\s*\)\s*===\s*0)\s*\)\s*\{/,
    hint: '<code>if ($deck === []) {</code> と書く。',
    output: `3.67
0
$ vendor/bin/phpstan analyse --level 8 index.php
 1/1 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%

 [OK] No errors`
  },
  {
    id: 'php-30',
    phase: '実務の PHP',
    title: '総合制作：ゲームの貸し出し図書館',
    type: 'code',
    run: 'static',
    file: 'index.php',
    story: `<p class="lead">学習者は列挙型・クラス・日時・例外・クロージャを組み合わせ、ゲームソフトの貸し出し図書館を作る。</p>
<p>GameLibrary は、タイトルをキーとする配列で Game を管理する。lend は未登録のタイトルと貸出中のタイトルを例外で知らせ、貸し出しの成立時に返却日を <code>modify("+7 days")</code> で求める。「今日」の日付はコンストラクタで受け取るため、結果を再現できる。<code>?? throw</code> は、値が null のときに例外を投げる短い書き方である。操作の一覧はクロージャ（その場で作る関数）の配列とし、順に実行して結果を表示する。</p>`,
    code: `<?php
declare(strict_types=1);

enum Status: string
{
    case Available = "貸出可";
    case Lent = "貸出中";
}

final class Game
{
    public Status $status = Status::Available;
    public ?string $borrower = null;
    public ?DateTimeImmutable $due = null;

    public function __construct(public readonly string $title) {}
}

final class GameLibrary
{
    /** @var array<string, Game> */
    private array $games = [];

    public function __construct(private DateTimeImmutable $today) {}

    public function add(string $title): void
    {
        $this->games[$title] = new Game($title);
    }

    public function lend(string $title, string $member, int $days = 7): string
    {
        $game = $this->games[$title] ?? throw new InvalidArgumentException("{$title} は未登録");
        if ($game->status === Status::Lent) {
            throw new RuntimeException("{$title} は {$game->borrower} が借りている");
        }
        $game->status = Status::Lent;
        $game->borrower = $member;
        $game->due = $this->today->modify("+{$days} days");
        return "{$member} が {$title} を借りた（返却日 {$game->due->format('m/d')}）";
    }

    public function giveBack(string $title): string
    {
        $game = $this->games[$title];
        $game->status = Status::Available;
        $game->borrower = null;
        $game->due = null;
        return "{$title} が返却された";
    }

    public function report(): string
    {
        $lines = array_map(
            fn(Game $g) => sprintf("%s  %s", $g->status->value, $g->title),
            array_values($this->games)
        );
        return implode("\\n", $lines);
    }
}

$library = new GameLibrary(new DateTimeImmutable("2026-11-05"));
foreach (["星海の探検", "迷宮の騎士", "パズル塔"] as $title) {
    $library->add($title);
}

$actions = [
    fn() => $library->lend("迷宮の騎士", "Aoi"),
    fn() => $library->lend("迷宮の騎士", "Ren"),
    fn() => $library->lend("雪原レース", "Mio"),
    fn() => $library->lend("パズル塔", "Ren", 3),
    fn() => $library->giveBack("迷宮の騎士"),
];
foreach ($actions as $action) {
    try {
        echo $action() . "\\n";
    } catch (InvalidArgumentException | RuntimeException $e) {
        echo "エラー：" . $e->getMessage() . "\\n";
    }
}
echo "--- 在庫 ---\\n" . $library->report() . "\\n";
`,
    blank: '$game->due = $this->today->modify("+{$days} days");',
    placeholder: '// 今日から $days 日後の日付を返却日として $game->due に入れる行',
    token: /\$game->due\s*=\s*\$this->today->modify\(\s*"\+\{\$days\} days"\s*\)\s*;/,
    hint: '<code>$game->due = $this->today->modify("+{$days} days");</code> と書く。',
    output: `Aoi が 迷宮の騎士 を借りた（返却日 11/12）
エラー：迷宮の騎士 は Aoi が借りている
エラー：雪原レース は未登録
Ren が パズル塔 を借りた（返却日 11/08）
迷宮の騎士 が返却された
--- 在庫 ---
貸出可  星海の探検
貸出可  迷宮の騎士
貸出中  パズル塔`
  }
];
