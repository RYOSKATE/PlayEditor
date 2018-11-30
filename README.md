***【Important】***

***This system has not been maintained yet.***

***It has evolved into  [PlayVisualizerC.js](https://github.com/RYOSKATE/PlayVisualizerC.js).***


# PlayEditor <a href="http://doge.mit-license.org"><img src="http://img.shields.io/:license-mit-blue.svg"></a>

# PlayEditor利用手順
## オンライン
* ブラウザから[デモページ](http://play-visualizer-c.herokuapp.com/visualizer)にアクセスし利用する
## オフライン
1. https://github.com/RYOSKATE/PlayVisualizerC/releases からスタンドアロン版をダウンロードする。
1. binフォルダ内のファイルを実行し、サーバーを起動する。(Javaがインストールされていない場合は下記の *Javaインストール* を参照)
1. ブラウザから localhost:9000/visualizer にアクセスし利用する。

# PlayEditor開発環境導入手順
* Java (インストール必須)
* Play (インストール必須)
* EclipseなどのIDE(インストール推奨)

## Javaインストール
* Mac

MacOSは標準でJavaを導入しているはずです。
* Windows

コマンドプロンプトで
```
java -version
javac -version
```
を入力してください。

コマンドが認識されなかった場合はJavaのインストールが必要です。
[公式Webページ](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
から最新のJDKをダウンロード・インストールをしてください。
プロジェクトのコンパイルにエラーが発生した場合は古いバージョンを使用している可能性があります。
その場合も最新のJDKを導入してください。

システム環境変数のPathに`C:\java\jdk1.8.0_25\bin;`などインストールしたJDKのbinディレクトリを追加してください。

環境変数`JAVA_HOME`を作成し、`C:\java\jdk1.8.0_25;`などインストールしたJDKディレクトリを追加してください。

## Playインストール
Playはactivatorというツールを利用して提供されます。
まずそれぞれの環境で最新のactivatorをインストールします。
* Mac

ターミナルから以下のコマンドを入力することでインストールができます。
```
brew install typesafe-activator
```
* Windows


PlayFrameworkの
[公式Webページ](https://www.playframework.com/download)
からtypesafe-activatorをダウンロードします。

このプロジェクト作成に利用したPlayのバージョンは__2.5.3__です。

なんらかの理由で古いバージョンを利用する場合、バージョン2.2以前はactivatorを用いず以降入力するコマンドも異なるので注意してください。

ダウンロードした typesafe-activator-X.X.X-minimal.zipを展開します。

activator-X.X.X-minimal/bin/activator.batがあることを確認してください。

システム環境変数PATHにactivator.batがあるディレクトリを追加してください。

コマンドプロンプト/ターミナルで以下のコマンドが実行できることを確認してください。
```
activator help
```

もし実行できない場合はパスの確認、PCの再起動を試してみてください。


## PlayEditor実行
次にこのプロジェクトをクローン、もしくはダウンロードします。
プロジェクトのディレクトリに移動し以下のコマンドを実行してください。
```
activator run
```

コンパイルが終わり以下の文が表示されたら正常に実行されています。

(Server started, use Ctrl+D to stop and go back to the console...)

ブラウザを開き`localhost:9000`にアクセスしてください。
プロジェクトのトップページが表示されていれば成功です。
`Ctrl+D`を押すまでactivatorはrun状態となります。
run状態でソースコードを変更した場合、変更の影響を受けるページにアクセスすると
Playは自動的にコンパイルを行ってくれます。

## IDE連携
activatorがrun状態の場合`Ctrl+D`で一旦終了してください。

### IntelliJ IDEA
* Scalaプラグイン

メニュー　→　PreferencesからPluginsという項目を開いてください。

Browse repositoriesからScalaプラグインを選択しダウンロードします。

IDEAを再起動することで有効化されます。

* インポート

IDEA起動後に Import Projectを選択します。

PlayEditorのプロジェクトディレクトリを選択しOKを押します。

Import project from external modelを選び、SBTを選択してください。

Next→Finishでプロジェクトのインポートが行われます。

File→Project Structure→SDKsで使用しているjdkのバージョンを確認します。

jdk1.7などではエラーが発生する場合があります。jdk1.8以上を選択してください。

(場合によっては「Javaインストール」の章を参考に最新のjdkを導入してください。

* デバッグ設定

Run→Edit Configurationsを選択してください。

左上の緑色の　+ を押し、Remote を選択してください。

Nameに任意のデバッグ名をつけてください。

Portを9999に変更しApplyしてください。

以上でDubugが可能になります。

### Eclipse
* インポート

このプロジェクトでは既にsbteclipseというEclipseへの変換プラグインが利用できるようになっています。

プロジェクトのディレクトリで
```
activator eclipse
```
を実行することでEclipse用のプロジェクトファイルが作成されます。

Eclipseを起動し、FIle→Import→General→Existing project...からこのプロジェクトのディレクトリを指定することでインポートが可能です。

最新の変換プラグインを利用したい場合、project/plugins.sbtをテキストエディタで開き
```
addSbtPlugin("com.typesafe.sbteclipse" % "sbteclipse-plugin" % "X.X.X")
```
の数字を
[sbteclipse](https://github.com/typesafehub/sbteclipse)
の最新バージョンの数値に書き換えて実行してください。

* Scala用プラグインインストール

Help → Install New Software… → Add

 ・Scala IDE for Eclipse
 
 ・<http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site>
 
 を追加、全て選択しインストール。
 
* デバッグ設定

Eclipseにインポートしたプロジェクトに対して
Debug As -> Debug Configurations → Remote Java Application → New
で新しいデバッグ構成を作成します。
Portを9999に変更しApplyしてください。
以上でDubugが可能になります。

### デバッグ実行
IDEからPort 9999のデバッグ構成を設定することで、ブレークポイントなどを利用したデバッグが可能になります。
ここまで使用してきた `activator run` は本番用の実行コマンドです。
デバッグ時は以下のコマンドを利用してください。
```
activator -jvm-debug 9999 ~run
```
このデバッグ実行状態ではブレークポイントなどが有効になります。
また　`~run`はファイルを変更する毎にコンパイルが行われます。
実際にブラウザでページを表示した時だけコンパイルを行いたい場合は、
```
activator -jvm-debug 9999 run
```
としてください。

# PlayEditor構成概要
PlayFrameworkはMVCモデルを採用しています。

ただしPlayEditorはデータベースを使用しないため、モデルは用いず
主な処理はコントローラとビューで行われます。

代表的・重要なファイルについて説明します。
* build.sbt
 
依存するライブラリなどを記述します。
Junicoenはここで使用するRelease/tag,コミット番号を指定することで参照します。
Junicoenの機能を利用する場合は、コンパイルエラーにならないコミット番号に更新してください。
更新後は`activator update`を行うことで設定や参照が更新されます。
* lib/
 
このディレクトリに使用するライブラリファイル(.jarなど)を配置するとクラスパスの設定を必要とせずに利用できます。
* conf/routes
 
GET/POSTアドレスとコントローラのアクションの対応関係を設定します。
* app/controllers/

コントローラのアクションを記述します。(Scala)
* app/views/

htmlとして表示されるファイルです。(HTML/JavaScript)
* public/

ビューで必要とする画像や.js,.cssなどを配置します。
