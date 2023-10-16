//jshint esversion:6
let clr='';
function refresh()
{
  clr='';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for(var i=0;i<6;i++)
  {
    clr+=characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return clr;
}

const express=require("express");
const bodyParser=require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
  var cal=refresh();
  res.render("index", {re: cal});
});

app.post("/match",function(req,res)
{
  // console.log(req.body.man);
  if(clr===req.body.man)
  res.send("Success");
  else {
    res.send("Error");
  }
});

app.post("/refresh",function(req,res){
  res.redirect("/");
});

app.listen(3000);
