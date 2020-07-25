const express = require("express");
const path = require("path");

//sets up Express app
const app = express();
const PORT = 3000;

//sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// reservation variables
let tables = [];
let waitlist = [];

//Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});


//display reservations json
app.get("api/tables", function (req, res) {
    return res.json(tables)
});

//display waitlist json
app.get("api/waitlist", function (req, res) {
    return res.json(waitlist)
});


//start listener
app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT);
});