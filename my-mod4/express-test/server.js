const express = require('express');
const app = express();
// app.use(logger)

// app.use(express.static("public"))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.set('view engine', 'ejs')

// // app.get('/', logger,  (req, res) => {
// //     console.log('get method');
// //     // res.send().json({ message: "successful" })
// //     // res.download('server.js')
// //     // res.status(200).json({ message: "successful" })
// //     res.render('index', { text: 'world' })
// // })


// const userRouter = require('./routes/users.js')

// app.use('/users', userRouter)


// function logger(req, res, next) {
//     console.log(req.originalUrl);
//     next();
// }


// app.use((err, req, res, next) => {
//     console.log('firsrt error');
//     next(err);
// });

// // 2:
// app.post('/colors', (req, res, next) => {
//     console.log(2);
//     next();
// });

// // 3:
// app.use((req, res, next) => {
//     console.log(3);
//     console.log(3);
//     next();
// });

// // 4:
// app.use((err, req, res, next) => {
//     console.log(4);
//     return res.json();
// });

// 1:
app.put('/:green', (req, res) => {
    console.log(1);

 });

// 2:
app.put('/color', (req, res) => {
    console.log(2);
 });

// 3:
app.put('/color/:green', (req, res) => {
    console.log(3);
 });

// 4:
app.put('/:color', (req, res) => {
    console.log(4);
 });
app.listen(3000);
