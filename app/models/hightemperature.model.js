const sql = require("./db.js");

// constructor
const Hightemperature = function(hightemperature){
    this.Hid= hightemperature.Hid;
    this.Temperature = hightemperature.Temperature;
    this.zone = hightemperature.zone;
    this.Date= hightemperature.Date;
};

//getAll
Hightemperature.getAllHighTemperature = ( result) => {
    let query = " SELECT * from hightemperature";
   
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
       console.log("Hightemperature: ", res);
      result(null, res);
    });
  };
  module.exports = Hightemperature;
