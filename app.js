//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


var items = [];

app.get("/", function (req, res) {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);


    res.render("list", { whichDay: day, itemList: items });
});

app.post("/", function (req, res) {
    items.push(req.body.item);
    res.redirect("/");

});


app.listen(3000, function () {

    console.log("Server started at port 3000. Ready and Running :) ");
});
