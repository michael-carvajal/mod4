// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
require('express-async-errors');

// Import the models used in these routes - DO NOT MODIFY
const { Musician, Band, Instrument } = require('./db/models');

// Express using json - DO NOT MODIFY
app.use(express.json());

const { Op } = require('sequelize')
app.get('/musicians', async (req, res, next) => {
    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    // Your code here
    let { page, size } = req.query

    let pagination = {}

    let limit = size;
    let offset;
    if (!page) page = 1;
    if (!size) size = 5;


    if (page >= 1 && size >= 1) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);

    }
    // if (size <= 1) size = 5
    // if (size === undefined) {
    //     limit = 5
    //     if (page === undefined) {

    //     }
    // }
    // offset = limit * (page - 1);
    console.log(offset, page);

    // Query for all musicians
    // Include attributes for `id`, `firstName`, and `lastName`
    // Include associated bands and their `id` and `name`
    // Order by musician `lastName` then `firstName`

    try {
        const musicians = await Musician.findAll({
            ...pagination,
            order: [['lastName'], ['firstName']],
            attributes: ['id', 'firstName', 'lastName'],
            include: [{
                model: Band,
                attributes: ['id', 'name']
            }],
            // add limit key-value to query
            // add offset key-value to query
            // Your code here
        });

        res.json(musicians)

    } catch (e) {
        console.log(e);
        res.json(e)
    }
});
app.get('/search', async (req, res, next) => {
    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    // Your code here
    let { page, size, firstName, lastName, id, bandId } = req.query

    let queryObj = {
        where: {},
        include: []
    }

    let limit = size;
    let offset;
    if (!page) page = 1;
    if (!size) size = 5;


    if (page >= 1 && size >= 1) {
        queryObj.limit = size;
        queryObj.offset = size * (page - 1);

    }
    if (firstName) {
        queryObj.where.firstName = firstName
    }
    if (id) {
        queryObj.where.id = { [Op.lte]: id }
    }
    if (lastName) {
        queryObj.where.lastName = lastName;
    }

    if (bandId) {

        let newbandId = Number(bandId)
        console.log(typeof newbandId);
        queryObj.include.push({
            model: Band,
            where: {
                id: newbandId
            }
        })
    }
    console.log(offset, page);


    try {
        const musicians = await Musician.findAll({
            ...queryObj,

            // add offset key-value to query
            // Your code here
        });

        res.json(musicians)

    } catch (e) {
        console.log(e);
        res.json(e)
    }
});


// BONUS: Pagination with bands
app.get('/bands', async (req, res, next) => {
    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    // Your code here

    // Query for all bands
    // Include attributes for `id` and `name`
    // Include associated musicians and their `id`, `firstName`, and `lastName`
    // Order by band `name` then musician `lastName`
    const bands = await Band.findAll({
        order: [['name'], [Musician, 'lastName']],
        attributes: ['id', 'name'],
        include: [{
            model: Musician,
            attributes: ['id', 'firstName', 'lastName']
        }],
        // add limit key-value to query
        // add offset key-value to query
        // Your code here
    });

    res.json(bands)
});


// BONUS: Pagination with instruments
app.get('/instruments', async (req, res, next) => {
    // Parse the query params, set default values, and create appropriate
    // offset and limit values if necessary.
    // Your code here

    // Query for all instruments
    // Include attributes for `id` and `type`
    // Include associated musicians and their `id`, `firstName` and `lastName`
    // Omit the MusicianInstruments join table attributes from the results
    // Include each musician's associated band and their `id` and `name`
    // Order by instrument `type`, then band `name`, then musician `lastName`
    const instruments = await Instrument.findAll({
        order: [['type'], [Musician, Band, 'name'], [Musician, 'lastName']],
        attributes: ['id', 'type'],
        include: [{
            model: Musician,
            attributes: ['id', 'firstName', 'lastName'],
            // Omit the join table (MusicianInstruments) attributes
            through: { attributes: [] },
            include: [{
                model: Band,
                attributes: ['id', 'name']
            }]
        }],
        // add limit key-value to query
        // add offset key-value to query
        // Your code here
    });

    res.json(instruments)
});

// ADVANCED BONUS: Reduce Pagination Repetition
// Your code here


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
