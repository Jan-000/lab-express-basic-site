const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/trips", (request, response, next)=>{response.sendFile(__dirname + "/public/views/trips.html")}) 

app.get("/built", (request, response, next) => response.sendFile(__dirname + "/public/views/built.html"))

app.get("/trips", (request, response, next) => response.sendFile(__dirname + "/public/views/trips.html"))