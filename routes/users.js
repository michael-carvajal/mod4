const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List')

})
router.get('/new', (req, res) => {
    res.send('User newForm')
})

router.post('/', (req, res) => {
    res.send('Create User')
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
