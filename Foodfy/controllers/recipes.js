const data = require('../data.json')

exports.index = function(req, res) {
  return res.render('admin/index', { data: data.recipes })
}

exports.create = function(req, res) {
  
}

exports.show = function(req, res) {
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  })

  const recipe = {
    ...foundRecipe
  }

  return res.render('admin/show', { recipe })
}

exports.edit = function(req, res) {
  
}

exports.post = function(req, res) {
  
}

exports.put = function(req, res) {
  
}

exports.delete = function(req, res) {
  
}