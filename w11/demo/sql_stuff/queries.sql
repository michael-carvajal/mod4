SELECT *
FROM pokemon;

SELECT name, rareness
FROM pokemon;

SELECT *
FROM pokemon
WHERE name = 'Squirtle';

SELECT * FROM pokemon
WHERE weight > 20;

SELECT * FROM pokemon
WHERE evolves = 1;

SELECT * FROM pokemon
WHERE rareness = 'uncommon' AND NOT evolves = 1;

SELECT height * 1000 AS height_times_1000 FROM pokemon;

DELETE FROM pokemon;

DELETE FROM pokemon
WHERE rareness = 'common';

UPDATE pokemon
SET rarity = 'rare'
WHERE name = 'Onix';

UPDATE pokemon
SET height = height + 1000;
-- WHERE

SELECT * FROM pokemon
WHERE name LIKE 'mil%e';

SELECT * FROM pokemon
WHERE rarity_id IN (2, 3, 5);

SELECT * FROM pokemon
WHERE height BETWEEN 0.5 AND 10;

SELECT * FROM pokemon
WHERE evolves = 1
ORDER BY height DESC, name;

SELECT * FROM pokemon
ORDER BY name
LIMIT 5
OFFSET 10;

SELECT pokemon.name, rarity.*
FROM rarity
JOIN pokemon ON (pokemon.rarity_id = rarity.id)
WHERE rarity.value = 'common';

SELECT trainers.name, trainers.id, pokemon_trainers.trainer_id, pokemon_trainers.pokemon_id, pokemon.id, pokemon.name
FROM pokemon_trainers
JOIN trainers ON (trainers.id = pokemon_trainers.trainer_id)
JOIN pokemon ON (pokemon_trainers.pokemon_id = pokemon.id)
WHERE trainers.name = 'Dan';
