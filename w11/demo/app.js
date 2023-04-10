const express = require('express');
const app = express();
const fruitsRouter = require('./routes/fruits.js');
require('dotenv').config()
const port = 5000;

const sqlite = require('splite3')
const db = new sqlite.Database(data_source, sqlite.OPEN_READWRITE)
app.get('/pokemon/:id', (req, res) => {
    const sql = 'SELECT * FROM pokemon WHERE id = ?;' // replace variable with question mark
    const params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            return res.json(err)
        }
        res.json(row);
    })
})




app.use('/fruits', fruitsRouter);
app.listen(port, () => console.log('Sever is listening on port ', port))
