import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
import request from "request";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})