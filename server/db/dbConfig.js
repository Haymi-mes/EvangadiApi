const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "82.197.82.42",
  user: "u677091426_himeynathan",
  password: "/ANglb8qYt1",
  database: "u677091426_himeynathan",
});


module.exports = db.promise();
