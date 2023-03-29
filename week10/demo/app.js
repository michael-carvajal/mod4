const express = require('express');
const app = express();
const fruitsRouter = require('./routes/fruits.js');
require('dotenv').config()
const port = 5000;




app.use('/fruits', fruitsRouter);
app.listen(port, () => console.log('Sever is listening on port ', port))
