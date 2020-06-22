const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'html')

nunjucks.configure("views", {
  express: server
})

server.use(express.static('public'))

server.get('/', function(req, res) {
  res.render('index')
})

server.get('/sobre', function(req, res) {
  res.render('sobre')
})

server.get('/receitas', function(req, res) {
  res.render('receitas')
})


server.listen(5000, function() {})