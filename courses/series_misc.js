SERIES.sql = (function () {
  const DB = `CREATE TABLE players (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER,
  prefecture TEXT,
  joined_on TEXT,
  left_on TEXT,
  bonus INTEGER
);
INSERT INTO players VALUES
  (1, 'Aoi', 15, '東京', '2026-01-05', NULL, 1),
  (2, 'Haru', 17, '大阪', '2026-01-12', '2026-04-20', 0),
  (3, 'Sora', 14, '東京', '2026-02-03', NULL, 1),
  (4, 'Riku', 19, '福岡', '2026-02-15', '2026-03-30', 0),
  (5, 'Mei', 16, '大阪', '2026-03-01', NULL, 1),
  (6, 'Yuto', 21, '北海道', '2026-03-10', '2026-05-02', 0),
  (7, 'Hina', 13, '東京', '2026-04-02', NULL, 0),
  (8, 'Kaito', 18, '福岡', '2026-04-18', NULL, 1),
  (9, 'Rin', 22, '大阪', '2026-05-06', '2026-06-01', 0),
  (10, 'Sota', 16, '北海道', '2026-05-20', NULL, 1);

CREATE TABLE games (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  genre TEXT,
  price INTEGER
);
INSERT INTO games VALUES
  (1, 'Star Runner', 'アクション', 1200),
  (2, 'Cube Dungeon', 'RPG', 2400),
  (3, 'Puzzle Garden', 'パズル', 600),
  (4, 'Speed Kart', 'レース', 1800),
  (5, 'Card Battle', 'カード', 900),
  (6, 'Space Farm', 'シミュレーション', 1500);

CREATE TABLE purchases (
  id INTEGER PRIMARY KEY,
  player_id INTEGER,
  game_id INTEGER,
  amount INTEGER,
  purchased_on TEXT
);
INSERT INTO purchases VALUES
  (1, 1, 1, 1200, '2026-01-10'),
  (2, 1, 3, 600, '2026-02-02'),
  (3, 2, 2, 2400, '2026-01-20'),
  (4, 3, 1, 1200, '2026-02-10'),
  (5, 3, 4, 1800, '2026-03-05'),
  (6, 4, 3, 600, '2026-02-20'),
  (7, 5, 2, 2400, '2026-03-08'),
  (8, 5, 5, 900, '2026-04-11'),
  (9, 1, 2, 2400, '2026-04-15'),
  (10, 6, 1, 1200, '2026-03-15'),
  (11, 8, 4, 1800, '2026-04-25'),
  (12, 8, 2, 2400, '2026-05-03'),
  (13, 3, 5, 900, '2026-05-10'),
  (14, 10, 3, 600, '2026-05-25'),
  (15, 5, 4, 1800, '2026-06-02'),
  (16, 8, 5, 900, '2026-06-08'),
  (17, 9, 1, 1200, '2026-05-12'),
  (18, 1, 4, 1800, '2026-06-15');

CREATE TABLE scores (
  id INTEGER PRIMARY KEY,
  player_id INTEGER,
  game_id INTEGER,
  score INTEGER,
  played_on TEXT
);
INSERT INTO scores VALUES
  (1, 1, 1, 3200, '2026-01-11'),
  (2, 1, 1, 4500, '2026-02-01'),
  (3, 2, 2, 2800, '2026-01-21'),
  (4, 3, 1, 5100, '2026-02-11'),
  (5, 3, 4, 3900, '2026-03-06'),
  (6, 4, 3, 1500, '2026-02-21'),
  (7, 5, 2, 4200, '2026-03-09'),
  (8, 5, 5, 2600, '2026-04-12'),
  (9, 7, 3, 3300, '2026-04-05'),
  (10, 8, 4, 4800, '2026-04-26'),
  (11, 8, 2, 3600, '2026-05-04'),
  (12, 1, 2, 2900, '2026-04-16'),
  (13, 6, 1, 2100, '2026-03-16'),
  (14, 10, 3, 3700, '2026-05-26'),
  (15, 3, 1, 5600, '2026-05-12'),
  (16, 9, 1, 1800, '2026-05-13');`;

  const LOG = `CREATE TABLE play_log (
  log_id INTEGER PRIMARY KEY,
  player_name TEXT,
  player_pref TEXT,
  game_title TEXT,
  game_genre TEXT,
  score INTEGER
);
INSERT INTO play_log VALUES
  (1, 'Aoi', '東京', 'Star Runner', 'アクション', 3200),
  (2, 'Aoi', '東京', 'Cube Dungeon', 'RPG', 2900),
  (3, 'Sora', '東京', 'Star Runner', 'アクション', 5100),
  (4, 'Mei', '大阪', 'Cube Dungeon', 'RPG', 4200),
  (5, 'Sora', '東京', 'Speed Kart', 'レース', 3900),
  (6, 'Mei', '大阪', 'Star Runner', 'アクション', 2600);`;

  const L = (o) => Object.assign({ type: 'code', run: 'sql', file: 'query.sql', ctx: { sql: DB } }, o);

  return [
    {
      id: 'sql-01',
      phase: 'SQL の準備',
      title: 'パソコンで動かす準備',
      type: 'info',
      run: 'static',
      file: 'query.sql',
      story: `<p class="lead">学習者は SQLite と DB Browser for SQLite をパソコンに入れ、SQL を実行する環境を整える。</p>
<p>SQL は、データベースの表（テーブル）からデータを取り出したり、書きかえたりするための言語である。SQLite は、データベース全体を1つのファイルに保存する小型のデータベースである。DB Browser for SQLite は、SQLite のテーブルを画面で確かめ、SQL を実行する無料のアプリである。</p>
<ul>
<li><strong>macOS</strong>：sqlite3 は最初から入っている。新しい版は Homebrew の <code>brew install sqlite</code> で入る。DB Browser は <code>brew install --cask db-browser-for-sqlite</code> で入る。</li>
<li><strong>Windows</strong>：<code>winget install SQLite.SQLite</code> で sqlite3 が入る。DB Browser は <code>winget install DBBrowserForSQLite.DBBrowserForSQLite</code> で入る。どちらも公式サイト（sqlite.org、sqlitebrowser.org）からも入手できる。</li>
<li><strong>版の確認</strong>：ターミナルで <code>sqlite3 --version</code> を実行する。</li>
</ul>
<p>VS Code では、拡張機能「SQLite Viewer」がデータベースファイルの中身を表で示す。SQL のファイルは、ターミナルで <code>sqlite3 game.db &lt; query.sql</code> と入力して実行する。このコースのエディタは、ブラウザの中の SQLite で SQL を実行し、最後の SELECT の結果を表で示す。</p>`,
      code: `SELECT 'Hello World' AS message;`,
      output: `$ sqlite3 --version
3.46.1 2024-08-13 09:16:08

$ sqlite3 game.db < query.sql
Hello World`
    },
    L({
      id: 'sql-02',
      phase: 'SQL の基礎',
      title: 'SELECT の基礎',
      story: `<p class="lead">学習者は SELECT 文で players テーブルから name 列と age 列を取り出す。</p>
<p>テーブルは、行と列からなる表である。1行が1件のデータ、1列が1つの項目を表す。このコースのデータベースは、ゲームサービスの会員（players）、ゲーム（games）、購入（purchases）、スコア（scores）の4つのテーブルを持つ。</p>
<p>SELECT 文は、テーブルからデータを取り出す命令である。SELECT の後に列名を書き、FROM の後にテーブル名を書く。すべての列を取り出すときは、列名の代わりに <code>*</code> を書く。文の終わりにはセミコロンを付ける。</p>
<pre>SELECT 列名1, 列名2 FROM テーブル名;</pre>`,
      code: `-- 会員の名前と年齢を表示する
SELECT name, age
FROM players;`,
      blank: 'SELECT name, age',
      placeholder: '-- name 列と age 列を選ぶ部分が入る',
      token: /SELECT\s+name\s*,\s*age\s/i,
      hint: '<code>SELECT name, age</code> と書く。複数の列名はカンマで区切る。'
    }),
    L({
      id: 'sql-03',
      phase: 'SQL の基礎',
      title: '条件の組み合わせと並び替え',
      story: `<p class="lead">学習者は WHERE で大阪に住む16歳以上の会員を選び、ORDER BY で年齢の高い順に並べる。</p>
<p>WHERE は、条件に合う行に限り取り出す句である。比較には <code>=</code>（等しい）、<code>&lt;&gt;</code>（異なる）、<code>&gt;=</code>（以上）、<code>&lt;</code>（未満）などを使う。文字列は <code>'</code> で囲む。AND は両方の条件を満たす行を、OR はどちらか一方の条件を満たす行を選ぶ。</p>
<p>ORDER BY は、行の並び順を決める句である。ASC は小さい順（昇順）、DESC は大きい順（降順）を表す。LIMIT 3 と書くと、結果は先頭の3行に絞られる。</p>`,
      code: `SELECT name, age, prefecture
FROM players
WHERE prefecture = '大阪' AND age >= 16
ORDER BY age DESC;`,
      blank: "WHERE prefecture = '大阪' AND age >= 16",
      placeholder: '-- 大阪に住み、16歳以上という2つの条件が入る',
      token: /WHERE\s+prefecture\s*=\s*'大阪'\s+AND\s+age\s*>=\s*16/i,
      hint: "<code>WHERE prefecture = '大阪' AND age &gt;= 16</code> と書く。2つの条件を AND でつなぐ。"
    }),
    L({
      id: 'sql-04',
      phase: 'SQL の基礎',
      title: '集計関数',
      story: `<p class="lead">学習者は集計関数を使い、スコアの件数・合計・平均・最高点を1行にまとめる。</p>
<p>集計関数は、複数の行の値をまとめて1つの値にする関数である。COUNT は行の数、SUM は合計、AVG は平均、MAX は最大値、MIN は最小値を求める。<code>COUNT(*)</code> はすべての行を数える。</p>
<p>AS は、結果の列に別名を付けるキーワードである。ROUND(値, 1) は、値を小数第1位までに丸める関数である。</p>`,
      code: `SELECT
  COUNT(*) AS plays,
  SUM(score) AS total,
  ROUND(AVG(score), 1) AS average,
  MAX(score) AS best
FROM scores;`,
      blank: '  MAX(score) AS best',
      placeholder: '  -- score の最大値を best という名前で求める部分が入る',
      token: /MAX\(\s*score\s*\)\s+AS\s+best/i,
      hint: '<code>MAX(score) AS best</code> と書く。'
    }),
    L({
      id: 'sql-05',
      phase: 'SQL の基礎',
      title: 'GROUP BY と HAVING',
      story: `<p class="lead">学習者は GROUP BY でゲームごとの平均スコアを求め、HAVING で3回以上遊ばれたゲームに絞る。</p>
<p>GROUP BY は、同じ値を持つ行を1つのグループにまとめる句である。集計関数はグループごとに計算される。<code>GROUP BY game_id</code> と書くと、ゲームごとの回数や平均が求まる。</p>
<p>HAVING は、グループにまとめた後の結果に条件を付ける句である。WHERE はグループ化の前の各行に働き、HAVING はグループ化の後の集計結果に働く。</p>`,
      code: `SELECT game_id, COUNT(*) AS plays, ROUND(AVG(score), 1) AS average
FROM scores
GROUP BY game_id
HAVING COUNT(*) >= 3
ORDER BY average DESC;`,
      blank: 'HAVING COUNT(*) >= 3',
      placeholder: '-- 遊ばれた回数が3回以上のグループに絞る条件が入る',
      token: /HAVING\s+COUNT\(\s*\*\s*\)\s*>=\s*3/i,
      hint: '<code>HAVING COUNT(*) &gt;= 3</code> と書く。'
    }),
    L({
      id: 'sql-06',
      phase: 'SQL の基礎',
      title: 'サブクエリ',
      story: `<p class="lead">学習者はサブクエリで平均年齢を求め、平均より年上の会員を取り出す。</p>
<p>サブクエリは、SQL 文の中に入れる別の SELECT 文である。サブクエリはかっこで囲む。データベースはサブクエリを先に実行し、その結果を外側の文で使う。</p>
<p>サブクエリが複数の値を返すときは IN と組み合わせる。たとえば <code>WHERE id IN (SELECT player_id FROM purchases)</code> は、購入の記録を持つ会員を選ぶ。</p>`,
      code: `SELECT name, age
FROM players
WHERE age > (SELECT AVG(age) FROM players)
ORDER BY age;`,
      blank: '(SELECT AVG(age) FROM players)',
      placeholder: '/* 平均年齢を求めるサブクエリ */',
      token: /\(\s*SELECT\s+AVG\(\s*age\s*\)\s+FROM\s+players\s*\)/i,
      hint: '<code>(SELECT AVG(age) FROM players)</code> と書く。かっこで囲む。'
    }),
    L({
      id: 'sql-07',
      phase: 'SQL の基礎',
      title: 'JOIN',
      story: `<p class="lead">学習者は JOIN で scores と players をつなぎ、スコアの横に会員の名前を表示する。</p>
<p>scores テーブルは、会員を player_id という番号で記録している。番号のみでは、だれのスコアかが読み取りにくい。JOIN は、2つのテーブルを共通の列で結び付け、1つの表にする句である。ON の後に、結び付ける条件を書く。</p>
<p>テーブル名に短い別名を付けると、文が読みやすくなる。<code>scores AS s</code> と書くと、<code>s.score</code> のように「別名.列名」の形で列を指定できる。</p>`,
      code: `SELECT p.name, s.score, s.played_on
FROM scores AS s
JOIN players AS p ON s.player_id = p.id
ORDER BY s.score DESC;`,
      blank: 'JOIN players AS p ON s.player_id = p.id',
      placeholder: '-- players を p という別名で結び付け、会員の番号で対応させる部分が入る',
      token: /JOIN\s+players\s+(AS\s+)?p\s+ON\s+(s\.player_id\s*=\s*p\.id|p\.id\s*=\s*s\.player_id)/i,
      hint: '<code>JOIN players AS p ON s.player_id = p.id</code> と書く。'
    }),
    L({
      id: 'sql-08',
      phase: 'SQL の基礎',
      title: 'データの追加・更新・削除',
      story: `<p class="lead">学習者は INSERT・UPDATE・DELETE で players テーブルの行を追加し、書きかえ、削除する。</p>
<p>INSERT INTO は行を追加する命令、UPDATE は行の値を書きかえる命令、DELETE は行を削除する命令である。UPDATE では SET の後に「列名 = 新しい値」を書き、WHERE で対象の行を決める。</p>
<p>UPDATE と DELETE で WHERE を省くと、テーブルのすべての行が対象になる。学習者は、この2つの命令に必ず WHERE を付ける。</p>
<pre>UPDATE テーブル名 SET 列名 = 値 WHERE 条件;</pre>`,
      code: `-- 新しい会員を追加する
INSERT INTO players (id, name, age, prefecture, joined_on, left_on, bonus)
VALUES (11, 'Nao', 14, '東京', '2026-06-10', NULL, 0);

-- Hina の年齢を 14 に更新する
UPDATE players SET age = 14 WHERE name = 'Hina';

-- id が 9 の会員を削除する
DELETE FROM players WHERE id = 9;

SELECT id, name, age FROM players ORDER BY id;`,
      blank: "UPDATE players SET age = 14 WHERE name = 'Hina';",
      placeholder: '-- name が Hina の行の age を 14 に書きかえる文が入る',
      token: /UPDATE\s+players\s+SET\s+age\s*=\s*14\s+WHERE\s+name\s*=\s*'Hina'/i,
      hint: "<code>UPDATE players SET age = 14 WHERE name = 'Hina';</code> と書く。"
    }),
    L({
      id: 'sql-09',
      phase: 'データ分析の基礎',
      title: 'ユーザーと商品の分析',
      story: `<p class="lead">学習者は会員を地域ごとに集計し、人数・平均年齢・ボーナス機能の利用者数を求める。</p>
<p>データ分析の第一歩は、ユーザー（会員）と商品（ゲーム）の特徴を数で表すことである。地域や年齢でグループに分けると、どの層の会員が多いかがわかる。players の bonus 列は、ログインボーナス機能を使った会員で 1、それ以外で 0 である。SUM(bonus) は利用者の人数になる。</p>
<p>商品の分析も同じ形で書ける。次の SQL は、ゲームごとの販売数を求める。</p>
<pre>SELECT game_id, COUNT(*) AS sold
FROM purchases
GROUP BY game_id;</pre>`,
      code: `SELECT prefecture,
       COUNT(*) AS members,
       ROUND(AVG(age), 1) AS avg_age,
       SUM(bonus) AS bonus_users
FROM players
GROUP BY prefecture
ORDER BY members DESC;`,
      blank: 'GROUP BY prefecture',
      placeholder: '-- 地域ごとにグループを作る部分が入る',
      token: /GROUP\s+BY\s+prefecture/i,
      hint: '<code>GROUP BY prefecture</code> と書く。'
    }),
    L({
      id: 'sql-10',
      phase: 'データ分析の基礎',
      title: '売上の分析',
      story: `<p class="lead">学習者は購入日から年月を取り出し、月ごとの注文数と売上を集計する。</p>
<p>売上は、一定の期間に得たお金の合計である。purchases の amount 列は、1回の購入で支払われた金額である。月ごとに合計すると、売上の増え方がわかる。</p>
<p>substr(文字列, 開始位置, 文字数) は、文字列の一部を取り出す関数である。'2026-03-05' の1文字目から7文字を取り出すと '2026-03' になる。SQLite では <code>strftime('%Y-%m', purchased_on)</code> でも同じ結果になる。</p>`,
      code: `SELECT substr(purchased_on, 1, 7) AS month,
       COUNT(*) AS orders,
       SUM(amount) AS sales
FROM purchases
GROUP BY month
ORDER BY month;`,
      blank: 'SELECT substr(purchased_on, 1, 7) AS month,',
      placeholder: '-- purchased_on の先頭7文字を month という名前で取り出す部分が入る',
      token: /SELECT\s+substr\(\s*purchased_on\s*,\s*1\s*,\s*7\s*\)\s+AS\s+month\s*,/i,
      hint: '<code>SELECT substr(purchased_on, 1, 7) AS month,</code> と書く。最後のカンマも書く。'
    }),
    L({
      id: 'sql-11',
      phase: '練習問題',
      title: '集計の基礎問題',
      story: `<p class="lead">学習者は scores テーブルから、会員ごとのプレイ回数と最高スコアを求める。</p>
<p>問題：次の条件を満たす SQL を書く。</p>
<ul>
<li>player_id ごとにグループを作る。</li>
<li>プレイ回数を plays、最高スコアを best という列名で表示する。</li>
<li>best の高い順に並べる。</li>
</ul>
<p>集計関数と GROUP BY を組み合わせると、グループごとの値が1行ずつ表示される。</p>`,
      code: `SELECT player_id,
       COUNT(*) AS plays,
       MAX(score) AS best
FROM scores
GROUP BY player_id
ORDER BY best DESC;`,
      blank: `       MAX(score) AS best
FROM scores
GROUP BY player_id`,
      placeholder: '       -- 最高スコアの列、テーブル名、グループの単位が入る',
      token: /MAX\(\s*score\s*\)\s+AS\s+best\s+FROM\s+scores\s+GROUP\s+BY\s+player_id/i,
      hint: '<code>MAX(score) AS best</code>、<code>FROM scores</code>、<code>GROUP BY player_id</code> の3行を書く。'
    }),
    L({
      id: 'sql-12',
      phase: '練習問題',
      title: '集計の応用問題',
      story: `<p class="lead">学習者は CASE で会員を年齢層に分け、年齢層ごとの人数を求める。</p>
<p>CASE は、条件に合わせて値を切りかえる式である。WHEN の条件を上から順に調べ、最初に当てはまった THEN の値を返す。残りの行は ELSE の値になる。最後は END で閉じる。</p>
<p>問題：15歳以下、16〜18歳、19歳以上の3つの年齢層に分け、年齢層ごとの人数を表示する。CASE の結果に AS で名前を付けると、GROUP BY でその名前を使える。</p>`,
      code: `SELECT
  CASE
    WHEN age < 16 THEN '15歳以下'
    WHEN age < 19 THEN '16〜18歳'
    ELSE '19歳以上'
  END AS age_group,
  COUNT(*) AS members
FROM players
GROUP BY age_group
ORDER BY MIN(age);`,
      blank: "    WHEN age < 19 THEN '16〜18歳'",
      placeholder: '    -- 19歳未満の行を 16〜18歳 とする条件が入る',
      token: /WHEN\s+age\s*<\s*19\s+THEN\s+'16〜18歳'/i,
      hint: "<code>WHEN age &lt; 19 THEN '16〜18歳'</code> と書く。16歳未満の行は1つ前の WHEN で処理済みである。"
    }),
    L({
      id: 'sql-13',
      phase: '練習問題',
      title: '結合の基礎問題',
      story: `<p class="lead">学習者は3つのテーブルを結合し、購入の一覧に会員の名前とゲーム名を付ける。</p>
<p>JOIN は続けて何回も書ける。purchases に players を結合した結果に、さらに games を結合すると、1行に「いつ・だれが・どのゲームを・いくらで」買ったかがそろう。</p>
<p>問題：purchases（別名 pu）に players（別名 p）と games（別名 g）を結合し、購入日の順に並べる。</p>`,
      code: `SELECT pu.purchased_on, p.name, g.title, pu.amount
FROM purchases AS pu
JOIN players AS p ON pu.player_id = p.id
JOIN games AS g ON pu.game_id = g.id
ORDER BY pu.purchased_on;`,
      blank: 'JOIN games AS g ON pu.game_id = g.id',
      placeholder: '-- games を g という別名で結合し、ゲームの番号で対応させる部分が入る',
      token: /JOIN\s+games\s+(AS\s+)?g\s+ON\s+(pu\.game_id\s*=\s*g\.id|g\.id\s*=\s*pu\.game_id)/i,
      hint: '<code>JOIN games AS g ON pu.game_id = g.id</code> と書く。'
    }),
    L({
      id: 'sql-14',
      phase: '練習問題',
      title: '結合の応用問題',
      story: `<p class="lead">学習者は LEFT JOIN で全会員の購入回数と購入金額を求め、購入0件の会員も表に残す。</p>
<p>JOIN（内部結合）は、両方のテーブルで対応がとれた行に限り結果に残す。LEFT JOIN（左外部結合）は、左側のテーブルの行をすべて残す。右側の対応が空の行では、右側の列が NULL（空の値）で埋まる。</p>
<p>COALESCE(値, 0) は、値が NULL のときに 0 へ置きかえる関数である。購入0件の会員の合計金額は NULL になるため、COALESCE で 0 にそろえる。</p>`,
      code: `SELECT p.name,
       COUNT(pu.id) AS orders,
       COALESCE(SUM(pu.amount), 0) AS spent
FROM players AS p
LEFT JOIN purchases AS pu ON pu.player_id = p.id
GROUP BY p.id
ORDER BY spent DESC;`,
      blank: 'LEFT JOIN purchases AS pu ON pu.player_id = p.id',
      placeholder: '-- purchases を pu という別名で左外部結合する部分が入る',
      token: /LEFT\s+JOIN\s+purchases\s+(AS\s+)?pu\s+ON\s+(pu\.player_id\s*=\s*p\.id|p\.id\s*=\s*pu\.player_id)/i,
      hint: '<code>LEFT JOIN purchases AS pu ON pu.player_id = p.id</code> と書く。'
    }),
    L({
      id: 'sql-15',
      phase: '実践分析',
      title: 'WITH とサブクエリ',
      story: `<p class="lead">学習者は WITH で会員ごとの購入金額の表を作り、平均より多く購入した会員を取り出す。</p>
<p>WITH は、SELECT 文の前に一時的な表を定義する句である。この一時的な表を CTE（共通テーブル式）と呼ぶ。<code>WITH totals AS ( … )</code> と書くと、続く SELECT 文の中で totals をテーブルと同じように使える。</p>
<p>長いサブクエリを WITH に移すと、SQL を上から順に読める形になる。同じ集計を2回使う場面でも、WITH の表を1回定義する形で済む。</p>`,
      code: `WITH totals AS (
  SELECT player_id, SUM(amount) AS spent
  FROM purchases
  GROUP BY player_id
)
SELECT p.name, t.spent
FROM totals AS t
JOIN players AS p ON t.player_id = p.id
WHERE t.spent > (SELECT AVG(spent) FROM totals)
ORDER BY t.spent DESC;`,
      blank: 'WITH totals AS (',
      placeholder: '-- 一時的な表 totals の定義の始まりが入る',
      token: /WITH\s+totals\s+AS\s*\(/i,
      hint: '<code>WITH totals AS (</code> と書く。閉じかっこは下の行にある。'
    }),
    L({
      id: 'sql-16',
      phase: '実践分析',
      title: '実践：売上と退会率の分析',
      story: `<p class="lead">学習者は地域ごとに退会率と売上を求め、退会率の高い地域を見つける。</p>
<p>退会率は、会員のうち退会した人の割合である。players の left_on 列は退会日を表し、在籍中の会員では NULL である。<code>left_on IS NOT NULL</code> は、退会日を持つ行で 1、NULL の行で 0 になる。その合計が退会者の人数である。</p>
<p>SQLite では、整数同士の割り算の結果は整数に切り捨てられる。<code>100.0 *</code> を先に掛けると小数の計算になり、割合をパーセントで正しく表せる。</p>`,
      code: `WITH spend AS (
  SELECT player_id, SUM(amount) AS spent
  FROM purchases
  GROUP BY player_id
)
SELECT p.prefecture,
       COUNT(*) AS members,
       SUM(p.left_on IS NOT NULL) AS left_members,
       ROUND(100.0 * SUM(p.left_on IS NOT NULL) / COUNT(*), 1) AS churn_rate,
       COALESCE(SUM(s.spent), 0) AS sales
FROM players AS p
LEFT JOIN spend AS s ON s.player_id = p.id
GROUP BY p.prefecture
ORDER BY churn_rate DESC;`,
      blank: '       ROUND(100.0 * SUM(p.left_on IS NOT NULL) / COUNT(*), 1) AS churn_rate,',
      placeholder: '       -- 退会者の割合をパーセントで求め、churn_rate と名付ける部分が入る',
      token: /ROUND\(\s*100\.0\s*\*\s*SUM\(\s*p\.left_on\s+IS\s+NOT\s+NULL\s*\)\s*\/\s*COUNT\(\s*\*\s*\)\s*,\s*1\s*\)\s+AS\s+churn_rate/i,
      hint: '<code>ROUND(100.0 * SUM(p.left_on IS NOT NULL) / COUNT(*), 1) AS churn_rate,</code> と書く。'
    }),
    L({
      id: 'sql-17',
      phase: '実践分析',
      title: '実践：機能の効果検証',
      story: `<p class="lead">学習者はログインボーナス機能の利用者と非利用者を比べ、退会率と平均購入金額の差を求める。</p>
<p>効果検証は、新しい機能が会員の行動を変えたかを数で確かめる作業である。機能の利用者と非利用者の2つのグループに分け、同じ指標を並べて比べる。</p>
<p>数の差は、機能の効果以外の理由でも生じる。たとえば、もともと熱心な会員ほど機能を使う傾向があれば、同じ差が現れる。正確な検証には、会員を無作為に2つの組に分けて比べる A/B テストを使う。</p>`,
      code: `WITH spend AS (
  SELECT player_id, SUM(amount) AS spent
  FROM purchases
  GROUP BY player_id
)
SELECT CASE WHEN p.bonus = 1 THEN '利用あり' ELSE '利用なし' END AS login_bonus,
       COUNT(*) AS members,
       ROUND(100.0 * SUM(p.left_on IS NOT NULL) / COUNT(*), 1) AS churn_rate,
       ROUND(AVG(COALESCE(s.spent, 0)), 0) AS avg_spent
FROM players AS p
LEFT JOIN spend AS s ON s.player_id = p.id
GROUP BY login_bonus;`,
      blank: '       ROUND(AVG(COALESCE(s.spent, 0)), 0) AS avg_spent',
      placeholder: '       -- 購入0件を 0 として平均購入金額を求め、avg_spent と名付ける部分が入る',
      token: /AVG\(\s*COALESCE\(\s*s\.spent\s*,\s*0\s*\)\s*\)[\s\S]*AS\s+avg_spent/i,
      hint: '<code>ROUND(AVG(COALESCE(s.spent, 0)), 0) AS avg_spent</code> と書く。'
    }),
    L({
      id: 'sql-18',
      phase: '実践分析',
      title: '総合問題',
      story: `<p class="lead">学習者は WITH で2つの集計表を作り、ゲームごとの販売数・売上・プレイ回数・平均スコアを1つの表にまとめる。</p>
<p>WITH の後には、カンマで区切って複数の表を定義できる。ここでは購入の集計表 sales と、スコアの集計表 plays を作る。</p>
<p>問題：games を基準に2つの表を LEFT JOIN し、売上の高い順に並べる。販売数0件のゲームも 0 で表示する。</p>`,
      code: `WITH sales AS (
  SELECT game_id, COUNT(*) AS sold, SUM(amount) AS revenue
  FROM purchases
  GROUP BY game_id
),
plays AS (
  SELECT game_id, COUNT(*) AS times, ROUND(AVG(score), 1) AS avg_score
  FROM scores
  GROUP BY game_id
)
SELECT g.title,
       g.genre,
       COALESCE(s.sold, 0) AS sold,
       COALESCE(s.revenue, 0) AS revenue,
       COALESCE(pl.times, 0) AS times,
       pl.avg_score
FROM games AS g
LEFT JOIN sales AS s ON s.game_id = g.id
LEFT JOIN plays AS pl ON pl.game_id = g.id
ORDER BY revenue DESC;`,
      blank: 'LEFT JOIN plays AS pl ON pl.game_id = g.id',
      placeholder: '-- 表 plays を pl という別名で左外部結合する部分が入る',
      token: /LEFT\s+JOIN\s+plays\s+(AS\s+)?pl\s+ON\s+(pl\.game_id\s*=\s*g\.id|g\.id\s*=\s*pl\.game_id)/i,
      hint: '<code>LEFT JOIN plays AS pl ON pl.game_id = g.id</code> と書く。'
    }),
    L({
      id: 'sql-19',
      phase: 'データベース設計',
      title: 'テーブルの作成と列の制約',
      story: `<p class="lead">学習者は CREATE TABLE でゲーム内アイテムのテーブルを作り、主キー・NOT NULL・外部キーの制約を付ける。</p>
<p>制約は、列に入れる値の決まりである。PRIMARY KEY（主キー）は、行を1つに特定する列であり、ほかの行と重複する値を拒否する。SQLite の <code>INTEGER PRIMARY KEY</code> は、値を省くと番号を自動で振る。NOT NULL は、空の値を拒否する制約である。</p>
<p>FOREIGN KEY（外部キー）は、別のテーブルの列を参照し、そこに存在する値に限り受け入れる制約である。SQLite では <code>PRAGMA foreign_keys = ON;</code> を実行すると外部キーの検査が有効になる。</p>`,
      code: `PRAGMA foreign_keys = ON;

CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  game_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (game_id) REFERENCES games(id)
);

INSERT INTO items (game_id, name, price) VALUES
  (1, 'ロケットブースター', 300),
  (2, '伝説の剣', 500),
  (2, '回復ポーション', 100);

SELECT i.id, g.title, i.name, i.price
FROM items AS i
JOIN games AS g ON i.game_id = g.id;`,
      blank: '  FOREIGN KEY (game_id) REFERENCES games(id)',
      placeholder: '  -- game_id が games テーブルの id を参照する外部キーの制約が入る',
      token: /FOREIGN\s+KEY\s*\(\s*game_id\s*\)\s*REFERENCES\s+games\s*\(\s*id\s*\)/i,
      hint: '<code>FOREIGN KEY (game_id) REFERENCES games(id)</code> と書く。'
    }),
    L({
      id: 'sql-20',
      phase: 'データベース設計',
      title: 'データベース設計（正規化）',
      story: `<p class="lead">学習者は重複の多い play_log テーブルを3つのテーブルに分け、正規化を行う。</p>
<p>正規化は、同じ情報の重複を減らすためにテーブルを分ける設計の手順である。play_log は、会員の地域やゲームのジャンルを毎回くり返して記録している。この形では、会員の地域を変えるときに複数の行を書きかえる必要があり、書きかえ漏れが矛盾を生む。</p>
<ul>
<li>第1正規形：1つのマスに1つの値を入れる。</li>
<li>第2・第3正規形：主キー以外の情報に従って決まる列（会員の地域、ゲームのジャンル）を別のテーブルに移す。</li>
</ul>
<p>SELECT DISTINCT は、重複した行を1つにまとめて取り出す。<code>INSERT INTO … SELECT …</code> は、SELECT の結果をそのまま別のテーブルに追加する。</p>`,
      code: `CREATE TABLE members (id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE, prefecture TEXT);
CREATE TABLE titles (id INTEGER PRIMARY KEY, title TEXT NOT NULL UNIQUE, genre TEXT);
CREATE TABLE plays (
  id INTEGER PRIMARY KEY,
  member_id INTEGER REFERENCES members(id),
  title_id INTEGER REFERENCES titles(id),
  score INTEGER
);

INSERT INTO members (name, prefecture)
SELECT DISTINCT player_name, player_pref FROM play_log;

INSERT INTO titles (title, genre)
SELECT DISTINCT game_title, game_genre FROM play_log;

INSERT INTO plays (member_id, title_id, score)
SELECT m.id, t.id, l.score
FROM play_log AS l
JOIN members AS m ON m.name = l.player_name
JOIN titles AS t ON t.title = l.game_title;

-- 分けたテーブルを結合し、元の記録を復元する
SELECT pl.id, m.name, m.prefecture, t.title, t.genre, pl.score
FROM plays AS pl
JOIN members AS m ON pl.member_id = m.id
JOIN titles AS t ON pl.title_id = t.id
ORDER BY pl.id;`,
      blank: `INSERT INTO members (name, prefecture)
SELECT DISTINCT player_name, player_pref FROM play_log;`,
      placeholder: '-- play_log から会員の名前と地域を重複なしで members に追加する文が入る',
      token: /INSERT\s+INTO\s+members\s*\(\s*name\s*,\s*prefecture\s*\)\s*SELECT\s+DISTINCT\s+player_name\s*,\s*player_pref\s+FROM\s+play_log/i,
      hint: '<code>INSERT INTO members (name, prefecture)</code> の次の行に <code>SELECT DISTINCT player_name, player_pref FROM play_log;</code> と書く。',
      ctx: { sql: LOG }
    })
  ];
})();

SERIES.three = (function () {
  const page = (extra) => `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <script src="vendor/three.min.js"></script>${extra || ''}
  <script src="game.js"></script>
</body>
</html>`;
  const CSS = `html, body { margin: 0; height: 100%; overflow: hidden; background: #0b1020; font-family: sans-serif; }
canvas { position: fixed; inset: 0; display: block; }
#hud { position: fixed; top: 12px; left: 12px; color: #fff; font-size: 18px; font-weight: bold; text-shadow: 0 1px 3px #000; z-index: 1; }`;
  const L = (o, extra) => Object.assign({ type: 'code', run: 'web', file: 'game.js', ctx: { html: page(extra), css: CSS } }, o);

  return [
    L({
      id: 'three-01',
      phase: '3D の基礎',
      title: '3D グラフィックスの概要と座標系',
      story: `<p class="lead">学習者は AxesHelper で x・y・z の3本の座標軸を表示し、3D の座標系の向きを確かめる。</p>
<p>3D グラフィックスは、仮想の空間に物体を置き、カメラで写した様子を 2D の画面に描く技術である。Three.js は、ブラウザで 3D を描く仕組み（WebGL）を短いコードで扱うための JavaScript ライブラリである。</p>
<p>Three.js の空間では、x 軸が右、y 軸が上、z 軸が画面の手前を向く。<code>AxesHelper(3)</code> は、長さ 3 の座標軸を赤（x）・緑（y）・青（z）で描く補助の物体である。<code>GridHelper</code> は床の目盛りを描く。</p>`,
      code: `// 3D の物体を置く空間（シーン）を作る
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1020);

// 斜め上から原点を見るカメラを作る
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(4, 3, 6);
camera.lookAt(0, 0, 0);

// 座標軸を表示する（赤 = x、緑 = y、青 = z）
const axes = new THREE.AxesHelper(3);
scene.add(axes);

// 床に 1 マスずつの格子を表示する
scene.add(new THREE.GridHelper(10, 10));

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);`,
      blank: `const axes = new THREE.AxesHelper(3);
scene.add(axes);`,
      placeholder: '// 長さ 3 の座標軸 axes を作り、シーンに加える2行が入る',
      token: /new\s+THREE\.AxesHelper\(\s*3\s*\)[\s\S]*scene\.add\(\s*axes\s*\)/,
      hint: '<code>const axes = new THREE.AxesHelper(3);</code> の次の行に <code>scene.add(axes);</code> と書く。'
    }),
    L({
      id: 'three-02',
      phase: '3D の基礎',
      title: 'Scene・Camera・Renderer',
      story: `<p class="lead">学習者は Scene・Camera・Renderer の3つを用意し、renderer.render で1枚の絵を描く。</p>
<p>Three.js の描画には3つの部品を使う。Scene は物体を置く空間、Camera は空間を写す視点、Renderer はカメラの写した様子を canvas（描画用の HTML 要素）に描く道具である。</p>
<p><code>PerspectiveCamera(視野角, 縦横比, 手前の限界, 奥の限界)</code> は、遠くの物ほど小さく写す、人の目に近いカメラである。<code>renderer.render(scene, camera)</code> を呼んだ時点で、ブラウザは画面に絵を描く。ここでは描く命令を関数 draw にまとめる。ウィンドウの大きさが変わったときは、縦横比と描画の大きさを合わせ直す。</p>`,
      code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1d3557);
scene.add(new THREE.GridHelper(20, 20, 0xffffff, 0x457b9d));

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(0, 3, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// シーンをカメラで写して描く関数
function draw() {
  renderer.render(scene, camera);
}
draw();

// ウィンドウの大きさが変わったら描き直す
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  draw();
});`,
      blank: '  renderer.render(scene, camera);',
      placeholder: '  // scene を camera で写して描く命令が入る',
      token: /renderer\.render\(\s*scene\s*,\s*camera\s*\)/,
      hint: '<code>renderer.render(scene, camera);</code> と書く。'
    }),
    L({
      id: 'three-03',
      phase: '3D の基礎',
      title: 'Geometry と Material',
      story: `<p class="lead">学習者は BoxGeometry と MeshNormalMaterial を組み合わせて Mesh を作り、立方体を表示する。</p>
<p>Three.js の物体は、形と見た目の2つでできている。Geometry（ジオメトリ）は形のデータであり、BoxGeometry は箱、SphereGeometry は球を表す。Material（マテリアル）は表面の色や質感を決める。MeshNormalMaterial は、面の向きに合わせて色を塗る見た目であり、光源を置く前の段階でも色が付く。</p>
<p>Mesh（メッシュ）は、Geometry と Material を組み合わせた、画面に表示できる物体である。<code>scene.add()</code> でシーンに加えると、カメラに写る。</p>`,
      code: `const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

// 形（Geometry）と見た目（Material）を用意する
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshNormalMaterial();

// 2つを組み合わせて物体（Mesh）にする
const cube = new THREE.Mesh(geometry, material);
cube.position.x = -1.2;
cube.rotation.set(0.5, 0.7, 0);
scene.add(cube);

const ball = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 16), material);
ball.position.x = 1.4;
scene.add(ball);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);`,
      blank: 'const cube = new THREE.Mesh(geometry, material);',
      placeholder: '// geometry と material を組み合わせた物体 cube を作る行が入る',
      token: /const\s+cube\s*=\s*new\s+THREE\.Mesh\(\s*geometry\s*,\s*material\s*\)/,
      hint: '<code>const cube = new THREE.Mesh(geometry, material);</code> と書く。'
    }),
    L({
      id: 'three-04',
      phase: '3D の基礎',
      title: 'ライト',
      story: `<p class="lead">学習者は DirectionalLight をシーンに加え、光の当たる面と影になる面を表現する。</p>
<p>MeshStandardMaterial は、光を受けて明るさが変わる質感である。このマテリアルの物体は、ライト（光源）を置くまで真っ暗に写る。</p>
<p>DirectionalLight は太陽のように一方向から平行に届く光であり、position で光の来る向きを決める。AmbientLight は空間全体を均等に照らす弱い光であり、影の側が黒くつぶれる状態を防ぐ。2つを組み合わせると、物体の立体感がはっきりする。</p>`,
      code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x10162f);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 1.5, 1.5),
  new THREE.MeshStandardMaterial({ color: 0xff7a59 })
);
cube.rotation.set(0.5, 0.7, 0);
scene.add(cube);

// 右上から差す太陽のような光
const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(3, 5, 4);
scene.add(sun);

// 全体を弱く照らす光
scene.add(new THREE.AmbientLight(0xffffff, 0.3));

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);`,
      blank: `const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(3, 5, 4);
scene.add(sun);`,
      placeholder: '// 白い平行光 sun を作り、位置 (3, 5, 4) に置いてシーンに加える3行が入る',
      token: /new\s+THREE\.DirectionalLight\([\s\S]*sun\.position\.set\([\s\S]*scene\.add\(\s*sun\s*\)/,
      hint: '<code>const sun = new THREE.DirectionalLight(0xffffff, 1);</code>、<code>sun.position.set(3, 5, 4);</code>、<code>scene.add(sun);</code> の3行を書く。'
    }),
    L({
      id: 'three-05',
      phase: '3D の基礎',
      title: 'アニメーションループ',
      story: `<p class="lead">学習者は requestAnimationFrame で描画をくり返し、立方体を回転させる。</p>
<p>アニメーションは、少しずつ異なる絵を連続で表示する仕組みである。<code>requestAnimationFrame(関数)</code> は、次に画面を描きかえる直前に関数を呼ぶよう、ブラウザに頼む命令である。ブラウザは多くの場合、1秒間に約60回画面を描きかえる。</p>
<p>animate 関数の中で再び requestAnimationFrame(animate) を呼ぶと、animate が毎回の描きかえのたびに実行される。この仕組みをアニメーションループと呼ぶ。ループの中で rotation を少しずつ増やすと、立方体が回り続ける。</p>`,
      code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x10162f);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 1.5, 1.5),
  new THREE.MeshStandardMaterial({ color: 0x2a9d8f })
);
scene.add(cube);

