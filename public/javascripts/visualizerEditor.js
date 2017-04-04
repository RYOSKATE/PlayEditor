/**
 * Created by RYOSUKE on 2017/04/04.
 */
function createEditor(idName,canWrite,initText) {
    var editor = ace.edit(idName);
    if (canWrite) {
        editor.$blockScrolling = Infinity;
        editor.setOptions({
            enableBasicAutocompletion: true,//基本的な自動補完
            enableSnippets: true,//スニペット
            enableLiveAutocompletion: true//ライブ補完
        });
    }
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/c_cpp");//シンタックスハイライトと自動補完
    //editor.getSession().setUseWrapMode(true);//true:折り返し、false:横スクロールバー


    $('#font-size').click(function (e) {
        editor.setFontSize($(e.target).data('size'));
    });

    editor.setReadOnly(!canWrite);
    if (canWrite) {

        function send(jsondata){
            if(jsondata.debugState=="debug"){
                dispLoading("コンパイル中...");
            }
            $.ajax({
                url:"/postjsondata",//先ほどのActionを指定
                type:'POST',
                data:JSON.stringify(jsondata),//JSON.stringifyを忘れない
                dataType:'json',
                contentType:'text/json',
                //timeout:10000,
                success: function(data) {
                    //alert("ok");
                    document.getElementById("debugStatus").innerHTML = "DebugStatus:" + data.debugState;
                    drawVisualizedResult(data);
                },
                error: function(data) {
                    alert("invalid data");
                },
                complete : function(data) {
                    // Loadingイメージを消す
                    removeLoading();
                }
            });
        }

        $('#debug').click(function (e) {
            var text =editor.getValue();
            if(text.length<=1){
                alert("ソースコードがありません！")
            }
            else
            {
                var jsondata = { //送りたいJSONデータ
                    "stackData": "",
                    "debugState": "debug",
                    "output": "",
                    "sourcetext": text
                };
                send(jsondata);
                localStorage.line = 0;
                localStorage.debug="true";
            }
        });
        $('#reset').click(function (e) {
            if(localStorage.debug=="true"){
                var jsondata = { //送りたいJSONデータ
                    "stackData": "",
                    "debugState": "reset",
                    "output": "",
                    "sourcetext": editor.getValue()
                };
                send(jsondata);
            }
            else{
                alert("デバッグ開始ボタンを押してください");
            }
        });
        $('#exec').click(function (e) {
            if(localStorage.debug=="true"){
                var jsondata = { //送りたいJSONデータ
                    "stackData": "",
                    "debugState": "exec",
                    "output": "",
                    "sourcetext": editor.getValue()
                };
                send(jsondata);
            }
            else{
                alert("デバッグ開始ボタンを押してください");
            }
        });

        $('#step').click(function (e) {
            if(localStorage.debug=="true"){
                var jsondata = { //送りたいJSONデータ
                    "stackData": "",
                    "debugState": "step",
                    "output": "",
                    "sourcetext": editor.getValue()
                };
                send(jsondata);
            }
            else{
                alert("デバッグ開始ボタンを押してください");
            }
        });
        $('#back').click(function (e) {
            if(localStorage.debug=="true"){
                var jsondata = { //送りたいJSONデータ
                    "stackData": "",
                    "debugState": "back",
                    "output": "",
                    "sourcetext": editor.getValue()
                };
                send(jsondata);
            }
            else{
                alert("デバッグ開始ボタンを押してください");
            }

        });
        $('#stop').click(function (e) {
            if(localStorage.debug=="true"){
                var jsondata = { //送りたいJSONデータ
                    "stackData": "",
                    "debugState": "stop",
                    "output": "",
                    "sourcetext": editor.getValue()
                };
                send(jsondata);
                $('canvas').clearCanvas();
                localStorage.debug="false";
                localStorage.line = 0;
            }
            else{
                alert("デバッグが開始されていません");
            }
        });
    }

    if (initText != '')
        editor.setValue(initText, -1);
    return editor;
}

function drawVisualizedResult(jsondata) {
    var treeJson = jsondata.stackData;
    var treeObj = JSON.parse(treeJson);
    var data = new Array(treeObj);


    if (localStorage.debug == "true") {
        document.getElementById("exstart").disabled = "true";
        var Range = require("ace/range").Range;
        var d = data[0];
        var codeRange = d.currentExpr.codeRange;
        if(jsondata.debugState == "EOF"){
            var range = new Range(new Number(-1), new Number(0), new Number(-1), new Number(1));
            editor.getSelection().setSelectionRange(range);
        }
        else if (codeRange) {
            var range = new Range(new Number(codeRange.begin.y - 1), new Number(codeRange.begin.x), new Number(codeRange.end.y - 1), new Number(codeRange.end.x + 1));
            editor.getSelection().setSelectionRange(range);

        }
        var nextLineEditOutput = jsondata.output.replace(/\\n/g, '\n');
        outputEditor.setValue(nextLineEditOutput);
        drawMemoryState(d,1);
    }
}