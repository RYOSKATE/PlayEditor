/**
 * Created by khlee on 12/1/16.
 */

var title;
var text;
var similarity;
var source="This is source";
var element;
var allText_noCmp = [];

function addText() {
    element=[title, similarity, text, source]
    allText_noCmp.push(element)
}


title = "Hello World"
similarity=`<p class="similar">ほぼ同じ</p>`+
    "Swift: <code>print</code>関数 = Java: <code>System.out.println</code>関数"
text = "伝統的に、新しい言語で書く最初のプログラムは、「Hello, world!」です。Swift では 1 行で記述できます。<br>"
    + "Javaでコードを書いたことがあれば、このシンタックスには馴染みがあるでしょう。Swift では、この 1 行が完全なプログラムです。<br>" +
    "グローバルスコープで記述されたコードはプログラムのエントリーポイントとなり、クラス定義やmain() 関数は必要ありません。<br>" +
    "各ステートメントの末尾にセミコロンを置く必要もありません。<br><br>"
    + "print関数に文字列のパラメータを入れることで出力ができます。"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token function">print(</span>
            <span class="token string">"Hello World!"</span>
            <span class="token function">)</span>
        </code>
    </pre>
    `
source="http://www.studiogalago.com/the-swift-programming-language/welcome-to-swift/a-swift-tour/a-swift-tour/"
addText()


title="文字列の埋め込み"
similarity=`<p class="diff">全然違う</p>`+
    "Swift: 文字列の中に変数や定数を埋め込む<br>Java: 文字列として追加"
text="<b>文字列補間 (string interpolation)</b> は、文字列リテラル内に値を含め、定数や変数、リテラル、式を組み合わせて新しい String 値を構築する手段です。<br>" +
    "文字列リテラルに挿入する各項目を丸括弧で囲み、バックスラッシュを前に置きます。変数などを <code>\\( )</code> オペレーターでラッピングする方法で、様々なデータタイプの変数を文字列の中に入れられます。<br>"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            hello
            <span class="token operator">=</span>
            <span class="token string">"Hello"</span>
            <br>
            <span class="token function">print(</span>
            <span class="token string">"</span>
            \\( hello )
            <span class="token string">World!"</span>
            <span class="token function">)</span>
            <span class="token comment">//Hello World!を出力</span>
        </code>
    </pre>
    ` +
    "この例では、hello の値が \(\"Hello\") として文字列リテラルに挿入されています。<br>" +
    "文字列補間が評価される時に、プレースホルダは helloの実際の値で置き換えられます。<br><br>" +
    "<hr>もう一つの例を見てみましょう。"
    + `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            age
            <span class="token operator">=</span>
            <span class="token number">18</span>
            <br>
            <span class="token function">print(</span>
            <span class="token string">"I am </span>
            \\( age )
            <span class="token string">years old."</span>
            <span class="token function">)</span>
            <span class="token comment">//I am 18 years oldを出力"</span>
        </code>
    </pre>
    `
    + "このプログラムは年齢の定数を定義し、文字列と置き換えられて出力します。"

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/strings-and-characters/string-interpolation/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()

title="基本的なデータ型"
similarity=`<p class="similar">ほぼ同じ</p>`
text="<h3>整数</h3>" +
    "Swift には整数型 Int があり、プラットフォームのワードサイズと同じサイズとなります。<br>" +
    `
    <ul>
        <li>32 ビットプラットフォームでは、Int は Int32 と同じサイズになります。</li>
        <li>64 ビットプラットフォームでは、Int は Int64 と同じサイズになります。</li>
    </ul>
    ` +
    "整数に特定のサイズを指定する必要が無い場合、コードの整数値には常に Int を使います。これにより、コードに一貫性と互換性をもたらします。<br>" +
    "32 ビットプラットフォームでも、Int は -2,147,483,648 から 2,147,483,647 までの値を保存することができ、整数を利用する多くのケースにおいて十分な大きさです。" +
    "<h3>浮動小数点数</h3>" +
    "浮動小数点数 Floating-point numbers は、3.14159 や 0.1、-273.15 のような、小数部を持つ数です。<br>" +
    "浮動小数点型は、整数の型よりも幅広い範囲の値を表現し、Int に保存できるよりも大きい、または小さい値を保存できます。<br>" +
    "Swift には、2 種類の符号付き浮動小数点数型があります。<br>" +
    `
    <ul>
        <li>Double は、64 ビット浮動小数点数になります。</li>
        <li>Float は、32 ビット浮動小数点数になります。</li>
    </ul>
    ` +
    "<b>NOTE:</b> Double は、少なくとも 15 桁の精度を持ち、Float は 6 桁の精度になります。<br>" +
    "適切な浮動小数点型は、コードで扱う必要がある値の範囲によります。どちらの型も適している状況では、Double を利用するようにします。" +
    "<h3>ブール</h3>" +
    "Swift は、Bool と呼ばれる、基本的なブール型を持っています。ブール値は論理値とも言われますが、真または偽のいずれかになるためです。<br>" +
    "Swift には、2 つのブール定数値 <code>true</code> と <code>false</code> があります。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            orangesAreOrange:Bool
            <span class="token operator">=</span>
            <span class="token boolean">true</span>
            <br>
            <span class="token keyword">let</span>
            turnipsAreDelicious:Bool
            <span class="token operator">=</span>
            <span class="token boolean">false</span>
        </code>
    </pre>
    `

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/the-basics/integers/<br>" +
    "http://www.studiogalago.com/the-swift-programming-language/language-guide/the-basics/floating-point-numbers/<br>" +
    "http://www.studiogalago.com/the-swift-programming-language/language-guide/the-basics/booleans/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()

title = "定数と変数の宣言"
similarity=`<p class="littlediff">少し違う</p>`+
    "機能は同じだが、定義のフォーマットが少し違う<br>" +
    "変数：Javaの変数名と型の位置を交換し、前に<code>var</code>キーワードを追加"+
    `<pre>
        <span class="token operator">  </span>　<span class="token keyword">   </span>　型　変数名＝式(Java)　
        <code>String str = "java"</code>
        <span class="token operator">=></span>　<span class="token keyword">var</span>　変数名：型＝式(Swift)
        <code>var str:String = "swift"</code>
    </pre>`+
    "定数：Javaの変数名と型の位置を交換し、<code>final</code>キーワードを<code>let</code>に変更"+
    `<pre>
        <span class="token operator">  </span> <span class="token keyword">final</span>　型　定数名＝式(Java)
        <code>final String str = "java"</code>
        <span class="token operator">=></span>　<span class="token keyword">let</span>　定数名：型＝式(Swift)
        <code>let str:String = "swift"</code>
    </pre>`
text = "定数と変数は、数値 10 や文字列 Hello のような特定の型の値を、number や message のような名前に結び付けます。<br>" +
    "定数と変数は、使用する前に宣言しておく必要があります。<br>" +
    "定数は、値を設定した後に変更することはできません。変数は、値をいつでも変更できます。<br>" +
    "<code>let</code> キーワードで定数を宣言し、<code>var</code> キーワードで変数を宣言します。<br>" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            immutable:String
            <span class="token operator">=</span>
            <span class="token string">"You shall not change me"</span>
            <br>
            immutable
            <span class="token operator">=</span>
            <span class="token string">"I can not be changed!"</span>
            <span class="token comment">//コンパイルエラー</span>
        </code>
    </pre>
    `+
    "定数は変更できないため、他の値を与えようとした時にコンパイルエラーになるます。<br>"+
    "変数は値をいつでも変更できます。"+
    `
    <hr>
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            mutable:String
            <span class="token operator">=</span>
            <span class="token string">"I am a baby"</span>
            <br>
            mutable
            <span class="token operator">=</span>
            <span class="token string">"I grew up to a man!"</span>
            <span class="token comment">//mutableは"I grew up to a man!"に変更</span>
        </code>
    </pre>
    `

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/the-basics/constants-and-variables/" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()

title = "型推論"
similarity = `<p class="diff">Swift特有</p>` +
    "Swift: 型を宣言せずに、初期値だけでデータ型を推論できる。<br>" +
    " Java: 型の宣言は必ず必要"
