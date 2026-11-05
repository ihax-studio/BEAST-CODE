SERIES.pysetup = [
  {
    id: 'pysetup-01',
    phase: 'Python をパソコンで動かす',
    title: 'macOS でのインストールと実行',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は macOS に Python をインストールし、ターミナルで main.py を実行する。</p>
<p>Python の入手方法は2つある。1つ目は公式サイト python.org のインストーラ（.pkg）である。2つ目は Homebrew である。Homebrew は、macOS 用のパッケージ管理ツールである。パッケージ管理ツールは、ソフトウェアの入手と更新をコマンドで行う道具である。macOS では <code>python3</code> コマンドで Python を起動する。</p>
<pre>brew install python
python3 --version
python3 main.py</pre>
<p>venv は、プロジェクトごとに独立した Python の環境を作る標準の仕組みである。学習者はプロジェクトのフォルダで <code>python3 -m venv .venv</code> を実行し、<code>source .venv/bin/activate</code> で環境を有効にする。有効な間、ターミナルの行頭に <code>(.venv)</code> が表示され、<code>python</code> コマンドもこの環境の Python を指す。</p>`,
    code: `import platform

print("Hello, Python")
print("OS:", platform.system())
`,
    output: `$ python3 --version
Python 3.13.1
$ python3 -m venv .venv
$ source .venv/bin/activate
(.venv) $ python main.py
Hello, Python
OS: Darwin`
  },
  {
    id: 'pysetup-02',
    phase: 'Python をパソコンで動かす',
    title: 'Windows でのインストールと実行',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は Windows に Python をインストールし、py コマンドで main.py を実行する。</p>
<p>python.org のインストーラを使う場合、学習者は最初の画面で「Add python.exe to PATH」にチェックを入れる。PATH は、コマンドの実行ファイルを探す場所の一覧である。PATH に登録すると、どのフォルダからでも <code>python</code> コマンドが使える。winget を使う場合は、ターミナルで <code>winget install Python.Python.3.13</code> を実行する。winget は Windows 標準のパッケージ管理ツールである。</p>
<p>py コマンドは、Windows 版の Python に付属する起動用の道具（Python Launcher）である。<code>py --version</code> でバージョンを確認し、<code>py main.py</code> でファイルを実行する。venv は <code>py -m venv .venv</code> で作り、<code>.venv\\Scripts\\activate</code> で有効にする。</p>
<pre>winget install Python.Python.3.13
py --version
py main.py</pre>`,
    code: `import platform

print("Hello, Python")
print("OS:", platform.system())
`,
    output: `PS C:\\game> py --version
Python 3.13.1
PS C:\\game> py -m venv .venv
PS C:\\game> .venv\\Scripts\\activate
(.venv) PS C:\\game> python main.py
Hello, Python
OS: Windows`
  },
  {
    id: 'pysetup-03',
    phase: 'Python をパソコンで動かす',
    title: 'VS Code での実行',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は VS Code に Python 拡張機能を入れ、エディタから main.py を実行する。</p>
<p>VS Code は、Microsoft が開発するコードエディタである。学習者は左の拡張機能ビューで「Python」を検索し、Microsoft 製の Python 拡張機能をインストールする。この拡張機能は、入力の補完、エラーの表示、ファイルの実行を担当する。</p>
<p>コマンドパレット（macOS は Cmd+Shift+P、Windows は Ctrl+Shift+P）で「Python: Select Interpreter」を選び、使う Python（たとえば .venv の Python）を指定する。インタープリタは、Python のコードを読み取り実行するプログラムである。その後、エディタ右上の実行ボタン（Run Python File）を押すと、下部のターミナルに結果が表示される。ターミナルに <code>python main.py</code> と入力しても同じ結果になる。</p>`,
    code: `rooms = ["入口", "宝物庫", "ボスの部屋"]

for room in rooms:
    print(f"{room} に入った")
`,
    output: `(.venv) $ python main.py
入口 に入った
宝物庫 に入った
ボスの部屋 に入った`
  },
  {
    id: 'pysetup-04',
    phase: 'Python をパソコンで動かす',
    title: 'ネイティブのアプリとして動かす（tkinter）',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は tkinter でウィンドウとボタンを作り、クリック回数を数えるデスクトップアプリを動かす。</p>
<p>GUI は、ウィンドウやボタンなどの画面の部品で操作する仕組みである。tkinter は、Python に標準で付属する GUI ライブラリである。<code>tk.Tk()</code> はウィンドウを作り、<code>tk.Label</code> は文字を、<code>tk.Button</code> はボタンを作る。<code>pack()</code> は部品をウィンドウに並べる命令である。</p>
<p><code>root.mainloop()</code> は、クリックなどの操作を待ち続ける処理である。ボタンが押されると、tkinter は <code>command</code> に指定した関数を呼び出す。Homebrew の Python では、<code>brew install python-tk</code> で tkinter を追加する。このアプリはブラウザの外で動くため、学習者は自分のパソコンで <code>python3 main.py</code>（Windows は <code>py main.py</code>）を実行して確かめる。</p>`,
    code: `import tkinter as tk

count = 0

def on_click():
    global count
    count += 1
    label.config(text=f"クリック回数: {count}")

root = tk.Tk()
root.title("クリックカウンター")
root.geometry("300x150")

label = tk.Label(root, text="クリック回数: 0", font=("Helvetica", 16))
label.pack(pady=20)

button = tk.Button(root, text="クリック", command=on_click)
button.pack()

root.mainloop()
`,
    output: `「クリックカウンター」というタイトルの、幅 300・高さ 150 のウィンドウが開く。

┌─ クリックカウンター ───────┐
│                            │
│      クリック回数: 0       │
│                            │
│        [ クリック ]        │
└────────────────────────────┘

ボタンを3回押すと、表示が「クリック回数: 3」に変わる。
ウィンドウを閉じると、プログラムが終了する。`
  },
  {
    id: 'pysetup-05',
    phase: 'Python をパソコンで動かす',
    title: 'アプリとしてまとめる（PyInstaller）',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は PyInstaller で main.py を1つの実行ファイルにまとめ、Windows の .exe と macOS の .app を作る。</p>
<p>PyInstaller は、Python のプログラムと必要なライブラリをまとめ、Python が未導入のパソコンでも起動できるファイルを作る道具である。学習者は <code>pip install pyinstaller</code> で入手する。pip は Python のパッケージを入れるコマンドであり、次のレッスンで詳しく扱う。</p>
<pre>pip install pyinstaller
pyinstaller --onefile --windowed --name ClickCounter main.py</pre>
<p><code>--onefile</code> は、すべてを1つのファイルにまとめる指定である。<code>--windowed</code> は、黒いコンソール画面を省き、ウィンドウに限り表示する指定である。完成品は dist フォルダに入る。PyInstaller は実行中の OS 向けのファイルを作るため、.exe は Windows 上で、.app は macOS 上でビルドする。</p>`,
    code: `import tkinter as tk

root = tk.Tk()
root.title("クリックカウンター")
root.geometry("300x150")
tk.Label(root, text="BEAST CODE", font=("Helvetica", 16)).pack(pady=40)
root.mainloop()
`,
    output: `PS C:\\game> pyinstaller --onefile --windowed --name ClickCounter main.py
INFO: PyInstaller: 6.11.1
INFO: Building EXE from EXE-00.toc completed successfully.
PS C:\\game> dir dist
ClickCounter.exe

$ pyinstaller --onefile --windowed --name ClickCounter main.py
INFO: Building BUNDLE BUNDLE-00.toc completed successfully.
$ ls dist
ClickCounter      ClickCounter.app`
  },
  {
    id: 'pysetup-06',
    phase: 'Python をパソコンで動かす',
    title: 'パッケージの管理（pip, requirements.txt）',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は pip で外部パッケージを入れ、requirements.txt に一覧を記録する。</p>
<p>パッケージは、ほかの人が作り公開した Python のライブラリである。pip は、PyPI（Python の公式パッケージ置き場）からパッケージを入手するコマンドである。学習者は venv を有効にした状態で <code>pip install requests</code> を実行する。こうすると、パッケージはそのプロジェクトの環境に入る。</p>
<pre>pip install requests
pip list
pip freeze &gt; requirements.txt
pip install -r requirements.txt</pre>
<p><code>pip freeze</code> は、入っているパッケージとバージョンを一覧で出力する。requirements.txt は、その一覧を保存したファイルである。別のパソコンでは <code>pip install -r requirements.txt</code> を実行すると、同じバージョンのパッケージがそろう。</p>`,
    code: `import requests

res = requests.get("https://api.github.com", timeout=10)
print(res.status_code)
print(res.headers["Content-Type"])
`,
    output: `(.venv) $ pip install requests
Successfully installed certifi-2024.8.30 charset-normalizer-3.4.0 idna-3.10 requests-2.32.3 urllib3-2.2.3
(.venv) $ pip freeze > requirements.txt
(.venv) $ cat requirements.txt
certifi==2024.8.30
charset-normalizer==3.4.0
idna==3.10
requests==2.32.3
urllib3==2.2.3
(.venv) $ python main.py
200
application/json; charset=utf-8`
  }
];

