const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");
// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("<3 <3 <3 Successfully connected to our climatedb database <3 <3 <3");
  console.log(`==>> Go to ==>> http://localhost:8080/api/information`);
});
module.exports = connection;