text = "Swift は、型安全（タイプセーフ）な言語です。<br>" +
    "タイプセーフな言語は、コードが扱う値の型が明らかで、String を期待するコード部分に誤って Int を渡すようなことができません。<br>" +
    "Swift はタイプセーフであるため、コードをコンパイルする時に型をチェックし、適合しない型にエラーとして印を付けます。<br>" +
    "これにより、開発の早い段階でエラーを発見し、修正できるようになります。<br><br>" +
    "プログラムの記述から適切なデータがたを判断したり、値と手続きや演算子の組み合わせに矛盾がないかチェックしたりする機能を<b>型推論（type inference)</b>と呼びます。<br>" +
    "Swiftは強力な型推論の仕組みを備えており、型の不一致を細かく指摘する反面、使われる型が明らかな部分は記述をかなり省略できます。<br>" +
    "変数の宣言では、型名を明記せずに、積極的に初期値を設定するプログラミングスタイルが推奨されています。<br><br>" +
    "型推論は、初期値とともに定数または変数を宣言する場合に特に役立ちます。定数または変数の宣言時にリテラル値を代入する場合のことです。<br>" +
    "（リテラル値とは、下の例にある 42 や 3.14159 のように、ソースコードに直接現れる値のことです。）<br><br>" +
    "例えば、型を指定せずに新しい定数にリテラル値 42 を代入する場合、Swift はこの定数が Int であると推論します。なぜなら、整数のように見える数値で初期化しているためです。<br>" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            meaningOfLife
            <span class="token operator">=</span>
            <span class="token number">42</span>
            <span class="token comment">// meaningOfLife は、Int 型と推論されます</span>
        </code>
    </pre>
    ` +
    "同様に、浮動小数点リテラルの型を指定しない場合、Swift は Double と推論します。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            pi
            <span class="token operator">=</span>
            <span class="token number">3.14159</span>
            <span class="token comment">// pi は Double 型と推論されます</span>
        </code>
    </pre>
    ` +
    "Swift は、浮動小数点数の型を推論するとき、常に（Float でなく）Double を選択します。<br><hr>" +
    "次の例を見てみましょう。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            orangesAreOrange
            <span class="token operator">=</span>
            <span class="token boolean">true</span>
            <br>
            <span class="token keyword">let</span>
            turnipsAreDelicious
            <span class="token operator">=</span>
            <span class="token boolean">false</span>
        </code>
    </pre>
    ` +
    "<span class='token variable-text'>orangesAreOrange</span>と<span class='token variable-text'>turnipsAreDelicious</span>の型は" +
    "ブールのリテラル値で初期化されているため、Boolと推論されます。<br><br>" +
    "IntやDoubleも同様、定数や変数の宣言時に<code>true</code>や<code>false</code>を与える場合には、Boolとして型を宣言する必要はありません。<br>" +
    "定数値や変数値が明らかな場合には、型推論によってSwiftのコードは簡潔で読みやすくなります。"

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/the-basics/type-safety-and-type-inference/"
addText()

title = "型キャスト"
similarity = `<p class="diff">全然違う</p>` +
    "Swift: 暗黙な型変換はしないため、キャストはいつも明示的<br>" +
    "Java: 暗黙な型変換があるため、キャストは必要な時だけ宣言"
text = "Swiftはタイプセーフな言語です。基本的には、変数や定数には定義した以外の型の値を代入できません。<br>" +
    "IntとDoubleで、次のように定数と変数を設定してみると、エラーメッセージが表示されます。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            i: Int
            <span class="token operator">=</span>
            <span class="token number">10</span>
            <br>
            <span class="token keyword">var</span>
            a: Double
            <span class="token operator">=</span>
            i
            <span class="token comment">//エラー</span>
        </code>
    </pre>
    ` +
    "コンパイラが表示するメッセジーは：Int型はDouble型に変換できない、という内容です。<br>" +
    "代入だけではなく、単純な計算でも型が一致していないとエラーになります。<br>" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            w:Double
            <span class="token operator">=</span>
            <span class="token number">0.5</span>
            <br>
            <span class="token keyword">let</span>
            i:Int
            <span class="token operator">=</span>
            <span class="token number">10</span>
            <br>
            <span class="token keyword">let</span>
            b
            <span class="token operator">=</span>
            w <span class="token operator">*</span> i
            <span class="token comment">//エラー</span>
        </code>
    </pre>
    `+
    "<b>つまり、「暗黙な型変換」は行わないのです。</b><br>"+
    "Swiftではこういった場合、プログラマが明示的に型変換をしなければなりません。例えば次のようにします。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            i:Int
            <span class="token operator">=</span>
            <span class="token number">10</span>
            <br>
            <span class="token keyword">var</span>
            a:Double
            <span class="token operator">=</span>
            <span class="token function">Double(</span>i<span class="token function">)</span>
            <span class="token comment">//エラーにはならない</span>
            <br>
            <span class="token keyword">var</span>
            j:Int
            <span class="token operator">=</span>
            <span class="token function">Int(</span>
            a<span class="token operator">*</span><span class="token number">1.25</span>
            <span class="token function">)</span>
            <span class="token comment">//問題なし。jの値は12</span>
        </code>
    </pre>
    `+
    "ここで指定している<code>Double()</code>や<code>Int()</code>は型変換の関数ではなく、Double型やInt型のインスタンスを新しく作るためんイニシャライザです。"
source="https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s<br>" +
    "「詳解Swift改訂版」ー荻原剛志"
addText()


title="オプショナル型"
similarity=`<p class="diff">Swift特有のデータ型</p>`
text="Swiftでは、扱うべき値が存在しないことを表すため、<code>nil</code>という特別な値を用意しています。<br>" +
    "変数や定数、関数の返り値、式の評価結果が、通常の値だけではなく、未設定やエラーなどの状態を表すことがある場合、その値を<code>nil</code>で表現するのです。<br><br>" +
    "例えば整数の場合、変数や式の型はInt型です。<br>" +
    "通常はInt型の値を持ち、特殊な場合に<code>nil</code>を値として持つことがある変数や式はInt型ではなく、Int?という型で扱います。" +
    "これを<b>オプショナル(optional) Int型</b>と呼びます<br><br>" +
    "以下の例を見てみましょう。" +
    "この例では、値が存在しないことに対処するために、オプショナルがどのように使われるかを示す例です。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            a:Int
            <span class="token operator">=</span>
            <span class="token number">0</span>
            <br>
            a<span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <span class="token comment">//エラー</span>
            <br>
            <span class="token keyword">var</span>
            b:Int?
            <span class="token operator">=</span>
            <span class="token number">10</span>
            <br>
            b<span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <span class="token comment">//代入可能</span>
        </code>
    </pre>
    <br>
    `+
    "もう一つの例を見てみましょう。<br>" +
    "Swift の Int 型には、String 値を Int 値に変換するイニシャライザがあります。" +
    "しかし、あらゆる文字列が整数に変換できるわけではありません。文字列 123 は、数値 123 に変換できますが、文字列 \"hello\"は数値に変換できません。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            possibleNumber
            <span class="token string">\"123\"</span>
            <br>
            <span class="token keyword">let</span>
            convertedNumber
            <span class="token operator">=</span>
            <span class="token function">Int(</span>possibleNumber<span class="token function">)</span>
            <span class="token comment">// convertedNumber は Int? 型、あるいは optional Int と推論される</span>
            <br><br>
            <span class="token keyword">let</span>
            aString
            <span class="token operator">=</span>
            <span class="token string">"hello"</span>
            <br>
            <span class="token keyword">let</span>
            convertedNumber2
            <span class="token operator">=</span>
            <span class="token function">Int(</span>aString<span class="token function">)</span>
            <span class="token comment">// 文字列は数字に変換できないため、値はnilとなる</span>
        </code>
    </pre>
    ` +
    "イニシャライザが失敗する場合があるため、Int ではなく、オプショナル Int を返します。<br>" +
    "オプショナル型の変数または定数を、初期値を設定しないて宣言した場合、初期値の既定値は<code>nil</code>になります。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            optionalVar:String?
            <span class="token comment">//nil</span>
            <br>
            <span class="token function">print(</span>
            optionalVar
            <span class="token function">)</span>
            <span class="token comment">//"nil"</span>
        </code>
    </pre>
    `
// "var serverResponseCode: Int? = 404// serverResponseCode は Int 値 404<br>serverResponseCode = nil// serverResponseCode には値が存在しない"
// "element=[title, similarity, text]<br>allText.push(element)" +
// "nil をオプショナルでない定数や変数に使うことはできません。定数または変数が、ある条件において値が存在しない状態を扱う必要がある場合は、" +
// "適切な型のオプショナル値として宣言してください。"
source="http://www.studiogalago.com/the-swift-programming-language/language-guide/the-basics/optionals/"
addText()

// title="Comments"
// similarity = "SAME AS JAVA"
// text = "single line comments<br>multiline comments"
// element = [title, similarity, text]
// allText.push(element)

title="基本算数演算子"
similarity=`<p class="similar">Javaの算数演算子と全く同じ</p>`
text=　"Swiftは、全ての数値型に対してスタンダードな４つの演算子をサポートします。" +
    `
    <ul>
        <li>加算（+）</li>
        <li>減算（-）</li>
        <li>乗算（*）</li>
        <li>除算（/）</li>
    </ul>
    ` +
    "<h3>剰余演算子</h3>" +
    "剰余演算子 (a % b) は、a に収まる b の倍数を算出し、余り（剰余）の値を返します。剰余演算子がどのように動作するかを見ていきます。" +
    "9 % 4 を計算するために、まず 9 に収まる 4 の個数を算出します。9 には 2 つの 4 を収めることができ、残りは1 です。<br>" +
    "Swift では、次のように記述します。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token number">9</span>
            <span class="token operator">%</span>
            <span class="token number">4</span>
            <span class="token comment">// 1</span>
        </code>
    </pre>
    ` +
    "a % b の答えを求めるために、% 演算子は次の等式を算出し、出力として remainder を返します。 <br><br>" +
    `
    <span class="token variable-text">a</span>
    =(<span class="token variable-text">b</span>
    x
    <span class="token variable-text">some multiplier</span>
    )+
    <span class="token variable-text">remainder</span>
    ` +
    "<br><br>some multiplier は、a に収まる b の最大数になります。この等式に 9 と 4 を挿入してみます。<br>" +
    "9 = (4 x 2) + 1 剰余を算出する " +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            plus
            <span class="token operator">=</span>
            <span class="token number">13</span>
            <span class="token operator">+</span>
            <span class="token number">37</span>
            <span class="token comment">//50</span>
            <br>
            <span class="token keyword">var</span>
            minus
            <span class="token operator">=</span>
            <span class="token number">25</span>
            <span class="token operator">-</span>
            <span class="token number">7</span>
            <span class="token comment">//18</span>
            <br>
            <span class="token keyword">var</span>
            times
            <span class="token operator">=</span>
            <span class="token number">3.14</span>
            <span class="token operator">*</span>
            <span class="token number">1.618</span>
            <span class="token comment">//5.08052</span>
            <br>
            <span class="token keyword">var</span>
            devidedBy
            <span class="token operator">=</span>
            <span class="token number">15.0</span>
            <span class="token operator">/</span>
            <span class="token number">5</span>
            <span class="token comment">//3.0</span>
            <br>
            <span class="token keyword">let</span>
            remainder
            <span class="token operator">=</span>
            <span class="token number">8</span>
            <span class="token operator">%</span>
            <span class="token number">5</span>
            <span class="token comment">//3</span>
            <br>
        </code>
    </pre>
    <hr>
    `+
    "Swiftには代入演算子（=）と別の演算子を組み合わせた複合代入演算子があります。"+
    `<pre class="language-swift">
        <code class="language-swift">
            plus
            <span class="token operator">+=</span>
            <span class="token number">5</span>
            <span class="token comment">//55</span>
            <br>
            minus
            <span class="token operator">-=</span>
            <span class="token number">4</span>
            <span class="token comment">//14</span>
            <br>
            times
            <span class="token operator">*=</span>
            <span class="token number">9</span>
            <span class="token comment">//45.72468</span>
            <br>
            devidedBy
            <span class="token operator">/=</span>
            <span class="token number">2</span>
            <span class="token comment">//1.5</span>
        </code>
    </pre>
    `+
    "<code>plus += 5</code> は <code>plus = plus + 2</code> の簡略表現です。加算と代入のタスクを同時に実行する演算子として組み合わされています。" +
    "<hr>単項マイナス演算子" +
    "単項マイナス演算子の<code>-</code>を前置することで、数値の符号を切り替えて反転させることができます。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            negate
            <span class="token operator">=</span>
            -plus
            <span class="token comment">//-55</span>
        </code>
    </pre>
    `+
    "単項マイナス演算子（-）は、スペースを空けず、値の先頭に直接置きます。"

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/basic-operators/arithmetic-operators/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()


