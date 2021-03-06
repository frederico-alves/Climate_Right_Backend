
const sql = require("./db.js");

// constructor
  const Input = function(input) {
    this.Temperature = input.Temperature;
    this.AirQuality = input.AirQuality;
    this.Humidity = input.Humidity;   
    this.zone = input.zone;
    this.Identifier =input.Identifier;
    
  };


  // post 
  Input.createNewInput = (newInput, result) => {
    console.log(newInput);
     sql.query("INSERT INTO input SET ?", newInput, (err, res) => {
       if (err) {
         console.log("error input: ", err);
         result(err, null);
         return;
       }
       console.log("created Input: ", { id: res.insertId, ...newInput });
       result(null, { id: res.insertId, ...newInput });
     });
  };


  //getAll
  Input.getAllInputs = ( result) => {
    let query = "SELECT * FROM input";
   
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
       console.log("Inputs: ", res);
      result(null, res);
    });
  };
  module.exports = Input;