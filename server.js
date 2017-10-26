let express = require("express")
let app = express()
let drunk = require("./drunk.js")

let port = process.env.PORT || 1337

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
  res.send("SERVER-UP")
})

app.post("/drunk", function(req,res){



  res.send("Got it")
})

app.listen(port)
