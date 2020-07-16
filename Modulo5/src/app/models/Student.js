const { age, date, grade } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
  all(callback) {
    
    db.query(`SELECT * FROM students ORDER BY name ASC`, function(err, results) {
      if(err) throw `Database error! ${err}`

      callback(results.rows)
    })
  },

  create(data, callback){
    const query = `
    INSERT INTO students (
      avatar_url,
      name,
      birth_date,
      email,
      grade,
      class_load,
      teacher_id
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id
    `
    const values = [
      data.avatar_url,
      data.name,
      date(data.birth_date).iso,
      data.email,
      grade(data.grade),
      data.class_load,
      data.teacher
    ]

    db.query(query, values, function(err, results) {
      if(err) throw `Database error! ${err}`

      callback(results.rows[0])
    })

  },

  find(id, callback) {
    db.query(`
    SELECT students.*, teachers.name AS teacher_name
    FROM students
    LEFT JOIN teachers ON (students.teacher_id = teachers.id)
    WHERE students.id = ${id}`, 
    function(err, results) {
      if(err) throw `Database error! ${err}`
      callback(results.rows[0])
    })
  },

  update(data, callback) {

    const query = `
      UPDATE students SET
        avatar_url=($1),
        name=($2),
        birth_date=($3),
        email=($4),
        grade=($5),
        class_load=($6),
        teacher_id=($7)
      WHERE id = $8
    `

    const values = [
      data.avatar_url,
      data.name,
      date(data.birth_date).iso,
      data.email,
      grade(data.grade),
      data.class_load,
      data.teacher,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if(err) throw `Database error! ${err}`

      callback()
    })
  },

  delete(id, callback){
    db.query(`DELETE FROM students WHERE id = ${id}`, function(err, results) {
      if(err) throw `Database error! ${err}`

      callback()
    })
  },

  selectTeacher(callback) {
    db.query(`SELECT id, name FROM teachers`, function(err, results) {
      if(err) throw `Database error! ${err}`

      callback(results.rows)
    })
  }

}