import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    var calculated = (w / (h * h));
    res.send("<h2> The Calculated BMI is: " + calculated + "</h2>")
})

app.listen(3000, function(){
    console.log("App is running fine!");
});