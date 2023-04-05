// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Import Op to perform comparison operations in WHERE clauses - DO NOT MODIFY
const { Op } = require("sequelize");

// Express using json - DO NOT MODIFY
app.use(express.json());


// STEP 1
// All puppies in the database
// No WHERE clause
app.get('/puppies', async (req, res, next) => {
    let allPuppies;

    // Your code here
    try {
        allPuppies = await Puppy.findAll({
            order: [['name', 'ASC']]
        })
        res.json(allPuppies);
    } catch (error) {
        console.log(error);
    }

});


// STEP 2
// All puppies that have been microchipped
// WHERE clause with one exact value
app.get('/puppies/chipped', async (req, res, next) => {
    let chippedPuppies;

    // Your code here
    try {
        chippedPuppies = await Puppy.findAll({
            where: {
                microchipped: true
            }
        })
        res.json(chippedPuppies);

    } catch (error) {
        console.log(error);
    }


});


// STEP 3
// One puppy matching a name param
// Finding one record by attribute
app.get('/puppies/name/:name', async (req, res, next) => {
    let puppyByName;

    // Your code here
    try {
        puppyByName = await Puppy.findOne({
            where: {
                name: req.params.name
            }
        })
        res.json(puppyByName);

    } catch (error) {
        console.log(error);
    }
})
app.get('/puppies/:id(\\d+)', async (req, res, next) => {
    let puppy;

    // Your code here
    try {
        puppy = await Puppy.findByPk(req.params.id)
        res.json(puppy);

    } catch (error) {
        console.log(error);
    }
})


// BONUS STEP 5
// All puppies with breed ending in 'Shepherd'
// WHERE clause with a comparison
app.get('/puppies/shepherds', async (req, res, next) => {
    let shepherds;

    // [Op.endsWith]: 'Sherpard'
    // Your code here
    console.log('hello');
    try {
        shepherds = await Puppy.findAll({
            where: {
                breed: {
                    [Op.like]: '%Shepherd'
                }
            }
        })
        res.json(shepherds)
    } catch (error) {
        console.log(error);
    }

})


// BONUS STEP 6
// All puppies with age_yrs <= 1yr and weight_lbs <= 20lbs
// WHERE clause with multiple attributes and comparisons
app.get('/puppies/tinybabies', async (req, res, next) => {
    let tinyBabyPuppies;

    // Your code here
    console.log('hello');
    try {
        tinyBabyPuppies = await Puppy.findAll({
            where: {
                age_yrs: {
                    [Op.lt]:1
                },
                weight_lbs: {
                  [Op.lt]: 20
                }
            },
            order : [['age_yrs'], ['weight_lbs']]

        })
        res.json(tinyBabyPuppies);
    } catch (error) {
        console.log(error);
    }

})


// STEP 4
// One puppy matching an id param
// Finding one record by primary key
app.get('/puppies/:id', async (req, res, next) => {
    let puppyById;

    // Your code here

    res.json(puppyById);
});


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
