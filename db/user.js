var mongodb = require("./mongodb");
var Schema = mongodb.mongoose.Schema;
var userSchema = new Schema({
  nickname: {type:String,unique:true},
  password: String,
});

// userSchema.method.findByNickname = function(nickname,callback){
//   return this.model('mongoose').find({nickname: nickname},callback);
// }
//根据Nickname查找
userSchema.static('findByNickname',function (nickname,callback) {
  return this.find({nickname: nickname},callback);
})

// userSchema.static.checkPassword = function(password,callback){
//   // return this.model('mongoose').find({});
//   return 1;
// }
// var User = mongodb.mongoose.model("User",userSchema);
exports.User = mongodb.mongoose.model("User",userSchema);
// module