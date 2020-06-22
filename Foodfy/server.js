const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.set('view engine', 'njk')

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
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

server.get("/recipes/:index", function (req, res) {
  const id = req.params.index;
  const recipe = data[id];

  if (!recipe) {
      return res.status(404).render("not-found")
  }

  return res.render("recipe", { recipe })
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function() {
 

})