const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(3, 5, 4);
scene.add(sun);
scene.add(new THREE.AmbientLight(0xffffff, 0.3));

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.02;
  renderer.render(scene, camera);
}
animate();`,
      blank: '  requestAnimationFrame(animate);',
      placeholder: '  // 次の描きかえで animate を再び呼ぶよう頼む命令が入る',
      token: /requestAnimationFrame\(\s*animate\s*\)/,
      hint: '<code>requestAnimationFrame(animate);</code> と書く。'
    }),
    L({
      id: 'three-06',
      phase: 'ゲームの仕組み',
      title: 'キー入力による移動',
      story: `<p class="lead">学習者は押されているキーを keys に記録し、矢印キーでプレイヤーの箱を動かす。</p>
<p>keydown はキーを押した瞬間、keyup はキーを離した瞬間に起こるイベントである。押した瞬間に1回動かす方式では、動きがカクカクする。そこで、押されている間 true になる記録用のオブジェクト keys を作り、アニメーションループの中で毎回 keys を調べて位置を変える。</p>
<p>画面の奥へ進む向きは z の値が減る向きである。プレビューを1回クリックしてから矢印キーを押すと、キー入力がプレビューに届く。</p>`,
      code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 8, 10);
camera.lookAt(0, 0, 0);

scene.add(new THREE.GridHelper(20, 20));
const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(3, 10, 4);
scene.add(sun);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xe63946 })
);
player.position.y = 0.5;
scene.add(player);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// 押されているキーを記録する
const keys = {};
addEventListener('keydown', (e) => { keys[e.key] = true; });
addEventListener('keyup', (e) => { keys[e.key] = false; });

const speed = 0.1;
function animate() {
  requestAnimationFrame(animate);
  if (keys.ArrowLeft) player.position.x -= speed;
  if (keys.ArrowRight) player.position.x += speed;
  if (keys.ArrowUp) player.position.z -= speed;
  if (keys.ArrowDown) player.position.z += speed;
  renderer.render(scene, camera);
}
animate();`,
      blank: "addEventListener('keydown', (e) => { keys[e.key] = true; });",
      placeholder: '// キーを押したときに keys[e.key] を true にする処理が入る',
      token: /addEventListener\(\s*["']keydown["']\s*,[\s\S]*?keys\[\s*e\.key\s*\]\s*=\s*true/,
      hint: "<code>addEventListener('keydown', (e) =&gt; { keys[e.key] = true; });</code> と書く。"
    }),
    L({
      id: 'three-07',
      phase: 'ゲームの仕組み',
      title: 'カメラの追従',
      story: `<p class="lead">学習者は毎フレームでカメラをプレイヤーの後ろ上方に置き、lookAt でプレイヤーを見続ける。</p>
<p>フレームは、アニメーションの1枚1枚の絵である。カメラの位置を固定すると、プレイヤーが遠くへ進んだときに画面の外へ出てしまう。カメラの追従は、プレイヤーの位置を基準にして毎フレームでカメラを動かす方法である。</p>
<p>ここでは、カメラをプレイヤーの位置から上に 4、手前に 7 の場所に置く。<code>camera.lookAt(位置)</code> は、カメラの向きを指定した位置に向ける命令である。</p>`,
      code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);

scene.add(new THREE.GridHelper(60, 60));
const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(3, 10, 4);
scene.add(sun);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

// 目印になる柱
const pillar = new THREE.Mesh(
  new THREE.BoxGeometry(1, 4, 1),
  new THREE.MeshStandardMaterial({ color: 0x264653 })
);
pillar.position.set(0, 2, -10);
scene.add(pillar);

const player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xe63946 })
);
player.position.y = 0.5;
scene.add(player);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const keys = {};
addEventListener('keydown', (e) => { keys[e.key] = true; });
addEventListener('keyup', (e) => { keys[e.key] = false; });

