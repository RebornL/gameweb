var mongodb = require("./mongodb");
var Schema = mongodb.mongoose.Schema;
var userSchema = new Schema({
  nickname: String,
  password: String,
});

userSchema.static.findByNickname = function(nickname,callback){
  return this.model('mongoose').find({nickname: nickname},callback);
}

userSchema.static.checkPassword = function(password,callback){
  // return this.model('mongoose').find({});
  return 1;
}
// var User = mongodb.mongoose.model("User",userSchema);
exports.User = mongodb.mongoose.model("User",userSchema);