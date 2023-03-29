const express = require('express');
const router = express.Router();

let fruits = ['apple', 'orange'];

const fruitChecker = (req, res, next) => {
    if (!req.body.fruitName) {
        const err = new Error('fruitName is required');
        err.statusCode = 404;
        err.title = 'Fruit error'
        return next(err)
    }
    if (fruits.includes(req.body.fruitName)) {
        const err = new Error('fruitName already exists');
        err.statusCode = 404;
        err.title = 'Fruit error'
        return next(err)
    }
    next()
}

router.post('/', (req, res) => {
    fruits.push(req.body.fruitName)
    res.json(fruits)
})

router.get('/', (req, res, next) => {
    if (req.banana) {
        res.json(fruits)
    } else {
        res.send('need fruit?')
    }
})

module.exports = router;
