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
  //index.scala.htmlがview

  def exIndex = Action {
    Ok(views.html.visualizerIndex("This is Visualizer Page."))
  }

  def index = Action {
    Ok(views.html.visualizer("This is Visualizer Page.","","",""))
  }

  def ex1 = Action {
    Ok(views.html.visualizer("experimant 1","ex1","",""))
  }
  def ex2 = Action {
    Ok(views.html.visualizer("experimant 2","ex2","",""))
  }
  def ex3 = Action {
    Ok(views.html.visualizer("experimant 3","ex3","",""))
  }
  def ex4 = Action {
    Ok(views.html.visualizer("experimant 4","ex4","",""))
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

//  def upload = Action(parse.multipartFormData) { request =>
//    request.body.file("picture").map { picture =>
//      import java.io.File
//      val filename = picture.filename
//      val contentType = picture.contentType
//      picture.ref.moveTo(new File(s"/tmp/picture/$filename"))
//      Ok("File uploaded")
//    }.getOrElse {
//      Redirect(routes.Application.index).flashing(
//        "error" -> "Missing file")
//    }
//  }

//  def upload = Action(parse.multipartFormData) { request =>
//    request.body.file("files").map { file =>
//      import java.io.File
//      val filename = file.filename
//      val contentType = file.contentType
//      //file.ref.moveTo(new File(s"/tmp/picture/$filename"))
//      Ok("File uploaded")
//    }.getOrElse {
//      Redirect(routes.Application.index).flashing(
//        "error" -> "Missing file")
//    }
//  }

  def fileupload = Action(parse.multipartFormData) { request =>

//    val filename = file.filename
//    val contentType = file.contentType
    //file.ref.moveTo(new File(s"/tmp/picture/$filename"))

    //request.body.moveTo(new File("/tmp/picture/uploaded"))files
    val uuid = reset(request.session)

    // 新規ディレクトリ作成
    val dirp = Paths.get("executeDir", uuid)
    if(Files.notExists(dirp)) Files.createDirectories(dirp) // mkdir -p
    val currentDir = new JFile(".").getAbsoluteFile().getParent()
    var filenames = ""
    request.body.file("files").map { picture =>
      val filename = picture.filename
      filenames += filename + ","
      val contentType = picture.contentType
      picture.ref.moveTo(new JFile(s"$dirp\\$filename"))
    }
    val json = Json.obj(
      "uuid" -> uuid,
      "currentDir" -> currentDir,
      "dirp" -> dirp.toString,
      "filenames" -> filenames,
      "num" -> request.body.file("files").size
    )
    Ok(Json.stringify(json)).withSession("uuid" -> uuid)
  }

  def ajaxCall = Action { implicit request =>
    var jsonObj = request.body.asJson.get
    val stackData = (jsonObj \ "stackData").as[String]
    val debugState = (jsonObj \ "debugState").as[String]
    val output = (jsonObj \ "output").as[String]
    val sourcetext = (jsonObj \ "sourcetext").as[String]
    debugState match {
      case "debug" => {
        val uuid = reset(request.session)
        getfield(uuid).textOnEditor = sourcetext
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
        val uuid = request.session.get("uuid").get
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
        val uuid = request.session.get("uuid").get
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
        val uuid=request.session.get("uuid").get
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
        val uuid = request.session.get("uuid").get
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
        val uuid = request.session.get("uuid").get
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

  def startStepExec = Action { implicit request =>
    val uuid = reset(request.session)
    //getfield(uuid).textOnEditor = getfield(uuid).form.bindFromRequest.get
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
    val encOutput = getOutput(uuid)

    Ok(views.html.visualizer(jsonData,"debug",encOutput,getfield(uuid).textOnEditor)).withSession("uuid" -> uuid)
  }

  def execAll = Action { implicit request =>
    val uuid = request.session.get("uuid").get
    var state : ExecState = null
    do{
      getfield(uuid).count += 1
      state = getfield(uuid).engine.stepExecute()
      val jsonData = getJson(state,uuid)
      val encOutput = getOutput(uuid)
    }while (getfield(uuid).engine.isStepExecutionRunning())
    getfield(uuid).count = getfield(uuid).stateHistory.size()
    val jsonData = getfield(uuid).stateHistory.get(getfield(uuid).count-1)
    val output = getfield(uuid).outputsHistory.get(getfield(uuid).count-1)
    Ok(views.html.visualizer(jsonData,"EOF",output,getfield(uuid).textOnEditor))
  }

  def execOneStep = Action { implicit request =>
    val uuid=request.session.get("uuid").get
    getfield(uuid).count += 1
    if(getfield(uuid).count < getfield(uuid).stateHistory.length){
      val jsonData = getfield(uuid).stateHistory.get(getfield(uuid).count)
      val output = getfield(uuid).outputsHistory.get(getfield(uuid).count)
      Ok(views.html.visualizer(jsonData,"nextStep",output,getfield(uuid).textOnEditor))
    }
    else if(getfield(uuid).engine.isStepExecutionRunning()) {
      var state = getfield(uuid).engine.stepExecute()
      while (state.getCurrentExpr().codeRange==null){
        state = getfield(uuid).engine.stepExecute()
      }
      val jsonData = getJson(state,uuid)
      val encOutput = getOutput(uuid)
      Ok(views.html.visualizer(jsonData,"nextStep",encOutput,getfield(uuid).textOnEditor))
    }
    else{
      getfield(uuid).count = getfield(uuid).stateHistory.length-1
      Ok(views.html.visualizer(getfield(uuid).stateHistory.last, "EOF","",getfield(uuid).textOnEditor))
    }
  }

  def execBackStep = Action { implicit request =>
    val uuid = request.session.get("uuid").get
    if(1<getfield(uuid).count){
      getfield(uuid).count -= 1
    }
    val jsonData = getfield(uuid).stateHistory.get(getfield(uuid).count)
    val output = getfield(uuid).outputsHistory.get(getfield(uuid).count)
    Ok(views.html.visualizer(jsonData,"nextStep",output,getfield(uuid).textOnEditor))
  }

  def stopDebug = Action { implicit request =>
    val uuid = request.session.get("uuid").get
    getfield(uuid).engine = null
    Ok(views.html.visualizer(getfield(uuid).stateHistory.last, "STOP","",getfield(uuid).textOnEditor))
  }

  def rawDataToUniTree(string:String)={
    new CPP14Mapper(true).parse(string)
  }

  def reset(session:Session):String={
    //count = 1
    //outputsHistory.clear()
    //stateHistory.clear()
    //engine = new CppEngine()
    //baos  = new ByteArrayOutputStream()
    //engine.out = new PrintStream(baos)
    var uuid = java.util.UUID.randomUUID().toString()
    if(session.get("uuid")!=None){
      uuid = session.get("uuid").get
    }
    fields.put(uuid,new Fields())
    getfield(uuid).engine.out = new PrintStream(getfield(uuid).baos)
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