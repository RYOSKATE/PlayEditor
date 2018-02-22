/**
 * Created by Ryosuke on 2017/03/30.
 */

function loadSourceFile(fileName){
    var httpObj = new XMLHttpRequest();
    var path = "/assets/sourcecodes/"+fileName;
    httpObj.open('GET',path);
    // ?以降はキャッシュされたファイルではなく、毎回読み込むためのもの
    httpObj.send(null);
    httpObj.onreadystatechange = function(){
        if ( (httpObj.readyState == 4) && (httpObj.status == 200) ){
            var text =  httpObj.responseText;
            localStorage.sourcefile = text;
            editor.setValue(text, -1);
        }
    };
}

function setEditorAndExperiment(pageTitle){
    var exText = "[実験開始]ボタンを押すとプログラムソースコードと問題が表示されます。<br>";
    exText += "問題の答えがわかったら[答えを確認]ボタンを押してください。<br>";
    exText += "それぞれのボタンは一度だけしか押せません。(押さないでください)<br>";
    exText += "それぞれのボタンは押すと時刻が表示されます。<br>";
    exText += "回答後は2つの時刻と正解したかどうかメモをして次の問題に進んでください。<br>";
    exText += "用紙の余白や裏面は変数のメモ書きなど自由時使ってください。<br>";
    exText += "(この開始前説明文は全ての問題ページで共通です。)<br>";

    var exTexts = [ "",
                    "ポインタ渡し関数の問題です<br>以下のプログラムを実行したとき<br>最終的なa,b,c,d,eの値は？(回答例:a=1,b=2,c=3,d=4,e=5)<br>",
                    "階乗を計算する関数の問題です。<br>以下のプログラムを実行したとき、<br>3回目に呼ばれた関数fがreturnする時点で<br>変数n,r,(*pn)の表す値は？(回答例:n=1,r=2,(*pn)=3,)",
                    "メモリの動的確保の問題です<br>以下のプログラムを実行したときmain関数がreturnする時点で<br>ヒープ領域に未開放のメモリ領域があれば<br>そのメモリを参照する変数とそれらのメモリ上の値は何か？(回答例:ps[0]={1,2,3},ps[3]={0,3,2})",
                    "再帰関数の問題です<br>以下のプログラムを実行したとき<br>n=1, a='B', b='A', c='C'<br>になるのは関数Hが何回呼ばれたときか？(回答例:10回目)"
        ];

    if(pageTitle === "visualizer")
    {
        localStorage.currentex = "";
        localStorage.sourcefile = "#include<stdio.h>";
        //英語向け

        loadSourceFile("example_en.c");
        //loadSourceFile("example_ja.c");

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
            for(var i = 1; i<=4; ++i) {
                var ex = "ex" + i;
                if (localStorage.currentex == ex) {
                    document.getElementById("description").innerHTML = exTexts[i];
                    break;
                }
            }
        }
    }
    $('#exans').prop('disabled', true);
    var exStartElem = document.getElementById("exstart");
    var stopwatch;

    $('#exstart').click(function (e) {
        stopwatch = new Stopwatch(exStartElem, exStartElem);
        stopwatch.start();
        $('#exstart').prop('disabled', true);
        $('#exans').prop('disabled', false);
        editor.setValue(localStorage.sourcefile, -1);
        for(var i = 1; i<=4; ++i) {
            var ex = "ex" + i;
            if(pageTitle == ex){
                document.getElementById("description").innerHTML = exTexts[i];
                localStorage.currentex = ex;
                loadSourceFile(ex + ".c");
                break;
            }
        }

        editor.setReadOnly(true);
    });
    $('#exans').click(function (e) {
        if(!stopwatch.isRunning()){
            return;
        }
        stopwatch.stop();

        if(localStorage.currentex == "ex1"){
            document.getElementById("description").innerHTML += "<br><br>答え a=3,b=2,c=1,d=4,e=6<br>";
        }
        else if(localStorage.currentex == "ex2"){
            document.getElementById("description").innerHTML += "<br><br>答え n=2,r=2,(*pn)=0<br>";
        }
        else if(localStorage.currentex == "ex3"){
            document.getElementById("description").innerHTML += "<br><br>答え ps[1]={1,2,5}<br>";
        }
        else if(localStorage.currentex == "ex4"){
            document.getElementById("description").innerHTML += "<br><br>答え 5回目<br>";
        }
        document.getElementById("description").innerHTML += "所要時間と正解・不正解を用紙にメモし、<br>次の問題(ページ下部の戻るボタンより)に進んでください。";
    });
}
