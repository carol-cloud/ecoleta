const express = require("express")
const server = express()

// configurar pasta pública
server.use(express.static("public"))

// configurar caminhos da minha aplicação
// página inicial
// req = requisição
// res = resposta
server.get("/", (req, res) => {
    return res.render("index.html")

})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")

})

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true

})

server.get("/search", (req, res) => {
    return res.render("search-results.html")

})


// ligar o servidor
server.listen(3000)