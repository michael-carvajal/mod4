const express = require('express');
const app = express();
const ejs = require('ejs');
// require('express-async-errors');

require('dotenv').config();
app.use(express.json());
const path = require('path');

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});
const { Users } = require('./router/users.js')
app.get('/home', async function (req, res) {

    // const allUsers = await Users.findAll();
    return res.sendFile(path.join(__dirname, 'static/views/index.ejs'));
});
app.get('/static/styles/main.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'static', 'styles', 'main.css'));
});



app.use('/users', require('./router/users.js'))


app.use((err, req, res, next) => {
    if (err) {
        // console.log(err);
        return res.json(err)
    }
    res.json('Could not Find an endpoint')
})



app.listen(5001, () => console.log('Listening on port 5001'))