title="比較演算子"
similarity=`<p class="similar">Javaの比較演算子と全く同じ</p>`
text =
    "Swiftは、標準的な比較演算子を全てサポートしています。" +
    `
    <ul>
        <li>等しい（a == b）</li>
        <li>等しくない（a != b）</li>
        <li>より大きい（a > b）</li>
        <li>より小さい（a < b）</li>
        <li>より大きい、または等しい（a >= b）</li>
        <li>より小さい、または等しい（a <= b）</li>
    </ul>
    `+
    "各比較演算子は、文がtrueかどうかを示すBool値を返します。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            equals
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator">==</span>
            <span class="token number">6</span>
            <span class="token comment">//false</span>
            <br>
            <span class="token keyword">let</span>
            nonEquals
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator">!=</span>
            <span class="token number">6</span>
            <span class="token comment">//true</span>
            <br>
            <span class="token keyword">let</span>
            greaterThan
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator">></span>
            <span class="token number">6</span>
            <span class="token comment">//false</span>
            <br>
            <span class="token keyword">let</span>
            lesserThanOrEqual
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator"><=</span>
            <span class="token number">6</span>
            <span class="token comment">//true</span>
        </code>
    </pre>
    `

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/basic-operators/comparison-operators/"
addText()

/*title="比較演算子ータプルの比較"
 similarity=`<p class="diff">全然違う（Swift特有のもの）</p>`
 text="タプルは、等しくない値が見つかるまで、左から右に向かって一つずつ比較されます。" +
 "すべての要素が等しい場合に、タプル自体が等しいこととなります。"+
 `
 <pre class="language-swift">
 <code class="language-swift">
 (<span class="token number">1</span>, <span class="token string">"zebra"</span>)
 <span class="token operator"><</span>
 (<span class="token number">2</span>, <span class="token string">"apple"</span>)
 <span class="token comment">// true, 1 より 2 が小さい</span>
 <br>
 (<span class="token number">3</span>, <span class="token string">"apple"</span>)
 <span class="token operator"><</span>
 (<span class="token number">3</span>, <span class="token string">"bird"</span>)
 <span class="token comment">// true, 3 は 3 と等しく、"apple" は "bird" より小さい</span>
 <br>
 (<span class="token number">4</span>, <span class="token string">"dog"</span>)
 <span class="token operator">==</span>
 (<span class="token number">4</span>, <span class="token string">"dog"</span>)
 <span class="token comment">// true, 4 は 4 と等しく、"dog" は "dog" と等しい</span>
 </code>
 </pre>
 `
 source="https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
 addText()
 */

title="三項条件演算子"
similarity=`<p class="similar">Javaと全く同じ</p>` +
    "Swift: question ? answer1: answer2<br>" +
    "Java: question ? answer1: answer2"
text="三項条件演算子は、3 つのパートで構成される特殊な演算子で、<code>question ? answer1 : answer2</code> という形式を取ります。<br>" +
    "question が true か false かによって、2 つの式のうちの 1 つを評価する簡単な方法です。<br>" +
    "question が true の場合は answer1 を評価して値を返し、false の場合は answer2 を評価して値を返します。<br>" +
    "三項条件演算子は、以下のコードの簡略表現です。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class='token keyword'>if</span>　question {
            <br>&emsp;
            answer1<br>
            }<span class='token keyword'>else</span>{
            <br>&emsp;
            answer2<br>
            }
        </code>
    </pre>
    <br>
    ` +
    "次は、テーブル行の高さを計算する例です。<br>" +
    "行にヘッダがある場合は行の高さが内容よりも 50 ポイント高く、ヘッダが無い場合は 20 ポイント高くなります。<br>" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class='token keyword'>let</span>
            contentHeight
            <span class='token operator'>=</span>
            <span class='token number'>40</span>
            <br>
            <span class='token keyword'>let</span>
            hasHeader
            <span class='token operator'>=</span>
            <span class='token boolean'>true</span>
            <br>
            <span class='token keyword'>let</span>
            rowHeight
            <span class='token operator'>=</span>
            contentHeight
            <span class='token operator'>+</span>
            (hasHeader
            <span class='token operator'>?</span>
            <span class='token number'>50</span>
            <span class='token operator'>:</span>
            <span class='token number'>20</span>)
            <span class='token comment'>// rowHeight は 90</span>
        </code>
    </pre>
    ` +
    "前の例は、以下のコードの簡略表現です。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class='token keyword'>let</span>
            contentHeight
            <span class='token operator'>=</span>
            <span class='token number'>40</span>
            <br>
            <span class='token keyword'>let</span>
            hasHeader
            <span class='token operator'>=</span>
            <span class='token boolean'>true</span>
            <br>
            <span class='token keyword'>var</span>
            rowHeight
            <span class='token operator'>=</span>
            contentHeight
            <br>
            <span class='token keyword'>if</span>
            hasHeader {
            <br>&emsp;
            rowHeight
            <span class='token operator'>=</span>
            rowHeight
            <span class='token operator'>+</span>
            <span class='token number'>50</span>
            <br>
            } <span class='token keyword'>else</span>{
            <br>&emsp;
            rowHeight
            <span class='token operator'>=</span>
            rowHeight
            <span class='token operator'>+</span>
            <span class='token number'>20</span>
            <span class='token comment'>// rowHeight は 90</span>
        </code>
    </pre>
    ` +
    "初めの例での三項条件演算子の使用例は、1 行のコードで rowHeight に正しい値を設定することができます。<br>" +
    "if 文内で値が変更されることが無いため、rowHeight が変数である必要がなく、2 つ目の例よりも簡潔です。<br><br>" +
    "もう一つの例を見てみましょう。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            result
            <span class="token operator">=</span>
            <span class="token number">5</span>
            <span class="token operator">></span>
            <span class="token number">6</span>
            <span class="token operator">?</span>
            <span class="token number">5</span>
            <span class="token operator">:</span>
            <span class="token number">6</span>
            <span class="token comment">//6</span>
        </code>
    </pre>
    `

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/basic-operators/ternary-conditional-operator/"
addText()


title="論理演算子"
similarity=`<p class="similar">Javaの論理演算子と全く同じ</p>`
text="論理演算子は、ブール論理値の true と false を変更または結合します。Swift は3 つの標準的な論理演算子をサポートしています。" +
    `
    <ul>
        <li>論理 NOT（!a）</li>
        <li>論理 AND（a && b）</li>
        <li>論理 OR（a || b）</li>
    </ul>
    `+
    "<h3>論理 NOT 演算子</h3>" +
    "論理 NOT 演算子 (!a) は、ブール値を反転、つまり true を false にし、false を true にします。<br>"+
    "論理 NOT 演算子は前置演算子で、空白を空けず、作用する値の直前に置きます。<br>" +
    "次の例でも見られるように、”not a“（a でない）と読むことができます。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class='token keyword'>let</span>
            not
            <span class='token operator'>=</span>
            <span class='token operator'>!</span>a
        </code>
    </pre>`+
    "<h3>論理 AND 演算子</h3>" +
    "論理 AND 演算子 (a && b) は、両方の値が true の場合のみ、式全体が true となる論理式です。"+
    "どちらかの値が false の場合、式全体も false となります。<br>" +
    "実際、初めの値が false の場合、2 つ目の値は評価さえされず、式全体が true になることはありません。これは短絡評価として知られています。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            and
            <span class="token operator">=</span>
            notEquals
            <span class="token operator">&&</span>
            equals
        </code>
    </pre>
    `+
    "<h3>論理 OR 演算子</h3>" +
    "論理 OR 演算子 (a || b) は、パイプ文字を 2 文字続ける中置演算子です。2 つの値のうちいずれか 1 つでも true の場合、" +
    "式全体が true となる論理式です。<br>"+
    "論理 AND 演算子と同様に、論理 OR 演算子でも短絡評価となります。論理 OR 演算子の左側が true であれば、" +
    "右側が評価されることはなく、式全体の結果が変わることはありません。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            or
            <span class="token operator">=</span>
            notEquals
            <span class="token operator">||</span>
            equals
        </code>
    </pre>
    ` +
    "<h3>論理演算子の結合</h3>" +
    "複数の論理演算子を結合することができます。" +
    `
    <pre class='language-swift'>
        <code class='language-swift'>
            <span class='token keyword'>let</span>
            isCorrectPerson
            <span class='token operator'>=</span>
            enteredDoorCode
            <span class='token operator'>&&</span>
            passedRetinaScan
            <span class='token operator'>||</span>
            hasDoorKey
            <span class='token operator'>||</span>
            knowsOverridePassword
        </code>
    </pre>
    ` +
    "この例は、&& と || の演算子を複数使用した長い複合式になっています。<br>" +
    "しかし、&& および || の演算子は 2 つの値にのみ作用するので、実際には 3 つの小さな式が連結されているということになります。<br><br>" +
    "この例は、「正しいドアコードを入力して網膜スキャンをパスした場合、またはドアキーを持っている場合、または緊急優先パスワードを知っている場合、" +
    "trueになる」と読むことができます。" +
    "<h3>明示的な括弧</h3>" +
    "厳密には必要ありませんが、複雑な式を読みやすくする目的で、括弧を含めることが効果的な場合があります。<br>" +
    "上で見たドアアクセスの例では、意図を明確にするために複合式の初めの部分を丸括弧で囲むと効果的です。" +
    `
    <pre class='language-swift'>
        <code class='language-swift'>
            <span class='token keyword'>let</span>
            isCorrectPerson
            <span class='token operator'>=</span>
            (enteredDoorCode
            <span class='token operator'>&&</span>
            passedRetinaScan)
            <span class='token operator'>||</span>
            hasDoorKey
            <span class='token operator'>||</span>
            knowsOverridePassword
        </code>
    </pre>
    ` +
    "この括弧により、初めの 2 つの値を全体のロジックと分けて考えられるようになります。<br>" +
    "複合式の結果は変化しませんが、意図が読み手にわかりやすくなります。簡潔さより読みやすさを優先し、意図を明確にするために括弧を使用してください。"
