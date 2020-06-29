const fs = require('fs')
const data = require('./data.json')
const Intl = require('intl')
const { age, date, graduation } = require('./utils')

// get

exports.show = function(req, res) {

  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teachers) {
    return teachers.id == id
  })

  if(!foundTeacher) return res.send('Teacher not found!') 

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    education: graduation(foundTeacher.education),
    subjects: foundTeacher.subjects.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
  }
  
  return res.render("teachers/show" , { teacher })
}

// post

exports.post = function(req, res) {
  // Pega as chaves do body (photo_url, name, ...)
  const keys = Object.keys(req.body)

  for(key of keys){
    // req.body.key == "" ou seja, req.body.photo_url
    if (req.body[key] == "")
      return res.send("Please, fill in all required fields.")
  }

  let { photo_url, name, birth, education, format, subjects } = req.body

  birth = Date.parse(birth)
  created_at = Date.now()
  id = data.teachers.length + 1

  data.teachers.push({
    id,
    photo_url,
    name,
    birth,
    education,
    format,
    subjects,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Write file error!')

    return res.redirect('/teachers')
  })

}

// edit

exports.edit = function(req, res) {
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teachers) {
    return teachers.id == id
  })

  if(!foundTeacher) return res.send('Teacher not found!') 
  
  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth)
  }
  
  console.log(date)
  return res.render('teachers/edit', { teacher })
}