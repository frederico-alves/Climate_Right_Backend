const sql = require("./db.js");
// constructor
const Info = function(info) {
  // this.title = info.title;
  this.name = info.name;
  this.description = info.description;
  // this.published = info.published;
};
Info.create = (newInfo, result) => {
  console.log(newInfo);
   sql.query("INSERT INTO information SET ?", newInfo, (err, res) => {
     if (err) {
       console.log("error: ", err);
       result(err, null);
       return;
     }
     console.log("created Info: ", { id: res.insertId, ...newInfo });
     result(null, { id: res.insertId, ...newInfo });
   });
};
Info.findById = (id, result) => {
  sql.query(`SELECT * FROM information WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Info: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Info with the id
    result({ kind: "not_found" }, null);
  });
};
Info.getAll = (description, result) => {
  let query = "SELECT * FROM information";
  // if (description) {
  //   query += ` WHERE description LIKE '%${description}%'`;
  // }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("Infos: ", res);
    result(null, res);
  });
};
// Info.getAllPublished = result => {
//   sql.query("SELECT * FROM information WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }
//     console.log("Infos: ", res);
//     result(null, res);
//   });
// };
Info.updateById = (id, info, result) => {
  sql.query(
    "UPDATE information SET name = ?, description = ? WHERE id = ?",
    [info.name, info.description, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Info with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated info: ", { id: id, ...info });
      result(null, { id: id, ...info });
    }
  );
};
Info.remove = (id, result) => {
  sql.query("DELETE FROM information WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Info with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted information with id: ", id);
    result(null, res);
  });
};
Info.removeAll = result => {
  sql.query("DELETE FROM information", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} Infos`);
    result(null, res);
  });
};
module.exports = Info;