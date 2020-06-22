const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.set('view engine', 'njk')

nunjucks.configure("views", {
  express: server
})

server.use(express.static('public'))

server.get('/', function(req, res) {

  res.render('index', { data })
})

server.get('/about', function(req, res) {
  res.render('about')
})

server.get('/recipes', function(req, res) {
  res.render('recipes', { data })
})


server.listen(5000, function() {})