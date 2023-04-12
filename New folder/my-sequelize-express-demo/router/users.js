const express = require('express');
const Users = express.Router();

const { User } = require('../db/models');

Users.get('/', async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
})

Users.post('/', async (req, res) => {
    const { firstName, lastName, age } = req.body;
    const allUsers = await User.findAll();
    const addNewUser = await User.create({
        firstName, lastName, age
    })
    res.json({ allUsers, addNewUser });
})
Users.delete('/', async (req, res) => {

    const deletedUser = await User.findByPk(req.body.userId)

    if (deletedUser) {
        deletedUser.destroy();

        const allUsers = await User.findAll();
        return res.json({ allUsers, deletedUser });

    } else {
        res.status(400).json({
            message: `There is no user with the id ${req.body.userId}`
        })
    }
})

module.exports = Users;
