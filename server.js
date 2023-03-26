const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('get method');
    // res.send().json({ message: "successful" })
    // res.download('server.js')
    // res.status(200).json({ message: "successful" })
    res.render('index', { text: 'world' })
})


const userRouter = require('./routes/users.js')

app.use('/users', userRouter)
app.listen(3000);
