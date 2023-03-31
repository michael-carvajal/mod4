-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
-- Your code here
SELECT musicians.first_name, instruments.type
from musicians
join musician_instruments ON (musicians.id = musician_instruments.musician_id)
join instruments ON (musician_instruments.instrument_id = instruments.id)

where instruments.type = "piano";
