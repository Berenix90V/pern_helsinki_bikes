CREATE TABLE trips(

);

COPY trips
from 'fetch_data/data/test.csv'
DELIMITER ','
CSV HEADER;