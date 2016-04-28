var mongoose = require("mongoose");
//打开数据库
var db = mongoose.createConnnection("mongodb://root:liu123456@115.159.161.107:27017/TestDb");

//链接错误判断
db.on('error',function(err){
  console.log(err);
});

//定义一个数据结构
var userSchema = new mongoose.Schema({
  username : {type : String},
  passwd : {type : String},  
});

//添加mongoose实例方法
userSchema.methods.findbyusername = function(username,callback){
  return this.model('mongoose').find({username: username},callback);
}

//添加mongoose静态方法，静态方法在Model层就能使用
// userSchema.static.findbytitle = function(title,callback){
//   return this.model('mongoose').find({title: title},callback);
// }

//model
var userModel = db.model('user',userSchema);

//增加记录，基于entity操作
var doc = {username: "testEntity",passwd: "123456"};
var userEntity = new userModel(doc);
userEntity.save(function(error){
  if(error){
    console.log(error);
  } else {
    console.log("save OK!")
  }
  db.close();
});

//基于model操作
var doc2 = {username: "testModel",passwd:"1234567"};
userModel.create(doc2, function(error){
  if(error){
    console.log(error);
  } else {
    console.log("sava OK!");
  }
  db.close();
});

