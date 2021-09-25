const express=require("express");
const https=require("https");
const app=express();


app.get("/",function(req,res){

  var link="https://api.openweathermap.org/data/2.5/weather?q=london&appid=346b907862ae20b1c42d4ae8b11b127b";

  https.get(link,function(response){
    console.log(response);
    response.on("data",function(data)
    {
      var whetherdata = JSON.parse(data);
      var temp = whetherdata.main.temp;
      console.log(temp);
    });
  });



  res.send("hello there");
});

app.listen(3000,function(){
  console.log("The port is listening");
});
