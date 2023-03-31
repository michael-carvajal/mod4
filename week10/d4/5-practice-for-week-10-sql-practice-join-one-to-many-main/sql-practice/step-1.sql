-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.
-- Your code here

.headers on
.mode column

SELECT bands.name, albums.title
FROM bands
JOIN albums ON (bands.id = albums.band_id);


SELECT bands.name, albums.title
FROM bands
JOIN albums ON (bands.id = albums.band_id)
WHERE num_sold < 20000;

-- SELECT albums.band_id FROM albums
-- JOIN bands ON (albums.band_id = )
