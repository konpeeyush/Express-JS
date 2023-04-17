const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const templatePath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', templatePath);

app.get('/', (req, res) => {
    res.render('index');
    }
);

app.get("*", (req, res) => {
    res.render("404",{
        errorMsg: "Opps! Page Not Found"
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
