const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.set('view engine', 'njk')

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function() {
  console.log('Server is running')

})