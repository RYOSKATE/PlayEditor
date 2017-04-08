name := """PlayVisualizerC"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  "net.arnx" % "jsonic" % "1.3.10",
  "com.github.UnicoenProject" % "Junicoen" % "bdee8a442b4aa93045cca2f01a9cec70d184d096",
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test,
  "mysql" % "mysql-connector-java" % "5.1.36"
)

resolvers += "jitpack.io" at "https://jitpack.io"
resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
