const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
// Create a connection to the database
const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

console.log ("connection is " + connection)
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("<3 <3 <3 Successfully connected to our climatedb database <3 <3 <3");
  console.log(`==>> Go to ==>> http://localhost:8080/api/information`);

  connection.on ('error', function(err){
    if(err){console.log('2. error when connecting to db:', err);
      }
  })
});
module.exports = connection;