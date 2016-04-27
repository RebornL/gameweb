var mongoose = require("mongoose");

mongoose.connect("mongodb://root:liu123456@115.159.161.107:27017/TestDb");

exports.mongoose = mongoose;