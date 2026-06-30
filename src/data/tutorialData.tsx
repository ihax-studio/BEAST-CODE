import React from 'react';

export const tutorialSteps = [
  {
    title: "1. HTMLにCSSを適用する",
    content: (
      <div className="space-y-6 text-gray-800">
        <p className="text-base">CSSを適用するには、大きく2つの作法があります。</p>
        
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="font-bold text-blue-600 mb-2 flex items-center">
            <span className="bg-blue-100 text-blue-700 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-sm">1</span>
            &lt;style&gt; タグを使う
          </p>
          <div className="text-sm text-gray-600 mb-3 ml-8">
            <span className="font-semibold text-green-600">メリット:</span> HTML一つで完結できる。<br/>
            <span className="font-semibold text-red-500">デメリット:</span> Google ChromeでF12を押してCSSを直で編集できない場合がある。
          </div>
          <pre className="text-sm bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto ml-8 shadow-inner">
            <code>
<span className="text-[#808080]">&lt;</span><span className="text-[#569cd6]">head</span><span className="text-[#808080]">&gt;</span>{`
  `}<span className="text-[#808080]">&lt;</span><span className="text-[#569cd6]">style</span><span className="text-[#808080]">&gt;</span>{`
    body { background-color: #f0f0f0; }
  `}<span className="text-[#808080]">&lt;/</span><span className="text-[#569cd6]">style</span><span className="text-[#808080]">&gt;</span>{`
`}<span className="text-[#808080]">&lt;/</span><span className="text-[#569cd6]">head</span><span className="text-[#808080]">&gt;</span>
            </code>
          </pre>
        </div>

        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="font-bold text-blue-600 mb-2 flex items-center">
            <span className="bg-blue-100 text-blue-700 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-sm">2</span>
            &lt;link rel="stylesheet"&gt; を使う (推奨)
          </p>
          <div className="text-sm text-gray-600 mb-3 ml-8">
            テキストエディタで保存時に <code className="bg-gray-200 px-1.5 py-0.5 rounded text-gray-800">.css</code> とつければOKです。HTMLとは別ファイルになります。
          </div>
          <pre className="text-sm bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto ml-8 shadow-inner">
            <code>
<span className="text-[#808080]">&lt;</span><span className="text-[#569cd6]">head</span><span className="text-[#808080]">&gt;</span>{`
  `}<span className="text-[#808080]">&lt;</span><span className="text-[#569cd6]">link</span> <span className="text-[#9cdcfe]">rel</span>=<span className="text-[#ce9178]">"stylesheet"</span> <span className="text-[#9cdcfe]">href</span>=<span className="text-[#ce9178]">"style.css"</span><span className="text-[#808080]">&gt;</span>{`
`}<span className="text-[#808080]">&lt;/</span><span className="text-[#569cd6]">head</span><span className="text-[#808080]">&gt;</span>
            </code>
          </pre>
        </div>
      </div>
    )
  },
  {
    title: "2. CSSの基本とセレクタ",
    content: (
      <div className="space-y-6 text-gray-800">
        <p className="text-base">CSSは <code>.要素 {`{`} 変えたいもの(borderやbackground…): 内容(色や太さなど); {`}`}</code> の構成です。</p>
        
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="font-bold text-purple-600 mb-1">要素をそのまま指定</div>
            <p className="text-sm text-gray-600 mb-2"><code>body</code>, <code>p</code>, <code>h1</code>, <code>button</code> などはそのまま書きます。</p>
            <pre className="text-sm bg-[#1e1e1e] text-[#d4d4d4] p-3 rounded-lg overflow-x-auto shadow-inner">
              <code><span className="text-[#d7ba7d]">button</span> {`{ `}<span className="text-[#9cdcfe]">background</span>: <span className="text-[#ce9178]">blue</span>; {`}`}</code>
            </pre>
          </li>
          <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="font-bold text-purple-600 mb-1">クラス (Class) 指定</div>
            <p className="text-sm text-gray-600 mb-2"><code>&lt;div class="box"&gt;</code> のように定義。何個でも使えます。CSSでは <code>.</code> をつけます。</p>
            <pre className="text-sm bg-[#1e1e1e] text-[#d4d4d4] p-3 rounded-lg overflow-x-auto shadow-inner">
              <code><span className="text-[#d7ba7d]">.box</span> {`{ `}<span className="text-[#9cdcfe]">border</span>: <span className="text-[#b5cea8]">1px</span> <span className="text-[#ce9178]">solid black</span>; {`}`}</code>
            </pre>
          </li>
          <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="font-bold text-purple-600 mb-1">ID 指定</div>
            <p className="text-sm text-gray-600 mb-2"><code>&lt;div id="main"&gt;</code> のように定義。1ページに1つ。CSSでは <code>#</code> をつけます。</p>
            <pre className="text-sm bg-[#1e1e1e] text-[#d4d4d4] p-3 rounded-lg overflow-x-auto shadow-inner">
              <code><span className="text-[#d7ba7d]">#main</span> {`{ `}<span className="text-[#9cdcfe]">margin</span>: <span className="text-[#b5cea8]">10px</span>; {`}`}</code>
            </pre>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "3. JavaScriptとコメント作法",
    content: (
      <div className="space-y-6 text-gray-800">
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="font-bold text-yellow-600 mb-2">scriptタグとsrcの使い方</p>
          <div className="text-sm text-gray-600 mb-3">
            HTMLにJSを読み込ませるには <code>&lt;script&gt;</code> を使います。
          </div>
          <pre className="text-sm bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto shadow-inner">
            <code>
<span className="text-[#6a9955]">&lt;!-- 外部ファイルを読み込む --&gt;</span><br/>
<span className="text-[#808080]">&lt;</span><span className="text-[#569cd6]">script</span> <span className="text-[#9cdcfe]">src</span>=<span className="text-[#ce9178]">"main.js"</span><span className="text-[#808080]">&gt;&lt;/</span><span className="text-[#569cd6]">script</span><span className="text-[#808080]">&gt;</span><br/><br/>
<span className="text-[#6a9955]">&lt;!-- HTML内に直接書く --&gt;</span><br/>
<span className="text-[#808080]">&lt;</span><span className="text-[#569cd6]">script</span><span className="text-[#808080]">&gt;</span>{`
  console.log("Hello!");
`}<span className="text-[#808080]">&lt;/</span><span className="text-[#569cd6]">script</span><span className="text-[#808080]">&gt;</span>
            </code>
          </pre>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="font-bold text-gray-700 mb-3">コメントアウトはこうだよ</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-red-50 rounded-lg text-center border border-red-100">
              <div className="font-bold text-red-600 mb-2">HTML</div>
              <code className="text-gray-700">&lt;!-- コメント --&gt;</code>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg text-center border border-blue-100">
              <div className="font-bold text-blue-600 mb-2">CSS</div>
              <code className="text-gray-700">/* コメント */</code>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg text-center border border-yellow-100">
              <div className="font-bold text-yellow-600 mb-2">JS</div>
              <code className="text-gray-700">// コメント<br/>/* 複数行 */</code>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "4. JSONでデータをまとめる・使う",
    content: (
      <div className="space-y-6 text-gray-800">
        <p className="text-base">JSONで何かをまとめるときはこうで、取り出すとき、また再生させるときはこう書くよ。</p>
        
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <pre className="text-sm bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-lg overflow-x-auto leading-relaxed shadow-inner">
            <code>
<span className="text-[#6a9955]">// 1. JSONでまとめる</span><br/>
<span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">data</span> = {`{`}
  <span className="text-[#ce9178]">"music"</span>: <span className="text-[#ce9178]">"apple_tune.mp3"</span>,
  <span className="text-[#ce9178]">"volume"</span>: <span className="text-[#b5cea8]">0.8</span>
{`};`}

<br/><span className="text-[#6a9955]">// 2. 取り出す</span><br/>
<span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">url</span> = data.<span className="text-[#9cdcfe]">music</span>;
<span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">vol</span> = data.<span className="text-[#9cdcfe]">volume</span>;

<br/><span className="text-[#6a9955]">// 3. 再生させる</span><br/>
<span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">audio</span> = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">Audio</span>(url);
audio.<span className="text-[#9cdcfe]">volume</span> = vol;
audio.<span className="text-[#dcdcaa]">play</span>();
            </code>
          </pre>
        </div>
      </div>
    )
  }
];
