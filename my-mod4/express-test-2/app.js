// const { application } = require('express');
const express = require('express');
const app = express();

app.get('/status', (req, res) => {
    res.send('The Server is Live');
    res.status(200)
})
app.listen(5000);
