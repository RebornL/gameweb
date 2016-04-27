var mongodb = require("./mongodb");
var Schema = mongodb.mongoose.Schema;
var userSchema = new Schema({
  nickname: String,
  password: String,
});

// var User = mongodb.mongoose.model("User",userSchema);
exports.User = mongodb.mongoose.model("User",userSchema);