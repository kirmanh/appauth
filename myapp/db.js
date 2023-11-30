const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  post: "5432",
  database: "authdb",
});
module.exports = { query: (text, params) => pool.query(text, params) };
