const express = require("express");
const path = require("path");

//sets up Express app
const app = express();
const PORT = 3000;

//sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});






//start listener
app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT);
});