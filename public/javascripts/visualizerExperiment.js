/**
 * Created by Ryosuke on 2017/03/30.
 */
function setEditorAndExperiment(pageTitle){
    var exText = "[実験開始]ボタンを押すとプログラムソースコードと問題が表示されます。<br>";
    exText += "問題の答えがわかったら[答えを確認]ボタンを押してください。<br>";
    exText += "それぞれのボタンは一度だけしか押せません。(押さないでください)<br>";
    exText += "それぞれのボタンは押すと時刻が表示されます。<br>";
    exText += "回答後は2つの時刻と正解したかどうかメモをして次の問題に進んでください。<br>";
    exText += "用紙の余白や裏面は変数のメモ書きなど自由時使ってください。<br>";
    exText += "(この開始前説明文は全ての問題ページで共通です。)<br>";

    var ex1Text  = "ポインタ渡し関数の問題です<br>以下のプログラムを実行したとき<br>最終的なa,b,c,d,eの値は？(回答例:a=1,b=2,c=3,d=4,e=5)<br>";

    var ex2Text  = "階乗を計算する関数の問題です。<br>以下のプログラムを実行したとき、<br>3回目に呼ばれた関数fがreturnする時点で<br>変数n,r,(*pn)の表す値は？(回答例:n=1,r=2,(*pn)=3,)";

    var ex3Text  = "メモリの動的確保の問題です<br>以下のプログラムを実行したときmain関数がreturnする時点で<br>ヒープ領域に未開放のメモリ領域があれば<br>そのメモリを参照する変数とそれらのメモリ上の値は何か？(回答例:ps[0]={1,2,3},ps[3]={0,3,2})";

    var ex4Text  = "再帰関数の問題です<br>以下のプログラムを実行したとき<br>n=1, a='B', b='A', c='C'<br>になるのは関数Hが何回呼ばれたときか？(回答例:10回目)";

    if(pageTitle === "visualizer")
    {
        localStorage.currentex = "";
        localStorage.sourcefile = "#include<stdio.h>";
        //英語向け
        localStorage.sourcefile=`#include<stdio.h>
int recursiveToThree(int n){
    printf("%d th\\n", n + 1);
    if(n < 3){
        int r = recursiveToThree(n + 1);
        n = r;
    }
    return n;
}
int main(){
    int n = 0;//example of variable declaration

    n = recursiveToThree(0);//example of recursive function

    int arr[5] = {1, 2, 3};//example of array variable

    int* ptr = &arr[2];//example of pointer variable
    *ptr = 5;

    //example of dynamic memory allocation
    int* d_arry = malloc(sizeof(int) * 3);

    //example of two-dimensional dynamic array
    int* pd_arr[2];
    pd_arr[0] = malloc(sizeof(int) * 2);
    pd_arr[1] = malloc(sizeof(int) * 2);

    printf("Hello,world!\\n");//example of standard output

    //example of memory leak
    free(pd_arr[0]);
    return 0;
}`;

        localStorage.sourcefile=`#include<stdio.h>
int recursiveToThree(int n){
    printf("%d回目\\n", n + 1);
    if(n < 3){
        int r = recursiveToThree(n + 1);
        n = r;
    }
    return n;
}
int main(){
    int n = 0;//変数宣言の例

    n = recursiveToThree(0);//再帰関数呼び出しの例

    int arr[5] = {1, 2, 3};//配列変数の例

    int* ptr = &arr[2];//ポインタ変数の例
    *ptr = 5;

    //メモリの動的確保の例
    int* d_arry = malloc(sizeof(int) * 3);

    //動的な2次元配列の例
    int* pd_arr[2];
    pd_arr[0] = malloc(sizeof(int) * 2);
    pd_arr[1] = malloc(sizeof(int) * 2);

    printf("Hello,world!\\n");//標準出力の例

    //メモリリークの例
    free(pd_arr[0]);
    return 0;
}`;
    }
    else if(pageTitle == "ex1" || pageTitle == "ex2" || pageTitle == "ex3" || pageTitle == "ex4") {
        localStorage.currentex = pageTitle;
        localStorage.startTime = "実験開始";
        localStorage.sourcefile = "";
        localStorage.debug="false";
    }

    if(localStorage.currentex == ""){
        document.getElementById("exstart").style.display = "none";
        document.getElementById("exans").style.display = "none";
        //document.getElementById("description").innerHTML = "下のエディタにプログラムを書き、上のボタンを押すことで可視化実行ができます。<br>(マウスカーソルを重ねるとで各ボタンの説明が表示されます。)<br>実験前にデフォルトで表示されているプログラムをステップ実行して、<br>どう可視化されるか確認してみてください。<br>十分に確認できたらページ下部のボタンでトップページに戻れます。実験を開始してください<br>もしExecution exceptionと書いてある真っ赤な画面になったらごめんなさい。<br>ツールのバグです。ブラウザの戻るボタンを押してください。";
        localStorage.startTime = "";
    }
    else  if(localStorage.currentex == "ex1" || localStorage.currentex == "ex2" || localStorage.currentex == "ex3" || localStorage.currentex == "ex4") {
        if(localStorage.startTime == "実験開始" ) {
            document.getElementById("description").innerHTML = exText;
        }
        else {
            if(localStorage.currentex == "ex1"){
                document.getElementById("description").innerHTML = ex1Text;
            }
            else if(localStorage.currentex == "ex2"){
                document.getElementById("description").innerHTML = ex2Text;
            }
            else if(localStorage.currentex == "ex3"){
                document.getElementById("description").innerHTML = ex3Text;
            }
            else if(localStorage.currentex == "ex4"){
                document.getElementById("description").innerHTML = ex4Text;
            }
        }
    }

    $('#exstart').click(function (e) {
        var jikan= new Date();

        //時・分・秒を取得する
        var hour = jikan.getHours();
        var minute = jikan.getMinutes();
        var second = jikan.getSeconds();
        localStorage.startTime = hour+"時"+minute+"分"+second+"秒";
        document.getElementById("exstart").innerHTML = localStorage.startTime;
        document.getElementById("exstart").disabled = "true";
        var text = "";
        if(pageTitle == "ex1")
        {
            document.getElementById("description").innerHTML = ex1Text;
            localStorage.currentex = "ex1";
            text = `void swap1(int* x, int* y){
    int s = *x;
    if(s<2){
        *x = *y;
        *y = s;
    }
}
void swap2(int *z, int *w){
    int t = *z;
    if(t<3){
        *z = *w;
        *w = t;
    }
}
void swap3(int *w, int *o){
    int u = *w;
    if(u<4){
        *w = *o;
        *o = u;
    }else{
        *o = 6;
        swap1(o,w);
    }
}
int main()
{
    int a = 1, b = 2, c = 3, d = 4, e = 5;
    swap1(&a,&b);
    swap3(&a,&c);
    swap2(&e,&b);
    swap3(&d,&e);
    swap2(&b,&c);
    swap1(&a,&d);
    return 0;
}`;
        }
        else if(pageTitle == "ex2")
        {
            document.getElementById("description").innerHTML = ex2Text;
            localStorage.currentex = "ex2";
            text = `#include<stdio.h>
int f(int* pn){
    int n = (*pn);
    int r = 1;
    if(1<=n){
        (*pn) = n - 1;
        r = n * f(pn);
    }
    return r;
}
int main()
{
    int n = 4;
    int r = f(&n);
    return 0;
}`;
        }
        else if(pageTitle == "ex3")
        {
            document.getElementById("description").innerHTML = ex3Text;
            localStorage.currentex = "ex3";
            text = `#include<stdio.h>
int main()
{
    int i,j,n=3;
    int*ps[3];
    for(i=0; i<n; ++i){
        ps[i]=malloc(sizeof(int)*n);
        for(j=0; j<n; ++j){
            ps[i][j]=i*i + j*j;
        }
    }
    for(i=0; i<n; ++i){
        if(ps[i][2]%2==0)
            free(ps[i]);
    }
    return 0;
}`;
        }
        else if(pageTitle == "ex4")
        {
            document.getElementById("description").innerHTML = ex4Text;
            localStorage.currentex = "ex4";
            text = `#include<stdio.h>
int H(int n,char a,char b,char c)
{
    if(n>=2){
        H(n-1,a,c,b);
    }

    if(n>=2){
        H(n-1,b,a,c);
    }
    return n;
}

int main()
{
    H(4,'A','B','C');
    return 0;
}`;
        }
        else{
            text = localStorage.sourcefile;
        }
        editor.setValue(text, -1);
        editor.setReadOnly(true);
    });
    $('#exans').click(function (e) {
        var jikan= new Date();
        var hour = jikan.getHours();
        var minute = jikan.getMinutes();
        var second = jikan.getSeconds();
        var time = hour+"時"+minute+"分"+second+"秒";

        if(localStorage.currentex == "ex1"){
            document.getElementById("exans").innerHTML = time;
            document.getElementById("description").innerHTML += "<br><br>答え a=3,b=2,c=1,d=4,e=6<br>";
        }
        else if(localStorage.currentex == "ex2"){
            document.getElementById("exans").innerHTML = time;
            document.getElementById("description").innerHTML += "<br><br>答え n=2,r=2,(*pn)=0<br>";
        }
        else if(localStorage.currentex == "ex3"){
            document.getElementById("exans").innerHTML = time;
            document.getElementById("description").innerHTML += "<br><br>答え ps[1]={1,2,5}<br>";
        }
        else if(localStorage.currentex == "ex4"){
            document.getElementById("exans").innerHTML = time;
            document.getElementById("description").innerHTML += "<br><br>答え 5回目<br>";
        }
        document.getElementById("description").innerHTML += "開始・終了時間と正解・不正解を用紙にメモし、<br>次の問題(ページ下部の戻るボタンより)に進んでください。";
    });

    document.getElementById("exstart").innerHTML = localStorage.startTime;//開始時刻更新
}
