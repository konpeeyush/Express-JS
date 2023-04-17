const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const hbs = require('hbs');

const templatesPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index');
    }
);

app.listen(port, () => {
    console.log(`Listening to the port at ${port}`);
});