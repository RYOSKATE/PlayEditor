name := """PlayEditor"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  "net.arnx" % "jsonic" % "1.3.10",
  "com.github.UnicoenProject" % "Junicoen" % "66a5c3db8c9f5cfd35e83b1d3aa81971da2537ad",
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test
)

resolvers += "jitpack.io" at "https://jitpack.io"
resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"