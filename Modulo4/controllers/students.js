const fs = require('fs')
const data = require('../data.json')
const { date, grade } = require('../utils')

exports.index = function(req, res) {
  return res.render('students/index', { students : data.students })
}

exports.create = function(req, res) {
  return res.render('students/create')
}

exports.show = function(req, res) {

  const { id } = req.params

  const foundStudent = data.students.find(function(students) {
    return students.id == id
  })

  if(!foundStudent) return res.send('Student not found!') 

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).birthDay,
    schoolyear: grade(foundStudent.schoolyear)
  }
  
  return res.render("students/show" , { student })
}

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for(key of keys){
    if (req.body[key] == "")
      return res.send("Please, fill in all required fields.")
  }

  birth = Date.parse(req.body.birth)

  let id = 1
  const lastStudent = data.students[data.students.length -1 ]

  if(lastStudent) {
    id = lastStudent.id + 1
  }

  data.students.push({
    id,
    ...req.body,
    birth,  
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Write file error!')

    return res.redirect('/students')
  })

}

exports.edit = function(req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function(students) {
    return students.id == id
  })

  if(!foundStudent) return res.send('student not found!') 
  
  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).iso
  }
  
  return res.render("students/edit", { student })
}

exports.put = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundStudent = data.students.find(function(students, foundIndex) {
    if (students.id == id){
      index = foundIndex
      return true
    }
  })

  if(!foundStudent) return res.send('student not found!') 
  
  const student = {
    ...foundStudent,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.students[index] = student

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
    if(err) return res.send('Write file error!')

    return res.redirect(`/students/${id}`)
  })

}

exports.delete = function(req, res) {
  const { id } = req.body

  const filteredStudents = data.students.filter(function(student) {
    return student.id != id
  })

  data.students = filteredStudents

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Write file error!')

    return res.redirect('/students')
  })
}