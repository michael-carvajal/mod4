SELECT * FROM puppies;
SELECT name, age_yrs, weight_lbs FROM puppies;

SELECT * FROM puppies
WHERE id = 5;

SELECT * FROM puppies
WHERE microchipped = 1 AND age_yrs < 1;
SELECT * FROM puppies
WHERE weight_lbs > 25 AND microchipped = 1;
