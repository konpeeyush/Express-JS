const express = require('express');
const path = require('path');

const app = express();
const public = path.join(__dirname, '../public');

// We have to set the view engine
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, '../views')); //!important

// app.use(express.static(public));

// Template engine is used to render dynamic content
app.get("/", (req, res) => {
    res.render("index",{
        title: "Hurray this is rendered using hbs"
    });
});

app.listen(8000, () => {
    console.log("App is running on port 8000!")
});