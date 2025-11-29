import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    const location = req.body.cityName;
    const apiKey = "cd4d5c5ab58a80749f6334f9db7893fd";
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ location +"&units="+ unit +"&appid="+ apiKey;
    https.get(url, function (response) {
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>The temperature in "+ location +" is " + temp + " degree Celcius.</h1>");
            res.write("<h3>The Weather is " + weatherDescription +".</h3>");
            res.write("<img src="+ imageUrl + ">");
            res.send();
        })
    })
})

app.listen(3000, function(){
    console.log("Weather App is running on Port 3000");
});