source="http://www.studiogalago.com/the-swift-programming-language/language-guide/basic-operators/logical-operators/" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()

title="nil合体演算子：<code>??</code>"
similarity = `<p class="diff">Swift独自の演算子</p>`
text="オプショナル型の値を使って計算などをするためには、オプショナル型の変数や定数を<b>開示（unwrap）</b>する必要があります。これから開示する方法の一つを教えます。<br><br>" +
    "オプショナル型変数がnilでなければ変数を開示してその値を使うが、nilだった場合には別に指定しておいた値Sを使う、という処理を行うことがあります。<br>" +
    "Swiftでは、これを簡単に記述するための<b>nil合体演算子<code>??</code></b>を用意しています。<br>" +
    "この例ではoptional変数の値をnilにしたため、別に指定したデフォルト文字列を出力します。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            optional
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <br>
            <span class="token keyword">var</span>
            valueOrDefault
            <span class="token operator">=</span>
            optional
            <span class="token operator">??</span>
            <span class="token string">"default"</span>
            <span class="token comment">//"default"を出力</span>
        </code>
    </pre>
    `+
    "optional変数を通常値に変更した後は、\"Non default\"を出力します。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            optional
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token string">"Non default"</span>
            <br>
            <span class="token keyword">var</span>
            valueOrDefault
            <span class="token operator">=</span>
            optional
            <span class="token operator">??</span>
            <span class="token string">"default"</span>
        </code>
    </pre>
    `+
    "オプショナル変数optionalは開示されて、valueOrDefaultに代入されます。ここで代入されたのは、オプショナル型ではなく、開示された後の文字列です。<br>" +
    "なので、valueOrDefaultを直接使って代入、計算や他の操作をすることができます。"

source="詳解Swift改訂版」ー荻原剛志<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()


title="範囲演算子"
similarity=`<p class="diff">Swift独自の演算子</p>`
text="Swift には、値の範囲を表現する簡単な方法として、2 つの範囲演算子があります。<br>"+
    "<h3>閉 (closed) 範囲演算子</h3>" +
    "閉範囲演算子 (a...b) は、a から b までの範囲を定義し、値 a と b を含みます。a の値を b より大きくすることはできません。" +
    `
    <pre class="language-swift">
        <b><i>Swift: </i></b><br>
        <code class="language-swift">
            <span class="token keyword">var</span>
            closedRange
            <span class="token operator">=</span>
            <span class="token number">1</span><span class="token operator">...</span><span class="token number">5</span>
        </code>
    </pre>
    `+
    "範囲演算子の定義は実は配列の定義と同じです。" +
    "<h3>半開 (half-open) 範囲演算子</h3>" +
    "半開範囲演算子 (a..< b) は、a から b までの範囲を定義しますが、b を含みません。<br>" +
    "半開 (half-open) と表現されるのは、前の値を含むのに対し、後の値を含まないためです。<br>" +
    "閉範囲演算子と同様に、a の値を b より大きくすることはできません。a と b の値が同じ場合には、結果の範囲は空になります。" +
    `
    <pre class="language-swift">
        <b><i>Swift: </i></b><br>
        <code class="language-swift">
            <span class="token keyword">var</span>
            halfOpen
            <span class="token operator">=</span>
            <span class="token number">1</span><span class="token operator">..<</span><span class="token number">5</span>
        </code>
    </pre>
    `
source="「詳解Swift改訂版」ー荻原剛志"
addText()

