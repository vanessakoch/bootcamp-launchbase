const { Pool } = require('pg')

module.exports = new Pool({
  user: 'vanessa',
  password: '1856581',
  host: 5432,
  database: 'my_teacher'
})