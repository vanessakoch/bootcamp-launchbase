const express = require('express')
const data = require('./data.json')
const recipes = require('./controllers/recipes')

const routes = express.Router()

routes.get('/', function(req, res) {
  res.render('index', { data: data.recipes })
})

routes.get('/about', function(req, res) {
  res.render('about')
})

routes.get('/recipes', function(req, res) {
  res.render('recipes', { data: data.recipes })
})

routes.get("/recipes/:index", function (req, res) {
  const id = req.params.index;
  const recipe = data.recipes[id];

  if (!recipe) {
      return res.status(404).render("not-found")
  }

  return res.render("recipe", { recipe })
})

routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create) 
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)

module.exports = routes