title="if文"
similarity = `<p class="similar">全く同じ</p>ただSwiftでは条件分に括弧が必要なし`
text="条件によって異なるコードを実行すると効果的な場合があります。<br>" +
    "エラーが発生したときに追加でコードを実行したい場合や、値が大きく、または小さくなりすぎたときにメッセージを表示したい場合のことです。<br>" +
    "これを実現するには、コードの一部を条件文にします。<br>" +
    "Swift には、コードに条件分岐を追加する手段が、if 文と switch 文の 2 通りあります。一般的に、シンプルな条件には if 文を用います。<br>" +
    "switch 文は、組み合わせが多岐にわたる複雑な条件に適していて、パターンマッチによって適切なコード分岐を選択しやすくなるような状況で役に立ちます。<br><br>" +
    "シンプルな形式で、if 文は if 条件を 1 つ持ちます。条件が true の場合にのみ、コードブロックを実行します。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            a
            <span class="token operator">=</span>
            <span class="token number">1</span>
            <br>
            <span class="token keyword">if</span>
            a
            <span class="token operator">%</span>
            <span class="token number">2</span>{
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"Even number"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    ` +
    "この例では、数字が偶数かどうかをチェックしています。" +
    "もしそうであれば、メッセージが出力されます。そうでなければ、メッセージは出力されず、if 文の閉じ括弧の後に続くコードが実行されます。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            a
            <span class="token operator">=</span>
            <span class="token number">1</span>
            <br>
            <span class="token keyword">if</span>
            a
            <span class="token operator">%</span>
            <span class="token number">2</span>
            <span class="token operator">==</span>
            <span class="token number">0</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"Even number"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else if</span>
            a
            <span class="token operator">%</span>
            <span class="token number">3</span>
            <span class="token operator">==</span>
            <span class="token number">0</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"Divisable by three"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"Odd number, not divisible by three"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `+
    "この例では、数字が偶数であれば、\"Even number\"というメッセージが出力されます。<br>" +
    "そうであれば、３の倍数かどうか判断し、そうであれば\"Divisable by three\"が出力されます。<br>" +
    "そうでなければ、「奇数だが、３の倍数ではない」というメッセージが出力されます。<br>"
source="http://www.studiogalago.com/the-swift-programming-language/language-guide/control-flow/conditional-statements/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()


title="if文とオプショナルバインディング"
similarity=`<p class="diff">Swift独自の文法</p>`
text="オプショナル型の変数を開示する方法として、if文とオプショナルバインディングがあります。<br>" +
    "オプショナルが値を保持しているかを確認するために、オプショナルバインディングを使用し、その値を一時的な定数として利用できるようにします。<br>" +
    "オプショナルバインディングは、オプショナルが値を保持していることを確認するために、if文で使用することができます。と同時に、そこで抽出した値を定数に代入します。<br><br>" +
    "以下のように、if 文にオプショナルバインディングを記述します。" +
    `
    <pre class='language-swift'>
        <code class='language-swift'>
            <span class='token keyword'>if</span>
            <span class='token keyword'>let</span>
            <span class='token variable-text'>constantName</span>
            <span class='token operator'>=</span>
            <span class='token variable-text'>someOptional</span> {
            <br>&emsp;
            statements
            <br>
            }
        </code>
    </pre>
    ` +
    "<span class='token variable-text'>toBeOrNotToBe</span> はオプショナル型の変数です。" +
    "この例では<code>nil</code>ではなく、通常の文字列を値として持っています。<br>" +
    "<code>if let</code>はオプショナル変数を開示し、その値を使えるようにします。<br>" +
    "開示に成功すれば（オプショナル変数は<code>nil</code>ではない）、<code>if</code>ブロックに入ります。そうでなければ、<code>else</code>ブロックに入ります。<br><br>" +
    `
    <pre class="language-swift">
        <b><i>Swift: </i></b><br>
        <code class="language-swift">
            <span class="token keyword">let</span>
            toBeOrNotToBe
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token string">"That is the question"</span>
            <br>
            <span class="token keyword">if</span>
            <span class="token keyword">let</span>
            toBe
            <span class="token operator">=</span>
            toBeOrNotToBe {
            <br>
            &emsp;
            <span class="token function">print(</span>
            toBe
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"There's nothing"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `+
    "もし<span class='token variable-text'>toBeOrNotToBe</span>の値を<code>nil</code>に変更すると、\"There's nothing\"が出力されます。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            toBeOrNotToBe
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <br>
            <span class="token keyword">if</span>
            <span class="token keyword">let</span>
            toBe
            <span class="token operator">=</span>
            toBeOrNotToBe {
            <br>
            &emsp;
            <span class="token function">print(</span>
            toBe
            <span class="token function">)</span>
            <br>
            }
            <span class="token keyword">else</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"There's nothing"</span>
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/the-basics/optionals/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()


title="<code>!</code>で強制アンラップ"
similarity=`<p class="diff">Swift独自の演算子</p>`
text="オプショナルの名前の末尾にエクスクラメーションマークを付加して値にアクセスできます。<br>" +
    "このエクスクラメーションマークは、「このオプショナルが間違いなく値を保持していることがわかっているので、そのまま値を使用する」ということを意味します。<br>" +
    "これを<b>オプショナル値の強制アンラップ</b>と呼びます。<br><br>" +
    "前で述べているように、オプショナルは、定数や変数に値が存在しない場合があることを示しています。<br>" +
    "オプショナルは、値が存在するかを if 文でチェックすることができ、値が存在する場合はオプショナルバインディングでオプショナル値にアクセスして条件付きでアンラップすることができます。<br>" +
    "値が設定された後など、オプショナルが常に値が持っていることが、プログラムの構成から明らかな場合もあります。<br>" +
    "こういったケースでは、常に値があることを前提にして、アクセスのたびにオプショナル値をチェックしてアンラップする処理を削除するほうが効果的です。<br>" +
    "こういったオプショナルは、無条件にアンラップされるオプショナルとして定義されます。<br><br>" +
    "無条件にアンラップされるオプショナルは、通常のオプショナルですが、アクセスのたびにオプショナル値をアンラップすることなく、オプショナルでない値のように使うことができます。<br><br>" +
    "次の例は、ラップされた String の値にアクセスするとき、オプショナル文字列と、無条件にアンラップされるオプショナル文字列との間での動作の違いを示しています。<br>" +
    "無条件にアンラップされるオプショナルを、使用時に自動的にアンラップされることが許可されているオプショナルとして考えることができます。<br><br>" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            toBeOrNotToBe
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token symbol">"That is the question"</span>
            <br>
            <span class="token keyword">let</span>
            toBe
            <span class="token operator">=</span>
            toBeOrNotToBe!
            <span class="token comment">//toBe は "That is the question"</span>
        </code>
    </pre>
    ` +
    "値が存在しないオプショナル値を<code>!</code>でアクセスしようとすると、実行じエラーになります。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            toBeOrNotToBe
            <span class="token operator">:</span>
            String?
            <span class="token operator">=</span>
            <span class="token symbol">nil</span>
            <br>
            <span class="token keyword">let</span>
            toBe
            <span class="token operator">=</span>
            toBeOrNotToBe!
            <span class="token comment">//error: Execution was interrupted</span>
        </code>
    </pre>
    `
source="http://www.studiogalago.com/the-swift-programming-language/language-guide/the-basics/optionals/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()


title = "for-in loop"
similarity = `<p class="littlediff">少し違う</p>` +
    `Swift: <code>for</code> index <code>in</code> <span class="token variable-text">any_Sequence</span>{ ... }<br><br>` +
    ` Java: <code>for</code> (<code>dataType</code> index : <span class="token variable-text">any_Sequence</span> { ... }`
text = "数値の範囲や、配列内の値、文字列内の文字のようなシーケンスを繰り返し処理するために、for–in ループを使用します。<br>" +
    "次の例は、5 の段の初めのいくつかを出力しています。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">for</span>
            index
            <span class="token keyword">in</span>
            <span class="token number">1</span><span class="token operator">...</span><span class="token number">5</span>{
            <br>
            <span class="token function">print(</span>
            <span class="token string">"</span>
            <span class="token punctuation">\\(</span>
            index
            <span class="token punctuation">)</span>
            <span class="token string">times 5 is </span>
            \\(index
            <span class="token operator">*</span>
            <span class="token number">5</span>
            )
            <span class="token string">"</span>
            <span class="token function">)</span>
            <br>
            <span class="token comment">// 1 times 5 is 5</span><br>
            <span class="token comment">// 2 times 5 is 10</span><br>
            <span class="token comment">// 3 times 5 is 15</span><br>
            <span class="token comment">// 4 times 5 is 20</span><br>
            <span class="token comment">// 5 times 5 is 25</span><br>
        </code>
    </pre>
    ` +
    "このシーケンスは、閉範囲演算子 (...) を利用し、1 から 5 を含む範囲の数値を繰り返しています。<br>" +
    "index の値は、範囲の最初の数値 (1) に設定され、ループ内のコードが実行されています。<br>" +
    "このケースでは、ループ内のコードは 1 行で、index の現在値に対応する 5 の段の値を出力しています。コード実行後、index の値は範囲の次の値 (2) に更新され、" +
    "再び print 関数が呼び出されます。<br>" +
    "この処理は、範囲の最後に達するまで継続します。<br><br>" +
    "上の例では、index は定数の値で、ループの各繰り返しの初期処理で自動的に設定されます。<br>" +
    "そのため、使用する前に宣言する必要はありません。let キーワードによる宣言の必要は無く、ループ宣言に含まれる形で暗に宣言されています。<br>" +
    "シーケンスの各値が必要無い場合、変数名の代わりにアンダースコア (_) を使って値を無視することができます。<br>" +
    `
    <pre class='language-swift'>
        <code class='language-swift'>
            <span class='token keyword'>let</span>
            base
            <span class='token operator'>=</span>
            <span class='token number'>3</span>
            <br>
            <span class='token keyword'>let</span>
            power
            <span class='token operator'>=</span>
            <span class='token number'>3</span>
            <br>
            <span class='token keyword'>for</span>
            _
            <span class='token keyword'>in</span>
            <span class='token number'>1</span>...power {
            <br>&emsp;
            answer
            <span class='token operator'>*=</span>
            base
            <br>
            }
            <br>
            <span class='token function'>print(</span>
            <span class='token string'>"</span>
            \\(base)
            <span class='token string'>to the power of</span>
            \\(power)
            <span class='token string'>is</span>
            \\(answer)
            <span class='token string'>"</span>
            <span class='token function'>)</span>
            <span class='token function'>)</span>
            <span class='token comment'>// 3 to the power of 10 is 59049　と出力
        </code>
    </pre>
    ` +
    "この例は、ある数値を別の数値でべき乗した値（このケースでは 3 の 10 乗）を算出しています。<br>" +
    "最初の値 1（3 の 0 乗）の 3 による乗算を、1 から 10 までの閉範囲を利用して 10 回繰り返しています。<br>" +
    "この計算は、ループ時のカウンター値を必要とせず、単に正しい回数分ループを実行するだけです。<br>" +
    "ループ変数の代わりにアンダースコア記号 (_) を使用することで、個々の値が無視され、ループ時の現在値にアクセスできなくなります。<br>" +
    "基本的に、for-in ループは範囲だけでなく、文字列を繰り返すこともできます。<br>" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">for</span>
            i
            <span class="token keyword">in</span>
            <span class="token number">1</span><span class="token operator">...</span><span class="token number">10</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"</span>
            \\( i )
            <span class="token string">one thousand"</span>
            <span class="token function">)</span>
            <br>
            }
            <br>
            <span class="token keyword">for</span>
            character
            <span class="token keyword">in</span>
            <span class="token string">"The Swift Brown Fox"</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            character
            <span class="token function">)</span>
            <br>
            }
        </code>
    </pre>
    `+
    "上の例を理解しやすく、Javaで書くといかになります。" +
    `
    <pre class="language-java">
        <code class="language-java">
            ArrayList<span class='token string'><</span>Integer<span class='token string'>></span>
            range
            <span class='token operator'>=</span>
            <span class='token keyword'>new</span>
            ArrayList<span class='token string'><</span>Integer<span class='token string'>></span>(
            Arrays<span class='token property'>.asList</span>(
            <span class='token number'>1</span>,
            <span class='token number'>2</span>,
            <span class='token number'>3</span>,
            <span class='token number'>4</span>,
            <span class='token number'>5</span>,
            <span class='token number'>6</span>,
            <span class='token number'>7</span>,
            <span class='token number'>8</span>,
            <span class='token number'>9</span>,
            <span class='token number'>10</span>));
            <br>
            <span class='token keyword'>for</span>(
            Integer i
            <span class='token operator'>:</span>
            range){
            <br>&emsp;
            <span class='token function'>System.out.println(</span>i<span class='token function'>)</span>;
            <br>
            }
            <br>
            String aString
            <span class='token operator'>=</span>
            <span class='token string'>"The Swift Brown Fox"</span>;
            <br>
            <span class='token keyword'>for</span>(
            int i<span class='token operator'>=</span><span class='token number'>0</span>;
            i<span class='token operator'><</span>aString<span class='token property'>.length</span>();
            i<span class='token operator'>++</span>){
            <br>&emsp;
            <span class='token function'>System.out.println(</span>
            aString<span class='token property'>.charAt</span>(i)
            <span class='token function'>)</span>;
            <br>
            }
        </code>
    </pre>
    `
source="http://www.studiogalago.com/the-swift-programming-language/language-guide/control-flow/for-in-loops/"
addText()


title="while loop"
similarity=`<p class="similar">全く同じ</p>` +
    "ただSwiftでは条件分に括弧が必要なし"
text="while ループは条件が false になるまでループブロックを実行します。この種のループは事前に繰り返し処理すべき回数がわからない場合に適しています。<br>" +
    "Swift には、while ループが 2 種類あります。<br>" +
    `
    <ul>
        <li>while は、繰り返し処理のたびに、最初に条件を評価します。</li>
        <li>repeat–while は、繰り返し処理のたびに、最後に条件を評価します。</li>
    </ul>
    ` +
    "while ループは、条件の評価から開始します。条件が true の場合、条件が false になるまでループブロックを繰り返します。<br>"+
    "while ループの一般的な形式は、次のようになります。<br><br>" +
    `
    <span class='token keyword'>while</span>
    <span class='token variable-text'>condition</span> {<br>
    &emsp;<span class='token variable-text'>statements</span><br>
    }<br><br>
    ` +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            count
            <span class="token operator">=</span>
            <span class="token number">10</span>
            <br>
            <span class="token keyword">while</span>
            count
            <span class="token operator">></span>
            <span class="token number">0</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"The current count is</span>
            \\(count)
            <span class="token string">"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            count
            <span class="token operator">=</span>
            count
            <span class="token operator"> - </span>
            <span class="token number">1</span>
            <br>
            }
        </code>
    </pre>
    `+
    "上の例をJavaで書き換えると以下になります。" +
    `
    <pre class="language-java">
        <code class="language-java">
            Integer count
            <span class="token operator">=</span>
            <span class="token keyword">new</span>
            <span class='token function'>Integer(
            10
            <span class='token function'>)</span>;
            <br>
            <span class='token keyword'>while</span>(
            count
            <span class='token operator'>></span>
            <span class='token number'>10</span>
            ){
            <br>&emsp;
            <span class='token function'>System.out.println(</span>
            <span class='token string'>"The current count is"</span>
            <span class='token operator'>+</span>
            <span class='token function'>String.valueOf(</span>
            count
            <span class='token function'>) )</span>;
            <br>&emsp;
            i
            <span class='token operator'>=</span>
            i<span class='token operator'>-</span><span class='token number'>1</span>;
            <br>
            }
        </code>
    </pre>
    ` +
    "現在の while ループの終了時に、ループを再実行すべきかの条件がチェックされます。<br>" +
    "countが０になった場合、ループの条件は false と評価され、ループが止まります。"
source="http://www.studiogalago.com/the-swift-programming-language/language-guide/control-flow/while-loops/"
addText()



title="repeat-while"
similarity=`<p class="similar">ほぼ同じ</p>` +
    "Swiftのrepeat-whileはJavaのdo-whileと同じ<br>" +
    "ただ、キーワードがdoではなくrepeatで、条件文に括弧が必要なし"
text="while ループのもう一方のバリエーションが repeat–while ループで、ループ条件の前にまず一度ループブロックを実行します。<br>" +
    "そして、条件が false になるまでループを繰り返します。<br>" +
    "repeat–while ループの一般的な形式は、次のようになります。<br><br>" +
    `
    <span class='token keyword'>repeat</span> {<br>
    &emsp;<span class='token variable-text'>statements</span><br>
    } <span class='token keyword'>while</span>
    <span class='token variable-text'>condition</span><br><br>
    ` +
    "whileループでの例をrepeat-while文法で書き換えると以下のようになります。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">var</span>
            count
            <span class="token operator">=</span>
            <span class="token number">10</span>
            <br>
            <span class="token keyword">repeat</span>
            {
            <br>
            &emsp;
            <span class="token function">print(</span>
            <span class="token string">"The current count is</span>
            \\(count)
            <span class="token string">"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            count
            <span class="token operator">=</span>
            count
            <span class="token operator"> - </span>
            <span class="token number">1</span>
            <br>
            }
            <span class="token keyword">while</span>
            count
            <span class="token operator">></span>
            <span class="token number">0</span>
        </code>
    </pre>
    ` +
    "ループの条件 (while count > 0) は前と同じですが、今回は最初のループ実行が終了するまで評価されません。"

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/control-flow/while-loops/"
addText()


