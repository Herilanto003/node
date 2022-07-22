// integration des packages
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");

// ecoute sur le port 4000
const app = express();
app.listen(3000, console.log("le serveur démarre..."));

// utilisations des packages
app.use(express.static(__dirname+"/public"));

// routages des liens
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/page2", (req,res)=>{
    res.sendFile(__dirname+"/page2.html");
});

app.get("/page3", (req,res)=>{
    res.sendFile(__dirname+"/page3.html");
});