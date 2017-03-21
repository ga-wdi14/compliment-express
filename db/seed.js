var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Compliment = mongoose.model("Compliment");

Compliment.remove({}).then(function(){
  Compliment.collection.insert(seedData).then(function(){
    process.exit();
  });
});
