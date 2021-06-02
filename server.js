const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express() // Create a server

/*
Middlewares (interceptadores de requisição)
*/

server.use(express.static('public')) // Listening public folder
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () { // make on
    console.log('server is running[✔]') 
})