const speed = 0.15;
function animate() {
  requestAnimationFrame(animate);
  if (keys.ArrowLeft) player.position.x -= speed;
  if (keys.ArrowRight) player.position.x += speed;
  if (keys.ArrowUp) player.position.z -= speed;
  if (keys.ArrowDown) player.position.z += speed;

  // カメラをプレイヤーの後ろ上方に置き、プレイヤーを見る
  camera.position.set(player.position.x, player.position.y + 4, player.position.z + 7);
  camera.lookAt(player.position);

  renderer.render(scene, camera);
}
animate();`,
      blank: `  camera.position.set(player.position.x, player.position.y + 4, player.position.z + 7);
  camera.lookAt(player.position);`,
      placeholder: '  // カメラを player の上 4・手前 7 の位置に置き、player に向ける2行が入る',
      token: /camera\.position\.set\(\s*player\.position\.x\s*,\s*player\.position\.y\s*\+\s*4\s*,\s*player\.position\.z\s*\+\s*7\s*\)[\s\S]*camera\.lookAt\(\s*player\.position\s*\)/,
      hint: '<code>camera.position.set(player.position.x, player.position.y + 4, player.position.z + 7);</code> と <code>camera.lookAt(player.position);</code> を書く。'
    }),
    L({
      id: 'three-08',
      phase: 'ゲームの仕組み',
      title: '当たり判定（距離）',
      story: `<p class="lead">学習者は distanceTo でプレイヤーとコインの距離を求め、距離が 1 未満のときにコインを取った処理を行う。</p>
<p>当たり判定は、2つの物体がぶつかったかを調べる処理である。最も簡単な方法は、2つの中心の距離を比べる方法である。3D の距離は、x・y・z の差をそれぞれ2乗して足し、その平方根をとった値である。</p>
<p><code>a.position.distanceTo(b.position)</code> は、この距離を求めるメソッドである。距離が2つの物体の半径の和より小さければ、2つは重なっている。コインを取ったら、スコアを増やし、コインを別の場所へ移す。</p>`,
      code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);
scene.add(new THREE.GridHelper(20, 20));
const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(3, 10, 4);
scene.add(sun);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xe63946 })
);
player.position.y = 0.5;
scene.add(player);

// コイン：円柱を立てて使う
const coinGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 24);
coinGeo.rotateX(Math.PI / 2);
const coin = new THREE.Mesh(coinGeo, new THREE.MeshStandardMaterial({ color: 0xffd166 }));
coin.position.set(3, 0.5, -3);
scene.add(coin);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const keys = {};
addEventListener('keydown', (e) => { keys[e.key] = true; });
addEventListener('keyup', (e) => { keys[e.key] = false; });

let score = 0;
const speed = 0.1;
function animate() {
  requestAnimationFrame(animate);
  if (keys.ArrowLeft) player.position.x -= speed;
  if (keys.ArrowRight) player.position.x += speed;
  if (keys.ArrowUp) player.position.z -= speed;
  if (keys.ArrowDown) player.position.z += speed;
  coin.rotation.y += 0.05;

  // 距離が 1 未満ならコインを取ったと判定する
  if (player.position.distanceTo(coin.position) < 1) {
    score += 1;
    console.log('コインを取った。スコア: ' + score);
    coin.position.set(Math.random() * 16 - 8, 0.5, Math.random() * 16 - 8);
  }

  camera.position.set(player.position.x, player.position.y + 4, player.position.z + 7);
  camera.lookAt(player.position);
  renderer.render(scene, camera);
}
animate();`,
      blank: '  if (player.position.distanceTo(coin.position) < 1) {',
      placeholder: '  // player と coin の距離が 1 未満かを調べる if 文の1行目が入る\n  {',
      token: /if\s*\(\s*player\.position\.distanceTo\(\s*coin\.position\s*\)\s*<\s*1\s*\)/,
      hint: '<code>if (player.position.distanceTo(coin.position) &lt; 1) {</code> と書く。'
    }),
    L({
      id: 'three-09',
      phase: 'ゲームの仕組み',
      title: '複数の物体（配列と for）',
      story: `<p class="lead">学習者は for 文で10枚のコインを作って配列 coins に入れ、ループの中ですべてのコインを回転させる。</p>
<p>配列は、複数の値を順番に並べて保存する入れ物である。<code>coins.push(coin)</code> は、配列の最後に coin を加える。for 文は、同じ処理を決まった回数くり返す文である。</p>
<p>物体を1つずつ変数に入れる方法では、コインが増えるたびにコードが長くなる。配列に入れておくと、<code>for (const coin of coins)</code> の形で、すべてのコインに同じ処理を行える。Geometry と Material は、複数の Mesh で共有できる。</p>`,
      code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);
camera.position.set(0, 12, 14);
camera.lookAt(0, 0, 0);
scene.add(new THREE.GridHelper(20, 20));
const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(3, 10, 4);
scene.add(sun);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const coinGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 24);
coinGeo.rotateX(Math.PI / 2);
const coinMat = new THREE.MeshStandardMaterial({ color: 0xffd166 });

