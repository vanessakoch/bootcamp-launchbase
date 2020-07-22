const { age, date, grade } = require('../../lib/utils')
const Student = require('../models/Student')

module.exports = {

  index(req, res) {
    let { filter, page, limit } = req.query

    page = page || 1
    limit = limit || 4
    let offset =  limit * (page - 1)

    const params = {
      filter,
      page,
      limit,
      offset,
      callback(students) {
        const pagination = {
          total: Math.ceil(students[0].total / limit),
          page
        }

        return res.render('students/index', { students, pagination, filter })
      }
    }

    Student.paginate(params)
  },

  create(req, res) {
    Student.selectTeacher(function(options){
      return res.render('students/create', { instructor_options: options })
    })
  },  

  post(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys){
      if (req.body[key] == "")
        return res.send("Please, fill in all required fields.")
    }
  
    Student.create(req.body, function(student) {
      return res.redirect(`/students/${student.id}`)
    })
  },

  show(req, res) {
    
    Student.find(req.params.id, function(student) {
      if(!student) return res.send('Student not found!')

      student.birthday = date(student.birth_date).birthDay

      return res.render("students/show", { student })
    })
  },

  edit(req, res) {
    
    Student.find(req.params.id, function(student) {
      if(!student) return res.send('Student not found')

      student.birth_date = date(student.birth_date).iso

      Student.selectTeacher(function(options){
        return res.render('students/edit', { student, instructor_options: options })
      })

    })
  },

  put(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys){
      if (req.body[key] == "")
        return res.send("Please, fill in all required fields.")
    }

    Student.update(req.body, function() {
      return res.redirect(`/students/${req.body.id}`)
    })
    
  },

  delete(req, res) {
    Student.delete(req.body.id, function() {
      return res.redirect("/students")
    })
  },
  
}