let express = require("express")
let app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
  console.log("Request~",req)
  res.send("Server-UP")
})

app.post("/drunk", function(req,res){
  res.send("Got it")
})

app.listen(process.env.PORT)