title="switch基本文法"
similarity=`<p class="similar">ほぼ同じ</p>` +
    "文字列や数字をマッチングして、違う動作をするのはJavaと同じ"
text="次の例を見てみましょう。電球が一つあって、スイッチをオンにします。ここでは、Switch文で電球の状態を確認したいと思います。<br>" +
    "なので、ケース分けを以下のようにします。" +
    `
    <ul>
        <li>電気がつく場合、「電気がついてます。」を出力</li>
        <li>もしオフであれば、「ここは暗いです。」が出力されます。</li>
        <li>そうでもなければ、「これは私の電球ではありません。」を出力</li>
    </ul>
    ` +
    "switch 文は、いくつかのパターンに対して、値が一致するか比較します。そして、一致する最初のパターンに基づく適切なコードブロックを実行します。<br>" +
    "switch 文は、複数の状態に対応する if 文の代わりに使用できます。<br>" +
    "switch 文は複数のケースで構成され、各ケースは case キーワードで始まります。<br>" +
    "指定した値との比較に加え、Swift にはケースに対してより複雑なパターンを指定する方法がいくつかあります。これらの方法については、このセクションの後半で説明しています。<br>" +
    "各 switch ケースの本体は、if 文の分岐と似たような、分岐された別々の実行コードです。<br>" +
    "switch 文は、どの分岐を選択すべきかを特定します。すべての switch 文は、網羅的である必要があります。つまり、すべての値がswitch ケースの 1 つに一致している必要があります。<br>" +
    "すべての値に対応する switch ケースを定義することが適切でない場合、あらゆる値をカバーしてすべてのケースに対応するデフォルトを定義することができます。<br>" +
    "このケースを default キーワードで示し、最後に定義する必要があります。"+
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            lightBulb
            <span class="token operator">=</span>
            <span class="token string">"n"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulb {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"on"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"The lights are on!"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"off"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"It's dark in here!"</span>
            <br>
            &emsp;
            <span class="token keyword">default:</span>
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"It's not my light bulb"</span>
            <span class="token function">)</span>
            }
            <span class="token comment">//print out "The lights are on!"</span>
        </code>
    </pre>
    `

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/control-flow/conditional-statements/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()

title="switch基本文法-暗黙なフォールスルーしない"
similarity=`<p class="littlediff">少し違う</p>` +
    "Swiftでは暗黙なフォールスルーをしないので、ケースごとにbreakは必要なし。<br>" +
    "Javaでは暗黙な各ケースの最後で次のケースにフォールスルーするので、breakは必ず必要"
text="暗黙的にフォールスルーしない Java の switch 文とは対照的に、Swift の switch 文はデフォルトでは各ケースの最後で次のケースにフォールスルーしません。<br>" +
    "そうならずに、はじめに一致した switch ケースを完了後すぐ、明示的な break 文を必要とせずに、switch 文全体の実行を終了します。<br>" +
    "これにより、Java と比較して switch 文はより安全でわかりやすくなっていて、誤って複数の switch ケースを実行することを防ぐことができます。" +
    "前のコードと同じ結果を出力する Java プログラムと比較してみましょう。" +
    `
    <pre class="language-java">
        <code class="language-java">
        <span class='token keyword'>final</span>
            String lightBulb
            <span class='token operator'>=</span>
            <span class='token string'>"on"</span>;
            <span class='token keyword'>switch</span>(lightBulb){
            <br>&emsp;
            <span class='token keyword'>case</span>
            <span class='token string'>"on"</span><span class='token operator'>:</span>
            <br>&emsp;
            <span class='token function'>System.out.println(</span>
            <span class='token string'>"The lights are on!"</span>
            <span class='token function'>)</span>;
            <br>&emsp;
            <span class='token keyword'>break</span>;
            <br>
            <span class='token keyword'>case</span>
            <span class='token string'>"off"</span><span class="token operator">:</span>
            <br>&emsp;
            <span class='token function'>System.out.println(</span>
            <span class='token string'>"It's dark in here!"</span>
            <span class='token function'>)</span>;
            <br>&emsp;
            <span class='token keyword'>break</span>;
            <br>
            <span class="token keyword">default</span><span class="token operator">:</span>
            <span class='token function'>System.out.println(</span>
            <span class='token string'>"It's not my light bulb"</span>
            <span class='token function'>)</span>;
            <br>&emsp;
            <span class='token keyword'>break</span>;
            <br>
        </code>
    </pre>
    }
    ` +
    "ご覧の通り、Javaではケースごとにbreak文が必要です。<br>" +
    "ですので、Javaスタイルのフォールスルーが必要な場合は、個別にfallthroughキーワードでこの動作にすることができます。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            lightBulb
            <span class="token operator">=</span>
            <span class="token string">"n"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulb {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"on"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"Oh my eyes!"</span>
            <span class="token function">)</span>
            <br>
            <span class="token keyword">fallthrough</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"off"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"That's a well behaving light"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token keyword">default:</span>
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"We're in the twilight zone"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class="token comment">// Oh my eyes! That's a well behaving light を出力</span>
        </code>
    </pre>
    `
source="http://www.studiogalago.com/the-swift-programming-language/language-guide/control-flow/conditional-statements/"
addText()


title="switch基本文法-徹底的"
similarity=`<p class="littlediff">少し違う</p>` +
    "Swift: 全ての可能性を網羅する必要があるので、defaultは必需<br>" +
    " Java: 全ての可能性を網羅しなくても良いので、defaultはオプション"
