
// used for local database 
/*  module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Rannout345",
    DB: "climatedb"
  }; */

  //used for heroku 
//var conn=mysql.createConnection({host:"climatedb.mysql.database.azure.com", user:"webmermaids", password:"{your_password}", database:"{your_database}", port:3306, ssl:{ca:fs.readFileSync("{ca-cert filename}")}});
   module.exports = {
    HOST: "climatedb.mysql.database.azure.com",
    USER: "webmermaids",
    PASSWORD: "Rannout345",
    DB: "climatedb"
  }; 


  //b3d5118c36b2ca:90e8fb68@eu-cdbr-west-02.cleardb.net/heroku_c181751f7f98099?reconnect=true