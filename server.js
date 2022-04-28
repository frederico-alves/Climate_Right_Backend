const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  //origin: "http://localhost:8100"
  origin:"https://climate-right-438e8.web.app"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ClimateRight Backend application." });
  res.json({ message: "Here we manage our GET/POST/DELETE requests from climatedb DATABASE" });
});
require("./app/routes/info.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log("Welcome to ClimateRight Backend application.");
  console.log("Here we manage our GET/POST/DELETE requests from climatedb DATABASE");
  console.log("===========================================================");
});