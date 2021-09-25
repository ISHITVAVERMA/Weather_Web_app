const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var city = req.body.cityName;
  var link="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=346b907862ae20b1c42d4ae8b11b127b";
  console.log(city);
  https.get(link,function(response){
    //console.log(response);
    response.on("data",function(data)
    {
      const whetherdata = JSON.parse(data);
      const temp = whetherdata.main.temp;
      console.log(temp);
      res.send("<h1>"+temp+"</h1>");
    });
  });
});

//
app.listen(3000,function(){
  console.log("The port is listening");
});
