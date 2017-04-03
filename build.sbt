name := """PlayVisualizerC"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  "net.arnx" % "jsonic" % "1.3.10",
  "com.github.UnicoenProject" % "Junicoen" % "c8de4ed4346293ed3e7b3a7b87335f91785f9ea6",
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test,
  "mysql" % "mysql-connector-java" % "5.1.36"
)

resolvers += "jitpack.io" at "https://jitpack.io"
resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
