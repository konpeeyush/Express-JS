const express = require('express');
const app = express();

app.get("/", (req, res) => {
    return res.send("Hello World");
}); 

app.get("/about", (req, res) => {
    return res.send(
        `Hey ${req.query.name}! I am learning ExpressJS, I am ${req.query.age} years old.`
    );
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});