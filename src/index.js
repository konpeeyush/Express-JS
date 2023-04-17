const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const public = path.join(__dirname, '../public');
// Buitlin Middleware
app.use(express.static(public));

app.get('/', (req, res) => {
    res.send('Home Page!');
});

app.get('/about', (req, res) => {
    res.send('About Page!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
