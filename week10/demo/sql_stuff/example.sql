CREATE TABLE pokemon (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    height FLOAT(4,2) NOT NULL,
    weight FLOAT(5,2) NOT NULL,
    rareness VARCHAR(30) DEFAULT 'rare',
    evolves BOOLEAN
);
CREATE TABLE trainer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(150) NOT NULL ,
    team_size INTEGER NOT NULL,
    gym_badges INTEGER
    bike BOOLEAN DEFAULT false
);

INSERT INTO pokemon (evolves, rareness, weight, height, name)
VALUES
(true, 'com''mon', 5.5, 0.4, 'Pikachu');


INSERT INTO pokemon (name, height, weight, rareness, evolves)
VALUES
('Squirtle', 0.5, 9.0, 'rare', true),
('Politoed', 1.1, 33.9, 'rare', false),
('Tandemaus', 0.3, 1.8, 'uncommon', true),
('Machamp', 1.6, 130.0, 'normal', false),
('Mudkip', 0.4, 7.6, 'medium rare', 'true'),
('Onix', 8.8, 210.0, 'normal', true),
('Piplup', 0.4, 5.2, 'rare', true);
--  CREATE TABLE dogs (
--    id INTEGER PRIMARY KEY AUTOINCREMENT
--    name VARCHAR(50)
--    age_yrs NUMERIC(3,1)
--    breed VARCHAR(100)
--    weight_lbs INTEGER
--    microchipped BOOLEAN
--    );
