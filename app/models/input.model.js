const { DATETIME } = require("mysql/lib/protocol/constants/types");
const sql = require("./db.js");

const Input = function(input) {

    this.Temperature = input.Temperature;
    this.Humidity = input.Humidity;
    this.AiQuality = input.AiQuality;
    this.zone = input.zone;
    this.Identifier =input.Identifier;
    this.Date = DATETIME.Now.ToString("MM/dd/yyyy HH:mm");
  
  };

  Input.create = (newInput, result) => {
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

  Input.getAll = ( result) => {
    let query = "SELECT * FROM input";
   
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
       console.log("Infos: ", res);
      result(null, res);
    });
  };
  module.exports = Input;