text="Swiftは安全な言語です。<br>" +
    "Switch文でも、マッチングできずエラーやクラッシュなどを起こす可能性を避けるために、全ての可能性を余すところなく徹底的に羅列することが必要です。<br>" +
    "ですが、文字列などの場合、全ての文字列をSwitchのケースでマッチングするのは不可能であるため、defaultで余った可能性をカバーする必要があります。<br><br>" +
    "前のプログラムでdefaultケースブロックを消すと、コンパイルエラーが起こります。エラーの内容は全ての可能性を網羅してないため、defaultが必要ということです。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            lightBulb
            <span class="token operator">=</span>
            <span class="token string">"n"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulb {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"on"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"The lights are on!"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"off"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"It's dark in here!"</span>
            <span class="token function">)</span>
            <br>
            }
            <span class='token comment'>// コンパイルエラー</span>
        </code>
    </pre>
    `+
    "このエラーを消すために、defaultを入れてみました。" +
    `
    <pre class='language-swift'>
        <code class='language-swift'>
            <span class="token keyword">let</span>
            lightBulb
            <span class="token operator">=</span>
            <span class="token string">"n"</span>
            <br>
            <span class="token keyword">switch</span>
            lightBulb {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"on"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"The lights are on!"</span>
            <span class="token function">)</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token string">"off"</span>
            :
            <br>
            &emsp;&emsp;
            <span class="token function">print(</span>
            <span class="token string">"It's dark in here!"</span>
            <span class="token function">)</span>
            <br>&emsp;
            <span class='token keyword'>default:</span>
            <br>&emsp;&emsp;
            <span class='token keyword'>break</span>
            <br>
            }
        </code>
    </pre>
    ` +
    "このSwitch文では文字列の比較によって、実行されるコードブロックが違います。<br>" +
    "可能性がある全ての文字列を列挙することは現実的ではないため、一致しない全ての文字列を対象とするdefaultケースとしています。<br>" +
    "このdefaultケースにはアクションを実行する必要がなく、本体としてbreak文が記述されています。<br>" +
    "defaultケースに一致してすぐに、break文はSwitch文の実行を終了します。"

source="http://www.studiogalago.com/the-swift-programming-language/language-guide/control-flow/conditional-statements/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s<br>" +
    "「詳解Swift改訂版」ー荻原剛志"
addText()


title="switch拡張文法-範囲一致"
similarity=`<p class="diff">Swift独自の機能</p>`
text="Swift文のもう一つ強いところは範囲一致（range matching）ができることです。<br>" +
    "範囲一致 - switchケースの値が、ある範囲に含まれているかを確認することができます。次の例は、サイズを表現する自然言語に対応する数値範囲を使用しています。<br>" +
    "イベントの参加人数attendeesがあり、その値は62です。<br>" +
    "Switchで条件判断するとき、各ケースを数値の範囲と比較することができます。<br>" +
    "この場合には、attendeesが12と100の間にあるため、naturalCountにはdozens ofが代入され、実行はswitch文の外に移ります。" +
    `
    <pre class="language-swift">
        <code class="language-swift">
            <span class="token keyword">let</span>
            attendees
            <span class="token operator">=</span>
            <span class="token number">62</span>
            <br>
            <span class="language-swift">var</span>
            naturalCount
            <span class="token operator">:</span>
            <span class="token string">String</span>
            <br>
            <span class="token keyword">switch</span>
            attendees {
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token number">0</span>...<span class="token number">9</span>
            :
            <br>
            &emsp;&emsp;
            naturalCount
            <span class="token operator">=</span>
            <span class="token string">"a few"</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token number">10</span>...<span class="token number">99</span>
            :
            <br>
            &emsp;&emsp;
            candinality
            <span class="token operator">=</span>
            <span class="token string">"tens of"</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token number">100</span>...<span class="token number">999</span>
            :
            <br>
            &emsp;&emsp;
            naturalCount
            <span class="token operator">=</span>
            <span class="token string">"hundreds of"</span>
            <br>
            &emsp;
            <span class="token keyword">case</span>
            <span class="token number">1000</span>...<span class="token number">999999</span>
            :
            <br>
            &emsp;&emsp;
            naturalCount
            <span class="token operator">=</span>
            <span class="token string">"thousands of"</span>
            <br>
            &emsp;
            <span class="token keyword">default</span>
            :
            <br>
            &emsp;&emsp;
            naturalCount
            <span class="token operator">=</span>
            <span class="token string">"xmillions of"</span>
            <br>
            }
            <br>
            <span class="token function">print(</span>
            <span class="token string">"This event has</span>
            \\(naturalCount)
            <span class="token string">attendees!"</span>
            <span class="token function">)</span>
        </code>
    </pre>
    ` +
    "JavaのSwitch文ではこの機能はなく、範囲と比較したい場合には、if文を使うしかありません。" +
    `
    <pre class='language-java'>
        <code class='language-java'>
            <span class='token keyword'>final</span>
            Integer attendees
            <span class='token operator'>=</span>
            <span class='token keyword'>new</span>
            Integer(<span class='token number'>62</span>);
            <br>
            String naturalCount;
            <br>
            <span class='token keyword'>if</span>(
            attendees
            <span class='token operator'>>=</span>
            <span class='token number'>0</span>
            <span class='token operator'>&&</span>
            attendees
            <span class='token operator'><=</span>
            <span class='token number'>9</span> ){
            <br>&emsp;&emsp;
            naturalCount
            <span class='token operator'>=</span>
            <span class='token string'>"a few"</span>;
            <br>
            }
            <span class='token keyword'>else if</span>(
            attendees
            <span class='token operator'>>=</span>
            <span class='token number'>10</span>
            <span class='token operator'>&&</span>
            attendees
            <span class='token operator'><=</span>
            <span class='token number'>99</span> ){
            <br>&emsp;
            naturalCount
            <span class='token operator'>=</span>
            <span class='token string'>"tens of"</span>;
            <br>
            }
            <span class='token keyword'>else if</span>(
            attendees
            <span class='token operator'>>=</span>
            <span class='token number'>100</span>
            <span class='token operator'>&&</span>
            attendees
            <span class='token operator'><=</span>
            <span class='token number'>999</span>){
            <br>&emsp;
            naturalCount
            <span class='token operator'>=</span>
            <span class='token string'>"hundreds of"</span>;
            <br>
            }
            <span class='token keyword'>else if</span>(
            attendees
            <span class='token operator'>>=</span>
            <span class='token number'>1000</span>
            <span class='token operator'>&&</span>
            attendees
            <span class='token operator'><=</span>
            <span class='token number'>9999</span>){
            <br>&emsp;
            naturalCount
            <span class='token operator'>=</span>
            <span class='token string'>"thousands of"</span>;
            <br>
            }
            <span class='token keyword'>else</span>{
            <br>&emsp;
            naturalCount
            <span class='token operator'>=</span>
            <span class='token string'>"xmillions of"</span>;
            <br>
            }
            <br>
            <span class='token function'>System.out.println(</span>
            <span class='token string'>"This event has"</span>
            <span class='token operator'>+</span>
            naturalCount
            <span class='token operator'>+</span>
            <span class='token string'>"attendees!"</span>
            <span class='token function'>)</span>;
        </code>
    </pre>
    `
source="http://www.studiogalago.com/the-swift-programming-language/language-guide/control-flow/conditional-statements/<br>" +
    "https://www.youtube.com/watch?v=dmXtWNmXgIA&t=6350s"
addText()


/*title="switch statement-tuple matching"
 similarity="totally different"
 text="Another powerful thing is you can do the tuple matching. " +
 "So let's assume I have a variable somethere which returns the httpStatus tuple. " +
 "So I can have a status and the message that comes with that status inside the tuple. " +
 "So in this case, 402 means the payment required. So the httpStatus I can switch as well." +
 "So as you can see, I can do a lot of matching there. So the first case is, it it's 200 and" +
 "the message says OK, then I will just print out Everything is just fine then this switch statement is over." +
 "if it's still 200, but it's not ok, then I still can check for 200 then say, everything is fine" +
 "then give the message. Then I need to bind whatever the second value in my tuple is to that message." +
 "then I can do some range matching as well. on the first value in my tuple so if it's between " +
 "500 and 600 exclusive, then it will print out the server made a mistake. And if it's none of the above," +
 "I am not interested in the status code anymore, so I can put that in the underscore, then I show the message."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 httpStatus
 <span class="token operator">=</span>
 (
 <span class="token number">402</span>
 ,
 <span class="token string">"Payment required"</span>
 )
 <br>
 <span class="token keyword">switch</span>
 httpStatus {
 <br>
 &emsp;
 <span class="token keyword">case</span>
 (
 <span class="token number">200</span>
 ,
 <span class="token string">"OK"</span>
 ):
 <br>
 &emsp;&emsp;
 <span class="function">print(</span>
 <span class="token string">"Everything is just fine!"</span>
 <br>
 &emsp;
 <span class="token keyword">case</span>
 (
 <span class="token number">200</span>
 ,
 <span class="token keyword">let</span>
 message ):
 <br>
 &emsp;&emsp;
 <span class="token function">print(</span>
 <span class="token string">"Everything is fine:</span>
 \\(message)
 <span class="token string">"</span>
 <span class="token function">)</span>
 <br>
 &emsp;
 <span class="token number">500</span>
 ..<
 <span class="token number">600</span>
 ,
 <span class="token keyword">_</span>
 ):
 <br>
 &emsp;&emsp;
 <span class="token function">print(</span>
 <span class="token string">"The server made a mistake"</span>
 <span class="token function">)</span>
 <br>
 &emsp;
 <span class="token keyword">case</span>
 (
 <span class="token keyword">_</span>
 ,
 <span class="token keyword">let</span>
 message ):
 <br>
 &emsp;&emsp;
 <span class="token function">print(</span>
 message
 <span class="token function">)</span>
 <br>
 }
 </code>
 </pre>
 `+
 "So in this case, it's 402, So I get the payment required."
 addText()
 */
/*
 title="switch statement-guard with<code>where</code>"
 similarity="totally different, only in Swift"
 text="The lightBulbAndSwitch basically are on and on, off and off, on and off, off and on." +
 "So at first, I wannt do the case matching. So I can say let bulb and button be avaliable in this case statement" +
 "and what I can do is, I can guard it with where, say wherever bulb and button are equal to each other." +
 "So if the bulb and button are both on or both off, then everything seems fine." +
 "And now we know, otherwise, if the light bulb if off, then the switch must on because it's not equal anymore." +
 "or another value by the way. But then the bulb is either broken or, and in all other cases will print" +
 "The bulb is not controlled by the switch. And in this case, I set the lightBulbAndSwitch as on and off, " +
 "So it's gonna print the bulb is not controlled by the switch."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 lightBulbAndSwitch
 <span class="token operator">=</span>
 (
 <span class="token string">"on"</span>
 ,
 <span class="token string">"off"</span>
 <br>
 <span class="token keyword">switch</span>
 lightBulbAndSwitch {
 <br>
 &emsp;
 <span class="token keyword">case</span>
 <span class="token keyword">let</span>
 (bulb, button)
 <span class="token keyword">where</span>
 bulb
 <span class="token operator">==</span>
 button:
 <br>
 &emsp;&emsp;
 <span class="token function">print(</span>
 <span class="token string">"Everything seems fine!"</span>
 <span class="token function">)</span>
 <br>
 &emsp;
 <span class="token keyword">case</span>
 (
 <span class="token string">"off"</span>
 ,
 <span class="token keyword">_</span>
 ):
 <br>
 &emsp;&emsp;
 <span class="token function">print(</span>
 <span class="token string">"The bulb is either broken, or"</span>
 <span class="token function">)</span>
 <br>
 &emsp;&emsp;
 <span class="token keyword">fallthrough</span>
 <br>
 &emsp;
 <span class="token keyword">default</span>
 :
 <br>
 <span class="token function">print(</span>
 <span class="token string">"The bulb is not controlled by the switch"</span>
 <span class="token function">)</span>
 <br>
 }
 </code>
 </pre>
 `
 addText()
 */

