const { Pool } = require('pg')

module.exports = new Pool ({
  user: "vanessa",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "my_teacher",
});