// 10 枚のコインを作り、配列に入れる
const coins = [];
for (let i = 0; i < 10; i++) {
  const coin = new THREE.Mesh(coinGeo, coinMat);
  coin.position.set(Math.random() * 16 - 8, 0.5, Math.random() * 16 - 8);
  scene.add(coin);
  coins.push(coin);
}
console.log('コインの数: ' + coins.length);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  for (const coin of coins) {
    coin.rotation.y += 0.05;
  }
  renderer.render(scene, camera);
}
animate();`,
      blank: '  coins.push(coin);',
      placeholder: '  // 作った coin を配列 coins の最後に加える命令が入る',
      token: /coins\.push\(\s*coin\s*\)/,
      hint: '<code>coins.push(coin);</code> と書く。'
    }),
    L({
      id: 'three-10',
      phase: '総合',
      title: '総合：3D のコイン集めゲーム',
      story: `<p class="lead">学習者はこれまでの部品を組み合わせ、制限時間30秒でコインを集める 3D ゲームを完成させる。</p>
<p>このゲームは、キー入力・カメラの追従・距離による当たり判定・配列のコインを1つにまとめた作品である。取ったコインは <code>visible = false</code> で非表示にし、判定の対象から外す。</p>
<p><code>THREE.Clock</code> の getDelta() は、前のフレームから経過した秒数を返す。移動量に経過秒数を掛けると、画面の描きかえの速さが異なるパソコンでも同じ速さで動く。残り時間が 0 になるか、すべてのコインを集めた時点でゲームは終わる。</p>`,
      code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 15, 40);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(30, 30),
  new THREE.MeshStandardMaterial({ color: 0x6ab04c })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);
const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(5, 10, 6);
scene.add(sun);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xe63946 })
);
player.position.y = 0.5;
scene.add(player);

const coinGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 24);
coinGeo.rotateX(Math.PI / 2);
const coinMat = new THREE.MeshStandardMaterial({ color: 0xffd166, metalness: 0.5 });
const coins = [];
for (let i = 0; i < 10; i++) {
  const coin = new THREE.Mesh(coinGeo, coinMat);
  coin.position.set(Math.random() * 24 - 12, 0.5, Math.random() * 24 - 12);
  scene.add(coin);
  coins.push(coin);
}

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const keys = {};
addEventListener('keydown', (e) => { keys[e.key] = true; });
addEventListener('keyup', (e) => { keys[e.key] = false; });

const hud = document.getElementById('hud');
const clock = new THREE.Clock();
const speed = 6;
let score = 0;
let timeLeft = 30;
let playing = true;

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();

  if (playing) {
    if (keys.ArrowLeft) player.position.x -= speed * dt;
    if (keys.ArrowRight) player.position.x += speed * dt;
    if (keys.ArrowUp) player.position.z -= speed * dt;
    if (keys.ArrowDown) player.position.z += speed * dt;

    for (const coin of coins) {
      coin.rotation.y += 3 * dt;
      if (coin.visible && player.position.distanceTo(coin.position) < 1) {
        coin.visible = false;
        score += 1;
      }
    }

    timeLeft -= dt;
    if (timeLeft <= 0 || score === coins.length) {
      playing = false;
      timeLeft = Math.max(timeLeft, 0);
      hud.textContent = 'ゲーム終了  スコア: ' + score + ' / ' + coins.length;
      console.log('最終スコア: ' + score);
    } else {
      hud.textContent = 'スコア: ' + score + '  残り ' + Math.ceil(timeLeft) + ' 秒';
    }
  }

  camera.position.set(player.position.x, player.position.y + 5, player.position.z + 8);
  camera.lookAt(player.position);
  renderer.render(scene, camera);
}
animate();`,
      blank: `        coin.visible = false;
        score += 1;`,
      placeholder: '        // コインを非表示にし、score を 1 増やす2行が入る',
      token: /coin\.visible\s*=\s*false\s*;\s*score\s*\+=\s*1/,
      hint: '<code>coin.visible = false;</code> の次の行に <code>score += 1;</code> と書く。'
    }, '\n  <div id="hud">矢印キーで移動する</div>')
  ];
})();

