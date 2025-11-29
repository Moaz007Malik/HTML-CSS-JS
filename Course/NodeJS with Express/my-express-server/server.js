import express from "express";

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello!</h1>");
});

app.get("/Chacha", function (req, res) {
    res.send("<h1>Main Chacha wale route mien hu.</h1>")
} )

app.listen(3000, function(){
    console.log("server started on localhost:3000");
});