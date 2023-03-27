const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List')

})
router.get('/new', (req, res) => {
    res.render('users/new', { firstName: "Michael" })
})
const users = [];
router.post('/', (req, res) => {
    let firstName = req.body.firstName;
    console.log(users);
    const isValid = true;
    if (false) {
        users.push({ firstName: firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('error');
        res.render('users/new', { firstName: firstName })
    }
    console.log(firstName);
    // res.send('Create User')
})

// router.route('/:id').get((req, res) => {
//     res.send(`Get user with id ${req.params.id}`)
// }).put((req, res) => {
//     res.send(`Update user with id ${req.params.id}`)
// }).delete((req, res) => {
//     res.send(`Delete user with id ${req.params.id}`)
// })

// router.get('/:id', (req, res) => {
//     res.send(`Get user with id ${req.params.id}`)
// })
// router.put('/:id', (req, res) => {

//     res.send(`Update user with id ${req.params.id}`)
// })
// router.delete('/:id', (req, res) => {
//     res.send(`Delete user with id ${req.params.id}`)
// })


router.route('/:id')
    .get((req, res, next) => {
        res.send(`Get user with id ${req.params.id}`)
        next()
    })
    .put((req, res, next) => {
        res.send(`Update user with id ${req.params.id}`)
        next()
    })
    .delete((req, res) => {
        res.send(`Delete user with id ${req.params.id}`)
    });

module.exports = router;