SERIES.python = [
  {
    id: 'python-01',
    phase: 'Python を始める',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は自分のパソコンに Python を入れ、バージョン確認と Hello World の実行を行う。</p>
<p>macOS では、公式サイト python.org のインストーラ、または Homebrew の <code>brew install python</code> で Python を入れる。バージョンは <code>python3 --version</code> で確認する。Windows では、python.org のインストーラ（「Add python.exe to PATH」にチェック）または <code>winget install Python.Python.3.13</code> で入れ、<code>py --version</code> で確認する。</p>
<p>VS Code では、Microsoft 製の拡張機能「Python」を入れる。main.py を開き、右上の実行ボタンを押すか、ターミナルで <code>python3 main.py</code>（Windows は <code>py main.py</code>）を実行する。このシリーズのレッスンは、ブラウザ上の Python（Pyodide）でも実行できる。</p>`,
    code: `print("Hello, World")
`,
    output: `$ python3 --version
Python 3.13.1
$ python3 main.py
Hello, World

PS C:\\game> py --version
Python 3.13.1
PS C:\\game> py main.py
Hello, World`
  },
  {
    id: 'python-02',
    phase: 'Python を始める',
    title: 'Python の開始',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は print を使い、文字と計算結果を画面に表示する。</p>
<p>Python は、短く読みやすい文法をもつプログラミング言語である。ゲーム、Web サービス、データ分析、機械学習など、幅広い分野で使われる。Python はコードを上の行から順に実行する。</p>
<p>print は、かっこの中の値を表示する関数である。文字列は <code>"</code> で囲む。<code>"</code> の外に <code>3 + 4</code> のような式を書くと、print は計算結果を表示する。<code>#</code> から行末まではコメントであり、Python はコメントを実行の対象から外す。</p>`,
    code: `# print はかっこの中の値を表示する
print("Hello, Python")
print("ダンジョンへようこそ")
print(3 + 4)
print("3 + 4")
`,
    blank: 'print("Hello, Python")',
    placeholder: '# 文字列 Hello, Python を表示する print の行',
    token: /print\(\s*["']Hello, Python["']\s*\)/,
    hint: '<code>print("Hello, Python")</code> と書く。文字列は <code>"</code> で囲む。',
    output: `Hello, Python
ダンジョンへようこそ
7
3 + 4`
  },
  {
    id: 'python-03',
    phase: 'Python を始める',
    title: '変数とデータ型',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は勇者のステータスを変数に入れ、それぞれのデータ型を確かめる。</p>
<p>変数は、値に名前をつけて保存する仕組みである。<code>level = 5</code> と書くと、Python は 5 という値に level という名前をつける。<code>=</code> は「右の値を左の名前に入れる」という代入の記号である。</p>
<p>データ型は、値の種類である。int は整数、float は小数、str は文字列、bool は True（真）か False（偽）を表す。<code>type()</code> は値の型を返す。f-string は、<code>f"…{変数}…"</code> の形で文字列の中に値を埋め込む書き方である。</p>`,
    code: `hero = "アオイ"
level = 5
hp = 42.5
is_alive = True

print(hero)
print(level + 1)
print(type(level))
print(type(hp))
print(type(hero))
print(type(is_alive))
print(f"{hero} のレベルは {level}")
`,
    blank: 'level = 5',
    placeholder: '# 変数 level に整数 5 を入れる行',
    token: /^level\s*=\s*5\s*$/m,
    hint: '<code>level = 5</code> と書く。数値は <code>"</code> の外にそのまま書く。',
    output: `アオイ
6
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
アオイ のレベルは 5`
  },
  {
    id: 'python-04',
    phase: '条件分岐とリスト',
    title: '条件分岐',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は if・elif・else を使い、勇者の HP に応じて表示するメッセージを変える。</p>
<p>if 文は、条件が True のときに、続く字下げされた行を実行する。字下げ（インデント）は行頭の空白であり、Python は空白4つで処理のまとまり（ブロック）を表す。<code>elif</code> は次の条件を調べ、<code>else</code> は残りすべての場合を受け持つ。</p>
<p>比較演算子は <code>==</code>（等しい）、<code>!=</code>（異なる）、<code>&lt;</code>、<code>&lt;=</code>、<code>&gt;</code>、<code>&gt;=</code> である。<code>and</code> は両方の条件が True のときに True になり、<code>or</code> はどちらかが True のときに True になる。</p>`,
    code: `hp = 35
max_hp = 100

if hp <= 0:
    print("ゲームオーバー")
elif hp < max_hp * 0.4:
    print("HP が危険域。回復を推奨する")
else:
    print("HP は十分にある")

has_key = True
level = 12
if has_key and level >= 10:
    print("ボスの部屋に入る")
`,
    blank: 'elif hp < max_hp * 0.4:',
    placeholder: '# HP が最大値の 40% 未満かを調べる elif の行',
    token: /elif\s+hp\s*<\s*max_hp\s*\*\s*0\.4\s*:/,
    hint: '<code>elif hp &lt; max_hp * 0.4:</code> と書く。行の最後に <code>:</code> をつける。',
    output: `HP が危険域。回復を推奨する
ボスの部屋に入る`
  },
  {
    id: 'python-05',
    phase: '条件分岐とリスト',
    title: 'リスト',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はリストで持ち物を管理し、アイテムの追加と削除を行う。</p>
<p>リストは、複数の値を順番に並べて1つにまとめたデータである。<code>[ ]</code> の中に値をカンマで区切って書く。各値には 0 から始まる番号（インデックス）がつく。<code>items[0]</code> は先頭の値を、<code>items[-1]</code> は末尾の値を取り出す。</p>
<p><code>append()</code> は末尾に値を追加し、<code>remove()</code> は指定した値を削除する。<code>len()</code> は要素の数を返す。<code>in</code> は、値がリストに含まれるかを True か False で返す。</p>`,
    code: `items = ["剣", "盾", "薬草"]
print(items[0])
print(items[-1])

items.append("地図")
print(items)
print(len(items))

items.remove("盾")
print(items)
print("薬草" in items)
`,
    blank: 'items.append("地図")',
    placeholder: '# リスト items の末尾に 地図 を追加する行',
    token: /items\.append\(\s*["']地図["']\s*\)/,
    hint: '<code>items.append("地図")</code> と書く。',
    output: `剣
薬草
['剣', '盾', '薬草', '地図']
4
['剣', '薬草', '地図']
True`
  },
  {
    id: 'python-06',
    phase: '条件分岐とリスト',
    title: '繰り返し',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は for 文と while 文を使い、パーティの紹介とダンジョンの探索を繰り返す。</p>
<p>for 文は、リストなどの要素を先頭から順に取り出し、そのたびにブロックを実行する。<code>for member in party:</code> では、member に各要素が順に入る。<code>range(1, 4)</code> は 1、2、3 の整数の並びを作る。終わりの値 4 は範囲の外である。</p>
<p>while 文は、条件が True の間、ブロックを繰り返す。条件が False になった時点で繰り返しが終わる。<code>hp -= 4</code> は <code>hp = hp - 4</code> の短い書き方である。</p>`,
    code: `party = ["アオイ", "ソラ", "リク"]
for member in party:
    print(f"{member} が仲間になった")

for floor in range(1, 4):
    print(f"地下 {floor} 階を探索する")

hp = 10
turn = 0
while hp > 0:
    hp -= 4
    turn += 1
print(f"{turn} ターンで HP が 0 以下になった")
`,
    blank: 'for member in party:',
    placeholder: '# party の要素を順に member に入れる for の行',
    token: /for\s+member\s+in\s+party\s*:/,
    hint: '<code>for member in party:</code> と書く。行の最後に <code>:</code> をつける。',
    output: `アオイ が仲間になった
ソラ が仲間になった
リク が仲間になった
地下 1 階を探索する
地下 2 階を探索する
地下 3 階を探索する
3 ターンで HP が 0 以下になった`
  },
  {
    id: 'python-07',
    phase: '条件分岐とリスト',
    title: '繰り返しの活用',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は continue と break を使い、ダンジョンの部屋を順に調べてゴールドを集計する。</p>
<p><code>continue</code> は、その回の残りの処理を飛ばし、次の要素の処理へ進む命令である。<code>break</code> は、繰り返しそのものを終了する命令である。繰り返しの前に <code>gold = 0</code> を用意し、繰り返しの中で値を足していく方法を「集計」という。</p>
<p>この例では、空き部屋を continue で飛ばし、ボスの部屋で break を実行する。ボスの部屋より後ろの宝箱は、探索の範囲の外になる。</p>`,
    code: `rooms = ["空き部屋", "スライム", "宝箱", "空き部屋", "宝箱", "ボス", "宝箱"]
gold = 0
for room in rooms:
    if room == "空き部屋":
        continue
    if room == "ボス":
        print("ボスを発見。探索を終了する")
        break
    if room == "宝箱":
        gold += 50
        print("宝箱から 50 ゴールドを得た")
    else:
        print(f"{room} を倒した")
print(f"合計 {gold} ゴールド")
`,
    blank: 'continue',
    placeholder: '# この部屋の残りの処理を飛ばし、次の部屋へ進む命令',
    token: /^\s*continue\s*$/m,
    hint: '空き部屋の if の中に <code>continue</code> と書く。',
    output: `スライム を倒した
宝箱から 50 ゴールドを得た
宝箱から 50 ゴールドを得た
ボスを発見。探索を終了する
合計 100 ゴールド`
  },
  {
    id: 'python-08',
    phase: 'データ構造',
    title: '辞書',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は辞書でモンスターのデータを表し、値の更新と追加を行う。</p>
<p>辞書（dict）は、キーと値の組を集めたデータである。<code>{"name": "ドラゴン"}</code> のように、キーと値を <code>:</code> でつなぐ。リストは番号で値を取り出し、辞書はキーで値を取り出す。</p>
<p><code>monster["element"] = "炎"</code> のように新しいキーに代入すると、辞書に組が追加される。<code>get(キー, 既定値)</code> は、キーが辞書の外にあるときに既定値を返す。<code>items()</code> はキーと値の組を順に取り出す。</p>`,
    code: `monster = {"name": "ドラゴン", "hp": 120, "attack": 25}
print(monster["name"])

monster["hp"] -= 30
monster["element"] = "炎"
print(monster)

print(monster.get("defense", 0))

for key, value in monster.items():
    print(f"{key}: {value}")
`,
    blank: 'monster["element"] = "炎"',
    placeholder: '# キー element に値 炎 を追加する行',
    token: /monster\[\s*["']element["']\s*\]\s*=\s*["']炎["']/,
    hint: '<code>monster["element"] = "炎"</code> と書く。',
    output: `ドラゴン
{'name': 'ドラゴン', 'hp': 90, 'attack': 25, 'element': '炎'}
0
name: ドラゴン
hp: 90
attack: 25
element: 炎`
  },
  {
    id: 'python-09',
    phase: 'データ構造',
    title: '集合とタプル',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は集合でカードの属性を比べ、タプルでマップ上の位置を表す。</p>
<p>集合（set）は、同じ値を1つに限って持つ値の集まりである。<code>&amp;</code> は共通部分、<code>|</code> は和、<code>-</code> は差を求める。集合の要素の順番は不定のため、表示の前に <code>sorted()</code> で並べる。</p>
<p>タプル（tuple）は、<code>( )</code> で作る、作成後の変更が不可能な並びである。座標のように組で扱う値に向く。<code>x, y = position</code> のように書くと、タプルの値を複数の変数に一度に取り出せる。この書き方をアンパックという。</p>`,
    code: `cards_a = {"火", "水", "風", "雷"}
cards_b = {"水", "土", "雷"}

print(sorted(cards_a & cards_b))
print(sorted(cards_a | cards_b))
print(sorted(cards_a - cards_b))

position = (3, 5)
x, y = position
print(f"x={x}, y={y}")

drops = ["薬草", "薬草", "金貨", "薬草", "金貨"]
print(len(set(drops)))
`,
    blank: 'print(sorted(cards_a & cards_b))',
    placeholder: '# 2つの集合の共通部分を並べて表示する行',
    token: /cards_a\s*&\s*cards_b/,
    hint: '共通部分は <code>&amp;</code> で求める。<code>print(sorted(cards_a &amp; cards_b))</code> と書く。',
    output: `['水', '雷']
['土', '水', '火', '雷', '風']
['火', '風']
x=3, y=5
2`
  },
  {
    id: 'python-10',
    phase: '関数',
    title: '関数の定義',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は攻撃の処理を関数にまとめ、2人のキャラクターで呼び出す。</p>
<p>関数は、一連の処理に名前をつけてまとめたものである。<code>def 関数名(引数):</code> で定義する。引数は、関数が受け取る値である。定義の段階では中の処理は待機している。呼び出しの時点で実行される。</p>
<p><code>return</code> は、関数の結果を呼び出し元に返す命令である。<code>total += attack("アオイ", 12)</code> では、関数が返したダメージの値が total に足される。</p>`,
    code: `def attack(name, power):
    damage = power * 2
    print(f"{name} の攻撃。{damage} のダメージ")
    return damage

total = 0
total += attack("アオイ", 12)
total += attack("ソラ", 8)
print(f"合計ダメージ: {total}")
`,
    blank: 'return damage',
    placeholder: '# damage の値を呼び出し元に返す行',
    token: /return\s+damage/,
    hint: '<code>return damage</code> と書く。',
    output: `アオイ の攻撃。24 のダメージ
ソラ の攻撃。16 のダメージ
合計ダメージ: 40`
  },
  {
    id: 'python-11',
    phase: '関数',
    title: '引数とスコープ',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は既定値つきの引数で回復の関数を作り、変数のスコープの違いを確かめる。</p>
<p>既定値は、呼び出しで省略された引数に使われる値である。<code>amount=20</code> と定義すると、<code>heal(50)</code> の amount は 20 になる。<code>heal(50, amount=40)</code> のように名前を指定して渡す引数を、キーワード引数という。</p>
<p>スコープは、変数が使える範囲である。関数の中で作った変数（ローカル変数）は、その関数の中に限り有効である。関数の外の変数（グローバル変数）を関数の中で書き換えるときは、<code>global</code> で宣言する。</p>`,
    code: `def heal(hp, amount=20, max_hp=100):
    return min(hp + amount, max_hp)

print(heal(50))
print(heal(90))
print(heal(50, amount=40))

turn = 0

def next_turn():
    global turn
    turn += 1

def show_local():
    turn = 99
    print(f"関数の中の turn: {turn}")

next_turn()
next_turn()
show_local()
print(f"グローバルの turn: {turn}")
`,
    blank: 'def heal(hp, amount=20, max_hp=100):',
    placeholder: '# 引数 hp、既定値 20 の amount、既定値 100 の max_hp をとる関数 heal の定義',
    token: /def\s+heal\s*\(\s*hp\s*,\s*amount\s*=\s*20\s*,\s*max_hp\s*=\s*100\s*\)\s*:/,
    hint: '<code>def heal(hp, amount=20, max_hp=100):</code> と書く。',
    output: `70
100
90
関数の中の turn: 99
グローバルの turn: 2`
  },
  {
    id: 'python-12',
    phase: '関数',
    title: '文字列の操作',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はゲームのログの文字列を整え、分割して必要な情報を取り出す。</p>
<p>文字列には便利なメソッドがある。メソッドは、値に属する関数である。<code>strip()</code> は前後の空白を取り除き、<code>split(", ")</code> は区切り文字で分割してリストを返す。<code>upper()</code> は大文字に、<code>replace(a, b)</code> は a を b に置き換える。<code>"-".join(リスト)</code> はリストの要素をつなげる。</p>
<p>f-string の <code>{ }</code> には書式も指定できる。<code>{name:&gt;6}</code> は幅 6 の右寄せ、<code>{1200:,}</code> は3桁区切り、<code>{0.875:.1%}</code> は小数第1位までの百分率である。</p>`,
    code: `log = "  Player:Aoi, Score:1200, Stage:3  "
clean = log.strip()
print(clean)

parts = clean.split(", ")
print(parts)

name = parts[0].split(":")[1]
print(name.upper())
print(clean.replace("Score", "Pt"))
print(f"{name:>6}|{1200:,}|{0.875:.1%}")
print("-".join(["A", "B", "C"]))
`,
    blank: 'parts = clean.split(", ")',
    placeholder: '# clean をカンマと空白で分割し、parts に入れる行',
    token: /parts\s*=\s*clean\.split\(\s*["'],\s*["']\s*\)/,
    hint: '<code>parts = clean.split(", ")</code> と書く。区切り文字はカンマと空白1つである。',
    output: `Player:Aoi, Score:1200, Stage:3
['Player:Aoi', 'Score:1200', 'Stage:3']
AOI
Player:Aoi, Pt:1200, Stage:3
   Aoi|1,200|87.5%
A-B-C`
  },
  {
    id: 'python-13',
    phase: 'エラーとモジュール',
    title: 'エラーと例外',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は try と except で例外を受け止め、アイテムを使う処理を最後まで続ける。</p>
<p>例外は、実行中に起きたエラーを表すしくみである。例外が起きると、Python はその場で処理を中断する。<code>int("two")</code> は ValueError を、辞書に未登録のキーの参照は KeyError を起こす。</p>
<p><code>try:</code> のブロックで例外が起きると、Python は型の合う <code>except</code> のブロックへ移る。<code>finally</code> のブロックは、どの場合でも最後に実行される。</p>`,
    code: `inventory = {"薬草": 3, "金貨": 120}

def take(item, count_text):
    try:
        count = int(count_text)
        left = inventory[item] - count
        print(f"{item} を {count} 個使った。残り {left} 個")
    except ValueError:
        print(f"エラー: '{count_text}' は数値の形式と異なる")
    except KeyError:
        print(f"エラー: {item} は未登録のアイテム")
    finally:
        print("処理を終了した")

take("薬草", "2")
take("薬草", "two")
take("エリクサー", "1")
`,
    blank: 'except ValueError:',
    placeholder: '# 数値への変換の失敗（ValueError）を受け止める except の行',
    token: /except\s+ValueError\s*:/,
    hint: '<code>except ValueError:</code> と書く。',
    output: `薬草 を 2 個使った。残り 1 個
処理を終了した
エラー: 'two' は数値の形式と異なる
処理を終了した
エラー: エリクサー は未登録のアイテム
処理を終了した`
  },
  {
    id: 'python-14',
    phase: 'エラーとモジュール',
    title: 'モジュールとライブラリ',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は import で標準ライブラリのモジュールを読み込み、計算・乱数・日付の機能を使う。</p>
<p>モジュールは、関数や値をまとめた Python のファイルである。標準ライブラリは、Python に最初から付属するモジュールの集まりである。<code>import math</code> と書くと、<code>math.sqrt()</code> のように「モジュール名.名前」で機能を使える。<code>from datetime import date</code> は、モジュールの中の date を直接使える形で読み込む。</p>
<p>random モジュールは乱数を扱う。<code>random.seed(1)</code> で乱数の種を固定すると、毎回同じ乱数の並びになる。ゲームの動作確認では、この方法で結果を再現する。</p>`,
    code: `import math
import random
from datetime import date

print(math.sqrt(16))
print(math.ceil(7 / 2))

random.seed(1)
print(random.randint(1, 6))
print(random.choice(["剣", "盾", "弓"]))

release = date(2026, 12, 24)
print(release.year, release.month, release.day)
`,
    blank: 'import random',
    placeholder: '# 乱数を扱うモジュールを読み込む行',
    token: /^import\s+random\s*$/m,
    hint: '<code>import random</code> と書く。',
    output: `4.0
4
2
弓
2026 12 24`
  },
  {
    id: 'python-15',
    phase: 'エラーとモジュール',
    title: '総合：ゲームのお会計（アイテムショップ）',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は辞書・繰り返し・関数を組み合わせ、アイテムショップのお会計プログラムを作る。</p>
<p>SHOP は商品名と価格の辞書、cart は商品名と個数の辞書である。関数 calc_total は cart を順に調べ、SHOP に存在する商品の小計を足す。<code>not in</code> は <code>in</code> の逆の判定を行う演算子であり、未販売の商品を continue で除外する。</p>
<p>割引額は <code>subtotal * coupon // 100</code> で求める。<code>//</code> は割り算の結果の小数部分を切り捨てる演算子である。最後に、合計と所持金を比べて購入の可否を表示する。</p>`,
    code: `SHOP = {"薬草": 30, "毒消し": 50, "鉄の剣": 480, "革の盾": 260}

def calc_total(cart, coupon=0):
    subtotal = 0
    for name, count in cart.items():
        if name not in SHOP:
            print(f"{name} は未販売の商品のため除外する")
            continue
        line = SHOP[name] * count
        print(f"{name} x{count} = {line} G")
        subtotal += line
    discount = subtotal * coupon // 100
    return subtotal - discount

cart = {"薬草": 5, "鉄の剣": 1, "ドラゴンの卵": 1}
wallet = 700
total = calc_total(cart, coupon=10)
print(f"合計: {total} G")
if total <= wallet:
    print(f"購入完了。残り {wallet - total} G")
else:
    print(f"所持金が {total - wallet} G 不足している")
`,
    blank: 'discount = subtotal * coupon // 100',
    placeholder: '# 小計に割引率（%）を掛けて 100 で切り捨て除算し、discount に入れる行',
    token: /discount\s*=\s*subtotal\s*\*\s*coupon\s*\/\/\s*100/,
    hint: '<code>discount = subtotal * coupon // 100</code> と書く。',
    output: `薬草 x5 = 150 G
鉄の剣 x1 = 480 G
ドラゴンの卵 は未販売の商品のため除外する
合計: 567 G
購入完了。残り 133 G`
  },
  {
    id: 'python-16',
    phase: 'Pythonic な書き方',
    title: '真偽値と None',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は値の真偽の判定を確かめ、検索の結果が None かを is で調べる。</p>
<p>Python では、すべての値が True か False として扱われる。0、空の文字列 <code>""</code>、空のリスト <code>[]</code> は False と判定され、それ以外の多くの値は True と判定される。<code>bool()</code> はこの判定の結果を返す。</p>
<p>None は「値が空である」状態を表す特別な値である。関数が結果を返す対象を見つけられたときに限り値を返し、その他の場合は None を返す設計がよく使われる。None との比較には <code>==</code> の代わりに <code>is</code> を使う。<code>a or b</code> は a が False と判定されるときに b を返すため、既定値の指定に使える。</p>`,
    code: `print(bool(0), bool(3))
print(bool(""), bool("剣"))
print(bool([]), bool(["薬草"]))

def find_item(items, name):
    for item in items:
        if item == name:
            return item
    return None

bag = ["薬草", "地図"]
result = find_item(bag, "鍵")
print(result)
if result is None:
    print("鍵は袋の外にある")

nickname = ""
print(nickname or "ゲスト")
`,
    blank: 'if result is None:',
    placeholder: '# result が None かを is で調べる if の行',
    token: /if\s+result\s+is\s+None\s*:/,
    hint: '<code>if result is None:</code> と書く。',
    output: `False True
False True
False True
None
鍵は袋の外にある
ゲスト`
  },
  {
    id: 'python-17',
    phase: 'Pythonic な書き方',
    title: 'Pythonic な繰り返し（enumerate, zip）',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は enumerate と zip を使い、ランキングの順位と得点を表示する。</p>
<p>Pythonic は、Python らしく簡潔で読みやすい書き方を指す言葉である。<code>enumerate(リスト, start=1)</code> は、番号と要素の組を順に返す。番号用の変数を別に用意して足していく書き方より、短く安全である。</p>
<p><code>zip(a, b)</code> は、2つのリストから同じ位置の要素を組にして返す。<code>max(zip(scores, players))</code> は、得点を先頭にした組の中から最大の組を選ぶ。</p>`,
    code: `players = ["アオイ", "ソラ", "リク"]
scores = [1200, 980, 1500]

for rank, name in enumerate(players, start=1):
    print(f"{rank}. {name}")

for name, score in zip(players, scores):
    print(f"{name}: {score}")

best = max(zip(scores, players))
print(f"最高得点: {best[1]} ({best[0]})")
`,
    blank: 'for rank, name in enumerate(players, start=1):',
    placeholder: '# 1 から始まる番号 rank と要素 name を順に取り出す for の行',
    token: /for\s+rank\s*,\s*name\s+in\s+enumerate\(\s*players\s*,\s*start\s*=\s*1\s*\)\s*:/,
    hint: '<code>for rank, name in enumerate(players, start=1):</code> と書く。',
    output: `1. アオイ
2. ソラ
3. リク
アオイ: 1200
ソラ: 980
リク: 1500
最高得点: リク (1500)`
  },
  {
    id: 'python-18',
    phase: 'Pythonic な書き方',
    title: '内包表記',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は内包表記を使い、得点のリストから新しいリストと辞書を1行で作る。</p>
<p>リスト内包表記は、<code>[式 for 変数 in リスト]</code> の形で新しいリストを作る書き方である。for 文と append を組み合わせた処理を1行にまとめる。後ろに <code>if 条件</code> をつけると、条件に合う要素に限り新しいリストに入る。</p>
<p>辞書内包表記は <code>{キー: 値 for …}</code> の形である。<code>[[0] * 3 for _ in range(2)]</code> は、2行3列のマップを作る。<code>_</code> は、繰り返しの回数を数える目的に限り使う変数の名前として慣習的に使われる。</p>`,
    code: `scores = [120, 45, 300, 80, 210]

doubled = [s * 2 for s in scores]
print(doubled)

high = [s for s in scores if s >= 100]
print(high)

names = ["Aoi", "Sora", "Riku", "Mei", "Kai"]
table = {n: s for n, s in zip(names, scores)}
print(table)

grid = [[0] * 3 for _ in range(2)]
print(grid)
`,
    blank: 'high = [s for s in scores if s >= 100]',
    placeholder: '# scores のうち 100 以上の値を集めたリストを high に入れる行',
    token: /high\s*=\s*\[\s*s\s+for\s+s\s+in\s+scores\s+if\s+s\s*>=\s*100\s*\]/,
    hint: '<code>high = [s for s in scores if s &gt;= 100]</code> と書く。',
    output: `[240, 90, 600, 160, 420]
[120, 300, 210]
{'Aoi': 120, 'Sora': 45, 'Riku': 300, 'Mei': 80, 'Kai': 210}
[[0, 0, 0], [0, 0, 0]]`
  },
  {
    id: 'python-19',
    phase: 'Pythonic な書き方',
    title: '参照とコピー',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はリストの代入とコピーの違いを確かめ、入れ子のマップを deepcopy で複製する。</p>
<p>Python の変数は、値そのものの代わりに、値の置き場所を指す「参照」を持つ。<code>party_b = party_a</code> は同じリストを2つの名前で指すため、party_b の変更は party_a にも現れる。<code>is</code> は、2つの名前が同じ値を指すかを調べる。</p>
<p><code>copy()</code> は浅いコピーを作る。浅いコピーは外側のリストを新しく作り、内側のリストは元と共有する。入れ子のデータを完全に複製するときは、<code>copy.deepcopy()</code>（深いコピー）を使う。</p>`,
    code: `import copy

party_a = ["アオイ", "ソラ"]
party_b = party_a
party_b.append("リク")
print(party_a)
print(party_a is party_b)

party_c = party_a.copy()
party_c.append("メイ")
print(party_a)
print(party_c)

map_a = [[0, 0], [0, 0]]
shallow = map_a.copy()
shallow[0][0] = 5
print(map_a)

deep = copy.deepcopy(map_a)
deep[0][0] = 9
print(map_a)
print(deep)
`,
    blank: 'deep = copy.deepcopy(map_a)',
    placeholder: '# map_a の深いコピーを作り、deep に入れる行',
    token: /deep\s*=\s*copy\.deepcopy\(\s*map_a\s*\)/,
    hint: '<code>deep = copy.deepcopy(map_a)</code> と書く。',
    output: `['アオイ', 'ソラ', 'リク']
True
['アオイ', 'ソラ', 'リク']
['アオイ', 'ソラ', 'リク', 'メイ']
[[5, 0], [0, 0]]
[[5, 0], [0, 0]]
[[9, 0], [0, 0]]`
  },
  {
    id: 'python-20',
    phase: '実務の標準ライブラリ',
    title: '実務：collections と statistics',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は Counter でドロップ品を数え、statistics で得点の平均と中央値を求める。</p>
<p>collections は、便利なデータ構造を集めた標準ライブラリである。<code>Counter</code> は要素ごとの出現回数を数え、<code>most_common(n)</code> で多い順に n 個を返す。<code>defaultdict(list)</code> は、初めて使うキーに空のリストを自動で用意する辞書である。</p>
<p>statistics は統計の計算を行う標準ライブラリである。<code>mean</code> は平均、<code>median</code> は中央値、<code>stdev</code> は標準偏差を返す。標準偏差は、値のばらつきの大きさを表す数である。</p>`,
    code: `from collections import Counter, defaultdict
import statistics

drops = ["薬草", "金貨", "薬草", "宝石", "金貨", "薬草"]
counter = Counter(drops)
print(counter.most_common(2))

by_stage = defaultdict(list)
results = [("森", 1200), ("洞窟", 800), ("森", 1500), ("洞窟", 950)]
for stage, score in results:
    by_stage[stage].append(score)
print(dict(by_stage))

scores = [1200, 800, 1500, 950, 1100]
print(statistics.mean(scores))
print(statistics.median(scores))
print(round(statistics.stdev(scores), 1))
`,
    blank: 'counter = Counter(drops)',
    placeholder: '# drops の要素ごとの出現回数を数え、counter に入れる行',
    token: /counter\s*=\s*Counter\(\s*drops\s*\)/,
    hint: '<code>counter = Counter(drops)</code> と書く。',
    output: `[('薬草', 3), ('金貨', 2)]
{'森': [1200, 1500], '洞窟': [800, 950]}
1110
1100
265.5`
  },
  {
    id: 'python-21',
    phase: '実務の標準ライブラリ',
    title: '日時と正規表現',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は datetime でイベントの終了日時を計算し、正規表現でログから日付と得点を取り出す。</p>
<p>datetime は日付と時刻を扱う標準ライブラリである。<code>timedelta</code> は時間の長さを表し、日時に足すと未来の日時になる。<code>strftime("%Y/%m/%d %H:%M")</code> は日時を指定の形の文字列に変える。日付同士の引き算の結果は timedelta になり、<code>.days</code> で日数を取り出せる。</p>
<p>正規表現は、文字列のパターンを記号で表す方法である。<code>\\d</code> は数字1文字、<code>\\w</code> は英数字1文字、<code>{4}</code> は4回の繰り返し、<code>+</code> は1回以上の繰り返しを表す。<code>re.findall</code> は、<code>( )</code> で囲んだ部分の組をすべて返す。</p>`,
    code: `import re
from datetime import date, datetime, timedelta

event_start = datetime(2026, 12, 20, 18, 0)
event_end = event_start + timedelta(days=3, hours=6)
print(event_end.strftime("%Y/%m/%d %H:%M"))

days_left = date(2026, 12, 24) - date(2026, 12, 1)
print(days_left.days)

log = "2026-12-01 Aoi 1200pt, 2026-12-02 Sora 980pt"
pattern = r"(\\d{4}-\\d{2}-\\d{2}) (\\w+) (\\d+)pt"
for day, name, pt in re.findall(pattern, log):
    print(day, name, int(pt))
`,
    blank: 'event_end = event_start + timedelta(days=3, hours=6)',
    placeholder: '# event_start の 3 日と 6 時間後を event_end に入れる行',
    token: /event_end\s*=\s*event_start\s*\+\s*timedelta\(\s*days\s*=\s*3\s*,\s*hours\s*=\s*6\s*\)/,
    hint: '<code>event_end = event_start + timedelta(days=3, hours=6)</code> と書く。',
    output: `2026/12/24 00:00
23
2026-12-01 Aoi 1200
2026-12-02 Sora 980`
  },
  {
    id: 'python-22',
    phase: '実務の標準ライブラリ',
    title: 'ファイルの読み書き',
    type: 'code',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者はセーブデータをテキストファイルに書き込み、読み込んで内容を表示する。</p>
<p><code>open(ファイル名, モード, encoding="utf-8")</code> はファイルを開く関数である。モードの <code>"w"</code> は新規の書き込み（上書き）、<code>"r"</code> は読み込み、<code>"a"</code> は末尾への追記である。<code>with</code> 文を使うと、ブロックの終了時に Python がファイルを自動で閉じる。</p>
<p>ファイルを for 文で回すと、1行ごとに文字列を取り出せる。各行の末尾には改行文字 <code>\\n</code> がつくため、<code>strip()</code> で取り除く。pathlib の <code>Path.read_text()</code> は、ファイル全体を1つの文字列として読み込む。このレッスンはパソコン上で実行する。</p>`,
    code: `from pathlib import Path

save = Path("save.txt")

with open(save, "w", encoding="utf-8") as f:
    f.write("Aoi,12\\n")
    f.write("Sora,8\\n")

with open(save, "r", encoding="utf-8") as f:
    for line in f:
        name, level = line.strip().split(",")
        print(f"{name} はレベル {level}")

with open(save, "a", encoding="utf-8") as f:
    f.write("Riku,15\\n")

print(save.read_text(encoding="utf-8"))
`,
    blank: 'with open(save, "a", encoding="utf-8") as f:',
    placeholder: '# save.txt を追記モードで開く with の行',
    token: /with\s+open\(\s*save\s*,\s*["']a["']\s*,\s*encoding\s*=\s*["']utf-8["']\s*\)\s+as\s+f\s*:/,
    hint: '追記のモードは <code>"a"</code> である。<code>with open(save, "a", encoding="utf-8") as f:</code> と書く。',
    output: `Aoi はレベル 12
Sora はレベル 8
Aoi,12
Sora,8
Riku,15
`
  },
  {
    id: 'python-23',
    phase: '実務の標準ライブラリ',
    title: 'CSV と JSON',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は CSV 形式のスコア表を読み込み、集計結果を JSON 形式の文字列に変換する。</p>
<p>CSV は、値をカンマで区切って並べる表の形式である。<code>csv.DictReader</code> は、1行目を見出しとして各行を辞書に変換する。<code>io.StringIO</code> は、文字列をファイルのように扱う道具である。パソコンでは <code>open("scores.csv")</code> の結果を同じように渡す。CSV から読んだ値は文字列のため、<code>int()</code> で数値に直す。</p>
<p>JSON は、Web の API や設定ファイルで使われるデータの形式である。<code>json.dumps</code> は辞書を JSON の文字列に変換し、<code>json.loads</code> は JSON の文字列を辞書に戻す。<code>ensure_ascii=False</code> を指定すると、日本語がそのまま出力される。</p>`,
    code: `import csv
import io
import json

csv_text = """name,stage,score
Aoi,森,1200
Sora,洞窟,980
Riku,森,1500
"""

reader = csv.DictReader(io.StringIO(csv_text))
rows = [row for row in reader]
for row in rows:
    row["score"] = int(row["score"])
print(rows[0])

summary = {"top": rows[2]["name"], "total": sum([r["score"] for r in rows])}
text = json.dumps(summary, ensure_ascii=False)
print(text)

loaded = json.loads(text)
print(loaded["total"] + 100)
`,
    blank: 'reader = csv.DictReader(io.StringIO(csv_text))',
    placeholder: '# csv_text をファイルのように包み、辞書として読む reader を作る行',
    token: /reader\s*=\s*csv\.DictReader\(\s*io\.StringIO\(\s*csv_text\s*\)\s*\)/,
    hint: '<code>reader = csv.DictReader(io.StringIO(csv_text))</code> と書く。',
    output: `{'name': 'Aoi', 'stage': '森', 'score': 1200}
{"top": "Riku", "total": 3680}
3780`
  },
  {
    id: 'python-24',
    phase: '関数の応用',
    title: '関数の応用（lambda, *args, **kwargs）',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は lambda でカードを強さ順に並べ、可変長の引数を受け取る関数を作る。</p>
<p>lambda は、<code>lambda 引数: 式</code> の形で書く名前を省いた小さな関数である。<code>sort(key=…)</code> に渡すと、Python は各要素に関数を適用した結果で並べ替える。<code>reverse=True</code> は大きい順の指定である。</p>
<p><code>*hits</code> は、位置で渡された任意個の引数をタプルにまとめて受け取る。<code>**stats</code> は、名前つきで渡された任意個の引数を辞書にまとめて受け取る。呼び出し側で <code>total_damage(*base)</code> と書くと、リストの要素が個別の引数として展開される。</p>`,
    code: `cards = [("ドラゴン", 9), ("スライム", 2), ("ゴーレム", 7)]
cards.sort(key=lambda card: card[1], reverse=True)
print(cards)

def total_damage(*hits):
    print(hits)
    return sum(hits)

print(total_damage(10, 25, 7))

def make_character(name, **stats):
    print(name, stats)

make_character("アオイ", hp=120, mp=40, speed=8)

base = [3, 4]
print(total_damage(*base))
`,
    blank: 'cards.sort(key=lambda card: card[1], reverse=True)',
    placeholder: '# 各カードの 2 番目の値（強さ）で大きい順に並べ替える行',
    token: /cards\.sort\(\s*key\s*=\s*lambda\s+card\s*:\s*card\[\s*1\s*\]\s*,\s*reverse\s*=\s*True\s*\)/,
    hint: '<code>cards.sort(key=lambda card: card[1], reverse=True)</code> と書く。',
    output: `[('ドラゴン', 9), ('ゴーレム', 7), ('スライム', 2)]
(10, 25, 7)
42
アオイ {'hp': 120, 'mp': 40, 'speed': 8}
(3, 4)
7`
  },
  {
    id: 'python-25',
    phase: '関数の応用',
    title: 'デコレータ',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は関数の呼び出しを記録するデコレータを作り、会心の一撃の関数に適用する。</p>
<p>Python では、関数も値として変数に入れたり、引数として渡したりできる。デコレータは、関数を受け取り、機能を加えた新しい関数を返す関数である。関数の定義の直前に <code>@デコレータ名</code> と書くと、Python はその関数をデコレータで包む。</p>
<p>この例の wrapper は、元の関数の前後で開始と終了を表示する。<code>*args, **kwargs</code> で引数をそのまま受け渡すため、どのような関数にも使える。<code>functools.wraps</code> は、包んだ後の関数にも元の関数の名前を引き継ぐ。</p>`,
    code: `import functools

def log_call(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"[開始] {func.__name__}{args}")
        result = func(*args, **kwargs)
        print(f"[終了] {func.__name__} -> {result}")
        return result
    return wrapper

@log_call
def critical_hit(power, rate):
    return int(power * rate)

damage = critical_hit(40, 1.5)
print(damage)
`,
    blank: '@log_call',
    placeholder: '# critical_hit に log_call を適用するデコレータの行',
    token: /^@log_call\s*$/m,
    hint: '関数の定義の直前に <code>@log_call</code> と書く。',
    output: `[開始] critical_hit(40, 1.5)
[終了] critical_hit -> 60
60`
  },
  {
    id: 'python-26',
    phase: '関数の応用',
    title: 'イテレータとジェネレータ',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は yield を使い、カウントダウンタイマーのジェネレータを作る。</p>
<p>イテレータは、<code>next()</code> を呼ぶたびに次の値を1つ返すオブジェクトである。for 文は内部でこの仕組みを使う。<code>iter(リスト)</code> はリストからイテレータを作る。</p>
<p>ジェネレータは、<code>yield</code> を含む関数で作るイテレータである。yield は値を1つ返し、関数の実行をその位置で一時停止する。次の値を求められると、続きから再開する。必要な時点で次の値を作るため、大量のデータでもメモリを節約できる。<code>(式 for …)</code> の形のジェネレータ式も同じ性質をもつ。</p>`,
    code: `def countdown(seconds):
    while seconds > 0:
        yield seconds
        seconds -= 1
    yield "スタート"

for t in countdown(3):
    print(t)

timer = countdown(2)
print(next(timer))
print(next(timer))

it = iter(["北", "東", "南"])
print(next(it))

squares = (n * n for n in range(1, 6))
print(sum(squares))
`,
    blank: 'yield seconds',
    placeholder: '# 残り秒数を1つ返して一時停止する行',
    token: /yield\s+seconds/,
    hint: '<code>yield seconds</code> と書く。',
    output: `3
2
1
スタート
2
1
北
55`
  },
  {
    id: 'python-27',
    phase: '関数の応用',
    title: '総合：エラーログ解析ツール',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は正規表現・ジェネレータ・Counter を組み合わせ、ゲームサーバーのエラーログを集計する。</p>
<p>関数 parse は、ログを1行ごとに正規表現で分解し、日付・時刻・レベル・本文の組を yield で返す。<code>re.compile</code> は正規表現を前もって変換し、繰り返しの照合を速くする。<code>\\S+</code> は空白以外の1文字以上を表す。</p>
<p>内包表記でレベルが ERROR の行を選び、Counter でステージごとと時間帯ごとの件数を数える。この流れ（読み込み → 分解 → 抽出 → 集計）は、実務のログ解析の基本の形である。</p>`,
    code: `import re
from collections import Counter

LOG = """2026-11-01 10:02:11 INFO  server started
2026-11-01 10:05:43 ERROR stage=3 player=Aoi texture missing
2026-11-01 10:06:01 WARN  stage=3 fps low
2026-11-01 11:12:09 ERROR stage=5 player=Sora save failed
2026-11-01 11:40:30 ERROR stage=3 player=Riku texture missing
2026-11-01 12:00:00 INFO  daily reset
"""

PATTERN = re.compile(r"^(\\S+) (\\S+) (\\w+)\\s+(.*)$")

def parse(text):
    for line in text.splitlines():
        m = PATTERN.match(line)
        if m:
            yield m.groups()

errors = [r for r in parse(LOG) if r[2] == "ERROR"]
print(f"ERROR 件数: {len(errors)}")

stages = Counter(re.search(r"stage=(\\d+)", r[3]).group(1) for r in errors)
for stage, n in stages.most_common():
    print(f"stage {stage}: {n} 件")

hours = Counter(r[1][:2] for r in errors)
print(dict(hours))
`,
    blank: 'errors = [r for r in parse(LOG) if r[2] == "ERROR"]',
    placeholder: '# parse(LOG) の結果のうち、レベルが ERROR の組を集めて errors に入れる行',
    token: /errors\s*=\s*\[\s*r\s+for\s+r\s+in\s+parse\(\s*LOG\s*\)\s+if\s+r\[\s*2\s*\]\s*==\s*["']ERROR["']\s*\]/,
    hint: '<code>errors = [r for r in parse(LOG) if r[2] == "ERROR"]</code> と書く。',
    output: `ERROR 件数: 3
stage 3: 2 件
stage 5: 1 件
{'10': 1, '11': 2}`
  },
  {
    id: 'python-28',
    phase: 'オブジェクト指向',
    title: 'クラス',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は Hero クラスを定義し、2人の勇者のインスタンスを作って操作する。</p>
<p>クラスは、データ（属性）と処理（メソッド）をまとめた設計図である。クラスから作った個々の実体をインスタンスという。<code>__init__</code> は、インスタンスを作るときに自動で呼ばれる初期化のメソッドである。</p>
<p>self は、メソッドを呼び出したインスタンス自身を指す。<code>self.level = 1</code> は、そのインスタンスの属性 level に 1 を入れる。aoi と sora は同じクラスから作られ、それぞれが別の HP とレベルを持つ。</p>`,
    code: `class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.level = 1

    def take_damage(self, amount):
        self.hp = max(self.hp - amount, 0)
        print(f"{self.name} は {amount} のダメージを受けた。HP {self.hp}")

    def level_up(self):
        self.level += 1
        self.hp += 10
        print(f"{self.name} はレベル {self.level} になった")

aoi = Hero("アオイ", 50)
sora = Hero("ソラ", 40)
aoi.take_damage(15)
aoi.level_up()
sora.take_damage(50)
print(aoi.hp, sora.hp)
`,
    blank: 'self.level = 1',
    placeholder: '# インスタンスの属性 level に 1 を入れる行',
    token: /self\.level\s*=\s*1\b/,
    hint: '<code>self.level = 1</code> と書く。',
    output: `アオイ は 15 のダメージを受けた。HP 35
アオイ はレベル 2 になった
ソラ は 50 のダメージを受けた。HP 0
45 0`
  },
  {
    id: 'python-29',
    phase: 'オブジェクト指向',
    title: 'dataclass と特殊メソッド',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は dataclass でカードのクラスを作り、特殊メソッドで表示・比較・足し算を定義する。</p>
<p><code>@dataclass</code> は、属性の一覧から <code>__init__</code>、<code>__repr__</code>、<code>__eq__</code> を自動で作るデコレータである。<code>name: str</code> のように属性名と型を並べて書く。リストを既定値にするときは <code>field(default_factory=list)</code> を使い、インスタンスごとに新しいリストを用意する。</p>
<p>特殊メソッドは、<code>__名前__</code> の形のメソッドであり、Python の文法と結びつく。<code>__str__</code> は print での表示、<code>__lt__</code> は <code>&lt;</code> の比較、<code>__add__</code> は <code>+</code> の計算を定める。<code>__lt__</code> があると、<code>sorted()</code> でカードを並べられる。</p>`,
    code: `from dataclasses import dataclass, field

@dataclass
class Card:
    name: str
    power: int
    tags: list = field(default_factory=list)

    def __str__(self):
        return f"[{self.name} / {self.power}]"

    def __lt__(self, other):
        return self.power < other.power

    def __add__(self, other):
        return Card(f"{self.name}+{other.name}", self.power + other.power)

fire = Card("炎の竜", 8, ["竜"])
ice = Card("氷の騎士", 5)
print(fire)
print(repr(ice))
print(fire == Card("炎の竜", 8, ["竜"]))
print(ice < fire)
print(fire + ice)
print(sorted([fire, ice])[0])
`,
    blank: '@dataclass',
    placeholder: '# Card クラスに dataclass を適用するデコレータの行',
    token: /^@dataclass\s*$/m,
    hint: 'クラスの定義の直前に <code>@dataclass</code> と書く。',
    output: `[炎の竜 / 8]
Card(name='氷の騎士', power=5, tags=[])
True
True
[炎の竜+氷の騎士 / 13]
[氷の騎士 / 5]`
  },
  {
    id: 'python-30',
    phase: 'オブジェクト指向',
    title: '継承と設計',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は Character クラスを継承して戦士と魔法使いを作り、同じ呼び出しで異なる行動をさせる。</p>
<p>継承は、既存のクラス（親クラス）の属性とメソッドを引き継いで、新しいクラス（子クラス）を作る仕組みである。<code>class Warrior(Character):</code> と書く。子クラスで同じ名前のメソッドを定義し直すことをオーバーライドという。<code>super().__init__(…)</code> は親クラスの初期化を呼び出す。</p>
<p>party の各要素に <code>action()</code> を呼ぶと、要素のクラスに応じた処理が実行される。この性質をポリモーフィズムという。設計では、「戦士はキャラクターの一種である」のように「〜は〜の一種」と言える関係に継承を使う。それ以外の関係では、別のクラスのインスタンスを属性として持たせる方法（コンポジション）を選ぶ。</p>`,
    code: `class Character:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def action(self):
        return f"{self.name} は様子を見ている"

class Warrior(Character):
    def __init__(self, name, hp, power):
        super().__init__(name, hp)
        self.power = power

    def action(self):
        return f"{self.name} は剣で {self.power} のダメージを与えた"

class Mage(Character):
    def action(self):
        return f"{self.name} は炎の魔法を唱えた"

party = [Warrior("アオイ", 120, 30), Mage("ソラ", 80), Character("村人", 10)]
for member in party:
    print(member.action())
print(isinstance(party[0], Character))
`,
    blank: 'super().__init__(name, hp)',
    placeholder: '# 親クラスの初期化に name と hp を渡して呼び出す行',
    token: /super\(\)\.__init__\(\s*name\s*,\s*hp\s*\)/,
    hint: '<code>super().__init__(name, hp)</code> と書く。',
    output: `アオイ は剣で 30 のダメージを与えた
ソラ は炎の魔法を唱えた
村人 は様子を見ている
True`
  },
  {
    id: 'python-31',
    phase: '品質と開発',
    title: '型ヒントとドキュメント',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は関数に型ヒントと docstring をつけ、引数と戻り値の意味を明確にする。</p>
<p>型ヒントは、変数・引数・戻り値の型をコードに書き添える仕組みである。<code>name: str</code> は引数の型、<code>-&gt; int | None</code> は「int か None を返す」という戻り値の型を表す。Python は実行時に型ヒントを検査の対象から外す。mypy などの型チェッカーが、実行前に型の誤りを見つける。</p>
<p>docstring は、関数の先頭に <code>"""</code> で書く説明文である。<code>関数名.__doc__</code> や VS Code のポップアップで読める。Args（引数）と Returns（戻り値）を項目に分けて書く形式が広く使われる。</p>`,
    code: `def find_score(scores: dict[str, int], name: str) -> int | None:
    """プレイヤー名から得点を返す。

    Args:
        scores: プレイヤー名と得点の辞書
        name: 調べるプレイヤー名

    Returns:
        得点。未登録の名前の場合は None
    """
    return scores.get(name)

board: dict[str, int] = {"Aoi": 1200, "Sora": 980}
print(find_score(board, "Aoi"))
print(find_score(board, "Mei"))
print(find_score.__doc__.splitlines()[0])
`,
    blank: 'def find_score(scores: dict[str, int], name: str) -> int | None:',
    placeholder: '# 引数 scores（dict[str, int]）と name（str）をとり、int | None を返す関数 find_score の定義',
    token: /def\s+find_score\(\s*scores\s*:\s*dict\[\s*str\s*,\s*int\s*\]\s*,\s*name\s*:\s*str\s*\)\s*->\s*int\s*\|\s*None\s*:/,
    hint: '<code>def find_score(scores: dict[str, int], name: str) -&gt; int | None:</code> と書く。',
    output: `1200
None
プレイヤー名から得点を返す。`
  },
  {
    id: 'python-32',
    phase: '品質と開発',
    title: 'テスト（unittest）',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は unittest でランク判定の関数のテストを書き、境界の値を含めて動作を確かめる。</p>
<p>テストは、関数が期待どおりの結果を返すかを自動で確かめるコードである。unittest は Python 標準のテストの仕組みである。<code>unittest.TestCase</code> を継承したクラスに、<code>test_</code> で始まるメソッドを並べる。<code>assertEqual(a, b)</code> は a と b が等しいかを確かめる。</p>
<p>1000 と 999 のように、判定が切り替わる境目の値を境界値という。境界値のテストは、<code>&gt;=</code> と <code>&gt;</code> の書き間違いを見つける。パソコンでは <code>python -m unittest</code> でテストを実行する。この例では、結果をコンソールに出すため TextTestRunner を直接使う。</p>`,
    code: `import sys
import unittest

def calc_rank(score):
    if score >= 1000:
        return "S"
    if score >= 700:
        return "A"
    return "B"

class TestCalcRank(unittest.TestCase):
    def test_s_rank(self):
        self.assertEqual(calc_rank(1200), "S")

    def test_border(self):
        self.assertEqual(calc_rank(1000), "S")
        self.assertEqual(calc_rank(999), "A")

    def test_b_rank(self):
        self.assertEqual(calc_rank(100), "B")

suite = unittest.defaultTestLoader.loadTestsFromTestCase(TestCalcRank)
result = unittest.TextTestRunner(stream=sys.stdout, verbosity=2).run(suite)
print(result.wasSuccessful())
`,
    blank: 'self.assertEqual(calc_rank(1200), "S")',
    placeholder: '# calc_rank(1200) が "S" と等しいかを確かめる行',
    token: /self\.assertEqual\(\s*calc_rank\(\s*1200\s*\)\s*,\s*["']S["']\s*\)/,
    hint: '<code>self.assertEqual(calc_rank(1200), "S")</code> と書く。',
    output: `test_b_rank (__main__.TestCalcRank.test_b_rank) ... ok
test_border (__main__.TestCalcRank.test_border) ... ok
test_s_rank (__main__.TestCalcRank.test_s_rank) ... ok

----------------------------------------------------------------------
Ran 3 tests in 0.001s

OK
True`
  },
  {
    id: 'python-33',
    phase: '品質と開発',
    title: '例外設計とロギング',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はショップ用の独自の例外クラスを設計し、logging で処理の記録を出力する。</p>
<p>独自の例外は、Exception を継承したクラスで作る。基底となる ShopError を用意し、OutOfStockError などをその子クラスにすると、呼び出し側は細かい種類ごとにも、まとめても受け止められる。except は上から順に照合されるため、細かい例外を先に書く。</p>
<p>logging は、プログラムの動作の記録（ログ）を出力する標準ライブラリである。print と異なり、INFO・WARNING・ERROR などの深刻度（レベル）をつけ、出力先や書式を一か所で設定できる。<code>basicConfig</code> の format で、レベル名とロガー名を行頭に出す。</p>`,
    code: `import logging
import sys

logging.basicConfig(stream=sys.stdout, level=logging.INFO,
                    format="%(levelname)s %(name)s: %(message)s", force=True)
logger = logging.getLogger("shop")

class ShopError(Exception):
    """ショップ処理の例外の基底クラス"""

class OutOfStockError(ShopError):
    pass

class InsufficientGoldError(ShopError):
    pass

stock = {"薬草": 2}

def buy(item, count, gold):
    have = stock.get(item, 0)
    if have < count:
        raise OutOfStockError(f"在庫不足（要求 {count} 個、在庫 {have} 個）")
    cost = 30 * count
    if gold < cost:
        raise InsufficientGoldError(f"所持金不足（必要 {cost} G、所持 {gold} G）")
    stock[item] = have - count
    logger.info("%s を %d 個購入した", item, count)
    return gold - cost

for item, count, gold in [("薬草", 1, 100), ("薬草", 5, 500), ("薬草", 1, 10)]:
    try:
        buy(item, count, gold)
    except OutOfStockError as e:
        logger.warning("在庫エラー: %s", e)
    except ShopError as e:
        logger.error("購入エラー: %s", e)
`,
    blank: 'class OutOfStockError(ShopError):',
    placeholder: '# ShopError を継承した例外クラス OutOfStockError の定義',
    token: /class\s+OutOfStockError\s*\(\s*ShopError\s*\)\s*:/,
    hint: '<code>class OutOfStockError(ShopError):</code> と書く。',
    output: `INFO shop: 薬草 を 1 個購入した
WARNING shop: 在庫エラー: 在庫不足（要求 5 個、在庫 1 個）
ERROR shop: 購入エラー: 所持金不足（必要 30 G、所持 10 G）`
  },
  {
    id: 'python-34',
    phase: '品質と開発',
    title: '開発環境とパッケージ',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は、実務の Python プロジェクトのフォルダ構成と、開発を支える道具の役割を知る。</p>
<p>実務では、プロジェクトごとに venv を作り、pip でパッケージを入れる。pyproject.toml は、プロジェクトの名前・依存パッケージ・道具の設定をまとめるファイルである。テストには pytest、コードの整形と検査には Ruff、型の検査には mypy がよく使われる。</p>
<pre>game-tools/
├── pyproject.toml
├── src/game_tools/score.py
├── tests/test_score.py
└── main.py</pre>
<p>main.py の <code>if __name__ == "__main__":</code> は、ファイルを直接実行したときに限り中のブロックを動かす書き方である。ほかのファイルから import されたときは、このブロックは待機したままになる。</p>`,
    code: `from game_tools.score import calc_rank


def main() -> None:
    for score in [1200, 850, 300]:
        print(score, calc_rank(score))


if __name__ == "__main__":
    main()
`,
    output: `(.venv) $ pip install -e . pytest ruff mypy
(.venv) $ ruff check .
All checks passed!
(.venv) $ mypy src
Success: no issues found in 2 source files
(.venv) $ pytest -q
...                                                    [100%]
3 passed in 0.02s
(.venv) $ python main.py
1200 S
850 A
300 B`
  },
  {
    id: 'python-35',
    phase: '総合演習',
    title: '総合：ゲームのスコア週次レポート',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はプレイ記録を週ごとにまとめ、プレイヤーの最高点・平均点・回数のランキングを表示する。</p>
<p>関数 week_start は、日付からその週の月曜日を求める。<code>weekday()</code> は月曜日を 0、日曜日を 6 とする曜日の番号を返す。日付から曜日の番号の日数を引くと、その週の月曜日になる。</p>
<p>集計には <code>defaultdict(lambda: defaultdict(list))</code> を使い、「週 → プレイヤー → 得点のリスト」の2段の辞書を作る。各週のプレイヤーは最高点の高い順に並べ、f-string の書式で列をそろえて表示する。</p>`,
    code: `import statistics
from collections import defaultdict
from datetime import date, timedelta

plays = [
    ("2026-11-02", "Aoi", 1200),
    ("2026-11-03", "Sora", 980),
    ("2026-11-04", "Aoi", 1500),
    ("2026-11-06", "Riku", 1320),
    ("2026-11-08", "Sora", 1100),
    ("2026-11-09", "Aoi", 900),
    ("2026-11-12", "Riku", 1700),
    ("2026-11-14", "Sora", 1250),
]

def week_start(day_text):
    d = date.fromisoformat(day_text)
    return d - timedelta(days=d.weekday())

weekly = defaultdict(lambda: defaultdict(list))
for day, name, score in plays:
    weekly[week_start(day)][name].append(score)

for start in sorted(weekly):
    end = start + timedelta(days=6)
    print(f"■ {start:%m/%d} - {end:%m/%d}")
    players = weekly[start]
    ranking = sorted(players.items(), key=lambda kv: max(kv[1]), reverse=True)
    for rank, (name, scores) in enumerate(ranking, start=1):
        avg = statistics.mean(scores)
        print(f"  {rank}. {name:<5} 最高 {max(scores):>5}  平均 {avg:>7.1f}  回数 {len(scores)}")
`,
    blank: 'return d - timedelta(days=d.weekday())',
    placeholder: '# d から曜日の番号の日数を引き、その週の月曜日を返す行',
    token: /return\s+d\s*-\s*timedelta\(\s*days\s*=\s*d\.weekday\(\)\s*\)/,
    hint: '<code>return d - timedelta(days=d.weekday())</code> と書く。',
    output: `■ 11/02 - 11/08
  1. Aoi   最高  1500  平均  1350.0  回数 2
  2. Riku  最高  1320  平均  1320.0  回数 1
  3. Sora  最高  1100  平均  1040.0  回数 2
■ 11/09 - 11/15
  1. Riku  最高  1700  平均  1700.0  回数 1
  2. Sora  最高  1250  平均  1250.0  回数 1
  3. Aoi   最高   900  平均   900.0  回数 1`
  },
  {
    id: 'python-36',
    phase: '総合演習',
    title: '総合：アイテム在庫管理 CLI',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は argparse でコマンドを解釈し、アイテムの追加・使用・一覧表示を行う在庫管理の CLI を作る。</p>
<p>CLI（コマンドラインインターフェース）は、ターミナルに文字のコマンドを入力して操作するプログラムである。argparse は、コマンドの引数を解釈する標準ライブラリである。<code>add_subparsers</code> で add・use・list の3つのサブコマンドを作り、<code>type=int</code> で個数を整数に変換する。</p>
<p>パソコンでは <code>python main.py add 薬草 2</code> のように実行し、<code>run(sys.argv[1:])</code> でコマンドの引数を渡す。この例では、コマンドの文字列を <code>split()</code> で分割したリストを渡し、同じ動作を再現する。</p>`,
    code: `import argparse

inventory = {"薬草": 3}

def build_parser():
    parser = argparse.ArgumentParser(prog="inv")
    sub = parser.add_subparsers(dest="command", required=True)
    add = sub.add_parser("add")
    add.add_argument("item")
    add.add_argument("count", type=int)
    use = sub.add_parser("use")
    use.add_argument("item")
    use.add_argument("count", type=int)
    sub.add_parser("list")
    return parser

def run(argv):
    args = build_parser().parse_args(argv)
    if args.command == "add":
        inventory[args.item] = inventory.get(args.item, 0) + args.count
        print(f"{args.item} を {args.count} 個追加した")
    elif args.command == "use":
        have = inventory.get(args.item, 0)
        if have < args.count:
            print(f"{args.item} は在庫不足（在庫 {have} 個）")
            return
        inventory[args.item] = have - args.count
        print(f"{args.item} を {args.count} 個使った")
    elif args.command == "list":
        for item, count in sorted(inventory.items()):
            print(f"{item}: {count}")

commands = [
    "add 鉄の剣 1",
    "add 薬草 2",
    "use 薬草 4",
    "use 毒消し 1",
    "list",
]
for line in commands:
    print(f"$ inv {line}")
    run(line.split())
`,
    blank: 'args = build_parser().parse_args(argv)',
    placeholder: '# パーサーで argv を解釈し、結果を args に入れる行',
    token: /args\s*=\s*build_parser\(\)\.parse_args\(\s*argv\s*\)/,
    hint: '<code>args = build_parser().parse_args(argv)</code> と書く。',
    output: `$ inv add 鉄の剣 1
鉄の剣 を 1 個追加した
$ inv add 薬草 2
薬草 を 2 個追加した
$ inv use 薬草 4
薬草 を 4 個使った
$ inv use 毒消し 1
毒消し は在庫不足（在庫 0 個）
$ inv list
薬草: 1
鉄の剣: 1`
  },
  {
    id: 'python-37',
    phase: '総合演習',
    title: '総合：注文管理システム',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は dataclass・Enum・独自の例外を組み合わせ、ゲーム内ショップの注文管理システムを作る。</p>
<p>Enum は、決まった選択肢に名前をつけて並べる仕組みである。注文の状態を Status の4つに限ると、文字列の打ち間違いを防げる。<code>@property</code> は、メソッドを属性のように <code>order.total</code> の形で読めるようにするデコレータである。</p>
<p>メソッド change は、許可された状態の移り変わり（受付 → 支払い済み → 配送済み、またはキャンセル）を辞書で定義し、それ以外の変更を OrderError で拒否する。ルールを1か所にまとめる設計にすると、仕様の変更にも強いプログラムになる。</p>`,
    code: `from dataclasses import dataclass, field
from enum import Enum

class Status(Enum):
    NEW = "受付"
    PAID = "支払い済み"
    SHIPPED = "配送済み"
    CANCELED = "キャンセル"

class OrderError(Exception):
    pass

PRICES = {"拡張パック": 300, "限定スキン": 800, "ジェム100個": 120}

@dataclass
class Order:
    order_id: int
    player: str
    items: dict[str, int]
    status: Status = Status.NEW

    @property
    def total(self) -> int:
        return sum(PRICES[name] * qty for name, qty in self.items.items())

    def change(self, new: Status) -> None:
        allowed = {
            Status.NEW: {Status.PAID, Status.CANCELED},
            Status.PAID: {Status.SHIPPED, Status.CANCELED},
        }
        if new not in allowed.get(self.status, set()):
            raise OrderError(f"#{self.order_id}: {self.status.value} から {new.value} への変更は不可")
        self.status = new

@dataclass
class OrderBook:
    orders: list[Order] = field(default_factory=list)

    def create(self, player: str, items: dict[str, int]) -> Order:
        for name in items:
            if name not in PRICES:
                raise OrderError(f"{name} は未登録の商品")
        order = Order(len(self.orders) + 1, player, items)
        self.orders.append(order)
        return order

    def sales(self) -> int:
        return sum(o.total for o in self.orders if o.status in (Status.PAID, Status.SHIPPED))

book = OrderBook()
a = book.create("Aoi", {"拡張パック": 2, "ジェム100個": 1})
b = book.create("Sora", {"限定スキン": 1})
a.change(Status.PAID)
a.change(Status.SHIPPED)
b.change(Status.CANCELED)

for step in [lambda: b.change(Status.PAID), lambda: book.create("Riku", {"伝説の剣": 1})]:
    try:
        step()
    except OrderError as e:
        print(f"エラー: {e}")

for o in book.orders:
    print(f"#{o.order_id} {o.player:<5} {o.total:>5} G  {o.status.value}")
print(f"売上: {book.sales()} G")
`,
    blank: 'if new not in allowed.get(self.status, set()):',
    placeholder: '# 新しい状態が、現在の状態から許可された状態の集合の外にあるかを調べる if の行',
    token: /if\s+new\s+not\s+in\s+allowed\.get\(\s*self\.status\s*,\s*set\(\)\s*\)\s*:/,
    hint: '<code>if new not in allowed.get(self.status, set()):</code> と書く。',
    output: `エラー: #2: キャンセル から 支払い済み への変更は不可
エラー: 伝説の剣 は未登録の商品
#1 Aoi     720 G  配送済み
#2 Sora    800 G  キャンセル
売上: 720 G`
  }
];

SERIES.pydata = [
  {
    id: 'pydata-01',
    phase: 'データ分析の準備',
    title: 'パソコンで動かす準備',
    type: 'info',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者はデータ分析用のライブラリをパソコンに入れ、バージョンを確かめる。</p>
<p>このシリーズでは、NumPy（数値計算）、pandas（表形式のデータの処理）、matplotlib（グラフの描画）を使う。macOS では <code>python3 -m venv .venv</code> と <code>source .venv/bin/activate</code>、Windows では <code>py -m venv .venv</code> と <code>.venv\\Scripts\\activate</code> で環境を作り、<code>pip install numpy pandas matplotlib</code> を実行する。</p>
<p>VS Code では、Microsoft 製の拡張機能「Python」と「Jupyter」を入れる。Jupyter は、コードを小さなセルに分けて実行し、表やグラフをその場で表示するノートブックの形式である。拡張子 .ipynb のファイルを作るとノートブックとして開く。.py のファイルは、ターミナルで <code>python main.py</code> を実行して確かめる。</p>`,
    code: `import numpy as np
import pandas as pd

print("numpy", np.__version__)
print("pandas", pd.__version__)
`,
    output: `(.venv) $ pip install numpy pandas matplotlib
Successfully installed matplotlib-3.9.2 numpy-2.1.3 pandas-2.2.3 ...
(.venv) $ python main.py
numpy 2.1.3
pandas 2.2.3`
  },
  {
    id: 'pydata-02',
    phase: 'データ分析の準備',
    title: 'データの読み込みと可視化',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は pandas で CSV のスコア表を DataFrame に読み込み、文字の棒グラフで得点を見比べる。</p>
<p>pandas は、表形式のデータを扱うライブラリである。DataFrame は、行と列をもつ pandas の表である。<code>pd.read_csv</code> は CSV を読み込み、DataFrame を返す。パソコンではファイル名を渡し、この例では <code>io.StringIO</code> で包んだ文字列を渡す。</p>
<p><code>head(3)</code> は先頭の3行を、<code>shape</code> は（行数, 列数）を返す。<code>df["score"]</code> は列を1本取り出し、<code>mean()</code> で平均を求める。<code>itertuples()</code> は1行ごとの値を順に返すため、得点に応じた長さの「■」を並べると、簡単な棒グラフになる。</p>`,
    code: `import io
import pandas as pd

csv_text = """player,stage,score,time
Aoi,森,1200,95
Sora,洞窟,980,120
Riku,森,1500,88
Mei,火山,1320,101
Kai,洞窟,870,134
"""

df = pd.read_csv(io.StringIO(csv_text))
print(df.head(3))
print(df.shape)
print(df["score"].mean())

for row in df.itertuples():
    bar = "■" * (row.score // 100)
    print(f"{row.player:<5}{bar} {row.score}")
`,
    blank: 'df = pd.read_csv(io.StringIO(csv_text))',
    placeholder: '# csv_text を CSV として読み込み、DataFrame を df に入れる行',
    token: /df\s*=\s*pd\.read_csv\(\s*io\.StringIO\(\s*csv_text\s*\)\s*\)/,
    hint: '<code>df = pd.read_csv(io.StringIO(csv_text))</code> と書く。',
    output: `  player stage  score  time
0    Aoi     森   1200    95
1   Sora    洞窟    980   120
2   Riku     森   1500    88
(5, 4)
1174.0
Aoi  ■■■■■■■■■■■■ 1200
Sora ■■■■■■■■■ 980
Riku ■■■■■■■■■■■■■■■ 1500
Mei  ■■■■■■■■■■■■■ 1320
Kai  ■■■■■■■■ 870`
  },
  {
    id: 'pydata-03',
    phase: 'ファイルとデータ収集',
    title: 'ディレクトリとファイル',
    type: 'code',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は pathlib でフォルダを作り、セーブデータのファイルを作成して一覧を取得する。</p>
<p>ディレクトリは、ファイルを入れるフォルダのことである。pathlib は、ファイルの場所（パス）を Path オブジェクトとして扱う標準ライブラリである。<code>/</code> でパスをつなげ、<code>mkdir()</code> でフォルダを作る。<code>parents=True</code> は途中のフォルダもまとめて作る指定、<code>exist_ok=True</code> はフォルダが既にあるときにエラーを避ける指定である。</p>
<p><code>glob("saves/*.txt")</code> は、パターンに合うファイルを探す。<code>*</code> は任意の文字列を表す。<code>iterdir()</code> はフォルダの直下の項目を返し、<code>stat().st_size</code> はファイルの大きさ（バイト数）を返す。このレッスンはパソコン上で実行する。</p>`,
    code: `from pathlib import Path

base = Path("game_data")
(base / "saves").mkdir(parents=True, exist_ok=True)
(base / "logs").mkdir(exist_ok=True)

for i in range(1, 4):
    (base / "saves" / f"slot{i}.txt").write_text(f"stage={i * 2}", encoding="utf-8")

for path in sorted(base.glob("saves/*.txt")):
    print(path.name, path.stat().st_size, "bytes")

print([p.name for p in sorted(base.iterdir())])
print(Path("game_data/saves/slot1.txt").suffix)
`,
    blank: '(base / "saves").mkdir(parents=True, exist_ok=True)',
    placeholder: '# game_data/saves フォルダを、途中のフォルダも含めて作る行',
    token: /\(\s*base\s*\/\s*["']saves["']\s*\)\.mkdir\(\s*parents\s*=\s*True\s*,\s*exist_ok\s*=\s*True\s*\)/,
    hint: '<code>(base / "saves").mkdir(parents=True, exist_ok=True)</code> と書く。',
    output: `slot1.txt 7 bytes
slot2.txt 7 bytes
slot3.txt 7 bytes
['logs', 'saves']
.txt`
  },
  {
    id: 'pydata-04',
    phase: 'ファイルとデータ収集',
    title: 'with 文と ZIP',
    type: 'code',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は zipfile と with 文でファイルを ZIP にまとめ、中身の確認と展開を行う。</p>
<p>with 文は、ファイルなどの資源を開き、ブロックの終了時に自動で閉じる構文である。途中で例外が起きた場合も、Python は資源を確実に閉じる。zipfile は ZIP 形式の圧縮ファイルを扱う標準ライブラリである。</p>
<p><code>ZipFile("backup.zip", "w", compression=zipfile.ZIP_DEFLATED)</code> は圧縮つきの書き込みで ZIP を開く。<code>write()</code> でファイルを追加し、<code>namelist()</code> で中身の一覧を得る。<code>open()</code> は ZIP 内のファイルをバイト列で読み、<code>decode("utf-8")</code> で文字列に直す。<code>extractall()</code> は指定のフォルダにすべて展開する。このレッスンはパソコン上で実行する。</p>`,
    code: `import zipfile
from pathlib import Path

Path("report.txt").write_text("Aoi,1200\\nSora,980\\n", encoding="utf-8")
Path("memo.txt").write_text("次のイベントは12月", encoding="utf-8")

with zipfile.ZipFile("backup.zip", "w", compression=zipfile.ZIP_DEFLATED) as zf:
    zf.write("report.txt")
    zf.write("memo.txt")

with zipfile.ZipFile("backup.zip") as zf:
    print(zf.namelist())
    with zf.open("report.txt") as f:
        print(f.read().decode("utf-8"))
    zf.extractall("restore")

print(sorted(p.name for p in Path("restore").iterdir()))
`,
    blank: 'with zipfile.ZipFile("backup.zip", "w", compression=zipfile.ZIP_DEFLATED) as zf:',
    placeholder: '# backup.zip を圧縮つきの書き込みモードで開く with の行',
    token: /with\s+zipfile\.ZipFile\(\s*["']backup\.zip["']\s*,\s*["']w["']\s*,\s*compression\s*=\s*zipfile\.ZIP_DEFLATED\s*\)\s+as\s+zf\s*:/,
    hint: '<code>with zipfile.ZipFile("backup.zip", "w", compression=zipfile.ZIP_DEFLATED) as zf:</code> と書く。',
    output: `['report.txt', 'memo.txt']
Aoi,1200
Sora,980

['memo.txt', 'report.txt']`
  },
  {
    id: 'pydata-05',
    phase: 'ファイルとデータ収集',
    title: 'スクレイピング',
    type: 'code',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は requests で Web ページを取得し、BeautifulSoup で HTML から必要な情報を取り出す。</p>
<p>スクレイピングは、Web ページの HTML から情報を自動で取り出す技術である。requests は HTTP 通信のライブラリであり、<code>requests.get(URL)</code> でページを取得する。BeautifulSoup は HTML を解析するライブラリであり、<code>pip install requests beautifulsoup4</code> で入れる。</p>
<p><code>select("#ranking tr")</code> は CSS セレクタで要素を探し、<code>select_one</code> は最初の1つを返す。<code>get_text()</code> は要素の文字を取り出す。スクレイピングの前に、学習者はサイトの利用規約と robots.txt を確認し、アクセスの間隔をあけてサーバーへの負担を抑える。このレッスンはパソコン上で実行する。</p>`,
    code: `import requests
from bs4 import BeautifulSoup

res = requests.get("https://example.com/", timeout=10)
res.raise_for_status()
soup = BeautifulSoup(res.text, "html.parser")
print(res.status_code)
print(soup.title.get_text())

ranking_html = """
<table id="ranking">
  <tr><td class="name">Aoi</td><td class="score">1500</td></tr>
  <tr><td class="name">Sora</td><td class="score">1320</td></tr>
</table>
"""
table = BeautifulSoup(ranking_html, "html.parser")
for tr in table.select("#ranking tr"):
    name = tr.select_one(".name").get_text()
    score = int(tr.select_one(".score").get_text())
    print(name, score)
`,
    blank: 'for tr in table.select("#ranking tr"):',
    placeholder: '# id が ranking の表の各行 tr を順に取り出す for の行',
    token: /for\s+tr\s+in\s+table\.select\(\s*["']#ranking\s+tr["']\s*\)\s*:/,
    hint: '<code>for tr in table.select("#ranking tr"):</code> と書く。',
    output: `200
Example Domain
Aoi 1500
Sora 1320`
  },
  {
    id: 'pydata-06',
    phase: 'グラフ',
    title: '折れ線グラフ',
    type: 'code',
    run: 'static',
    file: 'main.py',
    story: `<p class="lead">学習者は matplotlib で曜日ごとのプレイ人数の折れ線グラフを描き、画像として保存する。</p>
<p>matplotlib は、Python でグラフを描くライブラリである。<code>plt.subplots()</code> は描画領域（Figure）とグラフ（Axes）を作る。<code>ax.plot(x, y)</code> は点を線で結んだ折れ線グラフを描く。<code>marker="o"</code> は各点に丸印をつける指定である。折れ線グラフは、時間の流れに沿った変化を見るのに向く。</p>
<p><code>set_title</code>・<code>set_xlabel</code>・<code>set_ylabel</code> で題名と軸名をつけ、<code>savefig</code> で画像を保存する。日本語を表示するため、<code>rcParams["font.family"]</code> に日本語フォントを指定する。このレッスンはパソコン上で実行する。</p>`,
    code: `import matplotlib.pyplot as plt

days = ["月", "火", "水", "木", "金", "土", "日"]
players = [320, 340, 310, 380, 450, 720, 680]

plt.rcParams["font.family"] = "Hiragino Sans"  # Windows では "Meiryo"
fig, ax = plt.subplots(figsize=(6, 3.5))
ax.plot(days, players, marker="o", label="プレイ人数")
ax.set_title("曜日ごとのプレイ人数")
ax.set_xlabel("曜日")
ax.set_ylabel("人数")
ax.legend()
fig.savefig("players.png", dpi=150)
plt.show()
`,
    blank: 'ax.plot(days, players, marker="o", label="プレイ人数")',
    placeholder: '# days を横軸、players を縦軸にして丸印つきの折れ線を描く行',
    token: /ax\.plot\(\s*days\s*,\s*players\s*,\s*marker\s*=\s*["']o["']/,
    hint: '<code>ax.plot(days, players, marker="o", label="プレイ人数")</code> と書く。',
    output: `players.png が保存され、ウィンドウにグラフが表示される。

  人数
  720 |                   ●
  680 |                       ●
  450 |               ●
  380 |           ●
  340 |   ●
  320 |●      ●
      +--------------------------
       月  火  水  木  金  土  日

月曜から木曜は 300 人台で推移し、金曜に増え、土曜の 720 人で最大になる。`
  },
  {
    id: 'pydata-07',
    phase: 'グラフ',
    title: '条件抽出とヒストグラム',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は条件に合う行を DataFrame から取り出し、得点の分布をヒストグラムで表す。</p>
<p><code>df["score"] &gt;= 1000</code> は、各行が条件を満たすかを True と False の列で返す。この列を <code>df[ ]</code> に渡すと、True の行が残る。複数の条件は <code>&amp;</code>（かつ）や <code>|</code>（または）でつなぎ、各条件を <code>( )</code> で囲む。<code>query()</code> は条件を文字列で書く方法である。</p>
<p>ヒストグラムは、値をいくつかの区間（階級）に分け、区間ごとの個数を棒で表すグラフである。<code>pd.cut</code> は値を区間に分類し、<code>value_counts(sort=False)</code> は区間の順に個数を数える。matplotlib では <code>plt.hist(df["score"], bins=5)</code> で描ける。</p>`,
    code: `import pandas as pd

df = pd.DataFrame({
    "player": ["Aoi", "Sora", "Riku", "Mei", "Kai", "Yui", "Ren", "Nao"],
    "stage": ["森", "洞窟", "森", "火山", "洞窟", "森", "火山", "洞窟"],
    "score": [1200, 980, 1500, 1320, 870, 640, 1450, 1010],
})

high = df[(df["score"] >= 1000) & (df["stage"] != "洞窟")]
print(high)

print(df.query("stage == '洞窟'")["player"].tolist())

bins = [0, 800, 1000, 1200, 1400, 1600]
counts = pd.cut(df["score"], bins=bins, right=False).value_counts(sort=False)
for interval, n in counts.items():
    print(f"{interval.left:>4}-{interval.right:<4} {'#' * n}")
`,
    blank: 'high = df[(df["score"] >= 1000) & (df["stage"] != "洞窟")]',
    placeholder: '# score が 1000 以上、かつ stage が 洞窟 以外の行を high に入れる行',
    token: /high\s*=\s*df\[\s*\(\s*df\[\s*["']score["']\s*\]\s*>=\s*1000\s*\)\s*&\s*\(\s*df\[\s*["']stage["']\s*\]\s*!=\s*["']洞窟["']\s*\)\s*\]/,
    hint: '<code>high = df[(df["score"] &gt;= 1000) &amp; (df["stage"] != "洞窟")]</code> と書く。',
    output: `  player stage  score
0    Aoi     森   1200
2   Riku     森   1500
3    Mei    火山   1320
6    Ren    火山   1450
['Sora', 'Kai', 'Nao']
   0-800  #
 800-1000 ##
1000-1200 #
1200-1400 ##
1400-1600 ##`
  },
  {
    id: 'pydata-08',
    phase: 'NumPy と pandas',
    title: 'NumPy',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は NumPy の配列でスコアをまとめて計算し、2次元の配列でマップを表す。</p>
<p>NumPy は、数値の配列を高速に計算するライブラリである。<code>np.array</code> で作る配列（ndarray）は、<code>scores * 2</code> のように1つの式で全要素を計算できる。この仕組みをベクトル演算という。要素ごとに for 文で計算する方法より速い。</p>
<p><code>scores[scores &gt;= 1000]</code> は、条件を満たす要素を取り出す。<code>argmax()</code> は最大値の位置を返す。<code>np.zeros((3, 4))</code> は3行4列の0の配列を作り、<code>grid[1, 2]</code> で行と列を指定して値を書き換える。</p>`,
    code: `import numpy as np

scores = np.array([1200, 980, 1500, 1320, 870])
print(scores * 2)
print(scores.mean(), scores.max(), scores.argmax())
print(scores[scores >= 1000])

bonus = np.array([1.0, 1.2, 1.0, 1.5, 1.1])
print((scores * bonus).round().astype(int))

grid = np.zeros((3, 4), dtype=int)
grid[1, 2] = 9
print(grid)
print(grid.shape, grid.sum())
`,
    blank: 'print(scores[scores >= 1000])',
    placeholder: '# scores のうち 1000 以上の要素を取り出して表示する行',
    token: /scores\[\s*scores\s*>=\s*1000\s*\]/,
    hint: '<code>print(scores[scores &gt;= 1000])</code> と書く。',
    output: `[2400 1960 3000 2640 1740]
1174.0 1500 2
[1200 1500 1320]
[1200 1176 1500 1980  957]
[[0 0 0 0]
 [0 0 9 0]
 [0 0 0 0]]
(3, 4) 9`
  },
  {
    id: 'pydata-09',
    phase: 'NumPy と pandas',
    title: 'データの結合と散布図・相関',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はプレイヤー表と成績表を結合し、レベル・プレイ時間・得点の関係を散布図と相関で確かめる。</p>
<p><code>pd.merge(左, 右, on="player")</code> は、共通の列 player の値が一致する行同士をつなげる。表計算ソフトの VLOOKUP に近い処理である。2つの表の行の順番が異なっても、キーの値で正しく対応づけられる。</p>
<p>散布図は、2つの値を横軸と縦軸にとり、各データを点で表すグラフである。matplotlib では <code>df.plot.scatter(x="level", y="score")</code> で描ける。<code>corr()</code> は列同士の相関係数を表にする。相関係数は -1 から 1 の値をとり、1 に近いほど「一方が大きいと他方も大きい」関係が強い。</p>`,
    code: `import pandas as pd

players = pd.DataFrame({
    "player": ["Aoi", "Sora", "Riku", "Mei", "Kai"],
    "level": [12, 8, 18, 15, 6],
})
results = pd.DataFrame({
    "player": ["Riku", "Aoi", "Kai", "Mei", "Sora"],
    "play_hours": [42, 30, 9, 35, 18],
    "score": [1500, 1200, 870, 1320, 980],
})

df = pd.merge(players, results, on="player")
print(df)
print(df[["level", "play_hours", "score"]].corr().round(2))

for row in df.sort_values("level").itertuples():
    print(f"Lv{row.level:>2} |" + " " * (row.score // 100 - 8) + "●")
`,
    blank: 'df = pd.merge(players, results, on="player")',
    placeholder: '# players と results を列 player で結合し、df に入れる行',
    token: /df\s*=\s*pd\.merge\(\s*players\s*,\s*results\s*,\s*on\s*=\s*["']player["']\s*\)/,
    hint: '<code>df = pd.merge(players, results, on="player")</code> と書く。',
    output: `  player  level  play_hours  score
0    Aoi     12          30   1200
1   Sora      8          18    980
2   Riku     18          42   1500
3    Mei     15          35   1320
4    Kai      6           9    870
            level  play_hours  score
level        1.00        0.99   1.00
play_hours   0.99        1.00   0.99
score        1.00        0.99   1.00
Lv 6 |●
Lv 8 | ●
Lv12 |    ●
Lv15 |     ●
Lv18 |       ●`
  },
  {
    id: 'pydata-10',
    phase: 'NumPy と pandas',
    title: '集計と棒グラフ',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は groupby でステージごとのプレイ回数・平均点・クリア率を集計し、棒グラフで比べる。</p>
<p><code>groupby("stage")</code> は、stage の値が同じ行をグループにまとめる。<code>agg()</code> は、グループごとに複数の集計をまとめて行う。<code>plays=("score", "count")</code> は「score 列の個数を plays という列にする」という指定である。clear 列は 1（成功）と 0（失敗）のため、平均がそのままクリア率になる。</p>
<p>棒グラフは、項目ごとの量を棒の長さで比べるグラフである。matplotlib では <code>summary["avg_score"].plot.bar()</code> で描ける。この例では <code>sort_values</code> で平均点の高い順に並べ、文字の棒で表す。</p>`,
    code: `import pandas as pd

df = pd.DataFrame({
    "stage": ["森", "洞窟", "森", "火山", "洞窟", "森", "火山", "洞窟"],
    "clear": [1, 0, 1, 1, 1, 0, 0, 1],
    "score": [1200, 980, 1500, 1320, 870, 640, 1450, 1010],
})

summary = df.groupby("stage").agg(
    plays=("score", "count"), avg_score=("score", "mean"), clear_rate=("clear", "mean")
)
print(summary.round(2))

for stage, row in summary.sort_values("avg_score", ascending=False).iterrows():
    print(f"{stage:　<3}{'■' * int(row.avg_score // 100)} {row.avg_score:.0f}")
`,
    blank: `summary = df.groupby("stage").agg(
    plays=("score", "count"), avg_score=("score", "mean"), clear_rate=("clear", "mean")
)`,
    placeholder: '# stage ごとに件数・平均点・クリア率を集計し、summary に入れる文（3行）',
    token: /summary\s*=\s*df\.groupby\(\s*["']stage["']\s*\)\.agg\(\s*plays\s*=\s*\(\s*["']score["']\s*,\s*["']count["']\s*\)\s*,\s*avg_score\s*=\s*\(\s*["']score["']\s*,\s*["']mean["']\s*\)\s*,\s*clear_rate\s*=\s*\(\s*["']clear["']\s*,\s*["']mean["']\s*\)\s*,?\s*\)/,
    hint: '<code>summary = df.groupby("stage").agg(plays=("score", "count"), avg_score=("score", "mean"), clear_rate=("clear", "mean"))</code> と書く。',
    output: `       plays  avg_score  clear_rate
stage                              
森          3    1113.33        0.67
洞窟         3     953.33        0.67
火山         2    1385.00        0.50
火山　■■■■■■■■■■■■■ 1385
森　　■■■■■■■■■■■ 1113
洞窟　■■■■■■■■■ 953`
  },
  {
    id: 'pydata-11',
    phase: 'NumPy と pandas',
    title: '欠損値と重複の処理',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はスコア表の欠損値と重複を見つけ、削除と補完でデータを整える。</p>
<p>欠損値は、記録の漏れなどで値が空になった箇所である。pandas は欠損値を NaN（Not a Number）で表す。<code>isna().sum()</code> は列ごとの欠損値の数を返す。<code>dropna(subset=["time"])</code> は time が欠損した行を削除し、<code>fillna(値)</code> は欠損値を指定の値で埋める。</p>
<p>重複は、同じ内容の行が2回以上記録された状態である。<code>drop_duplicates()</code> は2回目以降の行を削除する。分析の結果はデータの質に左右されるため、集計の前にこの整える作業（データクレンジング）を行う。</p>`,
    code: `import numpy as np
import pandas as pd

df = pd.DataFrame({
    "player": ["Aoi", "Sora", "Riku", "Sora", "Mei"],
    "score": [1200, np.nan, 1500, np.nan, 1320],
    "time": [95, 120, np.nan, 120, 101],
})

print(df.isna().sum())
df = df.drop_duplicates()
print(len(df))
df["score"] = df["score"].fillna(df["score"].mean())
df = df.dropna(subset=["time"])
print(df)
`,
    blank: 'df = df.drop_duplicates()',
    placeholder: '# 重複した行を削除した表を df に入れ直す行',
    token: /df\s*=\s*df\.drop_duplicates\(\s*\)/,
    hint: '<code>df = df.drop_duplicates()</code> と書く。',
    output: `player    0
score     2
time      1
dtype: int64
4
  player   score   time
0    Aoi  1200.0   95.0
1   Sora  1340.0  120.0
4    Mei  1320.0  101.0`
  },
  {
    id: 'pydata-12',
    phase: '統計',
    title: '記述統計',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は describe で得点の要約統計量を求め、四分位範囲を使って外れ値を見つける。</p>
<p>記述統計は、データの特徴を平均やばらつきなどの数で要約する方法である。<code>describe()</code> は、個数（count）・平均（mean）・標準偏差（std）・最小値・四分位数・最大値をまとめて返す。25% の値を第1四分位数、75% の値を第3四分位数という。</p>
<p>この例の 2900 は、ほかと比べて極端に大きい値（外れ値）である。平均は外れ値の影響を強く受け、中央値は影響を受けにくい。四分位範囲（IQR）は第3四分位数と第1四分位数の差であり、IQR の 1.5 倍を超えて外側にある値を外れ値とみなす方法が広く使われる。</p>`,
    code: `import pandas as pd

scores = pd.Series([1200, 980, 1500, 1320, 870, 640, 1450, 1010, 2900], name="score")

print(scores.describe().round(1))
print("中央値:", scores.median())
print("最頻値の例:", pd.Series([3, 5, 5, 2, 5, 3]).mode().tolist())

q1, q3 = scores.quantile([0.25, 0.75])
iqr = q3 - q1
outliers = scores[(scores < q1 - 1.5 * iqr) | (scores > q3 + 1.5 * iqr)]
print("外れ値:", outliers.tolist())
`,
    blank: 'iqr = q3 - q1',
    placeholder: '# 第3四分位数から第1四分位数を引き、iqr に入れる行',
    token: /iqr\s*=\s*q3\s*-\s*q1/,
    hint: '<code>iqr = q3 - q1</code> と書く。',
    output: `count       9.0
mean     1318.9
std       655.4
min       640.0
25%       980.0
50%      1200.0
75%      1450.0
max      2900.0
Name: score, dtype: float64
中央値: 1200.0
最頻値の例: [5]
外れ値: [2900]`
  },
  {
    id: 'pydata-13',
    phase: '統計',
    title: '相関係数とクロス集計',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は練習回数と得点の相関係数を求め、職業とクリア結果のクロス集計表を作る。</p>
<p>相関係数は、2つの数値の直線的な関係の強さを -1 から 1 で表す。<code>df["practice"].corr(df["score"])</code> は2列の相関係数を返す。相関は「一緒に変化する」ことを示す指標であり、原因と結果の関係（因果関係）の証明とは別のものである。</p>
<p>クロス集計は、2つの分類の組み合わせごとに件数を数えた表である。<code>pd.crosstab(行, 列)</code> で作る。<code>normalize="index"</code> を指定すると、各行の合計を 1 とした割合の表になる。</p>`,
    code: `import pandas as pd

df = pd.DataFrame({
    "job": ["剣士", "魔法使い", "剣士", "弓使い", "魔法使い", "剣士", "弓使い", "魔法使い"],
    "stage": ["森", "森", "洞窟", "洞窟", "洞窟", "森", "森", "洞窟"],
    "clear": ["成功", "成功", "失敗", "成功", "成功", "失敗", "成功", "失敗"],
    "practice": [3, 8, 2, 6, 9, 1, 7, 4],
    "score": [900, 1400, 700, 1200, 1500, 600, 1300, 1000],
})

print(round(df["practice"].corr(df["score"]), 3))
print(pd.crosstab(df["job"], df["clear"]))
print(pd.crosstab(df["stage"], df["clear"], normalize="index").round(2))
`,
    blank: 'print(pd.crosstab(df["job"], df["clear"]))',
    placeholder: '# job を行、clear を列にしたクロス集計表を表示する行',
    token: /pd\.crosstab\(\s*df\[\s*["']job["']\s*\]\s*,\s*df\[\s*["']clear["']\s*\]\s*\)/,
    hint: '<code>print(pd.crosstab(df["job"], df["clear"]))</code> と書く。',
    output: `0.995
clear  失敗  成功
job          
剣士      2   1
弓使い     0   2
魔法使い    1   2
clear    失敗    成功
stage            
森      0.25  0.75
洞窟     0.50  0.50`
  },
  {
    id: 'pydata-14',
    phase: '統計',
    title: 'グループ比較',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はステージの2つの設計案 A と B のクリア時間を比べ、平均の差と効果量を求める。</p>
<p>2つの案を実際のプレイヤーに試してもらい、結果を比べる方法を A/B テストという。<code>groupby("version")["clear_time"].agg([…])</code> は、案ごとに件数・平均・標準偏差・最小値・最大値をまとめて求める。<code>df.loc[条件, 列名]</code> は、条件に合う行の指定の列を取り出す。</p>
<p>平均の差に加えて、ばらつきの大きさも比べる必要がある。効果量 d は、平均の差を2つのグループの標準偏差の平均的な大きさで割った値であり、0.8 以上で「大きな差」とみなす目安がある。パソコンでは SciPy の <code>scipy.stats.ttest_ind(a, b)</code> で、差が偶然の範囲かを確かめる t 検定も行える。</p>`,
    code: `import pandas as pd

df = pd.DataFrame({
    "version": ["A"] * 5 + ["B"] * 5,
    "clear_time": [312, 298, 335, 301, 320, 280, 265, 290, 272, 284],
})

stats = df.groupby("version")["clear_time"].agg(["count", "mean", "std", "min", "max"])
print(stats.round(1))

a = df.loc[df["version"] == "A", "clear_time"]
b = df.loc[df["version"] == "B", "clear_time"]
diff = a.mean() - b.mean()
print(f"平均の差: {diff:.1f} 秒")

pooled = ((a.var() + b.var()) / 2) ** 0.5
print(f"効果量 d: {diff / pooled:.2f}")
`,
    blank: 'stats = df.groupby("version")["clear_time"].agg(["count", "mean", "std", "min", "max"])',
    placeholder: '# version ごとに clear_time の件数・平均・標準偏差・最小値・最大値を求め、stats に入れる行',
    token: /stats\s*=\s*df\.groupby\(\s*["']version["']\s*\)\[\s*["']clear_time["']\s*\]\.agg\(\s*\[\s*["']count["']\s*,\s*["']mean["']\s*,\s*["']std["']\s*,\s*["']min["']\s*,\s*["']max["']\s*\]\s*\)/,
    hint: '<code>stats = df.groupby("version")["clear_time"].agg(["count", "mean", "std", "min", "max"])</code> と書く。',
    output: `         count   mean   std  min  max
version                              
A            5  313.2  15.0  298  335
B            5  278.2   9.9  265  290
平均の差: 35.0 秒
効果量 d: 2.75`
  },
  {
    id: 'pydata-15',
    phase: '機械学習',
    title: '機械学習の基礎とデータ準備',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はプレイ記録を特徴量と正解に分け、訓練用とテスト用に分割して標準化する。</p>
<p>機械学習は、データから規則を自動で学び、未知のデータの予測に使う技術である。予測の手がかりにする列を特徴量（X）、予測したい列を正解ラベル（y）という。モデルの実力を公平に測るため、データを学習用の訓練データと、評価用のテストデータに分ける。</p>
<p>標準化は、各特徴量から平均を引き、標準偏差で割って、平均 0・標準偏差 1 にそろえる処理である。単位の異なる特徴量を同じ尺度で扱える。平均と標準偏差は訓練データから求め、同じ値でテストデータも変換する。パソコンでは scikit-learn の <code>train_test_split</code> と <code>StandardScaler</code> が同じ処理を行う。</p>`,
    code: `import numpy as np
import pandas as pd

df = pd.DataFrame({
    "level": [3, 8, 12, 5, 15, 20, 7, 18, 10, 25],
    "hours": [2, 6, 10, 3, 14, 22, 5, 17, 8, 30],
    "clear": [0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
})

X = df[["level", "hours"]].to_numpy(dtype=float)
y = df["clear"].to_numpy()

test_mask = np.arange(len(df)) % 5 == 4
X_train, X_test = X[~test_mask], X[test_mask]
y_train, y_test = y[~test_mask], y[test_mask]
print(X_train.shape, X_test.shape)
print(y_train, y_test)

mean = X_train.mean(axis=0)
std = X_train.std(axis=0)
X_train_s = (X_train - mean) / std
X_test_s = (X_test - mean) / std
print(mean.round(2), std.round(2))
print(X_test_s.round(2))
`,
    blank: 'X_train_s = (X_train - mean) / std',
    placeholder: '# 訓練データから平均を引き、標準偏差で割った結果を X_train_s に入れる行',
    token: /X_train_s\s*=\s*\(\s*X_train\s*-\s*mean\s*\)\s*\/\s*std/,
    hint: '<code>X_train_s = (X_train - mean) / std</code> と書く。',
    output: `(8, 2) (2, 2)
[0 0 1 0 1 0 1 1] [1 1]
[10.38  9.12] [5.63 6.57]
[[0.82 0.74]
 [2.6  3.18]]`
  },
  {
    id: 'pydata-16',
    phase: '機械学習',
    title: '線形回帰',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者は最小二乗法でプレイ時間からレベルを予測する直線を求め、決定係数で当てはまりを評価する。</p>
<p>線形回帰は、データに最もよく合う直線 <code>y = w × x + b</code> を求める手法である。w を傾き（重み）、b を切片という。最小二乗法は、予測と実際の値の差（残差）の2乗の合計が最小になる w と b を選ぶ方法である。<code>np.linalg.lstsq</code> がこの計算を行う。</p>
<p>決定係数 R² は、モデルがデータのばらつきをどれほど説明するかを 0 から 1 で表す指標であり、1 に近いほど当てはまりがよい。求めた式に新しい x を入れると、未知の値を予測できる。scikit-learn では <code>LinearRegression().fit(X, y)</code> が同じ計算を行う。</p>`,
    code: `import numpy as np

hours = np.array([1, 2, 3, 5, 6, 8, 10, 12], dtype=float)
level = np.array([3, 5, 6, 9, 11, 14, 17, 21], dtype=float)

X = np.column_stack([hours, np.ones_like(hours)])
(w, b), *_ = np.linalg.lstsq(X, level, rcond=None)
print(f"level = {w:.3f} * hours + {b:.3f}")

pred = w * hours + b
r2 = 1 - ((level - pred) ** 2).sum() / ((level - level.mean()) ** 2).sum()
print(f"決定係数 R^2: {r2:.3f}")
print(f"15 時間プレイ後の予測レベル: {w * 15 + b:.1f}")
`,
    blank: '(w, b), *_ = np.linalg.lstsq(X, level, rcond=None)',
    placeholder: '# 最小二乗法で傾き w と切片 b を求める行',
    token: /\(\s*w\s*,\s*b\s*\)\s*,\s*\*_\s*=\s*np\.linalg\.lstsq\(\s*X\s*,\s*level\s*,\s*rcond\s*=\s*None\s*\)/,
    hint: '<code>(w, b), *_ = np.linalg.lstsq(X, level, rcond=None)</code> と書く。',
    output: `level = 1.598 * hours + 1.364
決定係数 R^2: 0.997
15 時間プレイ後の予測レベル: 25.3`
  },
  {
    id: 'pydata-17',
    phase: '機械学習',
    title: 'ロジスティック回帰',
    type: 'code',
    run: 'python',
    file: 'main.py',
    story: `<p class="lead">学習者はロジスティック回帰を NumPy で実装し、レベルからステージのクリア確率を予測する。</p>
<p>ロジスティック回帰は、「成功か失敗か」のような2つの分類の確率を予測する手法である。シグモイド関数 <code>1 / (1 + e^(-z))</code> は、どのような z も 0 から 1 の値に変換する。この値をクリアの確率とみなし、0.5 以上を「クリア」と予測する。</p>
<p>学習には勾配降下法を使う。勾配降下法は、予測の誤差が小さくなる向きへ w と b を小さな幅で動かす計算を繰り返す方法である。0.1 は1回に動かす幅（学習率）である。パソコンでは scikit-learn の <code>LogisticRegression().fit(X, y)</code> と <code>predict_proba</code> が同じ役割を担う。</p>`,
    code: `import numpy as np

level = np.array([3, 8, 12, 5, 15, 20, 7, 18, 10, 25, 4, 16], dtype=float)
clear = np.array([0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1], dtype=float)

mu, sigma = level.mean(), level.std()
x = (level - mu) / sigma

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

w, b = 0.0, 0.0
for step in range(2000):
    p = sigmoid(w * x + b)
    w -= 0.1 * ((p - clear) * x).mean()
    b -= 0.1 * (p - clear).mean()

pred = (sigmoid(w * x + b) >= 0.5).astype(int)
print("予測:", pred)
print("正解率:", (pred == clear).mean())
for lv in [6, 9, 14]:
    prob = sigmoid(w * (lv - mu) / sigma + b)
    print(f"Lv{lv} のクリア確率: {prob:.2f}")
`,
    blank: 'w -= 0.1 * ((p - clear) * x).mean()',
    placeholder: '# 誤差と x の積の平均に学習率 0.1 を掛け、w から引く行',
    token: /w\s*-=\s*0\.1\s*\*\s*\(\s*\(\s*p\s*-\s*clear\s*\)\s*\*\s*x\s*\)\.mean\(\)/,
    hint: '<code>w -= 0.1 * ((p - clear) * x).mean()</code> と書く。',
    output: `予測: [0 0 1 0 1 1 0 1 1 1 0 1]
正解率: 1.0
Lv6 のクリア確率: 0.04
Lv9 のクリア確率: 0.43
Lv14 のクリア確率: 0.99`
  }
];
