const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");
// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,

});


console.log ("connection is " + connection)
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("<3 <3 <3 Successfully connected to our climatedb database <3 <3 <3");
  console.log(`==>> Go to ==>>https://climate-right.azurewebsites.net/api/information`);

  connection.on ('error', function(err){
    if(err){console.log('2. error when connecting to db:', err);
      }
  })
});
module.exports = connection;