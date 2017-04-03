package controllers

import java.util
import javax.inject._
import java.nio.file.{Paths, Files}
import java.nio.file.StandardCopyOption.REPLACE_EXISTING
import java.io.{File => JFile} // リネームして区別しやすくする

import com.fasterxml.jackson.databind.ObjectMapper
import net.arnx.jsonic.JSON
import play.api._
import play.api.mvc._
import play.api.data._
import play.api.data.Forms._

import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import scala.collection._
import models._
import java.nio.charset.Charset

import play.api.libs.json.JsObject;

//import net.unicoen._
//import net.unicoen.node._
import scala.collection.mutable.ArrayBuffer
import net.unicoen.mapper.CPP14Mapper
import net.unicoen.interpreter._
import net.unicoen.node._
import java.io.ByteArrayOutputStream
import java.io.PrintStream
import play.api.mvc
import play.api.libs.json.Json
/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class VisualizerController @Inject() extends Controller {

  //@TODO
  // ### 9999番ポートでデバックする
  // $ activator -jvm-debug 9999 ~run

  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */

  class Fields {
    var count = 0
    var engine: Engine = new CppEngine()
    var baos: ByteArrayOutputStream = new ByteArrayOutputStream()
    val stateHistory = new util.ArrayList[String]
    val outputsHistory = new util.ArrayList[String]
    var textOnEditor = ""
    var isFirstEOF = false
  }
  val fields = new util.LinkedHashMap[String,Fields]

  def getfield(uuid:String):Fields={return fields.get(uuid)}

  def isFieldExist(uuid:String):Boolean={return fields.containsKey(uuid) }

  def exIndex = Action {
    Ok(views.html.visualizerIndex("This is Visualizer Page."))
  }

  def getUserDir(uuid : String): String = {
    val dirp = Paths.get("/tmp", uuid)
    if (Files.notExists(dirp)) Files.createDirectories(dirp) // mkdir -p
    return dirp.toString
  }

  def getUserDirFilesStr(uuid : String): List[String] = {
    val dirpStr = getUserDir(uuid)
    val dirList = getListOfPaths(dirpStr);
    val filenames = dirList.toString
    val filenamesStr = dirList.map {
      _.toString.replace(dirpStr, "")
    }
    return filenamesStr
  }

  def index = Action { implicit request =>
    val uuid = getUUIDfromSession(request.session)
    getfield(uuid).engine.setFileDir(getUserDir(uuid))
    val json = Json.obj(
      "pageTitle" -> "visualizer",
      "filenames" -> getUserDirFilesStr(uuid)
    )
    Ok(views.html.visualizer(Json.stringify(json))).withSession("uuid" -> uuid)
  }

  def experiment(id : String)  = Action { implicit request =>
    val uuid = getUUIDfromSession(request.session)
    val exNum = "ex" + id
    val json = Json.obj(
      "pageTitle" -> exNum,
      "filenames" -> getUserDirFilesStr(uuid)
    )
    Ok(views.html.visualizer(Json.stringify(json))).withSession("uuid" -> uuid)
  }

  def flatten(list:util.List[Object]):util.ArrayList[UniNode]={
    val nodes = new util.ArrayList[UniNode]
    for(element <- list){
      if(element.isInstanceOf[UniNode]){
        nodes.add(element.asInstanceOf[UniNode])
      }
      else{
        val l = flatten(element.asInstanceOf[util.List[Object]])
        for(node <- l){
          nodes.add(node)
        }
      }
    }
    return nodes
  }

  def getListOfPaths(dir: String): List[JFile] = {
    val d = new JFile(dir)
    if (d.exists) {
      var files = d.listFiles.filter(_.isFile).toList
      d.listFiles.filter(_.isDirectory).foreach{ dir =>
        files = files ::: getListOfPaths(dir.getAbsolutePath)
      }
      files
    }
    else {
      List[JFile]()
    }
  }

  def upload = Action(parse.multipartFormData) { request =>
    val uuid = getUUIDfromSession(request.session)
    // tmpにディレクトリ作成
    val dirp = Paths.get("/tmp", uuid)
    if(Files.notExists(dirp)) Files.createDirectories(dirp) // mkdir -p
    val currentDir = new JFile(".").getAbsoluteFile().getParent()
      request.body.file("files").map { picture =>
      val filename = picture.filename
      picture.ref.moveTo(new JFile(s"$dirp/$filename"))
    }
    val dirpStr = dirp.toString
    val dirList = getListOfPaths(dirpStr);
    val filenames = dirList.toString
    val filenamesStr = dirList.map{ _.toString.replace(dirpStr,"") }
    // List[JFile]なのでJFileをStringに変えたList[String]にmapして作る
    //各Stringの親ディレクトリ部分を削除
    //

    val json = Json.obj(
      //"uuid" -> uuid,
      //"currentDir" -> currentDir,
      //"dirp" -> dirp.toString,
      //"num" -> request.body.file("files").size,
      "filenames" -> filenamesStr
    )
    Ok(Json.stringify(json)).withSession("uuid" -> uuid)
  }

  def download(filename : String)  = Action { implicit request =>
    val uuid = getUUIDfromSession(request.session)
    val dir = Paths.get("/tmp", uuid)
    val file = new JFile(dir.toString + "/" + filename)
    Ok.sendFile(content = file, inline = false)
  }

  def ajaxCall = Action { implicit request =>
    var jsonObj = request.body.asJson.get
    val stackData = (jsonObj \ "stackData").as[String]
    val debugState = (jsonObj \ "debugState").as[String]
    val output = (jsonObj \ "output").as[String]
    val sourcetext = (jsonObj \ "sourcetext").as[String]
    val uuid = getUUIDfromSession(request.session)
    debugState match {
      case "debug" => {
        resetEngine(uuid).textOnEditor = sourcetext
        val node = rawDataToUniTree(getfield(uuid).textOnEditor)
        var nodes = new util.ArrayList[UniNode]
        if(node.isInstanceOf[util.ArrayList[_]]){
          nodes = flatten(node.asInstanceOf[util.List[Object]])
        }
        else{
          nodes += node.asInstanceOf[UniNode]
        }
        val state = getfield(uuid).engine.startStepExecution(nodes)
        val jsonData = getJson(state,uuid)
        val output = getOutput(uuid)
        val json = Json.obj(
          "stackData" -> jsonData,
          "debugState" -> "in Debugging",
          "output" -> output,
          "sourcetext" -> sourcetext
        )
        Ok(Json.stringify(json)).withSession("uuid" -> uuid)
      }
      case "exec" => {
        var state : ExecState = null
        while (getfield(uuid).engine.isStepExecutionRunning())
        {
          getfield(uuid).count += 1
          state = getfield(uuid).engine.stepExecute()
          val jsonData = getJson(state,uuid)
          val encOutput = getOutput(uuid)
        }
        getfield(uuid).count = getfield(uuid).stateHistory.length - 1
        val jsonData = getfield(uuid).stateHistory.get(getfield(uuid).count)
        val output = getfield(uuid).outputsHistory.get(getfield(uuid).count)
        val json = Json.obj(
          "stackData" -> jsonData,
          "debugState" -> "EOF",
          "output" -> output,
          "sourcetext" -> sourcetext
        )
        Ok(Json.stringify(json)).withSession("uuid" -> uuid)
      }
      case "reset" => {
        getfield(uuid).count = 0
        val jsonData = getfield(uuid).stateHistory.get(getfield(uuid).count)
        val output = getfield(uuid).outputsHistory.get(getfield(uuid).count)
        val json = Json.obj(
          "stackData" -> jsonData,
          "debugState" -> ("Step:"+ getfield(uuid).count.toString),
          "output" -> output,
          "sourcetext" -> sourcetext
        )
        Ok(Json.stringify(json)).withSession("uuid" -> uuid)
      }
      case "step" => {
        getfield(uuid).count += 1
        if(getfield(uuid).count < getfield(uuid).stateHistory.length - 1){
          val jsonData = getfield(uuid).stateHistory.get(getfield(uuid).count)
          val output = getfield(uuid).outputsHistory.get(getfield(uuid).count)
          val json = Json.obj(
            "stackData" -> jsonData,
            "debugState" -> ("Step:"+ getfield(uuid).count.toString),
            "output" -> output,
            "sourcetext" -> sourcetext
          )
          Ok(Json.stringify(json)).withSession("uuid" -> uuid)
        }
        else if(getfield(uuid).engine.isStepExecutionRunning()) {
          var state = getfield(uuid).engine.stepExecute()
          while (state.getCurrentExpr().codeRange==null){
            state = getfield(uuid).engine.stepExecute()
          }
          val jsonData = getJson(state,uuid)
          val output = getOutput(uuid)
          val json = Json.obj(
            "stackData" -> jsonData,
            "debugState" -> ("Step:"+ getfield(uuid).count.toString),
            "output" -> output,
            "sourcetext" -> sourcetext
          )
          Ok(Json.stringify(json)).withSession("uuid" -> uuid)
        }
        else{
          getfield(uuid).count = getfield(uuid).stateHistory.length - 1
          val json = Json.obj(
            "stackData" -> getfield(uuid).stateHistory.last,
            "debugState" -> "EOF",
            "output" -> "",
            "sourcetext" -> sourcetext
          )
          Ok(Json.stringify(json)).withSession("uuid" -> uuid)
        }
      }
      case "back" => {
        if(1<=getfield(uuid).count){
          getfield(uuid).count -= 1
        }
        val jsonData = getfield(uuid).stateHistory.get(getfield(uuid).count)
        val output = getfield(uuid).outputsHistory.get(getfield(uuid).count)
        val json = Json.obj(
          "stackData" -> jsonData,
          "debugState" -> ("Step:"+ getfield(uuid).count.toString),
          "output" -> output,
          "sourcetext" -> sourcetext
        )
        Ok(Json.stringify(json)).withSession("uuid" -> uuid)
      }
      case "stop" => {
        getfield(uuid).engine = null
        val json = Json.obj(
          "stackData" -> getfield(uuid).stateHistory.last,
          "debugState" -> "STOP",
          "output" -> "",
          "sourcetext" -> sourcetext
        )
        Ok(Json.stringify(json)).withSession("uuid" -> uuid)
      }
      case _ => Ok(Json.stringify(request.body.asJson.get))
    }
  }

  def rawDataToUniTree(string:String)={
    new CPP14Mapper(true).parse(string)
  }

  def resetEngine(uuid:String): Fields ={
    fields.put(uuid, new Fields())
    getfield(uuid).engine.out = new PrintStream(getfield(uuid).baos)
    return getfield(uuid)
  }
  def getUUIDfromSession(session:Session):String= {
    var uuid = java.util.UUID.randomUUID().toString()
    if(session.get("uuid")!=None){
      uuid = session.get("uuid").get
    }

    if(!isFieldExist(uuid)){
      resetEngine(uuid)
    }
    return uuid
  }

  def getOutput(uuid:String)={
    val output = getfield(uuid).baos.toString()
    val encOutput = new String(output.getBytes("UTF-8"), "UTF-8")
    getfield(uuid).outputsHistory.add(encOutput)
    encOutput
  }

  def getJson(state:ExecState,uuid:String)={
    val jsonData = net.arnx.jsonic.JSON.encode(state)
    getfield(uuid).stateHistory.add(jsonData)
    jsonData
  }

}