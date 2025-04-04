const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "82.197.82.42",
  user: "u677091426_Evangadi",
  password: "H3m=90H=TVC",
  database: "u677091426_Evangadi",
});

module.exports = db.promise();
