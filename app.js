const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('This is my home page');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.get('/contact', (req, res) => {
    res.send('This is contact page');
});

app.get('/temp', (req, res) => {
    res.send('This is temp page');
});


app.listen(port, () => {
    console.log('Server started at port ' + port);
});