SERIES.jquery = (function () {
  const page = (body) => `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><link rel="stylesheet" href="style.css"></head>
<body>
  <script src="vendor/jquery-3.7.1.min.js"></script>
${body}
  <script src="game.js"></script>
</body>
</html>`;
  const BASE = `body { font-family: sans-serif; margin: 20px; background: #f1f3f5; color: #222; line-height: 1.6; }
button { padding: 8px 16px; margin: 4px 4px 4px 0; border: none; border-radius: 6px; background: #e76f51; color: #fff; cursor: pointer; font-size: 14px; }
.card { background: #fff; border-radius: 10px; padding: 12px 16px; margin: 8px 0; box-shadow: 0 2px 6px rgba(0,0,0,.12); }
ul { list-style: none; padding: 0; }`;
  const L = (o, body, css) => Object.assign({ type: 'code', run: 'web', file: 'game.js', ctx: { html: page(body), css: BASE + (css ? '\n' + css : '') } }, o);

  const SLIDES3 = `  <div class="slides">
    <div class="slide card active">ステージ1：はじまりの草原</div>
    <div class="slide card">ステージ2：氷の洞窟</div>
    <div class="slide card">ステージ3：炎の火山</div>
  </div>`;
  const SLIDE_CSS = `.slide { display: none; height: 120px; font-size: 20px; font-weight: bold; place-items: center; }
.slide.active { display: grid; }
.slide:nth-child(1) { background: #b7e4c7; }
.slide:nth-child(2) { background: #bde0fe; }
.slide:nth-child(3) { background: #ffb4a2; }
.slide:nth-child(4) { background: #e0c3fc; }`;
  const FORM = `  <div class="card">
    <p><label>プレイヤー名：<input id="player-name" placeholder="8文字以内"></label></p>
    <p><label>職業：
      <select id="job">
        <option value="warrior">戦士</option>
        <option value="mage">魔法使い</option>
        <option value="thief">盗賊</option>
      </select>
    </label></p>`;
  const SECTIONS = `  <section id="stage1"><h2>草原ステージ</h2><p>スライムが住む広い草原である。</p></section>
  <section id="stage2"><h2>洞窟ステージ</h2><p>コウモリが飛ぶ暗い洞窟である。</p></section>
  <section id="stage3"><h2>火山ステージ</h2><p>ドラゴンが待つ最後のステージである。</p></section>`;
  const SECTION_CSS = `body { margin: 0; }
nav { background: #264653; padding: 10px 16px; }
nav a { color: #fff; margin-right: 16px; text-decoration: none; font-weight: bold; }
section { min-height: 420px; padding: 20px; }
#stage1 { background: #b7e4c7; } #stage2 { background: #adb5bd; } #stage3 { background: #ffb4a2; }`;

  return [
    L({
      id: 'jquery-01',
      phase: 'jQuery の基礎',
      title: 'jQuery の概要',
      story: `<p class="lead">学習者は jQuery で h1 要素を選び、見出しの文字を書きかえる。</p>
<p>jQuery は、HTML の要素の操作やアニメーションを短く書くための JavaScript ライブラリである。ライブラリは、よく使う処理をまとめた部品集である。このコースのページは、body の最初の script タグで jQuery を読み込んでいる。</p>
<p><code>$('セレクタ')</code> は、CSS と同じセレクタで要素を選ぶ jQuery の書き方である。素の JavaScript の <code>document.querySelector('h1').textContent = '…'</code> は、jQuery では <code>$('h1').text('…')</code> の1行で書ける。</p>`,
      code: `// h1 要素を選び、文字を書きかえる
$('h1').text('BEAST ゲームズへようこそ');
console.log('jQuery の版: ' + $.fn.jquery);`,
      blank: "$('h1').text('BEAST ゲームズへようこそ');",
      placeholder: '// h1 の文字を「BEAST ゲームズへようこそ」に書きかえる命令が入る',
      token: /\$\(\s*["']h1["']\s*\)\.text\(\s*["'][^"']+["']\s*\)/,
      hint: "<code>$('h1').text('BEAST ゲームズへようこそ');</code> と書く。"
    }, `  <h1>ゲームの世界へ</h1>
  <p>jQuery の練習ページである。</p>`),
    L({
      id: 'jquery-02',
      phase: 'jQuery の基礎',
      title: 'メソッド',
      story: `<p class="lead">学習者は hide メソッドで h2 要素を非表示にする。</p>
<p>メソッドは、選んだ要素に対して行う命令である。<code>$('h2')</code> で要素を選び、ドット（.）に続けてメソッド名を書く。メソッド名の後ろのかっこは「命令を実行する」という印である。</p>
<p><code>hide()</code> は要素を非表示にし、<code>show()</code> は非表示の要素を再び表示する。jQuery は、選んだ要素が複数あるとき、すべての要素に同じ命令を行う。</p>`,
      code: `// h2 要素を非表示にする
$('h2').hide();`,
      blank: "$('h2').hide();",
      placeholder: '// h2 要素を非表示にする命令が入る',
      token: /\$\(\s*["']h2["']\s*\)\.hide\(\s*\)/,
      hint: "<code>$('h2').hide();</code> と書く。"
    }, `  <h1>ダンジョンの入口</h1>
  <h2>隠し通路</h2>
  <p>この先に宝箱がある。</p>`),
    L({
      id: 'jquery-03',
      phase: 'jQuery の基礎',
      title: 'アニメーション',
      story: `<p class="lead">学習者は fadeOut と slideUp を使い、要素をアニメーションで消す。</p>
<p><code>fadeOut()</code> は要素を少しずつ透明にして消すメソッドであり、<code>slideUp()</code> は要素を上へ縮めて消すメソッドである。かっこの中の数は、アニメーションにかける時間をミリ秒（1000 ミリ秒 = 1秒）で表す。</p>
<p>反対の動きをするメソッドとして、<code>fadeIn()</code> と <code>slideDown()</code> がある。数の代わりに 'slow' や 'fast' と書く方法もある。</p>`,
      code: `// ゴーストを 2 秒かけて消す
$('h2').fadeOut(2000);

// 説明文を 1 秒かけて上へ縮める
$('p').slideUp(1000);`,
      blank: "$('h2').fadeOut(2000);",
      placeholder: '// h2 を 2000 ミリ秒かけて透明にして消す命令が入る',
      token: /\$\(\s*["']h2["']\s*\)\.fadeOut\(\s*2000\s*\)/,
      hint: "<code>$('h2').fadeOut(2000);</code> と書く。"
    }, `  <h1>ゴーストの館</h1>
  <h2 class="card">ゴースト</h2>
  <p class="card">ゴーストは光を浴びると消える。</p>`),
    L({
      id: 'jquery-04',
      phase: 'jQuery の基礎',
      title: 'class と id',
      story: `<p class="lead">学習者は id セレクタで勇者を、class セレクタで3枚のコインを選び、別々のアニメーションを付ける。</p>
<p>id は、ページの中で1つの要素に付ける名前である。class は、複数の要素にまとめて付けるグループ名である。セレクタでは、id の前に <code>#</code>、class の前に <code>.</code> を付ける。</p>
<p><code>$('#hero')</code> は id が hero の要素を1つ選ぶ。<code>$('.coin')</code> は class に coin を持つ要素をすべて選ぶ。</p>`,
      code: `// id が hero の要素（1つ）を選ぶ
$('#hero').fadeOut(1000);

// class が coin の要素（すべて）を選ぶ
$('.coin').slideUp(2000);`,
      blank: "$('.coin').slideUp(2000);",
      placeholder: '// class が coin の要素すべてを 2000 ミリ秒かけて縮める命令が入る',
      token: /\$\(\s*["']\.coin["']\s*\)\.slideUp\(\s*2000\s*\)/,
      hint: "<code>$('.coin').slideUp(2000);</code> と書く。class の前には <code>.</code> を付ける。"
    }, `  <div id="hero" class="card">勇者</div>
  <div class="card coin">コイン 1</div>
  <div class="card coin">コイン 2</div>
  <div class="card coin">コイン 3</div>`),
    L({
      id: 'jquery-05',
      phase: 'jQuery の基礎',
      title: '要素の表示',
      story: `<p class="lead">学習者は CSS で隠した宝物を fadeIn と slideDown で表示する。</p>
<p>CSS で <code>display: none;</code> を指定した要素は、ページを開いた時点で隠れている。<code>fadeIn()</code> は隠れた要素を少しずつ濃くして表示し、<code>slideDown()</code> は上から下へ広げて表示する。<code>show()</code> は一瞬で表示する。</p>
<p>この方法は、最初は隠しておき、あとで見せたい要素に使う。メッセージやメニューの表示によく使われる。</p>`,
      code: `// CSS で隠した要素を表示する
$('#treasure').fadeIn(1500);
$('#bonus').slideDown(1000);`,
      blank: "$('#treasure').fadeIn(1500);",
      placeholder: '// id が treasure の要素を 1500 ミリ秒かけて表示する命令が入る',
      token: /\$\(\s*["']#treasure["']\s*\)\.fadeIn\(\s*1500\s*\)/,
      hint: "<code>$('#treasure').fadeIn(1500);</code> と書く。"
    }, `  <h1>宝箱を開けた</h1>
  <div id="treasure" class="card">伝説の剣を手に入れた</div>
  <div id="bonus" class="card">ボーナス：経験値 500</div>`, `#treasure, #bonus { display: none; }
#treasure { background: #ffd166; font-weight: bold; }`),
    L({
      id: 'jquery-06',
      phase: 'jQuery の基礎',
      title: 'click イベント',
      story: `<p class="lead">学習者はボタンのクリックをきっかけに、タイトルを消してマップを表示する。</p>
<p>イベントは、クリックやキー入力など、ページの上で起こる出来事である。<code>$('#start').on('click', function() { … });</code> と書くと、ボタンがクリックされた時点で中かっこの中の処理が実行される。この function を、イベントの処理を担う関数という意味でイベントハンドラと呼ぶ。</p>
<p>同じ処理は <code>$('#start').click(function() { … });</code> という短い形でも書ける。</p>`,
      code: `$('#start').on('click', function() {
  $('#title').fadeOut();
  $('#map').fadeIn();
});`,
      blank: "$('#start').on('click', function() {",
      placeholder: '// id が start のボタンをクリックしたときの処理の始まりが入る',
      token: /\$\(\s*["']#start["']\s*\)\.(on\(\s*["']click["']\s*,|click\()\s*function\s*\(\s*\)\s*\{/,
      hint: "<code>$('#start').on('click', function() {</code> と書く。"
    }, `  <h1 id="title">ダンジョン探索</h1>
  <button id="start">冒険を始める</button>
  <div id="map" class="card">第1階層に入った。左右に道がある。</div>`, `#map { display: none; }`),
    L({
      id: 'jquery-07',
      phase: 'jQuery の基礎',
      title: 'css メソッド',
      story: `<p class="lead">学習者は css メソッドで、クリックした時点の勇者の背景色と文字の大きさを変える。</p>
<p><code>css('プロパティ名', '値')</code> は、要素の CSS を書きかえるメソッドである。プロパティ名は CSS と同じ書き方（background-color など）を使う。</p>
<p>複数のプロパティを一度に変えるときは、<code>{ 'font-size': '24px', 'font-weight': 'bold' }</code> のようなオブジェクトを渡す。オブジェクトは、「名前: 値」の組を中かっこでまとめたデータである。</p>`,
      code: `$('#power').on('click', function() {
  $('#hero').css('background-color', '#ffd166');
  $('#hero').css({ 'font-size': '24px', 'font-weight': 'bold' });
});`,
      blank: "  $('#hero').css('background-color', '#ffd166');",
      placeholder: '  // hero の背景色を #ffd166 にする命令が入る',
      token: /\$\(\s*["']#hero["']\s*\)\.css\(\s*["']background-color["']\s*,\s*["']#ffd166["']\s*\)/,
      hint: "<code>$('#hero').css('background-color', '#ffd166');</code> と書く。"
    }, `  <div id="hero" class="card">勇者 HP 100</div>
  <button id="power">パワーアップ</button>`),
    L({
      id: 'jquery-08',
      phase: 'jQuery の基礎',
      title: 'text と html',
      story: `<p class="lead">学習者は text と html の2つのメソッドで、バトルのログを書きかえる。</p>
<p><code>text('文字')</code> は、要素の中身を文字として書きかえる。タグを含めても、タグはそのまま文字として表示される。<code>html('&lt;strong&gt;文字&lt;/strong&gt;')</code> は、中身を HTML として解釈し、タグの効果を反映する。</p>
<p>利用者が入力した文字を表示する場面では text を使う。html に入力をそのまま渡すと、悪意のあるタグが実行される危険がある。</p>`,
      code: `$('#attack').on('click', function() {
  $('#log').text('スライムに 10 のダメージ');
});

$('#critical').on('click', function() {
  $('#log').html('<strong>会心の一撃</strong>：スライムに 30 のダメージ');
});`,
      blank: "  $('#log').html('<strong>会心の一撃</strong>：スライムに 30 のダメージ');",
      placeholder: '  // log の中身を、strong タグを含む HTML として書きかえる命令が入る',
      token: /\$\(\s*["']#log["']\s*\)\.html\(\s*["']<strong>/,
      hint: "<code>$('#log').html('&lt;strong&gt;会心の一撃&lt;/strong&gt;：スライムに 30 のダメージ');</code> と書く。"
    }, `  <div id="log" class="card">スライムが現れた</div>
  <button id="attack">攻撃</button>
  <button id="critical">会心の一撃</button>`),
    L({
      id: 'jquery-09',
      phase: 'jQuery の基礎',
      title: 'this',
      story: `<p class="lead">学習者は $(this) を使い、クリックされたモンスターのカードに限り色を変える。</p>
<p>イベントハンドラの中で <code>$('.monster')</code> と書くと、3枚のカードすべてが選ばれる。<code>this</code> は、イベントが起きた要素そのものを指す言葉である。<code>$(this)</code> と書くと、その要素を jQuery で操作できる。</p>
<p>この仕組みを使うと、同じ class を持つ複数の要素に1つのイベントハンドラを付け、操作の対象をクリックされた要素に絞れる。</p>`,
      code: `$('.monster').on('click', function() {
  $(this).css('background-color', '#ffd166');
});`,
      blank: "  $(this).css('background-color', '#ffd166');",
      placeholder: '  // クリックされた要素の背景色を #ffd166 にする命令が入る',
      token: /\$\(\s*this\s*\)\.css\(\s*["']background-color["']\s*,\s*["']#ffd166["']\s*\)/,
      hint: "<code>$(this).css('background-color', '#ffd166');</code> と書く。"
    }, `  <p>仲間にするモンスターをクリックする。</p>
  <div class="card monster">スライム</div>
  <div class="card monster">ゴブリン</div>
  <div class="card monster">ドラゴン</div>`, `.monster { cursor: pointer; }`),
    L({
      id: 'jquery-10',
      phase: 'jQuery の基礎',
      title: '変数とメソッドチェーン',
      story: `<p class="lead">学習者はボスの要素を変数に入れ、css・fadeOut・fadeIn をメソッドチェーンでつなげる。</p>
<p>同じ要素を何度も使うときは、<code>const $boss = $('#boss');</code> のように変数に入れる。jQuery で選んだ要素を入れる変数には、目印として先頭に $ を付ける書き方が広く使われる。変数に入れると、ブラウザが要素を探す回数が1回で済む。</p>
<p>メソッドチェーンは、メソッドをドットで続けて書く方法である。多くの jQuery のメソッドは選んだ要素を返すため、続けて次のメソッドを呼べる。アニメーションは書いた順に実行される。</p>`,
      code: `const $boss = $('#boss');

$('#hit').on('click', function() {
  // 赤くして、点滅させる
  $boss.css('color', '#e63946').fadeOut(200).fadeIn(200);
});`,
      blank: "  $boss.css('color', '#e63946').fadeOut(200).fadeIn(200);",
      placeholder: '  // $boss の文字を赤くし、200 ミリ秒ずつ消えて現れる命令をつなげて書く',
      token: /\$boss\.css\([^)]*\)\.fadeOut\(\s*200\s*\)\.fadeIn\(\s*200\s*\)/,
      hint: "<code>$boss.css('color', '#e63946').fadeOut(200).fadeIn(200);</code> と書く。"
    }, `  <div id="boss" class="card">ボス：ドラゴン HP 999</div>
  <button id="hit">攻撃する</button>`),
    L({
      id: 'jquery-11',
      phase: 'jQuery の基礎',
      title: 'find と children',
      story: `<p class="lead">学習者は children で直下の見出しを、find で中の li 要素を選び、それぞれの見た目を変える。</p>
<p><code>children()</code> は、要素の直下にある子要素を選ぶメソッドである。<code>find()</code> は、子・孫・その先まで、内側にあるすべての要素から探すメソッドである。</p>
<p>この例の li は ul の中、つまりパーティーの枠から見て孫の位置にある。そのため li は find で探す。かっこの中にはセレクタを書く。</p>`,
      code: `$('.party').on('click', function() {
  $(this).children('h3').css('color', '#e76f51');
  $(this).find('li').css('font-weight', 'bold');
});`,
      blank: "  $(this).find('li').css('font-weight', 'bold');",
      placeholder: '  // クリックされた要素の内側の li をすべて太字にする命令が入る',
      token: /\$\(\s*this\s*\)\.find\(\s*["']li["']\s*\)\.css\(\s*["']font-weight["']\s*,\s*["']bold["']\s*\)/,
      hint: "<code>$(this).find('li').css('font-weight', 'bold');</code> と書く。"
    }, `  <div class="party card">
    <h3>勇者のパーティー</h3>
    <ul>
      <li>勇者 Lv.15</li>
      <li>魔法使い Lv.14</li>
      <li>僧侶 Lv.13</li>
    </ul>
  </div>`, `.party { cursor: pointer; }`),
    L({
      id: 'jquery-12',
      phase: 'jQuery の基礎',
      title: 'hover イベント',
      story: `<p class="lead">学習者は hover イベントで、マウスを乗せたステージの説明を表示し、離したときに隠す。</p>
<p><code>hover(関数1, 関数2)</code> は、マウスが要素に乗った時点で関数1を、要素から離れた時点で関数2を実行するメソッドである。</p>
<p>ここでは <code>$(this).find('.info')</code> で、マウスを乗せたカードの内側の説明文に限り操作する。this と find を組み合わせると、同じ形のカードが何枚あっても1つのコードで動く。</p>`,
      code: `$('.stage').hover(
  function() {
    $(this).find('.info').fadeIn();
  },
  function() {
    $(this).find('.info').fadeOut();
  }
);`,
      blank: "    $(this).find('.info').fadeIn();",
      placeholder: '    // マウスを乗せたカードの .info を表示する命令が入る',
      token: /\$\(\s*this\s*\)\.find\(\s*["']\.info["']\s*\)\.fadeIn\(/,
      hint: "<code>$(this).find('.info').fadeIn();</code> と書く。"
    }, `  <div class="card stage">草原ステージ<p class="info">難易度：やさしい</p></div>
  <div class="card stage">洞窟ステージ<p class="info">難易度：ふつう</p></div>
  <div class="card stage">火山ステージ<p class="info">難易度：むずかしい</p></div>`, `.info { display: none; margin: 4px 0 0; color: #e76f51; }`),
    L({
      id: 'jquery-13',
      phase: '総合演習',
      title: '総合：新規登録モーダル',
      story: `<p class="lead">学習者は「新規登録」ボタンでモーダルを表示し、「閉じる」ボタンでモーダルを隠す。</p>
<p>モーダルは、ページの上に重ねて表示する小さな窓である。CSS で背景の暗い幕（.overlay）を画面全体に広げ、最初は <code>display: none;</code> で隠しておく。</p>
<p>開くボタンには fadeIn、閉じるボタンには fadeOut を割り当てる。click イベントと表示のメソッドの組み合わせで、会員登録の画面によくある動きが完成する。</p>`,
      code: `$('#signup-btn').on('click', function() {
  $('#signup-modal').fadeIn();
});

$('#close-btn').on('click', function() {
  $('#signup-modal').fadeOut();
});`,
      blank: "  $('#signup-modal').fadeOut();",
      placeholder: '  // signup-modal を少しずつ消す命令が入る',
      token: /\$\(\s*["']#signup-modal["']\s*\)\.fadeOut\(/,
      hint: "<code>$('#signup-modal').fadeOut();</code> と書く。"
    }, `  <h1>BEAST ゲームズ</h1>
  <button id="signup-btn">新規登録</button>
  <div id="signup-modal" class="overlay">
    <div class="modal">
      <h2>新規登録</h2>
      <p><input placeholder="プレイヤー名"></p>
      <p><input type="password" placeholder="パスワード"></p>
      <button>登録する</button>
      <button id="close-btn">閉じる</button>
    </div>
  </div>`, `.overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); }
.modal { background: #fff; width: 260px; margin: 60px auto; padding: 20px; border-radius: 10px; }
.modal input { width: 100%; padding: 6px; box-sizing: border-box; }`),
    L({
      id: 'jquery-14',
      phase: '総合演習',
      title: '総合：レッスン一覧',
      story: `<p class="lead">学習者はレッスン一覧にマウスを乗せた時点で、説明文を広げ、矢印の色を変える。</p>
<p>この演習では、hover・this・find・children・css を組み合わせる。説明文（.lesson-text）は li の内側にあるため find で探す。矢印（.icon）は li の直下にあるため children で選ぶ。</p>
<p>マウスを離したときの関数では、開いた説明文を閉じ、矢印の色を元に戻す。2つの関数を対にすると、表示の状態が常にマウスの位置と一致する。</p>`,
      code: `$('.lesson').hover(
  function() {
    $(this).find('.lesson-text').slideDown(200);
    $(this).children('.icon').css('color', '#e76f51');
  },
  function() {
    $(this).find('.lesson-text').slideUp(200);
    $(this).children('.icon').css('color', '#333');
  }
);`,
      blank: "    $(this).children('.icon').css('color', '#e76f51');",
      placeholder: '    // 直下の .icon の文字色を #e76f51 にする命令が入る',
      token: /\$\(\s*this\s*\)\.children\(\s*["']\.icon["']\s*\)\.css\(\s*["']color["']\s*,\s*["']#e76f51["']\s*\)/,
      hint: "<code>$(this).children('.icon').css('color', '#e76f51');</code> と書く。"
    }, `  <h2>ゲーム制作コース</h2>
  <ul>
    <li class="lesson card"><span class="icon">▶</span> キャラクターを動かす<p class="lesson-text">キー入力で主人公を上下左右に動かす。</p></li>
    <li class="lesson card"><span class="icon">▶</span> 当たり判定<p class="lesson-text">敵とぶつかったら HP を減らす。</p></li>
    <li class="lesson card"><span class="icon">▶</span> スコアとタイマー<p class="lesson-text">制限時間の中でスコアを競う。</p></li>
  </ul>`, `.lesson { cursor: pointer; }
.icon { color: #333; }
.lesson-text { display: none; margin: 6px 0 0; color: #555; }`),
    L({
      id: 'jquery-15',
      phase: '総合演習',
      title: '総合：アコーディオン',
      story: `<p class="lead">学習者は質問をクリックするたびに答えを開閉する、Q&amp;A のアコーディオンを作る。</p>
<p>アコーディオンは、見出しのクリックで中身を開いたり閉じたりする部品である。開閉の状態を覚えるために class を使う。<code>hasClass('open')</code> は要素が open クラスを持つかを true か false で返し、<code>addClass</code> はクラスを加え、<code>removeClass</code> はクラスを取り除く。</p>
<p>if 文で状態を調べ、開いていれば閉じ、閉じていれば開く。記号の「+」と「-」も状態に合わせて書きかえる。</p>`,
      code: `$('.faq-item').on('click', function() {
  const $answer = $(this).find('.answer');
  if ($answer.hasClass('open')) {
    $answer.removeClass('open').slideUp();
    $(this).find('.mark').text('+');
  } else {
    $answer.addClass('open').slideDown();
    $(this).find('.mark').text('-');
  }
});`,
      blank: "  if ($answer.hasClass('open')) {",
      placeholder: '  // $answer が open クラスを持つかを調べる if 文の1行目が入る',
      token: /if\s*\(\s*\$answer\.hasClass\(\s*["']open["']\s*\)\s*\)\s*\{/,
      hint: "<code>if ($answer.hasClass('open')) {</code> と書く。"
    }, `  <h2>ゲームの遊び方 Q&amp;A</h2>
  <div class="faq-item card"><p class="question"><span class="mark">+</span> セーブはどこで行う？</p><p class="answer">町の宿屋で行う。</p></div>
  <div class="faq-item card"><p class="question"><span class="mark">+</span> 回復の方法は？</p><p class="answer">回復ポーションを使うか、教会で休む。</p></div>
  <div class="faq-item card"><p class="question"><span class="mark">+</span> 最強の武器はどこにある？</p><p class="answer">火山の奥の宝箱の中にある。</p></div>`, `.faq-item { cursor: pointer; }
.question { margin: 0; font-weight: bold; }
.mark { display: inline-block; width: 1em; color: #e76f51; }
.answer { display: none; margin: 8px 0 0; color: #555; }`),
    L({
      id: 'jquery-16',
      phase: 'スライドショー',
      title: 'eq メソッド',
      story: `<p class="lead">学習者は eq メソッドで5つのステージから3番目を選び、背景色を変える。</p>
<p><code>$('.stage')</code> は、class が stage の要素をすべて選ぶ。<code>eq(番号)</code> は、選んだ要素の中から指定した番号の要素を1つ取り出すメソッドである。番号は 0 から数える。最初の要素が 0、3番目の要素が 2 である。</p>
<p>ここでは、まずすべてのステージの背景を白に戻し、その後に eq(2) の要素に限り色を付ける。この「全部を戻してから1つに付ける」手順は、スライドの切りかえでも使う。</p>`,
      code: `$('#pick').on('click', function() {
  $('.stage').css('background-color', '#fff');
  $('.stage').eq(2).css('background-color', '#ffd166');
});`,
      blank: "  $('.stage').eq(2).css('background-color', '#ffd166');",
      placeholder: '  // .stage の 3 番目（番号 2）の背景色を #ffd166 にする命令が入る',
      token: /\$\(\s*["']\.stage["']\s*\)\.eq\(\s*2\s*\)\.css\(/,
      hint: "<code>$('.stage').eq(2).css('background-color', '#ffd166');</code> と書く。番号は 0 から数える。"
    }, `  <ul>
    <li class="stage card">ステージ1 草原</li>
    <li class="stage card">ステージ2 森</li>
    <li class="stage card">ステージ3 洞窟</li>
    <li class="stage card">ステージ4 雪山</li>
    <li class="stage card">ステージ5 火山</li>
  </ul>
  <button id="pick">ステージ3 を選ぶ</button>`),
    L({
      id: 'jquery-17',
      phase: 'スライドショー',
      title: 'スライドの切り替え',
      story: `<p class="lead">学習者は変数 current と eq メソッドを使い、「次へ」ボタンでスライドを1枚ずつ切りかえる。</p>
<p>CSS では、.slide を非表示、.slide.active を表示と決めてある。表示中のスライドの番号を変数 current に覚えておく。ボタンを押したら、今のスライドから active を取り除き、current を 1 増やし、新しいスライドに active を付ける。</p>
<p>スライドは3枚（番号 0〜2）である。current が 2 を超えたら 0 に戻すと、最後のスライドの次に最初のスライドが表示される。</p>`,
      code: `let current = 0;

$('#next-btn').on('click', function() {
  $('.slide').eq(current).removeClass('active');
  current = current + 1;
  if (current > 2) {
    current = 0;
  }
  $('.slide').eq(current).addClass('active');
});`,
      blank: "  $('.slide').eq(current).addClass('active');",
      placeholder: '  // 番号 current のスライドに active クラスを付ける命令が入る',
      token: /\$\(\s*["']\.slide["']\s*\)\.eq\(\s*current\s*\)\.addClass\(\s*["']active["']\s*\)/,
      hint: "<code>$('.slide').eq(current).addClass('active');</code> と書く。"
    }, SLIDES3 + `
  <button id="next-btn">次へ</button>`, SLIDE_CSS),
    L({
      id: 'jquery-18',
      phase: 'スライドショー',
      title: 'index メソッド',
      story: `<p class="lead">学習者は index メソッドでクリックされた点の番号を求め、同じ番号のスライドを表示する。</p>
<p><code>$('.dot').index($(this))</code> は、すべての .dot の中で、クリックされた要素が何番目かを 0 から数えた番号で返す。index は eq の逆の働きをするメソッドである。eq は番号から要素を、index は要素から番号を求める。</p>
<p>求めた番号を eq に渡すと、点とスライドの対応がとれる。点の色も active クラスで切りかえる。</p>`,
      code: `$('.dot').on('click', function() {
  const clicked = $('.dot').index($(this));
  console.log(clicked + ' 番の点がクリックされた');

  $('.slide.active').removeClass('active');
  $('.slide').eq(clicked).addClass('active');

  $('.dot.active').removeClass('active');
  $(this).addClass('active');
});`,
      blank: "  const clicked = $('.dot').index($(this));",
      placeholder: '  // クリックされた点が .dot の中で何番目かを clicked に入れる行が入る',
      token: /const\s+clicked\s*=\s*\$\(\s*["']\.dot["']\s*\)\.index\(\s*(\$\(\s*this\s*\)|this)\s*\)/,
      hint: "<code>const clicked = $('.dot').index($(this));</code> と書く。"
    }, SLIDES3 + `
  <div class="dots"><span class="dot active"></span><span class="dot"></span><span class="dot"></span></div>`, SLIDE_CSS + `
.dots { text-align: center; }
.dot { display: inline-block; width: 14px; height: 14px; margin: 4px; border-radius: 50%; background: #ccc; cursor: pointer; }
.dot.active { background: #e76f51; }`),
    L({
      id: 'jquery-19',
      phase: 'スライドショー',
      title: 'prev と next',
      story: `<p class="lead">学習者は prev と next で、選択中のコマンドの1つ上と1つ下の要素を選び、カーソルを動かす。</p>
<p><code>next()</code> は要素のすぐ後ろの兄弟要素を、<code>prev()</code> はすぐ前の兄弟要素を選ぶメソッドである。兄弟要素は、同じ親を持つ要素どうしである。</p>
<p>一番下の項目の next() は、空の結果を返す。そこで <code>hasClass('item')</code> で移動先が項目かを確かめ、項目である場合に限り active を移す。</p>`,
      code: `$('#down').on('click', function() {
  const $current = $('.item.active');
  if ($current.next().hasClass('item')) {
    $current.removeClass('active');
    $current.next().addClass('active');
  }
});

$('#up').on('click', function() {
  const $current = $('.item.active');
  if ($current.prev().hasClass('item')) {
    $current.removeClass('active');
    $current.prev().addClass('active');
  }
});`,
      blank: "    $current.prev().addClass('active');",
      placeholder: '    // 1つ前の兄弟要素に active クラスを付ける命令が入る',
      token: /\$current\.prev\(\s*\)\.addClass\(\s*["']active["']\s*\)/,
      hint: "<code>$current.prev().addClass('active');</code> と書く。"
    }, `  <ul id="menu" class="card">
    <li class="item active">たたかう</li>
    <li class="item">まほう</li>
    <li class="item">どうぐ</li>
    <li class="item">にげる</li>
  </ul>
  <button id="up">上へ</button>
  <button id="down">下へ</button>`, `.item { padding: 6px 10px; }
.item.active { background: #264653; color: #fff; border-radius: 4px; }
.item.active::before { content: '▶ '; }`),
    L({
      id: 'jquery-20',
      phase: 'スライドショー',
      title: 'ボタンの表示と非表示',
      story: `<p class="lead">学習者は最初のスライドで「前へ」を、最後のスライドで「次へ」を隠し、その場面で役目を持つボタンに限り表示する。</p>
<p>ページを開いた時点では1枚目のスライドを表示しているため、「前へ」を hide で隠す。「次へ」を押したら「前へ」を show で表示し、最後のスライド（番号 2）に着いたら「次へ」を隠す。</p>
<p>「前へ」を押したときは反対の処理を行う。ボタンの表示を状態に合わせて変えると、利用者は今どこにいるかを直感的に理解できる。</p>`,
      code: `let current = 0;
$('#prev-btn').hide();

$('#next-btn').on('click', function() {
  $('.slide').eq(current).removeClass('active');
  current = current + 1;
  $('.slide').eq(current).addClass('active');
  $('#prev-btn').show();
  if (current === 2) {
    $('#next-btn').hide();
  }
});

$('#prev-btn').on('click', function() {
  $('.slide').eq(current).removeClass('active');
  current = current - 1;
  $('.slide').eq(current).addClass('active');
  $('#next-btn').show();
  if (current === 0) {
    $('#prev-btn').hide();
  }
});`,
      blank: "    $('#next-btn').hide();",
      placeholder: '    // 次へボタンを隠す命令が入る',
      token: /\$\(\s*["']#next-btn["']\s*\)\.hide\(\s*\)/,
      hint: "<code>$('#next-btn').hide();</code> と書く。"
    }, SLIDES3 + `
  <button id="prev-btn">前へ</button>
  <button id="next-btn">次へ</button>`, SLIDE_CSS),
    L({
      id: 'jquery-21',
      phase: 'スライドショー',
      title: '関数',
      story: `<p class="lead">学習者はスライドを切りかえる処理を関数 showSlide にまとめ、2つのボタンから呼び出す。</p>
<p>関数は、処理のまとまりに名前を付けたものである。<code>function showSlide(index) { … }</code> の index は引数であり、呼び出すときに渡した値が入る。前のレッスンのコードには、ほぼ同じ処理が2回現れていた。関数にまとめると、修正の場所が1か所になる。</p>
<p>「次へ」では <code>showSlide(current + 1)</code>、「前へ」では <code>showSlide(current - 1)</code> を呼ぶ。ボタンの表示と非表示も関数の中で行う。</p>`,
      code: `let current = 0;

function showSlide(index) {
  $('.slide.active').removeClass('active');
  $('.slide').eq(index).addClass('active');
  current = index;

  if (current === 0) {
    $('#prev-btn').hide();
  } else {
    $('#prev-btn').show();
  }
  if (current === 2) {
    $('#next-btn').hide();
  } else {
    $('#next-btn').show();
  }
}

showSlide(0);

$('#next-btn').on('click', function() {
  showSlide(current + 1);
});

$('#prev-btn').on('click', function() {
  showSlide(current - 1);
});`,
      blank: '  showSlide(current + 1);',
      placeholder: '  // 番号 current + 1 のスライドを表示する関数の呼び出しが入る',
      token: /showSlide\(\s*current\s*\+\s*1\s*\)/,
      hint: '<code>showSlide(current + 1);</code> と書く。'
    }, SLIDES3 + `
  <button id="prev-btn">前へ</button>
  <button id="next-btn">次へ</button>`, SLIDE_CSS),
    L({
      id: 'jquery-22',
      phase: 'スライドショー',
      title: 'length',
      story: `<p class="lead">学習者は length でスライドの枚数を数え、枚数が変わっても動くスライドショーにする。</p>
<p><code>$('.slide').length</code> は、選んだ要素の数を表す。前のレッスンでは最後の番号を 2 と直接書いた。この書き方では、スライドを1枚増やすたびにコードを直す必要がある。</p>
<p>枚数を変数 total に入れ、最後の番号を <code>total - 1</code> と書くと、HTML のスライドを増やしても同じコードで動く。ここではスライドを4枚に増やし、「1 / 4」のような表示も加える。</p>`,
      code: `const total = $('.slide').length;
let current = 0;

function showSlide(index) {
  $('.slide.active').removeClass('active');
  $('.slide').eq(index).addClass('active');
  current = index;
  $('#counter').text((current + 1) + ' / ' + total);

  if (current === 0) {
    $('#prev-btn').hide();
  } else {
    $('#prev-btn').show();
  }
  if (current === total - 1) {
    $('#next-btn').hide();
  } else {
    $('#next-btn').show();
  }
}

showSlide(0);
$('#next-btn').on('click', function() { showSlide(current + 1); });
$('#prev-btn').on('click', function() { showSlide(current - 1); });`,
      blank: "const total = $('.slide').length;",
      placeholder: '// .slide の数を定数 total に入れる行が入る',
      token: /const\s+total\s*=\s*\$\(\s*["']\.slide["']\s*\)\.length/,
      hint: "<code>const total = $('.slide').length;</code> と書く。length はメソッドとは異なり、後ろのかっこを省いて書く。"
    }, `  <div class="slides">
    <div class="slide card active">ステージ1：はじまりの草原</div>
    <div class="slide card">ステージ2：氷の洞窟</div>
    <div class="slide card">ステージ3：炎の火山</div>
    <div class="slide card">ステージ4：天空の城</div>
  </div>
  <p id="counter"></p>
  <button id="prev-btn">前へ</button>
  <button id="next-btn">次へ</button>`, SLIDE_CSS),
    L({
      id: 'jquery-23',
      phase: 'フォーム',
      title: '要素の値の取得',
      story: `<p class="lead">学習者は attr メソッドでクリックされた画像の src と data-name を取得し、大きな画像と名前を書きかえる。</p>
<p>属性は、<code>src="…"</code> や <code>href="…"</code> のように、タグの中に書く追加の情報である。<code>attr('属性名')</code> は属性の値を取得し、<code>attr('属性名', '値')</code> は属性の値を書きかえる。</p>
<p>data- で始まる属性（data 属性）には、ページの作り手が自由な情報を入れられる。ここでは各キャラクターの名前を data-name に入れてある。</p>`,
      code: `$('.thumb').on('click', function() {
  const src = $(this).attr('src');
  const name = $(this).attr('data-name');

  $('#main-img').attr('src', src.replace('80x80', '240x160'));
  $('#name').text(name);
});`,
      blank: "  const name = $(this).attr('data-name');",
      placeholder: '  // クリックされた画像の data-name 属性の値を name に入れる行が入る',
      token: /const\s+name\s*=\s*\$\(\s*this\s*\)\.attr\(\s*["']data-name["']\s*\)/,
      hint: "<code>const name = $(this).attr('data-name');</code> と書く。"
    }, `  <img id="main-img" src="https://placehold.co/240x160?text=Select" alt="選んだキャラクター">
  <p id="name">キャラクターを選ぶ</p>
  <img class="thumb" src="https://placehold.co/80x80/e63946/ffffff?text=Fire" data-name="ファイアドラゴン" alt="">
  <img class="thumb" src="https://placehold.co/80x80/457b9d/ffffff?text=Ice" data-name="アイスウルフ" alt="">
  <img class="thumb" src="https://placehold.co/80x80/2a9d8f/ffffff?text=Leaf" data-name="リーフスライム" alt="">`, `.thumb { cursor: pointer; border-radius: 8px; margin-right: 6px; }
#main-img { border-radius: 10px; }
#name { font-weight: bold; }`),
    L({
      id: 'jquery-24',
      phase: 'フォーム',
      title: '入力欄の値',
      story: `<p class="lead">学習者は val メソッドで入力欄の文字を取得し、プレイヤー名を使ったメッセージを表示する。</p>
<p>入力欄（input 要素）に打ち込まれた文字は、<code>val()</code> メソッドで取得する。val は、フォームの部品の「値」を扱うメソッドである。</p>
<p>決定ボタンのクリックの時点で val() を呼ぶと、その瞬間に入力欄に入っている文字が手に入る。取得した文字は、文字列の連結（+）でメッセージに組み込める。</p>`,
      code: `$('#ok').on('click', function() {
  const name = $('#player-name').val();
  $('#greeting').text(name + ' の冒険が始まる');
});`,
      blank: "  const name = $('#player-name').val();",
      placeholder: '  // 入力欄 player-name の値を name に入れる行が入る',
      token: /const\s+name\s*=\s*\$\(\s*["']#player-name["']\s*\)\.val\(\s*\)/,
      hint: "<code>const name = $('#player-name').val();</code> と書く。"
    }, `  <div class="card">
    <p><label>プレイヤー名：<input id="player-name" placeholder="名前を入力"></label></p>
    <button id="ok">決定</button>
    <p id="greeting"></p>
  </div>`),
    L({
      id: 'jquery-25',
      phase: 'フォーム',
      title: '選択ボックスの値',
      story: `<p class="lead">学習者は選択ボックスで選ばれた職業の値を val で取得し、職業ごとの能力を表示する。</p>
<p>選択ボックス（select 要素）の val() は、選ばれている option の value 属性の値を返す。画面に見える文字（「戦士」など）が欲しいときは、<code>$('#job option:selected').text()</code> と書く。</p>
<p><code>change</code> イベントは、選択ボックスの選択が変わった時点で起こる。オブジェクト stats に職業ごとの能力を入れておき、取得した value を名前にして値を取り出す。</p>`,
      code: `const stats = {
  warrior: 'HP 120 / MP 10',
  mage: 'HP 70 / MP 80',
  thief: 'HP 90 / MP 30'
};

$('#job').on('change', function() {
  const job = $('#job').val();
  const label = $('#job option:selected').text();
  $('#status').text(label + '：' + stats[job]);
});`,
      blank: "  const job = $('#job').val();",
      placeholder: '  // 選択ボックス job で選ばれた値を job に入れる行が入る',
      token: /const\s+job\s*=\s*\$\(\s*["']#job["']\s*\)\.val\(\s*\)/,
      hint: "<code>const job = $('#job').val();</code> と書く。"
    }, FORM + `
    <p id="status">戦士：HP 120 / MP 10</p>
  </div>`),
    L({
      id: 'jquery-26',
      phase: 'フォーム',
      title: '入力チェック',
      story: `<p class="lead">学習者は if 文で入力欄を調べ、空欄や9文字以上の名前にエラーを表示する。</p>
<p>入力チェックは、送信の前に入力の内容が条件を満たすかを確かめる処理である。<code>val().trim()</code> は、入力の前後の空白を取り除いた文字を返す。空欄は <code>name === ''</code> で、長さは <code>name.length</code> で調べる。</p>
<p>条件に反する入力にはエラーの文を表示し、条件を満たす入力には登録の結果を表示する。else if を使うと、複数の条件を上から順に調べられる。</p>`,
      code: `$('#entry').on('click', function() {
  const name = $('#player-name').val().trim();
  if (name === '') {
    $('#error').text('プレイヤー名が空欄である');
    $('#result').text('');
  } else if (name.length > 8) {
    $('#error').text('プレイヤー名は 8 文字以内で入力する');
    $('#result').text('');
  } else {
    $('#error').text('');
    $('#result').text(name + '（' + $('#job option:selected').text() + '）を登録した');
  }
});`,
      blank: "  if (name === '') {",
      placeholder: '  // name が空の文字列かを調べる if 文の1行目が入る',
      token: /if\s*\(\s*name\s*===?\s*(''|"")\s*\)\s*\{/,
      hint: "<code>if (name === '') {</code> と書く。<code>''</code> は空の文字列を表す。"
    }, FORM + `
    <button id="entry">登録する</button>
    <p id="error"></p>
    <p id="result"></p>
  </div>`, `#error { color: #e63946; font-weight: bold; }
#result { color: #2a9d8f; font-weight: bold; }`),
    L({
      id: 'jquery-27',
      phase: 'フォーム',
      title: '自動入力と自動選択',
      story: `<p class="lead">学習者は「おまかせ」ボタンで、名前の入力欄と職業の選択ボックスに値を自動で入れる。</p>
<p><code>val(値)</code> のようにかっこに値を渡すと、val は値の取得から書き込みに働きが変わる。入力欄には文字が入り、選択ボックスでは value が一致する option が選ばれる。</p>
<p>Math.random() は 0 以上 1 未満の数をでたらめに返す。配列の長さを掛けて Math.floor で整数にすると、配列の番号をでたらめに1つ選べる。チェックボックスの場合は <code>prop('checked', true)</code> でチェックを入れる。</p>`,
      code: `const names = ['アキラ', 'ミライ', 'ソラ', 'カイ'];
const jobs = ['warrior', 'mage', 'thief'];

$('#random').on('click', function() {
  const name = names[Math.floor(Math.random() * names.length)];
  const job = jobs[Math.floor(Math.random() * jobs.length)];
  $('#player-name').val(name);
  $('#job').val(job);
});`,
      blank: "  $('#job').val(job);",
      placeholder: '  // 選択ボックス job で、変数 job と同じ value の項目を選ぶ命令が入る',
      token: /\$\(\s*["']#job["']\s*\)\.val\(\s*job\s*\)/,
      hint: "<code>$('#job').val(job);</code> と書く。"
    }, FORM + `
    <button id="random">おまかせ</button>
  </div>`),
    L({
      id: 'jquery-28',
      phase: 'スクロールとナビゲーション',
      title: 'ページ内リンク',
      story: `<p class="lead">学習者はメニューのリンクの href から移動先を求め、その位置までページをスクロールさせる。</p>
<p>ページ内リンクは、<code>href="#stage2"</code> のように # と id を書き、同じページの中の要素へ移動するリンクである。<code>$(this).attr('href')</code> で '#stage2' という文字を取得すると、そのまま <code>$('#stage2')</code> のセレクタとして使える。</p>
<p><code>offset().top</code> は、要素がページの上端から何ピクセル下にあるかを返す。<code>$('html, body').scrollTop(位置)</code> はページをその位置へスクロールさせる。最後の <code>return false;</code> は、リンク本来の移動を止める命令である。</p>`,
      code: `$('nav a').on('click', function() {
  const id = $(this).attr('href');
  const position = $(id).offset().top;
  $('html, body').scrollTop(position);
  return false;
});`,
      blank: '  const position = $(id).offset().top;',
      placeholder: '  // 移動先の要素のページ上端からの位置を position に入れる行が入る',
      token: /const\s+position\s*=\s*\$\(\s*id\s*\)\.offset\(\s*\)\.top/,
      hint: '<code>const position = $(id).offset().top;</code> と書く。'
    }, `  <nav><a href="#stage1">草原</a><a href="#stage2">洞窟</a><a href="#stage3">火山</a></nav>
` + SECTIONS, SECTION_CSS),
    L({
      id: 'jquery-29',
      phase: 'スクロールとナビゲーション',
      title: 'スクロールのアニメーション',
      story: `<p class="lead">学習者は animate メソッドで、ページを 0.6 秒かけてなめらかにスクロールさせる。</p>
<p><code>animate({ プロパティ: 目標の値 }, 時間)</code> は、指定した値まで少しずつ変化させるメソッドである。scrollTop を目標にすると、スクロールの位置がなめらかに変わる。</p>
<p>前のレッスンの scrollTop(position) を animate に置きかえると、一瞬で飛ぶ動きが、なめらかな移動に変わる。「トップへ」ボタンでは、目標の値を 0 にしてページの先頭へ戻す。</p>`,
      code: `$('nav a').on('click', function() {
  const id = $(this).attr('href');
  const position = $(id).offset().top;
  $('html, body').animate({ scrollTop: position }, 600);
  return false;
});

$('#top-btn').on('click', function() {
  $('html, body').animate({ scrollTop: 0 }, 600);
});`,
      blank: "  $('html, body').animate({ scrollTop: position }, 600);",
      placeholder: '  // ページを 600 ミリ秒かけて position までスクロールさせる命令が入る',
      token: /\.animate\(\s*\{\s*scrollTop\s*:\s*position\s*\}\s*,\s*600\s*\)/,
      hint: "<code>$('html, body').animate({ scrollTop: position }, 600);</code> と書く。"
    }, `  <nav><a href="#stage1">草原</a><a href="#stage2">洞窟</a><a href="#stage3">火山</a></nav>
` + SECTIONS + `
  <button id="top-btn">トップへ</button>`, SECTION_CSS + `
#top-btn { position: fixed; right: 16px; bottom: 16px; }`),
    L({
      id: 'jquery-30',
      phase: 'スクロールとナビゲーション',
      title: 'ナビゲーション',
      story: `<p class="lead">学習者はスクロールの量に合わせてヘッダーの見た目を変え、メニューのリンクでなめらかに移動するナビゲーションを完成させる。</p>
<p><code>$(window).on('scroll', …)</code> は、ページがスクロールされるたびに処理を実行する。<code>$(window).scrollTop()</code> は、今のスクロールの量をピクセルで返す。50 を超えたら scrolled クラスを付け、ヘッダーに影を付ける。</p>
<p>ヘッダーは画面の上に固定されているため、移動先の位置からヘッダーの高さ（<code>outerHeight()</code>）を引く。この調整で、見出しがヘッダーの下に隠れる問題を防ぐ。</p>`,
      code: `$(window).on('scroll', function() {
  if ($(window).scrollTop() > 50) {
    $('header').addClass('scrolled');
  } else {
    $('header').removeClass('scrolled');
  }
});

$('nav a').on('click', function() {
  const id = $(this).attr('href');
  const position = $(id).offset().top - $('header').outerHeight();
  $('html, body').animate({ scrollTop: position }, 600);
  return false;
});`,
      blank: '  if ($(window).scrollTop() > 50) {',
      placeholder: '  // スクロールの量が 50 を超えたかを調べる if 文の1行目が入る',
      token: /if\s*\(\s*\$\(\s*window\s*\)\.scrollTop\(\s*\)\s*>\s*50\s*\)\s*\{/,
      hint: '<code>if ($(window).scrollTop() &gt; 50) {</code> と書く。'
    }, `  <header><nav><a href="#stage1">草原</a><a href="#stage2">洞窟</a><a href="#stage3">火山</a></nav></header>
  <div class="spacer"></div>
` + SECTIONS, SECTION_CSS + `
header { position: fixed; top: 0; left: 0; right: 0; transition: box-shadow .3s; }
header.scrolled { box-shadow: 0 4px 12px rgba(0,0,0,.4); }
.spacer { height: 42px; }`)
  ];
})();

SERIES.os = [
  {
    id: 'os-01',
    phase: 'OS のしくみ',
    title: 'OS の役割（カーネル・ドライバ・アプリ）',
    type: 'info',
    run: 'static',
    file: 'README',
    story: `<p class="lead">学習者は、OS を構成するカーネル・デバイスドライバ・アプリの関係を確かめる。</p>
<p>OS（オペレーティングシステム）は、コンピュータの部品（ハードウェア）を管理し、アプリが共通の方法で部品を使えるようにする基本ソフトである。Windows、macOS、Linux、Android が代表例である。</p>
<ul>
<li><strong>カーネル</strong>：OS の中心部分である。CPU の時間、メモリ、ファイルを管理し、各アプリに分け与える。</li>
<li><strong>デバイスドライバ</strong>：キーボード、画面、ディスクなど、特定の機器を操作するための部品である。</li>
<li><strong>アプリ</strong>：利用者が直接使うプログラムである。アプリはシステムコールという窓口を通してカーネルに仕事を頼む。</li>
</ul>
<p>アプリが機器を直接操作すると、ほかのアプリのデータを壊す危険がある。そこで CPU は特権のレベルを持ち、機器の操作をカーネルモードに限る。このコースの学習者は、小さな OS を自作しながらこれらの仕組みを学ぶ。</p>`,
    output: ` アプリ（ゲーム・ブラウザ・エディタ）      … ユーザーモード
            │ システムコール
            ▼
 カーネル（プロセス・メモリ・ファイルの管理） … カーネルモード
            │
            ▼
 デバイスドライバ（キーボード・画面・ディスク）
            │
            ▼
 ハードウェア（CPU・メモリ・機器）`
  },
  {
    id: 'os-02',
    phase: 'OS のしくみ',
    title: 'コンピュータの起動（BIOS/UEFI・ブートローダ）',
    type: 'info',
    run: 'static',
    file: 'README',
    story: `<p class="lead">学習者は、電源を入れてから OS が動き出すまでの手順を確かめる。</p>
<p>電源を入れた直後の CPU は、マザーボードの ROM にある小さなプログラム（ファームウェア）を実行する。古いパソコンのファームウェアは BIOS、新しいパソコンのファームウェアは UEFI である。ファームウェアは、メモリや機器の点検を行い、起動に使うディスクを選ぶ。</p>
<ol>
<li><strong>BIOS の場合</strong>：ディスクの先頭 512 バイト（ブートセクタ）をメモリの 0x7C00 番地に読み込み、そこから実行を始める。末尾の2バイトが 0x55、0xAA の場合に限り、BIOS はそのディスクを起動用と判断する。</li>
<li><strong>UEFI の場合</strong>：ディスクの中の FAT 形式の領域から、.efi という形式のプログラムを読み込んで実行する。</li>
<li><strong>ブートローダ</strong>：カーネルをメモリに読み込み、CPU の動作モードを切りかえ、カーネルに実行を引き渡すプログラムである。GRUB が有名である。</li>
</ol>
<p>起動直後の x86 CPU は、16ビットのリアルモードで動く。リアルモードは、1MB までのメモリを扱う古い動作モードである。ブートローダやカーネルは、CPU を32ビットのプロテクトモードや64ビットのロングモードへ切りかえる。</p>`,
    output: `[電源 ON]
   ▼
[BIOS / UEFI]   機器の点検、起動ディスクの選択
   ▼
[ブートローダ]  0x7C00 番地（BIOS）や .efi（UEFI）から実行
   ▼
[カーネル]      メモリ・割り込み・ドライバの初期化
   ▼
[最初のプロセス] ログイン画面やシェルの起動`
  },
  {
    id: 'os-03',
    phase: 'OS のしくみ',
    title: 'CPU と機械語・アセンブリ',
    type: 'code',
    run: 'static',
    file: 'calc.asm',
    story: `<p class="lead">学習者は x86 のアセンブリで 3 + 4 を計算し、命令が機械語のバイト列に変わる様子を確かめる。</p>
<p>CPU が直接実行する命令は、数の並び（機械語）である。アセンブリ言語は、機械語の1命令を <code>mov</code> や <code>add</code> のような短い英単語で表した言語である。アセンブラ（NASM など）は、アセンブリ言語を機械語に変換する。</p>
<p>レジスタは、CPU の内部にある高速で小さな記憶場所である。x86 の16ビットのレジスタには AX、BX、CX、DX などがある。<code>mov ax, 3</code> は AX に 3 を入れ、<code>add ax, bx</code> は AX に BX を足して結果を AX に残す。<code>;</code> から行末まではコメントである。</p>`,
    code: `; calc.asm : 3 + 4 を計算して 2 倍にする
bits 16
mov ax, 3      ; AX レジスタに 3 を入れる
mov bx, 4      ; BX レジスタに 4 を入れる
add ax, bx     ; AX = AX + BX
shl ax, 1      ; 左へ 1 ビットずらす（2 倍）
`,
    blank: 'add ax, bx     ; AX = AX + BX',
    placeholder: '; AX に BX を足す命令が入る',
    token: /add\s+ax\s*,\s*bx/i,
    hint: '<code>add ax, bx</code> と書く。足される側のレジスタを先に書く。',
    output: `$ nasm -f bin calc.asm -o calc.bin
$ xxd calc.bin
00000000: b803 00bb 0400 01d8 d1e0                 ..........

b8 03 00  … mov ax, 3
bb 04 00  … mov bx, 4
01 d8     … add ax, bx
d1 e0     … shl ax, 1

実行後のレジスタ：AX = 14 (0x000E)、BX = 4`
  },
  {
    id: 'os-04',
    phase: 'OS のしくみ',
    title: 'メモリとアドレス',
    type: 'code',
    run: 'static',
    file: 'memory.c',
    story: `<p class="lead">学習者は C 言語のポインタで変数のアドレスを表示し、アドレスを通して値を書きかえる。</p>
<p>メモリは、1バイトずつ番号の付いた箱の長い列である。この番号をアドレスと呼ぶ。変数はメモリのどこかの箱に置かれ、<code>&amp;score</code> は変数 score のアドレスを表す。アドレスを入れる変数をポインタと呼び、<code>int *p</code> のように * を付けて作る。</p>
<p><code>*p = 100;</code> は「p が指すアドレスの箱に 100 を書く」という意味である。OS のカーネルは、この仕組みで画面や機器に対応する特定のアドレスへ直接書き込む。配列の要素は連続したアドレスに並び、int（4バイト）の配列ではアドレスが 4 ずつ増える。このプログラムは <code>gcc memory.c -o memory &amp;&amp; ./memory</code> で実行する。</p>`,
    code: `#include <stdio.h>

int main(void) {
    int score = 42;
    int *p = &score;          // score のアドレスを p に入れる

    printf("score の値      : %d\\n", score);
    printf("score のアドレス: %p\\n", (void *)p);

    *p = 100;                 // アドレスを通して値を書きかえる
    printf("書きかえ後の値  : %d\\n", score);

    int hp[3] = {10, 20, 30};
    for (int i = 0; i < 3; i++) {
        printf("hp[%d] のアドレス: %p\\n", i, (void *)&hp[i]);
    }
    return 0;
}
`,
    blank: '    int *p = &score;          // score のアドレスを p に入れる',
    placeholder: '    // score のアドレスを入れるポインタ p を作る行が入る',
    token: /int\s*\*\s*p\s*=\s*&\s*score/,
    hint: '<code>int *p = &amp;score;</code> と書く。<code>&amp;</code> は変数のアドレスを表す。',
    output: `score の値      : 42
score のアドレス: 0x7ffd5e3c8a1c
書きかえ後の値  : 100
hp[0] のアドレス: 0x7ffd5e3c8a10
hp[1] のアドレス: 0x7ffd5e3c8a14
hp[2] のアドレス: 0x7ffd5e3c8a18
（アドレスの値は実行のたびに変わる）`
  },
  {
    id: 'os-05',
    phase: 'ブートローダ',
    title: '開発環境の準備（NASM と QEMU）',
    type: 'info',
    run: 'static',
    file: 'terminal',
    story: `<p class="lead">学習者は NASM と QEMU をパソコンに入れ、自作の OS を仮想のパソコンで起動する準備を整える。</p>
<p>NASM は x86 のアセンブラである。QEMU は、パソコンの中に仮想のパソコンを作るソフト（エミュレータ）である。自作の OS を実機で試すと失敗のたびに再起動が必要になるため、QEMU の上で試す。C 言語のカーネルには、OS が動き出す前の環境（ベアメタル）向けの機械語を作るクロスコンパイラ（i686-elf-gcc）を使う。</p>
<ul>
<li><strong>macOS</strong>：<code>brew install nasm qemu i686-elf-gcc</code> で3つがそろう。</li>
<li><strong>Windows</strong>：<code>winget install NASM.NASM</code> と <code>winget install SoftwareFreedomConservancy.QEMU</code> で入る。C 言語のカーネルの作成には WSL（<code>wsl --install</code> で入る Linux 環境）を使い、Ubuntu の中で <code>sudo apt install nasm qemu-system-x86 gcc gcc-multilib</code> を実行する。WSL では i686-elf-gcc の代わりに <code>gcc -m32</code> を使う。</li>
<li><strong>版の確認</strong>：<code>nasm -v</code> と <code>qemu-system-i386 --version</code> を実行する。</li>
</ul>
<p>VS Code では、拡張機能「x86 and x86_64 Assembly」がアセンブリに色を付け、「C/C++」が C 言語の補完を行う。組み立てと起動は、VS Code のターミナルで次のレッスンのコマンドを入力して行う。</p>`,
    output: `$ nasm -v
NASM version 2.16.03

$ qemu-system-i386 --version
QEMU emulator version 9.1.0
Copyright (c) 2003-2024 Fabrice Bellard and the QEMU Project developers

$ nasm -f bin hello.asm -o hello.bin
$ qemu-system-i386 -drive format=raw,file=hello.bin
（QEMU の窓が開き、画面の左上に次の文字が出る）
Hello World`
  },
  {
    id: 'os-06',
    phase: 'ブートローダ',
    title: '最小のブートローダ',
    type: 'code',
    run: 'static',
    file: 'boot.asm',
    story: `<p class="lead">学習者は 512 バイトのブートセクタを書き、BIOS の機能で QEMU の画面に文字を表示する。</p>
<p>BIOS は、ディスクの先頭 512 バイトを 0x7C00 番地に読み込んで実行する。<code>org 0x7c00</code> は、プログラムがこの番地に置かれる前提で番地を計算するよう NASM に伝える。最後の <code>dw 0xaa55</code> は起動用ディスクの印である。<code>times</code> の行は、印の手前までを 0 で埋めて全体を 512 バイトにそろえる。</p>
<p><code>int 0x10</code> は、BIOS の画面機能を呼び出す命令である。AH に 0x0E、AL に文字を入れて呼ぶと、BIOS は1文字を表示する。lodsb は SI が指す1バイトを AL に読み、SI を次へ進める命令である。文字列の終わりの 0 に着いたら、hlt で CPU を休ませる。</p>
<pre>nasm -f bin boot.asm -o boot.bin
qemu-system-i386 -drive format=raw,file=boot.bin</pre>`,
    code: `; boot.asm : 画面に文字を出す最小のブートローダ
bits 16
org 0x7c00               ; BIOS はこのプログラムを 0x7C00 番地に読み込む

start:
    mov si, message      ; SI に文字列の先頭のアドレスを入れる
.next:
    lodsb                ; SI が指す 1 文字を AL に読み、SI を進める
    cmp al, 0            ; 終わりの印（0）かを調べる
    je .done
    mov ah, 0x0e         ; BIOS の文字表示機能の番号
    int 0x10             ; BIOS を呼び出して AL の文字を表示する
    jmp .next
.done:
    hlt                  ; CPU を休ませる
    jmp .done

message db "Hello, BEAST OS", 0

times 510 - ($ - $$) db 0  ; 510 バイト目まで 0 で埋める
dw 0xaa55                  ; 起動用ディスクの印
`,
    blank: '    int 0x10             ; BIOS を呼び出して AL の文字を表示する',
    placeholder: '    ; BIOS の画面機能を呼び出す割り込み命令が入る',
    token: /int\s+0x10/i,
    hint: '<code>int 0x10</code> と書く。0x10 は BIOS の画面機能の番号である。',
    output: `（QEMU の画面）
SeaBIOS (version 1.16.3)
iPXE (https://ipxe.org) 00:03.0 CA00 PCI2.10 PnP PMM+06FD3360+06F33360 CA00

Booting from Hard Disk...
Hello, BEAST OS`
  },
  {
    id: 'os-07',
    phase: 'カーネル',
    title: 'C 言語のカーネルへ移る',
    type: 'code',
    run: 'static',
    file: 'kernel.c',
    story: `<p class="lead">学習者はアセンブリの入口から C 言語の関数 kernel_main を呼び出し、C 言語で書いたカーネルを起動する。</p>
<p>アセンブリのみで OS 全体を書くと、コードが長く読みにくくなる。そこで、起動の最初の部分をアセンブリで書き、残りを C 言語で書く。ここでは、マルチブートという起動の規格を使う。QEMU の <code>-kernel</code> オプションは、マルチブートの印を持つカーネルを読み込み、CPU を32ビットのプロテクトモードにしてから実行を始める。</p>
<pre>; entry.asm
bits 32
section .text
    dd 0x1BADB002              ; マルチブートの印
    dd 0x03                    ; フラグ
    dd -(0x1BADB002 + 0x03)    ; 検査用の値
global _start
extern kernel_main
_start:
    mov esp, stack_top         ; スタックを用意する
    call kernel_main           ; C 言語の関数を呼ぶ
.hang:
    hlt
    jmp .hang
section .bss
    resb 8192
stack_top:</pre>
<p>printf などの標準ライブラリは OS の上で動く部品である。そのため、カーネルは画面への出力などの処理を自分で用意する。<code>-ffreestanding</code> は、OS が動き出す前の環境向けに翻訳するという指定である。0xB8000 番地は画面の文字に対応するメモリであり、詳しい仕組みは次のレッスンで扱う。</p>
<pre>nasm -f elf32 entry.asm -o entry.o
i686-elf-gcc -ffreestanding -O2 -c kernel.c -o kernel.o
i686-elf-ld -Ttext 0x100000 -o kernel.elf entry.o kernel.o
qemu-system-i386 -kernel kernel.elf</pre>`,
    code: `// kernel.c : C 言語で書く最初のカーネル
void kernel_main(void) {
    volatile unsigned short *vga = (unsigned short *)0xB8000;
    const char *msg = "Hello from C kernel";

    for (int i = 0; msg[i] != '\\0'; i++) {
        vga[i] = (unsigned short)msg[i] | (0x0F << 8);
    }

    for (;;) {
        __asm__ volatile ("hlt");
    }
}
`,
    blank: 'void kernel_main(void) {',
    placeholder: '// 引数も戻り値も void である関数 kernel_main の1行目が入る',
    token: /void\s+kernel_main\s*\(\s*void\s*\)\s*\{/,
    hint: '<code>void kernel_main(void) {</code> と書く。entry.asm の <code>call kernel_main</code> がこの関数を呼ぶ。',
    output: `（QEMU の画面の左上に白い文字で表示される）
Hello from C kernel`
  },
  {
    id: 'os-08',
    phase: 'カーネル',
    title: '画面出力（VGA テキストモード）',
    type: 'code',
    run: 'static',
    file: 'kernel.c',
    story: `<p class="lead">学習者は VGA テキストモードのメモリに文字と色を書き込み、改行に対応した print 関数を作る。</p>
<p>VGA テキストモードは、画面を横 80 文字・縦 25 行のマスとして扱う表示方式である。0xB8000 番地から、1マスにつき2バイトが並ぶ。下位の1バイトが文字の番号、上位の1バイトが色である。色の1バイトは、上の4ビットが背景色、下の4ビットが文字色を表す（0x0F は黒地に白、0x0E は黒地に黄色）。</p>
<p>row 行 col 列のマスの番号は <code>row * 80 + col</code> で求まる。put_char は1文字を書いて col を進め、'\\n' では次の行の先頭へ移る。print は文字列の各文字に put_char を使う。</p>`,
    code: `#define VGA_WIDTH 80
#define VGA_HEIGHT 25

static volatile unsigned short *const vga = (unsigned short *)0xB8000;
static int row = 0;
static int col = 0;

// 1 文字を色付きで画面に書く
void put_char(char c, unsigned char color) {
    if (c == '\\n') {
        row++;
        col = 0;
        return;
    }
    vga[row * VGA_WIDTH + col] = (unsigned short)c | ((unsigned short)color << 8);
    col++;
    if (col == VGA_WIDTH) {
        col = 0;
        row++;
    }
}

void print(const char *s, unsigned char color) {
    for (int i = 0; s[i] != '\\0'; i++) {
        put_char(s[i], color);
    }
}

void clear_screen(void) {
    for (int i = 0; i < VGA_WIDTH * VGA_HEIGHT; i++) {
        vga[i] = (unsigned short)' ' | (0x07 << 8);
    }
}

void kernel_main(void) {
    clear_screen();
    print("BEAST OS v0.1\\n", 0x0E);     // 黄色
    print("Kernel started.\\n", 0x0A);   // 緑
    print("Ready.\\n", 0x0F);            // 白
    for (;;) {
        __asm__ volatile ("hlt");
    }
}
`,
    blank: '    vga[row * VGA_WIDTH + col] = (unsigned short)c | ((unsigned short)color << 8);',
    placeholder: '    // row 行 col 列のマスに、文字 c と色 color を組み合わせた値を書く行が入る',
    token: /vga\[\s*row\s*\*\s*VGA_WIDTH\s*\+\s*col\s*\]\s*=\s*\(\s*unsigned\s+short\s*\)\s*c\s*\|/,
    hint: '<code>vga[row * VGA_WIDTH + col] = (unsigned short)c | ((unsigned short)color &lt;&lt; 8);</code> と書く。色は8ビット左へずらして上位のバイトに置く。',
    output: `（QEMU の画面。黒い背景に色付きの文字が並ぶ）
BEAST OS v0.1        ← 黄色
Kernel started.      ← 緑
Ready.               ← 白`
  },
  {
    id: 'os-09',
    phase: 'カーネル',
    title: '割り込みとキーボード入力',
    type: 'code',
    run: 'static',
    file: 'keyboard.c',
    story: `<p class="lead">学習者はキーボードの割り込みで呼ばれる関数を書き、押されたキーの文字を画面に表示する。</p>
<p>割り込みは、機器が CPU に「今すぐ処理してほしい」と知らせる仕組みである。CPU は今の作業を一時的に止め、割り込みの番号に対応する関数を実行し、終わったら元の作業に戻る。番号と関数の対応表を IDT（割り込み記述子表）と呼ぶ。カーネルは IDT を作り、<code>lidt</code> 命令で CPU に場所を教え、<code>sti</code> 命令で割り込みを有効にする。</p>
<p>キーボードの信号は PIC という部品を通り、IRQ1 として CPU に届く。キーボードの番号（スキャンコード）は、I/O ポート 0x60 から <code>inb</code> 命令で読む。処理の最後に、PIC のポート 0x20 へ 0x20 を送り、割り込みの処理の終了を伝える。</p>`,
    code: `// keyboard.c : キーボード割り込みの処理
static inline unsigned char inb(unsigned short port) {
    unsigned char value;
    __asm__ volatile ("inb %1, %0" : "=a"(value) : "Nd"(port));
    return value;
}

static inline void outb(unsigned short port, unsigned char value) {
    __asm__ volatile ("outb %0, %1" : : "a"(value), "Nd"(port));
}

// スキャンコード（キーの番号）から文字への対応表（一部）
static const char keymap[128] = {
    0, 27, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\b',
    '\\t', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\n',
    0, 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', '\`',
    0, '\\\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 0,
    '*', 0, ' '
};

void put_char(char c, unsigned char color);   // 前のレッスンの関数

// IRQ1（キーボード）の割り込みで呼ばれる関数
void keyboard_handler(void) {
    unsigned char scancode = inb(0x60);   // キーボードから番号を読む
    // 押したときの番号は 128 未満、離したときの番号は 128 以上
    if (scancode < 128 && keymap[scancode] != 0) {
        put_char(keymap[scancode], 0x0F);
    }
    outb(0x20, 0x20);                     // 処理の終了を PIC に伝える
}
`,
    blank: '    unsigned char scancode = inb(0x60);   // キーボードから番号を読む',
    placeholder: '    // ポート 0x60 からスキャンコードを読み、scancode に入れる行が入る',
    token: /unsigned\s+char\s+scancode\s*=\s*inb\(\s*0x60\s*\)/,
    hint: '<code>unsigned char scancode = inb(0x60);</code> と書く。',
    output: `（QEMU の画面。キーボードで打った文字が、打った順に表示される）
BEAST OS v0.1
Ready.
hello beast os`
  },
  {
    id: 'os-10',
    phase: 'OS の機能',
    title: 'メモリ管理（ページング）',
    type: 'code',
    run: 'static',
    file: 'paging.c',
    story: `<p class="lead">学習者はページテーブルを作り、最初の 4MB の仮想アドレスを同じ物理アドレスに対応させてページングを有効にする。</p>
<p>ページングは、メモリを 4KB ずつの「ページ」に区切り、プログラムが使うアドレス（仮想アドレス）を実際のメモリの位置（物理アドレス）に置きかえる仕組みである。各プロセスに別々の対応表を持たせると、プロセスどうしのメモリを分けて守れる。</p>
<p>32ビットの x86 では、ページディレクトリ（1024 項目）とページテーブル（1024 項目）の2段の表を使う。各項目は、ページの物理アドレスと、下位のビットの印（1 = 存在する、2 = 書き込み可）を合わせた値である。CR3 レジスタに表の場所を入れ、CR0 レジスタの最上位ビットを 1 にすると、CPU はページングを始める。</p>`,
    code: `// paging.c : 最初の 4MB を同じアドレスに対応させる
#include <stdint.h>

static uint32_t page_directory[1024] __attribute__((aligned(4096)));
static uint32_t first_table[1024] __attribute__((aligned(4096)));

void paging_init(void) {
    // ページテーブル：4KB のページ 1024 個 = 4MB
    for (int i = 0; i < 1024; i++) {
        first_table[i] = (i * 0x1000) | 0x3;   // 物理アドレス | 存在 | 書き込み可
    }

    // ページディレクトリ：最初の項目に上の表をつなぐ
    page_directory[0] = (uint32_t)first_table | 0x3;
    for (int i = 1; i < 1024; i++) {
        page_directory[i] = 0x2;   // 未使用の項目（存在の印は 0）
    }

    // CR3 に表の場所を入れ、CR0 の最上位ビットでページングを有効にする
    __asm__ volatile ("mov %0, %%cr3" : : "r"(page_directory));
    uint32_t cr0;
    __asm__ volatile ("mov %%cr0, %0" : "=r"(cr0));
    cr0 |= 0x80000000;
    __asm__ volatile ("mov %0, %%cr0" : : "r"(cr0));
}
`,
    blank: '        first_table[i] = (i * 0x1000) | 0x3;   // 物理アドレス | 存在 | 書き込み可',
    placeholder: '        // i 番目のページを物理アドレス i * 0x1000 に対応させ、印 0x3 を付ける行が入る',
    token: /first_table\[\s*i\s*\]\s*=\s*\(\s*i\s*\*\s*0x1000\s*\)\s*\|\s*0x3/,
    hint: '<code>first_table[i] = (i * 0x1000) | 0x3;</code> と書く。0x1000 は 4KB である。',
    output: `（QEMU の画面）
BEAST OS v0.1
Paging enabled.

（QEMU のモニタで info mem を実行した結果）
(qemu) info mem
0000000000000000-0000000000400000 0000000000400000 -rw`
  },
  {
    id: 'os-11',
    phase: 'OS の機能',
    title: 'プロセスとスケジューリング',
    type: 'code',
    run: 'static',
    file: 'scheduler.c',
    story: `<p class="lead">学習者はラウンドロビン方式のスケジューラを C 言語で再現し、3つのプロセスが順番に CPU を使う様子を表示する。</p>
<p>プロセスは、実行中のプログラムである。1つの CPU が一度に進める処理は1つである。そこで OS は、ごく短い時間ごとに実行するプロセスを切りかえる。この切りかえで、音楽とゲームとダウンロードが同時に動いているように見える。実行の順番を決める OS の部品をスケジューラと呼ぶ。</p>
<p>ラウンドロビンは、各プロセスに同じ長さの持ち時間（タイムスライス）を順番に与える方式である。持ち時間を使い切ったプロセスは列の後ろに回る。実際のカーネルでは、タイマー割り込みのたびにレジスタの値を保存し、次のプロセスのレジスタの値を読み込む。この操作をコンテキストスイッチと呼ぶ。</p>`,
    code: `#include <stdio.h>

typedef struct {
    const char *name;
    int remaining;   // 残りの実行時間
} Process;

int main(void) {
    Process procs[] = { {"music", 3}, {"game", 5}, {"download", 2} };
    int count = 3;
    int quantum = 2;     // 1 回に使える時間（タイムスライス）
    int time = 0;
    int finished = 0;

    while (finished < count) {
        for (int i = 0; i < count; i++) {
            Process *p = &procs[i];
            if (p->remaining == 0) {
                continue;   // 終了したプロセスは飛ばす
            }
            int run = p->remaining < quantum ? p->remaining : quantum;
            printf("%2d-%2d: %s を実行\\n", time, time + run, p->name);
            time += run;
            p->remaining -= run;
            if (p->remaining == 0) {
                printf("       %s が終了\\n", p->name);
                finished++;
            }
        }
    }
    printf("すべての処理が時刻 %d に終了\\n", time);
    return 0;
}
`,
    blank: '            int run = p->remaining < quantum ? p->remaining : quantum;',
    placeholder: '            // 残り時間とタイムスライスの小さい方を run に入れる行が入る',
    token: /int\s+run\s*=\s*p->remaining\s*<\s*quantum\s*\?\s*p->remaining\s*:\s*quantum/,
    hint: '<code>int run = p-&gt;remaining &lt; quantum ? p-&gt;remaining : quantum;</code> と書く。<code>条件 ? A : B</code> は、条件が真なら A、偽なら B になる式である。',
    output: ` 0- 2: music を実行
 2- 4: game を実行
 4- 6: download を実行
       download が終了
 6- 7: music を実行
       music が終了
 7- 9: game を実行
 9-10: game を実行
       game が終了
すべての処理が時刻 10 に終了`
  },
  {
    id: 'os-12',
    phase: 'OS の機能',
    title: 'ファイルシステム',
    type: 'code',
    run: 'static',
    file: 'fs.c',
    story: `<p class="lead">学習者は小さなディスクとディレクトリを C 言語で再現し、ファイルの書き込みと読み出しを行う。</p>
<p>ディスクは、決まった大きさのブロックが並んだ記憶装置である。ファイルシステムは、ブロックの列の上に「名前の付いたファイル」という形を作る OS の部品である。ファイルごとに、大きさや先頭のブロックの番号などの管理情報を持つ。Linux ではこの管理情報を inode と呼ぶ。ディレクトリは、ファイル名と管理情報を結び付ける表である。</p>
<p>このプログラムは、ファイルを連続したブロックに置く単純な方式（連続割り当て）を使う。必要なブロックの数は <code>(サイズ + ブロックの大きさ - 1) / ブロックの大きさ</code> で求める。この式は、端数のあるサイズも1ブロックに数える切り上げの計算である。</p>`,
    code: `#include <stdio.h>
#include <string.h>

#define BLOCK_SIZE 16
#define MAX_FILES 8

char disk[64][BLOCK_SIZE];   // 16 バイトのブロックが 64 個並ぶディスク
int next_free = 0;           // 次に使う空きブロックの番号

typedef struct {             // ファイルの管理情報（inode に当たる）
    char name[16];
    int size;
    int first_block;
    int block_count;
} FileEntry;

FileEntry dir[MAX_FILES];    // ディレクトリ：ファイル名と管理情報の表
int file_count = 0;

void write_file(const char *name, const char *data) {
    FileEntry *f = &dir[file_count++];
    strcpy(f->name, name);
    f->size = strlen(data);
    f->first_block = next_free;
    f->block_count = (f->size + BLOCK_SIZE - 1) / BLOCK_SIZE;
    for (int i = 0; i < f->size; i++) {
        disk[f->first_block + i / BLOCK_SIZE][i % BLOCK_SIZE] = data[i];
    }
    next_free += f->block_count;
}

void read_file(const char *name) {
    for (int i = 0; i < file_count; i++) {
        if (strcmp(dir[i].name, name) == 0) {
            printf("%s: ", name);
            for (int j = 0; j < dir[i].size; j++) {
                putchar(disk[dir[i].first_block + j / BLOCK_SIZE][j % BLOCK_SIZE]);
            }
            printf("\\n");
            return;
        }
    }
}

int main(void) {
    write_file("save.txt", "stage=3 hp=82 coins=120");
    write_file("memo.txt", "boss is weak to ice");
    for (int i = 0; i < file_count; i++) {
        printf("%-10s %3d バイト  ブロック %d-%d\\n", dir[i].name, dir[i].size,
               dir[i].first_block, dir[i].first_block + dir[i].block_count - 1);
    }
    read_file("save.txt");
    return 0;
}
`,
    blank: '    f->block_count = (f->size + BLOCK_SIZE - 1) / BLOCK_SIZE;',
    placeholder: '    // ファイルに必要なブロックの数を切り上げで求める行が入る',
    token: /f->block_count\s*=\s*\(\s*f->size\s*\+\s*BLOCK_SIZE\s*-\s*1\s*\)\s*\/\s*BLOCK_SIZE/,
    hint: '<code>f-&gt;block_count = (f-&gt;size + BLOCK_SIZE - 1) / BLOCK_SIZE;</code> と書く。',
    output: `save.txt    23 バイト  ブロック 0-1
memo.txt    19 バイト  ブロック 2-3
save.txt: stage=3 hp=82 coins=120`
  },
  {
    id: 'os-13',
    phase: 'OS の機能',
    title: 'システムコール',
    type: 'code',
    run: 'static',
    file: 'syscall.c',
    story: `<p class="lead">学習者は int 0x80 で呼ばれるシステムコールの入口を書き、番号に応じてカーネルの機能を実行する。</p>
<p>システムコールは、アプリがカーネルに仕事を頼むための決まった窓口である。アプリはユーザーモードで動き、画面やディスクの直接の操作はカーネルモードに限られる。そこで、レジスタに番号と引数を入れて <code>int 0x80</code> を実行し、CPU をカーネルモードに切りかえてカーネルの関数を呼ぶ。</p>
<pre>; アプリの側：SYS_WRITE（1 番）で文字列を表示する
mov eax, 1          ; システムコールの番号
mov ebx, message    ; 文字列のアドレス
int 0x80            ; カーネルを呼ぶ</pre>
<p>カーネルの側では、EAX の番号を switch 文で調べ、対応する処理を行う。結果は EAX に入れてアプリへ返す。Linux の printf も、最後は write というシステムコールで画面に文字を出す。</p>`,
    code: `// syscall.c : int 0x80 で呼ばれるシステムコールの入口
#include <stdint.h>

typedef struct {
    uint32_t eax, ebx, ecx, edx;   // アセンブリの入口で保存したレジスタ
} Registers;

void print(const char *s, unsigned char color);   // 画面出力の関数
static uint32_t ticks = 0;                          // タイマー割り込みで増える値

#define SYS_WRITE   1
#define SYS_GETTIME 2

void syscall_handler(Registers *r) {
    switch (r->eax) {                 // EAX = システムコールの番号
    case SYS_WRITE:
        print((const char *)r->ebx, 0x0F);   // EBX = 文字列のアドレス
        r->eax = 0;
        break;
    case SYS_GETTIME:
        r->eax = ticks;               // 結果を EAX に入れて返す
        break;
    default:
        r->eax = (uint32_t)-1;        // 未知の番号には -1 を返す
        break;
    }
}
`,
    blank: '        print((const char *)r->ebx, 0x0F);   // EBX = 文字列のアドレス',
    placeholder: '        // EBX が指す文字列を白い文字で表示する行が入る',
    token: /print\(\s*\(\s*const\s+char\s*\*\s*\)\s*r->ebx\s*,\s*0x0F\s*\)/i,
    hint: '<code>print((const char *)r-&gt;ebx, 0x0F);</code> と書く。EBX の数をアドレスとして扱うため、<code>(const char *)</code> で型を変える。',
    output: `（QEMU の画面）
BEAST OS v0.1
Ready.
Hello from user program     ← アプリが SYS_WRITE で表示した文字
time = 1532                 ← SYS_GETTIME の結果`
  }
];
