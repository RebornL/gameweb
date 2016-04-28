// console.log("test upload!");
// console.log("test again");
var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");//用来解析json数据
var crypto = require('crypto');

var User = require("./db/user.js").User;

var app = express();

app.set("views",__dirname+"/views");
app.engine('.html', require('ejs').__express);
app.set("view engine","html");
//设置静态目录
app.use(express.static("public"));
//处理json数据解析
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

//主页界面
app.get("/",function(req,res){
  //res.charset = "UTF-8";
  res.render("index");
});

app.get("/index",function(req,res){
  //res.charset = "UTF-8";
  res.render("index");
});

//注册界面
app.get("/signin",function(req,res){
  //res.charset = "UTF-8";
  res.render("signin");
});

//注册记录
app.post("/signin",function(req,res){
  console.log("nickname: "+req.body.nickname);
  console.log("password: "+req.body.password);
  //生成密码的 md5 值
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('hex');
  console.log("passwordHex:"+password);
  //存储数据到数据库
  var newUser = new User({
    nickname: req.body.nickname,
    password: password,
  });
  
  newUser.save();
  res.redirect("/index");
  // res.send("response word is success!");
  //res.render("index");
  
});

//登录界面
app.get('/login',function(req,res){
  
});

app.post('/login',function(req,res){
  
});

http.createServer(app).listen(8888);
console.log("Server start at port 8888");
