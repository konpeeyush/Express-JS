const express = require('express');
const path = require('path');

const app = express();
const public=path.join(__dirname, '../public');

app.use(express.static(public));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8000, () => {
    console.log("App is running on port 8000!")
});