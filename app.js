const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.write(`<h1>Home Page</h1>`);
    res.write(`<h2>Another Heading</h2>`);
    res.end();
});

// app.get('/about', (req, res) => {
//     res.send(
//         {
//             name: 'John Doe',
//             age: 30,
//             skills: ['HTML', 'CSS', 'JS']
//         }
//     )
// });

// Same as above
app.get('/about', (req, res) => {
    res.json(
        {
            name: 'John Doe',
            age: 30,
            skills: ['HTML', 'CSS', 'JS']
        }
    )
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});