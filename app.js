//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    if (currentDay == 0)
        day = "Sunday";
    if (currentDay == 1)
        day = "Monday"
    if (currentDay == 2)
        day = "Tuesday";
    if (currentDay == 3)
        day = "Wednesday";
    if (currentDay == 4)
        day = "Thursday";
    if (currentDay == 5)
        day = "Friday";
    if (currentDay == 6)
        day = "Saturday";


    res.render("list", { whichDay: day });
});


app.listen(3000, function () {

    console.log("Server started at port 3000. Ready and Running :) ");
});
