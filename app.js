const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/trips", (request, response, next)=>{response.sendFile(__dirname + "views/trips.html")}) 

app.get("/built", (request, response, next) => response.sendFile(__dirname + "/views/built.html"))

app.get("/trips", (request, response, next) => response.sendFile(__dirname + "/views/trips.html"))

app.listen(3000, () => console.log("check if listening to port 3000"))