/*title="array"
 similarity=""
 text="Swift have two basic collection types: the array and the dictionary. " +
 "If I have to compare with Java, I will stick to the array list in Java more or less. And Dictionary with the map. " +
 "As you can see, there is a short syntax to define arrays. So now I get the array of strings." +
 "To define that, I can just use the square brackets and every elements with the comma. " +
 "So it's comma seperator for list of vaules. No surprises there. " +
 "As you can see, I can have both mutable and immutable variables. And what that means is" +
 "now my mutableMovies I can change. I can also reassign the mutableMovies to some other array, " +
 "but I can manipulate the contents of array as well. While with the let, " +
 "neither of those options are avaliable. So the both the value itself is immutable, " +
 "you cannot reassign, but you can not contents of that array either." +
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 movies
 <span class="token operator">=</span>
 [
 <span class="token string">"Pulp Fiction"</span>
 ,
 <span class="token string">"Reservoir Dogs"</span>
 ]
 <br>
 <span class="token keyword">var</span>
 mutableMovies
 <span class="token operator">=</span>
 [
 <span class="token string">"Pulp Fiction"</span>
 ,
 <span class="token string">"Reservoir Dogs"</span>
 ]
 </code>
 </pre>
 `
 element=[title, similarity, text]
 allText.push(element)

 title="array-create empty collections"
 similarity=""
 text="if you can't give value or elements right away, you can do it like this." +
 "So you put the square brackets and the string and empty parenthesis. So that's the" +
 "short version of defining an empty array."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 movies
 <span class="token operator">=</span>
 [
 <span class="token string">String</span>
 ]()
 </code>
 </pre>
 `
 element=[title, similarity, text]
 allText.push(element)


 title="array-access items of an array"
 similarity="Not yet decided"
 text="If I want to reach items, I can do subscripting like I do here. but that's not the safe operation." +
 "it doesn't return optional. So basically if I have an empty array, then you get the error and it stop." +
 "so basically it is the array out of bounds in Java. So that's not the safe operatrion." +
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 movies
 <span class="token operator">=</span>
 [
 <span class="token string">"Pulp Fiction"</span>
 ,
 <span class="token string">"Jackie Brown"</span>
 ,
 <span class="token string">Reservoir Dogs"</span>
 ]
 <br>
 <span class="token keyword">let</span>
 pulpFiction
 <span class="token operator">=</span>
 movies[<span class="token number">0</span>]
 </code>
 </pre>
 `+
 "Safe operations are first and last. So calling .first and .last in your array, " +
 "they return optional values. So that means that you have to unwrap that if you wnat to use that." +
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 first
 <span class="token operator">=</span>
 movies<span class="token property">.first</span>
 <br>
 <span class="token keyword">let</span>
 last
 <span class="token operator">=</span>
 movies<span class="token property">.last</span>
 </code>
 </pre>
 `+
 "Then you can check if it's empty or not. you can also count elements on it. "+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">if</span>
 movies<span class="token property">.isEmpty</span>
 {
 <br>
 &emsp;
 <span class="token function">print(</span>
 <span class="token string">"We have no movies at all"</span>
 <span class="token function">)</span>
 <br>
 }
 <span class="token keyword">else</span>
 {
 <br>
 &emsp;
 <span class="token function">print(</span>
 <span class="token string">"We have</span>
 \\(movies<span class="token property">.count</span>)
 <span class="token string">movies"</span>
 <span class="token function">)</span>
 <br>
 <span class="token keyword">let</span>
 second
 <span class="token operator">=</span>
 movies[<span class="token number">1</span>]
 <br>
 }
 </code>
 </pre>
 `

 element=[title, similarity, text]
 allText.push(element)


 title="array-change items in an array"
 similarity="not yet decided"
 text="Some power stuff there. First is subscripting. you can change the first element to Jakie brown"+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">var</span>
 movies
 <span class="token operator">=</span>
 [
 <span class="token string">"Pulp Fiction"</span>
 ,
 <span class="token string">"Reservoir Dogs"</span>
 ]
 <br>
 movies[<span class="token number">0</span>]
 <span class="token operator">=</span>
 <span class="token string">"Jackie Brown"</span>
 </code>
 </pre>
 `+
 "also, you can change the entire range. I can replace the entire range 0 to 1 with your name. " +
 "So basically movies becomes your name. So you can replace a range to another array." +
 "The right side needs to be an array if you wanna do this. so whatever you assign it needs to be an array with the same type"+
 `
 <pre class="language-swift">
 <code class="language-swift">
 movies[<span class="token number">0</span>...<span class="token number">1</span>]
 <span class="token operator">=</span>
 [
 <span class="token string">"Inglorious Bastards"</span>
 ]
 </code>
 </pre>
 `+
 "Now, if you wanna append a single element, the append operation."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 movies<span class="token property">.append</span>(
 <span class="token string">"Django Unchained"</span>
 )
 </code>
 </pre>
 `+
 "And you can also append an entire array."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 movies
 <span class="token operator">+=</span>
 [
 <span class="token string">"Kill Bill"</span>,
 <span class="token string">"Kill Bill 2"</span>
 ]
 </code>
 </pre>
 `+
 "And I can insert on any index using insert operation. "+
 `
 <pre class="language-swift">
 <code class="language-swift">
 movies<span class="token property">.insert</span>(
 <span class="token string">"Jackie Brown"</span>,
 atIndex:
 <span class="token number">1</span>)
 </code>
 </pre>
 `+
 "And I can also do something like remove last which will return the value that got removed from the array."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 removedItem
 <span class="token operator">=</span>
 movies<span class="token property">.removeLast</span>()
 </code>
 </pre>
 `
 element=[title, similarity, text]
 allText.push(element)

 title="array-iterating over an array"
 similarity="not yet decided"
 text="Array is a sequence as well in Swift. So you can just iterate with for-in loop." +
 "The nice thing in swift is, you also has this nice thing called enumerate. this is a function returns the tuple." +
 "Inside that tuple, you can get the elements for each iteration as the second element. And the first element" +
 "is the index in that iteration." +
 "So instead of like in Java, you first put a variable i in front of your for loop and then put in " +
 "for-in loop or you woul have to stick with for-int version while in Swift you don't need to." +
 "You can just use enumerate. So that's a nice feature"+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 movies
 <span class="token operator">=</span>
 [
 <span class="token string">"Pulp Fiction"</span>,
 <span class="token string">"Jackie Brown"</span>,
 <span class="token string">"Reservoir Dogs"</span>
 ]
 <br>
 <span class="token keyword">for</span>
 movie
 <span class="token keyword">in</span>
 movies {
 <br>
 &emsp;
 <span class="token function">print(</span>
 movie
 <span class="token function">)</span>
 <br>
 }
 <br>
 <span class="token keyword">for</span>
 (index, movie)
 <span class="token keyword">in</span>
 <span class="token function">enumerate(</span>
 movies
 <span class="token function">)</span>
 {
 <br>
 &emsp;
 <span class="token function">print(</span>
 <span class="token string">"</span>
 \\(index)
 <span class="token string">:</span>
 \\(movie)
 <span class="token string">"</span>
 <span class="token function">)</span>
 <br>
 }
 </code>
 </pre>
 `
 element=[title, similarity, text]
 allText.push(element)


 title="dictionary"
 similarity=""
 text="So then dictionary, samething let or var. And here is the complicated dictionary where you can see" +
 "the key is the ranges of iPhones and the values are tuples. And the key is limited(I will explain later)" +
 "and the value, you can put anything in here. And in this case, it's a tuple and basically is the resolution of each iPhone."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 resolutions
 <span class="token operator">=</span>
 [
 <span class="token string">"iPhone 3/3GS"</span>
 : (
 <span class="token number">320</span>
 ,
 <span class="token number">480</span>
 ),
 <span class="token string">"iPhone 4/4S"</span>
 : (
 <span class="token number">640</span>
 ,
 <span class="token number">960</span>
 )]
 <br>
 <span class="token keyword">var</span>
 mutableResolutions
 <span class="token operator">=</span>
 [
 <span class="token string">"iPhone 3/3GS"</span>
 : (
 <span class="token number">320</span>
 ,
 <span class="token number">480</span>
 ),
 <span class="token string">"iPhone 4/4S"</span>
 : (
 <span class="token number">640</span>
 ,
 <span class="token number">960</span>
 )]
 </code>
 </pre>
 `
 element=[title, similarity, text]
 allText.push(element)

 title="dictionary-create empty collection"
 similarity=""
 text="The same goes for dictionary. And here I created the same types as I did before. " +
 "but this time, the empty versions. "+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 resolutions
 <span class="token operator">=</span>
 [
 <span class="token string">String</span>
 : (
 <span class="token number">Int</span>
 ,
 <span class="token number">Int</span>
 )]()
 </code>
 </pre>
 `
 element=[title, similarity, text]
 allText.push(element)

 title="dictionary-accessing items in a dictionary"
 similarity="not yet decided"
 text="Let's make a dictionary called opposites here. If I want to access items in that dictionary, I can just refer to these items by key. " +
 "obviously, just like in java with get method. The only difference is, since that in java can return null, and in swift, it returns optional." +
 "So you get the optional value back. As you can see here, I am looking for high which is not in my list of keys," +
 "so nil is returned."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 opposites
 <span class="token operator">=</span>
 [
 <span class="token string">"Fire"</span>:<span class="token string">"Ice"</span>,
 <span class="token string">"Hot"</span>:<span class="token string">"Cold"</span>,
 ]
 <br>
 <span class="token keyword">let</span>
 maybeIce
 <span class="token operator">=</span>
 opposites[<span class="token string">"Fire"</span>]
 </code>
 </pre>
 `+
 "You can just check for empty dictionaries and do a count of all the elements. In this case, 2. "+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">if</span>
 (opposites<span class="token property">.isEmpty</span>) {
 <br>
 &emsp;
 <span class="token function">print(</span>
 <span class="token string">"We have no opposites at all"</span>
 <span class="token function">)</span>
 <br>
 }
 <span class="token keyword">else</span>
 {
 <br>
 &emsp;
 <span class="token function">print(</span>
 <span class="token string">We have</span>
 \\(opposites<span class="token property">.count</span>)
 <span class="token string">resolutions"</span>
 <span class="token function">)</span>
 <br>
 }
 </code>
 </pre>
 `
 element=[title, similarity, text]
 allText.push(element)

 title="dictionary-changing items in a dictionary"
 similarity="not yet decided"
 text="Now let's look at changing items in a dictionary. Again, I have to put var to dictionary if I wanna do that." +
 "And I can assign by using just subscripting again. So this is basically added it. So in case, I added high in my dictionary. " +
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">var</span>
 opposites
 <span class="token operator">=</span>
 [
 <span class="token string">"Fire"</span>:<span class="token string">"Ice"</span>,
 <span class="token string">"Hot"</span>:<span class="token string">"Cold"</span>,
 ]
 <br>
 opposites[<span class="token string">"High"</span>]
 <span class="token operator">=</span>
 <span class="token string">"Low"</span>
 <br>
 </code>
 </pre>
 `+
 "So if you want to remove item, you can just assign to nil."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 opposites[<span class="token string">"High"</span>]
 <span class="token operator">=</span>
 <span class="token keyword">nil</span>
 <br>
 opposites<span class="token property">.count</span>
 </code>
 </pre>
 `+
 "So basically, I added an element then I removed one, so we get the count of 2."

 element=[title, similarity, text]
 allText.push(element)

 title="dictionary-iterating over a dictionary"
 similarity="not yet decided"
 text="If you iterate the whole dictionary, you get the tuple back with key and value in it. So that's the first version." +
 "you can also iterate over the keys, you can also iterate over the values. " +
 "So again, tuples being used in here."+
 `
 <pre class="language-swift">
 <code class="language-swift">
 <span class="token keyword">let</span>
 opposites
 <span class="token operator">=</span>
 [
 <span class="token string">"Fire"</span>:<span class="token string">"Ice"</span>,
 <span class="token string">"Hot"</span>:<span class="token string">"Cold"</span>,
 ]
 <br>
 <span class="token keyword">for</span>
 (key, value)
 <span class="token keyword">in</span>
 opposites {
 <br>
 &emsp;
 <span class="token function">print(</span>
 <span class="token string">"The opposite of</span>
 \\(key)
 <span class="token string">is</span>
 \\(value)
 <span class="token string">"</span>
 <span class="token function">)</span>
 <br>
 }
 <br>
 <span class="token keyword">for</span>
 key
 <span class="token keyword">in</span>
 opposites<span class="token property">.keys</span>{
 <br>
 &emsp;
 <span class="token function">print(</span>
 key
 <span class="token function">)</span>
 <br>
 }
 <br>
 <span class="token keyword">for</span>
 value
 <span class="token keyword">in</span>
 opposites<span class="token property">.values</span>{
 <br>
 &emsp;
 <span class="token function">print(</span>
 value
 <span class="token function">)</span>
 <br>
 }
 </code>
 </pre>
 `
 element=[title, similarity, text]
 allText.push(element)*/