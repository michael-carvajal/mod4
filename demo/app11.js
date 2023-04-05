const express = require('express');
const app = express();
require('dotenv').config()
app.use(express.json())

const { Pokemon } = require('./db/models');

app.get('Pokemon', async (req, res) => {
    // const pokemon = await Pokemon.findAll({
    //     attributes: ['name', 'weight', 'height']
    // })
    //WHERE
    // try {
    //     const pokemon = await pokemon.findAll({
    //         where: {
    //             name: "Squirtle"
    //         }
    //     })
    //     res.json({ pokemon });

    // } catch (error) {
    //     console.log(error);
    // }
    // Op operators
    const {Op} = require('sequelize')
    try {
        const pokemon = await pokemon.findAll({
            order: [['height', 'ASC']],
            where: {
                weight: {
                    [Op.between]: [5, 100]
                }
            }
        })
        res.json({ pokemon });

    } catch (error) {
        console.log(error);
    }
    // ODER
    // try {
    //     const pokemon = await pokemon.findAll({
    //         order : [['name']]
    //     })
    //     res.json({ pokemon });

    // } catch (error) {
    //     console.log(error);
    // }
})

app.get('/pokemon/:id', async (req, res) => {
    // const pokemon = await Pokemon.findOne({
        //     where: {
            //         id: req.params.id
            //     }
            // })
            // res.json(pokemon);

    const pokemon = await Pokemon.findByPk(req.params.id)
})

app.post('/pokemon', async (req, res) => {
    const { name, height, weight, evolves, rarity } = req.body;
    // const pokemon = Pokemon.build({ name, height, weight, evolves, rarity })

    // pokemon.validate()
    // await pokemon.save()
    const pokemonCreate = Pokemon.create({ name, height, weight, evolves, rarity })

    res.json(pokemon)
})

app.listen(5000, () => console.log('server on'));
