const express = require('express')
const nunjucks = require('nunjucks')

const cursos = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get('/', function(req, res) {
  return res.render('courses', { data : cursos })
})

server.get('/about', function(req, res) {
  return res.render('about')
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(3000, function() {
  console.log('Server is running')
})