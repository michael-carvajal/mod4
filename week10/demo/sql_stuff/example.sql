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
    name VARCHAR(50) NOT NULL UNIQUE,
    team_size INTEGER,
    gym_badges INTEGER
    bike BOOLEAN
);
 CREATE TABLE dogs (
   id INTEGER PRIMARY KEY AUTOINCREMENT
   name VARCHAR(50)
   age_yrs NUMERIC(3,1)
   breed VARCHAR(100)
   weight_lbs INTEGER
   microchipped BOOLEAN
   );
