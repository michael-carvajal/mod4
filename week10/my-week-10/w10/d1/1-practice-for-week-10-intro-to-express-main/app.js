const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Respnonse from server.')
})

app.listen(port, () => console.log('Server is listening on port ', port));
